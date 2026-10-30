/* =========================================================
 * 七下第 1 章：生殖（7b-1）
 * ========================================================= */
QuizWorld.registerChapter({
  id: '7b-1',
  sections: [
    // =====================================================
    // 1·1 細胞的分裂（4 關）
    // =====================================================
    {
      id: '7b-1-1',
      title: '1·1 細胞的分裂',
      levels: [
        {
          title: '染色體、同源染色體與套數',
          description: '請將下列細胞種類與染色體特徵，歸類到「雙套染色體（2n，體細胞）」或「單套染色體（n，配子）」：',
          type: 'classification',
          zones: [
            { id: 'diploid', title: '雙套染色體（2n，體細胞）', icon: '🧬' },
            { id: 'haploid', title: '單套染色體（n，配子）', icon: '🥚' }
          ],
          items: [
            { text: '染色體兩兩成對，具有同源染色體', zone: 'diploid' },
            { text: '成對染色體一條來自父方一條母方', zone: 'diploid' },
            { text: '人體的皮膚細胞、肌肉細胞與受精卵', zone: 'diploid', explain: '受精卵是由精子（n）與卵（n）結合而成，已經恢復成雙套染色體（2n）！' },
            { text: '人類此類細胞含46條（23對）', zone: 'diploid' },
            { text: '經由細胞分裂產生的子細胞', zone: 'diploid' },
            { text: '只含每對同源染色體中的其中一條', zone: 'haploid', explain: '配子經過減數分裂，同源染色體已分離，因此只含每對同源染色體的其中一條。' },
            { text: '染色體不成對，數目為體細胞一半', zone: 'haploid' },
            { text: '成熟的精子、卵或花粉內的精細胞', zone: 'haploid' },
            { text: '人類此類細胞內只含有23條染色體', zone: 'haploid', explain: '人類配子（精子或卵）含有 23 條不成對的染色體，不能寫成 23 對。' },
            { text: '經由減數分裂產生的生殖細胞', zone: 'haploid' }
          ],
          summary: '體細胞與受精卵具有成對的同源染色體，稱為「雙套（2n）」（人類為 23 對＝46 條）；經減數分裂產生的精子與卵只含每對同源染色體的其中一條，稱為「單套（n）」（人類為 23 條不成對）。'
        },
        {
          title: '細胞分裂與減數分裂的比較',
          description: '請比較「細胞分裂」與「減數分裂」的過程與功能：',
          type: 'classification',
          zones: [
            { id: 'mitosis', title: '細胞分裂', icon: '🔄' },
            { id: 'meiosis', title: '減數分裂', icon: '✂️' }
          ],
          items: [
            { text: '染色體複製1次，細胞分裂1次', zone: 'mitosis' },
            { text: '1個母細胞最後形成2個子細胞', zone: 'mitosis' },
            { text: '子細胞染色體數目與原母細胞相同', zone: 'mitosis' },
            { text: '多細胞生物藉此生長或修補傷口', zone: 'mitosis' },
            { text: '變形蟲等單細胞生物藉此產生新個體', zone: 'mitosis', explain: '無性生殖（如單細胞生物分裂生殖）是藉由「細胞分裂」產生新個體，不經減數分裂。' },
            { text: '染色體複製1次，細胞連續分裂2次', zone: 'meiosis', explain: '無論是細胞分裂或減數分裂，染色體都只複製 1 次；減數分裂會連續分裂 2 次。' },
            { text: '1個母細胞最後形成4個子細胞', zone: 'meiosis' },
            { text: '子細胞染色體數目減為原細胞一半', zone: 'meiosis' },
            { text: '過程中會發生同源染色體互相分離', zone: 'meiosis' },
            { text: '有性生殖生物形成配子（精、卵）時進行的分裂', zone: 'meiosis' }
          ],
          summary: '「細胞分裂」複製 1 次、分裂 1 次，產生 2 個雙套（2n）子細胞，負責生長、修補與無性生殖；「減數分裂」複製 1 次、分裂 2 次，產生 4 個單套（n）子細胞，專門用來產生配子。'
        },
        {
          title: '細胞分裂與減數分裂的過程排序',
          description: '細胞分裂與減數分裂皆由「母細胞染色體複製」開始，請依序排列兩條路徑的分裂過程：',
          type: 'order',
          branches: [
            { id: 'mitosis', title: '細胞分裂', icon: '🔄' },
            { id: 'meiosis', title: '減數分裂', icon: '✂️' }
          ],
          items: [
            { text: '母細胞染色體複製', stepNo: '1', hint: '共用第 1 步（染色體複製）', explain: '無論是細胞分裂或減數分裂，第 1 步都是母細胞染色體先複製一次。' },
            { text: '複製染色體分裂、細胞一分為二', branch: 'mitosis', stepNo: '2', hint: '細胞分裂・第 2 步', explain: '細胞分裂只分裂一次，複製的染色體直接分離、細胞一分為二。' },
            { text: '母細胞一個變兩個子細胞，染色體和母細胞相同數量', branch: 'mitosis', stepNo: '3', hint: '細胞分裂・第 3 步', explain: '細胞分裂最後產生 2 個子細胞，染色體數目與母細胞相同。' },
            { text: '同源染色體分離，細胞一分二，染色體不成對', branch: 'meiosis', stepNo: '2', hint: '減數分裂・第 2 步', explain: '減數分裂的第一次分裂會先讓「同源染色體分離」，因此染色體開始不成對。' },
            { text: '複製染色體分離，細胞再次一分二，染色體不成對', branch: 'meiosis', stepNo: '3', hint: '減數分裂・第 3 步', explain: '減數分裂的第二次分裂讓「複製染色體分離」，細胞再次一分為二。' },
            { text: '母細胞一個變四個子細胞，染色體僅母細胞一半套數', branch: 'meiosis', stepNo: '4', hint: '減數分裂・第 4 步', explain: '減數分裂經過兩次分裂後，1 個母細胞變成 4 個子細胞，染色體僅母細胞一半套數。' }
          ],
          summary: '兩種分裂都先經過「母細胞染色體複製」：細胞分裂只分裂 1 次（複製染色體分離），產生 2 個與母細胞染色體數相同的子細胞；減數分裂連續分裂 2 次（先同源染色體分離、再複製染色體分離），產生 4 個染色體減半的子細胞！'
        },
        {
          title: '減數分裂與受精作用的順序',
          description: '請依序排列有性生殖過程中，從生殖母細胞減數分裂到受精卵發育的順序：',
          type: 'order',
          items: [
            { text: '生殖母細胞（2n）在分裂前，染色體先複製一次' },
            { text: '第一次分裂：同源染色體分離，進入兩個子細胞' },
            { text: '第二次分裂：複製的染色體分離，形成4個配子（n）' },
            { text: '受精作用：精子（n）與卵（n）結合成受精卵（2n）' },
            { text: '受精卵（2n）經多次細胞分裂，發育為新個體（2n）' }
          ],
          summary: '減數分裂先複製 1 次 → 第 1 次分裂「同源染色體分離」→ 第 2 次分裂「複製染色體分離」形成 4 個單套配子（n）→ 受精結合恢復雙套受精卵（2n）→ 再經「細胞分裂」發育成新個體！'
        }
      ]
    },

    // =====================================================
    // 1·2 無性生殖（3 關）
    // =====================================================
    {
      id: '7b-1-2',
      title: '1·2 無性生殖',
      levels: [
        {
          title: '常見的無性生殖方式',
          description: '請將下列生殖原理與代表生物，歸類到對應的無性生殖方式：',
          type: 'classification',
          zones: [
            { id: 'fission', title: '分裂生殖', icon: '🦠' },
            { id: 'budding', title: '出芽生殖', icon: '🫧' },
            { id: 'fragmentation', title: '斷裂生殖', icon: '⭐' },
            { id: 'spore', title: '孢子繁殖', icon: '🍄' }
          ],
          items: [
            { text: '單細胞生物經細胞分裂產生兩新個體', zone: 'fission' },
            { text: '變形蟲', zone: 'fission' },
            { text: '草履蟲', zone: 'fission' },
            { text: '母體長出芽體，成熟後脫離成新個體', zone: 'budding' },
            { text: '水螅', zone: 'budding' },
            { text: '酵母菌（單細胞真菌）', zone: 'budding', explain: '酵母菌雖然是單細胞生物，但它是長出小芽體行「出芽生殖」，不是分裂生殖！' },
            { text: '個體受外力斷成數段，各發育新個體', zone: 'fragmentation' },
            { text: '水綿（絲狀綠藻）', zone: 'fragmentation' },
            { text: '渦蟲', zone: 'fragmentation', explain: '渦蟲橫切成數段後各自長成新個體，屬於「斷裂生殖」，不是分裂生殖。' },
            { text: '海星', zone: 'fragmentation' },
            { text: '產生大量孢子，散播適當環境萌發', zone: 'spore' },
            { text: '黑黴菌', zone: 'spore' },
            { text: '青黴菌', zone: 'spore' }
          ],
          summary: '變形蟲與草履蟲行「分裂生殖」；水螅與酵母菌長出芽體行「出芽生殖」；水綿、渦蟲與海星片段再生成新個體為「斷裂生殖」；黑黴菌與青黴菌則行「孢子繁殖」。'
        },
        {
          title: '植物的營養器官繁殖與組織培養',
          description: '請將下列植物的無性繁殖實例，歸類到利用「根」、「莖」、「葉」繁殖或「組織培養」：',
          type: 'classification',
          zones: [
            { id: 'root', title: '用「根」繁殖', icon: '🍠' },
            { id: 'stem', title: '用「莖」繁殖', icon: '🥔' },
            { id: 'leaf', title: '用「葉」繁殖', icon: '🍃' },
            { id: 'tissue', title: '組織培養', icon: '🧪' }
          ],
          items: [
            { text: '番薯利用肥大的「塊根」發芽生根', zone: 'root' },
            { text: '馬鈴薯利用「塊莖」上的芽眼發芽', zone: 'stem', explain: '馬鈴薯食用與繁殖的部位是地下的「塊莖」，不是根！' },
            { text: '草莓利用「匍匐莖」長出新植株', zone: 'stem' },
            { text: '農民取一段番薯或薄荷的莖進行扦插', zone: 'stem', explain: '番薯除了可用塊根繁殖，農民也常取番薯的一段「莖」扦插繁殖。' },
            { text: '落地生根由葉片凹缺處長出新芽新根', zone: 'leaf' },
            { text: '石蓮利用肥厚葉片基部長出新植株', zone: 'leaf' },
            { text: '取植物組織放入含營養與激素培養基', zone: 'tissue' },
            { text: '市面上蘭花大量且快速繁殖的方式', zone: 'tissue' },
            { text: '培育無病原菌的抗黃葉病香蕉幼苗', zone: 'tissue' }
          ],
          summary: '植物可利用根（番薯塊根）、莖（馬鈴薯塊莖、草莓匍匐莖、番薯與薄荷的莖扦插）、葉（落地生根、石蓮）進行營養器官繁殖；也可將組織放入含營養與激素的培養基中進行「組織培養」（如蘭花、健康香蕉苗）。'
        },
        {
          title: '無性生殖與有性生殖的比較',
          description: '請比較「無性生殖」與「有性生殖」的過程與子代特性：',
          type: 'classification',
          zones: [
            { id: 'asexual', title: '無性生殖', icon: '🌱' },
            { id: 'sexual', title: '有性生殖', icon: '🌸' }
          ],
          items: [
            { text: '不需經過配子（精子與卵）的結合', zone: 'asexual' },
            { text: '只經細胞分裂，通常不經減數分裂', zone: 'asexual' },
            { text: '子代特徵與親代相同（保留甜度）', zone: 'asexual', explain: '無性生殖可完整保留親代的優良特徵（例如鳳梨或水果的甜度）。' },
            { text: '缺乏個體差異，環境改變易被淘汰', zone: 'asexual' },
            { text: '需經減數分裂產生配子並完成受精', zone: 'sexual' },
            { text: '染色體重新配對組合，遺傳物質重組', zone: 'sexual' },
            { text: '子代與親代之間、子代彼此間差異大', zone: 'sexual' },
            { text: '環境劇烈改變時，子代適應力較高', zone: 'sexual' }
          ],
          summary: '無性生殖不經配子結合，子代與親代特徵幾乎相同，有利保留優良性狀，但環境改變時易被淘汰；有性生殖經減數分裂與受精作用使染色體重新組合，子代差異大，較能適應多變的環境。'
        }
      ]
    },

    // =====================================================
    // 1·3 有性生殖（5 關）
    // =====================================================
    {
      id: '7b-1-3',
      title: '1·3 有性生殖',
      levels: [
        {
          title: '體外受精與體內受精的比較',
          description: '請比較動物的受精方式，將下列動物與特性歸類到「體外受精」或「體內受精」：',
          type: 'classification',
          zones: [
            { id: 'external', title: '體外受精', icon: '🐟' },
            { id: 'internal', title: '體內受精', icon: '🐦' }
          ],
          items: [
            { text: '多數的魚類（如小丑魚）', zone: 'external' },
            { text: '珊瑚', zone: 'external' },
            { text: '多數的兩生類（如青蛙、蟾蜍）', zone: 'external' },
            { text: '將卵與精子排放到水中完成結合', zone: 'external' },
            { text: '受水溫與水流影響，受精成功率較低', zone: 'external' },
            { text: '雌體一次釋出大量的卵以增加機會', zone: 'external' },
            { text: '雄蛙抱緊雌蛙促使排卵（假交配）', zone: 'external', explain: '青蛙抱接（假交配）只是促使雌蛙將卵排到水中，精子與卵仍在體外（水中）結合，屬於體外受精！' },
            { text: '昆蟲', zone: 'internal' },
            { text: '爬蟲類（如烏龜、蜥蜴）', zone: 'internal', explain: '爬蟲類雖然是「卵生」，但受精過程是在雌體內完成的「體內受精」!' },
            { text: '鳥類（如紅鶴、企鵝）', zone: 'internal', explain: '鳥類雖然是「卵生」，但受精過程是在雌體內完成的「體內受精」!' },
            { text: '哺乳類（如非洲水牛、人類）', zone: 'internal' },
            { text: '藉由交配將精子送入雌性體內結合', zone: 'internal' },
            { text: '受精環境受保護，受精成功率較高', zone: 'internal' },
            { text: '雌體釋出卵的數目通常較少', zone: 'internal' },
            { text: '包含所有胎生動物與陸生卵生動物', zone: 'internal' }
          ],
          summary: '多數魚類、珊瑚與兩生類（含假交配的青蛙）行「體外受精」，排卵量多但受精率較低；昆蟲、爬蟲類、鳥類與哺乳類皆行「體內受精」，排卵量較少但受精成功率較高。'
        },
        {
          title: '雞蛋的構造與功能',
          description: '在觀察雞蛋的實驗中，請將下列構造位置與功能歸類到對應部位：',
          type: 'classification',
          zones: [
            { id: 'germinal', title: '小白點（含細胞核）', icon: '🐣' },
            { id: 'yolk_white', title: '卵黃與蛋白', icon: '🍳' },
            { id: 'chalaza', title: '繫帶', icon: '🪢' },
            { id: 'shell_air', title: '氣室、蛋殼與殼膜', icon: '🫧' }
          ],
          items: [
            { text: '位於卵黃表面，內含有細胞核', zone: 'germinal' },
            { text: '受精後會發育成新個體（小雞）', zone: 'germinal', explain: '含有細胞核、受精後真正發育成小雞的是卵黃上的「小白點」，不是整個卵黃或蛋白！' },
            { text: '提供胚胎發育所需的養分', zone: 'yolk_white' },
            { text: '其中卵黃與小白點合稱為一個卵細胞', zone: 'yolk_white', explain: '雞蛋中真正的「卵細胞」只包含小白點（含細胞核）與卵黃（細胞質）；蛋白、繫帶、蛋殼都是輸卵管分泌包覆上去的。' },
            { text: '位於卵黃兩端，可固定卵黃位置', zone: 'chalaza', explain: '繫帶的功能是固定卵黃位置，不是像人類臍帶那樣輸送養分！' },
            { text: '使卵黃維持在雞蛋中央，避免晃動', zone: 'chalaza' },
            { text: '位於雞蛋較鈍的一端，提供氣體交換', zone: 'shell_air' },
            { text: '包覆在外側，具有保護內部構造功能', zone: 'shell_air' }
          ],
          summary: '雞蛋中「小白點＋卵黃」是一個卵細胞：小白點含細胞核，受精後發育為新個體；卵黃與蛋白提供胚胎養分；繫帶負責固定卵黃位置；鈍端的氣室提供氣體，蛋殼與殼膜負責保護。'
        },
        {
          title: '人類的生殖與胚胎發育',
          description: '請將人類生殖系統與胚胎發育構造的功能，歸類到對應部位：',
          type: 'classification',
          zones: [
            { id: 'ovary_tube', title: '卵巢與輸卵管', icon: '🥚' },
            { id: 'uterus', title: '子宮', icon: '🏠' },
            { id: 'placenta_cord', title: '胎盤與臍帶', icon: '🔗' },
            { id: 'amnion', title: '羊膜與羊水', icon: '💧' }
          ],
          items: [
            { text: '產生卵並分泌雌性激素的女性性腺', zone: 'ovary_tube' },
            { text: '精子與卵相遇並結合成受精卵的場所', zone: 'ovary_tube', explain: '人類精子與卵結合成受精卵的場所在「輸卵管」，不是子宮！' },
            { text: '胚胎著床埋入增厚內膜並發育的場所', zone: 'uterus' },
            { text: '分娩時會劇烈收縮引起陣痛產出胎兒', zone: 'uterus' },
            { text: '胎兒藉此從母體獲得養分與氧氣', zone: 'placenta_cord', explain: '胎兒是藉由「胎盤與臍帶」與母體交換物質，不是靠羊水提供養分！' },
            { text: '將胎兒產生的代謝廢物送交母體排出', zone: 'placenta_cord' },
            { text: '母體與胎兒血管不直接相連，靠擴散', zone: 'placenta_cord' },
            { text: '受精卵發育出來的器官', zone: 'placenta_cord', explain: '臍帶（與部分胎盤）是由受精卵發育而來的構造；卵巢、輸卵管與子宮則是母體本身的器官。' },
            { text: '包圍在胎兒四周，可減低受到的震動', zone: 'amnion' },
            { text: '提供胎兒穩定且溼潤的保護環境', zone: 'amnion' }
          ],
          summary: '人類的卵在「卵巢」產生、於「輸卵管」受精，再到「子宮」內膜著床發育；胎兒包在「羊膜與羊水」中減少震動，並藉受精卵發育出的「胎盤與臍帶」和母體交換養分、氧氣與廢物（母子血管不直接相連）。'
        },
        {
          title: '開花植物的有性生殖順序',
          description: '請依序排列開花植物從花粉成熟、授粉、受精到形成果實與種子的順序：',
          type: 'order',
          items: [
            { text: '雄蕊的花藥成熟，釋放內含精細胞的花粉' },
            { text: '花粉藉風、昆蟲或鳥傳播到雌蕊柱頭上（授粉）' },
            { text: '花粉在柱頭上萌發出花粉管，向子房內的胚珠延伸' },
            { text: '精細胞經由花粉管進入胚珠，與卵結合完成受精' },
            { text: '受精後，子房膨大發育成果實，胚珠發育成種子' }
          ],
          summary: '開花植物靠「花粉管」將精細胞送入胚珠與卵結合（不需以水為媒介）；受精後「子房→果實」、「胚珠→種子」，胚珠數目決定種子數目（如櫻桃單胚珠、番茄多胚珠）。'
        },
        {
          title: '風媒花與蟲媒花的比較',
          description: '請比較開花植物傳播花粉的方式，將下列特徵與植物歸類到「風媒花」或「蟲媒花」：',
          type: 'classification',
          zones: [
            { id: 'wind', title: '風媒花（如玉米）', icon: '🌬️' },
            { id: 'insect', title: '蟲媒花（如木槿、百日草）', icon: '🦋' }
          ],
          items: [
            { text: '花朵通常較小，顏色不鮮豔', zone: 'wind' },
            { text: '通常沒有香氣，也沒有蜜腺', zone: 'wind' },
            { text: '花粉數量非常多且輕，易隨風飄散', zone: 'wind' },
            { text: '玉米、水稻與芒草的花屬於此類', zone: 'wind' },
            { text: '花朵通常較大，花瓣顏色鮮豔明顯', zone: 'insect' },
            { text: '常具有芳香氣味與可分泌花蜜的蜜腺', zone: 'insect' },
            { text: '花粉常具有黏性，易附著在昆蟲身上', zone: 'insect' },
            { text: '有些具脣形花瓣供降落或具引導紋路', zone: 'insect' },
            { text: '木槿、百日草與粉萼鼠尾草的花', zone: 'insect' }
          ],
          summary: '「風媒花」（如玉米）花朵小而不鮮豔、無香氣蜜腺，但花粉多而輕；「蟲媒花」（如木槿、百日草、粉萼鼠尾草）花瓣大而鮮豔、有香氣與花蜜、花粉具黏性，甚至有脣形降落平臺與紫外光引導紋路。'
        }
      ]
    }
  ]
});
