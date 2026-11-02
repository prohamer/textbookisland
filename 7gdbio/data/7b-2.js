// 七下第 2 章：遺傳
QuizWorld.registerChapter({
  id: '7b-2',
  sections: [
    // ==================== 2·1 ====================
    {
      id: '7b-2-1',
      title: '2·1 解開遺傳的奧祕',
      levels: [
        {
          title: '第 1 關：性狀與表徵、基因型與表現型',
          type: 'classification',
          description: '請將下列遺傳學名詞的敘述或實例，拖拉到對應的分類區！',
          zones: [
            { id: 'trait', title: '性狀（遺傳特徵的統稱）', icon: '🧬' },
            { id: 'feature', title: '表徵（性狀的不同表現狀態）', icon: '👀' },
            { id: 'genotype', title: '基因型（等位基因的組合）', icon: '🔤' },
            { id: 'phenotype', title: '表現型（基因型所表現的表徵）', icon: '🌱' }
          ],
          items: [
            { text: '人類的耳垂位置與大拇指彎曲情形', zone: 'trait', explain: '生理或形態上的遺傳特徵項目稱為性狀' },
            { text: '豌豆的莖高矮與種子顏色、形狀', zone: 'trait', explain: '豌豆莖的高矮、種子顏色等特徵項目稱為性狀' },
            { text: '耳垂分離或緊貼、拇指挺直或彎曲', zone: 'feature', explain: '同一性狀的不同表現情形稱為表徵' },
            { text: '豌豆的高莖或矮莖、黃色或綠色', zone: 'feature', explain: '莖的高或矮、種子的黃或綠屬於表徵' },
            { text: '控制某性狀的等位基因組合方式', zone: 'genotype', explain: '成對等位基因的符號組合稱為基因型' },
            { text: '以TT、Tt或tt表示基因組合', zone: 'genotype', explain: '大、小寫英文字母組合代表基因型' },
            { text: '基因型TT或Tt表現出高莖', zone: 'phenotype', explain: '由基因型決定並實際顯現出來的表徵稱為表現型' },
            { text: '基因型tt表現出矮莖的特徵', zone: 'phenotype', explain: '兩個隱性等位基因tt表現出矮莖的表現型' }
          ],
          summary: '生物可遺傳的特徵項目稱為「性狀」（如莖的高矮），性狀的不同表現稱為「表徵」（如高莖或矮莖）；等位基因的組合稱為「基因型」（如 TT、Tt、tt），所表現出來的表徵稱為「表現型」。'
        },
        {
          title: '第 2 關：顯性表徵與隱性表徵（孟德爾豌豆實驗）',
          type: 'classification',
          description: '請區分下列有關「顯性」與「隱性」表徵及等位基因的特性與實例！',
          zones: [
            { id: 'dominant', title: '顯性表徵與顯性等位基因', icon: '🅰️' },
            { id: 'recessive', title: '隱性表徵與隱性等位基因', icon: '🅱️' }
          ],
          items: [
            { text: '純品系高莖與矮莖雜交第一子代表徵', zone: 'dominant', explain: '親代純品系雜交後，在第一子代顯現出的表徵定義為顯性表徵' },
            { text: '通常以大寫英文字母（如T）表示', zone: 'dominant', explain: '顯性等位基因習慣以大寫字母表示' },
            { text: '只要有一個該等位基因就會表現表徵', zone: 'dominant', explain: '基因型為 TT 或 Tt 時都會表現顯性表徵' },
            { text: '豌豆的高莖、紫花、圓粒與黃色種子', zone: 'dominant', explain: '孟德爾豌豆實驗中，高莖、紫花、圓粒、黃色種子皆為顯性表徵' },
            { text: '人類的耳垂分離、有酒窩與雙眼皮', zone: 'dominant', explain: '人類耳垂分離、有酒窩、雙眼皮、美人尖、捲髮等屬於顯性表徵' },
            { text: '第一子代未顯現，第二子代才重現', zone: 'recessive', explain: '第一子代未表現、到第二子代才又出現的表徵稱為隱性表徵' },
            { text: '通常以小寫英文字母（如t）表示', zone: 'recessive', explain: '隱性等位基因習慣以小寫字母表示' },
            { text: '成對等位基因皆為隱性時才會表現', zone: 'recessive', explain: '只有基因型為 tt 時才會表現出隱性表徵' },
            { text: '豌豆的矮莖、白花、皺粒與綠色種子', zone: 'recessive', explain: '孟德爾豌豆實驗中，矮莖、白花、皺粒、綠色種子皆為隱性表徵' },
            { text: '人類的耳垂緊貼、無酒窩與單眼皮', zone: 'recessive', explain: '人類耳垂緊貼、無酒窩、單眼皮、無美人尖、直髮等屬於隱性表徵' }
          ],
          summary: '純品系親代雜交後，第一子代顯現的表徵為「顯性表徵」（以大寫字母如 T 表示，TT 或 Tt 皆表現顯性）；未在第一子代顯現、於第二子代重現的為「隱性表徵」（以小寫字母如 t 表示，僅 tt 表現隱性）。'
        },
        {
          title: '第 3 關：孟德爾豌豆雜交實驗步驟',
          type: 'order',
          description: '請依孟德爾進行豌豆高莖與矮莖雜交實驗的先後順序排列！',
          items: [
            { text: '選取高莖（TT）與矮莖（tt）純品系豌豆作為親代（P）', explain: '步驟 1：先準備純品系的高莖與矮莖豌豆作為親代' },
            { text: '趁花未開先剪除雄蕊，再人工塗上另一親代花粉進行異花授粉', explain: '步驟 2：避免豌豆自花授粉，人工進行高莖與矮莖異花授粉' },
            { text: '收集種子種下，長出的第一子代（F₁）全為高莖（Tt）', explain: '步驟 3：第一子代（F₁）全表現出顯性表徵高莖' },
            { text: '讓第一子代（F₁）高莖豌豆自然自花授粉，產生下一代種子', explain: '步驟 4：讓第一子代（Tt）彼此自花授粉' },
            { text: '種下種子得第二子代（F₂），高莖與矮莖比約為3：1', explain: '步驟 5：隱性矮莖在第二子代重現，高莖：矮莖約為 3：1' },
            { text: '歸納結果，提出控制性狀的遺傳因子成對存在並符合遺傳法則', explain: '步驟 6：分析實驗數據並提出孟德爾遺傳法則' }
          ],
          summary: '孟德爾以純品系高莖（TT）與矮莖（tt）人工異花授粉，第一子代（F₁）全為高莖（Tt）；再讓 F₁ 自花授粉，第二子代（F₂）高莖與矮莖比例約為 3：1，進而歸納出遺傳法則。'
        },
        {
          title: '第 4 關：棋盤方格法與子代比例推算',
          type: 'classification',
          description: '請利用棋盤方格法，將下列子代基因型與表現型比例歸類到對應的親代交配組合！',
          zones: [
            { id: 'TT_tt', title: '親代 TT × tt', icon: '🌱' },
            { id: 'Tt_Tt', title: '親代 Tt × Tt', icon: '🌿' },
            { id: 'Tt_tt', title: '親代 Tt × tt', icon: '🍃' },
            { id: 'tt_tt', title: '親代 tt × tt', icon: '🌾' }
          ],
          items: [
            { text: '子代基因型全為Tt（100%）', zone: 'TT_tt', explain: 'TT 只產生 T 配子，tt 只產生 t 配子，子代全為 Tt' },
            { text: '親代一為純品系高莖、一為矮莖', zone: 'TT_tt', explain: '純品系高莖（TT）與矮莖（tt）交配，子代全為高莖' },
            { text: '子代TT:Tt:tt=1:2:1', zone: 'Tt_Tt', explain: 'Tt × Tt 可產生 TT、Tt、tt 三種基因型，比例為 1：2：1' },
            { text: '子代表現型高莖與矮莖比為3：1', zone: 'Tt_Tt', explain: 'Tt × Tt 的子代中，高莖（TT、Tt）占 3/4，矮莖（tt）占 1/4' },
            { text: '子代基因型比Tt：tt＝1：1', zone: 'Tt_tt', explain: 'Tt 產生 T、t 兩種配子，與 tt 交配後子代 Tt 與 tt 各占 1/2' },
            { text: '子代表現型高莖與矮莖各占50%', zone: 'Tt_tt', explain: 'Tt × tt 的子代高莖（Tt）與矮莖（tt）比例為 1：1' },
            { text: '子代基因型全為tt（100%）', zone: 'tt_tt', explain: '雙親皆只產生 t 配子，子代基因型全為 tt' },
            { text: '親代與子代的表徵全部都是矮莖', zone: 'tt_tt', explain: '隱性矮莖（tt）彼此交配，子代 100% 為矮莖' }
          ],
          summary: '利用棋盤方格法可推算子代比例：TT × tt 子代全為 Tt（高莖）；Tt × Tt 子代基因型 TT：Tt：tt＝1：2：1、表現型高莖：矮莖＝3：1；Tt × tt 子代高莖：矮莖＝1：1；tt × tt 子代全為 tt（矮莖）。'
        }
      ]
    },

    // ==================== 2·2 ====================
    {
      id: '7b-2-2',
      title: '2·2 人類的遺傳',
      levels: [
        {
          title: '第 1 關：人類 ABO 血型的基因型與表現型',
          type: 'classification',
          description: '請將下列有關人類 ABO 血型的基因型與遺傳特性，歸類到對應的血型表現型！',
          zones: [
            { id: 'typeA', title: 'A 型', icon: '🅰️' },
            { id: 'typeB', title: 'B 型', icon: '🅱️' },
            { id: 'typeAB', title: 'AB 型', icon: '🆎' },
            { id: 'typeO', title: 'O 型', icon: '🅾️' }
          ],
          items: [
            { text: '基因型為IᴬIᴬ（兩個Iᴬ）', zone: 'typeA', explain: '擁有兩個顯性等位基因 Iᴬ 時，血型表現為 A 型' },
            { text: '基因型為Iᴬi（一顯性一隱性）', zone: 'typeA', explain: 'Iᴬ 對 i 為顯性，基因型 Iᴬi 表現為 A 型' },
            { text: '基因型為IᴮIᴮ（兩個Iᴮ）', zone: 'typeB', explain: '擁有兩個顯性等位基因 Iᴮ 時，血型表現為 B 型' },
            { text: '基因型為Iᴮi（一顯性一隱性）', zone: 'typeB', explain: 'Iᴮ 對 i 為顯性，基因型 Iᴮi 表現為 B 型' },
            { text: '基因型為IᴬIᴮ（兩顯性共存）', zone: 'typeAB', explain: 'Iᴬ 與 Iᴮ 同時存在時兩者皆會表現，血型為 AB 型' },
            { text: 'Iᴬ與Iᴮ同時表現出兩種表徵', zone: 'typeAB', explain: 'AB 型同時表現出 Iᴬ 與 Iᴮ 所控制的表徵' },
            { text: '基因型為ii（兩個隱性基因）', zone: 'typeO', explain: '當成對等位基因皆為隱性 i 時，血型表現為 O 型' },
            { text: '只具有隱性等位基因i時才表現', zone: 'typeO', explain: 'O 型必須兩個等位基因皆為隱性 i 才會表現' }
          ],
          summary: '人類 ABO 血型由單一基因座的三種等位基因（Iᴬ、Iᴮ、i）控制，其中 Iᴬ、Iᴮ 為顯性，i 為隱性：A 型為 IᴬIᴬ 或 Iᴬi，B 型為 IᴮIᴮ 或 Iᴮi，AB 型為 IᴬIᴮ，O 型為 ii。'
        },
        {
          title: '第 2 關：人類的體染色體與性染色體',
          type: 'classification',
          description: '請比較人類細胞中「體染色體」與「性染色體」的數目與特性！',
          zones: [
            { id: 'autosome', title: '體染色體（第 1～22 對）', icon: '🧬' },
            { id: 'sex_chr', title: '性染色體（第 23 對）', icon: '🚻' }
          ],
          items: [
            { text: '人類體細胞中的第1到第22對', zone: 'autosome', explain: '人類 23 對染色體中，第 1～22 對稱為體染色體' },
            { text: '男女體細胞中皆有22對（44條）', zone: 'autosome', explain: '不論男女，正常體細胞中都有 22 對、共 44 條體染色體' },
            { text: '在男性與女性體內的配對形態相同', zone: 'autosome', explain: '第 1～22 對體染色體在男女體內皆為成對且大小形狀相同' },
            { text: '生殖細胞（精或卵）中含有22條', zone: 'autosome', explain: '經減數分裂後，每個精子或卵含有 22 條體染色體' },
            { text: '人類體細胞中的第23對染色體', zone: 'sex_chr', explain: '第 23 對染色體與性別決定有關，稱為性染色體' },
            { text: '男女體細胞中皆有1對（2條）', zone: 'sex_chr', explain: '不論男女，正常體細胞中都有 1 對、共 2 條性染色體' },
            { text: '與決定人類性別有關的染色體', zone: 'sex_chr', explain: '性染色體帶有決定性別的基因' },
            { text: '女性體細胞為XX，男性為XY', zone: 'sex_chr', explain: '女性的第 23 對性染色體為 XX，男性為 XY（X 較大、Y 較小）' },
            { text: '每個精子或卵中只含有其中1條', zone: 'sex_chr', explain: '配子中只含 1 條性染色體（X 或 Y）' }
          ],
          summary: '正常人類體細胞有 23 對（46 條）染色體：第 1～22 對為「體染色體」（共 44 條，男女相同），第 23 對為「性染色體」（共 2 條，女性為 XX、男性為 XY）；配子則含 22 條體染色體＋1 條性染色體。'
        },
        {
          title: '第 3 關：人類性別遺傳與生男生女機率',
          type: 'classification',
          description: '請將下列染色體組成與性別決定敘述，歸類到「精子」、「卵」或「受精後的子代」！',
          zones: [
            { id: 'sperm', title: '父親產生的精子', icon: '♂️' },
            { id: 'egg', title: '母親產生的卵', icon: '♀️' },
            { id: 'offspring', title: '受精後的子代性別與機率', icon: '👶' }
          ],
          items: [
            { text: '染色體為22條＋X或22條＋Y', zone: 'sperm', explain: '父親（44＋XY）經減數分裂可產生含 X 或含 Y 的精子' },
            { text: '可產生兩種不同性染色體的配子', zone: 'sperm', explain: '精子有含 X 染色體與含 Y 染色體兩種，比例為 1：1' },
            { text: '決定受精卵發育為男孩或女孩的關鍵', zone: 'sperm', explain: '因卵只提供 X 染色體，子代性別取決於結合的精子帶 X 或 Y' },
            { text: '染色體組成只有22條＋X一種', zone: 'egg', explain: '母親（44＋XX）經減數分裂產生的卵，染色體皆為 22＋X' },
            { text: '所有正常配子都只含有X性染色體', zone: 'egg', explain: '正常卵細胞的性染色體皆為 X' },
            { text: '含X精子與卵結合發育為女孩XX', zone: 'offspring', explain: '（22＋X）精子與（22＋X）卵結合，受精卵為 44＋XX 女孩' },
            { text: '含Y精子與卵結合發育為男孩XY', zone: 'offspring', explain: '（22＋Y）精子與（22＋X）卵結合，受精卵為 44＋XY 男孩' },
            { text: '每一胎生男生女的機率各為1/2', zone: 'offspring', explain: 'X 精子與 Y 精子數量相等，每一胎生男生女機率皆為 50%（1/2）' }
          ],
          summary: '母親只產生（22＋X）一種卵，父親則產生（22＋X）與（22＋Y）兩種比例相等的精子；受精後形成女孩（44＋XX）與男孩（44＋XY）的機率在每一胎皆各占 1/2（50%）。'
        }
      ]
    },

    // ==================== 2·3 ====================
    {
      id: '7b-2-3',
      title: '2·3 突變',
      levels: [
        {
          title: '第 1 關：誘發突變的因子與發生部位',
          type: 'classification',
          description: '請將下列有關突變的原因與發生部位的敘述，歸類到對應的分類區！',
          zones: [
            { id: 'natural', title: '自然突變', icon: '🍃' },
            { id: 'physical', title: '物理性誘變因子', icon: '☢️' },
            { id: 'chemical', title: '化學性誘變因子', icon: '🧪' },
            { id: 'cell_type', title: '突變發生的細胞與遺傳性', icon: '🧬' }
          ],
          items: [
            { text: '自然界中自行發生但機率非常低', zone: 'natural', explain: '未受人為誘變因子影響時，自然突變的發生率極低' },
            { text: '細胞複製遺傳物質時偶發的變異', zone: 'natural', explain: 'DNA 複製時偶爾發生的自然錯誤屬於自然突變' },
            { text: '陽光中過量的紫外光照射', zone: 'physical', explain: '紫外光屬於會提高突變機率的物理因子' },
            { text: '醫療檢查的X光與核輻射', zone: 'physical', explain: 'X 光、核輻射（放射線）皆屬於物理性誘變因子' },
            { text: '發霉食物中黃麴菌產生的黃麴毒素', zone: 'chemical', explain: '黃麴毒素屬於會誘發基因突變的化學物質' },
            { text: '加工食品中添加的亞硝酸鹽', zone: 'chemical', explain: '亞硝酸鹽屬於化學性誘變因子' },
            { text: '發生在體細胞只會在個體本身表現', zone: 'cell_type', explain: '體細胞突變不會透過配子傳給下一代' },
            { text: '皮膚或肌肉細胞突變不會遺傳子代', zone: 'cell_type', explain: '皮膚、肌肉等體細胞的突變不會遺傳給子代' },
            { text: '發生在精子或卵有機會遺傳給子代', zone: 'cell_type', explain: '生殖細胞（精子或卵）的突變可能隨受精傳給子代' },
            { text: '生殖細胞突變可能改變後代的表徵', zone: 'cell_type', explain: '發生在生殖細胞的突變可遺傳給子代並改變後代表徵' }
          ],
          summary: '突變在自然界發生率極低，但接觸物理因子（紫外光、X 光、核輻射）或化學物質（黃麴毒素、亞硝酸鹽）會使突變機率大增；突變若發生在體細胞不會遺傳給子代，發生在生殖細胞（精、卵）則可能遺傳給子代。'
        },
        {
          title: '第 2 關：人類常見的遺傳性疾病（致病原因）',
          type: 'classification',
          description: '請將下列人類常見遺傳性疾病與遺傳特性，歸類到對應的致病原因！',
          zones: [
            { id: 'chr_num', title: '染色體數目異常', icon: '🔢' },
            { id: 'recessive_gene', title: '隱性基因異常', icon: '🅱️' },
            { id: 'dominant_gene', title: '顯性基因異常', icon: '🅰️' },
            { id: 'sex_linked', title: '性聯遺傳', icon: '🚻' }
          ],
          items: [
            { text: '唐氏症（第21對染色體多一條）', zone: 'chr_num', explain: '唐氏症是染色體數目異常所致，患者第 21 對染色體多了一條' },
            { text: '孕婦年齡越高產下患病嬰兒比例越高', zone: 'chr_num', explain: '高齡孕婦進行減數分裂時染色體較易分離異常，提高唐氏症機率' },
            { text: '白化症（體染色體隱性基因異常）', zone: 'recessive_gene', explain: '白化症屬於體染色體隱性基因異常造成的遺傳性疾病' },
            { text: '地中海型貧血（隱性基因異常）', zone: 'recessive_gene', explain: '地中海型貧血屬於體染色體隱性基因異常造成的遺傳性疾病' },
            { text: '僅擁有隱性基因才會罹病', zone: 'recessive_gene', explain: '隱性遺傳病須成對等位基因皆為隱性異常基因才會發病' },
            { text: '軟骨發育不全症（顯性基因異常）', zone: 'dominant_gene', explain: '軟骨發育不全症是由顯性等位基因異常所引起' },
            { text: '只要有一個異常顯性基因就會罹病', zone: 'dominant_gene', explain: '顯性遺傳性疾病只要帶有一個異常顯性等位基因就會發病' },
            { text: '紅綠色盲（X染色體隱性基因異常）', zone: 'sex_linked', explain: '紅綠色盲的異常隱性基因位於 X 性染色體上，屬於性聯遺傳' },
            { text: '血友病（X染色體隱性基因異常）', zone: 'sex_linked', explain: '血友病的異常隱性基因位於 X 性染色體上，屬於性聯遺傳' },
            { text: '男生罹病機會較女性高（性聯遺傳）', zone: 'sex_linked', explain: '男性只有一條 X 染色體，只要帶有一個異常隱性基因就會發病，故男性患者多於女性' }
          ],
          summary: '遺傳性疾病可分為「染色體數目異常」（如唐氏症，第 21 對多一條）與「基因異常」；體染色體隱性基因異常（如白化症、地中海型貧血）僅擁有隱性基因才會罹病，顯性基因異常（如軟骨發育不全症）只要有一個異常基因就會罹病；位於 X 染色體上的隱性基因異常（如紅綠色盲、血友病）屬於「性聯遺傳」，男生罹病機會較女性高。'
        },
        {
          title: '第 3 關：遺傳性疾病的症狀配對',
          type: 'classification',
          description: '請將下列遺傳性疾病的典型症狀或特徵，拖拉到對應的疾病名稱！',
          zones: [
            { id: 'down', title: '唐氏症', icon: '👶' },
            { id: 'albino', title: '白化症', icon: '🤍' },
            { id: 'thal_color', title: '地中海型貧血與紅綠色盲', icon: '🩸' },
            { id: 'achondro', title: '軟骨發育不全症', icon: '🦴' }
          ],
          items: [
            { text: '智力及反應較遲緩或器官未完整發育', zone: 'down', explain: '唐氏症患者因第 21 對染色體多一條，常有智力較遲緩或器官發育異常' },
            { text: '大多數患者第21對染色體多一條', zone: 'down', explain: '唐氏症為常見的染色體數目異常疾病' },
            { text: '體內缺乏黑色素，皮膚與頭髮呈白色', zone: 'albino', explain: '白化症患者因基因突變無法正常合成黑色素' },
            { text: '眼睛畏光且皮膚容易受陽光灼傷', zone: 'albino', explain: '白化症患者因缺乏黑色素保護，眼睛畏光且易曬傷' },
            { text: '紅血球較小且易破裂，產生貧血現象', zone: 'thal_color', explain: '地中海型貧血患者的紅血球較小且易破裂，影響攜氧功能' },
            { text: '難以清楚辨別紅色和綠色的差異', zone: 'thal_color', explain: '紅綠色盲患者無法正常分辨紅、綠兩色，且男性比例高於女性' },
            { text: '骨骼發育異常導致身材矮小', zone: 'achondro', explain: '軟骨發育不全症患者因骨骼發育異常而身材矮小' },
            { text: '四肢近端較短且頭部比例較大', zone: 'achondro', explain: '軟骨發育不全症的典型特徵為四肢短小、頭部比例較大' }
          ],
          summary: '唐氏症為第 21 對染色體多一條；白化症缺乏黑色素；地中海型貧血紅血球易破裂、紅綠色盲難辨紅綠；軟骨發育不全症則使骨骼發育異常、四肢較短。透過禁止近親結婚、遺傳諮詢與產前檢查可預防及早發現。'
        }
      ]
    },

    // ==================== 2·4 ====================
    {
      id: '7b-2-4',
      title: '2·4 生物技術的應用',
      levels: [
        {
          title: '第 1 關：常見生物技術的比較與應用',
          type: 'classification',
          description: '請將下列技術原理與應用實例，歸類到對應的生物技術！',
          zones: [
            { id: 'ferment', title: '微生物發酵', icon: '🍞' },
            { id: 'gmo', title: '基因轉殖', icon: '🧬' },
            { id: 'clone', title: '生物複製', icon: '🐑' },
            { id: 'breeding', title: '育種', icon: '🌾' }
          ],
          items: [
            { text: '運用微生物製作麵包、醬油與優酪乳', zone: 'ferment', explain: '利用酵母菌、乳酸菌等微生物發酵製作食品屬於傳統生物技術' },
            { text: '將外來基因轉殖入生物細胞內表現', zone: 'gmo', explain: '把外來基因植入生物細胞使其表現該基因性狀，稱為基因轉殖' },
            { text: '植入抗病蟲害基因木瓜或螢光觀賞魚', zone: 'gmo', explain: '抗病蟲害木瓜、螢光魚、生產人類胰島素的細菌皆為基因轉殖的應用' },
            { text: '不經受精，產生與原個體同基因後代', zone: 'clone', explain: '生物複製屬於無性生殖，子代遺傳物質與提供細胞核的親代相同' },
            { text: '以體細胞核與去核卵融合培育桃莉羊', zone: 'clone', explain: '複製羊桃莉（Dolly）是全世界第一頭複製成功的哺乳動物' },
            { text: '從變異個體中人為篩選並逐代繁殖', zone: 'breeding', explain: '刻意篩選符合人類需求的變異個體並逐代培育特殊品種，稱為育種' },
            { text: '由野生甘藍培育高麗菜與青花菜', zone: 'breeding', explain: '高麗菜、大頭菜、青花菜皆是由野生甘藍菜經人為育種培育而成' },
            { text: '從野生鯽魚篩選培育出多樣化的金魚', zone: 'breeding', explain: '各式各樣的金魚是人類由野生鯽魚經長期育種培育而來' }
          ],
          summary: '生物技術包含：利用微生物發酵製作麵包、醬油；將外來基因植入細胞的「基因轉殖」（如製造胰島素、基改木瓜、螢光魚）；產生相同基因後代的「生物複製」（如桃莉羊，屬無性生殖）；以及人為篩選培育優良品種的「育種」（如金魚、高麗菜）。'
        },
        {
          title: '第 2 關：複製羊「桃莉（Dolly）」的培育順序',
          type: 'order',
          description: '請依複製羊「桃莉（Dolly）」的培育過程，排列出正確的先後順序！',
          items: [
            { text: '從白面母羊的乳房取出具有細胞核的乳腺細胞（體細胞）', explain: '步驟 1：白面母羊提供含有遺傳物質的乳腺細胞核' },
            { text: '從黑面母羊體內取出卵細胞，並將卵細胞的細胞核去除', explain: '步驟 2：黑面母羊提供去除細胞核的卵細胞' },
            { text: '將白面母羊的乳腺細胞與黑面母羊的去核卵細胞進行融合', explain: '步驟 3：藉由電擊等方式使乳腺細胞核與去核卵融合' },
            { text: '融合後的細胞經細胞分裂發育成胚胎，再植入代理孕母子宮', explain: '步驟 4：體外分裂成早期胚胎後植入另一隻黑面母羊（代理孕母）子宮' },
            { text: '代理孕母產下白面的桃莉羊，其遺傳物質與白面母羊相同', explain: '步驟 5：產出白面的桃莉羊，基因與提供細胞核的白面母羊相同' }
          ],
          summary: '複製羊桃莉（Dolly）是由「白面母羊的乳腺細胞（提供細胞核）」與「黑面母羊的去核卵細胞」融合後發育成胚胎，再植入代理孕母子宮產出；屬於無性生殖，其遺傳物質與提供細胞核的白面母羊相同。'
        },
        {
          title: '第 3 關：基因轉殖製造人類胰島素的順序',
          type: 'order',
          description: '請排列出科學家利用基因轉殖技術，讓細菌大量生產人類胰島素的步驟！',
          items: [
            { text: '從人類細胞中分離並取出可以製造胰島素的目標基因', explain: '步驟 1：先取得人類控制製造胰島素的基因片段' },
            { text: '將人類製造胰島素的基因轉殖進入細菌的細胞內', explain: '步驟 2：把人類胰島素基因植入細菌體內' },
            { text: '篩選出成功帶有並能表現人類胰島素基因的基因轉殖細菌', explain: '步驟 3：確認轉殖成功，成為基因轉殖細菌' },
            { text: '大量培養並繁殖基因轉殖細菌，使其生產大量的人類胰島素', explain: '步驟 4：利用細菌快速分裂繁殖的特性大量製造胰島素' },
            { text: '從培養液中分離、純化出高純度的胰島素，製成糖尿病藥劑', explain: '步驟 5：純化並製成高純度的胰島素藥劑供患者使用' }
          ],
          summary: '科學家將人類製造胰島素的基因轉殖入細菌內，藉由細菌快速繁殖的特性大量生產高純度的人類胰島素，改善了過去從豬、牛胰臟萃取產量少且價格高的問題。'
        }
      ]
    }
  ]
});
