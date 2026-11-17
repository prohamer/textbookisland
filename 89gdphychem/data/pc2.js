(function () {
  function makeQuizPair(title1, title2, pool) {
    var lastIdx = -1;
    function makeOne(title, isSecond) {
      var cur = pool[isSecond ? 1 : 0];
      return {
        type: 'classification',
        title: title,
        zones: [
          { id: 'correct', title: '正確答案', icon: '⭕' },
          { id: 'wrong', title: '錯誤答案', icon: '❌' }
        ],
        get items() {
          var candidates = [];
          for (var i = 0; i < pool.length; i++) {
            if (!isSecond || i !== lastIdx) candidates.push(i);
          }
          var pick = candidates[Math.floor(Math.random() * candidates.length)];
          if (!isSecond) lastIdx = pick;
          cur = pool[pick];
          return cur.items;
        },
        get description() {
          return cur.description;
        },
        get summary() {
          return cur.summary;
        }
      };
    }
    return [makeOne(title1, false), makeOne(title2, true)];
  }

  var weightPool = [
    {
      description: '一瓶 200 公克的糖水，重量百分率濃度為 15%，請問裡面含有多少公克的糖？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '30 公克', zone: 'correct', explain: '每 100 公克糖水含 15 公克糖，200 公克糖水含有 200 × 15% ＝ 30 公克糖。' },
        { text: '15 公克', zone: 'wrong', explain: '15 公克是 100 公克糖水所含的糖量，200 公克糖水應有 30 公克糖。' },
        { text: '45 公克', zone: 'wrong', explain: '200 × 15% ＝ 30 公克，不是 45 公克。' },
        { text: '185 公克', zone: 'wrong', explain: '溶質質量 ＝ 溶液質量 × 重量百分率濃度 ＝ 200 × 15% ＝ 30 公克。' }
      ],
      summary: '溶質質量 ＝ 溶液總質量 × 重量百分率濃度（200 g × 15% ＝ 30 g）。'
    },
    {
      description: '一杯 500 公克的食鹽水，重量百分率濃度為 6%，請問裡面含有多少公克的食鹽？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '30 公克', zone: 'correct', explain: '每 100 公克食鹽水含 6 公克食鹽，500 公克食鹽水含有 500 × 6% ＝ 30 公克食鹽。' },
        { text: '6 公克', zone: 'wrong', explain: '6 公克是 100 公克食鹽水所含的食鹽量，500 公克食鹽水應有 30 公克。' },
        { text: '60 公克', zone: 'wrong', explain: '500 × 6% ＝ 30 公克，不是 60 公克。' },
        { text: '3 公克', zone: 'wrong', explain: '500 × 6% ＝ 30 公克，不是 3 公克。' }
      ],
      summary: '溶質質量 ＝ 溶液總質量 × 重量百分率濃度（500 g × 6% ＝ 30 g）。'
    },
    {
      description: '一罐 300 公克的果汁，標示含糖量（重量百分率濃度）為 10%，請問裡面含有多少公克的糖？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '30 公克', zone: 'correct', explain: '每 100 公克果汁含 10 公克糖，300 公克果汁含有 300 × 10% ＝ 30 公克糖。' },
        { text: '10 公克', zone: 'wrong', explain: '10 公克是 100 公克果汁所含的糖量，300 公克果汁應有 30 公克。' },
        { text: '3 公克', zone: 'wrong', explain: '300 × 10% ＝ 30 公克，不是 3 公克。' },
        { text: '270 公克', zone: 'wrong', explain: '270 公克是扣除糖之後其餘成分的質量，糖的質量為 300 × 10% ＝ 30 公克。' }
      ],
      summary: '溶質質量 ＝ 溶液總質量 × 重量百分率濃度（300 g × 10% ＝ 30 g）。'
    },
    {
      description: '想配製重量百分率濃度 20% 的糖水 100 公克，除了需要 80 公克的水之外，需要加入多少公克的糖？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '20 公克', zone: 'correct', explain: '80 公克水 ＋ 20 公克糖 ＝ 100 公克糖水，濃度為 20 ÷ 100 × 100% ＝ 20%。' },
        { text: '25 公克', zone: 'wrong', explain: '100 公克糖水中含 20% 的糖，糖的質量為 100 × 20% ＝ 20 公克。' },
        { text: '10 公克', zone: 'wrong', explain: '若只加 10 公克糖，溶液總重 90 公克，濃度不到 20%。' },
        { text: '80 公克', zone: 'wrong', explain: '80 公克是水的質量，糖的質量應為 20 公克。' }
      ],
      summary: '80 公克水 ＋ 20 公克糖 ＝ 100 公克溶液，重量百分率濃度剛好為 20%。'
    }
  ];

  var volPool = [
    {
      description: '一瓶 1000 毫升的紅酒，標示體積百分率濃度為 11%，請問裡面含有多少毫升的純酒精？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '110 毫升', zone: 'correct', explain: '每 100 毫升紅酒含 11 毫升酒精，1000 毫升紅酒含有 1000 × 11% ＝ 110 毫升純酒精。' },
        { text: '11 毫升', zone: 'wrong', explain: '11 毫升是 100 毫升紅酒所含的酒精量，1000 毫升紅酒應有 110 毫升。' },
        { text: '220 毫升', zone: 'wrong', explain: '1000 × 11% ＝ 110 毫升，不是 220 毫升。' },
        { text: '890 毫升', zone: 'wrong', explain: '純酒精體積 ＝ 1000 × 11% ＝ 110 毫升。' }
      ],
      summary: '溶質體積 ＝ 溶液總體積 × 體積百分率濃度（1000 mL × 11% ＝ 110 mL）。'
    },
    {
      description: '一罐 500 毫升的啤酒，標示酒精度為 5 度（5%），請問裡面含有多少毫升的純酒精？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '25 毫升', zone: 'correct', explain: '每 100 毫升啤酒含 5 毫升酒精，500 毫升啤酒含有 500 × 5% ＝ 25 毫升純酒精。' },
        { text: '5 毫升', zone: 'wrong', explain: '5 毫升是 100 毫升啤酒所含的酒精量，500 毫升啤酒應有 25 毫升。' },
        { text: '50 毫升', zone: 'wrong', explain: '500 × 5% ＝ 25 毫升，不是 50 毫升。' },
        { text: '100 毫升', zone: 'wrong', explain: '500 × 5% ＝ 25 毫升，不是 100 毫升。' }
      ],
      summary: '酒類「5 度」代表體積百分率濃度 5%，500 mL × 5% ＝ 25 mL 純酒精。'
    },
    {
      description: '一瓶 200 毫升的消毒用酒精水溶液，體積百分率濃度為 75%，請問含有多少毫升的純酒精？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '150 毫升', zone: 'correct', explain: '每 100 毫升含 75 毫升純酒精，200 毫升含有 200 × 75% ＝ 150 毫升純酒精。' },
        { text: '75 毫升', zone: 'wrong', explain: '75 毫升是 100 毫升溶液所含的純酒精量，200 毫升應有 150 毫升。' },
        { text: '50 毫升', zone: 'wrong', explain: '200 × 75% ＝ 150 毫升，不是 50 毫升。' },
        { text: '125 毫升', zone: 'wrong', explain: '200 × 75% ＝ 150 毫升，不是 125 毫升。' }
      ],
      summary: '溶質體積 ＝ 溶液總體積 × 體積百分率濃度（200 mL × 75% ＝ 150 mL）。'
    },
    {
      description: '一瓶 600 毫升的料理米酒，標示酒精度為 20 度（20%），請問裡面含有多少毫升的純酒精？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '120 毫升', zone: 'correct', explain: '每 100 毫升米酒含 20 毫升純酒精，600 毫升米酒含有 600 × 20% ＝ 120 毫升純酒精。' },
        { text: '20 毫升', zone: 'wrong', explain: '20 毫升是 100 毫升米酒所含的酒精量，600 毫升米酒應有 120 毫升。' },
        { text: '60 毫升', zone: 'wrong', explain: '600 × 20% ＝ 120 毫升，不是 60 毫升。' },
        { text: '480 毫升', zone: 'wrong', explain: '純酒精體積 ＝ 600 × 20% ＝ 120 毫升。' }
      ],
      summary: '酒類「20 度」代表體積百分率濃度 20%，600 mL × 20% ＝ 120 mL 純酒精。'
    }
  ];

  var ppmPool = [
    {
      description: '某牌牙膏標示含氟量為 1000 ppm，代表每 1 公斤牙膏中含有多少毫克（mg）的氟？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '1000 毫克', zone: 'correct', explain: '1 ppm 代表每 1 公斤含 1 毫克，因此 1000 ppm 代表每 1 公斤牙膏含 1000 毫克氟。' },
        { text: '100 毫克', zone: 'wrong', explain: '1000 ppm 在 1 公斤中應含有 1000 毫克，不是 100 毫克。' },
        { text: '10 毫克', zone: 'wrong', explain: '1000 ppm 在 1 公斤中應含有 1000 毫克。' },
        { text: '1 毫克', zone: 'wrong', explain: '1 毫克/公斤是 1 ppm，1000 ppm 應為 1000 毫克。' }
      ],
      summary: 'ppm 代表每 1 公斤（10⁶ 毫克）中所含溶質的毫克數，1000 ppm 即 1 公斤含 1000 毫克。'
    },
    {
      description: '一桶 2 公斤的礦泉水，鈣離子濃度標示為 15 ppm，請問整桶水含有多少毫克（mg）的鈣離子？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '30 毫克', zone: 'correct', explain: '15 ppm 代表每 1 公斤含 15 毫克，因此 2 公斤礦泉水共含 15 × 2 ＝ 30 毫克鈣離子。' },
        { text: '15 毫克', zone: 'wrong', explain: '15 毫克是 1 公斤礦泉水的含量，2 公斤礦泉水應有 30 毫克。' },
        { text: '7.5 毫克', zone: 'wrong', explain: '2 公斤應將 15 毫克乘以 2，得到 30 毫克。' },
        { text: '300 毫克', zone: 'wrong', explain: '15 × 2 ＝ 30 毫克，不是 300 毫克。' }
      ],
      summary: '15 ppm 代表每 1 公斤水含 15 毫克鈣離子，2 公斤水共含 15 × 2 ＝ 30 毫克。'
    },
    {
      description: '檢驗發現某飲料含某物質濃度為 4 ppm，請問一瓶 500 公克（0.5 公斤）的飲料中含有多少毫克（mg）該物質？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '2 毫克', zone: 'correct', explain: '4 ppm 代表每 1 公斤含 4 毫克，500 公克（0.5 公斤）飲料含有 4 × 0.5 ＝ 2 毫克。' },
        { text: '4 毫克', zone: 'wrong', explain: '4 毫克是 1 公斤（1000 公克）飲料的含量，500 公克只有一半，應為 2 毫克。' },
        { text: '8 毫克', zone: 'wrong', explain: '500 公克是 0.5 公斤，4 × 0.5 ＝ 2 毫克，不是 8 毫克。' },
        { text: '20 毫克', zone: 'wrong', explain: '4 × 0.5 ＝ 2 毫克，不是 20 毫克。' }
      ],
      summary: '4 ppm 代表每 1 公斤含 4 毫克，500 公克（0.5 公斤）含有 4 × 0.5 ＝ 2 毫克。'
    },
    {
      description: '衛生法規制定豬肉瘦肉精殘留容許量為 0.01 ppm，代表每 1 公斤豬肉所含殘留量不能超過多少毫克（mg）？（將正確數量放入「正確答案」，其餘放入「錯誤答案」）',
      items: [
        { text: '0.01 毫克', zone: 'correct', explain: '1 ppm 代表每 1 公斤含 1 毫克，因此 0.01 ppm 代表每 1 公斤豬肉不能超過 0.01 毫克。' },
        { text: '0.1 毫克', zone: 'wrong', explain: '0.01 ppm 對應每 1 公斤含 0.01 毫克，不是 0.1 毫克。' },
        { text: '1 毫克', zone: 'wrong', explain: '每 1 公斤含 1 毫克是 1 ppm，0.01 ppm 應為 0.01 毫克。' },
        { text: '10 毫克', zone: 'wrong', explain: '0.01 ppm 對應每 1 公斤含 0.01 毫克。' }
      ],
      summary: '0.01 ppm 代表每 1 公斤（1,000,000 毫克）中含有 0.01 毫克。'
    }
  ];

  var weightPair = makeQuizPair('重量百分率濃度心算（一）', '重量百分率濃度心算（二）', weightPool);
  var volPair = makeQuizPair('體積百分率濃度心算（一）', '體積百分率濃度心算（二）', volPool);
  var ppmPair = makeQuizPair('百萬分點 ppm 心算（一）', '百萬分點 ppm 心算（二）', ppmPool);

  QuizWorld.registerChapter({
    id: 'pc2',
    sections: [
      {
        id: 'pc2-1',
        title: '2·1 物質的性質與分類',
        levels: [
          {
            type: 'classification',
            title: '固態、液態還是氣態？',
            description: '比較物質在「固態」、「液態」與「氣態」三種狀態下的體積、形狀與可壓縮性。',
            zones: [
              { id: 'solid', title: '固態', icon: '🧊' },
              { id: 'liquid', title: '液態', icon: '💧' },
              { id: 'gas', title: '氣態', icon: '💨' }
            ],
            items: [
              { text: '體積固定，形狀不隨容器改變', zone: 'solid', explain: '固態物質具有固定的體積與固定的形狀，不會隨容器形狀而改變。' },
              { text: '冰塊與鐵塊在常溫下的狀態', zone: 'solid', explain: '冰塊與常溫下的鐵塊都具有固定體積與形狀，屬於固態。' },
              { text: '體積固定，形狀會隨容器改變', zone: 'liquid', explain: '液態物質的體積固定，但形狀會隨著盛裝的容器而改變。' },
              { text: '注射筒內裝紅墨水，體積不易壓縮', zone: 'liquid', explain: '按住裝有液體的注射筒出口推活塞，液體體積幾乎無法被壓縮。' },
              { text: '體積與形狀都會隨容器而改變', zone: 'gas', explain: '氣態物質沒有固定的體積與形狀，體積與形狀皆隨容器改變。' },
              { text: '注射筒內裝空氣，體積容易被壓縮', zone: 'gas', explain: '氣體具有可壓縮性，推壓密閉注射筒活塞可使空氣柱體積變小。' },
              { text: '總是會擴散並充滿整個密閉容器', zone: 'gas', explain: '氣態物質會充滿整個容器空間。' }
            ],
            summary: '固態「體積固定、形狀固定」；液態「體積固定、形狀不固定、不易壓縮」；氣態「體積與形狀皆不固定、容易被壓縮」。'
          },
          {
            type: 'classification',
            title: '物理變化還是化學變化？（一）',
            description: '依據變化過程中「是否產生新物質」，將下列基礎現象歸類為「物理變化」或「化學變化」。',
            zones: [
              { id: 'physical', title: '物理變化', icon: '✂️' },
              { id: 'chemical', title: '化學變化', icon: '🔥' }
            ],
            items: [
              { text: '本質不變，且沒有產生新物質', zone: 'physical', explain: '只有狀態、形狀或大小改變，物質本質不變且無新物質產生，稱為物理變化。' },
              { text: '冰熔化成水、水沸騰成水蒸氣', zone: 'physical', explain: '水的三態變化（熔化、凝固、汽化、凝結）都沒有產生新物質，屬於物理變化。' },
              { text: '將色紙剪成各種不同形狀', zone: 'physical', explain: '剪紙只改變紙張的形狀與大小，本質仍是紙，屬於物理變化。' },
              { text: '固態蠟受熱熔化成液態蠟', zone: 'physical', explain: '蠟燭的固態蠟熔化成液態蠟、再汽化成氣態蠟，都只是狀態改變，屬於物理變化。' },
              { text: '本質改變，且有新物質產生', zone: 'chemical', explain: '變化過程中物質本質改變並產生新物質，稱為化學變化。' },
              { text: '透明的蛋白加熱後變成白色固體', zone: 'chemical', explain: '煮熟食物（如蛋白變白凝固）產生了新物質，無法變回原本的生蛋白，屬於化學變化。' },
              { text: '銀白色的鐵製螺栓在空氣中生鏽', zone: 'chemical', explain: '褐色的鐵鏽與原本銀白色的鐵是不同物質，生鏽屬於化學變化。' },
              { text: '紙張或氣態蠟燃燒產生二氧化碳', zone: 'chemical', explain: '燃燒會產生二氧化碳、水蒸氣或灰燼等新物質，屬於化學變化。' }
            ],
            summary: '沒有產生新物質的變化（如三態變化、剪紙、固態蠟熔化）是「物理變化」；有產生新物質的變化（如燃燒、生鏽、煮熟食物）是「化學變化」。'
          },
          {
            type: 'classification',
            title: '物理變化還是化學變化？（二）',
            description: '進階挑戰！有些物理變化會發光、昇華或析出結晶，有些化學變化會伴隨發熱或通電反應。請仔細判斷下列現象屬於哪一種變化。',
            zones: [
              { id: 'physical', title: '物理變化', icon: '✂️' },
              { id: 'chemical', title: '化學變化', icon: '🔥' }
            ],
            items: [
              { text: '冬天呼出的水氣變白霧', zone: 'physical', explain: '呼出的水蒸氣遇冷凝結成微小水滴（白霧），只是狀態改變，屬於物理變化。' },
              { text: '食鹽或黑糖溶解在水中', zone: 'physical', explain: '溶解只是溶質粒子均勻分散到水中，沒有產生新物質，屬於物理變化。' },
              { text: '海水蒸發後留下粗鹽', zone: 'physical', explain: '水分蒸發使原本溶解在海水中的鹽分析出結晶，沒有產生新物質，屬於物理變化。' },
              { text: '樟腦慢慢昇華', zone: 'physical', explain: '固態樟腦直接變成氣態的昇華現象，屬於狀態改變的物理變化。' },
              { text: '高溫使金屬發亮', zone: 'physical', explain: '金屬受高溫而發光發亮（如鎢絲燈泡發光），冷卻後仍是原本的金屬，無新物質產生，屬於物理變化。' },
              { text: '水電解分解成氫氣、氧氣', zone: 'chemical', explain: '水通電分解產生氫氣與氧氣兩種新物質，本質改變，屬於化學變化。' },
              { text: '把黃銅電鍍到獎杯上', zone: 'chemical', explain: '電鍍過程利用電流產生化學反應使金屬析出，有新物質生成，屬於化學變化。' },
              { text: '生石灰加水發熱', zone: 'chemical', explain: '生石灰（氧化鈣）與水反應生成熟石灰（氫氧化鈣）並放出大量熱，屬於化學變化。' },
              { text: '酸與鹼混合後發熱', zone: 'chemical', explain: '酸與鹼混合發生酸鹼中和反應，生成鹽類與水並放熱，屬於化學變化。' },
              { text: '雙氧水分解產生氧氣與水', zone: 'chemical', explain: '過氧化氫分解產生氧氣與水，產生了新物質，屬於化學變化。' }
            ],
            summary: '凝結成白霧、溶解、蒸發結晶、昇華、高溫使金屬發亮皆無新物質產生，屬於「物理變化」；電解、電鍍、生石灰加水、酸鹼中和皆產生新物質，屬於「化學變化」。'
          },
          {
            type: 'classification',
            title: '純物質還是混合物？',
            description: '區分只由一種物質組成的「純物質」與由兩種以上純物質混合而成的「混合物」。',
            zones: [
              { id: 'pure', title: '純物質', icon: '💎' },
              { id: 'mixture', title: '混合物', icon: '🍹' }
            ],
            items: [
              { text: '只由單一種物質所組成', zone: 'pure', explain: '只由一種物質組成的稱為純物質。' },
              { text: '固定氣壓下有固定的熔點與沸點', zone: 'pure', explain: '純物質具有一定的特性，例如一大氣壓下純水的沸點固定為 100℃。' },
              { text: '純水（H₂O）與二氧化碳', zone: 'pure', explain: '純水與二氧化碳都各自只由單一種物質組成，屬於純物質。' },
              { text: '純銀、純鐵與氧氣', zone: 'pure', explain: '銀、鐵、氧氣都具有固定的物理與化學性質，屬於純物質。' },
              { text: '由兩種以上的純物質混合而成', zone: 'mixture', explain: '由兩種以上純物質以任意比例混合而成的稱為混合物。' },
              { text: '沸點等性質隨混合比例而改變', zone: 'mixture', explain: '例如食鹽水的沸點會隨食鹽與水的混合比例不同而改變，不固定為 100℃。' },
              { text: '生理食鹽水與新鮮柳橙汁', zone: 'mixture', explain: '食鹽水含食鹽與水，柳橙汁含水、糖分、維生素等多種物質，皆為混合物。' },
              { text: '空氣與棕色水性筆的顏料', zone: 'mixture', explain: '空氣含氮氣、氧氣、氬氣等；棕色水性筆顏料可經色層分析分出多種色素，皆為混合物。' }
            ],
            summary: '純物質由單一物質組成，具固定熔沸點（如純水、二氧化碳）；混合物由多種純物質混合，性質隨混合比例而改變（如食鹽水、空氣）。'
          },
          {
            type: 'order',
            title: '分離食鹽與沙子的實驗步驟',
            description: '想從「食鹽與沙子的混合物」中分離出沙子與食鹽晶體，請依正確先後順序排列實驗步驟。',
            items: [
              { text: '在食鹽與沙子混合物中加入蒸餾水並攪拌，使食鹽溶解', explain: '利用食鹽可溶於水、沙子不溶於水的溶解度差異。' },
              { text: '將混合液沿玻璃棒倒入漏斗濾紙過濾，沙子留在濾紙上', explain: '溶解過濾法利用顆粒大小不同，沙子顆粒大無法通過濾紙孔隙，食鹽水則能通過。' },
              { text: '將食鹽水濾液倒入蒸發皿中，蓋上漏斗或錶玻璃加熱', explain: '蒸發結晶法利用沸點高低不同，蓋上漏斗或錶玻璃可防止食鹽晶體跳出。' },
              { text: '待水分完全蒸乾後熄滅酒精燈，蒸發皿內留下食鹽晶體', explain: '水的沸點較低先蒸發逸散，沸點較高的食鹽留在蒸發皿中結晶。' }
            ],
            summary: '分離食鹽與沙子：先加水「溶解」，再用濾紙「過濾」出沙子（利用顆粒大小不同），最後加熱濾液「蒸發結晶」取得食鹽（利用沸點高低不同）。'
          }
        ]
      },
      {
        id: 'pc2-2',
        title: '2·2 水溶液與濃度',
        levels: [
          {
            type: 'classification',
            title: '溶質、溶劑與溶液',
            description: '溶液是由溶質溶解在溶劑中所形成。請將下列敘述與實例歸類到「溶質」、「溶劑」或「溶液」。',
            zones: [
              { id: 'solute', title: '溶質', icon: '🍬' },
              { id: 'solvent', title: '溶劑', icon: '💧' },
              { id: 'solution', title: '溶液', icon: '🥤' }
            ],
            items: [
              { text: '在溶液中被溶解的物質', zone: 'solute', explain: '被溶解的物質（通常量較少）稱為溶質。' },
              { text: '黑糖水溶液中的「黑糖」', zone: 'solute', explain: '黑糖溶於水中，黑糖是溶質，水是溶劑。' },
              { text: '汽水中所溶入的二氧化碳氣體', zone: 'solute', explain: '溶質不一定是固體，汽水中的二氧化碳氣體也是溶質。' },
              { text: '用來溶解其他物質的液體', zone: 'solvent', explain: '用來溶解溶質的物質（通常量較多）稱為溶劑。' },
              { text: '水溶液中的「水」', zone: 'solvent', explain: '只要是水溶液，不論水量多寡，一律以「水」為溶劑。' },
              { text: '用來溶解油性彩妝的「卸妝油」', zone: 'solvent', explain: '油性彩妝不溶於水但可溶於卸妝油，此時卸妝油為溶劑（非水溶液）。' },
              { text: '溶質與溶劑均勻混合後的整體', zone: 'solution', explain: '溶質藉擴散現象均勻分布在溶劑中，整體稱為溶液。' },
              { text: '質量等於溶質加溶劑的總質量', zone: 'solution', explain: '溶液的質量 ＝ 已溶解的溶質質量 ＋ 溶劑質量。' }
            ],
            summary: '溶液 ＝ 溶質（被溶解物）＋ 溶劑（溶解他物，水溶液必以水為溶劑）；溶質粒子由高濃度往低濃度運動而均勻分布稱為「擴散現象」。'
          },
          {
            type: 'classification',
            title: '未飽和溶液與飽和溶液',
            description: '定溫下定量溶劑所能溶解的最大溶質量稱為「溶解度」。請區分「未飽和溶液」與「飽和溶液」的特徵。',
            zones: [
              { id: 'unsaturated', title: '未飽和溶液', icon: '🟢' },
              { id: 'saturated', title: '飽和溶液', icon: '🔴' }
            ],
            items: [
              { text: '定溫下尚未達到最大溶解量', zone: 'unsaturated', explain: '溶質溶解量還沒達到該溫度下的溶解度上限，稱為未飽和溶液。' },
              { text: '再加入溶質攪拌後仍能繼續溶解', zone: 'unsaturated', explain: '未飽和溶液還可以繼續溶解更多的溶質。' },
              { text: '同溫下可再溶解更多溶質使變濃', zone: 'unsaturated', explain: '在未達飽和前，繼續加入溶質溶解會使溶液濃度變大。' },
              { text: '定溫下已溶解最大量的溶質', zone: 'saturated', explain: '已達到該溫度下的溶解度上限，無法再溶解更多溶質，稱為飽和溶液。' },
              { text: '攪拌後杯底仍有無法溶解的沉澱', zone: 'saturated', explain: '充分攪拌後仍有未溶解的溶質沉在杯底，代表上層溶液已達飽和狀態。' },
              { text: '定溫下再加溶質也不會改變濃度', zone: 'saturated', explain: '定溫下飽和溶液無法再溶解新加入的溶質，因此濃度維持不變。' }
            ],
            summary: '定溫下還能繼續溶解溶質的是「未飽和溶液」；已達最大溶解量（溶解度）、再加溶質也無法溶解的是「飽和溶液」。'
          },
          {
            type: 'classification',
            title: '常見的三種濃度表示法',
            description: '生活中常用「重量百分率濃度」、「體積百分率濃度」與「百萬分點（ppm）」來表示溶液濃度。請將下列敘述與商品標示歸類。',
            zones: [
              { id: 'weight_pct', title: '重量百分率濃度', icon: '⚖️' },
              { id: 'vol_pct', title: '體積百分率濃度', icon: '🍶' },
              { id: 'ppm', title: '百萬分點（ppm）', icon: '🔬' }
            ],
            items: [
              { text: '每100g溶液所含溶質的公克數', zone: 'weight_pct', explain: '重量百分率濃度（%）是指每 100 公克溶液中所含溶質的公克數。' },
              { text: '溶質質量除以溶液總質量的百分比', zone: 'weight_pct', explain: '公式為（溶質質量 ÷ 溶液質量）× 100%，分母是溶質＋溶劑的總質量。' },
              { text: '糖漿標示「糖分75%（w/w）」', zone: 'weight_pct', explain: 'w/w 代表重量百分率濃度，每 100 公克糖漿含 75 公克糖。' },
              { text: '每100mL溶液所含溶質毫升數', zone: 'vol_pct', explain: '體積百分率濃度（%）是指每 100 毫升溶液中所含溶質的毫升數。' },
              { text: '市售酒類常標示為幾「度」', zone: 'vol_pct', explain: '酒類標示的「度」代表酒精的體積百分率濃度。' },
              { text: '米酒標示酒精度為 19.5 度', zone: 'vol_pct', explain: '代表每 100 毫升米酒中含有 19.5 毫升純酒精。' },
              { text: '換算後，每1kg溶液含溶質毫克數', zone: 'ppm', explain: '1 公斤 ＝ 1,000,000 毫克，換算後每 1 公斤溶液中所含溶質的毫克數即為 ppm。' },
              { text: '表示極稀薄濃度（如牙膏含氟量）', zone: 'ppm', explain: 'ppm 是百萬分之一（10⁻⁶），常用於表示極稀薄溶液或食品微量殘留。' }
            ],
            summary: '重量百分率＝每 100 g 溶液含幾 g 溶質；體積百分率（酒類「度」）＝每 100 mL 溶液含幾 mL 溶質；百萬分點（ppm）＝每 1 kg 溶液含幾 mg 溶質。'
          }
        ]
      },
      {
        id: 'pc2-3',
        title: '2·3 濃度心算實戰',
        levels: [
          weightPair[0],
          weightPair[1],
          volPair[0],
          volPair[1],
          ppmPair[0],
          ppmPair[1]
        ]
      },
      {
        id: 'pc2-4',
        title: '2·4 空氣的成分',
        levels: [
          {
            type: 'order',
            title: '乾燥空氣的氣體含量由多到少',
            description: '乾燥空氣（不含水氣）是由多種氣體組成的混合物。請依體積所占比例由多到少排列下列氣體。',
            items: [
              { text: '氮氣（約占 78%）', explain: '氮氣是空氣中含量最多的氣體，約占乾燥空氣體積的 78%。' },
              { text: '氧氣（約占 21%）', explain: '氧氣是空氣中含量第二多的氣體，約占乾燥空氣體積的 21%。' },
              { text: '氬氣（約占 0.9%）', explain: '氬氣是空氣中含量第三多的氣體，約占 0.9%。' },
              { text: '二氧化碳（約占 0.04%）', explain: '二氧化碳含量約占 0.04%，其比例會隨時間與地點而微幅改變。' }
            ],
            summary: '乾燥空氣中氣體含量由多到少依序為：氮氣（約 78%）＞ 氧氣（約 21%）＞ 氬氣（約 0.9%）＞ 二氧化碳（約 0.04%）。'
          },
          {
            type: 'classification',
            title: '空氣中常見氣體的性質與用途',
            description: '請將下列氣體的性質與生活應用，歸類到對應的空氣組成氣體。',
            zones: [
              { id: 'n2', title: '氮氣', icon: '❄️' },
              { id: 'o2', title: '氧氣', icon: '🔥' },
              { id: 'ar', title: '氬氣', icon: '⚡' },
              { id: 'co2', title: '二氧化碳', icon: '🧯' }
            ],
            items: [
              { text: '空氣中含量最多的氣體', zone: 'n2', explain: '氮氣約占乾燥空氣體積的 78%，含量最多。' },
              { text: '填充食品包裝保鮮、液態作冷凍劑', zone: 'n2', explain: '氮氣在室溫下幾乎不反應，可填充於食品包裝防止變質；液態氮溫度極低可作冷凍劑。' },
              { text: '空氣中含量第二多的氣體', zone: 'o2', explain: '氧氣約占乾燥空氣體積的 21%，含量次多。' },
              { text: '具有助燃性，且能供生物呼吸', zone: 'o2', explain: '氧氣可供生物呼吸，且具有助燃性，能使燃燒更旺盛。' },
              { text: '空氣中含量第三多的氣體', zone: 'ar', explain: '氬氣約占乾燥空氣體積的 0.9%，是含量第三多的氣體。' },
              { text: '焊接金屬時用來隔絕氧氣反應', zone: 'ar', explain: '氬氣極不易發生反應，焊接金屬時噴出氬氣可隔絕金屬與氧氣反應。' },
              { text: '不可燃、不助燃且比空氣重可滅火', zone: 'co2', explain: '二氧化碳不可燃、不助燃且密度比空氣大，可覆蓋火源用來滅火。' },
              { text: '固態稱為乾冰，可用於舞台白霧', zone: 'co2', explain: '固態二氧化碳稱為乾冰，昇華吸熱使周圍水蒸氣凝結成小水滴（白色煙霧）。' }
            ],
            summary: '氮氣充食品保鮮、液態氮冷凍；氧氣供呼吸且具助燃性；氬氣用於焊接保護；二氧化碳可滅火，固態為乾冰。'
          },
          {
            type: 'classification',
            title: '氧氣與二氧化碳的製備及檢驗',
            description: '在實驗室中，常使用排水集氣法收集氧氣與二氧化碳。請區分兩者的製備藥品與檢驗性質。',
            zones: [
              { id: 'o2', title: '氧氣', icon: '🫧' },
              { id: 'co2', title: '二氧化碳', icon: '🪨' }
            ],
            items: [
              { text: '利用雙氧水加入二氧化錳製備', zone: 'o2', explain: '實驗室常利用雙氧水（過氧化氫水溶液）與二氧化錳來製備氧氣。' },
              { text: '二氧化錳可加速雙氧水分解產生', zone: 'o2', explain: '雙氧水在室溫下分解很慢，加入二氧化錳可加快分解產生氧氣與水。' },
              { text: '點燃的線香放入瓶中會劇烈燃燒', zone: 'o2', explain: '氧氣具有助燃性，能使點燃的線香比在空氣中燃燒得更劇烈。' },
              { text: '本身不可燃，但具有助燃性', zone: 'o2', explain: '氧氣本身不會燃燒（不可燃），但能幫助其他物質燃燒（助燃性）。' },
              { text: '利用大理岩加入稀鹽酸反應製備', zone: 'co2', explain: '實驗室常以大理岩（含碳酸鈣）與稀鹽酸反應來製備二氧化碳。' },
              { text: '通入澄清石灰水會產生白色沉澱', zone: 'co2', explain: '二氧化碳與澄清石灰水反應會產生白色沉澱物（碳酸鈣），是檢驗二氧化碳的方法。' }
            ],
            summary: '氧氣以「雙氧水＋二氧化錳」製備，具助燃性使線香劇烈燃燒；二氧化碳以「大理岩＋稀鹽酸」製備，能使澄清石灰水產生白色沉澱。'
          },
          {
            type: 'order',
            title: '雙氧水製備並收集氧氣的步驟',
            description: '請依正確先後順序排列實驗室以雙氧水與二氧化錳製備並用排水集氣法收集氧氣的步驟。',
            items: [
              { text: '吸濾瓶裝二氧化錳', explain: '先在吸濾瓶底部放入約 0.5 g 的二氧化錳。' },
              { text: '安裝薊頭漏斗', explain: '將薊頭漏斗穿過單孔橡皮塞並裝在吸濾瓶口，側管接上橡皮管。' },
              { text: '加水使薊頭漏斗長管沒入液面下', explain: '長管末端必須沒入液面下，避免產生的氧氣從薊頭漏斗上方逸出。' },
              { text: '滴入雙氧水', explain: '由薊頭漏斗上方緩慢滴入雙氧水，接觸二氧化錳後開始分解產生氧氣。' },
              { text: '待氣泡產生一段時間後移入裝滿水的廣口瓶收集', explain: '剛產生的氣泡含有原本瓶內的空氣，需等一段時間再開始收集較純的氧氣。' },
              { text: '集滿後在水中蓋緊玻璃片後取出瓶子', explain: '待水完全被排出後，在水中先用玻璃片蓋好瓶口再移出水面，防止氧氣逸散。' },
              { text: '廣口瓶蓋好玻璃片正放桌面備用', explain: '氧氣密度略大於空氣，將廣口瓶瓶口向上正放於桌面保存。' }
            ],
            summary: '製備氧氣時，薊頭漏斗長管須沒入液面下防止氣體逸出；剛產生的氣泡先不收集，集滿後在水中蓋好玻璃片再取出並正放於桌面。'
          }
        ]
      }
    ]
  });
})();
