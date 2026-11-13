/* =========================================================
 * 地圖結構：一張地圖 → 章（城堡／大關）→ 節（小關）
 * 跨版本通用：不寫年級、冊別、版本；章依學習順序排列並重新命名。
 * （各城堡對應課本哪一冊哪一章，寫在 work/章節對照.md，不上傳。）
 *
 * - theme: 'castle'：地圖畫成城堡王國（生物、地科沒寫 theme，仍是海島）。
 * - data：這一章題目資料檔的路徑。還沒做題目的章填 null，地圖上會顯示「施工中」。
 * - sections：目錄上的小節名稱，只在「還沒有題目資料」時用來預覽。
 *   有題目資料後，以資料檔裡的 sections 為準（可以合併、拆分、增減）。
 * - no：數字顯示為「第 N 城」；'跨科' 顯示為「跨科主題」；其他文字照原樣顯示。
 * - icon：一個表情符號，當作城堡與勳章圖示。
 * ========================================================= */
QuizWorld.defineCurriculum({
  title: '理化攻城記',
  subtitle: '國中理化',
  theme: 'castle',
  // 進度存在瀏覽器的名稱。必須和其他科目（biology_grade7_world_v1、earth_science_world_v1）不同。
  // 上線後不可再改，否則學生進度會消失。
  storageKey: 'physchem_world_v1',
  books: [
    {
      id: 'pc',
      title: '理化王國',
      chapters: [
        { id: 'pc0', no: '入門', title: '新手訓練營', icon: '🛡️', color: '#7a6a58', data: null,
          sections: ['第1節 實驗室安全守則', '第2節 科學方法', '第3節 科學技能'] },
        { id: 'pc1', no: '1', title: '測量城', icon: '📏', color: '#3a86b4', data: null,
          sections: ['1·1 長度與體積的測量', '1·2 質量與密度'] },
        { id: 'pc2', no: '2', title: '物質城', icon: '🧪', color: '#2f9c95', data: null,
          sections: ['2·1 物質的性質與分類', '2·2 水溶液與濃度', '2·3 空氣的成分'] },
        { id: 'pcx1', no: '跨科', title: '分離術要塞', icon: '🔍', color: '#8a7bc4', data: null,
          sections: ['第1節 物質的分離方法'] },
        { id: 'pc3', no: '3', title: '聲波城', icon: '🔊', color: '#d1495b', data: 'data/pc3.js',
          sections: ['3·1 波的傳播', '3·2 聲音的產生與傳播', '3·3 聲波的反射與超聲波', '3·4 響度、音調與音色'] },
        { id: 'pc4', no: '4', title: '光之城', icon: '💡', color: '#e0a526', data: 'data/pc4.js',
          sections: ['4·1 光的直進與光速', '4·2 光的反射與面鏡', '4·3 光的折射與透鏡', '4·4 光學儀器', '4·5 光與顏色'] },
        { id: 'pc5', no: '5', title: '熱能城', icon: '🔥', color: '#e07a3f', data: null,
          sections: ['5·1 溫度與溫度計', '5·2 熱量與比熱', '5·3 熱對物質的影響', '5·4 熱的傳播方式'] },
        { id: 'pc6', no: '6', title: '原子城', icon: '⚛️', color: '#4c6fb5', data: null,
          sections: ['6·1 元素的探索', '6·2 元素週期表', '6·3 原子與化合物', '6·4 分子與化學式'] },
        { id: 'pc7', no: '7', title: '化學反應城', icon: '⚖️', color: '#5f9e4a', data: null,
          sections: ['7·1 質量守恆', '7·2 原子量、莫耳與化學反應式'] },
        { id: 'pc8', no: '8', title: '氧化還原城', icon: '🔩', color: '#b5523b', data: null,
          sections: ['8·1 氧化反應與金屬活性', '8·2 氧化與還原'] },
        { id: 'pc9', no: '9', title: '酸鹼城', icon: '🍋', color: '#c9a227', data: null,
          sections: ['9·1 電解質', '9·2 常見的酸與鹼', '9·3 酸鹼濃度與 pH 值', '9·4 酸鹼中和'] },
        { id: 'pc10', no: '10', title: '反應速率城', icon: '⏱️', color: '#2f9c95', data: null,
          sections: ['10·1 影響反應速率的因素', '10·2 可逆反應與化學平衡'] },
        { id: 'pc11', no: '11', title: '有機城', icon: '🧴', color: '#8a7bc4', data: null,
          sections: ['11·1 認識有機化合物', '11·2 常見的有機化合物', '11·3 肥皂與清潔劑', '11·4 生活中的聚合物'] },
        { id: 'pcx2', no: '跨科', title: '減塑守護要塞', icon: '♻️', color: '#4f9a5f', data: null,
          sections: ['第1節 低碳生活', '第2節 減塑行動'] },
        { id: 'pc12', no: '12', title: '力與壓力城', icon: '🎈', color: '#d1495b', data: null,
          sections: ['12·1 力與力的平衡', '12·2 摩擦力', '12·3 壓力', '12·4 浮力'] },
        { id: 'pc13', no: '13', title: '運動城', icon: '🚄', color: '#3a86b4', data: 'data/pc13.js',
          sections: ['13·1 時間的測量', '13·2 位移與路徑長', '13·3 速率與速度', '13·4 加速度運動'] },
        { id: 'pc14', no: '14', title: '牛頓城', icon: '🍎', color: '#c0392b', data: 'data/pc14.js',
          sections: ['14·1 慣性定律', '14·2 運動定律', '14·3 作用力與反作用力', '14·4 圓周運動與萬有引力'] },
        { id: 'pc15', no: '15', title: '功與能城', icon: '🏗️', color: '#e07a3f', data: 'data/pc15.js',
          sections: ['15·1 功與功率', '15·2 動能、位能與能量守恆', '15·3 槓桿原理與靜力平衡', '15·4 簡單機械'] },
        { id: 'pc16', no: '16', title: '電路城', icon: '⚡', color: '#e0a526', data: null,
          sections: ['16·1 靜電現象', '16·2 電流', '16·3 電壓', '16·4 電阻與歐姆定律'] },
        { id: 'pc17', no: '17', title: '電能城', icon: '🔋', color: '#5f9e4a', data: null,
          sections: ['17·1 電流的熱效應與電功率', '17·2 家庭用電與安全', '17·3 電池', '17·4 電解與電鍍'] },
        { id: 'pc18', no: '18', title: '電磁城', icon: '🧲', color: '#4c6fb5', data: null,
          sections: ['18·1 磁鐵與磁場', '18·2 電流的磁效應', '18·3 電動機原理', '18·4 電磁感應'] }
      ]
    }
  ]
});
