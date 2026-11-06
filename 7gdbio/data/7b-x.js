// 七下跨科主題：人、植物與環境的共存關係
QuizWorld.registerChapter({
  id: '7b-x',
  sections: [
    // ==================== 第1節 ====================
    {
      id: '7b-x-1',
      title: '第1節 植物對水土保持的重要性',
      levels: [
        {
          title: '第 1 關：植物與水土保持',
          type: 'classification',
          description: '請將下列敘述，歸類到正確的類別！',
          zones: [
            { id: 'protect', title: '植物保持水土的方式', icon: '🌱' },
            { id: 'water', title: '植物消失後的水質變化', icon: '💧' },
            { id: 'disaster', title: '不當開發山坡地的災害', icon: '⛰️' }
          ],
          items: [
            { text: '植物的根能抓住土壤', zone: 'protect', explain: '植物的根能抓住土壤，減少水土流失' },
            { text: '葉片阻擋雨水直接沖刷地表', zone: 'protect', explain: '葉片能阻擋雨水直接沖刷地表，保護土壤' },
            { text: '植物覆蓋密度高，水土流失少', zone: 'protect', explain: '植物覆蓋密度、植物種類等植被情形，都會影響水土保持' },
            { text: '溪水礦物質濃度過高', zone: 'water', explain: '1970 年美國集水區砍光森林後，溪水礦物質過高、不宜飲用' },
            { text: '溪水變得更酸', zone: 'water', explain: '集水區植物消失後，溪水的酸鹼度變得更酸' },
            { text: '溪水變得更混濁', zone: 'water', explain: '缺乏植物覆蓋，土壤被沖刷，溪水變得更混濁' },
            { text: '發生山崩或土石流', zone: 'disaster', explain: '臺灣地形陡峭又多颱風、地震，破壞植被容易導致山崩或土石流' },
            { text: '水庫累積大量淤泥', zone: 'disaster', explain: '集水區改種檳榔、竹林、生薑等，土石崩塌流入水庫造成淤積' },
            { text: '水庫蓄水量大幅降低', zone: 'disaster', explain: '水庫累積大量淤泥，蓄水量因此大幅降低' }
          ],
          summary: '植物的根能抓住土壤、葉片能阻擋雨水沖刷；植被被破壞會讓水質變差（礦物質過高、變酸、變混濁），不當開發山坡地則容易造成山崩、土石流與水庫淤積。'
        },
        {
          title: '第 2 關：跨科實驗 1 的變因',
          type: 'classification',
          description: '「探討植物與水土保持的關係」實驗中，請將各項目分到正確的變因！',
          zones: [
            { id: 'manipulated', title: '操縱變因', icon: '🎛️' },
            { id: 'controlled', title: '控制變因', icon: '⚖️' },
            { id: 'responding', title: '應變變因', icon: '📊' }
          ],
          items: [
            { text: '植物的有無', zone: 'manipulated', explain: '實驗刻意改變的條件是「植物的有無」，所以是操縱變因' },
            { text: '土壤的量', zone: 'controlled', explain: '兩盆要填入相同重量的培養土，屬於控制變因' },
            { text: '澆水的量', zone: 'controlled', explain: '兩盆都加入 150 mL 水，屬於控制變因' },
            { text: '種植容器的規格', zone: 'controlled', explain: '兩盆都用三吋栽培盆，屬於控制變因' },
            { text: '溫度', zone: 'controlled', explain: '溫度屬於環境因子，兩組要相同，是控制變因' },
            { text: '陽光照射量', zone: 'controlled', explain: '陽光照射量屬於環境因子，兩組要相同，是控制變因' },
            { text: '水的流失量', zone: 'responding', explain: '實驗後測量燒杯中流出的水量，屬於應變變因' },
            { text: '土壤的流失量', zone: 'responding', explain: '觀察燒杯中水的混濁程度，可判斷土壤流失多寡，屬於應變變因' }
          ],
          summary: '只改變「植物的有無」（操縱變因），土壤量、澆水量、容器、溫度與陽光保持相同（控制變因），再比較水與土壤的流失量（應變變因）。'
        },
        {
          title: '第 3 關：跨科實驗 1 的操作步驟',
          type: 'order',
          description: '請依正確的先後順序，排出「探討植物與水土保持的關係」實驗步驟！',
          items: [
            { text: 'A、B 兩盆填入相同重量的培養土', explain: '步驟 1：準備兩盆相同重量的培養土' },
            { text: '在 A 盆種植物，B 盆不種', explain: '步驟 2：A 盆是種植物的實驗組' },
            { text: '兩組定時澆定量的水一週，讓植物生長穩定', explain: '步驟 3：先讓 A 組植物生長穩定' },
            { text: '兩組停止澆水 2 天，使土壤較乾燥', explain: '步驟 4：讓土壤恢復較乾燥的狀態' },
            { text: '將兩盆栽分別放在 250 mL 燒杯上', explain: '步驟 5：盆底懸空，收集流出的水' },
            { text: '緩慢均勻的在兩盆各加入 150 mL 水', explain: '步驟 6：以細流澆水模擬降雨' },
            { text: '記錄燒杯中的水量及水的混濁程度', explain: '步驟 7：比較兩組的水土流失情形' }
          ],
          summary: '先讓植物生長穩定，再停止澆水使土壤恢復乾燥，最後以等量的水模擬降雨，比較兩組流出的水量與混濁程度。'
        }
      ]
    },

    // ==================== 第2節 ====================
    {
      id: '7b-x-2',
      title: '第2節 植物調節環境的能力',
      levels: [
        {
          title: '第 1 關：植物調節環境的功能',
          type: 'classification',
          description: '請將植物的各種作用，歸類到正確的功能！',
          zones: [
            { id: 'air', title: '改善空氣品質', icon: '🌬️' },
            { id: 'warming', title: '減緩全球暖化', icon: '🌍' },
            { id: 'temp', title: '調節環境溫度', icon: '🌡️' },
            { id: 'health', title: '促進人體健康', icon: '💚' }
          ],
          items: [
            { text: '葉片沾附空氣中的懸浮微粒', zone: 'air', explain: '葉片沾附懸浮微粒，可降低空氣中懸浮微粒的濃度' },
            { text: '腎蕨可分解甲醛', zone: 'air', explain: '腎蕨能分解對人體有害的甲醛，改善空氣品質' },
            { text: '常春藤分解建材釋出的甲醛', zone: 'air', explain: '室內裝潢建材常釋出甲醛，常春藤可將它分解' },
            { text: '光合作用吸收二氧化碳', zone: 'warming', explain: '光合作用吸收二氧化碳，降低大氣中二氧化碳含量，可減緩全球暖化' },
            { text: '降低大氣中二氧化碳含量', zone: 'warming', explain: '二氧化碳增加會加劇全球暖化，植物能降低其含量' },
            { text: '蒸散作用帶走周圍的熱', zone: 'temp', explain: '水離開植物時會帶走熱，使周圍環境降溫' },
            { text: '葉片遮擋陽光直射地表', zone: 'temp', explain: '葉片遮擋陽光，所以樹蔭下通常比較涼快' },
            { text: '牆面屋頂種植物以隔熱', zone: 'temp', explain: '建築物覆蓋植物可隔熱、減少室內升溫，也更省電' },
            { text: '芬多精有助免疫與神經系統', zone: 'health', explain: '芬多精原本幫助植物抵抗黴菌、細菌寄生，也對人體免疫、神經系統有幫助' },
            { text: '多走進森林可促進健康', zone: 'health', explain: '森林中富含芬多精，多走進森林可以促進人體健康' }
          ],
          summary: '植物能沾附懸浮微粒、分解甲醛來改善空氣品質；以光合作用吸收二氧化碳減緩全球暖化；以蒸散作用與葉片遮陽調節溫度；森林中的芬多精還能促進人體健康。'
        },
        {
          title: '第 2 關：校園不同位置的氣溫',
          type: 'order',
          description: '晴天白天在校園測量氣溫，請依「最熱 → 最涼」排列！',
          items: [
            { text: '無植物的水泥地或柏油路面', explain: '最熱：沒有植物遮陽，也沒有蒸散作用降溫' },
            { text: '無遮陰的草地', explain: '次熱：草進行蒸散作用可帶走熱，但沒有遮陽' },
            { text: '茂密的樹蔭下', explain: '最涼：葉片遮擋陽光，加上蒸散作用帶走熱' }
          ],
          summary: '水泥地沒有植物最熱；草地有蒸散作用帶走熱；樹蔭下除了蒸散作用，還有葉片遮擋陽光，所以最涼爽。'
        },
        {
          title: '第 3 關：森林面臨的威脅與保育',
          type: 'classification',
          description: '請將下列敘述，歸類到正確的類別！',
          zones: [
            { id: 'cause', title: '森林減少的原因', icon: '🪓' },
            { id: 'problem', title: '森林減少造成的問題', icon: '⚠️' },
            { id: 'conserve', title: '保育與復育的做法', icon: '🌳' }
          ],
          items: [
            { text: '都市開發大量砍伐樹木', zone: 'cause', explain: '人類進行都市開發時，經常大量砍伐樹木' },
            { text: '經濟發展大量砍伐森林', zone: 'cause', explain: '為了經濟發展過度利用森林資源，使林地快速減少' },
            { text: '森林火災使地表裸露', zone: 'cause', explain: '臺灣每年有 50 起以上森林火災，火災後地表裸露、養分喪失' },
            { text: '加劇全球暖化', zone: 'problem', explain: '森林減少，吸收二氧化碳的植物變少，全球暖化加劇' },
            { text: '生物多樣性減少', zone: 'problem', explain: '森林消失使生物失去棲息地，生物多樣性減少' },
            { text: '水土流失的危機增加', zone: 'problem', explain: '地表失去植被，加上臺灣地勢陡峭，容易水土流失' },
            { text: '鋪設乾草以穩定坡面', zone: 'conserve', explain: '乾草可防止土壤被雨水沖刷，並保持地表潮溼，有助植被生長' },
            { text: '種植適應當地的原生樹種', zone: 'conserve', explain: '復育宜選原生或適合的樹種，不宜用快速生長的外來種' },
            { text: '散布原生植物的種子', zone: 'conserve', explain: '播種原生植物，提供野生動物食物與棲息地' },
            { text: '做好火災預防與監控', zone: 'conserve', explain: '以科學管理實施火災預防和監控，減少火災對樹木的威脅' }
          ],
          summary: '都市開發、經濟發展與森林火災使森林減少，造成全球暖化、生物多樣性減少與水土流失；保育與復育可穩定坡面、種植原生樹種、播種原生植物並做好火災預防。'
        }
      ]
    }
  ]
});
