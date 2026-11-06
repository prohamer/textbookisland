QuizWorld.registerChapter({
  id: 'e1',
  sections: [
    {
      id: 'e1-1',
      title: '1·1 地球上的水在哪裡',
      levels: [
        {
          type: 'classification',
          title: '地球的四大層圈',
          description: '請將各層圈的組成與火山爆發產生的影響，歸類到對應的地球層圈。',
          zones: [
            { id: 'atmo', title: '大氣圈', icon: '🌤️' },
            { id: 'hydro', title: '水圈', icon: '🌊' },
            { id: 'litho', title: '岩石圈', icon: '🪨' },
            { id: 'bio', title: '生物圈', icon: '🌿' }
          ],
          items: [
            { text: '位於地球最外層的氣體環境', zone: 'atmo' },
            { text: '火山噴出大量火山灰與氣體升空', zone: 'atmo', explain: '火山灰與氣體進入空中，主要影響大氣圈。' },
            { text: '由海水、冰與淡水等水體構成', zone: 'hydro' },
            { text: '火山灰與雨水混合形成泥流', zone: 'hydro', explain: '雨水屬於水圈，火山噴發物與雨水混合會影響水圈。' },
            { text: '由地表的固體岩石與物質組成', zone: 'litho' },
            { text: '熔岩降溫凝固形成新的岩石或陸地', zone: 'litho', explain: '熔岩冷卻形成新岩石與陸地，屬於岩石圈的變動。' },
            { text: '地球上所有生物活動的範圍', zone: 'bio' },
            { text: '高溫噴發物質破壞動植物棲息地', zone: 'bio', explain: '影響生物生存與棲息環境，屬於對生物圈的影響。' }
          ],
          summary: '地球環境分為大氣圈、水圈、岩石圈與生物圈，四個層圈彼此密切交互作用。'
        },
        {
          type: 'classification',
          title: '海水、冰與地下水的特性',
          description: '請將下列特徵與分布比例，歸類到對應的水體。',
          zones: [
            { id: 'sea', title: '海水', icon: '🌊' },
            { id: 'ice', title: '冰', icon: '🧊' },
            { id: 'ground', title: '地下水與河湖', icon: '💧' }
          ],
          items: [
            { text: '占地球總水量約97%，比例最高', zone: 'sea', explain: '海水約占地球總水量的 97%，是水圈中比例最高的水體。' },
            { text: '溶解最多的鹽類是氯化鈉，具鹹味', zone: 'sea', explain: '海水中含量最多的鹽類是氯化鈉（NaCl），使海水帶有鹹味。' },
            { text: '含有氯化鎂，使味道略帶苦味', zone: 'sea', explain: '海水中含量次多的鹽類是氯化鎂（MgCl₂），使海水略帶苦味。' },
            { text: '全球平均鹽度約為35‰', zone: 'sea', explain: '每 1000 公克海水中約含 35 公克鹽類，平均鹽度約 35‰。' },
            { text: '占地球總水量約2%，是淡水主體', zone: 'ice', explain: '冰約占地球總水量 2%，是地球上比例最高的淡水。' },
            { text: '全球約90%集中分布在南極', zone: 'ice', explain: '南極的冰約占全球冰量的 90%，融化會導致海平面上升。' },
            { text: '受重力影響緩慢移向低處形成冰川', zone: 'ice', explain: '寒冷地區的冰受重力作用緩慢移向低處，便會形成冰川。' },
            { text: '人類可直接取用，僅占總水量約1%', zone: 'ground', explain: '地下水、河流和湖泊是人類能直接取用的淡水，合計僅占總水量約 1%。' },
            { text: '雨水下滲遇到不透水層而向上累積', zone: 'ground', explain: '雨水滲入地下岩層孔隙，遇到頁岩等不透水層便向上累積成地下水。' }
          ],
          summary: '地球水體以海水占約97%最多，冰占約2%居次，人類可直接取用的地下水與河湖僅占約1%。'
        },
        {
          type: 'classification',
          title: '地下水面的變化與超抽危害',
          description: '請判斷下列情況屬於「地下水面較高或上升」，還是「超抽地下水造成的危害」。',
          zones: [
            { id: 'rise', title: '地下水面較高或上升', icon: '⬆️' },
            { id: 'hazard', title: '超抽地下水的危害', icon: '⚠️' }
          ],
          items: [
            { text: '進入雨季或連續多雨的時期', zone: 'rise', explain: '降雨增多時，雨水下滲補充地下水，使地下水面上升。' },
            { text: '地勢較高的山區或丘陵地帶', zone: 'rise', explain: '地下水面並非水平，地勢較高的地區，地下水面通常也較高。' },
            { text: '引導降雨快速滲入透水地表', zone: 'rise', explain: '雨水順利下滲可補充地下水，並減少都市淹水。' },
            { text: '地下水面高於地表時湧出成泉水', zone: 'rise', explain: '地下水面夠高並與地表相交時，地下水會自然湧出地面成為泉水。' },
            { text: '岩層孔隙失去水支撐而壓縮下陷', zone: 'hazard', explain: '超抽地下水使岩層孔隙缺乏水的支撐，被上方土石壓縮造成地層下陷。' },
            { text: '地層下陷後無法復原且易積水', zone: 'hazard', explain: '地層一旦壓縮下陷就無法恢復原狀。' },
            { text: '濱海地區地下淡水被海水滲入鹹化', zone: 'hazard', explain: '在沿海超抽地下水，會導致海水滲入取代淡水，使地下水鹹化無法使用。' },
            { text: '沿海地勢變低導致海水容易倒灌', zone: 'hazard', explain: '超抽地下水引發濱海地層下陷後，海水更容易倒灌進陸地。' }
          ],
          summary: '地下水面受降雨與地形影響；超抽地下水會導致不可逆的地層下陷、地下水鹹化與海水倒灌。'
        }
      ]
    },
    {
      id: 'e1-2',
      title: '1·2 風化、侵蝕與地表的平衡',
      levels: [
        {
          type: 'classification',
          title: '風化、侵蝕、搬運與沉積作用',
          description: '請將下列外營力的作用與實例，歸類到對應的作用名稱。',
          zones: [
            { id: 'weathering', title: '風化作用', icon: '☀️' },
            { id: 'erosion', title: '侵蝕作用', icon: '⛏️' },
            { id: 'transport', title: '搬運作用', icon: '🚚' },
            { id: 'deposition', title: '沉積作用', icon: '🏖️' }
          ],
          items: [
            { text: '岩石日夜熱脹冷縮而逐漸碎裂', zone: 'weathering', explain: '岩石在原處因日夜溫差熱脹冷縮而碎裂，屬於風化作用。' },
            { text: '水在岩縫反覆結冰膨脹撐裂岩石', zone: 'weathering', explain: '寒冷地區水在裂隙中結凍膨脹使岩石破碎，屬於風化作用。' },
            { text: '植物根部在岩縫生長擴展裂隙', zone: 'weathering', explain: '生物因素使岩石裂隙擴大、逐漸碎裂，屬於風化作用。' },
            { text: '岩石中鐵質與氧和水反應生氧化鐵', zone: 'weathering', explain: '岩石成分發生化學改變產生褐色氧化鐵，屬於風化作用。' },
            { text: '大石塊經碎裂最終變成土壤的過程', zone: 'weathering', explain: '岩石由大石塊變小石塊、細沙，最終成為土壤，是風化作用的結果。' },
            { text: '外營力將岩石與泥沙從原處剝離', zone: 'erosion', explain: '流水、風、冰川或海浪將岩石或泥沙從原處剝離，稱為侵蝕作用。' },
            { text: '將風化與侵蝕產生的碎屑移到他處', zone: 'transport', explain: '外營力把碎屑物從一處移動到另一處，稱為搬運作用。' },
            { text: '碎屑物堆積在平原、湖泊或海底', zone: 'deposition', explain: '當搬運力量減弱，碎屑物堆積下來的過程稱為沉積作用。' }
          ],
          summary: '外營力包含使岩石破碎變土壤的風化、剝離物質的侵蝕、移至他處的搬運與堆積的沉積。'
        },
        {
          type: 'order',
          title: '河流從上游到下游的旅程',
          description: '請依河流從「高山上游」流向「下游平原與出海口」的過程，排出正確順序。',
          items: [
            { text: '高山融雪與降雨匯集，在上游陡峭河道快速流動' },
            { text: '上游水流向下侵蝕劇烈，形成V形谷與有稜角的巨礫', explain: '上游地勢陡、水流急，以向下侵蝕為主，河床多為有稜有角的巨大礫石。' },
            { text: '岩石隨流水往下搬運時，彼此不斷滾動、碰撞與摩擦', explain: '在流水搬運過程中，石塊會因碰撞摩擦而漸漸磨去稜角。' },
            { text: '中、下游河床上逐漸出現圓潤光滑的鵝卵石與細沙', explain: '經過一段距離的搬運磨圓後，中下游河床常見圓滑的鵝卵石。' },
            { text: '下游向兩側侵蝕使河道變寬，流速減緩使泥沙沉積', explain: '到了下游平原或開闊水域，水流變慢、搬運力減弱，泥沙便大量沉積。' }
          ],
          summary: '河流由上游至下游流速漸減，沉積物由有稜角巨礫磨圓為鵝卵石，最後沉積為細沙與泥。'
        },
        {
          type: 'classification',
          title: '河流、冰川、風與海浪塑造的地形',
          description: '請將各種地形與地質景觀，歸類到塑造它們的主要外營力。',
          zones: [
            { id: 'river', title: '河流', icon: '🏞️' },
            { id: 'glacier', title: '冰川', icon: '🏔️' },
            { id: 'wind', title: '風', icon: '💨' },
            { id: 'wave', title: '海浪', icon: '🌊' }
          ],
          items: [
            { text: '高山峽谷常見陡峭的V形谷', zone: 'river', explain: '河流上游向下侵蝕劇烈，常形成 V 形谷。' },
            { text: '河床上圓潤光滑的鵝卵石', zone: 'river', explain: '鵝卵石是岩石在河水搬運過程中滾動磨圓而成的。' },
            { text: '山谷被刮磨侵蝕成特有的U形谷', zone: 'glacier', explain: '冰川移動時挾帶岩屑強烈刮磨山谷，形成特有的 U 形谷。' },
            { text: '融化後留下大小顆粒混雜的沉積物', zone: 'glacier', explain: '冰川搬運與融化沉積時不會篩選顆粒大小，沉積物大小混雜。' },
            { text: '強風挾沙長久磨蝕形成的風磨石', zone: 'wind', explain: '強風挾帶沙粒摩擦岩石表面，會形成稜面光滑的風磨石。' },
            { text: '沙粒被搬動堆積形成的沙丘與風吹砂', zone: 'wind', explain: '沙丘與恆春風吹砂是風的搬運與沉積作用造成的地景。' },
            { text: '拍擊海岸雕鑿出海蝕平臺與海蝕洞', zone: 'wave', explain: '海浪長期拍打侵蝕海岸岩石，會形成海蝕平臺、海蝕洞等海蝕地形。' },
            { text: '海岸岩石被侵蝕貫穿形成的海拱', zone: 'wave', explain: '海蝕洞受海浪持續侵蝕貫穿後，會形成拱門狀的海拱。' },
            { text: '泥沙在海岸附近沉積成沙灘與沙洲', zone: 'wave', explain: '流動的海水與海浪將泥沙搬運至岸邊沉積，形成沙灘與沙洲。' }
          ],
          summary: '河流造出V形谷與鵝卵石、冰川造出U形谷、風造出風磨石與沙丘、海浪造出海蝕地形與沙灘。'
        },
        {
          type: 'classification',
          title: '地貌與海岸線的動態平衡',
          description: '請判斷下列條件會使「地勢增高／海岸向外擴張」，還是「地勢變平／海岸向內退縮」。',
          zones: [
            { id: 'expand', title: '地勢增高或海岸擴張', icon: '📈' },
            { id: 'retreat', title: '地勢變平或海岸退縮', icon: '📉' }
          ],
          items: [
            { text: '內營力抬升速率大於外營力侵蝕速率', zone: 'expand', explain: '當山脈抬升隆起比風化侵蝕更快時，地勢就會增高。' },
            { text: '河流帶來泥沙量大於海水帶走泥沙量', zone: 'expand', explain: '出海口沉積的泥沙多於被海流帶走的泥沙，陸地會增加、海岸線向外擴張。' },
            { text: '昔日海堤遺跡如今位於內陸約2公里', zone: 'expand', explain: '古代海堤離現今海岸變遠，代表泥沙持續淤積使海岸線向海擴張。' },
            { text: '內營力抬升速率小於外營力侵蝕速率', zone: 'retreat', explain: '當外營力侵蝕速率大於地表抬升速率時，地勢會逐漸變得平坦。' },
            { text: '河流帶來泥沙量小於海水帶走泥沙量', zone: 'retreat', explain: '補充的泥沙少於被海水帶走的泥沙，沙灘會流失、海岸線向內陸退縮。' },
            { text: '在河流中上游興建水庫與攔沙壩', zone: 'retreat', explain: '水庫與攔沙壩會攔截泥沙，減少出海口泥沙補充，導致海岸被侵蝕退縮。' }
          ],
          summary: '地貌由內營力抬升與外營力侵蝕動態平衡決定；海岸進退則取決於河流輸沙與海浪帶走泥沙的平衡。'
        }
      ]
    },
    {
      id: 'e1-3',
      title: '1·3 岩石的種類與循環',
      levels: [
        {
          type: 'classification',
          title: '三大岩類的形成與代表岩石',
          description: '請將岩石的形成過程與常見代表岩石，歸類到對應的三大岩類。',
          zones: [
            { id: 'igneous', title: '火成岩', icon: '🌋' },
            { id: 'sedimentary', title: '沉積岩', icon: '🏖️' },
            { id: 'metamorphic', title: '變質岩', icon: '⛰️' }
          ],
          items: [
            { text: '由岩漿冷卻凝固而形成', zone: 'igneous', explain: '岩漿在地底或地表冷卻凝固形成的岩石稱為火成岩。' },
            { text: '花岡岩、安山岩與玄武岩', zone: 'igneous', explain: '花岡岩、安山岩和玄武岩都是常見的火成岩。' },
            { text: '大屯火山安山岩與澎湖玄武岩', zone: 'igneous', explain: '陽明山大屯火山群的安山岩與澎湖群島的玄武岩皆屬於火成岩。' },
            { text: '碎屑沉積物經壓密與膠結作用形成', zone: 'sedimentary', explain: '礫石、沙、泥等沉積物經壓密與膠結作用會形成沉積岩。' },
            { text: '珊瑚貝類遺骸或碳酸鈣沉澱形成', zone: 'sedimentary', explain: '由珊瑚、貝類遺骸堆積或水中碳酸鈣析出沉澱形成的石灰岩，屬於沉積岩。' },
            { text: '依顆粒由大至小分礫岩、砂岩、頁岩', zone: 'sedimentary', explain: '礫岩、砂岩和頁岩是依碎屑顆粒由大到小區分的常見沉積岩。' },
            { text: '石灰岩是製造水泥的主要原料', zone: 'sedimentary', explain: '石灰岩屬於沉積岩，是製造水泥的重要原料。' },
            { text: '在未熔融下經高溫與高壓作用形成', zone: 'metamorphic', explain: '岩石在地底未達熔融狀態下，受高溫、高壓改變礦物排列與大小，形成變質岩。' },
            { text: '大理岩、板岩、片岩與花岡片麻岩', zone: 'metamorphic', explain: '大理岩、板岩、片岩和花岡片麻岩都是常見的變質岩。' },
            { text: '太魯閣大理岩與原住民石板屋板岩', zone: 'metamorphic', explain: '太魯閣峽谷的大理岩與做石板屋的板岩都屬於變質岩。' }
          ],
          summary: '岩石依形成過程分為岩漿冷卻的火成岩、壓密膠結的沉積岩、高溫高壓改造的變質岩。'
        },
        {
          type: 'classification',
          title: '火成岩冷卻快慢與岩石變質配對',
          description: '請將火成岩的冷卻特徵與變質前後的關係，歸類到對應的岩石類別。',
          zones: [
            { id: 'granite', title: '花岡岩與花岡片麻岩', icon: '🏛️' },
            { id: 'volcanic', title: '安山岩與玄武岩', icon: '🌋' },
            { id: 'shale', title: '頁岩與板岩、片岩', icon: '🪨' },
            { id: 'limestone', title: '石灰岩與大理岩', icon: '🐚' }
          ],
          items: [
            { text: '岩漿在地底深處緩慢冷卻結晶顆粒大', zone: 'granite', explain: '花岡岩是岩漿在地底深處緩慢冷卻而成，礦物結晶顆粒較大。' },
            { text: '花岡岩經高溫高壓變質後的產物', zone: 'granite', explain: '花岡岩經過變質作用後，會形成花岡片麻岩。' },
            { text: '岩漿噴發至地表附近快速冷卻形成', zone: 'volcanic', explain: '安山岩與玄武岩是岩漿在地表附近快速冷卻形成的火成岩。' },
            { text: '火成岩中冷卻速率較快、結晶顆粒小', zone: 'volcanic', explain: '冷卻速率越快，礦物結晶顆粒越小，如安山岩與玄武岩。' },
            { text: '由最細小的泥質沉積物壓密膠結而成', zone: 'shale', explain: '頁岩是由顆粒最小的泥沉積壓密膠結而成，抗侵蝕力較砂岩弱。' },
            { text: '頁岩經高溫高壓變質形成板岩或片岩', zone: 'shale', explain: '板岩和片岩主要是由沉積岩中的頁岩變質而成。' },
            { text: '石灰岩經高溫高壓變質形成大理岩', zone: 'limestone', explain: '大理岩是由沉積岩中的石灰岩經過變質作用而形成。' },
            { text: '方解石經變質重新結晶變得更緊密', zone: 'limestone', explain: '大理岩與石灰岩都含方解石，但大理岩經變質重新結晶，結構較緊密。' }
          ],
          summary: '岩漿慢冷成大顆粒花岡岩、快冷成小顆粒安山岩與玄武岩；花岡岩、頁岩、石灰岩分別變質為花岡片麻岩、板岩與片岩、大理岩。'
        },
        {
          type: 'classification',
          title: '常見礦物的特性與鑑別',
          description: '請將下列礦物的物理化學特性與生活應用，歸類到對應的礦物。',
          zones: [
            { id: 'quartz', title: '石英', icon: '💎' },
            { id: 'calcite', title: '方解石', icon: '🫧' },
            { id: 'feldspar', title: '長石', icon: '🏺' },
            { id: 'mica', title: '雲母', icon: '📄' }
          ],
          items: [
            { text: '花岡岩中透明無色且硬度較大的礦物', zone: 'quartz', explain: '花岡岩中透明無色的結晶顆粒主要是石英，硬度比小刀與方解石大。' },
            { text: '小刀刮不出痕跡，滴稀鹽酸不冒泡', zone: 'quartz', explain: '石英硬度較大不被小刀刻劃，且成分為二氧化矽，遇酸不會冒泡。' },
            { text: '成分為二氧化矽，是矽晶圓的原料', zone: 'quartz', explain: '石英成分是二氧化矽（SiO₂），可製造半導體矽晶圓。' },
            { text: '硬度較小，可被小刀片刻劃出刮痕', zone: 'calcite', explain: '方解石莫氏硬度為 3，比小刀軟，可被小刀片刻劃出痕跡。' },
            { text: '成分為碳酸鈣，滴稀鹽酸會冒氣泡', zone: 'calcite', explain: '方解石成分為碳酸鈣（CaCO₃），遇稀鹽酸會反應產生二氧化碳氣泡。' },
            { text: '組成石灰岩與大理岩的主要礦物', zone: 'calcite', explain: '石灰岩和大理岩的主要組成礦物都是方解石。' },
            { text: '地殼含量最多，風化生黏土可製陶瓷', zone: 'feldspar', explain: '長石是地殼中含量最多的礦物，花岡岩中呈肉紅或乳白色，風化生成的高嶺石可做陶瓷。' },
            { text: '呈扁平薄片狀，可作隔熱與絕緣材料', zone: 'mica', explain: '雲母呈扁平層狀易剝離成薄片，白雲母常作為電器的隔熱或絕緣材料。' }
          ],
          summary: '礦物具有特定物理與化學性質；石英硬度大不溶於酸，方解石硬度小且遇稀鹽酸會產生二氧化碳氣泡。'
        }
      ]
    }
  ]
});
