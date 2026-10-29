/* =========================================================
 * 探險群島闖關引擎
 * 讀取 data/curriculum.js 與各章資料檔，自動產生地圖、關卡、證書。
 * 新增章節只需要新增資料檔，這個檔案不需要修改。
 * ========================================================= */
(function () {
  'use strict';
  const { useState, useEffect, useRef, useMemo, useCallback } = React;
  const html = htm.bind(React.createElement);
  const QW = window.QuizWorld;

  // ---------------------------------------------------------
  // 小工具
  // ---------------------------------------------------------
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  // 避免打亂後剛好是正確答案（排序題）
  const shuffleNotSame = (arr, sameFn) => {
    if (arr.length < 2) return arr.slice();
    for (let t = 0; t < 8; t++) { const s = shuffle(arr); if (!sameFn(s)) return s; }
    const s = arr.slice(); s.push(s.shift()); return s;
  };
  const fmtTime = (sec) => { sec = Math.max(0, Math.round(sec || 0)); const m = Math.floor(sec / 60), s = sec % 60; return `${m}:${String(s).padStart(2, '0')}`; };
  const fmtDate = (iso) => { if (!iso) return ''; const d = new Date(iso); return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`; };
  const starsFor = (wrong) => (wrong === 0 ? 3 : wrong <= 2 ? 2 : 1);
  const cx = (...a) => a.filter(Boolean).join(' ');

  // ---------------------------------------------------------
  // 儲存（瀏覽器 localStorage，失敗時仍可遊玩）
  // ---------------------------------------------------------
  const blankProgress = () => ({ v: 1, player: { name: '', cls: '', seat: '' }, font: 100, sec: {} });
  const Store = {
    key: 'quizworld',
    load() {
      try { const raw = localStorage.getItem(this.key); if (raw) { const p = JSON.parse(raw); if (p && p.sec) return Object.assign(blankProgress(), p); } } catch (e) { /* 無法讀取時用空白進度 */ }
      return blankProgress();
    },
    save(p) { try { localStorage.setItem(this.key, JSON.stringify(p)); return true; } catch (e) { return false; } },
    clear() { try { localStorage.removeItem(this.key); } catch (e) { /* ignore */ } }
  };

  // 進度碼：UTF-8 JSON → base64，加上簡單檢查碼避免複製不完整
  const sum = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h.toString(36); };
  const toB64 = (str) => { const bytes = new TextEncoder().encode(str); let bin = ''; bytes.forEach((b) => { bin += String.fromCharCode(b); }); return btoa(bin); };
  const fromB64 = (b64) => { const bin = atob(b64); const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0)); return new TextDecoder().decode(bytes); };
  const encodeCode = (prog, key) => { const body = toB64(JSON.stringify({ k: key, p: prog })); return `QW1.${sum(body)}.${body}`; };
  const decodeCode = (code, key) => {
    const c = (code || '').replace(/\s+/g, '');
    const m = c.match(/^QW1\.([a-z0-9]+)\.(.+)$/);
    if (!m) throw new Error('格式不對，請確認是從「匯出進度碼」複製的完整內容。');
    if (sum(m[2]) !== m[1]) throw new Error('進度碼不完整，可能少複製了一段，請重新複製。');
    const obj = JSON.parse(fromB64(m[2]));
    if (obj.k !== key) throw new Error('這是其他地圖的進度碼，無法匯入這張地圖。');
    if (!obj.p || !obj.p.sec) throw new Error('進度碼內容損壞。');
    return Object.assign(blankProgress(), obj.p);
  };

  // ---------------------------------------------------------
  // 整理資料：合併 curriculum 與各章題目
  // ---------------------------------------------------------
  function buildWorld(cur) {
    const books = cur.books.map((b) => ({
      ...b,
      chapters: b.chapters.map((ch) => {
        const data = QW.chapters[ch.id];
        const hasData = !!(data && Array.isArray(data.sections) && data.sections.length);
        const sections = hasData
          ? data.sections.map((s, i) => ({ id: s.id || `${ch.id}-${i + 1}`, title: s.title || `第 ${i + 1} 節`, levels: Array.isArray(s.levels) ? s.levels : [] }))
          : (ch.sections || []).map((t, i) => ({ id: `${ch.id}-${i + 1}`, title: t, levels: [] }));
        return { ...ch, book: b, hasData, sections, color: ch.color || '#2c7a8c', icon: ch.icon || '🏝️' };
      })
    }));
    return { ...cur, books };
  }
  const playableSections = (ch) => ch.sections.filter((s) => s.levels.length > 0);
  function chapterStatus(ch, prog) {
    const ps = playableSections(ch);
    const done = ps.filter((s) => prog.sec[s.id] && prog.sec[s.id].done).length;
    const stars = ps.reduce((a, s) => a + ((prog.sec[s.id] && prog.sec[s.id].best) || 0), 0);
    const time = ps.reduce((a, s) => a + ((prog.sec[s.id] && prog.sec[s.id].time) || 0), 0);
    const last = ps.map((s) => prog.sec[s.id] && prog.sec[s.id].at).filter(Boolean).sort().pop();
    return { total: ps.length, done, complete: ch.hasData && ps.length > 0 && done === ps.length, stars, maxStars: ps.length * 3, time, last };
  }
  // 章內依序：第 i 節需要前面所有可玩小節都完成
  function sectionState(ch, idx, prog) {
    const s = ch.sections[idx];
    if (!s.levels.length) return 'empty';
    if (prog.sec[s.id] && prog.sec[s.id].done) return 'done';
    for (let i = 0; i < idx; i++) {
      const p = ch.sections[i];
      if (p.levels.length && !(prog.sec[p.id] && prog.sec[p.id].done)) return 'locked';
    }
    return 'next';
  }

  // ---------------------------------------------------------
  // 圖示
  // ---------------------------------------------------------
  const I = {
    star: (on) => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z" fill=${on ? '#e4b03a' : '#ddd6c4'} stroke=${on ? '#b98a1d' : '#c9c1ab'} stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    lock: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`,
    check: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    back: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    map: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    menu: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
    redo: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    scroll: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4zM6 4a2 2 0 0 0-2 2v2h2M9 9h7M9 13h7M9 17h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    user: () => html`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 21a8 8 0 0 1 16 0z" fill="currentColor"/></svg>`
  };
  const Stars = ({ n, max = 3 }) => html`<span className="stars" aria-label=${`${n} 顆星`}>${Array.from({ length: max }, (_, i) => html`<span key=${i}>${I.star(i < n)}</span>`)}</span>`;

  function Medal({ ch, on, size = 96 }) {
    const st = {
      width: size + 'px', height: size + 'px', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto',
      background: on ? ch.color : '#dcd8cc',
      border: `${Math.max(3, size * 0.06)}px solid ${on ? '#e4b03a' : '#bdb7a8'}`,
      boxShadow: on ? 'inset 0 0 0 3px rgba(255,255,255,.55), 0 4px 0 rgba(0,0,0,.15)' : 'inset 0 0 0 3px rgba(255,255,255,.4)',
      fontSize: size * 0.46 + 'px', lineHeight: 1
    };
    return html`<div className="medal" style=${st} role="img" aria-label=${`${ch.title}徽章${on ? '（已解鎖）' : '（未解鎖）'}`}>
      <span style=${{ filter: on ? 'none' : 'grayscale(1)', opacity: on ? 1 : 0.45 }}>${ch.icon}</span>
    </div>`;
  }

  // ---------------------------------------------------------
  // 拖拉控制
  // - 觸控（iPad、手機）：用 Touch Events，在 touchstart 立刻 preventDefault
  //   （passive:false），瀏覽器就不會把手勢當成捲動而中斷拖曳（沿用 v4.1 作法）。
  // - 滑鼠、觸控筆：用 Pointer Events。
  // - 沒移動就放開 = 點一下（選取卡片）。
  // - 意外中斷（touchcancel、切換 App、視窗失焦）時完整清理。
  // 目前畫面上的關卡透過 Drag.bind() 提供 onDrop / onTap。
  // ---------------------------------------------------------
  const Drag = {
    st: null,
    h: null,                       // { onDrop(id, key), onTap(id), enabled }
    bind(h) { this.h = h; },
    _init(el, id, x, y, mode, key) {
      this.st = { id, el, mode, key, x0: x, y0: y, moved: false, ghost: null, over: null, offX: 0, offY: 0 };
    },
    begin() {
      const s = this.st;
      const r = s.el.getBoundingClientRect();
      s.offX = s.x0 - r.left; s.offY = s.y0 - r.top;
      const g = s.el.cloneNode(true);
      g.classList.remove('is-selected', 'is-ok', 'is-bad');
      g.classList.add('ghost');
      g.style.width = r.width + 'px'; g.style.height = r.height + 'px';
      g.style.left = r.left + 'px'; g.style.top = r.top + 'px';
      g.removeAttribute('id');
      document.body.appendChild(g);
      s.ghost = g;
      s.el.classList.add('is-source');
      document.body.classList.add('qw-dragging');
      s.moved = true;
    },
    target(x, y) {
      const hit = document.elementFromPoint(x, y);
      return hit ? hit.closest('[data-drop]') : null;
    },
    moveTo(x, y) {
      const s = this.st;
      if (!s) return;
      if (!s.moved) {
        if (Math.hypot(x - s.x0, y - s.y0) < 8) return;
        this.begin();
      }
      s.ghost.style.left = (x - s.offX) + 'px';
      s.ghost.style.top = (y - s.offY) + 'px';
      const edge = 90;   // 接近上下邊緣時自動捲動
      if (y < edge) window.scrollBy(0, -16);
      else if (y > window.innerHeight - edge - 60) window.scrollBy(0, 16);
      const t = this.target(x, y);
      if (t !== s.over) {
        if (s.over) s.over.classList.remove('is-over');
        if (t) t.classList.add('is-over');
        s.over = t;
      }
    },
    end(x, y, cancelled) {
      const s = this.st;
      if (!s) return;
      const t = s.moved && !cancelled ? this.target(x, y) : null;
      const { id, moved } = s;
      this.cleanup();
      const h = this.h;
      if (!h || !h.enabled || cancelled) return;
      if (moved) { if (t) h.onDrop(id, t.getAttribute('data-drop')); }
      else h.onTap(id);
    },
    cleanup() {
      const s = this.st;
      if (!s) return;
      if (s.ghost && s.ghost.parentNode) s.ghost.parentNode.removeChild(s.ghost);
      if (s.over) s.over.classList.remove('is-over');
      if (s.el) s.el.classList.remove('is-source');
      if (s.mode === 'pointer') { try { s.el.releasePointerCapture(s.key); } catch (err) { /* ignore */ } }
      document.body.classList.remove('qw-dragging');
      this.st = null;
    },

    // ----- 觸控 -----
    onTouchStart(e) {
      const card = e.target.closest && e.target.closest('.card[data-card]');
      if (!card || !Drag.h || !Drag.h.enabled) return;
      e.preventDefault();                      // 關鍵：阻止捲動、下拉刷新、長按選單
      if (Drag.st) return;                     // 已有一隻手指在拖
      const t = e.changedTouches[0];
      Drag._init(card, card.getAttribute('data-card'), t.clientX, t.clientY, 'touch', t.identifier);
    },
    findTouch(list) {
      const s = Drag.st;
      for (let i = 0; i < list.length; i++) if (list[i].identifier === s.key) return list[i];
      return null;
    },
    onTouchMove(e) {
      const s = Drag.st;
      if (!s || s.mode !== 'touch') return;
      const t = Drag.findTouch(e.changedTouches);
      if (!t) return;
      e.preventDefault();
      Drag.moveTo(t.clientX, t.clientY);
    },
    onTouchEnd(e) {
      const s = Drag.st;
      if (!s || s.mode !== 'touch') return;
      const t = Drag.findTouch(e.changedTouches);
      if (!t) return;
      e.preventDefault();
      Drag.end(t.clientX, t.clientY, e.type === 'touchcancel');
    },

    // ----- 滑鼠、觸控筆 -----
    onPointerDown(e) {
      if (e.pointerType === 'touch') return;   // 觸控交給 Touch Events
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      const card = e.target.closest && e.target.closest('.card[data-card]');
      if (!card || !Drag.h || !Drag.h.enabled || Drag.st) return;
      e.preventDefault();
      Drag._init(card, card.getAttribute('data-card'), e.clientX, e.clientY, 'pointer', e.pointerId);
      try { card.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    },
    onPointerMove(e) {
      const s = Drag.st;
      if (!s || s.mode !== 'pointer' || e.pointerId !== s.key) return;
      e.preventDefault();
      Drag.moveTo(e.clientX, e.clientY);
    },
    onPointerUp(e) {
      const s = Drag.st;
      if (!s || s.mode !== 'pointer' || e.pointerId !== s.key) return;
      Drag.end(e.clientX, e.clientY, e.type === 'pointercancel');
    }
  };
  const opt = { passive: false, capture: true };
  document.addEventListener('touchstart', Drag.onTouchStart, opt);
  document.addEventListener('touchmove', Drag.onTouchMove, opt);
  document.addEventListener('touchend', Drag.onTouchEnd, opt);
  document.addEventListener('touchcancel', Drag.onTouchEnd, opt);
  document.addEventListener('pointerdown', Drag.onPointerDown, opt);
  document.addEventListener('pointermove', Drag.onPointerMove, opt);
  document.addEventListener('pointerup', Drag.onPointerUp, opt);
  document.addEventListener('pointercancel', Drag.onPointerUp, opt);
  document.addEventListener('visibilitychange', () => { if (document.hidden) Drag.end(0, 0, true); });
  window.addEventListener('blur', () => Drag.end(0, 0, true));
  document.addEventListener('contextmenu', (e) => { if (e.target.closest && e.target.closest('.card')) e.preventDefault(); });

  // ---------------------------------------------------------
  // 單一關卡
  // ---------------------------------------------------------
  const TYPE_NAME = { classification: '分類題', order: '排序題', formula: '公式題' };

  function prepareLevel(level) {
    if (level.type === 'classification') {
      const cards = shuffle((level.items || []).map((it, i) => ({ id: 'c' + i, text: it.text, zone: it.zone, explain: it.explain })));
      return { cards, keys: (level.zones || []).map((z) => z.id), slotted: false };
    }
    if (level.type === 'order') {
      const base = (level.items || []).map((it, i) => ({ id: 'c' + i, text: it.text, idx: i, explain: it.explain }));
      const cards = shuffleNotSame(base, (s) => s.every((c, i) => c.idx === i));
      return { cards, keys: base.map((_, i) => 's' + i), slotted: true };
    }
    if (level.type === 'formula') {
      const right = level.right || [];
      const pieces = [{ text: level.left, role: 'L' }, ...right.map((t) => ({ text: t, role: 'R' })), ...(level.distractors || []).map((t) => ({ text: t, role: 'D' }))];
      const cards = shuffle(pieces.map((p, i) => ({ id: 'c' + i, ...p })));
      return { cards, keys: ['L', ...right.map((_, i) => 'R' + i)], slotted: true };
    }
    return { cards: [], keys: [], slotted: false, unsupported: true };
  }

  function Level({ level, onChecked, onNext, isLast, levelNo }) {
    const prep = useMemo(() => prepareLevel(level), [level]);
    const { cards, keys, slotted } = prep;
    const [place, setPlace] = useState({});            // cardId -> 位置（zone/slot key），未放為 undefined
    const [marks, setMarks] = useState({});            // cardId 或 slot key -> 'ok' | 'bad'
    const [selected, setSelected] = useState(null);
    const [solved, setSolved] = useState(false);
    const [msg, setMsg] = useState('');

    const where = (id) => place[id] || 'pool';
    const inLoc = (loc) => cards.filter((c) => where(c.id) === loc);

    const move = useCallback((id, to) => {
      if (solved) return;
      setPlace((prev) => {
        const from = prev[id] || 'pool';
        if (from === to) return prev;
        const next = { ...prev };
        if (slotted && to !== 'pool') {
          const occ = Object.keys(prev).find((k) => prev[k] === to && k !== id);
          if (occ) { if (from === 'pool') delete next[occ]; else next[occ] = from; }
        }
        if (to === 'pool') delete next[id]; else next[id] = to;
        return next;
      });
      setMarks({});
      setSelected(null);
      setMsg('');
    }, [solved, slotted]);

    // 點一下卡片：選取；已選取另一張且點的是已放置的卡片 → 移到那個位置
    const tap = (id) => {
      if (solved) return;
      if (selected && selected !== id && where(id) !== 'pool') { move(selected, where(id)); return; }
      setSelected(selected === id ? null : id);
    };
    const tapRef = useRef(tap); tapRef.current = tap;
    const moveRef = useRef(move); moveRef.current = move;
    useEffect(() => {
      Drag.bind({ onDrop: (id, key) => moveRef.current(id, key), onTap: (id) => tapRef.current(id), enabled: !solved });
      return () => { Drag.cleanup(); Drag.bind(null); };
    }, [solved]);
    // 鍵盤（Enter / 空白鍵）操作；滑鼠與觸控已由 Drag 處理
    const onCardClick = (e, id) => { e.stopPropagation(); if (e.detail === 0) tap(id); };
    const onZoneClick = (key) => { if (selected && !solved) move(selected, key); };
    const onKeyZone = (e, key) => { if ((e.key === 'Enter' || e.key === ' ') && selected) { e.preventDefault(); move(selected, key); } };

    const Card = (c, big) => html`<button type="button" key=${c.id} data-card=${c.id}
        className=${cx('card', big && 'big', selected === c.id && 'is-selected', marks[c.id] === 'ok' && 'is-ok', marks[c.id] === 'bad' && 'is-bad')}
        onClick=${(e) => onCardClick(e, c.id)}
        aria-pressed=${selected === c.id}>
        ${c.text}${marks[c.id] ? html`<span className="mark">${marks[c.id] === 'ok' ? '✓' : '✗'}</span>` : null}
      </button>`;

    // 完成度
    const placedCount = slotted ? keys.filter((k) => inLoc(k).length).length : cards.filter((c) => where(c.id) !== 'pool').length;
    const needCount = slotted ? keys.length : cards.length;
    const ready = placedCount === needCount;

    function check() {
      if (!ready || solved) return;
      const newMarks = {};
      let entries = [];
      if (level.type === 'classification') {
        const zt = (id) => ((level.zones || []).find((z) => z.id === id) || {}).title || id;
        cards.forEach((c) => {
          const ok = where(c.id) === c.zone;
          newMarks[c.id] = ok ? 'ok' : 'bad';
          if (!ok) entries.push({ text: c.text, yours: zt(where(c.id)), right: zt(c.zone), why: c.explain || '' });
        });
      } else if (level.type === 'order') {
        const items = level.items || [];
        keys.forEach((k, i) => {
          const c = inLoc(k)[0];
          const ok = c && c.idx === i;
          newMarks[c.id] = ok ? 'ok' : 'bad';
          if (!ok) entries.push({ text: `第 ${i + 1} 步`, yours: c.text, right: items[i].text, why: items[i].explain || '' });
        });
      } else if (level.type === 'formula') {
        const right = level.right || [];
        const ops = level.ops || Array(Math.max(0, right.length - 1)).fill(level.op || '×');
        const L = inLoc('L')[0];
        const Rs = right.map((_, i) => inLoc('R' + i)[0]);
        newMarks[L.id] = L.text === level.left ? 'ok' : 'bad';
        if (level.ordered) Rs.forEach((c, i) => { newMarks[c.id] = c.text === right[i] ? 'ok' : 'bad'; });
        else { const pool = right.slice(); Rs.forEach((c) => { const j = pool.indexOf(c.text); if (j >= 0) { pool.splice(j, 1); newMarks[c.id] = 'ok'; } else newMarks[c.id] = 'bad'; }); }
        const expr = (l, rs) => `${l} = ${rs.map((t, i) => (i ? ` ${ops[i - 1]} ` : '') + t).join('')}`;
        if (Object.values(newMarks).includes('bad')) entries.push({ text: '公式', yours: expr(L.text, Rs.map((c) => c.text)), right: expr(level.left, right), why: level.explain || '' });
      }
      const correct = entries.length === 0;
      setMarks(newMarks);
      setSelected(null);
      if (correct) { setSolved(true); setMsg(''); }
      else setMsg(level.type === 'formula' ? '公式有些位置不對，紅色的請再想想。' : `有 ${entries.length} 個位置不對，紅色的請再想想。`);
      onChecked({ correct, entry: correct ? null : { level: level.title, type: level.type, items: entries } });
    }
    function reset() { if (solved) return; setPlace({}); setMarks({}); setSelected(null); setMsg(''); }

    if (prep.unsupported) {
      return html`<div className="boot-err">這一關的題型「${level.type}」目前不支援，請通知老師修正資料檔。
        <div style=${{ marginTop: 10 }}><button className="btn btn-primary" onClick=${() => onNext()}>略過這一關</button></div></div>`;
    }

    const pool = html`<div className=${cx('pool')} data-drop="pool" onClick=${() => onZoneClick('pool')}>
        <h4>待放置的卡片 <span className="note">拖曳，或點一下卡片再點目標</span></h4>
        <div className="cards">${inLoc('pool').map((c) => Card(c, level.type === 'formula'))}</div>
        ${inLoc('pool').length === 0 ? html`<div className="empty">卡片都放好了</div>` : null}
      </div>`;

    let board = null;
    if (level.type === 'classification') {
      const zones = level.zones || [];
      board = html`<div className="board">
        ${pool}
        <div className=${cx('zones', 'n' + zones.length)}>
          ${zones.map((z) => html`<div key=${z.id} className=${cx('zone', selected && 'is-target')} data-drop=${z.id}
              role="button" tabIndex="0" aria-label=${'放到' + z.title}
              onClick=${() => onZoneClick(z.id)} onKeyDown=${(e) => onKeyZone(e, z.id)}>
              <h4><span className="ic">${z.icon || ''}</span>${z.title}</h4>
              <div className="cards">${inLoc(z.id).map((c) => Card(c))}</div>
            </div>`)}
        </div>
      </div>`;
    } else if (level.type === 'order') {
      board = html`<div className="board">
        ${pool}
        <div className="order-list">
          ${keys.map((k, i) => { const c = inLoc(k)[0]; return html`<div className="slot-row" key=${k}>
              <span className="no">${i + 1}</span>
              <div className=${cx('slot', selected && !c && 'is-target')} data-drop=${k} role="button" tabIndex="0" aria-label=${`第 ${i + 1} 步`}
                onClick=${() => onZoneClick(k)} onKeyDown=${(e) => onKeyZone(e, k)}>
                ${c ? Card(c) : html`<span className="hint">第 ${i + 1} 步放這裡</span>`}
              </div></div>`; })}
        </div>
      </div>`;
    } else if (level.type === 'formula') {
      const right = level.right || [];
      const ops = level.ops || Array(Math.max(0, right.length - 1)).fill(level.op || '×');
      const slot = (k, label) => { const c = inLoc(k)[0]; return html`<div key=${k} className=${cx('slot', selected && !c && 'is-target')} data-drop=${k} role="button" tabIndex="0" aria-label=${label}
          onClick=${() => onZoneClick(k)} onKeyDown=${(e) => onKeyZone(e, k)}>${c ? Card(c, true) : html`<span className="hint">?</span>`}</div>`; };
      board = html`<div>
        <div className="formula">
          ${slot('L', '等號左邊')}<span className="op">=</span>
          ${right.map((_, i) => html`<${React.Fragment} key=${i}>${i ? html`<span className="op">${ops[i - 1]}</span>` : null}${slot('R' + i, `等號右邊第 ${i + 1} 格`)}<//>`)}
        </div>
        ${!level.ordered && right.length > 1 ? html`<p className="note" style=${{ textAlign: 'center', marginTop: -6 }}>右邊的順序可以任意排列</p>` : null}
        ${pool}
      </div>`;
    }

    return html`<div>
      <div className="prompt">
        <span className="type-chip">第 ${levelNo} 關・${TYPE_NAME[level.type]}</span>
        <h2>${level.title}</h2>
        <p>${level.description || ''}</p>
      </div>
      ${board}
      ${solved ? html`<div className="clear-panel" role="status"><span className="ic">🎉</span><div><b>過關！</b>${level.summary ? html`<p>${level.summary}</p>` : null}</div></div>` : null}
      <div className="actionbar qw-gutter">
        <div className=${cx('msg', msg && 'bad')} role="status">${msg || (solved ? '' : ready ? '都放好了，可以檢查答案。' : `還有 ${needCount - placedCount} ${slotted ? '格' : '張'}沒放`)}</div>
        ${solved ? null : html`<button className="btn btn-soft" onClick=${reset}>${I.redo()}重放</button>`}
        ${solved
          ? html`<button className="btn btn-primary" onClick=${onNext} autoFocus>${isLast ? '完成本節' : '下一關'}</button>`
          : html`<button className="btn btn-primary" disabled=${!ready} onClick=${check}>${I.check()}${ready ? '檢查答案' : `尚未完成 ${placedCount}/${needCount}`}</button>`}
      </div>
    </div>`;
  }

  function Timer({ start }) {
    const [, tick] = useState(0);
    useEffect(() => { const t = setInterval(() => tick((n) => n + 1), 1000); return () => clearInterval(t); }, []);
    return html`<span className="num">${fmtTime((Date.now() - start) / 1000)}</span>`;
  }

  function Play({ chapter, section, onFinish, onExit }) {
    const [idx, setIdx] = useState(0);
    const startRef = useRef(Date.now());
    const acc = useRef({ attempts: 0, wrong: 0, log: [] });
    const [attempts, setAttempts] = useState(0);
    const levels = section.levels;
    useEffect(() => { window.scrollTo(0, 0); }, [idx]);
    const onChecked = ({ correct, entry }) => {
      acc.current.attempts += 1;
      if (!correct) { acc.current.wrong += 1; acc.current.log.push(entry); }
      setAttempts(acc.current.attempts);
    };
    const next = () => {
      if (idx < levels.length - 1) setIdx(idx + 1);
      else {
        const time = Math.round((Date.now() - startRef.current) / 1000);
        onFinish({ time, attempts: acc.current.attempts, wrong: acc.current.wrong, stars: starsFor(acc.current.wrong), log: acc.current.log });
      }
    };
    return html`<div className="play">
      <div className="playbar qw-gutter">
        <button className="btn btn-soft btn-icon" onClick=${onExit} aria-label="回到島嶼">${I.back()}</button>
        <div className="where"><small>${chapter.book.title}・${chapter.no === '跨科' ? '跨科主題' : '第' + chapter.no + '章'} ${chapter.title}</small><b>${section.title}</b></div>
        <div className="lvdots" aria-label=${`第 ${idx + 1} 關，共 ${levels.length} 關`}>
          ${levels.map((_, i) => html`<i key=${i} className=${i < idx ? 'done' : i === idx ? 'now' : ''}>${i < idx ? '✓' : i + 1}</i>`)}
        </div>
        <div className="meter"><span>⏱ <${Timer} start=${startRef.current} /></span><span>嘗試 <b className="num">${attempts}</b></span></div>
      </div>
      <div className="play-body qw-gutter">
        <${Level} key=${section.id + '-' + idx} level=${levels[idx]} levelNo=${idx + 1} isLast=${idx === levels.length - 1} onChecked=${onChecked} onNext=${next} />
      </div>
    </div>`;
  }

  // ---------------------------------------------------------
  // 地圖
  // ---------------------------------------------------------
  const SHAPES = [
    'M30,80 C20,50 55,25 95,28 C140,20 180,45 175,80 C172,112 135,128 95,124 C55,128 38,110 30,80Z',
    'M25,75 C28,40 70,30 100,35 C130,22 178,40 172,78 C168,105 150,125 110,122 C80,130 30,118 25,75Z',
    'M35,85 C15,60 45,30 85,32 C110,18 160,30 170,62 C182,95 150,125 105,120 C70,128 45,110 35,85Z'
  ];
  const JX = [-0.05, 0.06, -0.02, 0.04, -0.06, 0.03, 0.05, -0.04];

  function useWidth(ref) {
    const [w, setW] = useState(900);
    useEffect(() => {
      if (!ref.current) return;
      const update = () => setW(ref.current.clientWidth || 900);
      update();
      let ro = null;
      if (window.ResizeObserver) { ro = new ResizeObserver(update); ro.observe(ref.current); } else window.addEventListener('resize', update);
      return () => { if (ro) ro.disconnect(); else window.removeEventListener('resize', update); };
    }, [ref]);
    return w;
  }

  function SeaMap({ book, prog, onOpen }) {
    const ref = useRef(null);
    const W = useWidth(ref);
    const n = book.chapters.length;
    const cols = W < 560 ? 2 : 3;
    const rows = Math.ceil(n / cols);
    const colW = W / cols;
    const iw = Math.min(230, colW * 0.74);
    const shapeH = iw * 0.75;
    const rowH = shapeH + 96;
    const H = rows * rowH + 40;
    const pts = book.chapters.map((ch, i) => {
      const r = Math.floor(i / cols); let c = i % cols; if (r % 2) c = cols - 1 - c;
      const x = (c + 0.5) * colW + JX[i % JX.length] * colW;
      const y = 28 + r * rowH + shapeH / 2 + (c % 2 ? 14 : 0);
      return { x, y };
    });
    let d = '';
    pts.forEach((p, i) => {
      if (!i) { d = `M${p.x},${p.y}`; return; }
      const a = pts[i - 1]; const same = Math.abs(a.y - p.y) < rowH / 2;
      d += same ? ` C${(a.x + p.x) / 2},${a.y - 46} ${(a.x + p.x) / 2},${p.y + 46} ${p.x},${p.y}` : ` C${a.x + (a.x > W / 2 ? 90 : -90)},${a.y + rowH * 0.55} ${p.x + (p.x > W / 2 ? 90 : -90)},${p.y - rowH * 0.55} ${p.x},${p.y}`;
    });
    return html`<div className="sea" ref=${ref} style=${{ height: H + 'px' }}>
      <svg className="sea-route" viewBox=${`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
        <path d=${d} fill="none" stroke="rgba(255,255,255,.55)" stroke-width="4" stroke-dasharray="2 12" stroke-linecap="round" />
      </svg>
      <svg className="compass" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28" fill="none" stroke="#fff" stroke-width="2"/><path d="M32 6l6 26-6 26-6-26z" fill="#fff"/><path d="M32 6l6 26h-12z" fill="#e8603e"/><text x="32" y="5" text-anchor="middle" font-size="9" fill="#fff" font-weight="700">N</text></svg>
      ${book.chapters.map((ch, i) => {
        const st = chapterStatus(ch, prog);
        const p = pts[i];
        return html`<button key=${ch.id} className=${cx('island', !ch.hasData && 'is-building', st.complete && 'is-done')}
            style=${{ '--iw': iw + 'px', left: p.x - iw / 2 + 'px', top: p.y - shapeH / 2 + 'px' }}
            onClick=${() => onOpen(ch)} aria-label=${`${ch.title}，${ch.hasData ? `完成 ${st.done}/${st.total} 節` : '建置中'}`}>
          <svg className="shape" viewBox="0 0 200 150" aria-hidden="true">
            <path d=${SHAPES[i % 3]} transform="translate(-10,-8) scale(1.1)" fill="rgba(217,238,236,.35)" />
            <path d=${SHAPES[i % 3]} fill="#f1dfae" stroke="#d8bd7c" stroke-width="3" />
            <path d=${SHAPES[(i + 1) % 3]} transform="translate(30,22) scale(0.7)" fill=${st.complete ? ch.color : '#6e9b4c'} opacity=${st.complete ? 0.9 : 0.85} />
          </svg>
          <span className="emblem" aria-hidden="true">${ch.icon}</span>
          ${st.complete ? html`<svg className="flag" viewBox="0 0 40 50" aria-hidden="true"><path d="M8 4v44" stroke="#22343a" stroke-width="3"/><path d="M9 5h26l-7 8 7 8H9z" fill="#e4b03a" stroke="#b98a1d" stroke-width="1.5"/></svg>` : null}
          <span className="label">
            <span>${ch.no === '跨科' ? '跨科主題' : `第 ${ch.no} 章`}</span>
            <b>${ch.title}</b>
            ${!ch.hasData ? html`<span><span className="tag tag-build">建置中</span></span>`
              : st.complete ? html`<span><span className="tag tag-done">已解鎖徽章</span></span>`
              : html`<span className="num">完成 ${st.done} / ${st.total} 節</span>`}
          </span>
        </button>`;
      })}
    </div>`;
  }

  function MapView({ world, prog, bookId, setBookId, onOpen }) {
    const book = world.books.find((b) => b.id === bookId) || world.books[0];
    const all = world.books.flatMap((b) => b.chapters).filter((c) => c.hasData);
    const totalSec = all.reduce((a, c) => a + playableSections(c).length, 0);
    const doneSec = all.reduce((a, c) => a + chapterStatus(c, prog).done, 0);
    return html`<div className="map-wrap qw-gutter">
      <div className="map-head">
        <div className="book-tabs" role="group" aria-label="選擇冊別">
          ${world.books.map((b) => html`<button key=${b.id} aria-pressed=${b.id === book.id} onClick=${() => setBookId(b.id)}>${b.title}</button>`)}
        </div>
        <div className="voyage">
          <span>航海進度</span>
          <span className="bar"><i style=${{ width: (totalSec ? (doneSec / totalSec) * 100 : 0) + '%' }}></i></span>
          <span className="num">${doneSec} / ${totalSec} 節</span>
        </div>
      </div>
      <${SeaMap} book=${book} prog=${prog} onOpen=${onOpen} />
      <div className="map-legend">
        <span><span className="dot" style=${{ background: '#6e9b4c' }}></span>可探險</span>
        <span><span className="dot" style=${{ background: '#e4b03a' }}></span>已插旗、解鎖徽章</span>
        <span><span className="dot" style=${{ background: '#9aa7a8' }}></span>建置中</span>
      </div>
    </div>`;
  }

  // ---------------------------------------------------------
  // 島嶼（章）
  // ---------------------------------------------------------
  function ChapterView({ ch, prog, onBack, onPlay, onCert }) {
    const st = chapterStatus(ch, prog);
    return html`<div className="page"><div className="page-inner qw-gutter">
      <div className="crumb"><button className="btn btn-soft" onClick=${onBack}>${I.map()}回地圖</button></div>
      <div className="island-hero">
        <div className="badge-big"><${Medal} ch=${ch} on=${st.complete} size=${96} /></div>
        <div>
          <small className="note">${ch.book.title}・${ch.no === '跨科' ? '跨科主題' : '第 ' + ch.no + ' 章'}</small>
          <h2>${ch.title}</h2>
          <p>${ch.hasData
            ? st.complete ? `已插旗！共獲得 ${st.stars} / ${st.maxStars} 顆星。` : `完成 ${st.done} / ${st.total} 節。依序完成所有小節，就能解鎖本島徽章。`
            : '這座島的關卡還在建置中，敬請期待。'}</p>
          ${ch.hasData ? html`<div className="actions">
            <button className="btn btn-soft" disabled=${!st.complete} onClick=${onCert}>${I.scroll()}${st.complete ? '本島認證書' : '全部完成後可領取認證書'}</button>
          </div>` : null}
        </div>
      </div>
      <div className="trail">
        ${ch.sections.map((s, i) => {
          const state = sectionState(ch, i, prog);
          const r = prog.sec[s.id];
          const sub = state === 'done' ? `最佳 ${r.best} 星・用時 ${fmtTime(r.time)}・可重新挑戰`
            : state === 'next' ? `${s.levels.length} 關・點我開始`
            : state === 'locked' ? '完成上一節後解鎖'
            : '題目建置中';
          return html`<button key=${s.id} className=${cx('node', 'is-' + state)} disabled=${state === 'locked' || state === 'empty'}
              onClick=${() => onPlay(i)} aria-label=${`${s.title}，${sub}`}>
            <span className="pin">${state === 'locked' ? I.lock() : state === 'done' ? I.check() : i + 1}</span>
            <span><h3>${s.title}</h3><p>${sub}</p></span>
            <span>${state === 'done' ? html`<${Stars} n=${r.best} />` : null}</span>
          </button>`;
        })}
      </div>
    </div></div>`;
  }

  // ---------------------------------------------------------
  // 小節結果
  // ---------------------------------------------------------
  function ErrList({ log }) {
    if (!log || !log.length) return null;
    return html`<div className="errlist">
      ${log.map((e, i) => html`<div className="err" key=${i}>
        <h4>${e.level}</h4>
        <ul>${e.items.map((it, j) => html`<li key=${j}>
          <b>${it.text}</b>：<span className="yours">你放「${it.yours}」</span> → <span className="right">正確是「${it.right}」</span>
          ${it.why ? html`<span className="why">💡 ${it.why}</span>` : null}
        </li>`)}</ul>
      </div>`)}
    </div>`;
  }

  function ResultView({ ch, section, result, nextIdx, onAgain, onNext, onBack }) {
    return html`<div className="page"><div className="page-inner qw-gutter"><div className="result">
      <div className="result-head">
        <${Stars} n=${result.stars} />
        <h2>${result.stars === 3 ? '完美通過！' : result.stars === 2 ? '漂亮過關！' : '順利過關！'}</h2>
        <p className="note">${section.title}</p>
      </div>
      <div className="stat-row">
        <div className="stat"><small>用時</small><b>${fmtTime(result.time)}</b></div>
        <div className="stat"><small>檢查次數</small><b>${result.attempts}</b></div>
        <div className="stat"><small>答錯次數</small><b>${result.wrong}</b></div>
      </div>
      ${result.log.length ? html`<h3 style=${{ marginBottom: 10 }}>錯誤記錄與正確答案</h3><${ErrList} log=${result.log} />` : html`<p style=${{ textAlign: 'center' }}>一次都沒有答錯，太厲害了！</p>`}
      <div className="result-actions">
        <button className="btn btn-soft" onClick=${onAgain}>${I.redo()}再挑戰一次</button>
        <button className="btn btn-soft" onClick=${onBack}>${I.map()}回到島嶼</button>
        ${nextIdx != null ? html`<button className="btn btn-primary" onClick=${onNext}>下一節：${ch.sections[nextIdx].title}</button>` : null}
      </div>
    </div></div></div>`;
  }

  // ---------------------------------------------------------
  // 證書
  // ---------------------------------------------------------
  const who = (p) => p.player.name || '探險家';
  const whoLine = (p) => [p.player.cls && `${p.player.cls} 班`, p.player.seat && `${p.player.seat} 號`].filter(Boolean).join(' ');

  function ChapterCert({ ch, prog, world }) {
    const st = chapterStatus(ch, prog);
    const secs = playableSections(ch);
    const logs = secs.flatMap((s) => ((prog.sec[s.id] && prog.sec[s.id].log) || []).map((e) => ({ ...e, sec: s.title })));
    return html`<div className="cert">
      <div className="c-top">
        <${Medal} ch=${ch} on=${true} size=${110} />
        <div>
          <div className="c-kicker">${world.title}・${ch.book.title}</div>
          <h1>${ch.title} 探險認證書</h1>
          <div className="c-who">恭喜 <b>${who(prog)}</b> ${whoLine(prog)} 完成本島所有關卡</div>
        </div>
      </div>
      <table>
        <thead><tr><th>小節</th><th>星等</th><th>用時</th><th>檢查</th><th>答錯</th></tr></thead>
        <tbody>
          ${secs.map((s) => { const r = prog.sec[s.id] || {}; return html`<tr key=${s.id}><td>${s.title}</td><td>${'★'.repeat(r.best || 0)}${'☆'.repeat(3 - (r.best || 0))}</td><td className="n">${fmtTime(r.time)}</td><td className="n">${r.attempts || 0}</td><td className="n">${r.wrong || 0}</td></tr>`; })}
          <tr><td><b>合計</b></td><td><b>${st.stars} / ${st.maxStars}</b></td><td className="n"><b>${fmtTime(st.time)}</b></td><td className="n">${secs.reduce((a, s) => a + ((prog.sec[s.id] || {}).attempts || 0), 0)}</td><td className="n">${secs.reduce((a, s) => a + ((prog.sec[s.id] || {}).wrong || 0), 0)}</td></tr>
        </tbody>
      </table>
      ${logs.length ? html`<h3>錯誤記錄與正確答案（最近一次挑戰）</h3>
        ${logs.map((e, i) => html`<div className="c-err" key=${i}><b>${e.sec}・${e.level}</b><br/>
          ${e.items.map((it, j) => html`<div key=${j}>${it.text}：你放「${it.yours}」→ <span className="r">正確是「${it.right}」</span>${it.why ? `（${it.why}）` : ''}</div>`)}
        </div>`)}` : html`<h3>全部一次答對，零錯誤！</h3>`}
      <div className="c-foot"><span>完成日期：${fmtDate(st.last)}</span><span>${world.subtitle}</span></div>
    </div>`;
  }

  function MissionCert({ world, prog }) {
    const chs = world.books.flatMap((b) => b.chapters);
    const live = chs.filter((c) => c.hasData);
    const doneCh = live.filter((c) => chapterStatus(c, prog).complete).length;
    const totalSec = live.reduce((a, c) => a + playableSections(c).length, 0);
    const doneSec = live.reduce((a, c) => a + chapterStatus(c, prog).done, 0);
    const stars = live.reduce((a, c) => a + chapterStatus(c, prog).stars, 0);
    const time = live.reduce((a, c) => a + chapterStatus(c, prog).time, 0);
    return html`<div className="cert">
      <div className="c-top" style=${{ display: 'block' }}>
        <div className="c-kicker">${world.subtitle}</div>
        <h1>${world.title} 總任務報告</h1>
        <div className="c-who">探險家 <b>${who(prog)}</b> ${whoLine(prog)}</div>
      </div>
      ${world.books.map((b) => html`<div key=${b.id}>
        <h3>${b.title}</h3>
        <div className="badges">${b.chapters.map((c) => { const st = chapterStatus(c, prog); return html`<div key=${c.id}>
          <${Medal} ch=${c} on=${st.complete} size=${84} />
          <div style=${{ marginTop: 4, fontWeight: 700 }}>${c.title}</div>
          <div>${c.hasData ? `${st.done}/${st.total} 節` : '建置中'}</div></div>`; })}</div>
      </div>`)}
      <table>
        <thead><tr><th>島嶼</th><th>完成小節</th><th>星星</th><th>用時</th><th>狀態</th></tr></thead>
        <tbody>${live.map((c) => { const st = chapterStatus(c, prog); return html`<tr key=${c.id}>
          <td>${c.book.title}・${c.title}</td><td className="n">${st.done} / ${st.total}</td><td className="n">${st.stars} / ${st.maxStars}</td><td className="n">${fmtTime(st.time)}</td>
          <td>${st.complete ? '已插旗' : st.done ? '探險中' : '未開始'}</td></tr>`; })}
          <tr><td><b>合計</b></td><td className="n"><b>${doneSec} / ${totalSec}</b></td><td className="n"><b>${stars}</b></td><td className="n"><b>${fmtTime(time)}</b></td><td><b>${doneCh} 座島插旗</b></td></tr>
        </tbody>
      </table>
      <div className="c-foot"><span>產生日期：${fmtDate(new Date().toISOString())}</span><span>尚有 ${chs.length - live.length} 座島建置中</span></div>
    </div>`;
  }

  function CertModal({ title, filename, children, onClose }) {
    const ref = useRef(null);
    const [img, setImg] = useState(null);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState('');
    const make = async () => {
      if (!window.html2canvas) { setErr('圖片工具沒有載入，請確認網路連線後重新整理。'); return; }
      setBusy(true); setErr('');
      try {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        const canvas = await window.html2canvas(ref.current.firstElementChild, { scale: 2, backgroundColor: '#fffaf0', useCORS: true, logging: false });
        setImg(canvas.toDataURL('image/png'));
      } catch (e) { setErr('產生圖片失敗：' + e.message); }
      setBusy(false);
    };
    return html`<div className="modal-back" onClick=${(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal wide" role="dialog" aria-modal="true" aria-label=${title}>
        <h2>${title}</h2>
        ${img ? html`<div>
            <img className="cert-img" src=${img} alt=${title} />
            <p className="note" style=${{ marginTop: 10 }}>iPad：長按圖片選「加入照片」或「儲存影像」。電腦：按下載，或在圖片上按右鍵另存。</p>
          </div>`
          : html`<div className="cert-scroll" ref=${ref}>${children}</div>`}
        ${err ? html`<p className="danger">${err}</p>` : null}
        <div className="row">
          <button className="btn btn-soft" onClick=${onClose}>關閉</button>
          ${img ? html`<a className="btn btn-primary" href=${img} download=${filename}>下載圖片</a>`
            : html`<button className="btn btn-primary" disabled=${busy} onClick=${make}>${busy ? '產生中…' : '產生圖片'}</button>`}
        </div>
      </div>
    </div>`;
  }

  // ---------------------------------------------------------
  // 其他彈窗
  // ---------------------------------------------------------
  function Modal({ title, children, onClose }) {
    return html`<div className="modal-back" onClick=${(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label=${title}><h2>${title}</h2>${children}</div></div>`;
  }

  function PlayerModal({ prog, onSave, onClose }) {
    const [f, setF] = useState(prog.player);
    const set = (k) => (e) => setF({ ...f, [k]: e.target.value.slice(0, 20) });
    return html`<${Modal} title="探險家登記" onClose=${onClose}>
      <p>名字會印在認證書上。也可以先略過，之後在右上角修改。</p>
      <form onSubmit=${(e) => { e.preventDefault(); onSave(f); }}>
        <div className="field-row">
          <div className="field"><label htmlFor="pname">姓名</label><input id="pname" value=${f.name} onChange=${set('name')} autoComplete="off" /></div>
          <div className="field"><label htmlFor="pcls">班級</label><input id="pcls" value=${f.cls} onChange=${set('cls')} inputMode="numeric" autoComplete="off" /></div>
          <div className="field"><label htmlFor="pseat">座號</label><input id="pseat" value=${f.seat} onChange=${set('seat')} inputMode="numeric" autoComplete="off" /></div>
        </div>
        <div className="row"><button type="button" className="btn btn-soft" onClick=${onClose}>先略過</button><button type="submit" className="btn btn-primary">開始探險</button></div>
      </form>
    <//>`;
  }

  function CodeModal({ prog, storageKey, onImport, onClose }) {
    const [mode, setMode] = useState('out');
    const code = useMemo(() => encodeCode(prog, storageKey), [prog, storageKey]);
    const [copied, setCopied] = useState('');
    const [input, setInput] = useState('');
    const [err, setErr] = useState('');
    const [pending, setPending] = useState(null);
    const taRef = useRef(null);
    const copy = () => {
      const fallback = () => { if (taRef.current) { taRef.current.focus(); taRef.current.select(); } setCopied('已選取，請按「拷貝」。'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(() => setCopied('已複製進度碼。'), fallback);
      else fallback();
    };
    const tryImport = () => { setErr(''); try { setPending(decodeCode(input, storageKey)); } catch (e) { setErr(e.message); } };
    return html`<${Modal} title="進度碼" onClose=${onClose}>
      <div className="book-tabs" style=${{ background: '#ece6d6', marginBottom: 12 }}>
        <button aria-pressed=${mode === 'out'} onClick=${() => setMode('out')}>匯出</button>
        <button aria-pressed=${mode === 'in'} onClick=${() => setMode('in')}>匯入</button>
      </div>
      ${mode === 'out' ? html`<div>
          <p>換一台裝置時，把這串進度碼複製下來（例如傳到自己的信箱或雲端），在新裝置選「匯入」貼上即可。</p>
          <div className="field"><label htmlFor="codeout">你的進度碼</label><textarea id="codeout" ref=${taRef} readOnly value=${code}></textarea></div>
          <div className="row"><span className="note" style=${{ marginRight: 'auto' }}>${copied}</span><button className="btn btn-primary" onClick=${copy}>複製進度碼</button></div>
        </div>`
      : pending ? html`<div>
          <p>匯入後，這台裝置目前的進度會被取代為進度碼裡的內容（${pending.player.name || '未命名'}，已完成 ${Object.values(pending.sec).filter((s) => s.done).length} 節）。確定嗎？</p>
          <div className="row"><button className="btn btn-soft" onClick=${() => setPending(null)}>取消</button><button className="btn btn-primary" onClick=${() => onImport(pending)}>確定匯入</button></div>
        </div>`
      : html`<div>
          <div className="field"><label htmlFor="codein">貼上進度碼</label><textarea id="codein" value=${input} onChange=${(e) => setInput(e.target.value)} placeholder="QW1.…"></textarea></div>
          ${err ? html`<p className="danger">${err}</p>` : null}
          <div className="row"><button className="btn btn-primary" disabled=${!input.trim()} onClick=${tryImport}>檢查並匯入</button></div>
        </div>`}
    <//>`;
  }

  function MenuModal({ onPick, onClose }) {
    return html`<${Modal} title="選單" onClose=${onClose}>
      <div className="menu-list">
        <button className="btn btn-soft" onClick=${() => onPick('mission')}>${I.scroll()}總任務報告</button>
        <button className="btn btn-soft" onClick=${() => onPick('code')}>⇄ 進度碼（換裝置用）</button>
        <button className="btn btn-soft" onClick=${() => onPick('player')}>${I.user()}修改姓名、班級、座號</button>
        <button className="btn btn-soft danger" onClick=${() => onPick('reset')}>清除這台裝置的所有進度</button>
      </div>
      <div className="row"><button className="btn btn-soft" onClick=${onClose}>關閉</button></div>
    <//>`;
  }

  // ---------------------------------------------------------
  // 主程式
  // ---------------------------------------------------------
  function App({ world, loadErrors }) {
    const [prog, setProg] = useState(() => Store.load());
    const [view, setView] = useState({ name: 'map' });
    const [bookId, setBookId] = useState(world.books[0].id);
    const [modal, setModal] = useState(() => (Store.load().player.name ? null : { kind: 'player' }));
    const [playKey, setPlayKey] = useState(0);

    useEffect(() => { Store.save(prog); }, [prog]);
    useEffect(() => { document.documentElement.style.fontSize = prog.font + '%'; }, [prog.font]);
    useEffect(() => { window.scrollTo(0, 0); }, [view.name, view.ch && view.ch.id]);

    const font = (d) => setProg((p) => ({ ...p, font: Math.min(150, Math.max(70, p.font + d)) }));
    const openChapter = (ch) => setView({ name: 'chapter', ch });
    const play = (ch, i) => { setPlayKey((k) => k + 1); setView({ name: 'play', ch, idx: i }); };

    const finish = (ch, i, r) => {
      const s = ch.sections[i];
      const before = chapterStatus(ch, prog).complete;
      const old = prog.sec[s.id] || {};
      const rec = { done: true, at: new Date().toISOString(), firstAt: old.firstAt || new Date().toISOString(), time: r.time, attempts: r.attempts, wrong: r.wrong, stars: r.stars, best: Math.max(old.best || 0, r.stars), log: r.log, plays: (old.plays || 0) + 1 };
      const nextProg = { ...prog, sec: { ...prog.sec, [s.id]: rec } };
      setProg(nextProg);
      let nextIdx = null;
      for (let j = i + 1; j < ch.sections.length; j++) if (ch.sections[j].levels.length) { nextIdx = j; break; }
      setView({ name: 'result', ch, idx: i, result: r, nextIdx });
      if (!before && chapterStatus(ch, nextProg).complete) setModal({ kind: 'celebrate', ch });
    };

    const topbar = html`<header className="topbar qw-gutter">
      <div className="brand"><h1>${world.title}</h1><small>${world.subtitle}</small></div>
      <div className="tools">
        <button className="player-chip" onClick=${() => setModal({ kind: 'player' })}>${I.user()}<span>${prog.player.name || '登記名字'}</span></button>
        <div className="fontctl" role="group" aria-label="字體大小">
          <button onClick=${() => font(-10)} disabled=${prog.font <= 70} aria-label="縮小字體">A-</button>
          <button onClick=${() => font(10)} disabled=${prog.font >= 150} aria-label="放大字體">A+</button>
        </div>
        <button className="btn btn-soft btn-icon" onClick=${() => setModal({ kind: 'menu' })} aria-label="選單">${I.menu()}</button>
      </div>
    </header>`;

    let body = null;
    if (view.name === 'map') body = html`<${MapView} world=${world} prog=${prog} bookId=${bookId} setBookId=${setBookId} onOpen=${openChapter} />`;
    if (view.name === 'chapter') body = html`<${ChapterView} ch=${view.ch} prog=${prog} onBack=${() => setView({ name: 'map' })} onPlay=${(i) => play(view.ch, i)} onCert=${() => setModal({ kind: 'chcert', ch: view.ch })} />`;
    if (view.name === 'play') body = html`<${Play} key=${playKey} chapter=${view.ch} section=${view.ch.sections[view.idx]} onExit=${() => setView({ name: 'chapter', ch: view.ch })} onFinish=${(r) => finish(view.ch, view.idx, r)} />`;
    if (view.name === 'result') body = html`<${ResultView} ch=${view.ch} section=${view.ch.sections[view.idx]} result=${view.result} nextIdx=${view.nextIdx}
        onAgain=${() => play(view.ch, view.idx)} onNext=${() => play(view.ch, view.nextIdx)} onBack=${() => setView({ name: 'chapter', ch: view.ch })} />`;

    let m = null;
    if (modal) {
      const close = () => setModal(null);
      if (modal.kind === 'player') m = html`<${PlayerModal} prog=${prog} onClose=${close} onSave=${(pl) => { setProg((p) => ({ ...p, player: pl })); close(); }} />`;
      if (modal.kind === 'menu') m = html`<${MenuModal} onClose=${close} onPick=${(k) => setModal({ kind: k })} />`;
      if (modal.kind === 'code') m = html`<${CodeModal} prog=${prog} storageKey=${Store.key} onClose=${close} onImport=${(p) => { setProg(p); setView({ name: 'map' }); close(); }} />`;
      if (modal.kind === 'reset') m = html`<${Modal} title="清除所有進度？" onClose=${close}>
          <p>這台裝置上的姓名、星星、徽章與錯誤記錄都會刪除，無法復原。建議先到「進度碼」匯出備份。</p>
          <div className="row"><button className="btn btn-soft" onClick=${close}>取消</button>
          <button className="btn btn-primary" onClick=${() => { Store.clear(); setProg(blankProgress()); setView({ name: 'map' }); setModal({ kind: 'player' }); }}>確定清除</button></div><//>`;
      if (modal.kind === 'celebrate') m = html`<${Modal} title="解鎖新徽章！" onClose=${close}>
          <div className="celebrate"><div className="badge-big"><${Medal} ch=${modal.ch} on=${true} size=${160} /></div>
          <p>你完成了「${modal.ch.title}」的所有小節，在這座島插上旗子了！</p></div>
          <div className="row"><button className="btn btn-soft" onClick=${close}>繼續</button><button className="btn btn-primary" onClick=${() => setModal({ kind: 'chcert', ch: modal.ch })}>領取認證書</button></div><//>`;
      if (modal.kind === 'chcert') m = html`<${CertModal} title=${modal.ch.title + ' 探險認證書'} filename=${`${who(prog)}_${modal.ch.title}_認證書.png`} onClose=${close}><${ChapterCert} ch=${modal.ch} prog=${prog} world=${world} /><//>`;
      if (modal.kind === 'mission') m = html`<${CertModal} title="總任務報告" filename=${`${who(prog)}_${world.title}_總任務報告.png`} onClose=${close}><${MissionCert} world=${world} prog=${prog} /><//>`;
    }

    return html`<div className="qw-app">
      ${topbar}
      ${loadErrors.length ? html`<div className="qw-gutter"><div className="boot-err">部分章節資料載入失敗（請通知老師）：${loadErrors.join('、')}</div></div>` : null}
      ${body}
      ${m}
    </div>`;
  }

  // ---------------------------------------------------------
  // 啟動：依 curriculum 載入各章資料檔
  // ---------------------------------------------------------
  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = () => resolve(null);
      s.onerror = () => resolve(src);
      document.head.appendChild(s);
    });
  }
  async function boot() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const cur = QW.curriculum;
    if (!cur) { root.render(html`<div className="boot"><div className="boot-err">找不到 data/curriculum.js，請確認檔案位置。</div></div>`); return; }
    Store.key = cur.storageKey || 'quizworld';
    const files = cur.books.flatMap((b) => b.chapters).filter((c) => c.data).map((c) => c.data);
    const failed = (await Promise.all(files.map(loadScript))).filter(Boolean);
    const world = buildWorld(cur);
    root.render(html`<${App} world=${world} loadErrors=${failed} />`);
  }
  boot();
})();
