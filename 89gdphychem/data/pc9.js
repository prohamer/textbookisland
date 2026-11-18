QuizWorld.registerChapter({
  id: 'pc9',
  sections: [
    {
      id: 'pc9-1',
      title: '9·1 電解質',
      levels: [
        {
          type: 'classification',
          title: '電解質還是非電解質？',
          description: '將下列物質與實驗現象拖拉到「電解質」或「非電解質」。',
          zones: [
            { id: 'elec', title: '電解質', icon: '⚡' },
            { id: 'nonelec', title: '非電解質', icon: '🚫' }
          ],
          items: [
            { text: '溶於水可導電的化合物', zone: 'elec', explain: '化合物溶於水後能解離出離子而導電，稱為電解質。' },
            { text: '氯化鈉（食鹽）', zone: 'elec', explain: '氯化鈉固體雖不導電，但溶於水後可導電，屬於中性電解質。' },
            { text: '氫氧化鈉', zone: 'elec', explain: '氫氧化鈉溶於水可導電，屬於鹼性電解質。' },
            { text: '醋酸（乙酸）', zone: 'elec', explain: '醋酸溶於水可導電，屬於酸性電解質。' },
            { text: '水溶液通電時電極冒泡', zone: 'elec', explain: '電解質水溶液通電時，LED 燈發亮且石墨棒周圍會產生氣泡。' },
            { text: '溶於水不導電的化合物', zone: 'nonelec', explain: '化合物溶於水後不解離、無法導電，稱為非電解質。' },
            { text: '葡萄糖（C₆H₁₂O₆）', zone: 'nonelec', explain: '葡萄糖易溶於水，但在水中不解離、不導電，為非電解質。' },
            { text: '酒精（乙醇）', zone: 'nonelec', explain: '酒精溶於水後不會解離出離子，水溶液不導電，為非電解質。' },
            { text: '水溶液通電時燈泡不亮', zone: 'nonelec', explain: '非電解質水溶液通電時，LED 燈不發亮，電極也不會產生氣泡。' },
            { text: '蔗糖水溶液中的蔗糖', zone: 'nonelec', explain: '糖水不導電，蔗糖與葡萄糖皆屬於非電解質。' }
          ],
          summary: '溶於水後能導電的化合物稱為電解質（如食鹽、氫氧化鈉、醋酸）；溶於水不導電的化合物為非電解質（如葡萄糖、酒精）。'
        },
        {
          type: 'classification',
          title: '陽離子與陰離子',
          description: '根據電離說，將離子的形成方式、移動方向與常見例子拖到正確類別。',
          zones: [
            { id: 'cation', title: '陽離子（帶正電）', icon: '➕' },
            { id: 'anion', title: '陰離子（帶負電）', icon: '➖' }
          ],
          items: [
            { text: '原子失去電子所形成', zone: 'cation', explain: '電子帶負電，原子失去電子後質子數多於電子數，形成帶正電的陽離子。' },
            { text: '通電時往負極移動', zone: 'cation', explain: '異性電相吸，帶正電的陽離子在通電時會游向負極。' },
            { text: '鈉離子（Na⁺）與鉀離子（K⁺）', zone: 'cation', explain: '鈉原子與鉀原子各失去 1 個電子，形成帶 1 個正電荷的陽離子。' },
            { text: '鈣離子（Ca²⁺）與鎂離子', zone: 'cation', explain: '鈣原子與鎂原子各失去 2 個電子，形成帶 2 個正電荷的陽離子。' },
            { text: '銨根離子（NH₄⁺）', zone: 'cation', explain: '銨根離子是常見帶 1 個正電荷的原子團（陽離子）。' },
            { text: '原子獲得電子所形成', zone: 'anion', explain: '原子得到電子後電子數多於質子數，形成帶負電的陰離子。' },
            { text: '通電時往正極移動', zone: 'anion', explain: '異性電相吸，帶負電的陰離子在通電時會游向正極。' },
            { text: '氯離子（Cl⁻）', zone: 'anion', explain: '氯原子獲得 1 個電子，形成帶 1 個負電荷的氯離子。' },
            { text: '氫氧根離子（OH⁻）', zone: 'anion', explain: '氫氧根離子是帶 1 個負電荷的原子團（陰離子）。' },
            { text: '硫酸根（SO₄²⁻）與碳酸根', zone: 'anion', explain: '硫酸根（SO₄²⁻）與碳酸根（CO₃²⁻）皆為帶 2 個負電荷的陰離子。' }
          ],
          summary: '原子失去電子形成帶正電的陽離子（通電往負極移動）；得到電子形成帶負電的陰離子（通電往正極移動）。'
        },
        {
          type: 'classification',
          title: '原子、離子與電離說辨析',
          description: '比較「鈉原子」、「鈉離子」的性質差異，以及「電離說與導電觀念」。',
          zones: [
            { id: 'atom', title: '鈉原子（Na）', icon: '⚛️' },
            { id: 'ion', title: '鈉離子（Na⁺）', icon: '💧' },
            { id: 'theory', title: '電離說與導電觀念', icon: '⚖️' }
          ],
          items: [
            { text: '不帶電，呈電中性', zone: 'atom', explain: '原子的質子數等於電子數，本身呈電中性。' },
            { text: '放入水中會劇烈反應', zone: 'atom', explain: '金屬鈉由鈉原子組成，投入水中會劇烈反應產生氫氣。' },
            { text: '組成金屬鈉塊的粒子', zone: 'atom', explain: '金屬鈉塊是由電中性的鈉原子所構成。' },
            { text: '失去1個電子帶正電', zone: 'ion', explain: '鈉原子失去 1 個電子後形成帶 1 個正電荷的鈉離子。' },
            { text: '在食鹽水中不與水反應', zone: 'ion', explain: '食鹽水中的鈉離子化學性質穩定，不會與水發生劇烈反應。' },
            { text: '由氯化鈉溶於水解離產生', zone: 'ion', explain: '氯化鈉溶於水時會解離出鈉離子（Na⁺）與氯離子（Cl⁻）。' },
            { text: '陽離子與陰離子總電量相等', zone: 'theory', explain: '電解質水溶液中，正負離子所帶的總電量必定相等（個數不一定相等）。' },
            { text: '電解質水溶液必呈電中性', zone: 'theory', explain: '因為陽離子總電量等於陰離子總電量，水溶液整體維持電中性。' },
            { text: '固態食鹽未解離故不導電', zone: 'theory', explain: '氯化鈉是電解質，但乾燥固體時離子無法自由移動，需溶於水才能導電。' },
            { text: '金屬鐵是元素故非電解質', zone: 'theory', explain: '鐵雖靠自由電子導電，但它是元素（單質）而非化合物，不屬於電解質。' }
          ],
          summary: '同一元素的原子與離子化學性質完全不同；電解質水溶液靠離子移動導電，且正、負離子總電量相等，溶液恆呈電中性。'
        }
      ]
    },
    {
      id: 'pc9-2',
      title: '9·2 常見的酸與鹼',
      levels: [
        {
          type: 'classification',
          title: '酸性與鹼性物質的通性',
          description: '比較酸性物質與鹼性物質溶於水後的離子變化與實驗性質。',
          zones: [
            { id: 'acid', title: '酸性物質特性', icon: '🍋' },
            { id: 'base', title: '鹼性物質特性', icon: '🧼' }
          ],
          items: [
            { text: '溶於水會增加氫離子（H⁺）', zone: 'acid', explain: '酸性物質溶於水後會解離並增加水溶液中的氫離子 H⁺ 濃度。' },
            { text: '與大理岩反應產生二氧化碳', zone: 'acid', explain: '酸中的氫離子會與大理岩（碳酸鈣）反應產生二氧化碳氣體，使點燃的火柴熄滅。' },
            { text: '與鎂帶反應產生氫氣（H₂）', zone: 'acid', explain: '酸會與活性大的金屬（如鎂帶）反應產生可燃的氫氣，點燃會有爆鳴聲。' },
            { text: '嘗起來帶有酸味', zone: 'acid', explain: '檸檬汁、食醋等酸性物質具有酸味（實驗室藥品不可品嘗）。' },
            { text: '酸雨會腐蝕大理岩雕像', zone: 'acid', explain: '大理岩主要成分為碳酸鈣，遇到酸性的酸雨會被侵蝕剝落。' },
            { text: '溶於水增加氫氧根（OH⁻）', zone: 'base', explain: '鹼性物質溶於水後會增加水溶液中的氫氧根離子 OH⁻ 濃度。' },
            { text: '水溶液摸起來有滑膩感', zone: 'base', explain: '鹼性水溶液具有滑膩感（強鹼具腐蝕性不可直接觸摸）。' },
            { text: '可以乳化並去除油脂', zone: 'base', explain: '鹼性物質可以乳化油脂，因此常用於清潔劑與肥皂。' },
            { text: '與大理岩及鎂帶均不反應', zone: 'base', explain: '氫氧化鈉等鹼性水溶液放入大理岩或鎂帶時，皆不會產生氣泡。' },
            { text: '肥皂水、氨水與石灰水', zone: 'base', explain: '肥皂水、氨水、澄清石灰水（氫氧化鈣水溶液）皆屬於常見的鹼性水溶液。' }
          ],
          summary: '酸性物質增加 H⁺，能與大理岩產生 CO₂、與鎂帶產生 H₂；鹼性物質增加 OH⁻，有滑膩感且可乳化油脂。'
        },
        {
          type: 'classification',
          title: '常見的三種酸',
          description: '將下列性質與用途拖拉到對應的酸性物質。',
          zones: [
            { id: 'hcl', title: '鹽酸（HCl）', icon: '🧪' },
            { id: 'h2so4', title: '硫酸（H₂SO₄）', icon: '🔥' },
            { id: 'ch3cooh', title: '醋酸（CH₃COOH）', icon: '🍶' }
          ],
          items: [
            { text: '氯化氫氣體溶於水形成', zone: 'hcl', explain: '鹽酸是氯化氫（HCl）的水溶液，屬於強酸。' },
            { text: '濃溶液開瓶會散發刺鼻酸霧', zone: 'hcl', explain: '濃鹽酸揮發出的氯化氫與空氣中水氣結合，形成刺鼻的鹽酸小液滴（酸霧）。' },
            { text: '可用於清洗金屬，胃液也含它', zone: 'hcl', explain: '工業用鹽酸含雜質呈淡黃色可洗金屬；人體胃液也含鹽酸可殺菌助消化。' },
            { text: '濃溶液具強烈脫水性', zone: 'h2so4', explain: '濃硫酸具有強烈脫水性與腐蝕性，稀硫酸則無脫水性。' },
            { text: '能使方糖與白紙脫水變黑碳', zone: 'h2so4', explain: '濃硫酸會奪取碳水化合物（蔗糖、紙張）中的氫與氧，留下黑色的碳。' },
            { text: '稀釋時須緩緩加入水中攪拌', zone: 'h2so4', explain: '濃硫酸密度比水大且溶於水放大量熱，稀釋時必須將濃硫酸緩慢倒入水中。' },
            { text: '常用於鉛蓄電池與工業原料', zone: 'h2so4', explain: '硫酸廣泛用於製造肥料、染料、造紙及汽車鉛蓄電池。' },
            { text: '學名乙酸，屬於弱酸', zone: 'ch3cooh', explain: '醋酸又稱乙酸，在水中僅部分解離出氫離子，屬於弱酸。' },
            { text: '高純度在16.7℃凝固成冰醋酸', zone: 'ch3cooh', explain: '純醋酸在 16.7℃ 時會凝固成冰狀透明固體，俗稱冰醋酸。' },
            { text: '食用醋主成分，也能除水垢', zone: 'ch3cooh', explain: '市售食用醋含有醋酸，家庭中也常用來去除容器中的碳酸鈣水垢。' }
          ],
          summary: '濃鹽酸有刺鼻酸霧；濃硫酸具強烈脫水性，稀釋時須將濃硫酸緩緩加入水中；純醋酸易凝固又稱冰醋酸。'
        },
        {
          type: 'classification',
          title: '常見的三種鹼性物質',
          description: '將下列俗稱、性質與用途拖拉到對應的鹼性物質。',
          zones: [
            { id: 'nh3', title: '氨（NH₃）', icon: '💨' },
            { id: 'naoh', title: '氫氧化鈉（NaOH）', icon: '🧼' },
            { id: 'cao', title: '氧化鈣與氫氧化鈣', icon: '🪨' }
          ],
          items: [
            { text: '比空氣輕、具刺鼻臭味的氣體', zone: 'nh3', explain: '氨氣（NH₃）無色、比空氣輕，具有強烈刺鼻氣味。' },
            { text: '極易溶於水形成弱鹼性氨水', zone: 'nh3', explain: '氨氣極易溶於水，與水部分反應生成 NH₄⁺ 與 OH⁻，屬於弱鹼。' },
            { text: '常用於製造肥料與家用清潔劑', zone: 'nh3', explain: '氨水稀釋後可作清潔劑，也是製造氮肥的重要原料。' },
            { text: '白色固體，俗稱燒鹼或苛性鈉', zone: 'naoh', explain: '氫氧化鈉具強腐蝕性，俗稱燒鹼或苛性鈉，屬於強鹼。' },
            { text: '易吸收空氣中水氣與CO₂變質', zone: 'naoh', explain: '氫氧化鈉放在空氣中極易吸收水氣潮解並與二氧化碳反應變質，須密封保存。' },
            { text: '用於製造肥皂與水管疏通劑', zone: 'naoh', explain: '氫氧化鈉溶於水放熱且能分解油脂毛髮，常用於製皂、人造絲與水管疏通劑。' },
            { text: '氧化鈣俗稱生石灰或石灰', zone: 'cao', explain: '氧化鈣（CaO）為白色粉末，俗稱石灰或生石灰。' },
            { text: '易吸水氣，常作食品乾燥劑', zone: 'cao', explain: '氧化鈣容易吸收空氣中的水氣，常作為海苔、餅乾包裝內的乾燥劑。' },
            { text: '溶於水放熱生成氫氧化鈣', zone: 'cao', explain: '氧化鈣（CaO）溶於水會放出大量熱，反應生成鹼性的氫氧化鈣 Ca(OH)₂。' },
            { text: '澄清石灰水可檢驗二氧化碳', zone: 'cao', explain: '氫氧化鈣水溶液俗稱石灰水，遇二氧化碳會產生白色碳酸鈣（CaCO₃）沉澱。' }
          ],
          summary: '氨氣易溶於水成弱鹼氨水；氫氧化鈉俗稱燒鹼、苛性鈉，易吸水氣與 CO₂ 變質；氧化鈣（生石灰）溶於水成石灰水，可檢驗 CO₂。'
        }
      ]
    },
    {
      id: 'pc9-3',
      title: '9·3 酸鹼濃度與 pH 值',
      levels: [
        {
          type: 'formula',
          title: '體積莫耳濃度公式',
          description: '把正確的物理量拖進空格，組成「體積莫耳濃度（M）」的計算公式。',
          left: '莫耳濃度(M)',
          right: ['溶質莫耳數(mol)', '溶液體積(L)'],
          ops: ['÷'],
          ordered: true,
          distractors: ['溶質質量(g)', '溶劑質量(kg)'],
          explain: '體積莫耳濃度（M）＝ 溶質莫耳數（mol）÷ 溶液體積（L），注意分母是「公升（L）」而非毫升，分子是「莫耳數」而非公克數。',
          summary: '莫耳濃度（M）＝ 溶質莫耳數（mol）÷ 溶液體積（L），常以中括號 [ ] 表示。'
        },
        {
          type: 'classification',
          title: '離子濃度與 pH 值判別',
          description: '在 25℃ 常溫下，依據氫離子與氫氧根離子濃度關係及 pH 值進行分類。',
          zones: [
            { id: 'acid', title: '酸性（pH＜7）', icon: '🍋' },
            { id: 'neutral', title: '中性（pH＝7）', icon: '💧' },
            { id: 'base', title: '鹼性（pH＞7）', icon: '🧼' }
          ],
          items: [
            { text: '[H⁺] ＞ [OH⁻]', zone: 'acid', explain: '水溶液中氫離子濃度大於氫氧根離子濃度時，溶液呈酸性。' },
            { text: 'pH值越小，[H⁺]越大越酸', zone: 'acid', explain: 'pH 值小於 7 為酸性，且數值越小代表氫離子濃度越大、酸性越強。' },
            { text: '酸性果汁加水稀釋後的溶液', zone: 'acid', explain: '酸性溶液加水稀釋時，pH 值會變大並趨近於 7，但仍小於 7，不會變成鹼性。' },
            { text: '[H⁺] ＝ [OH⁻]', zone: 'neutral', explain: '當氫離子濃度等於氫氧根離子濃度時，水溶液呈中性。' },
            { text: '25℃的純水（蒸餾水）', zone: 'neutral', explain: '純水僅微量解離出等量的 H⁺ 與 OH⁻，在 25℃ 下 pH＝7，呈中性。' },
            { text: '食鹽（氯化鈉）水溶液', zone: 'neutral', explain: '食鹽加入純水中不影響 H⁺ 與 OH⁻ 的濃度，仍保持 [H⁺]＝[OH⁻] 的中性。' },
            { text: '[H⁺] ＜ [OH⁻]', zone: 'base', explain: '水溶液中氫氧根離子濃度大於氫離子濃度時，溶液呈鹼性。' },
            { text: 'pH值越大，[OH⁻]越大越鹼', zone: 'base', explain: 'pH 值大於 7 為鹼性，且數值越大代表 [H⁺] 越小、[OH⁻] 越大、鹼性越強。' },
            { text: 'pH＝9.0的海洋離子水', zone: 'base', explain: 'pH＝9.0 大於 7，屬於鹼性水溶液。' }
          ],
          summary: '25℃ 時：酸性 [H⁺]＞[OH⁻]（pH＜7）；中性 [H⁺]＝[OH⁻]（pH＝7）；鹼性 [H⁺]＜[OH⁻]（pH＞7）。'
        },
        {
          type: 'classification',
          title: '酸鹼指示劑變色判別',
          description: '將石蕊試紙、酚酞指示劑、廣用試紙與蝶豆花的變色結果分到對應的酸鹼性。',
          zones: [
            { id: 'acid', title: '酸性溶液中的顏色', icon: '🍋' },
            { id: 'neutral', title: '中性溶液中的顏色', icon: '💧' },
            { id: 'base', title: '鹼性溶液中的顏色', icon: '🧼' }
          ],
          items: [
            { text: '藍色石蕊試紙變紅色', zone: 'acid', explain: '石蕊指示劑在酸性溶液中呈紅色，會使藍色石蕊試紙變紅。' },
            { text: '廣用試紙呈紅、橙、黃色', zone: 'acid', explain: '廣用試紙在酸性溶液中呈紅、橙、黃色，越紅代表酸性越強。' },
            { text: '蝶豆花溶液加檸檬汁變紫紅', zone: 'acid', explain: '藍色的蝶豆花溶液遇到酸性的檸檬汁會轉變成紫紅色。' },
            { text: '紅、藍石蕊試紙皆不變色', zone: 'neutral', explain: '中性溶液不會使紅色或藍色石蕊試紙變色。' },
            { text: '廣用試紙呈綠色', zone: 'neutral', explain: '廣用試紙在 pH＝7 的中性溶液中呈現綠色。' },
            { text: '酚酞無色且石蕊試紙不變色', zone: 'neutral', explain: '酚酞在酸性與中性皆呈無色，再搭配石蕊試紙不變色即可確認為中性。' },
            { text: '紅色石蕊試紙變藍色', zone: 'base', explain: '石蕊指示劑在鹼性溶液中呈藍色，會使紅色石蕊試紙變藍。' },
            { text: '酚酞指示劑呈現紅色', zone: 'base', explain: '酚酞指示劑在酸中與中性呈無色，在鹼性溶液中呈紅色。' },
            { text: '廣用試紙呈藍、靛、紫色', zone: 'base', explain: '廣用試紙在鹼性溶液中呈藍、靛、紫色，越紫代表鹼性越強。' }
          ],
          summary: '石蕊「酸紅鹼藍」；酚酞「酸無鹼紅」；廣用試紙由酸到鹼為「紅橙黃（酸）→ 綠（中）→ 藍靛紫（鹼）」。'
        },
        {
          type: 'order',
          title: '常見物質的 pH 值由小到大',
          description: '依常見物質的 pH 值「由小到大」（由強酸 → 弱酸 → 中性 → 弱鹼 → 強鹼）排列順序。',
          items: [
            { text: '胃液（含鹽酸，強酸性）', explain: '胃液含有鹽酸，pH 值約 1～2，在日常物質中酸性最強、pH 最小。' },
            { text: '柳橙汁與可樂（弱酸性飲料）', explain: '柳橙汁與可樂的 pH 值約 2.5～4，屬於明顯偏酸性的飲品。' },
            { text: '牛奶（極弱酸性，接近中性）', explain: '牛奶的 pH 值約 6.5，微偏酸性、非常接近中性。' },
            { text: '蒸餾水與食鹽水（中性，pH＝7）', explain: '25℃ 下蒸餾水與食鹽水為中性，pH 值等於 7。' },
            { text: '肥皂水（弱鹼性清潔用品）', explain: '肥皂水呈弱鹼性，pH 值約 9～10。' },
            { text: '馬桶疏通劑（含氫氧化鈉，強鹼性）', explain: '馬桶／水管疏通劑含有強鹼氫氧化鈉，pH 值高達 13～14，鹼性最強。' }
          ],
          summary: 'pH 值由小到大依序為：強酸（胃液）→ 弱酸（果汁、牛奶）→ 中性（蒸餾水 pH＝7）→ 弱鹼（肥皂水）→ 強鹼（疏通劑）。'
        }
      ]
    },
    {
      id: 'pc9-4',
      title: '9·4 酸鹼中和',
      levels: [
        {
          type: 'order',
          title: '酸鹼中和與產物檢驗實驗',
          description: '將鹽酸與氫氧化鈉水溶液進行「酸鹼中和」並蒸乾檢驗產物的實驗步驟，依正確順序排列。',
          items: [
            { text: '取鹽酸裝入試管，滴入酚酞呈無色', explain: '酚酞指示劑在酸性的鹽酸中呈現無色。' },
            { text: '用滴管緩緩滴入氫氧化鈉並攪拌', explain: '以滴管逐滴加入氫氧化鈉水溶液，並用玻璃棒攪拌使其均勻反應。' },
            { text: '溶液變淡紅色且不再消失，溫度上升', explain: '當氫氧化鈉稍微過量時酚酞變為淡紅色；且酸鹼中和放熱使溶液溫度上升。' },
            { text: '將中和後的溶液倒入蒸發皿中加熱', explain: '將混合液倒入蒸發皿，以酒精燈加熱蒸發水分。' },
            { text: '水分蒸乾後，皿底析出白色氯化鈉固體', explain: '水分蒸發後，未參與反應的 Na⁺ 與 Cl⁻ 結合成白色氯化鈉（食鹽）晶體析出。' }
          ],
          summary: '酸鹼中和是放熱反應（溫度上升），鹽酸與氫氧化鈉中和後蒸乾水分，會得到白色氯化鈉固體。'
        },
        {
          type: 'classification',
          title: '酸鹼中和原理與生活應用',
          description: '判斷下列關於「酸鹼中和」的化學原理與日常生活應用是否正確。',
          zones: [
            { id: 'correct', title: '正確的中和觀念與應用', icon: '✅' },
            { id: 'wrong', title: '錯誤的迷思', icon: '❌' }
          ],
          items: [
            { text: '酸＋鹼 → 水＋鹽類', zone: 'correct', explain: '酸鹼中和的反應通式為「酸 ＋ 鹼 → 水 ＋ 鹽」。' },
            { text: '離子反應：H⁺＋OH⁻→H₂O', zone: 'correct', explain: '所有酸鹼中和真正參與反應的離子都是氫離子與氫氧根離子結合生成水。' },
            { text: '中和屬於放熱反應，溫度上升', zone: 'correct', explain: '酸與鹼混合時會放出熱量，使水溶液溫度升高。' },
            { text: 'Na⁺與Cl⁻在反應前後未改變', zone: 'correct', explain: '鹽酸與氫氧化鈉中和時，Na⁺ 與 Cl⁻ 仍以離子狀態存在水中，未實際參與反應。' },
            { text: '胃藥含弱鹼性物質可中和胃酸', zone: 'correct', explain: '胃酸含有鹽酸，胃藥中的弱鹼（如小蘇打）可中和過多胃酸。' },
            { text: '烤魚淋檸檬汁中和鹼性魚腥味', zone: 'correct', explain: '魚腥味來自含氨的弱鹼性物質，淋上酸性的檸檬汁可中和去腥。' },
            { text: '中和屬於吸熱反應，溫度下降', zone: 'wrong', explain: '酸鹼中和必定是「放熱反應」，溶液溫度會上升而非下降。' },
            { text: 'H⁺與OH⁻反應會產生氫氣', zone: 'wrong', explain: 'H⁺ 與 OH⁻ 反應是生成「水（H₂O）」，酸與活性大的金屬反應才會產生氫氣。' },
            { text: 'Na⁺與Cl⁻直接化合成水分子', zone: 'wrong', explain: '生成水分子的是 H⁺ 與 OH⁻；Na⁺ 與 Cl⁻ 在蒸乾後才會形成氯化鈉鹽類。' },
            { text: '完全中和後的溶液一定不導電', zone: 'wrong', explain: '完全中和後溶液中仍有鹽類解離的陰、陽離子（如 Na⁺、Cl⁻），依然可以導電。' }
          ],
          summary: '酸鹼中和通式為「酸＋鹼→水＋鹽」，淨離子反應式為「H⁺＋OH⁻→H₂O」，屬於放熱反應。'
        },
        {
          type: 'classification',
          title: '常見的鹽類（一）：食鹽、石膏與大理岩',
          description: '將下列鹽類的溶解度、特性與生活用途拖拉到對應的鹽類。',
          zones: [
            { id: 'nacl', title: '氯化鈉（NaCl）', icon: '🧂' },
            { id: 'caso4', title: '硫酸鈣（CaSO₄）', icon: '🗿' },
            { id: 'caco3', title: '碳酸鈣（CaCO₃）', icon: '🐚' }
          ],
          items: [
            { text: '食鹽的主要成分', zone: 'nacl', explain: '一般精製食鹽中含有 97～99% 的氯化鈉。' },
            { text: '無色透明晶體，易溶於水呈中性', zone: 'nacl', explain: '氯化鈉晶體本身透明無色（顆粒聚集看起來呈白色），易溶於水且呈中性。' },
            { text: '用於調味、保存食物與工業原料', zone: 'nacl', explain: '氯化鈉除了調味與醃漬保存食物，也是製造鈉、氯氣、氫氧化鈉的原料。' },
            { text: '白色固體，微溶於水', zone: 'caso4', explain: '硫酸鈣為白色固體，在水中的溶解度很小（微溶於水）。' },
            { text: '石膏主成分，可做石膏像與石膏模', zone: 'caso4', explain: '石膏的主要成分是硫酸鈣，常用於製作雕像模型與骨折固定石膏。' },
            { text: '常作為製作豆腐、豆花的凝固劑', zone: 'caso4', explain: '食品級硫酸鈣（石膏）可使豆漿凝固成傳統板豆腐或豆花。' },
            { text: '白色固體，不易溶於水', zone: 'caco3', explain: '碳酸鈣難溶於水，常保留在陸地岩石或生物外殼中。' },
            { text: '大理岩、石灰岩與鐘乳石主成分', zone: 'caco3', explain: '大理岩建築、石灰岩地形與洞穴中的鐘乳石、石筍主要成分皆為碳酸鈣。' },
            { text: '貝殼、牡蠣殼、珍珠與蛋殼主成分', zone: 'caco3', explain: '貝殼、珊瑚、珍珠與雞蛋殼的主要成分都是碳酸鈣。' },
            { text: '加酸會反應產生二氧化碳氣泡', zone: 'caco3', explain: '碳酸鈣遇到酸性物質會反應產生二氧化碳（CO₂）氣體。' }
          ],
          summary: '氯化鈉（食鹽）易溶於水呈中性；硫酸鈣（石膏）微溶於水，可點豆腐與做石膏模；碳酸鈣難溶於水，為大理岩與貝殼主成分。'
        },
        {
          type: 'classification',
          title: '蘇打 vs 小蘇打大比拚',
          description: '比較「碳酸鈉（蘇打）」與「碳酸氫鈉（小蘇打）」的俗稱、性質與用途。',
          zones: [
            { id: 'na2co3', title: '碳酸鈉（Na₂CO₃）', icon: '🧼' },
            { id: 'nahco3', title: '碳酸氫鈉（NaHCO₃）', icon: '🧁' }
          ],
          items: [
            { text: '俗稱蘇打或純鹼', zone: 'na2co3', explain: '碳酸鈉（Na₂CO₃）俗稱蘇打或純鹼，不含「氫」字。' },
            { text: '常作清潔劑成分，又稱洗滌鹼', zone: 'na2co3', explain: '碳酸鈉水溶液鹼性較強，能去油汙，常作為清潔劑成分，又稱洗滌鹼。' },
            { text: '易溶於水，鹼性比小蘇打強', zone: 'na2co3', explain: '碳酸鈉與碳酸氫鈉皆易溶於水呈鹼性，但碳酸鈉的鹼性明顯較強。' },
            { text: '常溫與一般加熱不易分解出氣體', zone: 'na2co3', explain: '碳酸鈉對熱穩定，加熱不會像小蘇打那樣分解出二氧化碳（但加酸仍會產生 CO₂）。' },
            { text: '化學式為 Na₂CO₃', zone: 'na2co3', explain: '由鈉離子（Na⁺）與碳酸根離子（CO₃²⁻）組成，化學式為 Na₂CO₃。' },
            { text: '俗稱小蘇打或焙用鹼', zone: 'nahco3', explain: '碳酸氫鈉（NaHCO₃）名稱多一個「氫」字，俗稱小蘇打或焙用鹼。' },
            { text: '加熱會分解產生二氧化碳（CO₂）', zone: 'nahco3', explain: '碳酸氫鈉粉末受熱會分解產生二氧化碳氣體、水與碳酸鈉。' },
            { text: '常用作糕點烘焙的膨鬆劑', zone: 'nahco3', explain: '烘焙時小蘇打受熱產生二氧化碳氣體，能使蛋糕、餅乾膨鬆。' },
            { text: '加入熱糖漿可使糖膨大做成椪糖', zone: 'nahco3', explain: '傳統點心「椪糖」是利用小蘇打在熱糖漿中受熱分解出 CO₂ 使糖漿膨脹。' },
            { text: '呈弱鹼性，常作為胃藥的主要成分', zone: 'nahco3', explain: '碳酸氫鈉呈溫和的弱鹼性，常作為胃藥成分來中和胃酸。' }
          ],
          summary: '碳酸鈉（Na₂CO₃，蘇打／洗滌鹼）鹼性較強，用於清潔劑；碳酸氫鈉（NaHCO₃，小蘇打）呈弱鹼性且受熱會分解出 CO₂，用於烘焙膨鬆劑、做椪糖與胃藥。'
        }
      ]
    }
  ]
});
