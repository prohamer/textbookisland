QuizWorld.registerChapter({
  id: 'pc0',
  sections: [
    {
      id: 'pc0-1',
      title: '第1節 實驗室安全守則',
      levels: [
        {
          type: 'classification',
          title: '進入實驗室的安全守則',
          description: '進入實驗室必須遵守安全守則，才能安心學習。請區分下列哪些是正確行為、哪些是違規行為。',
          zones: [
            { id: 'safe', title: '正確的實驗室行為', icon: '⭕' },
            { id: 'unsafe', title: '危險或違規的行為', icon: '❌' }
          ],
          items: [
            { text: '進入實驗室後先開窗保持通風', zone: 'safe', explain: '進入實驗室後應先開窗，保持空氣流通。' },
            { text: '穿著實驗衣並配戴手套與護目鏡', zone: 'safe', explain: '穿戴實驗衣、手套與護目鏡可預防意外傷害。' },
            { text: '長髮者實驗前先將頭髮紮起', zone: 'safe', explain: '長髮應紮起、衣服下襬紮好、袖扣扣好，避免碰觸火焰或藥品。' },
            { text: '廢棄物與未用完藥品分類集中處理', zone: 'safe', explain: '廢棄物或未用完藥品不可任意丟棄，應分類集中處理。' },
            { text: '操作完將器材洗淨並歸還排整齊', zone: 'safe', explain: '實驗結束後應將工作場所與器材清洗乾淨，歸還並排放整齊。' },
            { text: '在實驗室內飲食、追逐或嬉戲', zone: 'unsafe', explain: '實驗室內嚴禁飲食、追逐或嬉戲，以免誤食藥品或發生碰撞意外。' },
            { text: '老師未解說完就擅自動用藥品器材', zone: 'unsafe', explain: '老師未解說完畢前，不可擅自動用藥品、器材或設備。' },
            { text: '將未用完的藥品任意攜出實驗室', zone: 'unsafe', explain: '實驗室藥品不可任意攜出，必須留在實驗室分類集中處理。' }
          ],
          summary: '進入實驗室應先開窗通風、穿好防護裝備、聽從老師指導，嚴禁飲食嬉戲，並將廢棄藥品分類集中處理。'
        },
        {
          type: 'classification',
          title: '認識常見實驗器材',
          description: '請根據器材的功能與用途，將常見的實驗室器材歸類。',
          zones: [
            { id: 'container', title: '反應或加熱容器', icon: '🧪' },
            { id: 'liquid', title: '添加或傾倒液體', icon: '💧' },
            { id: 'evap_grind', title: '蒸發或研磨器材', icon: '🔥' }
          ],
          items: [
            { text: '試管：細長管狀，可盛放反應或加熱', zone: 'container', explain: '試管是細長管狀的玻璃器皿，可直接在火焰上加熱。' },
            { text: '燒杯：頂部有尖脣，可粗略估計體積', zone: 'container', explain: '燒杯常作為盛裝、反應或加熱容器，外壁刻度僅供粗略估計體積。' },
            { text: '錐形瓶：可直接搖晃使內容物混合', zone: 'container', explain: '錐形瓶口小底大，盛放液體反應時可直接搖晃而不易濺出。' },
            { text: '漏斗：搭配濾紙過濾或傾倒至窄口瓶', zone: 'liquid', explain: '漏斗可用來將液體傾倒至窄口容器中，或搭配濾紙進行過濾。' },
            { text: '薊頭漏斗：長管末端須沒入液體中', zone: 'liquid', explain: '用來添加液體到會產生氣體的容器中，長管末端沒入液面下可避免氣體逸出。' },
            { text: '滴管：用來吸取或添加少量液體', zone: 'liquid', explain: '滴管專門用來吸取或添加少量的液體。' },
            { text: '蒸發皿：用來蒸發溶液的陶瓷器具', zone: 'evap_grind', explain: '蒸發皿為陶瓷器具，用來加熱蒸發溶液以取得結晶。' },
            { text: '研缽及杵：磨碎物質用，不可加熱', zone: 'evap_grind', explain: '研缽及杵用來研磨磨碎物質，不可加熱，且不可研磨可能爆炸的物質。' }
          ],
          summary: '試管、燒杯、錐形瓶可作反應或加熱容器；漏斗、薊頭漏斗、滴管用於傾倒或添加液體；蒸發皿用於蒸發，研缽及杵只用於研磨且不可加熱。'
        },
        {
          type: 'classification',
          title: '熱源與容器的正確用法',
          description: '使用酒精燈加熱與操作量筒、試管等容器時，請區分哪些是正確做法、哪些是錯誤危險做法。',
          zones: [
            { id: 'correct', title: '正確操作方式', icon: '⭕' },
            { id: 'wrong', title: '錯誤危險操作', icon: '❌' }
          ],
          items: [
            { text: '酒精維持1/2～2/3，用漏斗加', zone: 'correct', explain: '酒精燈內的酒精應維持在 1/2～2/3 之間，不足時應熄火並用漏斗添加。' },
            { text: '不用酒精燈時以燈罩將火焰蓋熄', zone: 'correct', explain: '熄滅酒精燈時應以燈罩蓋熄，隔絕空氣滅火。' },
            { text: '打翻酒精燈著火時用溼抹布覆蓋', zone: 'correct', explain: '若不慎打翻酒精燈起火，應盡速用溼抹布覆蓋火焰滅火。' },
            { text: '燒杯放在陶瓷纖維網上加熱', zone: 'correct', explain: '燒杯、蒸發皿等容器加熱時，應放在陶瓷纖維網上使受熱均勻，或隔水加熱。' },
            { text: '讀量筒刻度時視線與液面中央等高', zone: 'correct', explain: '讀取量筒刻度時，視線必須與液面中央處等高。' },
            { text: '用已點燃的酒精燈引燃另一盞燈', zone: 'wrong', explain: '應以打火機或火柴點燃酒精燈，絕對不可兩燈互點，以免酒精灑出起火。' },
            { text: '直接用嘴將酒精燈的火焰吹熄', zone: 'wrong', explain: '用口吹熄可能使火焰縮入燈內引發氣爆，必須用燈罩蓋熄。' },
            { text: '加熱試管時將試管口對著人體', zone: 'wrong', explain: '加熱試管時應微傾使受熱均勻，但試管口絕對不可對著自己或他人，以防液體噴出傷人。' },
            { text: '在量筒中直接配製溶液或進行反應', zone: 'wrong', explain: '量筒只用來測量液體體積，不可在量筒中配製溶液、進行反應或加熱。' }
          ],
          summary: '酒精燈不互點、不嘴吹，熄火用燈罩、失火蓋溼布；量筒只用來量體積，不可配製溶液或反應，讀數時視線與液面中央等高。'
        },
        {
          type: 'classification',
          title: '藥品的調配與觀察',
          description: '取用、混合、稀釋與觀察化學藥品時，請判斷下列哪些是正確做法、哪些是危險做法。',
          zones: [
            { id: 'correct', title: '正確藥品操作', icon: '⭕' },
            { id: 'wrong', title: '錯誤危險操作', icon: '❌' }
          ],
          items: [
            { text: '必要時以手搧聞藥品的氣味', zone: 'correct', explain: '需要聞氣味時，應以手在容器口輕輕搧聞，避免吸入過量氣體。' },
            { text: '混合藥品時使用玻璃棒攪拌', zone: 'correct', explain: '混合溶液時應使用玻璃棒攪拌，或使藥品沿玻璃棒緩緩流入。' },
            { text: '稀釋濃酸時將濃酸緩緩加入水中', zone: 'correct', explain: '稀釋濃酸會放出大量熱，須將濃酸沿玻璃棒緩緩加入水中並攪拌。' },
            { text: '揮發性或有毒藥品在通風櫥內操作', zone: 'correct', explain: '使用有毒或高揮發性藥品時，應在通風櫥內進行操作。' },
            { text: '沾到藥品用大量清水沖洗並就醫', zone: 'correct', explain: '身體或眼睛不小心沾到藥品，應立即用大量清水沖洗並盡速就醫。' },
            { text: '將滴管直接伸入試液瓶吸取藥品', zone: 'wrong', explain: '應先將少許藥品倒入小燒杯或試管中再用滴管吸取，不可直接伸入試液瓶以免汙染整瓶藥品。' },
            { text: '混合藥品時使用溫度計來攪拌', zone: 'wrong', explain: '溫度計底部薄脆易破，絕對不可用來攪拌藥品，應使用玻璃棒。' },
            { text: '將眼睛與鼻子直接湊近聞藥品', zone: 'wrong', explain: '觀察藥品時不可將眼鼻湊近容器口，以免過量吸入或被噴濺灼傷。' }
          ],
          summary: '聞氣味用手搧聞、攪拌用玻璃棒（不可用溫度計）、稀釋濃酸要「酸入水」、沾到藥品立即用大量清水沖洗。'
        }
      ]
    },
    {
      id: 'pc0-2',
      title: '第2節 科學方法',
      levels: [
        {
          type: 'classification',
          title: '認識控制變因法',
          description: '在科學探究中，常使用「控制變因法」來釐清不同因素對事件的影響。請將下列特徵歸類到對應的變因。',
          zones: [
            { id: 'independent', title: '操縱變因', icon: '🎛️' },
            { id: 'controlled', title: '控制變因', icon: '🔒' },
            { id: 'dependent', title: '應變變因', icon: '📊' }
          ],
          items: [
            { text: '實驗時一次只改變的那一個因素', zone: 'independent', explain: '為了知道某因素對事件的影響，每次實驗只改變一個變因，稱為操縱變因。' },
            { text: '繪製關係圖時通常放在橫軸', zone: 'independent', explain: '製作實驗關係圖時，通常將操縱變因設在橫軸。' },
            { text: '實驗中其餘保持不變的多個因素', zone: 'controlled', explain: '除了操縱變因之外，其餘所有可能影響結果的因素都必須保持不變，稱為控制變因。' },
            { text: '維持相同以確保實驗公平比較', zone: 'controlled', explain: '固定控制變因，才能確定實驗結果的差異是由操縱變因所引起。' },
            { text: '隨操縱變因改變而獲得的結果', zone: 'dependent', explain: '因為改變操縱變因而產生的實驗結果或測量數據，稱為應變變因。' },
            { text: '繪製關係圖時通常放在縱軸', zone: 'dependent', explain: '製作實驗關係圖時，通常將應變變因設在縱軸。' }
          ],
          summary: '控制變因法中，每次只改變一個「操縱變因」（放橫軸），固定所有「控制變因」，並觀察測得結果「應變變因」（放縱軸）。'
        },
        {
          type: 'classification',
          title: '水溫與砂糖溶解時間實驗',
          description: '想了解「水溫高低與砂糖溶解時間的關係」，在相同燒杯加入等量的水，分別加熱至 30℃、40℃、50℃，再加入定量砂糖靜置並計時。請分類各變因。',
          zones: [
            { id: 'independent', title: '操縱變因', icon: '🎛️' },
            { id: 'controlled', title: '控制變因', icon: '🔒' },
            { id: 'dependent', title: '應變變因', icon: '📊' }
          ],
          items: [
            { text: '水溫的高低（30～50℃）', zone: 'independent', explain: '本實驗主動改變的條件是水溫的高低，屬於操縱變因。' },
            { text: '加入燒杯中的水量多寡', zone: 'controlled', explain: '各組燒杯加入的水量必須相等，屬於保持不變的控制變因。' },
            { text: '加入砂糖的質量與顆粒種類', zone: 'controlled', explain: '砂糖的量與種類都必須固定相同，屬於控制變因。' },
            { text: '實驗所使用的燒杯規格', zone: 'controlled', explain: '使用相同規格的燒杯以確保條件一致，屬於控制變因。' },
            { text: '砂糖完全溶解所需的時間', zone: 'dependent', explain: '隨著水溫改變而測得的砂糖完全溶解時間，是實驗結果，屬於應變變因。' },
            { text: '碼錶最終測得的秒數結果', zone: 'dependent', explain: '記錄表格中對應各水溫所測得的溶解秒數，屬於應變變因。' }
          ],
          summary: '在「水溫與砂糖溶解時間」實驗中，水溫是操縱變因，水量、砂糖量、燒杯規格是控制變因，溶解所需時間則是應變變因。'
        }
      ]
    },
    {
      id: 'pc0-3',
      title: '第3節 科學技能',
      levels: [
        {
          type: 'order',
          title: '繪製實驗關係圖的步驟',
          description: '將實驗數據整理成表格並繪製成關係圖，有助於分析操縱變因與應變變因的關係。請依正確順序排列步驟。',
          items: [
            { text: '將測量到的原始數據完整記錄在表格內', explain: '所有量測的原始數據都應先記錄在表格中。' },
            { text: '設定橫縱軸的變因項目、單位與適當刻度', explain: '通常將操縱變因放橫軸、應變變因放縱軸，兩軸皆需註明單位並選取適當刻度。' },
            { text: '根據兩軸刻度，將實驗數據點描繪在圖中的正確位置', explain: '依座標刻度將每一組實驗數據描點於作圖紙上。' },
            { text: '初步判斷數據分布趨勢，畫出平滑連續的直線或曲線', explain: '考慮測量誤差，畫出盡可能靠近數據點的平滑連續直線或曲線以代表趨勢。' }
          ],
          summary: '繪製關係圖時，先設橫軸（操縱變因）與縱軸（應變變因）並標單位與刻度，描點後再依趨勢畫出平滑連續的直線或曲線。'
        },
        {
          type: 'classification',
          title: '像科學家一樣思考',
          description: '科學家在探索自然時會運用各種科學技能。請將下列敘述歸類到對應的科學技能類別。',
          zones: [
            { id: 'obs_class', title: '觀察、提問與分類', icon: '👀' },
            { id: 'meas_chart', title: '測量與製作圖表', icon: '📏' },
            { id: 'infer', title: '推理與尋找證據', icon: '🔍' }
          ],
          items: [
            { text: '運用感官與工具進行觀察', zone: 'obs_class', explain: '運用感官做質性描述，或搭配工具做量化觀察。' },
            { text: '提出與科學有關且可驗證的問題', zone: 'obs_class', explain: '從觀察中提出可透過實驗驗證的科學問題。' },
            { text: '觀察異同並依特徵分門別類', zone: 'obs_class', explain: '比較事物的相似與相異處，依特徵或功能做分類。' },
            { text: '運用儀器與合適單位客觀測量', zone: 'meas_chart', explain: '感官感覺較主觀，運用儀器工具並使用合適單位（如公尺、公克）測量較客觀精確。' },
            { text: '把複雜數據轉化為長條圖或折線圖', zone: 'meas_chart', explain: '製作及使用圖表，能將複雜的數據視覺化，便於分析趨勢。' },
            { text: '找出支持證據以解釋數據結果', zone: 'infer', explain: '從實驗數據與圖表中尋找客觀的支持證據。' },
            { text: '根據證據提出合乎因果關係的解釋', zone: 'infer', explain: '依據找到的證據進行科學推理，提出合乎因果關係的解釋。' }
          ],
          summary: '像科學家一樣思考：運用感官與儀器「觀察與測量」、依特徵「分類與比較」、將數據「製作圖表」，並尋找證據進行合乎因果的「推理」。'
        }
      ]
    }
  ]
});
