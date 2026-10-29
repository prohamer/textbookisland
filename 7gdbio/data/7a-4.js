/* =========================================================
 * 七上第 4 章：生物的協調作用（7a-4）
 * ========================================================= */
QuizWorld.registerChapter({
  id: '7a-4',
  sections: [
    // =====================================================
    // 4·1 神經系統（5 關）
    // =====================================================
    {
      id: '7a-4-1',
      title: '4·1 神經系統',
      levels: [
        {
          title: '受器、動器與神經系統分類',
          description: '請將下列構造與功能，歸類到「受器」、「動器」、「中樞神經系統」或「周圍神經系統」：',
          type: 'classification',
          zones: [
            { id: 'receptor', title: '受器', icon: '👀' },
            { id: 'effector', title: '動器', icon: '💪' },
            { id: 'cns', title: '中樞神經系統', icon: '🧠' },
            { id: 'pns', title: '周圍神經系統', icon: '🕸️' }
          ],
          items: [
            { text: '眼睛、耳朵、鼻、舌、皮膚', zone: 'receptor' },
            { text: '負責接受外界或體內的環境刺激', zone: 'receptor' },
            { text: '肌肉與腺體（如唾腺、汗腺）', zone: 'effector', explain: '肌肉收縮或腺體分泌是產生反應的動器，不是受器。' },
            { text: '接獲命令後收縮或分泌產生反應', zone: 'effector' },
            { text: '包含腦與脊髓，負責整合訊息', zone: 'cns' },
            { text: '受頭骨或脊椎骨保護的神經中樞', zone: 'cns' },
            { text: '包含腦神經12對與脊神經31對', zone: 'pns', explain: '腦神經與脊神經屬於負責傳遞訊息的周圍神經系統，不是中樞神經系統。' },
            { text: '將受器訊息傳入中樞的感覺神經元', zone: 'pns' },
            { text: '將中樞命令傳到動器的運動神經元', zone: 'pns' }
          ],
          summary: '受器（眼、耳、鼻、舌、皮膚）接受刺激，動器（肌肉、腺體）產生反應；神經系統分為中樞神經（腦、脊髓）與周圍神經（腦神經 12 對、脊神經 31 對，包含感覺神經元與運動神經元）。'
        },
        {
          title: '腦與脊髓的功能',
          description: '請將下列功能與實例，歸類到對應的中樞神經構造（大腦、小腦、腦幹、脊髓）：',
          type: 'classification',
          zones: [
            { id: 'cerebrum', title: '大腦', icon: '🎓' },
            { id: 'cerebellum', title: '小腦', icon: '🤸' },
            { id: 'brainstem', title: '腦幹', icon: '💓' },
            { id: 'spinal', title: '脊髓', icon: '🦴' }
          ],
          items: [
            { text: '主管感覺、運動、思考、語言與記憶', zone: 'cerebrum' },
            { text: '分左右兩半球，意識行為的中樞', zone: 'cerebrum' },
            { text: '協調全身骨骼肌活動，維持身體平衡', zone: 'cerebellum', explain: '協調骨骼肌與維持身體平衡是小腦的功能，不是大腦。' },
            { text: '體操選手翻滾平衡、鳥類飛行發達處', zone: 'cerebellum' },
            { text: '控制心跳、呼吸與體溫的生命中樞', zone: 'brainstem', explain: '心跳、呼吸等維持生命的機能是由腦幹控制。' },
            { text: '控制瞳孔縮放、眨眼、噴嚏與吞嚥', zone: 'brainstem', explain: '頸部以上（如瞳孔、眨眼、打噴嚏、吞嚥、流唾液）的反射中樞位於腦幹，不是脊髓。' },
            { text: '能將身體受器的訊息向上傳遞到腦', zone: 'spinal' },
            { text: '控制手碰燙鍋立刻縮回的反射中樞', zone: 'spinal', explain: '四肢閃避危險（手碰燙鍋縮回、腳踩尖物縮回）的反射中樞在脊髓。' },
            { text: '控制膝跳反射與腳踩尖物縮回的中樞', zone: 'spinal' }
          ],
          summary: '大腦主管感覺、運動、思考與記憶（意識中樞）；小腦負責協調全身肌肉、維持平衡；腦幹是控制心跳與呼吸的「生命中樞」並負責頭部反射；脊髓負責傳遞訊息及控制軀幹、四肢的反射。'
        },
        {
          title: '意識行為與反射作用',
          description: '請判斷下列生活情境屬於「意識行為（經大腦決定）」還是「反射作用（不經大腦決定）」：',
          type: 'classification',
          zones: [
            { id: 'conscious', title: '意識行為（經大腦決定）', icon: '💭' },
            { id: 'reflex', title: '反射作用（不經大腦決定）', icon: '⚡' }
          ],
          items: [
            { text: '看到紅燈決定踩下腳踏車煞車', zone: 'conscious' },
            { text: '聞到炸雞香味而決定拿起來吃', zone: 'conscious' },
            { text: '手心被打覺得痛，用另一手去揉', zone: 'conscious', explain: '產生痛覺並決定用另一隻手去揉，有經過大腦思考判斷，屬於意識行為。' },
            { text: '看到直尺滑落立刻伸手接住', zone: 'conscious', explain: '接尺反應雖然快，但需經大腦視覺判斷後才發出命令，屬於意識行為，不是反射！' },
            { text: '手碰到滾燙熱鍋立刻縮回', zone: 'reflex' },
            { text: '腳踩到尖銳物品立刻縮回', zone: 'reflex' },
            { text: '強光照射眼睛時瞳孔自動縮小', zone: 'reflex', explain: '瞳孔遇強光縮小是由腦幹控制的反射作用，不經大腦決定。' },
            { text: '吃到酸梅或聞到香味自動流唾液', zone: 'reflex', explain: '流唾液是由腦幹控制的腺體分泌反射，不經大腦決定。' },
            { text: '輕敲膝蓋下方韌帶小腿自動彈起', zone: 'reflex' },
            { text: '打噴嚏、眨眼與吞嚥等快速反應', zone: 'reflex' }
          ],
          summary: '意識行為由大腦決定（如接尺、看紅燈踩煞車、痛而揉手）；反射作用不經大腦思考（由腦幹或脊髓直接下令，如手碰燙鍋縮回、膝跳反射、瞳孔縮放、流唾液），能爭取時間保護身體。'
        },
        {
          title: '實驗 4·1-1：接尺反應的神經傳導途徑',
          description: '請依序排列實驗「看到直尺滑落並伸手接住」的神經訊息傳導途徑：',
          type: 'order',
          items: [
            { text: '眼睛內的受器接受「直尺滑落」的視覺刺激' },
            { text: '眼部的感覺神經元將視覺訊息傳向大腦' },
            { text: '大腦產生視覺並判斷整合，發出接尺命令' },
            { text: '訊息由大腦經脊髓向下傳遞至手部神經' },
            { text: '手部的運動神經元將命令傳遞至手部肌肉' },
            { text: '手部肌肉（動器）收縮，完成接尺動作' }
          ],
          summary: '接尺反應屬於意識行為，因為受器在眼睛（腦部）、動器在手部（四肢），訊息必須從眼部感覺神經元傳入大腦，經大腦整合後再經脊髓、手部運動神經元傳到手部肌肉收縮！'
        },
        {
          title: '神經與疾病',
          description: '請判斷下列疾病或臨床症狀，是由哪一個神經構造受損所造成：',
          type: 'classification',
          zones: [
            { id: 'sensory', title: '感覺神經元受損', icon: '📡' },
            { id: 'motor', title: '運動神經元受損', icon: '🦿' },
            { id: 'cerebrum', title: '大腦受損', icon: '🎓' },
            { id: 'cerebellum', title: '小腦受損', icon: '🤸' },
            { id: 'brainstem', title: '腦幹受損', icon: '💓' },
            { id: 'spinal', title: '脊髓受損', icon: '🦴' }
          ],
          items: [
            { text: '打麻醉藥或阻斷，痛覺無法傳入腦', zone: 'sensory', explain: '感覺神經元受損或被麻醉阻斷時，受器的刺激無法傳入中樞，因此不會產生痛覺。' },
            { text: '手腳能隨意活動，但完全沒有感覺', zone: 'sensory', explain: '運動神經元正常故能活動，但感覺神經元受損導致刺激傳不到大腦而失去感覺。' },
            { text: '漸凍症：意識清楚但肌肉漸漸萎縮', zone: 'motor', explain: '漸凍症（運動神經元疾病）是大腦意識與感覺正常，但運動神經元退化，命令無法傳到肌肉。' },
            { text: '有痛覺也有意識，但肌肉無法收縮', zone: 'motor', explain: '感覺神經元與大腦正常故有痛覺與意識，但運動神經元受損使命令無法傳達至動器（肌肉）。' },
            { text: '植物人：有呼吸心跳但無意識感覺', zone: 'cerebrum', explain: '植物人是因為大腦受損失去意識與感覺，但腦幹功能正常，仍能維持呼吸與心跳。' },
            { text: '右腦中風出血，導致左半身癱瘓', zone: 'cerebrum', explain: '大腦右半球控制左半身活動，右腦受損會造成左半身無法正常活動。' },
            { text: '走路搖晃不穩、動作失調無法平衡', zone: 'cerebellum', explain: '小腦負責協調骨骼肌與維持身體平衡，受損或酒精麻痺時會走路搖晃、平衡失調。' },
            { text: '呼吸與心跳停止，導致腦死與死亡', zone: 'brainstem', explain: '腦幹是控制呼吸、心跳的生命中樞，嚴重受損會導致呼吸心跳停止而死亡。' },
            { text: '腰部脊柱折斷，導致下半身癱瘓', zone: 'spinal', explain: '脊髓是腦與軀幹四肢間傳遞訊息的通道，腰部脊髓受損會使下半身訊息無法與腦相通而癱瘓。' },
            { text: '四肢反射消失，且痛覺傳不到大腦', zone: 'spinal', explain: '脊髓同時是四肢反射中樞與上傳大腦的通道，受損會使四肢反射消失且痛覺傳不到大腦。' }
          ],
          summary: '感覺神經元受損會「沒感覺但能動」；運動神經元受損（如漸凍症）會「有感覺有意識但不能動」；大腦受損導致無意識（植物人）或對側半身不遂；小腦受損導致平衡失調；腦幹受損導致呼吸心跳停止（腦死）；脊髓受損則造成反射消失與下半身癱瘓。'
        }
      ]
    },

    // =====================================================
    // 4·2 內分泌系統（3 關）
    // =====================================================
    {
      id: '7a-4-2',
      title: '4·2 內分泌系統',
      levels: [
        {
          title: '腦垂腺、甲狀腺與副甲狀腺',
          description: '請將下列構造位置、功能與分泌異常症狀，歸類到「腦垂腺」、「甲狀腺」或「副甲狀腺」：',
          type: 'classification',
          zones: [
            { id: 'pituitary', title: '腦垂腺', icon: '👑' },
            { id: 'thyroid', title: '甲狀腺', icon: '🦋' },
            { id: 'parathyroid', title: '副甲狀腺', icon: '🦴' }
          ],
          items: [
            { text: '內分泌系統的總指揮，影響他腺', zone: 'pituitary' },
            { text: '分泌生長激素，控制個體生長發育', zone: 'pituitary' },
            { text: '成長期分泌過多導致巨人症', zone: 'pituitary', explain: '巨人症與侏儒症是腦垂腺分泌的「生長激素」過多或過少所致。' },
            { text: '成長期分泌過少導致侏儒症', zone: 'pituitary' },
            { text: '呈蝶狀位於喉部氣管兩側', zone: 'thyroid' },
            { text: '分泌甲狀腺素，控制細胞代謝作用', zone: 'thyroid', explain: '控制細胞代謝作用的是甲狀腺素，不是生長激素。' },
            { text: '分泌過多會消瘦、緊張煩躁', zone: 'thyroid', explain: '甲狀腺素分泌過多（甲狀腺亢進）會使細胞代謝過快而消瘦、緊張煩躁。' },
            { text: '幼年分泌不足會生長遲緩影響智力', zone: 'thyroid', explain: '幼年時甲狀腺素分泌不足，除了生長遲緩還會影響智力發展；生長激素不足（侏儒症）則不影響智力。' },
            { text: '調節血液中鈣的濃度與骨骼生長', zone: 'parathyroid', explain: '調節血鈣濃度是副甲狀腺素的功能，不是甲狀腺素。' },
            { text: '分泌不足時，肌肉容易發生痙攣', zone: 'parathyroid', explain: '副甲狀腺素分泌不足會導致血鈣異常，使肌肉容易發生痙攣（抽筋）。' }
          ],
          summary: '腦垂腺是內分泌總指揮，分泌生長激素（影響巨人症、侏儒症）；甲狀腺控制細胞代謝（過多消瘦煩躁，幼年不足生長遲緩且影響智力）；副甲狀腺位於甲狀腺背面，調節血鈣濃度（不足時肌肉易痙攣）。'
        },
        {
          title: '腎上腺、胰島與性腺',
          description: '請將下列功能與生理反應，歸類到「腎上腺」、「胰島」或「性腺（卵巢與睪丸）」：',
          type: 'classification',
          zones: [
            { id: 'adrenal', title: '腎上腺', icon: '🔥' },
            { id: 'islets', title: '胰島', icon: '🍬' },
            { id: 'gonads', title: '性腺（卵巢與睪丸）', icon: '🌸' }
          ],
          items: [
            { text: '位於腎臟上方，應付緊急狀況', zone: 'adrenal' },
            { text: '緊張運動時使心跳加速、血壓上升', zone: 'adrenal' },
            { text: '受驚嚇時提高血糖以提供緊急能量', zone: 'adrenal', explain: '應付緊急狀況或受驚嚇時快速提高血糖、加快心跳的是腎上腺素。' },
            { text: '散布在胰臟中的內分泌細胞團', zone: 'islets' },
            { text: '分泌胰島素，可降低血糖濃度', zone: 'islets' },
            { text: '分泌升糖素，可提高血糖濃度', zone: 'islets', explain: '胰島同時分泌胰島素（降血糖）與升糖素（升血糖），共同維持平時血糖穩定。' },
            { text: '分泌不足或作用不佳會導致糖尿病', zone: 'islets', explain: '胰島素長期分泌不足或作用不佳，會導致血糖過高隨尿液排出，形成糖尿病。' },
            { text: '可產生精子或卵等生殖細胞', zone: 'gonads' },
            { text: '分泌雄性激素，使喉結凸出長鬍鬚', zone: 'gonads' },
            { text: '分泌雌性激素，促使女性乳房發育', zone: 'gonads' }
          ],
          summary: '腎上腺素負責應付緊急狀況（心跳呼吸加快、血壓上升、提升血糖）；胰島分泌胰島素（降血糖，不足致糖尿病）與升糖素（升血糖）；性腺（睪丸與卵巢）產生生殖細胞並分泌性激素促進第二性徵。'
        },
        {
          title: '神經系統與內分泌系統的比較',
          description: '請比較人體兩大協調系統，將下列特性歸類到「神經系統」或「內分泌系統」：',
          type: 'classification',
          zones: [
            { id: 'nervous', title: '神經系統', icon: '⚡' },
            { id: 'endocrine', title: '內分泌系統', icon: '🩸' }
          ],
          items: [
            { text: '藉由神經元傳遞訊息', zone: 'nervous' },
            { text: '藉由血液運送激素（荷爾蒙）', zone: 'endocrine', explain: '內分泌腺沒有專用導管，分泌的激素是由血液運送到目標細胞。' },
            { text: '由特定細胞分泌', zone: 'endocrine', explain: '激素是由內分泌腺中的特定細胞所分泌。' },
            { text: '沒有管腺，藉由擴散作用進入血管', zone: 'endocrine', explain: '內分泌腺屬於無管腺（沒有導管），分泌物會藉擴散作用進入微血管，由血液運輸。' },
            { text: '作用速率迅速', zone: 'nervous' },
            { text: '作用速率較緩慢', zone: 'endocrine' },
            { text: '作用時效短暫', zone: 'nervous' },
            { text: '作用時效持久', zone: 'endocrine' },
            { text: '作用範圍較局部（特定肌肉或腺體）', zone: 'nervous', explain: '神經系統直接將命令傳到特定的動器（肌肉或腺體），作用範圍較局部。' },
            { text: '作用範圍較廣泛（影響多種器官）', zone: 'endocrine' }
          ],
          summary: '神經系統靠神經元傳遞訊息到特定肌肉或腺體，反應「局部、迅速而短暫」；內分泌系統為無管腺，由特定細胞分泌激素並藉擴散進入血管、靠血液運送，調節作用「廣泛、緩慢而持久」。'
        }
      ]
    },

    // =====================================================
    // 4·3 生物的感應（3 關）
    // =====================================================
    {
      id: '7a-4-3',
      title: '4·3 生物的感應',
      levels: [
        {
          title: '動物的行為（反射、趨性與學習）',
          description: '請將下列動物行為與實例，歸類到「反射」、「趨性」或「學習行為」：',
          type: 'classification',
          zones: [
            { id: 'reflex', title: '反射', icon: '⚡' },
            { id: 'taxis', title: '趨性', icon: '🐛' },
            { id: 'learning', title: '學習行為', icon: '🎓' }
          ],
          items: [
            { text: '異物接近眼睛時不自覺眨眼', zone: 'reflex' },
            { text: '聞到食物香味不自覺流口水', zone: 'reflex' },
            { text: '吸入胡椒粉或冷空氣打噴嚏', zone: 'reflex' },
            { text: '動物對光線或溫度產生趨向或背離', zone: 'taxis', explain: '動物對光線、溫度或化學物質產生趨向或背離的本能反應稱為「趨性」；植物才稱為「向性」。' },
            { text: '夜晚時飛蛾等昆蟲聚集在燈光下', zone: 'taxis', explain: '飛蛾撲火或聚集在燈光下，屬於動物的正趨光性。' },
            { text: '蟑螂或渦蟲遇到光線會逃往暗處', zone: 'taxis' },
            { text: '因為後天經驗累積而改變的行為', zone: 'learning' },
            { text: '黑猩猩拿樹枝伸進蟻窩捕食白蟻', zone: 'learning', explain: '黑猩猩學會使用工具覓食，是後天經驗累積而成的學習行為，與大腦發達程度有關。' },
            { text: '導盲犬經專業訓練引領視障者前行', zone: 'learning' },
            { text: '人類經由反覆練習學會繪畫美濃傘', zone: 'learning' }
          ],
          summary: '眨眼、打噴嚏、流口水屬於不經大腦的「反射」；動物對光線等環境刺激產生趨向或背離稱為「趨性」（如飛蛾趨光）；經由後天經驗與練習學會的行為稱為「學習行為」，大腦越發達能學會越複雜的行為。'
        },
        {
          title: '植物的各種向性',
          description: '請將下列植物的生長現象與功能，歸類到對應的向性：',
          type: 'classification',
          zones: [
            { id: 'phototropism', title: '向光性', icon: '☀️' },
            { id: 'thigmotropism', title: '向觸性', icon: '🧗' },
            { id: 'gravitropism_pos', title: '正向地性', icon: '🌍' },
            { id: 'gravitropism_neg', title: '負向地性（背地性）', icon: '🌱' }
          ],
          items: [
            { text: '窗邊植物的莖，頂芽朝向陽光方向生長彎曲', zone: 'phototropism' },
            { text: '使葉片獲得更多陽光以利光合作用', zone: 'phototropism' },
            { text: '葡萄或瓜果的卷鬚沿接觸物卷曲', zone: 'thigmotropism', explain: '卷鬚沿著接觸的物體卷曲而上，屬於對「接觸」刺激產生的向觸性。' },
            { text: '協助植物攀爬到高處爭取生存空間', zone: 'thigmotropism' },
            { text: '植物的根朝向地球引力方向生長', zone: 'gravitropism_pos', explain: '根朝地球引力方向（向下）生長，稱為正向地性。' },
            { text: '盆栽橫放一段時間後，根向下彎曲', zone: 'gravitropism_pos' },
            { text: '植物的莖背離地球引力方向生長', zone: 'gravitropism_neg', explain: '莖背離地球引力方向（向上）生長，稱為負向地性或背地性。' },
            { text: '盆栽橫放一段時間後，莖向上彎曲', zone: 'gravitropism_neg' }
          ],
          summary: '植物朝向或背離刺激方向而生長的反應稱為「向性」：莖向光源彎曲為「向光性」；卷鬚攀爬物體為「向觸性」；根向下生長為「正向地性」；莖向上生長為「負向地性（背地性）」。'
        },
        {
          title: '植物的向性與短時間感應',
          description: '請比較植物的感應方式，將下列現象歸類到「向性（長時間生長反應）」或「短時間的感應」：',
          type: 'classification',
          zones: [
            { id: 'tropism', title: '向性（長時間生長反應）', icon: '🌱' },
            { id: 'rapid', title: '短時間的感應', icon: '💧' }
          ],
          items: [
            { text: '需經過一段時間的生長才能觀察到', zone: 'tropism' },
            { text: '植物朝向或背離刺激方向生長', zone: 'tropism' },
            { text: '苜蓿幼苗朝向紙盒進光口彎曲生長', zone: 'tropism', explain: '幼苗朝向光源彎曲是經過數天生長表現出的「向光性」，屬於向性。' },
            { text: '植物的根向下生長、莖向上生長', zone: 'tropism' },
            { text: '能對環境刺激產生較快速的反應', zone: 'rapid' },
            { text: '碰觸含羞草時小葉閉合、葉柄下垂', zone: 'rapid', explain: '含羞草的觸發運動是短時間內的快速感應，不是生長造成的向觸性！' },
            { text: '夜晚時酢漿草的葉片下垂（睡眠）', zone: 'rapid', explain: '酢漿草夜晚葉片下垂的睡眠運動屬於短時間的感應，不是向性。' },
            { text: '昆蟲碰觸捕蠅草葉面時葉片閉合', zone: 'rapid', explain: '捕蠅草的捕蟲運動是短時間的快速感應，不是向性。' },
            { text: '跳舞草受聲音或光照時葉片轉動', zone: 'rapid' }
          ],
          summary: '植物的「向性」（向光性、向觸性、向地性）需要經過一段時間的生長才能表現出來；而含羞草的觸發運動、酢漿草的睡眠運動、捕蠅草的捕蟲運動則屬於「短時間的感應」，不是向性！'
        }
      ]
    }
  ]
});
