(function () {
  function makePairLevel(title, description, pool) {
    var cur = pool[0];
    return {
      type: 'classification',
      title: title,
      description: description,
      get items() {
        cur = pool[Math.floor(Math.random() * pool.length)];
        return cur.items;
      },
      get zones() {
        return cur.zones;
      },
      get summary() {
        return cur.summary;
      }
    };
  }

  var metalSymbolPool = [
    {
      zones: [
        { id: 'z0', title: '銀', icon: '🪙' },
        { id: 'z1', title: '金', icon: '👑' },
        { id: 'z2', title: '銅', icon: '🥉' },
        { id: 'z3', title: '汞（水銀）', icon: '💧' }
      ],
      items: [
        { text: 'Ag', zone: 'z0', explain: 'Ag 是「銀」的元素符號（導電性最佳的金屬）。' },
        { text: 'Au', zone: 'z1', explain: 'Au 是「金」的元素符號（延展性最佳、金黃色光澤）。' },
        { text: 'Cu', zone: 'z2', explain: 'Cu 是「銅」的元素符號（紫紅色光澤，常用作電線）。' },
        { text: 'Hg', zone: 'z3', explain: 'Hg 是「汞（水銀）」的元素符號（常溫下唯一的液態金屬）。' }
      ],
      summary: '常見金屬元素符號：銀 Ag、金 Au、銅 Cu、汞（水銀）Hg。'
    },
    {
      zones: [
        { id: 'z0', title: '鈉', icon: '🔥' },
        { id: 'z1', title: '鉀', icon: '🔥' },
        { id: 'z2', title: '鈣', icon: '⛰️' },
        { id: 'z3', title: '鎂', icon: '⛰️' }
      ],
      items: [
        { text: 'Na', zone: 'z0', explain: 'Na 是「鈉」的元素符號（第 1 族鹼金屬）。' },
        { text: 'K', zone: 'z1', explain: 'K 是「鉀」的元素符號（第 1 族鹼金屬，注意不要與鈣 Ca 混淆）。' },
        { text: 'Ca', zone: 'z2', explain: 'Ca 是「鈣」的元素符號（第 2 族鹼土金屬）。' },
        { text: 'Mg', zone: 'z3', explain: 'Mg 是「鎂」的元素符號（第 2 族鹼土金屬，注意不要與錳 Mn 混淆）。' }
      ],
      summary: '鹼金屬與鹼土金屬符號：鈉 Na、鉀 K、鈣 Ca、鎂 Mg。'
    },
    {
      zones: [
        { id: 'z0', title: '鐵', icon: '🔩' },
        { id: 'z1', title: '鋁', icon: '🥫' },
        { id: 'z2', title: '錳', icon: '🔋' },
        { id: 'z3', title: '鉛', icon: '⚖️' }
      ],
      items: [
        { text: 'Fe', zone: 'z0', explain: 'Fe 是「鐵」的元素符號（可製成鋼鐵與不鏽鋼）。' },
        { text: 'Al', zone: 'z1', explain: 'Al 是「鋁」的元素符號（密度小，表面形成緻密氧化鋁）。' },
        { text: 'Mn', zone: 'z2', explain: 'Mn 是「錳」的元素符號（如二氧化錳 MnO₂ 中的錳）。' },
        { text: 'Pb', zone: 'z3', explain: 'Pb 是「鉛」的元素符號。' }
      ],
      summary: '常見工業金屬符號：鐵 Fe、鋁 Al、錳 Mn、鉛 Pb。'
    }
  ];

  var nonmetalSymbolPool = [
    {
      zones: [
        { id: 'z0', title: '碳', icon: '✏️' },
        { id: 'z1', title: '矽', icon: '💻' },
        { id: 'z2', title: '硫', icon: '🌋' },
        { id: 'z3', title: '磷', icon: '🧨' }
      ],
      items: [
        { text: 'C', zone: 'z0', explain: 'C 是「碳」的元素符號（鑽石與石墨皆由碳組成）。' },
        { text: 'Si', zone: 'z1', explain: 'Si 是「矽」的元素符號（製造半導體晶片的材料，注意與硫 S 區分）。' },
        { text: 'S', zone: 'z2', explain: 'S 是「硫」的元素符號（黃色固態非金屬）。' },
        { text: 'P', zone: 'z3', explain: 'P 是「磷」的元素符號（如紅磷）。' }
      ],
      summary: '固態非金屬元素符號：碳 C、矽 Si、硫 S、磷 P（常溫下為固態，部首皆為「石」部）。'
    },
    {
      zones: [
        { id: 'z0', title: '氫', icon: '💨' },
        { id: 'z1', title: '氮', icon: '💨' },
        { id: 'z2', title: '氧', icon: '💨' },
        { id: 'z3', title: '氯', icon: '🧪' }
      ],
      items: [
        { text: 'H', zone: 'z0', explain: 'H 是「氫」的元素符號（最輕的氣體）。' },
        { text: 'N', zone: 'z1', explain: 'N 是「氮」的元素符號（空氣中含量最多的氣體元素）。' },
        { text: 'O', zone: 'z2', explain: 'O 是「氧」的元素符號（具助燃性、供生物呼吸）。' },
        { text: 'Cl', zone: 'z3', explain: 'Cl 是「氯」的元素符號（黃綠色氣體，第一個字母 C 大寫、第二個字母 l 小寫）。' }
      ],
      summary: '氣態非金屬元素符號：氫 H、氮 N、氧 O、氯 Cl（常溫下為氣態，部首皆為「气」部）。'
    },
    {
      zones: [
        { id: 'z0', title: '溴', icon: '💧' },
        { id: 'z1', title: '碘', icon: '🟣' },
        { id: 'z2', title: '氦', icon: '🎈' },
        { id: 'z3', title: '氬', icon: '💡' }
      ],
      items: [
        { text: 'Br', zone: 'z0', explain: 'Br 是「溴」的元素符號（常溫下唯一的暗紅色液態非金屬）。' },
        { text: 'I', zone: 'z1', explain: 'I 是「碘」的元素符號（紫黑色固體，常溫下易昇華）。' },
        { text: 'He', zone: 'z2', explain: 'He 是「氦」的元素符號（第 18 族鈍氣，可用於填充氣球）。' },
        { text: 'Ar', zone: 'z3', explain: 'Ar 是「氬」的元素符號（空氣中含量第三多的氣體，用於焊接保護）。' }
      ],
      summary: '常見非金屬與鈍氣符號：溴 Br（液態）、碘 I（固態）、氦 He（氣態）、氬 Ar（氣態）。'
    }
  ];

  var formulaMatchPool = [
    {
      zones: [
        { id: 'z0', title: '氧化銅', icon: '🧪' },
        { id: 'z1', title: '氧化鎂', icon: '🧪' },
        { id: 'z2', title: '二氧化錳', icon: '🧪' },
        { id: 'z3', title: '氯化鈉', icon: '🧂' }
      ],
      items: [
        { text: 'CuO', zone: 'z0', explain: '銅（Cu）在前、氧（O）在後，中文由後往前讀作「氧化銅」。' },
        { text: 'MgO', zone: 'z1', explain: '鎂（Mg）在前、氧（O）在後，中文讀作「氧化鎂」。' },
        { text: 'MnO₂', zone: 'z2', explain: '錳（Mn）與氧（O）最簡數目比為 1：2，中文讀作「二氧化錳」。' },
        { text: 'NaCl', zone: 'z3', explain: '金屬鈉（Na）在前、非金屬氯（Cl）在後，中文讀作「氯化鈉（食鹽）」。' }
      ],
      summary: '金屬化合物化學式：氧化銅 CuO、氧化鎂 MgO、二氧化錳 MnO₂、氯化鈉 NaCl（金屬寫前面，中文先讀非金屬）。'
    },
    {
      zones: [
        { id: 'z0', title: '水', icon: '💧' },
        { id: 'z1', title: '二氧化碳', icon: '🫧' },
        { id: 'z2', title: '二氧化硫', icon: '🌋' },
        { id: 'z3', title: '氯化氫', icon: '🧪' }
      ],
      items: [
        { text: 'H₂O', zone: 'z0', explain: '每個水分子含有 2 個氫原子與 1 個氧原子，化學式為 H₂O。' },
        { text: 'CO₂', zone: 'z1', explain: '每個二氧化碳分子含有 1 個碳原子與 2 個氧原子，化學式為 CO₂。' },
        { text: 'SO₂', zone: 'z2', explain: '每個二氧化硫分子含有 1 個硫原子與 2 個氧原子，化學式為 SO₂。' },
        { text: 'HCl', zone: 'z3', explain: '由氫（H）與氯（Cl）以 1：1 組成，中文由後往前讀作「氯化氫」。' }
      ],
      summary: '常見非金屬化合物化學式：水 H₂O、二氧化碳 CO₂、二氧化硫 SO₂、氯化氫 HCl。'
    },
    {
      zones: [
        { id: 'z0', title: '一氧化碳', icon: '⚠️' },
        { id: 'z1', title: '二氧化碳', icon: '🫧' },
        { id: 'z2', title: '臭氧', icon: '🛡️' },
        { id: 'z3', title: '氯氣', icon: '🧪' }
      ],
      items: [
        { text: 'CO', zone: 'z0', explain: '由 1 個碳原子與 1 個氧原子組成的雙原子分子，稱為「一氧化碳」。' },
        { text: 'CO₂', zone: 'z1', explain: '由 1 個碳原子與 2 個氧原子組成的三原子分子，稱為「二氧化碳」。' },
        { text: 'O₃', zone: 'z2', explain: '每個臭氧分子由 3 個氧原子組成，化學式為 O₃（氧氣則為 O₂）。' },
        { text: 'Cl₂', zone: 'z3', explain: '氯氣是雙原子分子，每個氯分子含 2 個氯原子，化學式為 Cl₂。' }
      ],
      summary: '易混淆氣體化學式：一氧化碳 CO、二氧化碳 CO₂、臭氧 O₃（氧氣為 O₂）、氯氣 Cl₂。'
    }
  ];

  QuizWorld.registerChapter({
    id: 'pc6',
    sections: [
      {
        id: 'pc6-1',
        title: '6·1 元素的探索',
        levels: [
          {
            type: 'classification',
            title: '金屬元素還是非金屬元素？',
            description: '拉瓦節確認元素是「用任何化學方法都不能再分解的物質」。現今將元素分為「金屬元素」與「非金屬元素」兩大類，請將下列特性歸類。',
            zones: [
              { id: 'metal', title: '金屬元素', icon: '🪙' },
              { id: 'nonmetal', title: '非金屬元素', icon: '🧱' }
            ],
            items: [
              { text: '新切開的表面具有金屬光澤', zone: 'metal', explain: '金屬元素新切面都具有閃亮的金屬光澤。' },
              { text: '具延性與展性，可拉絲或打成薄片', zone: 'metal', explain: '金屬不易碎，可拉成細絲（延性）或打成薄片（展性）。' },
              { text: '皆為電與熱的良導體', zone: 'metal', explain: '金屬容易導電與導熱，常用於製造電線與鍋具。' },
              { text: '除金與銅外，大多呈現銀灰色', zone: 'metal', explain: '金呈金黃色、銅呈紫紅色，其餘大多數金屬都是銀灰色。' },
              { text: '固態不具延展性，容易被敲碎', zone: 'nonmetal', explain: '固態非金屬（如硫棒）敲擊時容易碎裂，不具延性與展性。' },
              { text: '除石墨外，大多為電熱不良導體', zone: 'nonmetal', explain: '非金屬元素大多不導電也不易導熱，唯一常見可導電的例外是石墨（碳）。' },
              { text: '顏色差異大（如黃色硫、紫黑碘）', zone: 'nonmetal', explain: '非金屬元素外觀顏色多樣，例如硫是黃色、紅磷是紅色、碘是紫黑色。' },
              { text: '常溫下以氣態或固態為主（溴液態）', zone: 'nonmetal', explain: '非金屬在常溫常壓下除溴為液態外，其餘皆為氣態或固態。' }
            ],
            summary: '金屬元素「具金屬光澤、具延展性、電熱良導體」；非金屬元素「不具延展性易敲碎、顏色多樣、除石墨外皆為電熱不良導體」。'
          },
          {
            type: 'classification',
            title: '常見元素的常溫狀態與中文部首',
            description: '元素的中文名稱配合其在常溫常壓（25℃、1 大氣壓）下的狀態採用不同部首。請將下列元素歸類到常溫常壓下的狀態。',
            zones: [
              { id: 'solid', title: '固態（金／石部）', icon: '🪨' },
              { id: 'liquid', title: '液態（水／氵部）', icon: '💧' },
              { id: 'gas', title: '氣態（气部）', icon: '💨' }
            ],
            items: [
              { text: '鐵（Fe）、銅（Cu）與銀', zone: 'solid', explain: '常溫下為固態的金屬元素，中文部首為「金」部。' },
              { text: '碳（C）、硫（S）、矽（Si）', zone: 'solid', explain: '常溫下為固態的非金屬元素，中文部首為「石」部。' },
              { text: '紅磷（P）與紫黑色的碘（I）', zone: 'solid', explain: '磷與碘在常溫下皆為固態非金屬，部首為「石」部。' },
              { text: '唯一的液態金屬：汞（Hg，水銀）', zone: 'liquid', explain: '汞（俗稱水銀）是常溫常壓下唯一的液態金屬元素，部首含「水」。' },
              { text: '唯一的液態非金屬：暗紅色的溴', zone: 'liquid', explain: '溴（Br）是常溫常壓下唯一的液態非金屬元素，呈暗紅色，部首為「氵」。' },
              { text: '氫（H）、氧（O）、氮（N）', zone: 'gas', explain: '常溫下為氣態的非金屬元素，中文部首為「气」部。' },
              { text: '黃綠色的氯（Cl）與氦（He）', zone: 'gas', explain: '氯氣呈黃綠色、氦氣無色，常溫下皆為氣態元素。' }
            ],
            summary: '常溫常壓下，唯一的液態金屬是「汞（Hg）」，唯一的液態非金屬是「溴（Br）」；元素符號第一個字母必大寫，若有第二個字母必小寫。'
          },
          {
            type: 'classification',
            title: '常見元素、同素異形體與合金',
            description: '區分生活中的重要「金屬元素」、「非金屬與同素異形體」以及由多種元素混合而成的「合金（混合物）」。',
            zones: [
              { id: 'metal', title: '重要金屬元素', icon: '🪙' },
              { id: 'nonmetal', title: '非金屬與同素異形體', icon: '💎' },
              { id: 'alloy', title: '合金（混合物）', icon: '🛡️' }
            ],
            items: [
              { text: '銀（Ag）：導電性與導熱性最佳', zone: 'metal', explain: '銀是導電性與導熱性最好的金屬；銅次之且價格較低，常用作導線。' },
              { text: '金（Au）：金黃色，延展性最好', zone: 'metal', explain: '金性質穩定且是延展性最好的金屬，可打成極薄的金箔。' },
              { text: '鋁（Al）：表面形成緻密氧化鋁', zone: 'metal', explain: '鋁密度小，表面易與氧反應形成緻密氧化鋁，保護內部不再氧化。' },
              { text: '矽（Si）：地殼第二多，製晶片', zone: 'nonmetal', explain: '矽含量僅次於氧，導電性介於導體與絕緣體間（半導體），用於製造晶片。' },
              { text: '鑽石與石墨：皆由碳元素所組成', zone: 'nonmetal', explain: '鑽石與石墨皆由碳元素（C）以不同結構組成，稱為碳的「同素異形體」。' },
              { text: '不鏽鋼：鐵加入鉻、鎳等抗腐蝕', zone: 'alloy', explain: '不鏽鋼是鐵與鉻、鎳等元素混合的合金，不易生鏽，用於餐具與保溫杯。' },
              { text: '黃銅：銅與鋅混合，用於樂器水龍頭', zone: 'alloy', explain: '黃銅是銅（Cu）與鋅（Zn）混合而成的合金。' },
              { text: 'K金：金加入銀、銅等以增加硬度', zone: 'alloy', explain: '純金太軟，加入銀、銅、鋅等金屬製成 K 金飾品以補強硬度。' }
            ],
            summary: '銀導電最佳、金延展最佳；鑽石與石墨同為碳（C）的「同素異形體」（純物質）；不鏽鋼、黃銅、K金則是「合金」（混合物）。'
          },
          makePairLevel(
            '常見金屬元素符號配對',
            '請將上方的「金屬元素符號」拖入下方對應的中文名稱框中。',
            metalSymbolPool
          ),
          makePairLevel(
            '常見非金屬元素符號配對',
            '請將上方的「非金屬元素符號」拖入下方對應的中文名稱框中。',
            nonmetalSymbolPool
          )
        ]
      },
      {
        id: 'pc6-2',
        title: '6·2 元素週期表',
        levels: [
          {
            type: 'classification',
            title: '認識現代元素週期表',
            description: '從門得列夫發表週期表到現代元素週期表，請判斷下列關於週期表排列規則的敘述哪些正確、哪些是錯誤迷思。',
            zones: [
              { id: 'correct', title: '正確的週期表觀念', icon: '⭕' },
              { id: 'myth', title: '錯誤的迷思概念', icon: '❌' }
            ],
            items: [
              { text: '橫列稱為「週期」，共有7個週期', zone: 'correct', explain: '週期表中的橫列稱為週期，由上到下共有 7 個週期。' },
              { text: '縱行稱為「族」，共有 18 族', zone: 'correct', explain: '週期表中的縱行稱為族，由左而右依序為第 1～18 族。' },
              { text: '同一「族」的元素化學性質相似', zone: 'correct', explain: '同族（同一縱行）的元素具有相似的化學性質。' },
              { text: '現代週期表依「原子序」由小而大排', zone: 'correct', explain: '現代元素週期表是依照「原子序（質子數）」由小而大排列。' },
              { text: '門得列夫當年主要依原子質量排列', zone: 'correct', explain: '1869 年門得列夫發表的週期表主要是依原子質量排列，並成功預測未知元素。' },
              { text: '現代週期表是依「原子量」大小排列', zone: 'myth', explain: '現代週期表是依「原子序」而非原子量（質量）排列！' },
              { text: '橫列稱為「族」，縱行稱為「週期」', zone: 'myth', explain: '正好說反了！橫列是「週期」，縱行才是「族」。' },
              { text: '同一「週期」的元素化學性質最相似', zone: 'myth', explain: '同一「族（縱行）」的元素化學性質才相似，同週期（橫列）性質會規律變化。' }
            ],
            summary: '現代元素週期表依「原子序」排列，橫列為「週期」（共 7 週期）、縱行為「族」（共 18 族），「同族」元素的化學性質相似。'
          },
          {
            type: 'classification',
            title: '週期表中的三大重要家族',
            description: '請將下列元素成員、保存方式與化合物性質，歸類到對應的家族類別。',
            zones: [
              { id: 'alkali', title: '第1族：鹼金屬', icon: '🔥' },
              { id: 'alkaline_earth', title: '第2族：鹼土金屬', icon: '⛰️' },
              { id: 'noble', title: '惰性氣體（鈍氣）', icon: '🎈' }
            ],
            items: [
              { text: '包含鋰、鈉、鉀（不含氫）', zone: 'alkali', explain: '第 1 族除氫之外的金屬元素（鋰、鈉、鉀等）稱為鹼金屬。' },
              { text: '質地柔軟可用小刀切開，存礦物油中', zone: 'alkali', explain: '鈉、鉀質地軟且極易與空氣中的氧氣及水反應，必須保存在礦物油中。' },
              { text: '與水劇烈反應，水溶液使酚酞變紅', zone: 'alkali', explain: '鹼金屬與水劇烈反應產生氫氣與鹼性物質，使無色酚酞指示劑變為紅色。' },
              { text: '多數化合物易溶', zone: 'alkali', explain: '鹼金屬（如鈉、鉀）所形成的絕大多數化合物都容易溶於水。' },
              { text: '包含鈹、鎂、鈣等金屬元素', zone: 'alkaline_earth', explain: '第 2 族的鈹、鎂、鈣等元素稱為鹼土金屬。' },
              { text: '多存在於地殼內的各類礦物岩石中', zone: 'alkaline_earth', explain: '鎂、鈣等鹼土金屬化合物廣泛存在於地殼各類物質中。' },
              { text: '多數化合物難溶於水', zone: 'alkaline_earth', explain: '鹼土金屬的許多化合物（如碳酸鈣、碳酸鎂、硫酸鈣等）難溶於水，常存在於地殼岩石中。' },
              { text: '包含氦、氖、氬，可填氣球或霓虹燈', zone: 'noble', explain: '第 18 族鈍氣中，氦氣密度小且安全可填充氣球；氖氣通電發紅光可做霓虹燈。' },
              { text: '常溫下極難反應，化學性質非常安定', zone: 'noble', explain: '鈍氣在常溫下極難與其他物質反應，化學性質十分安定。' },
              { text: '常溫下的氮氣（N₂）與鈍氣', zone: 'noble', explain: '第 18 族鈍氣以及常溫下安定不易反應的氮氣（N₂），在應用上常作為保護或保鮮用的惰性氣體。' }
            ],
            summary: '第 1 族「鹼金屬」（鋰鈉鉀，存礦物油、與水反應呈鹼性、多數化合物易溶）；第 2 族「鹼土金屬」（鈹鎂鈣，多存於地殼、多數化合物難溶於水）；「鈍氣與惰性氣體」常溫下性質安定。'
          }
        ]
      },
      {
        id: 'pc6-3',
        title: '6·3 原子與化合物',
        levels: [
          {
            type: 'order',
            title: '原子結構與週期表的探索歷史',
            description: '十九至二十世紀間，科學家們陸續揭開原子內部結構與原子序的祕密。請依時間先後順序排列下列科學發現。',
            items: [
              { text: '道耳頓提出「原子說」，認為原子不可再分割', explain: '1803 年道耳頓提出原子說，當時認為原子是不可再分割的最小粒子。' },
              { text: '湯姆森發現原子內含有質量極小、帶負電的「電子」', explain: '十九世紀末湯姆森發現電子，推翻了原子不可分割的觀點。' },
              { text: '拉塞福發現原子中心有帶正電的「原子核」與「質子」', explain: '二十世紀初拉塞福發現原子絕大部分質量集中在中心的原子核，核內有帶正電的質子。' },
              { text: '莫斯利提出以核內質子數作為「原子序」排列週期表', explain: '1913 年莫斯利確定原子序就是原子核內的質子數量，修正了週期表排列。' },
              { text: '查兌克發現原子核內含有不帶電的「中子」', explain: '拉塞福的學生查兌克最後發現了核內不帶電的中子，確立了現代原子結構。' }
            ],
            summary: '原子結構發現順序：道耳頓（原子說）→ 湯姆森（電子）→ 拉塞福（原子核與質子）→ 莫斯利（原子序＝質子數）→ 查兌克（中子）。'
          },
          {
            type: 'classification',
            title: '質子、中子與電子的比較',
            description: '原子是由質子、中子與電子三種粒子所構成。請將下列特徵歸類到對應的粒子。',
            zones: [
              { id: 'proton', title: '質子', icon: '➕' },
              { id: 'neutron', title: '中子', icon: '⚪' },
              { id: 'electron', title: '電子', icon: '➖' }
            ],
            items: [
              { text: '位於原子核內，且帶有正電', zone: 'proton', explain: '質子位於原子核中，每個質子帶 1 個基本正電荷。' },
              { text: '其數目即為「原子序」，決定元素', zone: 'proton', explain: '原子序 ＝ 質子數，同種元素的原子必有相同的質子數。' },
              { text: '由拉塞福實驗所發現的核內粒子', zone: 'proton', explain: '拉塞福發現了原子核以及核內帶正電的質子。' },
              { text: '位於原子核內，且不帶電（電中性）', zone: 'neutron', explain: '中子與質子一起位於原子核內，但中子不帶電。' },
              { text: '質量與質子極接近，由查兌克發現', zone: 'neutron', explain: '中子與質子的質量非常接近，兩者總和決定原子的質量數。' },
              { text: '受原子核吸引，環繞在核外運動', zone: 'electron', explain: '電子在原子核外繞核運動，運動範圍即視為原子的大小。' },
              { text: '帶有負電，質量極小可忽略不計', zone: 'electron', explain: '電子帶負電，質量約只有質子的 1/1836，計算原子質量時可忽略。' },
              { text: '由湯姆森首先發現的原子內粒子', zone: 'electron', explain: '湯姆森是最早發現電子的科學家。' }
            ],
            summary: '原子核內有「質子（＋）」與「中子（不帶電）」，集中了原子絕大部分質量；核外有「電子（−）」繞核運動，電中性原子中「質子數＝電子數」。'
          },
          {
            type: 'classification',
            title: '原子序與質量數（以 ²³₁₁Na 為例）',
            description: '科學家以 ²³₁₁Na 標示電中性的鈉原子（左下角 11 為原子序，左上角 23 為質量數）。請判斷下列各項目對應的數值。',
            zones: [
              { id: 'n11', title: '數值為 11', icon: '🔢' },
              { id: 'n12', title: '數值為 12', icon: '⚖️' },
              { id: 'n23', title: '數值為 23', icon: '🎯' }
            ],
            items: [
              { text: '鈉原子的「原子序（Z）」', zone: 'n11', explain: '元素符號左下角的數字 11 代表原子序。' },
              { text: '鈉原子核內的「質子數」', zone: 'n11', explain: '原子序 ＝ 質子數，因此核內有 11 個質子。' },
              { text: '電中性鈉原子核外的「電子數」', zone: 'n11', explain: '電中性原子中，帶負電的電子數等於帶正電的質子數，故為 11。' },
              { text: '鈉原子核內的「中子數」', zone: 'n12', explain: '中子數 ＝ 質量數 − 質子數 ＝ 23 − 11 ＝ 12。' },
              { text: '質量數減去原子序所得的數值', zone: 'n12', explain: '23 − 11 ＝ 12，即為核內中子的數量。' },
              { text: '鈉原子的「質量數（A）」', zone: 'n23', explain: '元素符號左上角的數字 23 代表質量數。' },
              { text: '核內「質子數＋中子數」的總和', zone: 'n23', explain: '質量數 ＝ 質子數（11）＋ 中子數（12）＝ 23。' }
            ],
            summary: '電中性原子中，「原子序 ＝ 質子數 ＝ 電子數」；「質量數 ＝ 質子數 ＋ 中子數」（中子數 ＝ 質量數 − 原子序）。'
          },
          {
            type: 'classification',
            title: '道耳頓原子說的今昔檢視',
            description: '道耳頓於 1803 年提出「原子說」奠定了現代化學基礎，但部分觀點後來被新發現修正。請區分哪些至今仍成立、哪些已被修正。',
            zones: [
              { id: 'valid', title: '至今仍成立的觀點', icon: '⭕' },
              { id: 'revised', title: '已被後人修正的觀點', icon: '🔧' }
            ],
            items: [
              { text: '一切物質都是由微小的原子所組成', zone: 'valid', explain: '物質確實是由微小的原子所組成，現今已能用電子顯微鏡觀察。' },
              { text: '化合物由不同種原子以固定比例結合', zone: 'valid', explain: '化合物都是由不同種類原子依固定比例結合而成（如 CO₂ 為 1：2）。' },
              { text: '化學反應只是原子重新排列組合', zone: 'valid', explain: '化學變化只是原子間重新結合形成新物質，因此煉金術無法把鐵煉成金。' },
              { text: '化學反應前後原子的種類與數目不變', zone: 'valid', explain: '一般化學反應中，原子不會憑空消失或產生，種類與數目皆保持不變。' },
              { text: '原子是最小粒子，絕對不可再分割', zone: 'revised', explain: '後來發現原子內部還含有電子、質子與中子等更小的粒子，並非不可分割。' },
              { text: '所有氣體元素都是由單原子直接組成', zone: 'revised', explain: '亞佛加厥提出「分子」概念修正：氫氣、氧氣、氮氣等氣體元素是由雙原子分子組成，只有鈍氣才是單原子。' }
            ],
            summary: '道耳頓原子說解釋了化學反應是「原子重新排列、種類與數目不變」；但「原子不可分割」已被電子、質子、中子的發現修正，「氣體皆單原子」則被亞佛加厥的分子概念修正。'
          }
        ]
      },
      {
        id: 'pc6-4',
        title: '6·4 分子與化學式',
        levels: [
          {
            type: 'classification',
            title: '元素、化合物與混合物的粒子觀點',
            description: '以微觀的原子與分子觀點，將下列物質的組成特徵與實例歸類到「元素」、「化合物」或「混合物」。',
            zones: [
              { id: 'element', title: '元素（純物質）', icon: '⚛️' },
              { id: 'compound', title: '化合物（純物質）', icon: '🔗' },
              { id: 'mixture', title: '混合物', icon: '🥗' }
            ],
            items: [
              { text: '只由同一種原子構成的特定物質', zone: 'element', explain: '元素是由單一種原子所構成的特定純物質。' },
              { text: '用一般化學方法無法再分解出新物質', zone: 'element', explain: '元素無法再經由加熱、照光或通電分解出其他新物質。' },
              { text: '氧氣（O₂）、臭氧（O₃）與鎂', zone: 'element', explain: 'O₂、O₃ 皆只含氧原子，Mg 只含鎂原子，都屬於元素。' },
              { text: '不同種原子以固定比例結合的純物質', zone: 'compound', explain: '化合物是由兩種以上不同種類的原子以固定比例結合而成的純物質。' },
              { text: '加熱或通電後可再分解出其他元素', zone: 'compound', explain: '例如水（化合物）通電可分解出氫氣與氧氣兩種元素。' },
              { text: '水（H₂O）與二氧化碳（CO₂）', zone: 'compound', explain: '水由氫、氧原子以 2：1 結合，二氧化碳由碳、氧原子以 1：2 結合，皆為化合物。' },
              { text: '含有兩種以上不同的純物質粒子', zone: 'mixture', explain: '含有兩種以上不同分子或純物質混在一起的稱為混合物。' },
              { text: '空氣與食鹽水溶液', zone: 'mixture', explain: '空氣含 N₂、O₂、Ar、CO₂ 等多種分子；食鹽水含水與氯化鈉，皆為混合物。' }
            ],
            summary: '純物質分為「元素（同種原子構成的特定物質，如 O₂、Mg）」與「化合物（不同種原子固定比例結合，如 H₂O、CO₂）」；多種純物質混合則為「混合物」。'
          },
          {
            type: 'classification',
            title: '常見純物質的原子組成數目',
            description: '亞佛加厥提出「分子」是能表現純物質化學性質的最小粒子。請依每個分子（或基本單元）所含的原子數目將下列物質歸類。',
            zones: [
              { id: 'mono', title: '單原子或金屬堆積', icon: '1️⃣' },
              { id: 'di', title: '雙原子分子', icon: '2️⃣' },
              { id: 'tri', title: '三原子分子', icon: '3️⃣' }
            ],
            items: [
              { text: '氦氣（He）、氖氣（Ne）、氬氣', zone: 'mono', explain: '鈍氣性質安定，在自然界中以「單原子分子」形式存在。' },
              { text: '由金屬原子堆積而成的鎂（Mg）', zone: 'mono', explain: '金屬元素由許多金屬原子規則堆積而成，化學式直接以元素符號表示。' },
              { text: '氫氣（H₂）、氧氣（O₂）、氮氣', zone: 'di', explain: '常見的氣態元素（鈍氣除外）如 H₂、O₂、N₂、Cl₂ 都是由 2 個原子組成的雙原子分子。' },
              { text: '一氧化碳（CO）與氯氣（Cl₂）', zone: 'di', explain: 'CO 含 1 個碳原子與 1 個氧原子，Cl₂ 含 2 個氯原子，皆為雙原子分子。' },
              { text: '水分子（H₂O，含2氫1氧）', zone: 'tri', explain: '每個水分子由 2 個氫原子和 1 個氧原子組成，共 3 個原子。' },
              { text: '二氧化碳（CO₂）與二氧化硫', zone: 'tri', explain: 'CO₂ 與 SO₂ 每個分子都含有 3 個原子。' },
              { text: '由3個氧原子組成的臭氧（O₃）', zone: 'tri', explain: '每個臭氧分子是由 3 個氧原子所組成。' }
            ],
            summary: '鈍氣（He、Ne、Ar）為單原子分子；常見氣體元素（H₂、O₂、N₂、Cl₂）為雙原子分子；H₂O、CO₂、O₃ 則為三原子分子。'
          },
          {
            type: 'classification',
            title: '化學式書寫與中文命名規則',
            description: '化學式是以元素符號及數字表示純物質組成的式子。請區分下列哪些符合國際化學式書寫與中文命名規則。',
            zones: [
              { id: 'correct', title: '正確的書寫與命名', icon: '⭕' },
              { id: 'wrong', title: '錯誤的書寫或命名', icon: '❌' }
            ],
            items: [
              { text: '金屬與非金屬化合：金屬符號寫前面', zone: 'correct', explain: '金屬與非金屬組成的化合物，化學式規定金屬在前、非金屬在後（如 NaCl、MgO）。' },
              { text: '中文名稱順序與化學式元素符號相反', zone: 'correct', explain: '化學式寫在後面的非金屬先讀，寫在前面的金屬後讀，如 NaCl 讀作「氯化鈉」。' },
              { text: '食鹽（氯化鈉）化學式記為NaCl', zone: 'correct', explain: '鈉（Na）是金屬寫前面，氯（Cl）是非金屬寫後面，中文讀作氯化鈉。' },
              { text: '含氧化合物一般將氧（O）寫在後面', zone: 'correct', explain: '氧化物通常把氧寫在後面，中文讀作「氧化某」（如 CuO 氧化銅、MnO₂ 二氧化錳）。' },
              { text: '右下角標示原子數，數目為1時省略', zone: 'correct', explain: '組成原子數目寫在元素符號右下角，數目為 1 時省略不寫（如 H₂O 的 O 右下角省略 1）。' },
              { text: '氯化鈉的化學式寫成 ClNa', zone: 'wrong', explain: '金屬鈉（Na）必須寫在前面，非金屬氯（Cl）寫在後面，應寫為 NaCl。' },
              { text: '氧化鎂的化學式寫成 OMg', zone: 'wrong', explain: '含氧化合物應將氧寫在後面、金屬鎂寫在前面，應寫為 MgO。' },
              { text: '氦氣是氣體所以化學式寫成 He₂', zone: 'wrong', explain: '氦氣屬於鈍氣，以單原子形式存在，右下角 1 省略，化學式為 He 而非 He₂！' }
            ],
            summary: '化學式書寫原則：金屬在前、非金屬在後，氧化物氧在後，右下角標原子數（1 省略）；中文讀法與化學式符號順序相反（如 NaCl 讀作氯化鈉）。'
          },
          makePairLevel(
            '常見化學式與中文配對',
            '請將上方的「化學式」拖入下方對應的中文名稱框中。',
            formulaMatchPool
          )
        ]
      }
    ]
  });
})();
