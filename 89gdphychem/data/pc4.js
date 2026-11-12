QuizWorld.registerChapter({
  id: 'pc4',
  sections: [
    {
      id: 'pc4-1',
      title: '4·1 光的直進與光速',
      levels: [
        {
          type: 'classification',
          title: '光的直進與針孔成像',
          description: '判斷下列關於「光的直進」與「針孔成像」的敘述，是正確的光學觀念還是常見錯誤迷思。',
          zones: [
            { id: 'correct', title: '正確光學觀念', icon: '✅' },
            { id: 'myth', title: '常見錯誤迷思', icon: '❌' }
          ],
          items: [
            { text: '陽光穿過雲層與手影是光的直進', zone: 'correct' },
            { text: '紙卡圓孔與光源成一直線才看得見', zone: 'correct' },
            { text: '針孔成像是光沿直線前進的結果', zone: 'correct' },
            { text: '針孔成像為上下顛倒左右相反的像', zone: 'correct', explain: '由於光線沿直線穿過針孔，上下與左右的光線都會交叉，形成上下顛倒、左右相反的像。' },
            { text: '燭焰離針孔越近時紙屏成像越大', zone: 'correct', explain: '當紙屏與針孔距離固定時，燭焰距離針孔越近，在紙屏上形成的像就越大。' },
            { text: '針孔挖得越大紙屏上的成像越清楚', zone: 'myth', explain: '孔洞若太大，光線會互相重疊，紙屏上只會看到與洞口形狀相似的亮面，無法清楚成像。' },
            { text: '針孔成像只會上下顛倒但左右不變', zone: 'myth', explain: '針孔成像在各方向都是由直線光穿過小孔而成，因此既上下顛倒、也左右相反。' },
            { text: '紙屏上的針孔成像比原本燭焰還亮', zone: 'myth', explain: '燭焰發出的光線只有少部分能穿過細小的針孔，因此紙屏上的成像比原燭焰暗。' }
          ],
          summary: '光沿直線前進會形成影子與針孔成像；針孔成像為上下顛倒、左右相反的像。'
        },
        {
          type: 'order',
          title: '光速與聲速快慢排序',
          description: '請將光在不同介質中的傳播速率與空氣中的聲速，依速率「由快到慢」排列。',
          items: [
            { text: '光在真空中的傳播速率（約每秒 30 萬公里）' },
            { text: '光在水中的傳播速率（約為真空光速的四分之三）', explain: '光在水中的速率約為 2.25×10⁸ m/s，比在真空與空氣中慢，但比在玻璃中快。' },
            { text: '光在玻璃中的傳播速率（約為真空光速的三分之二）', explain: '光在玻璃中的速率約為 2×10⁸ m/s，比在水中更慢。' },
            { text: '聲音在空氣中的傳播速率（約每秒 343 公尺）', explain: '聲速遠慢於光速，因此雷雨天總是先看到閃電，才聽到雷聲。' }
          ],
          summary: '光不需介質即可傳播，在真空中最快（約 3×10⁸ m/s），光速大小為：真空＞空氣＞水＞玻璃。'
        }
      ]
    },
    {
      id: 'pc4-2',
      title: '4·2 光的反射與面鏡',
      levels: [
        {
          type: 'classification',
          title: '光的反射定律與視覺',
          description: '判斷下列關於「光與視覺」及「光的反射定律」的敘述，是正確原理還是錯誤觀念。',
          zones: [
            { id: 'correct', title: '符合反射與視覺原理', icon: '✅' },
            { id: 'wrong', title: '錯誤反射觀念', icon: '❌' }
          ],
          items: [
            { text: '不發光物體靠反射光進入眼睛看見', zone: 'correct' },
            { text: '入射角定義為入射線與法線的夾角', zone: 'correct' },
            { text: '入射線與反射線分別在法線的兩側', zone: 'correct' },
            { text: '光發生反射時入射角必等於反射角', zone: 'correct' },
            { text: '漫反射的每道光線仍遵守反射定律', zone: 'correct', explain: '平行光照在凹凸不平表面時雖向四方散開，但每一道光線在接觸點的入射角仍等於反射角。' },
            { text: '光沿法線入射時反射角為 0 度', zone: 'correct', explain: '沿法線垂直鏡面入射時，入射線與法線夾角為 0°，反射角也為 0°，光線原路反射回去。' },
            { text: '入射角是入射線與鏡面之間的夾角', zone: 'wrong', explain: '入射角是入射線與「法線」的夾角，不是與鏡面的夾角。' },
            { text: '入射角20°時反射角為70°', zone: 'wrong', explain: '根據反射定律，入射角必等於反射角；若入射角為 20°，反射角也必為 20°。' },
            { text: '凹凸不平表面的漫反射不遵守定律', zone: 'wrong', explain: '漫反射是因為表面各處法線方向不同，每一道光線依然遵守反射定律。' }
          ],
          summary: '反射定律：入射線、反射線與法線在同一平面，入射線與反射線在法線兩側，且入射角＝反射角。'
        },
        {
          type: 'classification',
          title: '實像還是虛像？',
          description: '光學成像可分為「實像」與「虛像」，請區分下列特性與實例屬於哪一種。',
          zones: [
            { id: 'real', title: '實像', icon: '🕯️' },
            { id: 'virtual', title: '虛像', icon: '🪞' }
          ],
          items: [
            { text: '由實際光線會聚或傳播到達所形成', zone: 'real' },
            { text: '放置紙屏在成像位置可以接收成像', zone: 'real' },
            { text: '燭焰透過針孔在描圖紙屏上成的像', zone: 'real', explain: '針孔成像是燭焰發出的光線實際傳播到紙屏上形成的，屬於實像。' },
            { text: '由反射線或折射線延長線交會而成', zone: 'virtual', explain: '虛像所在位置並沒有實際光線到達，是人眼順著光線反向延長線看過去感覺到的像。' },
            { text: '在成像位置放紙屏無法接收到成像', zone: 'virtual', explain: '因為實際光線沒有傳播到像的位置，所以無法在紙屏上成像。' },
            { text: '照平面鏡時在鏡後看見自己的成像', zone: 'virtual', explain: '平面鏡中的像是反射線向鏡後延伸交會而成的正立虛像。' },
            { text: '透過路口凸面鏡看見彎道來車的像', zone: 'virtual', explain: '凸面鏡所形成的正立縮小像在鏡後，沒有實際光線到達，屬於虛像。' }
          ],
          summary: '有實際光線到達、能在紙屏上成像的是實像；沒有實際光線到達、無法在紙屏上成像的是虛像。'
        },
        {
          type: 'classification',
          title: '平面鏡、凸面鏡與凹面鏡',
          description: '將下列面鏡的成像性質與日常生活應用，歸類到對應的面鏡種類。',
          zones: [
            { id: 'plane', title: '平面鏡', icon: '🪞' },
            { id: 'convex', title: '凸面鏡', icon: '🔮' },
            { id: 'concave', title: '凹面鏡', icon: '🥣' }
          ],
          items: [
            { text: '成正立等大虛像且物距等於像距', zone: 'plane' },
            { text: '牙醫用來檢查牙齒內側的口鏡', zone: 'plane' },
            { text: '平靜無波的水面形成岸邊景物倒影', zone: 'plane', explain: '平靜無波的水面光亮平滑，具有類似平面鏡反射成像的作用。' },
            { text: '成正立縮小虛像可讓觀察視野變廣', zone: 'convex', explain: '凸面鏡會形成正立縮小的虛像，涵蓋範圍較大，使視野更廣。' },
            { text: '裝在山路彎道與超商牆角的反射鏡', zone: 'convex' },
            { text: '平行主軸的光線反射後會聚於焦點', zone: 'concave', explain: '凹面鏡具有會聚光線的特性，平行主軸的光反射後會交會於焦點。' },
            { text: '太陽爐收集陽光集中於焦點加熱', zone: 'concave' },
            { text: '手電筒與汽車車前燈反射集中光束', zone: 'concave', explain: '將光源置於凹面鏡焦點處，反射後的光線會平行主軸集中射出。' },
            { text: '近距離照臉時可成正立放大像的鏡', zone: 'concave', explain: '當物體距離凹面鏡較近時，可形成正立放大的像，常作為放大化妝鏡。' }
          ],
          summary: '平面鏡成正立等大虛像；凸面鏡成正立縮小虛像可擴大視野；凹面鏡能會聚光線，近距離可成放大像。'
        }
      ]
    },
    {
      id: 'pc4-3',
      title: '4·3 光的折射與透鏡',
      levels: [
        {
          type: 'classification',
          title: '光在空氣與水之間的折射',
          description: '光在空氣與水兩種介質間傳播時，請依入射方式區分其速率變化、偏折方向與生活現象。',
          zones: [
            { id: 'to_water', title: '空氣斜射入水中', icon: '💧' },
            { id: 'to_air', title: '水中斜射入空氣', icon: '🌤️' },
            { id: 'perp', title: '垂直界面入射', icon: '⬇️' }
          ],
          items: [
            { text: '光的傳播速率變慢', zone: 'to_water' },
            { text: '折射線偏向法線', zone: 'to_water', explain: '光由空氣斜射進入水中時，因速率變慢，折射線會偏向法線。' },
            { text: '折射角小於入射角', zone: 'to_water' },
            { text: '光的傳播速率變快', zone: 'to_air' },
            { text: '折射線偏離法線', zone: 'to_air', explain: '光由水中斜射進入空氣時，因速率變快，折射線會偏離法線。' },
            { text: '折射角大於入射角', zone: 'to_air' },
            { text: '水中吸管反射光射出水面看來彎折', zone: 'to_air', explain: '水中吸管反射的光線從水中斜射入空氣進入人眼，使吸管看起來變淺而彎折。' },
            { text: '岸上看泳池底部覺得水深比實際淺', zone: 'to_air', explain: '池底反射的光由水中進入空氣偏離法線，使人眼看到的視深比實深淺。' },
            { text: '進入另一介質後行進方向不偏折', zone: 'perp', explain: '當光線沿垂直界面的方向（法線方向）射入時，進入水中後行進方向不會偏折。' }
          ],
          summary: '光斜射進入速率較慢的介質會偏向法線（折射角＜入射角）；進入速率較快的介質會偏離法線。'
        },
        {
          type: 'classification',
          title: '凸透鏡與凹透鏡的特性',
          description: '比較「凸透鏡」與「凹透鏡」的外型構造、光線折射特性與成像規律。',
          zones: [
            { id: 'convex', title: '凸透鏡', icon: '🔍' },
            { id: 'concave', title: '凹透鏡', icon: '👓' }
          ],
          items: [
            { text: '中間部分比邊緣厚的透鏡', zone: 'convex' },
            { text: '雙凸、平凸與凹凸透鏡皆屬此類', zone: 'convex' },
            { text: '平行主軸的光線折射後會聚於焦點', zone: 'convex', explain: '平行主軸的光線經凸透鏡折射後，會偏向主軸並實際會聚於另一側的焦點。' },
            { text: '在陽光下可於白紙聚焦出最亮光點', zone: 'convex', explain: '凸透鏡可會聚平行的太陽光於焦點，焦點到鏡心的距離即為焦距。' },
            { text: '依物距不同可成倒立實像或放大虛像', zone: 'convex' },
            { text: '中間部分比邊緣薄的透鏡', zone: 'concave' },
            { text: '雙凹、平凹與凸凹透鏡皆屬此類', zone: 'concave' },
            { text: '平行主軸的光線折射後偏離主軸發散', zone: 'concave', explain: '平行主軸的光線經凹透鏡折射後會發散，其反向延長線交於同側的焦點。' },
            { text: '不論物距為何皆成正立縮小虛像', zone: 'concave', explain: '物體置於凹透鏡前任一位置，都只能在鏡前形成正立縮小的虛像。' }
          ],
          summary: '凸透鏡中間較厚，能使平行光會聚；凹透鏡中間較薄，能使平行光發散。'
        },
        {
          type: 'classification',
          title: '透鏡的成像性質配對',
          description: '將物體放在凸透鏡或凹透鏡前的不同位置時，請依其成像位置（透鏡另一側或與物體同側）配對成像性質。',
          zones: [
            { id: 'inv_small', title: '倒立縮小實像', icon: '🔽' },
            { id: 'inv_large', title: '倒立放大實像', icon: '🔼' },
            { id: 'up_large', title: '正立放大虛像', icon: '🔎' },
            { id: 'up_small', title: '正立縮小虛像', icon: '🔬' }
          ],
          items: [
            { text: '物體在凸透鏡2倍焦距外', zone: 'inv_small', explain: '物體在凸透鏡 2 倍焦距外時，會在透鏡另一側（鏡後）焦距與 2 倍焦距間形成倒立縮小實像。' },
            { text: '成像於透鏡另一側焦距與2倍焦距間', zone: 'inv_small', explain: '凸透鏡的實像位在透鏡另一側（鏡後），落於焦距與 2 倍焦距間時為倒立縮小實像。' },
            { text: '物體在凸透鏡焦距與2倍焦距之間', zone: 'inv_large', explain: '物體在凸透鏡焦距與 2 倍焦距間時，會在透鏡另一側（鏡後）2 倍焦距外形成倒立放大實像。' },
            { text: '成像於透鏡另一側2倍焦距外紙屏上', zone: 'inv_large', explain: '此實像位在透鏡另一側（鏡後）2 倍焦距外，可在紙屏上接收。' },
            { text: '物體在凸透鏡的焦距內', zone: 'up_large', explain: '物體在凸透鏡焦距內時，會在與物體同側（鏡前）形成正立放大虛像。' },
            { text: '在與物體同側形成放大的虛像', zone: 'up_large', explain: '凸透鏡作為放大鏡時，虛像位置與物體在透鏡的同一側（鏡前），需從另一側透過透鏡觀察。' },
            { text: '物體在凹透鏡前任一位置', zone: 'up_small', explain: '物體不論在凹透鏡焦距外或焦距內，皆成正立縮小虛像。' },
            { text: '經凹透鏡在與物體同側成的像', zone: 'up_small', explain: '凹透鏡形成的正立縮小虛像，位置與物體在透鏡的同一側（鏡前），無法在紙屏上成像。' },
            { text: '在與物體同側焦距內形成縮小的像', zone: 'up_small', explain: '凹透鏡的虛像恆位於與物體同側（鏡前）的焦距內，且為正立縮小虛像。' }
          ],
          summary: '實像皆在透鏡另一側（鏡後，可用紙屏接收）；虛像皆與物體同側（鏡前，需透過透鏡觀察）。'
        }
      ]
    },
    {
      id: 'pc4-4',
      title: '4·4 光學儀器',
      levels: [
        {
          type: 'classification',
          title: '顯微鏡、照相機與眼睛構造',
          description: '將照相機、人類眼睛與複式顯微鏡的構造功能及成像性質，歸類到對應的類別。',
          zones: [
            { id: 'lens', title: '相當於凸透鏡聚焦', icon: '🔍' },
            { id: 'screen', title: '接收倒立縮小實像', icon: '🎞️' },
            { id: 'micro', title: '複式顯微鏡特性', icon: '🔬' }
          ],
          items: [
            { text: '照相機鏡頭內部的透鏡組', zone: 'lens' },
            { text: '人眼構造中能調整焦距的水晶體', zone: 'lens', explain: '眼睛的水晶體相當於一個精巧的凸透鏡，可調整焦距使光線聚焦。' },
            { text: '照相機內部記錄影像的感光元件', zone: 'screen', explain: '景物經相機鏡頭折射後，會在感光元件上形成倒立縮小的實像。' },
            { text: '人眼構造中連接視神經的視網膜', zone: 'screen', explain: '視力正常時，外界光線經水晶體折射後會在視網膜上形成清晰的倒立縮小實像。' },
            { text: '拍攝遠處景物時在相機內成的像', zone: 'screen' },
            { text: '物鏡與目鏡皆使用凸透鏡組合', zone: 'micro' },
            { text: '經多次折射最終成放大的虛像', zone: 'micro', explain: '人眼透過複式顯微鏡最後看到的像，是經過物鏡與目鏡折射後的放大虛像。' },
            { text: '觀察結果與原樣本上下顛倒左右相反', zone: 'micro' }
          ],
          summary: '相機鏡頭與人眼水晶體相當於凸透鏡，在感光元件與視網膜上成倒立實像；複式顯微鏡最終成上下顛倒、左右相反的虛像。'
        },
        {
          type: 'classification',
          title: '近視眼與遠視眼的成因與矯正',
          description: '請區分「近視眼」與「遠視眼（含老花眼）」的眼球成因、成像落點與矯正鏡片。',
          zones: [
            { id: 'myopia', title: '近視眼', icon: '👓' },
            { id: 'hyperopia', title: '遠視眼（含老花眼）', icon: '🥽' }
          ],
          items: [
            { text: '水晶體到視網膜的距離過長', zone: 'myopia' },
            { text: '水晶體的焦距過短使光線太早會聚', zone: 'myopia' },
            { text: '遠處物體的成像落在視網膜前方', zone: 'myopia', explain: '近視眼看遠物時，光線聚焦在視網膜前方，導致看不清楚遠物。' },
            { text: '配戴適當焦距的凹透鏡先發散光線', zone: 'myopia', explain: '配戴凹透鏡可使光線進入眼睛前先發散，讓成像往後移回視網膜上。' },
            { text: '別人透過此矯正鏡片看眼睛會變小', zone: 'myopia', explain: '近視眼鏡是凹透鏡，會形成正立縮小虛像，因此看起來眼睛變小。' },
            { text: '水晶體到視網膜的距離過短', zone: 'hyperopia' },
            { text: '水晶體的焦距過長使光線太晚會聚', zone: 'hyperopia' },
            { text: '近處物體的成像落在視網膜後方', zone: 'hyperopia', explain: '遠視眼看近物時，成像會落在視網膜後方，導致看不清楚近物。' },
            { text: '配戴適當焦距的凸透鏡先會聚光線', zone: 'hyperopia', explain: '配戴凸透鏡可使光線進入眼睛前先會聚，讓成像往前移回視網膜上。' },
            { text: '年長者因水晶體調節衰退的老花眼', zone: 'hyperopia', explain: '老花眼是由於水晶體調節機能衰退引起，同樣配戴適當焦距的凸透鏡來矯正。' }
          ],
          summary: '近視眼成像在視網膜前，配戴凹透鏡發散光線；遠視眼成像在視網膜後，配戴凸透鏡會聚光線。'
        }
      ]
    },
    {
      id: 'pc4-5',
      title: '4·5 光與顏色',
      levels: [
        {
          type: 'classification',
          title: '色散、三原色光與呈色原理',
          description: '將下列光與顏色的現象及原理，歸類到「色散與三原色光」、「透明物體呈色」或「不透明物體呈色」。',
          zones: [
            { id: 'spectrum', title: '色散與三原色光', icon: '🌈' },
            { id: 'trans', title: '透明物體呈色', icon: '🪟' },
            { id: 'opaque', title: '不透明物體呈色', icon: '🎨' }
          ],
          items: [
            { text: '陽光通過三稜鏡折射分散成七色光', zone: 'spectrum', explain: '牛頓發現太陽光通過三稜鏡後會折射分散成紅、橙、黃、綠、藍、靛、紫七種色光，稱為色散。' },
            { text: '紅、綠、藍三種單色光稱為三原色光', zone: 'spectrum' },
            { text: '天空中的彩虹是陽光穿過雨滴色散', zone: 'spectrum' },
            { text: '電腦螢幕由紅綠藍小光格組合呈色', zone: 'spectrum' },
            { text: '讓同色光穿透並吸收其餘色光', zone: 'trans', explain: '玻璃紙或壓克力板等透明物體，只讓與自己顏色相近的色光穿透，其餘色光被吸收。' },
            { text: '白光穿過藍色壓克力板後變成藍光', zone: 'trans' },
            { text: '反射同色光進入人眼並吸收其他色光', zone: 'opaque', explain: '色紙或水果等不透明物體，會反射與自己同色的色光並吸收其他色光。' },
            { text: '攤販用綠光照射芭樂使綠色更鮮明', zone: 'opaque', explain: '綠色芭樂反射綠光，以綠色光源照射會提高反射出的綠光亮度。' },
            { text: '白色表面幾乎反射所有色光不吸收', zone: 'opaque' }
          ],
          summary: '透明物體的顏色由穿透的色光決定；不透明物體的顏色由反射的色光決定（白反射全部、黑吸收全部）。'
        },
        {
          type: 'classification',
          title: '色光照射實驗大考驗',
          description: '在暗箱或特定色光環境下觀察色紙與物體時，判斷眼睛最終會看到什麼顏色。',
          zones: [
            { id: 'white', title: '呈現白色', icon: '⬜' },
            { id: 'red', title: '呈現紅色', icon: '🟥' },
            { id: 'green', title: '呈現綠色', icon: '🟩' },
            { id: 'black', title: '呈現黑色', icon: '⬛' }
          ],
          items: [
            { text: '紅光、綠光、藍光等量重疊在白紙', zone: 'white', explain: '相同亮度的紅、綠、藍三原色光同時照射在白紙上重疊，會混合呈現白色。' },
            { text: '白光照射在白色色紙上', zone: 'white', explain: '白紙幾乎完全反射白光中的所有色光，混合進入眼睛呈現白色。' },
            { text: '白光照射在紅色色紙上', zone: 'red', explain: '紅色紙吸收其他色光，只反射紅光進入眼睛。' },
            { text: '紅光照射在白色色紙上', zone: 'red', explain: '白紙能反射所有色光，當只有紅光照射時，白紙反射紅光而呈現紅色。' },
            { text: '從紅色玻璃看穿白色婚紗的新娘', zone: 'red', explain: '白色婚紗反射的白光穿過紅色玻璃時，只有紅光能穿透進入眼睛，看起來為紅色。' },
            { text: '白光照射在綠色色紙上', zone: 'green' },
            { text: '綠光照射在白色色紙上', zone: 'green', explain: '白紙反射照射其上的綠光，因此看起來呈現綠色。' },
            { text: '紅光照射在綠色或藍色色紙上', zone: 'black', explain: '綠色與藍色色紙會吸收紅光，幾乎沒有光線反射進入眼睛，因此呈現黑色。' },
            { text: '藍光照射在紅色色紙上', zone: 'black', explain: '紅色紙會吸收藍光而幾乎不反射，因此呈現黑色。' },
            { text: '在無光源暗箱中觀察任何色紙', zone: 'black', explain: '沒有光源時，色紙無法反射任何光線進入眼睛，因此看不見顏色而呈現黑暗。' }
          ],
          summary: '白色物體反射任何入射色光；單色物體只反射同色光，照異色光時因被吸收而呈現黑色。'
        }
      ]
    }
  ]
});
