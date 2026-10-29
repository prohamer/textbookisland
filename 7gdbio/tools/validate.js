#!/usr/bin/env node
/**
 * 探險群島資料檢查
 * 用法：node tools/validate.js           檢查 curriculum 與所有章節資料
 *       node tools/validate.js data/7a-2.js   只檢查這一章（仍會讀 curriculum）
 * ❌ 錯誤必須修正；⚠️ 警告請人工確認。有錯誤時以代碼 1 結束。
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const errors = [], warns = [];
const err = (m) => errors.push(m), warn = (m) => warns.push(m);

const QW = { curriculum: null, chapters: {}, _last: null,
  defineCurriculum(c) { this.curriculum = c; },
  registerChapter(d) { this._last = d; if (d && d.id) this.chapters[d.id] = d; } };
function run(file) {
  const src = fs.readFileSync(file, 'utf8');
  try { vm.runInNewContext(src, { QuizWorld: QW, console }, { filename: file }); return true; }
  catch (e) { err(`${path.relative(ROOT, file)} 有語法錯誤，整個檔案無法讀取：${e.message}`); return false; }
}

// ---------- curriculum ----------
const curFile = path.join(ROOT, 'data/curriculum.js');
if (!fs.existsSync(curFile) || !run(curFile) || !QW.curriculum) { console.log('❌ 讀不到 data/curriculum.js'); process.exit(1); }
const cur = QW.curriculum;
if (!/^[a-z0-9_]+$/.test(cur.storageKey || '')) err('curriculum 的 storageKey 只能用英文小寫、數字、底線');
const allCh = [];
const chIds = new Set();
(cur.books || []).forEach((b) => (b.chapters || []).forEach((ch) => {
  allCh.push(ch);
  if (chIds.has(ch.id)) err(`curriculum：章 id「${ch.id}」重複`);
  chIds.add(ch.id);
  if (!ch.title) err(`curriculum：${ch.id} 沒有 title`);
  if (!ch.icon) warn(`curriculum：${ch.id} 沒有 icon，會用預設圖示`);
  if (ch.color && !/^#[0-9a-fA-F]{6}$/.test(ch.color)) err(`curriculum：${ch.id} 的 color「${ch.color}」要寫成 #RRGGBB`);
  if (ch.data && !fs.existsSync(path.join(ROOT, ch.data))) err(`curriculum：${ch.id} 指定的資料檔 ${ch.data} 不存在`);
}));

// ---------- chapters ----------
const only = process.argv[2] ? path.resolve(process.argv[2]) : null;
const targets = allCh.filter((ch) => ch.data && (!only || path.resolve(ROOT, ch.data) === only));
if (only && !targets.length) err(`${process.argv[2]} 沒有被 curriculum 的任何一章引用（請在該章填上 data: '${path.relative(ROOT, only).replace(/\\/g, '/')}'）`);
const secIds = new Map();
let levelTotal = 0;

targets.forEach((ch) => {
  const file = path.join(ROOT, ch.data);
  if (!fs.existsSync(file)) return;
  QW._last = null;
  if (!run(file)) return;
  const d = QW._last;
  const W = `【${ch.title}】`;
  if (!d) { err(`${W}${ch.data} 沒有呼叫 QuizWorld.registerChapter(...)`); return; }
  if (d.id !== ch.id) err(`${W}資料檔的 id 是「${d.id}」，curriculum 是「${ch.id}」，兩者必須相同`);
  if (!Array.isArray(d.sections) || !d.sections.length) { err(`${W}沒有任何 sections`); return; }
  d.sections.forEach((s, si) => {
    const S = `${W}${s.title || '第' + (si + 1) + '節'}`;
    if (!s.id) err(`${S}：缺少 id（進度靠它記錄，請寫成「${ch.id}-${si + 1}」這種格式）`);
    else if (secIds.has(s.id)) err(`${S}：小節 id「${s.id}」和 ${secIds.get(s.id)} 重複，進度會混在一起`);
    else secIds.set(s.id, S);
    if (!s.title) err(`${S}：缺少 title`);
    const lv = s.levels || [];
    if (!lv.length) warn(`${S}：沒有關卡，地圖上會顯示「題目建置中」且不影響解鎖`);
    if (lv.length > 5) warn(`${S}：${lv.length} 關，一節建議 2–4 關`);
    lv.forEach((L, li) => {
      levelTotal++;
      const P = `${S} 第${li + 1}關「${L.title || '未命名'}」`;
      if (!L.title) err(`${P}：缺少 title`);
      if (!L.description) warn(`${P}：缺少 description（題目說明）`);
      if (L.type === 'classification') {
        const zones = L.zones || [], items = L.items || [];
        const zIds = zones.map((z) => z.id);
        if (zones.length < 2) err(`${P}：分類區至少要 2 個`);
        if (zones.length > 4) warn(`${P}：${zones.length} 個分類區，iPad 畫面建議最多 4 個`);
        zIds.filter((z, i) => zIds.indexOf(z) !== i).forEach((z) => err(`${P}：分類區 id「${z}」重複`));
        zones.forEach((z) => { if (!z.title) err(`${P}：分類區「${z.id}」沒有 title`); });
        if (items.length < 4 || items.length > 10) warn(`${P}：${items.length} 張卡片（建議 5–10 張）`);
        items.forEach((it) => {
          if (!it.text) err(`${P}：有一張卡片沒有 text`);
          if (!zIds.includes(it.zone)) err(`${P}：卡片「${it.text}」的 zone「${it.zone}」不存在，這關永遠無法答對`);
        });
        zones.forEach((z) => { if (!items.some((it) => it.zone === z.id)) err(`${P}：分類區「${z.title}」沒有任何正確卡片，請刪除或補卡片`); });
        const t = items.map((i) => i.text);
        t.filter((x, i) => t.indexOf(x) !== i).forEach((x) => warn(`${P}：卡片文字重複「${x}」`));
      } else if (L.type === 'order') {
        const items = L.items || [];
        if (items.length < 3) err(`${P}：排序題至少要 3 個步驟`);
        if (items.length > 8) warn(`${P}：${items.length} 個步驟，建議最多 8 個`);
        const t = items.map((i) => i.text);
        if (t.some((x) => !x)) err(`${P}：有步驟沒有 text`);
        t.filter((x, i) => t.indexOf(x) !== i).forEach((x) => err(`${P}：步驟文字重複「${x}」，學生無法分辨`));
      } else if (L.type === 'formula') {
        const right = L.right || [];
        if (!L.left) err(`${P}：缺少 left（等號左邊）`);
        if (!Array.isArray(right) || !right.length) err(`${P}：right 要是陣列，例如 ['M', 'S', 'ΔT']`);
        if (L.ops && L.ops.length !== right.length - 1) err(`${P}：ops 要有 ${right.length - 1} 個運算符號`);
        if (L.ops && L.ops.some((o) => o === '÷' || o === '-' || o === '−') && !L.ordered) warn(`${P}：有除號或減號時順序會影響答案，請加 ordered: true`);
        (L.distractors || []).forEach((x) => { if (x === L.left || right.includes(x)) err(`${P}：干擾項「${x}」和正確答案相同，會造成混淆`); });
      } else {
        err(`${P}：type「${L.type}」不支援，只能用 classification、order、formula`);
      }
    });
  });
});

// 檔案中有、但 curriculum 沒引用的資料檔
fs.readdirSync(path.join(ROOT, 'data')).filter((f) => f.endsWith('.js') && f !== 'curriculum.js').forEach((f) => {
  if (!allCh.some((c) => c.data === 'data/' + f)) warn(`data/${f} 沒有被 curriculum 引用，地圖上不會出現`);
});

// ---------- report ----------
console.log(`\n🗺️  ${cur.title}：${allCh.length} 座島，已有資料 ${allCh.filter((c) => c.data).length} 座；本次檢查 ${targets.length} 章、${secIds.size} 節、${levelTotal} 關\n`);
errors.forEach((m) => console.log('❌ ' + m));
warns.forEach((m) => console.log('⚠️  ' + m));
if (!errors.length && !warns.length) console.log('✅ 全部通過');
else console.log(`\n共 ${errors.length} 個錯誤、${warns.length} 個警告`);
process.exit(errors.length ? 1 : 0);
