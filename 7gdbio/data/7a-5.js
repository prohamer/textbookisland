/* =========================================================
 * 七上第 5 章：生物的恆定性（7a-5）
 * ========================================================= */
QuizWorld.registerChapter({
  id: '7a-5',
  sections: [
    // =====================================================
    // 5·1 恆定性與體溫的恆定（4 關）
    // =====================================================
    {
      id: '7a-5-1',
      title: '5·1 恆定性與體溫的恆定',
      levels: [
        {
          title: '內溫動物與外溫動物（動物分類與行為）',
          description: '請將下列動物類別與生活行為，歸類到「內溫動物」或「外溫動物」：',
          type: 'classification',
          zones: [
            { id: 'endotherm', title: '內溫動物', icon: '🔥' },
            { id: 'ectotherm', title: '外溫動物', icon: '🦎' }
          ],
          items: [
            { text: '鳥類（如企鵝、麻雀）', zone: 'endotherm' },
            { text: '哺乳類（如北極熊、海豹、人類）', zone: 'endotherm' },
            { text: '在寒冷的南北極區較容易見到蹤跡', zone: 'endotherm', explain: '內溫動物有良好的產熱與保溫構造，因此比外溫動物更容易在寒冷的極區生存。' },
            { text: '大部分的魚類', zone: 'ectotherm' },
            { text: '兩生類（如青蛙、蟾蜍、山椒魚）', zone: 'ectotherm' },
            { text: '爬蟲類（如蛇、蜥蜴、烏龜、鱷）', zone: 'ectotherm' },
            { text: '昆蟲', zone: 'ectotherm', explain: '昆蟲等無脊椎動物也屬於外溫動物，體溫隨環境溫度改變。' },
            { text: '日出時蜥蜴晒太陽、冷熱時蛙躲石下', zone: 'ectotherm' }
          ],
          summary: '鳥類與哺乳類屬於「內溫動物」；魚類、兩生類、爬蟲類與昆蟲等則屬於「外溫動物」，常藉晒太陽或躲在石頭下、洞穴中來調節體溫。'
        },
        {
          title: '內溫動物與外溫動物（體溫調節特性）',
          description: '請比較兩類動物的體溫調節機制，歸類到「內溫動物」或「外溫動物」：',
          type: 'classification',
          zones: [
            { id: 'endotherm', title: '內溫動物', icon: '🔥' },
            { id: 'ectotherm', title: '外溫動物', icon: '🦎' }
          ],
          items: [
            { text: '利用本身代謝產生的熱量維持體溫', zone: 'endotherm' },
            { text: '體溫依賴消耗大量養分維持', zone: 'endotherm', explain: '內溫動物需靠自身代謝產熱維持體溫，因此需要消耗較多養分。' },
            { text: '具羽毛、毛髮或皮下脂肪防止散熱', zone: 'endotherm' },
            { text: '體溫維持在一定範圍，不隨環境變', zone: 'endotherm' },
            { text: '從外界環境中吸收熱量來維持體溫', zone: 'ectotherm', explain: '外溫動物主要靠外界環境吸收熱量，而非靠自身代謝產熱維持恆定體溫。' },
            { text: '體溫會隨著外界環境變化而改變', zone: 'ectotherm' },
            { text: '體溫高低溫差異大', zone: 'ectotherm', explain: '外溫動物的體溫隨環境溫度起伏，因此體溫的高低溫差異較大。' },
            { text: '天氣寒冷時活動力與代謝明顯降低', zone: 'ectotherm' }
          ],
          summary: '內溫動物依賴消耗大量養分進行代謝產熱，並藉羽毛、毛髮、皮下脂肪保溫，體溫維持一定範圍；外溫動物從環境吸收熱量，體溫隨環境改變且高低溫差異大。'
        },
        {
          title: '人體的體溫調節機制',
          description: '請判斷下列人體體溫調節反應，分別發生在「天氣炎熱／體溫過高」還是「天氣寒冷／體溫過低」時：',
          type: 'classification',
          zones: [
            { id: 'hot', title: '天氣炎熱／體溫過高', icon: '🥵' },
            { id: 'cold', title: '天氣寒冷／體溫過低', icon: '🥶' }
          ],
          items: [
            { text: '皮膚表面微血管擴張，血流量增加', zone: 'hot', explain: '體溫升高時，皮膚微血管擴張使血液量增加，以加速將體熱散失到外界。' },
            { text: '汗腺分泌汗液增加，蒸發帶走熱量', zone: 'hot' },
            { text: '活動力降低、食慾下降以減少產熱', zone: 'hot' },
            { text: '腦內體溫控制中樞開啟散熱機制', zone: 'hot' },
            { text: '皮膚表面微血管收縮，血流量減少', zone: 'cold', explain: '體溫降低時，流入皮膚表面微血管的血液量會減少，以降低熱量散失。' },
            { text: '肌肉藉由收縮和顫抖（打哆嗦）產熱', zone: 'cold' },
            { text: '食慾增加，獲取更多養分產生能量', zone: 'cold' },
            { text: '腦內體溫控制中樞開啟產熱與保溫', zone: 'cold' }
          ],
          summary: '體溫升高時，皮膚微血管擴張（血流量增加）、排汗增加以加速散熱，活動力降低以減少產熱；體溫降低時，皮膚微血管收縮（血流量減少）以減少散熱，肌肉顫抖、食慾增加以增加產熱。'
        },
        {
          title: '體溫恆定失調（熱衰竭、中暑與失溫）',
          description: '當人體體溫恆定失調時會引發危險，請將下列成因與症狀歸類到「熱衰竭」、「中暑」或「失溫」：',
          type: 'classification',
          zones: [
            { id: 'exhaustion', title: '熱衰竭', icon: '💦' },
            { id: 'stroke', title: '中暑', icon: '🌡️' },
            { id: 'hypothermia', title: '失溫', icon: '❄️' }
          ],
          items: [
            { text: '高溫下大量流汗致水分與鹽類流失', zone: 'exhaustion', explain: '熱衰竭是因為大量流汗導致水分和鹽類流失過多，影響循環功能。' },
            { text: '患者大量出汗，皮膚呈現溼冷蒼白', zone: 'exhaustion', explain: '大量流汗且皮膚溼冷蒼白是「熱衰竭」的特徵；無法流汗且皮膚乾熱潮紅才是「中暑」。' },
            { text: '因水分鹽類大量流失影響循環功能', zone: 'exhaustion' },
            { text: '高溫下體溫調節機制失衡無法流汗', zone: 'stroke', explain: '中暑是因為體溫調節機制已經失衡，導致患者無法排汗散熱。' },
            { text: '患者無法排汗，皮膚呈現熱乾潮紅', zone: 'stroke' },
            { text: '核心體溫異常飆高，可能危及生命', zone: 'stroke' },
            { text: '長時間處於寒冷環境，散熱大於產熱', zone: 'hypothermia' },
            { text: '體溫降至正常範圍以下，意識模糊', zone: 'hypothermia' }
          ],
          summary: '高溫環境下，若大量流汗導致水分與鹽類流失、皮膚溼冷蒼白稱為「熱衰竭」；若體溫調節中樞失衡、無法流汗且皮膚熱乾潮紅則稱為「中暑」；低溫下熱量散失過多則造成「失溫」。'
        }
      ]
    },

    // =====================================================
    // 5·2 呼吸與氣體的恆定（4 關）
    // =====================================================
    {
      id: '7a-5-2',
      title: '5·2 呼吸與氣體的恆定',
      levels: [
        {
          title: '生物的氣體交換構造',
          description: '請將下列生物進行氣體交換的構造與特徵，歸類到對應的呼吸構造：',
          type: 'classification',
          zones: [
            { id: 'gill', title: '鰓', icon: '🐟' },
            { id: 'trachea', title: '氣管', icon: '🦗' },
            { id: 'lung_skin', title: '肺與溼潤皮膚', icon: '🫁' },
            { id: 'plant', title: '氣孔、皮孔與根表皮', icon: '🌿' }
          ],
          items: [
            { text: '魚類在水中進行氣體交換的構造', zone: 'gill' },
            { text: '絲狀構造布滿微血管，於水中交換', zone: 'gill' },
            { text: '蝗蟲等昆蟲進行氣體交換的構造', zone: 'trachea', explain: '昆蟲體內有分支很細的「氣管系統」直接輸送氣體，不是用肺或鰓呼吸。' },
            { text: '分支很細，可直接讓氣體在裡面流動', zone: 'trachea' },
            { text: '人類、鳥類等陸生脊椎動物的構造', zone: 'lung_skin' },
            { text: '青蛙、山椒魚、蚯蚓薄而溼潤體表', zone: 'lung_skin', explain: '蚯蚓靠薄而溼潤的皮膚呼吸；青蛙與山椒魚除了用肺呼吸，溼潤的皮膚也能協助氣體交換。' },
            { text: '植物葉片的氣孔與樹木莖上的皮孔', zone: 'plant' },
            { text: '植物根部的表皮細胞與土壤換氣', zone: 'plant' }
          ],
          summary: '動物的呼吸構造皆具有「表面溼潤、表面積大、有利氣體擴散」的特徵（如魚的鰓、昆蟲的氣管、人的肺、蚯蚓與蛙的溼潤皮膚）；植物則靠葉的氣孔、莖的皮孔與根的表皮細胞進行氣體交換。'
        },
        {
          title: '人體的呼吸運動（吸氣與呼氣）',
          description: '請比較人體「吸氣」與「呼氣」時的構造變化及寶特瓶呼吸模型動作：',
          type: 'classification',
          zones: [
            { id: 'inhale', title: '吸氣', icon: '😮‍💨' },
            { id: 'exhale', title: '呼氣', icon: '💨' }
          ],
          items: [
            { text: '橫膈收縮下降', zone: 'inhale', explain: '吸氣時橫膈會往下移動（下降），使胸腔空間變大，不是上升！' },
            { text: '肋骨上舉', zone: 'inhale' },
            { text: '胸腔體積變大，肺也跟著擴大', zone: 'inhale' },
            { text: '外界空氣流入肺中', zone: 'inhale' },
            { text: '模型底部氣球膜往下拉，氣球脹大', zone: 'inhale', explain: '底部氣球膜相當於橫膈，往下拉代表橫膈下降、胸腔變大，模擬吸氣。' },
            { text: '橫膈舒張上升', zone: 'exhale', explain: '呼氣時橫膈向上恢復原狀（上升），使胸腔變小而排出氣體。' },
            { text: '肋骨下降', zone: 'exhale' },
            { text: '胸腔體積變小，肺也隨之縮小', zone: 'exhale' },
            { text: '肺內氣體排出體外', zone: 'exhale' },
            { text: '模型底部氣球膜放回，氣球縮小', zone: 'exhale' }
          ],
          summary: '肺沒有肌肉，需靠胸腔體積變化進行呼吸運動：吸氣時「肋骨上舉、橫膈下降（底部氣球膜下拉）→ 胸腔與肺變大」；呼氣時「肋骨下降、橫膈上升（氣球膜放回）→ 胸腔與肺變小」。'
        },
        {
          title: '呼吸運動與細胞呼吸作用',
          description: '請區分生理學上的「呼吸運動」與細胞內的「呼吸作用」：',
          type: 'classification',
          zones: [
            { id: 'breathing', title: '呼吸運動', icon: '🫁' },
            { id: 'respiration', title: '呼吸作用', icon: '⚡' }
          ],
          items: [
            { text: '呼氣與吸氣使氣體進出肺的動作', zone: 'breathing' },
            { text: '靠胸腔體積變化帶動肺部脹縮', zone: 'breathing' },
            { text: '平靜狀態下每分鐘約15～18次', zone: 'breathing' },
            { text: '血液二氧化碳增加會刺激腦幹加快', zone: 'breathing', explain: '劇烈運動使血液中「二氧化碳」濃度增加時，會刺激腦幹的呼吸中樞，使呼吸運動加快。' },
            { text: '細胞利用氧氣分解養分釋放能量', zone: 'respiration', explain: '細胞分解養分以產生能量的化學反應稱為「呼吸作用」，不是呼吸運動。' },
            { text: '在細胞的粒線體中進行化學反應', zone: 'respiration' },
            { text: '反應式：養分＋氧→二氧化碳＋水', zone: 'respiration' },
            { text: '動植物細胞隨時都在進行以獲能量', zone: 'respiration' }
          ],
          summary: '「呼吸運動」是指胸腔帶動肺部吸氣與呼氣的動作（受血液中二氧化碳濃度刺激腦幹調節）；「呼吸作用」則是細胞在粒線體內利用氧氣分解養分，產生二氧化碳、水與能量的化學反應。'
        },
        {
          title: '實驗 5·2 呼出氣體的檢測',
          description: '在呼吸作用的觀察實驗中，請將下列特性與現象歸類到對應的檢測劑：',
          type: 'classification',
          zones: [
            { id: 'cobalt', title: '氯化亞鈷試紙（測水氣）', icon: '💧' },
            { id: 'limewater', title: '澄清石灰水（測二氧化碳）', icon: '🥛' }
          ],
          items: [
            { text: '乾燥時呈藍色，遇水氣變粉紅色', zone: 'cobalt', explain: '乾燥的氯化亞鈷試紙為藍色，遇到水分後會變為粉紅色。' },
            { text: '放在鼻前呼氣數次可檢測呼出水氣', zone: 'cobalt' },
            { text: '實驗前若呈粉紅色需先烘乾變藍色', zone: 'cobalt' },
            { text: '遇到二氧化碳會產生白色沉澱混濁', zone: 'limewater' },
            { text: '人呼氣吹入後會由澄清變成混濁', zone: 'limewater' },
            { text: '已萌芽綠豆呼吸旺盛使其變混濁', zone: 'limewater', explain: '已萌芽綠豆呼吸作用旺盛，會產生大量二氧化碳，使澄清石灰水變混濁。' },
            { text: '從漏斗加水可將錐形瓶氣體擠入檢測', zone: 'limewater' }
          ],
          summary: '人和植物行呼吸作用都會釋出二氧化碳與水氣：水氣可用「氯化亞鈷試紙」檢測（由藍色變粉紅色）；二氧化碳可用「澄清石灰水」檢測（產生白色沉澱變混濁）。'
        }
      ]
    },

    // =====================================================
    // 5·3 血糖的恆定（3 關）
    // =====================================================
    {
      id: '7a-5-3',
      title: '5·3 血糖的恆定',
      levels: [
        {
          title: '胰島素、升糖素與腎上腺素',
          description: '請比較人體調節血糖的三種重要激素，歸類到「胰島素」、「升糖素」或「腎上腺素」：',
          type: 'classification',
          zones: [
            { id: 'insulin', title: '胰島素', icon: '📉' },
            { id: 'glucagon', title: '升糖素', icon: '📈' },
            { id: 'adrenaline', title: '腎上腺素', icon: '🔥' }
          ],
          items: [
            { text: '由胰島分泌，可降低血糖濃度', zone: 'insulin', explain: '胰島素是人體唯一能降低血糖濃度的激素。' },
            { text: '飽餐後血糖濃度過高時分泌增加', zone: 'insulin' },
            { text: '促使葡萄糖快速進入細胞供利用', zone: 'insulin' },
            { text: '促葡萄糖進入肝臟與肌肉合成肝糖', zone: 'insulin', explain: '將血液中多餘的葡萄糖轉變成肝糖儲存，是胰島素降低血糖的方式。' },
            { text: '長期分泌不足或作用不佳致糖尿病', zone: 'insulin' },
            { text: '由胰島分泌，可提高血糖濃度', zone: 'glucagon', explain: '升糖素也是由胰臟內的「胰島」分泌，作用是提高血糖濃度。' },
            { text: '飢餓時血糖濃度過低會促進其分泌', zone: 'glucagon' },
            { text: '飢餓時促肝臟的肝糖分解為葡萄糖', zone: 'glucagon' },
            { text: '遭遇緊急狀況或運動時由腎上腺分泌', zone: 'adrenaline' },
            { text: '加快心跳血壓，並促肝糖分解升血糖', zone: 'adrenaline', explain: '緊張或運動時同時讓心跳血壓上升、肝糖分解提高血糖的是腎上腺素。' }
          ],
          summary: '胰島分泌的「胰島素」在飽餐血糖高時分泌，促細胞利用葡萄糖及合成肝糖以降低血糖；胰島分泌的「升糖素」在飢餓血糖低時促肝糖分解以提高血糖；「腎上腺素」則在運動或緊急狀況時提高血糖並加快心跳。'
        },
        {
          title: '飽餐後與飢餓時的血糖調節',
          description: '請判斷下列生理變化與調節反應，分別發生在「進食飽餐後」還是「飢餓未進食時」：',
          type: 'classification',
          zones: [
            { id: 'after_meal', title: '進食飽餐後', icon: '🍚' },
            { id: 'hungry', title: '飢餓未進食時', icon: '🥣' }
          ],
          items: [
            { text: '小腸絨毛吸收葡萄糖使血糖升高', zone: 'after_meal' },
            { text: '血液中胰島素的分泌量明顯增加', zone: 'after_meal', explain: '飽餐後血糖升高，會刺激胰島素分泌增加以降低血糖。' },
            { text: '肝臟與肌肉細胞將葡萄糖合成肝糖', zone: 'after_meal' },
            { text: '調節結果使偏高的血糖降回正常值', zone: 'after_meal' },
            { text: '細胞消耗葡萄糖使血糖濃度下降', zone: 'hungry' },
            { text: '引起食慾，提醒個體進食補充血糖', zone: 'hungry' },
            { text: '抑制胰島素分泌，促進升糖素分泌', zone: 'hungry', explain: '飢餓時血糖偏低，會抑制胰島素、促進升糖素分泌，使血糖回升。' },
            { text: '肝臟儲存的肝糖分解成葡萄糖入血', zone: 'hungry' }
          ],
          summary: '進食飽餐後血糖上升，胰島素分泌增加，將葡萄糖轉為肝糖儲存使血糖下降；飢餓時血糖下降，引起食慾並促進升糖素分泌，將肝糖分解為葡萄糖使血糖回升（這就是餓過頭反而覺得不餓的原因）。'
        },
        {
          title: '進食後的血糖調節順序',
          description: '請依序排列人體在「進食飽餐後」將血糖調節回正常範圍的先後順序：',
          type: 'order',
          items: [
            { text: '進食後，食物中的醣類經消化吸收進入血液' },
            { text: '血液中的血糖濃度升高（高於正常值 90 毫克／百毫升）' },
            { text: '刺激胰臟內的胰島，使胰島素分泌量增加' },
            { text: '促使葡萄糖進入細胞利用，並在肝臟與肌肉合成肝糖' },
            { text: '血糖濃度下降，恢復到正常範圍（約 90 毫克／百毫升）' }
          ],
          summary: '進食後醣類消化吸收 → 血糖升高（超過正常值約 90 毫克／百毫升）→ 胰島素分泌增加 → 促進細胞利用葡萄糖並合成肝糖儲存 → 血糖下降回到正常範圍（約 70～100 毫克／百毫升）！'
        }
      ]
    },

    // =====================================================
    // 5·4 排泄作用與水分的恆定（4 關）
    // =====================================================
    {
      id: '7a-5-4',
      title: '5·4 排泄作用與水分的恆定',
      levels: [
        {
          title: '含氮廢物的種類與排除方式',
          description: '蛋白質代謝後會產生含氮廢物，請將下列特性與生物歸類到「氨」、「尿素」或「尿酸」：',
          type: 'classification',
          zones: [
            { id: 'ammonia', title: '氨（毒性最大）', icon: '🐟' },
            { id: 'urea', title: '尿素（毒性次之）', icon: '🐕' },
            { id: 'uric_acid', title: '尿酸（毒性最小）', icon: '🐦' }
          ],
          items: [
            { text: '蛋白質代謝後直接產生的劇毒廢物', zone: 'ammonia' },
            { text: '水中單細胞生物與大多數魚類排出', zone: 'ammonia' },
            { text: '直接藉由擴散作用排入周圍水中', zone: 'ammonia' },
            { text: '哺乳類在肝臟中將氨轉變成此物質', zone: 'urea', explain: '尿素是在「肝臟」中由氨轉變而成，再由腎臟排出，不是在腎臟合成！' },
            { text: '由腎臟形成尿液，或由汗腺少量排出', zone: 'urea' },
            { text: '毒性較氨小，需溶解於水隨尿排出', zone: 'urea' },
            { text: '昆蟲與鳥類將氨轉變成此種廢物', zone: 'uric_acid' },
            { text: '混在糞便中排出，可減少水分散失', zone: 'uric_acid', explain: '鳥類與昆蟲將尿酸混在糞便中排出，可大幅減少排泄時的水分散失。' },
            { text: '三種含氮廢物中，對細胞毒性最小', zone: 'uric_acid' }
          ],
          summary: '含氮廢物毒性大小為「氨 ＞ 尿素 ＞ 尿酸」：水中單細胞生物與魚類直接藉擴散排出「氨」；哺乳類在肝臟將氨轉為「尿素」隨尿液排出；昆蟲與鳥類則轉為「尿酸」混在糞便中排出。'
        },
        {
          title: '人體的排泄器官與泌尿系統',
          description: '人體的肺、皮膚與腎臟皆屬於排泄器官，請將下列功能歸類到對應構造：',
          type: 'classification',
          zones: [
            { id: 'lungs', title: '肺', icon: '🫁' },
            { id: 'skin', title: '皮膚（汗腺）', icon: '💦' },
            { id: 'kidneys', title: '腎臟與泌尿系統', icon: '🫘' }
          ],
          items: [
            { text: '藉呼氣排出二氧化碳與水氣', zone: 'lungs', explain: '肺能排出細胞代謝產生的二氧化碳與水，因此也屬於排泄器官。' },
            { text: '能同時排出氣態廢物與水分的器官', zone: 'lungs' },
            { text: '藉流汗排除水分、鹽類與少量尿素', zone: 'skin' },
            { text: '兼具排泄廢物與排汗調節體溫功能', zone: 'skin' },
            { text: '位於腹腔背側、脊柱兩旁左右各一', zone: 'kidneys' },
            { text: '過濾血液，將有用物質再吸收回血', zone: 'kidneys' },
            { text: '濾出尿素、多餘水分與鹽類成尿液', zone: 'kidneys' },
            { text: '功能衰竭時需進行血液透析（洗腎）', zone: 'kidneys' },
            { text: '包含腎臟、輸尿管、膀胱與尿道', zone: 'kidneys' }
          ],
          summary: '排除細胞代謝廢物稱為「排泄」（排便屬於「排遺」不是排泄）：肺排出二氧化碳與水；皮膚汗腺排出水分、鹽類與少量尿素；腎臟過濾血液排出尿素、多餘水分與鹽類形成尿液。'
        },
        {
          title: '尿液形成與排出的路徑',
          description: '請依序排列人體處理含氮廢物並透過泌尿系統形成、排出尿液的順序：',
          type: 'order',
          items: [
            { text: '細胞代謝蛋白質，產生有毒的含氮廢物「氨」' },
            { text: '肝臟將有毒的氨轉變成毒性較小的「尿素」' },
            { text: '血液將尿素運送到腎臟，腎臟過濾血液形成尿液' },
            { text: '尿液經由輸尿管向下輸送' },
            { text: '送至膀胱暫時儲存，累積一定尿量產生尿意' },
            { text: '膀胱收縮，將尿液經由尿道排出體外' }
          ],
          summary: '蛋白質代謝產生「氨」→「肝臟」將氨轉為尿素 → 血液運送至「腎臟」過濾形成尿液 →「輸尿管」輸送 →「膀胱」儲存 →「尿道」排出體外！'
        },
        {
          title: '動植物維持水分恆定的方式',
          description: '請將下列調節水分的反應與構造，歸類到「人體缺水時」、「人體水分過多時」或「動植物防止水分散失」：',
          type: 'classification',
          zones: [
            { id: 'water_low', title: '人體缺水時', icon: '🚰' },
            { id: 'water_high', title: '人體水分過多時', icon: '🚽' },
            { id: 'prevent_loss', title: '動植物防止水分散失', icon: '🌿' }
          ],
          items: [
            { text: '血液水分太少，腦內指令產生口渴', zone: 'water_low' },
            { text: '藉由喝水補充，且腎臟減少排尿量', zone: 'water_low' },
            { text: '夏天流汗較多時，排尿量通常較少', zone: 'water_low' },
            { text: '腎臟濾出多餘水分，形成較多尿液', zone: 'water_high' },
            { text: '冬天流汗較少時，排尿量通常較多', zone: 'water_high' },
            { text: '昆蟲的外骨骼、爬蟲類的鱗片骨板', zone: 'prevent_loss' },
            { text: '人類皮膚的角質層', zone: 'prevent_loss' },
            { text: '陸生植物葉表角質層與樹木的樹皮', zone: 'prevent_loss' },
            { text: '植物在夜晚時關閉大多數的氣孔', zone: 'prevent_loss' }
          ],
          summary: '人體缺水時會感到口渴並減少排尿，水分過多時腎臟會增加排尿；陸生動物靠外骨骼、鱗片、骨板、皮膚角質防止水分散失，植物則靠角質層、樹皮與夜晚關閉氣孔來保水。'
        }
      ]
    }
  ]
});
