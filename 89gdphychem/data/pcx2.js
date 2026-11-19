QuizWorld.registerChapter({
  id: 'pcx2',
  sections: [
    {
      id: 'pcx2-1',
      title: '第1節 低碳生活',
      levels: [
        {
          type: 'classification',
          title: '溫室效應的成因與衝擊',
          description: '把每一項拖到「溫室氣體從哪裡來」或「全球暖化帶來的衝擊」。',
          zones: [
            { id: 'cause', title: '溫室氣體從哪裡來', icon: '🏭' },
            { id: 'impact', title: '全球暖化帶來的衝擊', icon: '🌡️' }
          ],
          items: [
            { text: '大量使用化石燃料', zone: 'cause', explain: '燃燒煤、石油、天然氣會排放大量二氧化碳。' },
            { text: '使用石油製成的塑膠製品', zone: 'cause', explain: '塑膠以石油為原料，生產與處理過程都會排放溫室氣體。' },
            { text: '工廠排放二氧化碳', zone: 'cause', explain: '工廠運作會排放二氧化碳及其他溫室氣體。' },
            { text: '汽車行駛排放廢氣', zone: 'cause', explain: '汽車燃燒汽油會排放二氧化碳。' },
            { text: '處理廢棄物時排放溫室氣體', zone: 'cause', explain: '焚化、掩埋等廢棄物處理過程也會排放溫室氣體。' },
            { text: '熱浪、水災、旱災更頻繁', zone: 'impact', explain: '地球均溫上升使極端天氣更常發生。' },
            { text: '南北極冰層熔化', zone: 'impact', explain: '氣溫上升使極地冰層熔化。' },
            { text: '海平面大幅上升', zone: 'impact', explain: '冰層熔化使海平面上升，威脅沿海地區。' },
            { text: '糧食供需失衡、氣候難民', zone: 'impact', explain: '高溫缺水使不適合居住的區域增加，造成糧食問題與氣候難民。' },
            { text: '傳染病大流行、生物滅絕', zone: 'impact', explain: '溫度持續上升可能造成病毒變異、傳染病流行，甚至生物大滅絕。' }
          ],
          summary: '化石燃料、塑膠、工廠、汽車與廢棄物處理排放溫室氣體，使地球均溫上升，帶來極端天氣、海平面上升等衝擊。'
        },
        {
          type: 'order',
          title: '產品的生命週期',
          description: '一件商品從誕生到丟棄，依正確順序排列它的生命週期。',
          items: [
            { text: '原料取得（例如：雞的養殖）', explain: '生命週期從取得原料開始。' },
            { text: '製造（加工成商品）' },
            { text: '配送（運送到各地）' },
            { text: '銷售（在商店販賣）' },
            { text: '使用（消費者使用或食用）' },
            { text: '廢棄回收（丟棄、焚化或回收）', explain: '廢棄回收也會產生碳排放，必須計入碳足跡。' }
          ],
          summary: '產品生命週期：原料取得 → 製造 → 配送 → 銷售 → 使用 → 廢棄回收，每個階段的溫室氣體排放都算進碳足跡。'
        },
        {
          type: 'classification',
          title: '碳足跡觀念辨析',
          description: '判斷下列關於碳足跡的說法是否正確。',
          zones: [
            { id: 'correct', title: '正確觀念', icon: '✅' },
            { id: 'wrong', title: '常見迷思', icon: '❌' }
          ],
          items: [
            { text: '碳足跡換算成二氧化碳含量', zone: 'correct', explain: '碳足跡是把溫室氣體排放量換算成二氧化碳的含量。' },
            { text: '包含整個生命週期的排放', zone: 'correct', explain: '從原料取得到廢棄回收，直接或間接的排放都要算。' },
            { text: '廢棄回收也會產生碳排放', zone: 'correct', explain: '處理廚餘等廢棄物的過程也會排碳，須計入碳足跡。' },
            { text: '標籤數字代表碳足跡數值', zone: 'correct', explain: '臺灣碳足跡標籤上的數字（如 135 g）就是該產品的碳足跡。' },
            { text: '一人一天減少一公斤碳足跡', zone: 'correct', explain: '這是環境部宣導的減碳口號。' },
            { text: '只計算製造工廠的排放', zone: 'wrong', explain: '碳足跡要計算整個生命週期，不只製造階段。' },
            { text: '碳足跡只和交通工具有關', zone: 'wrong', explain: '幾乎所有人類活動，包括食衣住行，都能換算成碳足跡。' },
            { text: '標籤數字越大越環保', zone: 'wrong', explain: '數字越大代表排放越多，選購時應選碳足跡較小的商品。' },
            { text: '丟進垃圾桶後就不再排碳', zone: 'wrong', explain: '廢棄後的焚化、掩埋等處理仍會排放溫室氣體。' },
            { text: '只有工廠才需要計算碳足跡', zone: 'wrong', explain: '每個人都能用生活碳足跡計算器檢視自己的碳排放。' }
          ],
          summary: '碳足跡是產品整個生命週期排放的溫室氣體換算成二氧化碳的量；選擇碳足跡較小的商品，就是低碳生活的第一步。'
        }
      ]
    },
    {
      id: 'pcx2-2',
      title: '第2節 減塑行動',
      levels: [
        {
          type: 'classification',
          title: '5R 之一：從源頭減少',
          description: '把每一種做法拖到正確的 5R 類別。',
          zones: [
            { id: 'refuse', title: '拒絕（Refuse）', icon: '🚫' },
            { id: 'reduce', title: '減量（Reduce）', icon: '➖' },
            { id: 'reuse', title: '重複使用（Reuse）', icon: '🔁' }
          ],
          items: [
            { text: '不拿塑膠袋與免洗餐具', zone: 'refuse', explain: '塑膠袋、免洗餐具屬於拋棄式產品，應拒絕使用。' },
            { text: '不買過度包裝的商品', zone: 'refuse', explain: '包裝體積過大或層數過多是過度包裝，造成資源浪費。' },
            { text: '不買混用塑膠未標示的玩具', zone: 'refuse', explain: '混用不同塑膠又沒有標示成分，無法回收，最後只能焚化。' },
            { text: '不拿用一次就丟的不織布袋', zone: 'refuse', explain: '不織布含塑膠、組成複雜不利回收，常用一次就丟。' },
            { text: '減少購買不需要的物品', zone: 'reduce', explain: '減少使用產品，就能減少資源消耗與廢棄物。' },
            { text: '減少使用產品的數量', zone: 'reduce' },
            { text: '減少資源消耗與廢棄物', zone: 'reduce' },
            { text: '紙袋用過再拿來裝東西', zone: 'reuse', explain: '紙袋應重複使用，而不是用一次就丟。' },
            { text: '重複利用容器與袋子', zone: 'reuse' },
            { text: '不用的物品捐贈或出售', zone: 'reuse', explain: '把自己不再使用的物品捐贈或出售，也屬於重複使用。' }
          ],
          summary: '拒絕拋棄式、難回收與過度包裝的產品；減少使用量；容器、袋子重複使用，不用的物品捐贈或出售。'
        },
        {
          type: 'classification',
          title: '5R 之二：回收與再生',
          description: '把每一項拖到「回收（Recycle）」或「再生（Regenerate）」。',
          zones: [
            { id: 'recycle', title: '回收（Recycle）', icon: '♻️' },
            { id: 'regen', title: '再生（Regenerate）', icon: '🌱' }
          ],
          items: [
            { text: '到村里資源回收站分類', zone: 'recycle', explain: '養成隨手資源回收的習慣。' },
            { text: '便利商店回收電池與手機', zone: 'recycle', explain: '便利商店可回收電池、手機、筆電等。' },
            { text: '使用自動資源回收機', zone: 'recycle' },
            { text: '確實分類，避免進焚化廠', zone: 'recycle', explain: '分類不確實，回收物可能被送進焚化廠，影響後續再生。' },
            { text: '業者主動逆向回收包裝', zone: 'recycle', explain: '生產者延伸責任制：由業者主動回收商品包裝，處理後重複利用。' },
            { text: '製造業者繳回收清除處理費', zone: 'recycle', explain: '生產者延伸責任制：處理費用於補貼回收處理業者。' },
            { text: '以回收物為原料做新產品', zone: 'regen', explain: '再生是指以資源回收物為原料，製造新產品。' },
            { text: '回收寶特瓶製成運動球衣', zone: 'regen', explain: '回收物再製成新產品，屬於再生。' },
            { text: '減少消耗地球原生資源', zone: 'regen', explain: '再生可以減少消耗地球資源。' },
            { text: '讓資源永續循環利用', zone: 'regen', explain: '再生讓回收物有去處，積極做到資源永續。' }
          ],
          summary: '回收是收集廢棄物中可再利用的資源，且要確實分類；再生是用回收物製造新產品，讓資源永續。'
        },
        {
          type: 'classification',
          title: '塑膠回收標誌',
          description: '把常見塑膠產品拖到對應的回收標誌。',
          zones: [
            { id: 'pet', title: '①PET（聚對酞酸乙二酯）', icon: '1️⃣' },
            { id: 'pvc', title: '③PVC（聚氯乙烯）', icon: '3️⃣' },
            { id: 'pp', title: '⑤PP（聚丙烯）', icon: '5️⃣' },
            { id: 'ps', title: '⑥PS（聚苯乙烯）', icon: '6️⃣' }
          ],
          items: [
            { text: '寶特瓶瓶身', zone: 'pet', explain: '寶特瓶瓶身是 PET，通常不耐熱，應避免盛裝熱食。' },
            { text: '透明塑膠罐', zone: 'pet' },
            { text: '寶特瓶外膜', zone: 'pvc', explain: '一個寶特瓶有三種塑膠：瓶身 PET、外膜 PVC、瓶蓋 PP。' },
            { text: '水管與雨衣', zone: 'pvc' },
            { text: '寶特瓶瓶蓋', zone: 'pp', explain: '寶特瓶瓶蓋是 PP。' },
            { text: '可微波容器', zone: 'pp' },
            { text: '較耐熱，可用於微波加熱', zone: 'pp', explain: '表中只有 PP 標示較耐熱、可微波加熱。' },
            { text: '水桶與垃圾桶', zone: 'pp' },
            { text: '保麗龍', zone: 'ps', explain: '保麗龍是 PS，不耐熱，應避免盛裝熱食。' },
            { text: '乳酸飲料瓶', zone: 'ps' }
          ],
          summary: '寶特瓶瓶身 PET、外膜 PVC、瓶蓋 PP；保麗龍是 PS；只有 PP 較耐熱、可微波。'
        },
        {
          type: 'classification',
          title: '線性經濟 vs 循環經濟',
          description: '把每一項拖到「線性經濟（傳統）」或「循環經濟（永續）」。',
          zones: [
            { id: 'linear', title: '線性經濟（傳統）', icon: '➡️' },
            { id: 'circular', title: '循環經濟（永續）', icon: '🔄' }
          ],
          items: [
            { text: '原生物料→生產→消費→廢棄', zone: 'linear', explain: '傳統物料思維是一條直線，最後變成廢棄物。' },
            { text: '用完就丟產生大量廢棄物', zone: 'linear' },
            { text: '不斷消耗原生物料', zone: 'linear' },
            { text: '只重視製造更多產品', zone: 'linear', explain: '循環經濟鼓勵以提供「服務」取代無止盡的產品「製造」。' },
            { text: '回收物變成再生物料', zone: 'circular', explain: '透過再生讓回收物回到生產鏈，減少廢棄物。' },
            { text: '產品設計耐用、易維修', zone: 'circular', explain: '產品設計要耐用、易維修、可回收、可再生。' },
            { text: '以「使用」取代「擁有」', zone: 'circular', explain: '消費者以使用取代擁有，減少不必要的浪費。' },
            { text: '飛灰變成水泥廠原料', zone: 'circular', explain: '丹麥卡倫堡工業區把發電廠的飛灰送給水泥廠當原料。' },
            { text: '目標是達到零廢棄物', zone: 'circular' },
            { text: 'SDGs負責任的消費與生產', zone: 'circular', explain: '聯合國永續發展目標第 12 項，強調生產者與消費者共同負起責任。' }
          ],
          summary: '線性經濟「生產→消費→廢棄」；循環經濟讓廢棄物變成再生原料，目標是零廢棄物，符合 SDGs「負責任的消費與生產」。'
        }
      ]
    }
  ]
});
