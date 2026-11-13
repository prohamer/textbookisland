QuizWorld.registerChapter({
  id: 'pc13',
  sections: [
    {
      id: 'pc13-1',
      title: '13·1 時間的測量',
      levels: [
        {
          type: 'classification',
          title: '影響單擺週期的因素',
          description: '在擺角小於 10° 的條件下，判斷下列操作是否會改變單擺來回擺動 1 次所需的時間（週期）。',
          zones: [
            { id: 'affect', title: '會影響單擺週期', icon: '⏳' },
            { id: 'no_affect', title: '不影響單擺週期', icon: '⚖️' }
          ],
          items: [
            { text: '將擺線的長度加長', zone: 'affect', explain: '擺長越長，單擺來回擺動一次所需的週期越長。' },
            { text: '將擺線的長度縮短', zone: 'affect', explain: '擺長越短，單擺擺動越快，週期越短。' },
            { text: '改變懸點到擺錘重心的距離', zone: 'affect', explain: '懸點到擺錘重心的距離就是「擺長」，改變擺長會改變週期。' },
            { text: '換成質量更大的擺錘', zone: 'no_affect', explain: '擺錘質量大小不會影響單擺的擺動週期。' },
            { text: '擺角由 5° 改為 8°', zone: 'no_affect', explain: '只要擺角小於 10°，擺角大小不影響單擺週期。' },
            { text: '測量擺動 15 次改為 20 次', zone: 'no_affect', explain: '擺動次數增加會使總時間變長，但除以次數後的「單次週期」不變。' }
          ],
          summary: '單擺具有等時性，在擺角小於 10° 時，週期只與「擺長」有關（擺長越長、週期越長），與擺錘質量和擺角無關。'
        },
        {
          type: 'order',
          title: '測量單擺週期的實驗步驟',
          description: '為了減少人為反應時間誤差，請依正確順序排列測量單擺週期的實驗步驟。',
          items: [
            { text: '將細線綁住擺錘掛在支架上，測量擺長' },
            { text: '將擺錘拉開小於 10° 的擺角，靜止放手', explain: '擺角需小於 10°，且放手時不可推擺錘。' },
            { text: '用碼錶測量單擺來回擺動 15 次的總時間', explain: '只測 1 次容易受按碼錶反應時間影響，測多次可減少誤差。' },
            { text: '將測得的總時間除以 15，算出單擺週期', explain: '週期＝總時間 ÷ 擺動次數。' }
          ],
          summary: '單擺來回擺動 1 次的時間稱為週期；實驗時通常測量擺動多次的總時間再求平均值，以減少測量誤差。'
        }
      ]
    },
    {
      id: 'pc13-2',
      title: '13·2 位移與路徑長',
      levels: [
        {
          type: 'classification',
          title: '位置的表示三要素',
          description: '要清楚描述一個物體的位置，需要包含基準點、方向和距離。請將下列敘述歸類到對應的要素。',
          zones: [
            { id: 'origin', title: '基準點（參考點）', icon: '📍' },
            { id: 'dir', title: '方向', icon: '🧭' },
            { id: 'dist', title: '距離', icon: '📏' }
          ],
          items: [
            { text: '以學校大門為準', zone: 'origin', explain: '被選為作為比較標準的固定位置稱為基準點。' },
            { text: '直角坐標系的原點 O', zone: 'origin', explain: '在數線或坐標系中，通常以原點 O 作為基準點。' },
            { text: '向東北方', zone: 'dir', explain: '用東、西、南、北等方位來表示相對於基準點的方向。' },
            { text: '數線坐標上的正負號', zone: 'dir', explain: '在直線坐標上，正號（+）與負號（−）用來表示相對於原點的方向。' },
            { text: '相距 300 公尺', zone: 'dist', explain: '表示物體與基準點之間相隔多遠。' },
            { text: '直線距離 2 公里', zone: 'dist', explain: '具有長度單位的數值，用來表示與基準點的遠近。' }
          ],
          summary: '描述物體位置的三要素為：基準點（參考點）、方向（在數線上以正負號表示）與距離。'
        },
        {
          type: 'classification',
          title: '位移還是路徑長？',
          description: '區分「位移」與「路徑長（路程）」的定義與特性。',
          zones: [
            { id: 'displacement', title: '位移', icon: '➡️' },
            { id: 'path', title: '路徑長（路程）', icon: '👣' }
          ],
          items: [
            { text: '起點到終點的位置變化量', zone: 'displacement', explain: '位移只看起點與終點的位置變化，與中間怎麼走無關。' },
            { text: '具有方向性', zone: 'displacement', explain: '位移包含大小與方向，方向由起點指向終點。' },
            { text: '繞操場一圈回起點時為 0', zone: 'displacement', explain: '起點與終點相同時，位置沒有變化，位移為 0。' },
            { text: '終點坐標減去起點坐標', zone: 'displacement', explain: '直線運動中，位移 Δx ＝ 終點坐標 x₂ − 起點坐標 x₁。' },
            { text: '實際移動軌跡的總長度', zone: 'path', explain: '凡走過必留下痕跡，實際走過的路線總長稱為路徑長。' },
            { text: '不具有方向性', zone: 'path', explain: '路徑長只有大小、沒有方向，只要有移動就會累加。' },
            { text: '走回原點時等於來回總距離', zone: 'path', explain: '折返回原點時，去程加回程的總長度即為路徑長。' },
            { text: '高速公路上的里程標誌', zone: 'path', explain: '里程標誌是沿著公路實際彎曲路線所測量的路徑長。' }
          ],
          summary: '位移是「起點到終點的直線位置變化」且具方向性；路徑長是「實際走過的軌跡總長」且無方向性。'
        }
      ]
    },
    {
      id: 'pc13-3',
      title: '13·3 速率與速度',
      levels: [
        {
          type: 'classification',
          title: '速率還是速度？',
          description: '比較「速率（平均速率）」與「速度（平均速度）」的定義、方向性與生活實例。',
          zones: [
            { id: 'speed', title: '速率（平均速率）', icon: '⏱️' },
            { id: 'velocity', title: '速度（平均速度）', icon: '🚄' }
          ],
          items: [
            { text: '路徑長除以所花時間', zone: 'speed', explain: '平均速率 ＝ 路徑長 ÷ 時間。' },
            { text: '只有快慢、不具方向性', zone: 'speed', explain: '速率只表示運動的快慢，不含方向。' },
            { text: '汽車時速錶顯示的數值', zone: 'speed', explain: '時速錶顯示的是該瞬間運動的快慢（瞬時速率），不含方向。' },
            { text: '位移除以所花時間', zone: 'velocity', explain: '平均速度 ＝ 位移 ÷ 時間。' },
            { text: '同時包含快慢與運動方向', zone: 'velocity', explain: '速度具有方向性，方向與位移的方向相同。' },
            { text: '繞跑道一圈回起點時為 0', zone: 'velocity', explain: '回到起點時總位移為 0，因此平均速度為 0；但平均速率不為 0。' }
          ],
          summary: '速率＝路徑長÷時間（無方向）；速度＝位移÷時間（有方向）。只有沿直線向同一方向不折返時，平均速度大小才會等於平均速率。'
        },
        {
          type: 'formula',
          title: '平均速度公式',
          description: '將卡片拖入正確位置，完成平均速度（v）與位移（Δx）、時間（Δt）的公式。',
          left: 'v',
          right: ['Δx', 'Δt'],
          ops: ['÷'],
          ordered: true,
          distractors: ['a', 'F'],
          explain: '平均速度 v = 位移 Δx ÷ 時間 Δt，分子是位移、分母是時間，順序不可顛倒。',
          summary: '平均速度 v = Δx ÷ Δt，常用單位為公尺/秒（m/s）或公里/小時（km/h）。'
        },
        {
          type: 'classification',
          title: '位置—時間圖（x-t 圖）與等速度運動',
          description: '根據位置—時間關係圖（x-t 圖）與運動特徵，區分物體是「靜止不動」還是作「等速度直線運動」。',
          zones: [
            { id: 'rest', title: '靜止不動', icon: '🛑' },
            { id: 'constant_v', title: '等速度直線運動', icon: '📏' }
          ],
          items: [
            { text: 'x-t 圖為水平直線', zone: 'rest', explain: 'x-t 圖為平行時間軸的水平直線，代表時間改變但位置不變，物體靜止。' },
            { text: '位置坐標隨時間保持不變', zone: 'rest', explain: '位置沒有變化，位移為 0，代表靜止不動。' },
            { text: '速度大小始終為 0', zone: 'rest', explain: '靜止的物體沒有移動，速度為 0。' },
            { text: 'x-t 圖為斜直線', zone: 'constant_v', explain: '等速度運動在單位時間內的位移固定，x-t 圖呈現斜直線，且越陡代表速度越快。' },
            { text: '快慢與運動方向皆保持不變', zone: 'constant_v', explain: '速度大小（快慢）與運動方向都保持不變的運動稱為等速度運動。' },
            { text: '每經過 1 秒的位移都相同', zone: 'constant_v', explain: '相同時間間隔內有相同的位移，即為等速度運動。' },
            { text: '沿直線向同一方向不折返', zone: 'constant_v', explain: '等速度運動方向不變，必定沿直線單向運動而不折返。' }
          ],
          summary: '在位置—時間圖（x-t 圖）中，水平直線代表「靜止」，斜直線代表「等速度運動」，且斜直線越陡代表速度越快。'
        }
      ]
    },
    {
      id: 'pc13-4',
      title: '13·4 加速度運動',
      levels: [
        {
          type: 'formula',
          title: '平均加速度公式',
          description: '將卡片拖入正確位置，完成平均加速度（a）與速度變化量（Δv）、時間（Δt）的公式。',
          left: 'a',
          right: ['Δv', 'Δt'],
          ops: ['÷'],
          ordered: true,
          distractors: ['Δx', 'm'],
          explain: '平均加速度 a = 速度變化量 Δv ÷ 時間 Δt，分子是速度變化量、分母是時間，順序不可顛倒。',
          summary: '平均加速度 a = Δv ÷ Δt，常用單位為公尺/秒²（m/s²）。'
        },
        {
          type: 'classification',
          title: '變快還是變慢？',
          description: '根據速度與加速度的方向關係、打點計時器紙帶點距變化與生活情境，判斷物體運動速率是變快還是變慢。',
          zones: [
            { id: 'faster', title: '運動速率變快（加速）', icon: '🚀' },
            { id: 'slower', title: '運動速率變慢（減速）', icon: '🛑' }
          ],
          items: [
            { text: '速度與加速度方向相同', zone: 'faster', explain: '當加速度方向與速度方向相同時，物體會越動越快。' },
            { text: '速度與加速度同為正值', zone: 'faster', explain: '兩者同號代表方向相同，運動速率變快。' },
            { text: '打點計時器點距越來越大', zone: 'faster', explain: '相鄰兩點時間間隔相同，點距變大代表相同時間內移動距離變長，速率變快。' },
            { text: '石頭由高處自由落下', zone: 'faster', explain: '自由落體速度向下、重力加速度也向下，兩者同向使速率越來越快。' },
            { text: '速度與加速度方向相反', zone: 'slower', explain: '當加速度方向與速度方向相反時，物體會越動越慢。' },
            { text: '速度為正值、加速度為負值', zone: 'slower', explain: '一正一負代表速度與加速度方向相反，運動速率變慢。' },
            { text: '打點計時器點距越來越小', zone: 'slower', explain: '相同時間間隔內移動的距離變短，代表運動速率變慢。' },
            { text: '行駛中的捷運行將進站煞車', zone: 'slower', explain: '煞車時速率減小，加速度方向與前進方向相反。' }
          ],
          summary: '速度與加速度「同向」時速率變快（點距變大）；速度與加速度「反向」時速率變慢（點距變小）。'
        },
        {
          type: 'classification',
          title: '速度—時間圖（v-t 圖）判讀',
          description: '在速度—時間關係圖（v-t 圖）中，圖線與時間軸圍成的面積代表位移。請將下列特徵歸類到對應的運動狀態。',
          zones: [
            { id: 'rest', title: '靜止', icon: '⏸️' },
            { id: 'const_v', title: '等速度運動', icon: '➡️' },
            { id: 'const_a', title: '等加速度運動', icon: '📈' }
          ],
          items: [
            { text: '圖線與時間軸重合（v = 0）', zone: 'rest', explain: '在 v-t 圖中，只有速度 v = 0（與時間軸重合）才代表靜止，一般的水平直線代表等速度運動！' },
            { text: '速度始終為 0、位移為 0', zone: 'rest', explain: '速度為 0 表示物體沒有移動，處於靜止狀態。' },
            { text: 'v-t 圖為非零的水平直線', zone: 'const_v', explain: 'v-t 圖為水平直線代表速度隨時間保持不變，屬於等速度運動。' },
            { text: '速度保持一定、加速度為 0', zone: 'const_v', explain: '速度沒有變化（Δv = 0），因此加速度為 0。' },
            { text: 'v-t 圖為傾斜的直線', zone: 'const_a', explain: 'v-t 圖為斜直線代表單位時間內的速度變化量固定，屬於等加速度運動。' },
            { text: '每秒的速度變化量固定不變', zone: 'const_a', explain: '加速度保持固定不變的運動稱為等加速度運動。' },
            { text: '自由落體的 v-t 關係圖線', zone: 'const_a', explain: '自由落體每秒速度增加 9.8 m/s，其 v-t 圖為通過原點的斜直線，屬於等加速度運動。' }
          ],
          summary: '在 v-t 圖中，非零水平直線代表「等速度運動」，斜直線代表「等加速度運動」，圖線與時間軸圍成的面積等於「位移」。'
        },
        {
          type: 'classification',
          title: '自由落體運動的性質',
          description: '物體只受重力作用、由靜止落下的運動稱為自由落體。請區分下列關於自由落體的正確觀念與常見迷思。',
          zones: [
            { id: 'correct', title: '正確的自由落體觀念', icon: '⭕' },
            { id: 'myth', title: '錯誤的迷思概念', icon: '❌' }
          ],
          items: [
            { text: '屬於等加速度直線運動', zone: 'correct', explain: '自由落體受固定重力加速度作用，屬於初速為 0 的等加速度直線運動。' },
            { text: '每秒速度增加約 9.8 m/s', zone: 'correct', explain: '地表附近的重力加速度 g 約為 9.8 m/s²，代表每秒速度增加約 9.8 m/s。' },
            { text: '真空中羽毛與銅幣同時著地', zone: 'correct', explain: '在無空氣阻力的真空中，任何物體由同高同時自由落下，重力加速度皆相同，會同時著地。' },
            { text: '重力加速度方向垂直向下', zone: 'correct', explain: '地球引力指向地心，因此重力加速度的方向垂直向下。' },
            { text: '越重的物體重力加速度越大', zone: 'myth', explain: '在地表附近，不論物體輕重，重力加速度 g 都相同（約 9.8 m/s²）。' },
            { text: '屬於等速度直線運動', zone: 'myth', explain: '自由落體在落下過程中速率越來越快，是等加速度運動而非等速度運動。' },
            { text: '真空中鐵球比羽毛更快著地', zone: 'myth', explain: '平常羽毛落得慢是因為空氣阻力；在真空中沒有空氣阻力，鐵球與羽毛會同時著地。' }
          ],
          summary: '自由落體是初速為 0、加速度為 g（約 9.8 m/s² 向下）的等加速度運動；在真空中，不同輕重的物體由同高同時釋放會同時著地。'
        }
      ]
    }
  ]
});
