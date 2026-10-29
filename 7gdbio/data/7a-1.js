/* =========================================================
 * 七上 第1章 生命的特性（示範章節）
 * ⚠️ 示範內容依一般課綱撰寫，請教師對照課本確認後再給學生使用。
 *
 * 題型（type）：
 *   classification  分類題：items 的 zone 寫正確分類區的 id
 *   order           排序題：items 依「正確順序」排列，遊戲中會打亂
 *   formula         公式題：left = right[0] op right[1] ...，可加 distractors 干擾項
 * 每個選項可加 explain：答錯時會出現在錯誤記錄與證書上。
 * 每關可加 summary：過關時顯示的重點整理。
 * ========================================================= */
QuizWorld.registerChapter({
  id: '7a-1',
  sections: [
    {
      id: '7a-1-1',
      title: '1·1 生命現象',
      levels: [
        {
          type: 'classification',
          title: '生命現象大分類',
          description: '把每個現象拖到它所代表的生命現象。',
          zones: [
            { id: 'grow', title: '生長', icon: '📈' },
            { id: 'repro', title: '繁殖', icon: '🐣' },
            { id: 'sense', title: '感應', icon: '⚡' },
            { id: 'meta', title: '代謝', icon: '🔄' }
          ],
          items: [
            { text: '種子發芽長成幼苗', zone: 'grow' },
            { text: '毛毛蟲越長越大', zone: 'grow' },
            { text: '母雞孵出小雞', zone: 'repro' },
            { text: '細菌分裂成兩個', zone: 'repro' },
            { text: '含羞草被碰觸後葉片閉合', zone: 'sense', explain: '對外界刺激產生反應，屬於感應。' },
            { text: '植物的莖向光彎曲', zone: 'sense', explain: '對光的刺激產生反應，屬於感應。' },
            { text: '人吸入氧氣、呼出二氧化碳', zone: 'meta', explain: '體內進行化學反應並交換物質，屬於代謝。' },
            { text: '植物行光合作用製造養分', zone: 'meta' }
          ],
          summary: '生物具有生長、繁殖、感應、代謝等生命現象。'
        },
        {
          type: 'classification',
          title: '是生物嗎？',
          description: '判斷下列各項是生物還是非生物。',
          zones: [
            { id: 'life', title: '生物', icon: '🌱' },
            { id: 'nonlife', title: '非生物', icon: '🪨' }
          ],
          items: [
            { text: '草履蟲', zone: 'life' },
            { text: '香菇', zone: 'life' },
            { text: '珊瑚', zone: 'life', explain: '珊瑚是動物，石灰質骨骼由珊瑚蟲分泌而成。' },
            { text: '休眠中的種子', zone: 'life', explain: '種子休眠時仍在進行微弱的代謝，是活的。' },
            { text: '鐘乳石', zone: 'nonlife', explain: '鐘乳石會變大，是礦物沉積，不是生長。' },
            { text: '燃燒的火焰', zone: 'nonlife', explain: '火焰會消耗氧氣、會擴大，但沒有細胞，不是生物。' },
            { text: '掃地機器人', zone: 'nonlife' },
            { text: '天上的雲', zone: 'nonlife' }
          ],
          summary: '會變大、會動不代表是生物，要看是否具備各項生命現象與細胞構造。'
        },
        {
          type: 'order',
          title: '顯微鏡操作順序',
          description: '依照正確順序排列複式顯微鏡的操作步驟。',
          items: [
            { text: '將低倍物鏡轉到通光孔正上方' },
            { text: '調整光圈與反光鏡，使視野明亮' },
            { text: '放上玻片標本，以壓片夾固定' },
            { text: '從側面注視，轉粗調節輪使物鏡接近玻片', explain: '先從側面看，避免物鏡壓破玻片。' },
            { text: '眼睛看目鏡，反向轉粗調節輪至看到影像' },
            { text: '轉細調節輪使影像清晰' }
          ],
          summary: '先低倍、再對光、放玻片，從側面看著下降物鏡，最後由目鏡觀察往上調焦。'
        }
      ]
    },
    {
      id: '7a-1-2',
      title: '1·2 細胞',
      levels: [
        {
          type: 'classification',
          title: '動物細胞與植物細胞',
          description: '這些構造是只有植物細胞有，還是動、植物細胞都有？',
          zones: [
            { id: 'plant', title: '只有植物細胞有', icon: '🌿' },
            { id: 'both', title: '動、植物細胞都有', icon: '🤝' }
          ],
          items: [
            { text: '細胞壁', zone: 'plant' },
            { text: '葉綠體', zone: 'plant', explain: '葉綠體存在於植物可行光合作用的細胞中，動物細胞沒有。' },
            { text: '中央大液胞', zone: 'plant' },
            { text: '細胞膜', zone: 'both', explain: '植物細胞的細胞膜位在細胞壁內側。' },
            { text: '細胞核', zone: 'both' },
            { text: '細胞質', zone: 'both' },
            { text: '粒線體', zone: 'both', explain: '動、植物細胞都需要粒線體進行呼吸作用。' }
          ],
          summary: '細胞壁、葉綠體與中央大液胞是植物細胞的特徵。'
        },
        {
          type: 'classification',
          title: '構造與功能配對',
          description: '把每個描述配對到正確的細胞構造。',
          zones: [
            { id: 'mem', title: '細胞膜', icon: '🫧' },
            { id: 'nuc', title: '細胞核', icon: '🎯' },
            { id: 'chl', title: '葉綠體', icon: '🍃' },
            { id: 'mit', title: '粒線體', icon: '🔋' }
          ],
          items: [
            { text: '控制物質進出細胞', zone: 'mem' },
            { text: '動物細胞最外層的構造', zone: 'mem', explain: '動物細胞沒有細胞壁，最外層是細胞膜。' },
            { text: '含有遺傳物質', zone: 'nuc' },
            { text: '控制細胞的生命活動', zone: 'nuc' },
            { text: '進行光合作用', zone: 'chl' },
            { text: '含有葉綠素', zone: 'chl' },
            { text: '進行呼吸作用', zone: 'mit' },
            { text: '分解養分，釋放能量', zone: 'mit', explain: '粒線體進行呼吸作用分解養分，釋放能量供細胞使用。' }
          ],
          summary: '細胞膜管進出、細胞核管指揮、葉綠體做養分、粒線體放能量。'
        }
      ]
    },
    {
      id: '7a-1-3',
      title: '1·3 細胞所需的物質',
      levels: [
        {
          type: 'classification',
          title: '有機物與無機物',
          description: '將細胞中的物質分為有機物或無機物。',
          zones: [
            { id: 'org', title: '有機物', icon: '🥩' },
            { id: 'inorg', title: '無機物', icon: '💧' }
          ],
          items: [
            { text: '醣類', zone: 'org' },
            { text: '蛋白質', zone: 'org' },
            { text: '脂質', zone: 'org' },
            { text: '維生素', zone: 'org' },
            { text: '水', zone: 'inorg' },
            { text: '礦物質', zone: 'inorg' },
            { text: '二氧化碳', zone: 'inorg', explain: '二氧化碳雖然含碳，但歸類為無機物。' }
          ],
          summary: '細胞中含量最多的物質是水；醣類、蛋白質、脂質、維生素屬於有機物。'
        },
        {
          type: 'classification',
          title: '擴散與滲透',
          description: '這些現象是一般物質的擴散，還是水的滲透作用？',
          zones: [
            { id: 'diff', title: '物質的擴散', icon: '🌫️' },
            { id: 'osmo', title: '水的滲透作用', icon: '💦' }
          ],
          items: [
            { text: '香水味在教室裡傳開', zone: 'diff' },
            { text: '紅墨水在清水中慢慢散開', zone: 'diff' },
            { text: '氧氣由肺泡進入微血管', zone: 'diff' },
            { text: '青菜撒鹽後出水變軟', zone: 'osmo', explain: '外界濃度高，水分由細胞內往外移動，屬於滲透作用。' },
            { text: '葡萄乾泡水後膨脹', zone: 'osmo' },
            { text: '枯萎的青菜泡水後變挺', zone: 'osmo' }
          ],
          summary: '物質由高濃度往低濃度移動是擴散；水通過細胞膜的擴散稱為滲透。'
        }
      ]
    },
    {
      id: '7a-1-4',
      title: '1·4 從細胞到個體',
      levels: [
        {
          type: 'order',
          title: '動物體的組成層次',
          description: '由小到大排列動物體的組成層次。',
          items: [
            { text: '細胞' },
            { text: '組織' },
            { text: '器官' },
            { text: '器官系統', explain: '植物體沒有器官系統這個層次。' },
            { text: '個體' }
          ],
          summary: '動物體：細胞 → 組織 → 器官 → 器官系統 → 個體。'
        },
        {
          type: 'classification',
          title: '這是哪個層次？',
          description: '把每個例子放到它所屬的組成層次。',
          zones: [
            { id: 'cell', title: '細胞', icon: '🔵' },
            { id: 'tissue', title: '組織', icon: '🧵' },
            { id: 'organ', title: '器官', icon: '🫁' },
            { id: 'system', title: '器官系統', icon: '🗂️' }
          ],
          items: [
            { text: '神經細胞', zone: 'cell' },
            { text: '保衛細胞', zone: 'cell' },
            { text: '肌肉組織', zone: 'tissue' },
            { text: '輸導組織', zone: 'tissue', explain: '輸導組織是植物的組織，負責運輸水分與養分。' },
            { text: '心臟', zone: 'organ' },
            { text: '植物的葉', zone: 'organ', explain: '葉由多種組織組成，屬於器官。' },
            { text: '消化系統', zone: 'system' },
            { text: '神經系統', zone: 'system' }
          ],
          summary: '同類細胞組成組織，數種組織組成器官，多個器官合作成為器官系統。'
        },
        {
          type: 'classification',
          title: '單細胞或多細胞',
          description: '判斷下列生物是單細胞生物還是多細胞生物。',
          zones: [
            { id: 'uni', title: '單細胞生物', icon: '🦠' },
            { id: 'multi', title: '多細胞生物', icon: '🐸' }
          ],
          items: [
            { text: '草履蟲', zone: 'uni' },
            { text: '變形蟲', zone: 'uni' },
            { text: '酵母菌', zone: 'uni', explain: '酵母菌是單細胞的真菌。' },
            { text: '水綿', zone: 'multi', explain: '水綿由許多細胞連成絲狀，是多細胞藻類。' },
            { text: '青蛙', zone: 'multi' },
            { text: '香菇', zone: 'multi', explain: '香菇是多細胞的真菌。' }
          ],
          summary: '單細胞生物靠一個細胞完成所有生命現象。'
        }
      ]
    }
  ]
});
