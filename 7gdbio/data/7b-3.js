// 七下第 3 章：地球上的生物
QuizWorld.registerChapter({
  id: '7b-3',
  sections: [
    // ==================== 3·1 ====================
    {
      id: '7b-3-1',
      title: '3·1 持續改變的生命',
      levels: [
        {
          title: '第 1 關：化石的形成與種類',
          type: 'classification',
          description: '請將下列化石或生物實例，歸類到「遺體化石」、「活動痕跡化石」或「活化石」！',
          zones: [
            { id: 'body_fossil', title: '生物遺體形成的化石', icon: '🦴' },
            { id: 'trace_fossil', title: '生物活動痕跡形成的化石', icon: '🐾' },
            { id: 'living_fossil', title: '活化石（現存原始物種）', icon: '🦀' }
          ],
          items: [
            { text: '埋在岩層中的恐龍骨骼與牙齒', zone: 'body_fossil', explain: '動物堅硬的骨骼、牙齒不易被分解，掩埋後易形成遺體化石' },
            { text: '掩埋在沉積物中的三葉蟲外骨骼', zone: 'body_fossil', explain: '三葉蟲堅硬的外殼埋入岩層中可形成遺體化石' },
            { text: '松樹樹脂包覆昆蟲形成的琥珀化石', zone: 'body_fossil', explain: '古代松樹樹脂包覆動植物並經地質作用形成的琥珀屬於遺體化石' },
            { text: '西伯利亞永凍層中的猛獁象遺體', zone: 'body_fossil', explain: '寒冷永凍層中遺體不易被分解，可形成保有柔軟組織的遺體化石' },
            { text: '保存在岩層中的恐龍糞便化石', zone: 'trace_fossil', explain: '生物排泄物（糞便）經地質作用保存下來，屬於活動痕跡化石' },
            { text: '留在沉積岩層上的三葉蟲爬痕', zone: 'trace_fossil', explain: '生物爬行留下的痕跡形成的化石屬於痕跡化石' },
            { text: '地層中保存下來的恐龍腳印化石', zone: 'trace_fossil', explain: '動物行走留下的腳印經地質作用保存，屬於活動痕跡化石' },
            { text: '生活環境變化小、保留原始形態的鱟', zone: 'living_fossil', explain: '現存物種因生活環境從古至今變化不大而保留原始外形的稱為活化石，如鱟' },
            { text: '從遠古至今外形變化不大的現存銀杏', zone: 'living_fossil', explain: '銀杏是現存仍保留原始形態特徵的植物，稱為活化石' }
          ],
          summary: '化石包含生物堅硬部位或特殊環境保存下來的「遺體化石」（如恐龍骨骼、琥珀、永凍層猛獁象）與「活動痕跡化石」（如糞便、爬痕、腳印）；而現存仍保留遠古原始形態的生物則稱為「活化石」（如鱟、銀杏）。'
        },
        {
          title: '第 2 關：化石所透露的訊息（演化與環境演變）',
          type: 'classification',
          description: '請區分下列化石證據分別屬於「馬的演化歷程」還是「推測古代地球環境」！',
          zones: [
            { id: 'evolution', title: '生物演化的證據（馬的演變）', icon: '🐎' },
            { id: 'environment', title: '地球環境改變的證據', icon: '🌊' }
          ],
          items: [
            { text: '馬的體型由小逐漸演化變大', zone: 'evolution', explain: '比較不同年代的馬化石，可看出馬的身高與體型由小變大' },
            { text: '馬四肢的趾數減少，利於草原奔跑', zone: 'evolution', explain: '馬的腳趾數目減少，是適應草原奔跑的演化結果' },
            { text: '馬牙齒咀嚼面積變大，利於磨碎草類', zone: 'evolution', explain: '馬的牙齒咀嚼面變大，有助於磨碎草原上的草本植物' },
            { text: '馬從適應森林演變為適應草原環境', zone: 'evolution', explain: '馬化石的形態構造變化，直接證明生物隨環境演化的歷程' },
            { text: '陸地發現珊瑚化石代表曾為溫暖淺海', zone: 'environment', explain: '珊瑚須生活在清澈溫暖的淺海，陸地發現珊瑚化石代表古環境曾為淺海' },
            { text: '由對環境敏感的生物化石推測古環境', zone: 'environment', explain: '對生存環境要求嚴苛的生物化石，可用來推測當時的地球環境' },
            { text: '地底煤炭是由古代高大樹蕨深埋形成', zone: 'environment', explain: '現今地層中的煤炭，反映該地古代曾有茂密的樹蕨森林環境' },
            { text: '三葉蟲化石出現代表當時為海洋環境', zone: 'environment', explain: '三葉蟲生存於海中，發現三葉蟲化石的岩層代表當時為海洋環境' }
          ],
          summary: '化石是研究生物演化最直接的證據（如馬的體型由小變大、趾數減少、牙齒咀嚼面變大，從森林適應到草原），也能用來推測古環境的變遷（如發現珊瑚化石代表以前是清澈溫暖的淺海）。'
        }
      ]
    },

    // ==================== 3·2 ====================
    {
      id: '7b-3-2',
      title: '3·2 生物的命名與分類',
      levels: [
        {
          title: '第 1 關：學名（二名法）與俗名的比較',
          type: 'classification',
          description: '請將下列有關生物命名的敘述與實例，歸類到「屬名」、「種小名」或「俗名」！',
          zones: [
            { id: 'genus', title: '屬名（學名的第一個字）', icon: '🏷️' },
            { id: 'specific', title: '種小名（學名的第二個字）', icon: '📝' },
            { id: 'common', title: '俗名（日常或各地稱呼）', icon: '💬' }
          ],
          items: [
            { text: '拉丁文名詞，代表生物的分類關係', zone: 'genus', explain: '學名的第一個字為屬名，是拉丁文名詞，代表分類地位與親緣關係' },
            { text: '第一個英文字母必須大寫，斜體表示', zone: 'genus', explain: '屬名視為專有名詞，首字母須大寫，印刷用斜體、手寫加底線' },
            { text: '人學名中的Homo（人屬）', zone: 'genus', explain: 'Homo 代表「人屬」，是學名中的屬名' },
            { text: '拉丁文形容詞，描述特徵或產地', zone: 'specific', explain: '學名的第二個字為種小名，是形容詞，描述生物特徵、產地或紀念人物' },
            { text: '字母全部小寫，不能單獨代表物種', zone: 'specific', explain: '種小名全部使用小寫字母，必須搭配屬名才構成完整學名' },
            { text: '人學名中的sapiens（智慧）', zone: 'specific', explain: 'sapiens 為種小名，形容「有智慧的」' },
            { text: '以中文或各國語言文字命名的稱呼', zone: 'common', explain: '學名以外、以各地語言習慣命名的名稱皆稱為俗名' },
            { text: '將同一種生物稱為牡蠣、蚵或蠔', zone: 'common', explain: '牡蠣、蚵、蠔都是指同一種生物的不同俗名' },
            { text: '臺灣野山羊、臺灣長鬃山羊等稱呼', zone: 'common', explain: '臺灣野山羊、臺灣羚羊、臺灣長鬃山羊皆為俗名' }
          ],
          summary: '林奈倡導的「二名法」以兩個拉丁文構成國際通用的「學名」（斜體或加底線）：第一字為「屬名」（名詞、首字大寫），第二字為「種小名」（形容詞、全小寫）；而日常使用的中文或地方稱呼則為「俗名」。'
        },
        {
          title: '第 2 關：生物分類階層由高到低排序',
          type: 'order',
          description: '請將生物分類的七個階層，依層次由高至低（包含種類由多到少）排列！',
          items: [
            { text: '界（最高分類階層，包含生物種類最多，如動物界）', explain: '第 1 層（最高）：界，包含生物種類最多、親緣關係最遠' },
            { text: '門（界之下的階層，如具有脊椎骨的生物屬於脊索動物門）', explain: '第 2 層：界之下為門（如脊索動物門）' },
            { text: '綱（門之下的階層，如母體能分泌乳汁哺育幼兒的哺乳綱）', explain: '第 3 層：門之下為綱（如哺乳綱）' },
            { text: '目（綱之下的階層，如狼、狐、熊與虎所屬的食肉目）', explain: '第 4 層：綱之下為目（如食肉目）' },
            { text: '科（目之下的階層，如郊狼、灰狼與狐狸所屬的犬科）', explain: '第 5 層：目之下為科（如犬科）' },
            { text: '屬（科之下的階層，即學名第一個字，如郊狼與灰狼的犬屬）', explain: '第 6 層：科之下為屬（如犬屬 Canis）' },
            { text: '種（最低階層，自然交配能生下有生殖能力的後代）', explain: '第 7 層（最低）：種，包含種類最少、親緣關係最近' }
          ],
          summary: '生物分類階層由高至低依序為「界、門、綱、目、科、屬、種」；階層越高，包含的生物種類越多、親緣關係越遠；階層越低，包含的種類越少、親緣關係越接近。'
        },
        {
          title: '第 3 關：同種生物與親緣關係的判斷',
          type: 'classification',
          description: '請判斷下列生物或學名組合屬於「同種生物」、「同屬不同種」還是「不同屬生物」！',
          zones: [
            { id: 'same_species', title: '同種生物', icon: '🐱' },
            { id: 'same_genus', title: '同屬不同種（親緣關係近）', icon: '🐺' },
            { id: 'diff_genus', title: '不同屬生物（親緣關係遠）', icon: '🦋' }
          ],
          items: [
            { text: '自然情況下交配能生具生殖能力後代', zone: 'same_species', explain: '「種」的定義為在自然情況下交配繁殖，能產下具生殖能力的後代' },
            { text: '波斯貓與暹羅貓可生下有生殖力後代', zone: 'same_species', explain: '波斯貓與暹羅貓雖外觀不同，但子代具生殖能力，屬於同種生物' },
            { text: '學名的屬名與種小名兩個字完全相同', zone: 'same_species', explain: '同種生物的國際通用學名（屬名＋種小名）完全相同' },
            { text: '學名的第一個字相同、第二個字不同', zone: 'same_genus', explain: '屬名相同、種小名不同，代表兩者同屬但不同種，親緣關係接近' },
            { text: '郊狼與灰狼學名皆為Canis開頭', zone: 'same_genus', explain: '郊狼（Canis latrans）與灰狼（Canis lupus）同為犬屬、不同種' },
            { text: '公驢與母馬雜交生下無生殖能力的騾', zone: 'same_genus', explain: '馬和驢同屬不同種，雜交生下的騾無法正常減數分裂、無生殖能力' },
            { text: '學名的第一個字不同、第二個字相同', zone: 'diff_genus', explain: '屬名不同、僅種小名相同（如皆為 taiwanensis），代表不同屬且親緣關係遠' },
            { text: '臺灣二葉松與臺灣水韭僅種小名相同', zone: 'diff_genus', explain: '兩者屬名不同，僅種小名皆代表產地臺灣，親緣關係遠' }
          ],
          summary: '同種生物在自然下交配可產下具生殖能力的後代（如波斯貓與暹羅貓；馬與驢生下的騾無生殖能力，故不同種）；判斷學名時，必須看第一個字「屬名」是否相同，屬名相同才代表同屬、親緣關係近。'
        },
        {
          title: '第 4 關：生物五界分類原則與病毒的特性',
          type: 'classification',
          description: '請區分「原核生物界」、「真核生物四界」與「病毒」的構造及分類特性！',
          zones: [
            { id: 'prokaryote', title: '原核生物界', icon: '🦠' },
            { id: 'eukaryote', title: '真核生物四界', icon: '🌿' },
            { id: 'virus', title: '病毒（不屬於五界）', icon: '👾' }
          ],
          items: [
            { text: '遺傳物質無核膜包圍，無細胞核', zone: 'prokaryote', explain: '原核生物沒有核膜包圍形成的細胞核，構造最簡單' },
            { text: '包含所有細菌與藍綠菌（藍綠藻）', zone: 'prokaryote', explain: '細菌與藍綠菌皆無細胞核，屬於原核生物界' },
            { text: '細胞具有核膜包圍形成的細胞核構造', zone: 'eukaryote', explain: '具有細胞核的生物統稱為真核生物' },
            { text: '包含原生生物、真菌、植物與動物界', zone: 'eukaryote', explain: '五界中除了原核生物界外，其餘四界皆屬於真核生物' },
            { text: '不具有細胞構造，無法歸入生物五界', zone: 'virus', explain: '病毒沒有細胞膜、細胞質等細胞構造，不屬於五界中的任何一界' },
            { text: '由蛋白質外殼與內部遺傳物質所構成', zone: 'virus', explain: '病毒構造非常簡單，僅由蛋白質外殼包覆遺傳物質組成' },
            { text: '只能在活細胞中才能進行繁殖', zone: 'virus', explain: '病毒必須寄生在活細胞內才能繁殖後代' },
            { text: '引起流行性感冒、登革熱與愛滋病', zone: 'virus', explain: '流感、登革熱、愛滋病（AIDS）皆是由病毒引起的傳染病' },
            { text: '引起新冠肺炎與小兒麻痺的病原體', zone: 'virus', explain: '新冠肺炎（COVID-19）與小兒麻痺皆是由病毒所引起' }
          ],
          summary: '科學家依細胞構造、營養方式與生活史將生物分為五界：無細胞核的「原核生物界」，與有細胞核的「原生生物界、真菌界、植物界、動物界」；而「病毒」無細胞構造、只能在活細胞內繁殖，不屬於五界。'
        }
      ]
    },

    // ==================== 3·3 ====================
    {
      id: '7b-3-3',
      title: '3·3 原核生物與原生生物',
      levels: [
        {
          title: '第 1 關：原核生物界—細菌與藍綠菌',
          type: 'classification',
          description: '請區分原核生物界中「一般細菌」與「藍綠菌（藍綠藻）」的特性與代表生物！',
          zones: [
            { id: 'bacteria', title: '一般細菌', icon: '🦠' },
            { id: 'cyanobacteria', title: '藍綠菌（藍綠藻）', icon: '🟢' }
          ],
          items: [
            { text: '依形態可分球形、桿形與螺旋形', zone: 'bacteria', explain: '細菌常見形態有球形（金黃色葡萄球菌）、桿形（結核桿菌）與螺旋形' },
            { text: '發酵乳中的乳酸菌可維持腸道健康', zone: 'bacteria', explain: '優酪乳中的乳酸菌屬於對人體有益的細菌' },
            { text: '草食動物腸道內協助消化纖維素', zone: 'bacteria', explain: '牛、羊腸道內的瘤胃球菌等共生細菌可協助分解纖維素' },
            { text: '分解環境中生物遺體與排泄物', zone: 'bacteria', explain: '許多細菌在生態系中扮演分解者的角色，促進物質循環' },
            { text: '引起肺結核或食物中毒的致病菌', zone: 'bacteria', explain: '結核桿菌與金黃色葡萄球菌屬於會引起疾病的細菌' },
            { text: '無葉綠體，但含葉綠素可行光合作用', zone: 'cyanobacteria', explain: '藍綠菌屬於原核生物，沒有葉綠體，但具葉綠素可行光合作用' },
            { text: '又稱為藍綠藻或藍菌，屬於原核生物', zone: 'cyanobacteria', explain: '藍綠藻雖俗稱有「藻」，但無細胞核，屬於原核生物界的藍綠菌' },
            { text: '色球藻、顫藻與念珠藻等生物', zone: 'cyanobacteria', explain: '色球藻、顫藻、念珠藻皆屬於原核生物界的藍綠菌' },
            { text: '雨後出現、可作為食材的雨來菇', zone: 'cyanobacteria', explain: '雨來菇是一種可食用的藍綠菌，屬於原核生物而非蕈類' }
          ],
          summary: '原核生物界沒有細胞核，包含「細菌」（球形、桿形、螺旋形，有分解者、共生菌與致病菌）與「藍綠菌」（又稱藍綠藻，無葉綠體但含葉綠素可行光合作用，如顫藻、念珠藻、雨來菇）。'
        },
        {
          title: '第 2 關：原生生物界三大類比較',
          type: 'classification',
          description: '請依營養方式與特徵，將下列生物歸類到原生生物界的「藻類」、「原生動物」或「原生菌類」！',
          zones: [
            { id: 'algae', title: '藻類（行光合作用）', icon: '🌿' },
            { id: 'protozoa', title: '原生動物（以攝食維生）', icon: '🔬' },
            { id: 'slime_mold', title: '原生菌類（以分解物質維生）', icon: '🍂' }
          ],
          items: [
            { text: '具細胞壁與葉綠體，水中重要生產者', zone: 'algae', explain: '藻類有細胞壁與葉綠體，可行光合作用製造養分' },
            { text: '單細胞的單胞藻、矽藻與大型巨藻', zone: 'algae', explain: '藻類包含單細胞（單胞藻、矽藻）與多細胞大型藻類（巨藻）' },
            { text: '石蓴、昆布（海帶）與石花菜', zone: 'algae', explain: '石蓴、昆布可食用，石花菜可提煉洋菜膠（寒天）' },
            { text: '無細胞壁，多以攝食微生物維生', zone: 'protozoa', explain: '原生動物沒有細胞壁，多以攝食其他微生物或有機質維生' },
            { text: '草履蟲（纖毛）與線鞭蟲（鞭毛）', zone: 'protozoa', explain: '草履蟲利用纖毛運動，線鞭蟲利用鞭毛運動，皆屬原生動物' },
            { text: '改變外形移動的變形蟲與寄生瘧原蟲', zone: 'protozoa', explain: '變形蟲以偽足移動捕食，瘧原蟲寄生在紅血球內引起瘧疾' },
            { text: '生活在腐木落葉潮溼環境的黏菌', zone: 'slime_mold', explain: '黏菌是原生菌類的主要代表生物' },
            { text: '以分解細菌、真菌及腐敗物質維生', zone: 'slime_mold', explain: '原生菌類（黏菌）以分解腐敗物質維生，屬於分解者' },
            { text: '平時如變形蟲移動，繁殖期產生孢子', zone: 'slime_mold', explain: '黏菌平時能緩慢移動，繁殖期會形成產生孢子的構造' }
          ],
          summary: '原生生物界為構造最簡單的真核生物，依營養方式分為三類：行光合作用的「藻類」（單胞藻、矽藻、昆布、石花菜）、攝食維生的「原生動物」（草履蟲、變形蟲、線鞭蟲、瘧原蟲）與分解腐敗物的「原生菌類」（黏菌）。'
        },
        {
          title: '第 3 關：藍綠菌、藻類與眼蟲（裸藻）的易混淆構造比較',
          type: 'classification',
          description: '請仔細比較「藍綠菌」、「藻類」與「眼蟲（裸藻）」的細胞構造與特性！',
          zones: [
            { id: 'cyano', title: '藍綠菌（原核生物界）', icon: '🟢' },
            { id: 'algae', title: '藻類（原生生物界）', icon: '🌊' },
            { id: 'euglena', title: '眼蟲（裸藻，原生生物界）', icon: '👁️' }
          ],
          items: [
            { text: '無細胞核與葉綠體，含葉綠素可製糖', zone: 'cyano', explain: '藍綠菌為原核生物，沒有細胞核與葉綠體，靠葉綠素行光合作用' },
            { text: '名字有「藻」或「菇」卻屬原核生物', zone: 'cyano', explain: '藍綠藻、雨來菇等名稱雖像藻類或菇類，實為原核生物界的藍綠菌' },
            { text: '包含顫藻、念珠藻與雨來菇等', zone: 'cyano', explain: '顫藻、念珠藻、色球藻、雨來菇皆為藍綠菌' },
            { text: '有細胞核、細胞壁與葉綠體', zone: 'algae', explain: '藻類是真核生物，具有細胞核、細胞壁與葉綠體' },
            { text: '不屬於植物界，無維管束與根莖葉', zone: 'algae', explain: '藻類雖可行光合作用，但無維管束與真正的根、莖、葉，屬於原生生物界' },
            { text: '包含單胞藻、矽藻、石蓴與昆布', zone: 'algae', explain: '單胞藻、矽藻、石蓴、昆布、石花菜皆屬於原生生物界的藻類' },
            { text: '有細胞核與葉綠體，但沒有細胞壁', zone: 'euglena', explain: '眼蟲（又稱裸藻）具有葉綠體但沒有細胞壁' },
            { text: '兼具動、植物特徵，以鞭毛運動', zone: 'euglena', explain: '眼蟲（裸藻）以鞭毛運動，兼具動物與植物細胞特徵' },
            { text: '有光可行光合作用，無光可攝取養分', zone: 'euglena', explain: '眼蟲（裸藻）在有光時行光合作用自製葡萄糖，黑暗中可直接自外界攝取養分' }
          ],
          summary: '藍綠菌屬於「原核生物界」（無細胞核、無葉綠體，有葉綠素）；藻類屬於「原生生物界」（有細胞核、細胞壁、葉綠體，無根莖葉與維管束）；眼蟲（又稱裸藻）屬於「原生生物界」（有細胞核、葉綠體，無細胞壁，有光行光合作用、無光攝食）。'
        }
      ]
    },

    // ==================== 3·4 ====================
    {
      id: '7b-3-4',
      title: '3·4 真菌界',
      levels: [
        {
          title: '第 1 關：真菌界三類生物的特徵比較',
          type: 'classification',
          description: '請比較真菌界中「酵母菌」、「黴菌」與「蕈類」的構造與生殖特徵！',
          zones: [
            { id: 'yeast', title: '酵母菌', icon: '🍺' },
            { id: 'mold', title: '黴菌', icon: '🍞' },
            { id: 'mushroom', title: '蕈類', icon: '🍄' }
          ],
          items: [
            { text: '單細胞且不具有菌絲的真菌', zone: 'yeast', explain: '酵母菌是真菌界中唯一常見的單細胞、無菌絲真菌' },
            { text: '通常以出芽生殖方式進行無性繁殖', zone: 'yeast', explain: '酵母菌主要以出芽生殖繁殖，不產生菌絲' },
            { text: '發酵分解醣類產生酒精與二氧化碳', zone: 'yeast', explain: '酵母菌發酵時會產生酒精與二氧化碳，可用於釀酒與做麵包' },
            { text: '多細胞、由菌絲構成的微小型真菌', zone: 'mold', explain: '黴菌為多細胞真菌，個體由許多菌絲構成' },
            { text: '常見有黑黴菌與青黴菌，以孢子繁殖', zone: 'mold', explain: '黑黴菌（有孢子囊）與青黴菌皆屬於以孢子繁殖的黴菌' },
            { text: '孢子隨風散播，落在潮溼食物上發霉', zone: 'mold', explain: '空氣中飄散的黴菌孢子落在溫暖潮溼的食物上會萌發長出菌絲' },
            { text: '多細胞、由菌絲構成的大型真菌', zone: 'mushroom', explain: '蕈類是指個體較大型的多細胞真菌，同樣由緊密的菌絲構成' },
            { text: '又稱為菇類，成熟後可產生孢子繁殖', zone: 'mushroom', explain: '蕈類俗稱菇類，以孢子繁殖' },
            { text: '常見有香菇、木耳、竹蓀與靈芝', zone: 'mushroom', explain: '香菇、金針菇、木耳、竹蓀、靈芝皆屬於真菌界的蕈類' }
          ],
          summary: '真菌界的生物皆具有細胞壁、無葉綠體，分泌酵素分解外界養分後吸收：其中「酵母菌」為單細胞、無菌絲（出芽生殖）；「黴菌」與「蕈類」則為多細胞、有菌絲（孢子繁殖）。'
        },
        {
          title: '第 2 關：真菌與人類生活的關係',
          type: 'classification',
          description: '請將下列真菌在日常生活中的應用或影響，歸類到對應的分類區！',
          zones: [
            { id: 'food', title: '食品發酵應用', icon: '🥖' },
            { id: 'medicine', title: '醫療與藥用價值', icon: '💊' },
            { id: 'harmful', title: '引發疾病或具毒性', icon: '⚠️' }
          ],
          items: [
            { text: '利用酵母菌產生二氧化碳製作麵包', zone: 'food', explain: '酵母菌發酵產生的二氧化碳可使麵團膨鬆' },
            { text: '利用酵母菌無氧發酵用來釀酒', zone: 'food', explain: '酵母菌分解醣類產生酒精，可用來釀造酒類' },
            { text: '加入特定青黴菌發酵製作藍紋起司', zone: 'food', explain: '藍紋起司是利用可食用的特定青黴菌發酵熟成' },
            { text: '藉由黴菌發酵製作醬油、味噌豆腐乳', zone: 'food', explain: '醬油、味噌、豆腐乳等傳統食品需藉由無害的黴菌發酵製成' },
            { text: '從青黴菌提煉青黴素（盤尼西林）', zone: 'medicine', explain: '青黴菌提煉出的青黴素（盤尼西林）是能抑制細菌生長的抗生素' },
            { text: '靈芝與寄生昆蟲幼蟲的冬蟲夏草', zone: 'medicine', explain: '靈芝與冬蟲夏草（寄生蝙蝠蛾幼蟲的真菌）常作為中藥材' },
            { text: '黴菌感染皮膚造成足癬（香港腳）', zone: 'harmful', explain: '足癬（香港腳）是由黴菌感染人體皮膚所引起的疾病' },
            { text: '野外色彩鮮豔具劇毒的毒蠅傘毒瓢蕈', zone: 'harmful', explain: '毒蠅傘、毒瓢蕈等野生毒蕈含有劇毒，不可隨意採食' },
            { text: '食物發霉產生毒素，誤食會食物中毒', zone: 'harmful', explain: '一般發霉食物上的黴菌常會分泌毒素，不可食用' }
          ],
          summary: '真菌在生活中用途廣泛：酵母菌與特定黴菌可用於發酵食品（麵包、酒、醬油、藍紋起司）；青黴菌可提煉抗生素（青黴素）抑制細菌；但也有導致香港腳的黴菌、發霉毒素與有毒蕈類。'
        }
      ]
    },

    // ==================== 3·5 ====================
    {
      id: '7b-3-5',
      title: '3·5 植物界',
      levels: [
        {
          title: '第 1 關：植物界四大類的構造與生殖特徵',
          type: 'classification',
          description: '請依維管束、孢子、種子與果實的有無，將下列特徵歸類到對應的植物類別！',
          zones: [
            { id: 'bryophyte', title: '蘚苔植物', icon: '🌱' },
            { id: 'fern', title: '蕨類植物', icon: '🌿' },
            { id: 'gymnosperm', title: '裸子植物', icon: '🌲' },
            { id: 'angiosperm', title: '被子植物', icon: '🌸' }
          ],
          items: [
            { text: '最早登陸，有角質層但沒有維管束', zone: 'bryophyte', explain: '蘚苔植物是最早出現在陸地上的植物，有角質層但無維管束' },
            { text: '無真正的根莖葉，水分靠擴散運輸', zone: 'bryophyte', explain: '蘚苔植物沒有維管束與真正的根莖葉，個體通常較矮小' },
            { text: '最早演化出維管束，以孢子繁殖', zone: 'fern', explain: '蕨類植物具有維管束與根、莖、葉，不產生種子而以孢子繁殖' },
            { text: '幼葉捲曲，成熟葉背有褐色孢子囊堆', zone: 'fern', explain: '蕨類幼葉呈捲曲狀，成熟羽狀複葉背面常有孢子囊堆' },
            { text: '不開花，以雌、雄毬果作為生殖器官', zone: 'gymnosperm', explain: '裸子植物沒有花與果實，以毬果作為生殖器官' },
            { text: '靠花粉管受精，種子裸露無果實保護', zone: 'gymnosperm', explain: '裸子植物的種子裸露在雌毬果鱗片上，外無果實包覆' },
            { text: '葉多呈針狀（針葉樹），少數為闊葉', zone: 'gymnosperm', explain: '多數裸子植物為針葉樹（如松、杉、柏），少數為闊葉（如銀杏）' },
            { text: '又稱開花植物，花與果實為生殖器官', zone: 'angiosperm', explain: '被子植物具有花與果實，又稱為開花植物' },
            { text: '靠花粉管受精，種子包藏在果實內', zone: 'angiosperm', explain: '被子植物的種子有果實包覆保護，後代存活率高' },
            { text: '依種子內子葉數目分為雙子葉單子葉', zone: 'angiosperm', explain: '被子植物可依子葉數目分為雙子葉植物與單子葉植物' }
          ],
          summary: '植物界分為無維管束的「蘚苔植物」，以及有維管束的「蕨類植物」（孢子繁殖、幼葉捲曲）、「裸子植物」（毬果、花粉管受精、種子裸露）與「被子植物」（開花結果、種子藏於果實內）。'
        },
        {
          title: '第 2 關：植物界四大類的代表生物與應用',
          type: 'classification',
          description: '請將下列常見植物與生活應用，歸類到植物界的四大類別！',
          zones: [
            { id: 'bryophyte', title: '蘚苔植物', icon: '🌱' },
            { id: 'fern', title: '蕨類植物', icon: '🌿' },
            { id: 'gymnosperm', title: '裸子植物', icon: '🌲' },
            { id: 'angiosperm', title: '被子植物', icon: '🌸' }
          ],
          items: [
            { text: '平鋪地面的地錢與直立狀的土馬騌', zone: 'bryophyte', explain: '地錢與土馬騌是常見的蘚苔植物' },
            { text: '具良好保水性、常用於園藝的水苔', zone: 'bryophyte', explain: '水苔屬於蘚苔植物，保水性佳常用於園藝造景' },
            { text: '高大的樹狀筆筒樹與觀葉植物鐵線蕨', zone: 'fern', explain: '筆筒樹、腎蕨、鐵線蕨皆屬於蕨類植物' },
            { text: '可食用的鳥巢蕨（山蘇）與過溝菜蕨', zone: 'fern', explain: '鳥巢蕨（俗稱山蘇）與過溝菜蕨（俗稱過貓）為可食用的蕨類' },
            { text: '古代高大種類深埋地底形成現今煤炭', zone: 'fern', explain: '今日使用的煤炭，部分是由古代高大蕨類深埋地底經高溫高壓形成' },
            { text: '高海拔森林常見的松、杉、柏與紅檜', zone: 'gymnosperm', explain: '松、杉、柏、臺灣冷杉、紅檜（神木）皆屬於裸子植物' },
            { text: '闊葉的銀杏（白果）與庭園常見蘇鐵', zone: 'gymnosperm', explain: '銀杏（種子俗稱白果）與蘇鐵皆為不開花、結毬果的裸子植物' },
            { text: '提供食用種子的花生、綠豆與向日葵', zone: 'angiosperm', explain: '花生、綠豆、向日葵皆為開花結果的被子植物（雙子葉）' },
            { text: '主要糧食作物的稻米、玉米與竹子', zone: 'angiosperm', explain: '稻、玉米、竹子皆屬於開花結果的被子植物（單子葉）' },
            { text: '會開花的櫻花、油桐、百合與蘭花', zone: 'angiosperm', explain: '櫻花、油桐、油菜、百合、水仙、蘭花皆屬於被子植物' }
          ],
          summary: '地錢、土馬騌、水苔屬於蘚苔植物；筆筒樹、腎蕨、鐵線蕨、山蘇、過貓屬於蕨類植物；松、杉、柏、紅檜、銀杏、蘇鐵屬於裸子植物；花生、綠豆、稻、玉米、櫻花、百合等開花植物則屬於被子植物。'
        },
        {
          title: '第 3 關：被子植物—雙子葉與單子葉植物的比較',
          type: 'classification',
          description: '請比較被子植物中「雙子葉植物」與「單子葉植物」的構造特徵與代表植物！',
          zones: [
            { id: 'dicot', title: '雙子葉植物', icon: '🥜' },
            { id: 'monocot', title: '單子葉植物', icon: '🌽' }
          ],
          items: [
            { text: '種子內具有兩枚儲存養分的子葉', zone: 'dicot', explain: '雙子葉植物的種子內有 2 枚子葉' },
            { text: '葉脈多為網狀脈，根系為軸根系', zone: 'dicot', explain: '雙子葉植物葉脈呈網狀，根部主根明顯為軸根系' },
            { text: '花瓣數目多為 4 或 5 的倍數', zone: 'dicot', explain: '雙子葉植物的花瓣數為四、五或其倍數' },
            { text: '莖內維管束呈環狀排列，具有形成層', zone: 'dicot', explain: '雙子葉植物莖內維管束環狀排列，有形成層' },
            { text: '花生、綠豆、向日葵、菩提與油桐', zone: 'dicot', explain: '花生、綠豆、向日葵、菩提、油菜、油桐、櫻花皆為雙子葉植物' },
            { text: '種子內只具有一枚儲存養分的子葉', zone: 'monocot', explain: '單子葉植物的種子內只有 1 枚子葉' },
            { text: '葉脈多為平行脈，根系為鬚根系', zone: 'monocot', explain: '單子葉植物葉脈呈平行狀，根部多為鬚根系' },
            { text: '花瓣數目多為 3 或 3 的倍數', zone: 'monocot', explain: '單子葉植物的花瓣數為三或三的倍數' },
            { text: '莖內維管束呈散生排列，常無形成層', zone: 'monocot', explain: '單子葉植物莖內維管束散生排列，通常不具有形成層' },
            { text: '玉米、稻、竹子、蔥、百合與水仙', zone: 'monocot', explain: '蔥、稻、玉米、竹子、水仙、蘭花、百合、紫錦草皆為單子葉植物' }
          ],
          summary: '雙子葉植物具 2 枚子葉、網狀脈、軸根系、環狀維管束（有形成層）、花瓣 4 或 5 的倍數；單子葉植物具 1 枚子葉、平行脈、鬚根系、散生維管束（通常無形成層）、花瓣 3 的倍數。'
        },
        {
          title: '第 4 關：植物由水生到陸生的演化順序',
          type: 'order',
          description: '請依據植物從水域登陸並適應陸地環境的演化歷程，由早到晚依序排列！',
          items: [
            { text: '藻類（植物的祖先，生活於水中，無角質層與維管束）', explain: '階段 1：植物由水中的藻類演化而來' },
            { text: '蘚苔植物（最早登陸，具角質層防水分散失，但尚無維管束）', explain: '階段 2：最早登陸的蘚苔植物演化出角質層，但仍無維管束' },
            { text: '蕨類植物（演化出維管束與根莖葉，受精需水、以孢子繁殖）', explain: '階段 3：蕨類植物最早演化出維管束與根莖葉，以孢子繁殖' },
            { text: '裸子植物（演化出花粉管與毬果，種子裸露無果實保護）', explain: '階段 4：裸子植物演化出花粉管（受精不需水）與種子，但無果實' },
            { text: '被子植物（演化出花與果實保護種子，為現今最繁盛植物）', explain: '階段 5：被子植物演化出花與果實保護種子，後代存活率最高' }
          ],
          summary: '植物由水中的「藻類」演化登陸：先出現具角質層但無維管束的「蘚苔植物」→ 演化出維管束與根莖葉的「蕨類植物」→ 演化出花粉管與種子的「裸子植物」→ 演化出花與果實的「被子植物」。'
        }
      ]
    },

    // ==================== 3·6 ====================
    {
      id: '7b-3-6',
      title: '3·6 動物界',
      levels: [
        {
          title: '第 1 關：無脊椎動物（一）：刺絲胞、扁形、軟體、環節動物門',
          type: 'classification',
          description: '請將下列身體構造特徵與代表動物，歸類到對應的無脊椎動物門！',
          zones: [
            { id: 'cnidaria', title: '刺絲胞動物門', icon: '🪼' },
            { id: 'platyhelminthes', title: '扁形動物門', icon: '🪱' },
            { id: 'mollusca', title: '軟體動物門', icon: '🐚' },
            { id: 'annelida', title: '環節動物門', icon: '🎣' }
          ],
          items: [
            { text: '觸手具刺絲胞，消化構造僅一個開口', zone: 'cnidaria', explain: '刺絲胞動物皆為肉食性，消化腔只有一個開口，觸手有刺絲胞' },
            { text: '水母、水螅、珊瑚蟲與海葵', zone: 'cnidaria', explain: '水母、水螅、珊瑚蟲、海葵皆屬於刺絲胞動物門' },
            { text: '身體腹背扁平、無骨骼，有些會寄生', zone: 'platyhelminthes', explain: '扁形動物身體扁平無骨骼，部分種類寄生於人體' },
            { text: '可行斷裂生殖的渦蟲，以及絛蟲吸蟲', zone: 'platyhelminthes', explain: '渦蟲、絛蟲、中華肝吸蟲皆屬於扁形動物門' },
            { text: '身體柔軟不分節，多具保護用的外殼', zone: 'mollusca', explain: '軟體動物身體柔軟且不分節，具肌肉構成的足，多有外殼' },
            { text: '有殼的蝸牛、文蛤與殼退化的章魚', zone: 'mollusca', explain: '蝸牛、文蛤、章魚皆屬於軟體動物門' },
            { text: '外殼退化、能快速移動的烏賊', zone: 'mollusca', explain: '烏賊與章魚的外殼已退化或消失，屬於軟體動物門' },
            { text: '身體柔軟細長且呈環狀分節', zone: 'annelida', explain: '環節動物身體柔軟細長，外觀呈現一節一節的環狀分節' },
            { text: '利用體壁肌肉伸縮爬行', zone: 'annelida', explain: '環節動物多藉由體壁肌肉伸縮來爬行運動' },
            { text: '蚯蚓、水蛭與沙蠶', zone: 'annelida', explain: '蚯蚓、水蛭、沙蠶皆屬於環節動物門' }
          ],
          summary: '無脊椎動物中：刺絲胞動物具刺絲胞與單一消化開口（水母、水螅、珊瑚蟲、海葵）；扁形動物身體扁平（渦蟲、絛蟲、吸蟲）；軟體動物身體柔軟不分節（蝸牛、文蛤、章魚、烏賊）；環節動物身體呈環狀分節（蚯蚓、水蛭、沙蠶）。'
        },
        {
          title: '第 2 關：無脊椎動物（二）：節肢動物門與棘皮動物門',
          type: 'classification',
          description: '請區分節肢動物門（昆蟲、蜘蛛、蝦蟹）與棘皮動物門的特徵及代表動物！',
          zones: [
            { id: 'insect', title: '昆蟲（節肢動物門）', icon: '🦋' },
            { id: 'spider', title: '蜘蛛（節肢動物門）', icon: '🕷️' },
            { id: 'crustacean', title: '蝦與蟹（節肢動物門）', icon: '🦀' },
            { id: 'echinoderm', title: '棘皮動物門', icon: '⭐' }
          ],
          items: [
            { text: '分頭、胸、腹三部分，具3對步足', zone: 'insect', explain: '昆蟲身體分為頭、胸、腹三部分，具有三對（6 隻）步足' },
            { text: '蜻蜓具兩對翅，蚊、蠅僅具一對翅', zone: 'insect', explain: '多數昆蟲有兩對翅，蚊子與蒼蠅則只有一對翅' },
            { text: '無翅的衣魚、頭蝨與螞蟻中的工蟻', zone: 'insect', explain: '衣魚、頭蝨、工蟻雖沒有翅膀，但具三對步足，仍屬於昆蟲' },
            { text: '身體分為頭胸部與腹部，具4對步足', zone: 'spider', explain: '蜘蛛身體分為頭胸部與腹部兩部分，有四對（8 隻）步足，不屬於昆蟲' },
            { text: '無翅膀與觸角，部分種類會結網捕食', zone: 'spider', explain: '蜘蛛沒有翅膀，具四對步足，常結網捕食昆蟲' },
            { text: '多生活於水中，具有5對步足', zone: 'crustacean', explain: '蝦和蟹屬於甲殼類節肢動物，具有五對（10 隻）步足' },
            { text: '第一對步足常變形成螯足，用以禦敵', zone: 'crustacean', explain: '蝦、蟹的第一對步足常特化為螯足，用來捕食與禦敵' },
            { text: '生活在海洋中，身體表面有棘', zone: 'echinoderm', explain: '棘皮動物全部生活在海中，體表有棘' },
            { text: '主要利用管足進行運動及攝食', zone: 'echinoderm', explain: '棘皮動物具有獨特的管足構造，可用來運動' },
            { text: '海星、海膽與海參', zone: 'echinoderm', explain: '海星、海膽、海參皆屬於棘皮動物門' }
          ],
          summary: '節肢動物門是種類最多的一門，身體與附肢分節、具外骨骼（需蛻皮長大），包含 3 對步足的「昆蟲」、4 對步足的「蜘蛛」與 5 對步足的「蝦蟹」；「棘皮動物門」則生活在海中，體表有棘、用管足運動（海星、海膽、海參）。'
        },
        {
          title: '第 3 關：脊椎動物（一）：魚類、兩生類與爬蟲類',
          type: 'classification',
          description: '請比較軟骨魚、硬骨魚、兩生類與爬蟲類的呼吸、體表構造與代表動物！',
          zones: [
            { id: 'cartilage_fish', title: '軟骨魚（魚類）', icon: '🦈' },
            { id: 'bony_fish', title: '硬骨魚（魚類）', icon: '🐟' },
            { id: 'amphibian', title: '兩生類', icon: '🐸' },
            { id: 'reptile', title: '爬蟲類', icon: '🦎' }
          ],
          items: [
            { text: '骨質為軟骨，有鰓裂但無鰓蓋與鰾', zone: 'cartilage_fish', explain: '軟骨魚具有數條裸露的鰓裂，沒有鰓蓋與鰾' },
            { text: '鯊魚與魟魚', zone: 'cartilage_fish', explain: '鯊魚和魟魚屬於軟骨魚' },
            { text: '骨質為硬骨，有鰓蓋保護且多具有鰾', zone: 'bony_fish', explain: '硬骨魚的鰓外側有鰓蓋保護，體內多有控制浮沉的鰾' },
            { text: '小丑魚、海馬、彈塗魚與吳郭魚', zone: 'bony_fish', explain: '小丑魚、海馬、彈塗魚、吳郭魚皆屬於硬骨魚' },
            { text: '幼體用鰓呼吸，成體主要用肺呼吸', zone: 'amphibian', explain: '兩生類幼體（如蝌蚪）生活於水中用鰓呼吸，成體用肺呼吸' },
            { text: '皮膚無法防水散失，行體外受精', zone: 'amphibian', explain: '兩生類皮膚裸露無角質層，且行體外受精，需生活在潮溼近水處' },
            { text: '蛙、蟾蜍與臺灣山椒魚', zone: 'amphibian', explain: '蛙、盤古蟾蜍、臺灣山椒魚皆屬於兩生類' },
            { text: '用肺呼吸，體表具防水的鱗片或骨板', zone: 'reptile', explain: '爬蟲類皮膚具角質層並有鱗片或骨板，可防止水分散失' },
            { text: '體內受精且卵有外殼，適應乾燥陸地', zone: 'reptile', explain: '爬蟲類行體內受精、卵具外殼保護，能完全在陸地上生活' },
            { text: '蛇、攀蜥、斑龜與短吻鱷', zone: 'reptile', explain: '蛇、蜥蜴、龜、鱷皆屬於外溫脊椎動物中的爬蟲類' }
          ],
          summary: '魚類、兩生類與爬蟲類皆屬外溫脊椎動物：魚類用鰓呼吸，分為無鰓蓋無鰾的「軟骨魚」（鯊、魟）與有鰓蓋有鰾的「硬骨魚」（海馬、吳郭魚）；「兩生類」幼體用鰓、成體用肺（蛙、山椒魚）；「爬蟲類」用肺呼吸、具鱗片或骨板、體內受精（蛇、蜥、龜、鱷）。'
        },
        {
          title: '第 4 關：脊椎動物（二）：鳥類與三類哺乳類',
          type: 'classification',
          description: '請比較內溫脊椎動物中「鳥類」與三類「哺乳類」的構造、生殖方式及代表動物！',
          zones: [
            { id: 'bird', title: '鳥類', icon: '🐦' },
            { id: 'monotreme', title: '卵生哺乳類', icon: '🥚' },
            { id: 'marsupial', title: '有袋類（哺乳類）', icon: '🦘' },
            { id: 'placental', title: '胎盤完整哺乳類', icon: '🐘' }
          ],
          items: [
            { text: '具角質化的喙、羽毛，前肢特化為翅', zone: 'bird', explain: '鳥類體表有羽毛可協助飛行與保暖，口部為角質化的喙' },
            { text: '骨骼中空、肺延伸出氣囊且眼具瞬膜', zone: 'bird', explain: '骨骼中空、肺連氣囊可減輕體重並協助呼吸，瞬膜可保護眼睛' },
            { text: '小白鷺、臺灣藍鵲、五色鳥與企鵝', zone: 'bird', explain: '白鷺、藍鵲、五色鳥與善於游泳的企鵝皆屬於鳥類' },
            { text: '產卵孵化出幼兒後，再分泌乳汁餵哺', zone: 'monotreme', explain: '卵生哺乳類雖為卵生，但母體仍會分泌乳汁哺育幼兒' },
            { text: '鴨嘴獸與針鼴', zone: 'monotreme', explain: '鴨嘴獸與針鼴是現存少數卵生的哺乳動物' },
            { text: '胎盤不完整，幼體在母體育兒袋長大', zone: 'marsupial', explain: '有袋類因胎盤構造不完整，早產的幼體會爬入母體育兒袋吸乳成長' },
            { text: '袋鼠與無尾熊', zone: 'marsupial', explain: '袋鼠與無尾熊屬於有育兒袋的哺乳動物' },
            { text: '具完整胎盤，幼體在母體內充分發育', zone: 'placental', explain: '多數哺乳類具有完整胎盤，胎兒在子宮內發育完全後才產出' },
            { text: '鹿、獅、牛、兔、象與人類', zone: 'placental', explain: '鹿、獅、牛、兔、象、人類皆屬於具有完整胎盤的胎生哺乳類' },
            { text: '水生的虎鯨與會飛行的哺乳類蝙蝠', zone: 'placental', explain: '海中的鯨豚（如虎鯨）與空中飛行的蝙蝠皆為胎生哺乳類' }
          ],
          summary: '鳥類與哺乳類皆為內溫脊椎動物：「鳥類」具羽毛、中空骨骼、氣囊與瞬膜；「哺乳類」體表多有毛髮、母體分泌乳汁哺育幼兒，依生殖方式分為「卵生哺乳類」（鴨嘴獸、針鼴）、「有袋類」（袋鼠、無尾熊）與「胎盤完整哺乳類」（鯨豚、蝙蝠、人）。'
        }
      ]
    }
  ]
});
