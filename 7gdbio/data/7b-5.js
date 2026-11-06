// 七下第 5 章：人類與環境
QuizWorld.registerChapter({
  id: '7b-5',
  sections: [
    // ==================== 5·1 ====================
    {
      id: '7b-5-1',
      title: '5·1 生物多樣性的重要性與危機',
      levels: [
        {
          title: '第 1 關：生物多樣性的三個層次',
          type: 'classification',
          description: '請將下列敘述與實例，歸類到生物多樣性的三個層次！',
          zones: [
            { id: 'genetic', title: '遺傳多樣性', icon: '🧬' },
            { id: 'species', title: '物種多樣性', icon: '🐸' },
            { id: 'ecosystem', title: '生態系多樣性', icon: '🏞️' }
          ],
          items: [
            { text: '同種個體間具有不同的基因組合', zone: 'genetic', explain: '同種生物個體間基因組合不同，稱為遺傳多樣性' },
            { text: '斯文豪氏赤蛙有各種不同體色', zone: 'genetic', explain: '同種赤蛙體色多樣，屬於遺傳多樣性，可提供保護色降低被捕食機率' },
            { text: '性狀多樣有助物種適應環境變動', zone: 'genetic', explain: '性狀與表徵保持多樣，有助物種在環境變動時適應存活' },
            { text: '同一生態系中有各種生物生存', zone: 'species', explain: '同一生態系中生物種類豐富，稱為物種多樣性' },
            { text: '食物網物種越多，越能自我恢復', zone: 'species', explain: '物種越多、食物網越複雜，生態系越能抵抗破壞並自我恢復' },
            { text: '同一池塘中有魚、蝦、蛙與水草', zone: 'species', explain: '同一環境中有多種不同生物，屬於物種多樣性' },
            { text: '地球上有各式各樣的環境與生態系', zone: 'ecosystem', explain: '地球上不同環境構成各種生態系，稱為生態系多樣性' },
            { text: '森林、草原、沙漠、淡水與海洋', zone: 'ecosystem', explain: '各種不同類型的生態系，展現生態系多樣性' },
            { text: '環境多樣才能提供各種生物棲息', zone: 'ecosystem', explain: '生態系多樣性提供各種棲地，也會增加遺傳與物種多樣性' }
          ],
          summary: '生物多樣性包含三個層次：同種個體基因不同的「遺傳多樣性」、同一生態系物種豐富的「物種多樣性」，以及地球上有各種環境的「生態系多樣性」；三者環環相扣，缺一不可。'
        },
        {
          title: '第 2 關：生物多樣性對人類的重要性',
          type: 'classification',
          description: '請將下列例子，歸類到生物多樣性對人類的不同重要性！',
          zones: [
            { id: 'economy', title: '經濟需求（食衣住行）', icon: '💰' },
            { id: 'medicine', title: '醫藥與農業', icon: '💊' },
            { id: 'beauty', title: '生活美感與道德', icon: '🌸' }
          ],
          items: [
            { text: '稻米、小麥可作為主食', zone: 'economy', explain: '糧食作物滿足「食」的需求' },
            { text: '棉、麻、絲可作為布料', zone: 'economy', explain: '生物提供纖維滿足「衣」的需求' },
            { text: '竹子、松木可做成家具', zone: 'economy', explain: '木材滿足「住」的需求' },
            { text: '橡膠可製成汽車輪胎', zone: 'economy', explain: '橡膠樹的產物滿足「行」的需求' },
            { text: '從野生生物找到抗病蟲害基因', zone: 'medicine', explain: '野生生物的抗病、抗蟲基因可改善農作物病蟲害問題' },
            { text: '研究熱帶雨林植物研發新藥成分', zone: 'medicine', explain: '藥廠的新藥成分有些來自熱帶雨林植物的研究' },
            { text: '非洲原生咖啡抗病基因救巴西咖啡', zone: 'medicine', explain: '非洲原生咖啡樹的抗病基因經雜交，挽救了巴西咖啡樹的鏽病危機' },
            { text: '豐富景色提供遊憩並增加生活美感', zone: 'beauty', explain: '多樣的生物造就豐富景色，提供育樂與生活美感' },
            { text: '每種生物都有生存權益不能恣意破壞', zone: 'beauty', explain: '從道德角度，每種生物都有生存權益，人類不能恣意破壞地球' }
          ],
          summary: '人類的食、衣、住、行、醫藥與育樂都仰賴生物多樣性：它提供經濟資源、可從野生生物找到抗病基因與新藥，也帶來生活美感；而且每種生物都有生存權益，人類不應恣意破壞。'
        },
        {
          title: '第 3 關：生物多樣性的危機（一）',
          type: 'classification',
          description: '請判斷下列事件，屬於哪一種威脅生物多樣性的危機！',
          zones: [
            { id: 'habitat', title: '棲地破壞', icon: '🚧' },
            { id: 'overuse', title: '過度開發利用', icon: '🎣' },
            { id: 'alien', title: '外來物種', icon: '🐌' }
          ],
          items: [
            { text: '道路開發切割石虎棲地使其破碎化', zone: 'habitat', explain: '道路切割使石虎棲地面積縮減且破碎，跨越時易遭路殺' },
            { text: '山林開墾與施放農藥毒餌影響石虎', zone: 'habitat', explain: '農田開墾與農藥毒餌使棲地不再適合石虎生存' },
            { text: '中低海拔大量開發，臺灣雲豹滅絕', zone: 'habitat', explain: '中低海拔土地大量開發使雲豹失去棲地，2014 年宣布滅絕' },
            { text: '臺灣一葉蘭、紅豆杉遭大量採集', zone: 'overuse', explain: '因觀賞與藥用價值而被大量採集，屬於過度開發利用' },
            { text: '鯊魚被捕撈取魚翅、玳瑁做飾品', zone: 'overuse', explain: '為了食材與飾品大量捕獵，使這些生物瀕臨絕種' },
            { text: '過度漁撈使黑鮪數量大減', zone: 'overuse', explain: '漁業技術發達造成過度漁撈，黑鮪等漁獲逐年減少' },
            { text: '象牙、犀牛角走私與盜獵', zone: 'overuse', explain: '象牙與犀牛角經濟價值高，盜獵走私使大象、犀牛面臨危機' },
            { text: '福壽螺、美國螯蝦被野放後大量繁殖', zone: 'alien', explain: '從國外引入後被不當野放，因缺乏天敵大量繁殖，威脅原生物種' },
            { text: '斑腿樹蛙與原生蛙類競爭棲地食物', zone: 'alien', explain: '外來的斑腿樹蛙繁殖力強，與原生蛙類競爭' },
            { text: '小花蔓澤蘭覆蓋原生植物使其死亡', zone: 'alien', explain: '外來植物小花蔓澤蘭生長快速，覆蓋原生植物使其缺乏陽光而死' }
          ],
          summary: '人類開發農田與道路造成「棲地破壞」（石虎、雲豹）；為觀賞、藥材、食材大量採獵造成「過度開發利用」（一葉蘭、魚翅、黑鮪、象牙）；隨意引進或棄養放生則造成「外來物種」入侵（福壽螺、美國螯蝦、斑腿樹蛙、小花蔓澤蘭）。'
        },
        {
          title: '第 4 關：生物多樣性的危機（二）',
          type: 'classification',
          description: '請將下列現象，歸類到對應的環境問題！',
          zones: [
            { id: 'air', title: '空氣汙染', icon: '🌫️' },
            { id: 'water', title: '水汙染與優養化', icon: '💧' },
            { id: 'magnify', title: '生物放大作用', icon: '🔺' },
            { id: 'climate', title: '氣候變遷', icon: '🌡️' }
          ],
          items: [
            { text: '汙染物溶於雨水形成酸雨', zone: 'air', explain: '空氣中的汙染物溶於雨水形成酸雨，損壞建築物並危害生物' },
            { text: '細懸浮微粒進入肺部與血液', zone: 'air', explain: '空氣中的細懸浮微粒經呼吸進入肺部，甚至進入血液循環' },
            { text: '破壞臭氧層使紫外線過量', zone: 'air', explain: '部分空氣汙染物會破壞臭氧層，使紫外線過量造成動植物病變' },
            { text: '生活汙水、農畜業與工業廢水', zone: 'water', explain: '這三者是水汙染的主要來源' },
            { text: '含氮、磷廢水使藻類大量繁殖', zone: 'water', explain: '排泄物、肥料中的氮、磷排入水中會加速優養化' },
            { text: '農藥、重金屬難以代謝而累積體內', zone: 'magnify', explain: '有毒物質難以被代謝排出，會累積在生物體內' },
            { text: '食物鏈層級越高，體內毒素越多', zone: 'magnify', explain: '有毒物質沿食物鏈傳遞，越高級的消費者累積越多，稱為生物放大作用' },
            { text: '日本含汞廢水造成水俁症', zone: 'magnify', explain: '汞經食物鏈累積在魚貝體內，居民大量食用後甲基汞中毒' },
            { text: '海水增溫使珊瑚失去共生藻而白化', zone: 'climate', explain: '全球暖化使海水增溫，珊瑚白化甚至死亡' },
            { text: '櫻花因氣候異常提早在10月開花', zone: 'climate', explain: '氣候異常打亂動植物的生理時鐘，開花時間變得不穩定' }
          ],
          summary: '空氣汙染會造成酸雨、臭氧層破壞與細懸浮微粒；含氮磷廢水會造成水域優養化；農藥、重金屬會沿食物鏈產生「生物放大作用」（如水俁症）；全球暖化與氣候變遷則造成珊瑚白化、開花時間異常等問題。'
        },
        {
          title: '第 5 關：水域優養化的惡化過程',
          type: 'order',
          description: '請依先後順序，排出水域優養化逐漸惡化的過程！',
          items: [
            { text: '排泄物、肥料等含氮磷廢水未經處理排入水中', explain: '步驟 1：含氮、磷的廢水進入水域' },
            { text: '水中養分增加，藻類與藍綠菌大量繁殖覆蓋水面', explain: '步驟 2：養分增加使藻類與藍綠菌大量繁殖' },
            { text: '藻類遮蔽日光，水底植物無法行光合作用', explain: '步驟 3：水面被覆蓋，水下植物照不到光' },
            { text: '水中氧氣減少，魚、蝦因缺氧而大量死亡', explain: '步驟 4：缺乏光合作用產氧，魚蝦缺氧死亡' },
            { text: '微生物分解遺體時更加消耗水中氧氣', explain: '步驟 5：分解遺體再消耗氧氣，形成惡性循環' },
            { text: '形成不斷缺氧的循環，最終水體混濁發臭', explain: '步驟 6：水生生態崩解，水體混濁發臭' }
          ],
          summary: '含氮、磷的廢水使水中養分增加，藻類大量繁殖遮蔽日光，水下植物無法行光合作用，魚蝦缺氧死亡；微生物分解遺體又更加耗氧，形成惡性循環，最後水體混濁發臭。'
        }
      ]
    },

    // ==================== 5·2 ====================
    {
      id: '7b-5-2',
      title: '5·2 維護生物多樣性',
      levels: [
        {
          title: '第 1 關：國際保育公約與組織',
          type: 'classification',
          description: '請將下列內容，歸類到對應的國際保育公約或組織！',
          zones: [
            { id: 'cbd', title: '生物多樣性公約', icon: '🌐' },
            { id: 'cites', title: '華盛頓公約（CITES）', icon: '🚫' },
            { id: 'ramsar', title: '拉姆薩公約（溼地公約）', icon: '🦢' },
            { id: 'iucn', title: 'IUCN（國際自然保育聯盟）', icon: '📕' }
          ],
          items: [
            { text: '維護全球生物多樣性的國際公約', zone: 'cbd', explain: '生物多樣性公約的主要目的是維護全球生物多樣性' },
            { text: '各國保育工作互相支援、交流研究', zone: 'cbd', explain: '生物多樣性公約促使各國在保育工作上互相支援並交流學術研究' },
            { text: '管制野生動植物的非法國際貿易', zone: 'cites', explain: '華盛頓公約（瀕臨絕種野生動植物國際貿易公約）管制野生動植物國際貿易' },
            { text: '沒有買賣就沒有殺害', zone: 'cites', explain: '華盛頓公約藉由管制貿易，減少對瀕危生物的獵捕' },
            { text: '保護與合理利用溼地', zone: 'ramsar', explain: '拉姆薩公約（溼地公約）的目的是保護與合理利用溼地' },
            { text: '保障黑面琵鷺不同季節的棲地', zone: 'ramsar', explain: '黑面琵鷺會遷徙，拉姆薩公約促使各國保護溼地，使其各季棲地都受保護' },
            { text: '制定瀕危物種紅色名錄', zone: 'iucn', explain: 'IUCN 依科學調查資料制定瀕危物種紅色名錄' },
            { text: '評估綠蠵龜為瀕危等級（EN）', zone: 'iucn', explain: 'IUCN 評估現存生物的瀕危等級，綠蠵龜被評定為瀕危（EN）' }
          ],
          summary: '「生物多樣性公約」促使各國互相支援維護生物多樣性；「華盛頓公約（CITES）」管制野生動植物非法國際貿易；「拉姆薩公約」保護溼地（如黑面琵鷺棲地）；「IUCN」則制定瀕危物種紅色名錄，評估物種瀕危等級。'
        },
        {
          title: '第 2 關：臺灣的保護區類型',
          type: 'classification',
          description: '請將下列特色與實例，歸類到臺灣的保護區類型！',
          zones: [
            { id: 'reserve', title: '自然保留區', icon: '🔒' },
            { id: 'wildlife', title: '野生動物保護區', icon: '🐢' },
            { id: 'park', title: '國家公園', icon: '🏔️' },
            { id: 'protect', title: '自然保護區', icon: '🌲' }
          ],
          items: [
            { text: '最嚴格保護，只允許學術研究', zone: 'reserve', explain: '自然保留區禁止學術研習以外的任何活動，以保存原有自然狀態' },
            { text: '嘉義臺灣一葉蘭自然保留區', zone: 'reserve', explain: '嘉義縣臺灣一葉蘭自然保留區屬於自然保留區' },
            { text: '為保護野生動物及其棲地而設立', zone: 'wildlife', explain: '野生動物保護區是為了保護野生動物及其棲地所設立' },
            { text: '澎湖望安綠蠵龜產卵棲地', zone: 'wildlife', explain: '澎湖縣綠蠵龜產卵棲地保護區屬於野生動物保護區' },
            { text: '保護風景、動植物並提供國民育樂', zone: 'park', explain: '國家公園保護特有自然風景、野生動植物及人文史蹟，並提供國民育樂及研究' },
            { text: '玉山、太魯閣與墾丁', zone: 'park', explain: '玉山、太魯閣、墾丁皆為臺灣的國家公園' },
            { text: '進行生態資源調查並推廣保育', zone: 'protect', explain: '自然保護區著重生態資源調查及保護，並推廣生態保育' },
            { text: '臺東大武臺灣油杉自然保護區', zone: 'protect', explain: '臺東縣大武臺灣油杉自然保護區屬於自然保護區' }
          ],
          summary: '臺灣依不同法源設立保護區：「自然保留區」保護最嚴格（僅限學術研究）；「野生動物保護區」保護動物及棲地；「國家公園」保護風景、動植物與人文史蹟並提供育樂；「自然保護區」著重資源調查與推廣保育。'
        },
        {
          title: '第 3 關：公民與個人的保育行動',
          type: 'classification',
          description: '請將下列保育行動，歸類到對應的參與方式！',
          zones: [
            { id: 'law', title: '促使政府修訂法律', icon: '📜' },
            { id: 'citizen', title: '參與公民科學與志工', icon: '🔍' },
            { id: 'daily', title: '日常個人作為', icon: '🚲' }
          ],
          items: [
            { text: '藉由請願、連署或遊行引起關注', zone: 'law', explain: '請願、連署、遊行可引起社會關注，促使政府修訂保育法律' },
            { text: '環保團體催生濕地保育法', zone: 'law', explain: '黑面琵鷺保育受環保團體重視，催生了濕地保育法' },
            { text: '黑面琵鷺棲地被指定為國際級溼地', zone: 'law', explain: '濕地保育法將曾文溪口、四草溼地指定為國際級溼地加以保護' },
            { text: '加入路殺社調查道路上死亡動物', zone: 'citizen', explain: '臺灣動物路死觀察網由民眾協力調查，政府再據以改善道路' },
            { text: '擔任野鳥協會、蝶會等志工', zone: 'citizen', explain: '加入民間保育組織擔任志工，是公民參與保育的行動' },
            { text: '協助調查生物並通報外來物種', zone: 'citizen', explain: '協助調查生物種類數量、通報外來物種，屬於公民科學參與' },
            { text: '不任意棄養或放生動物', zone: 'daily', explain: '棄養或放生可能造成外來物種入侵，日常應避免' },
            { text: '搭大眾運輸並少用免洗餐具', zone: 'daily', explain: '多搭大眾運輸或騎腳踏車、減少免洗餐具與塑膠製品' },
            { text: '購買認證產品、拒買保育類製品', zone: 'daily', explain: '選擇具認證的永續產品，拒絕購買保育類生物及其製品' }
          ],
          summary: '維護生物多樣性人人有責：可以透過請願、連署促使政府修法（如濕地保育法）；參與路殺社、擔任保育志工等公民科學；並在日常生活中不棄養放生、搭大眾運輸、少用免洗餐具、拒買保育類製品。'
        }
      ]
    }
  ]
});
