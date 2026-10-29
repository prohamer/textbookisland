/* 資料登記處：curriculum.js 與各章資料檔透過這裡把內容交給引擎。
 * 這個檔案不需要修改。 */
window.QuizWorld = {
  curriculum: null,
  chapters: {},
  defineCurriculum(c) { this.curriculum = c; },
  registerChapter(d) {
    if (!d || !d.id) { console.error('registerChapter 缺少 id', d); return; }
    this.chapters[d.id] = d;
  }
};
