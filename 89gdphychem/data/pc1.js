QuizWorld.registerChapter({
  id: 'pc1',
  sections: [
    {
      id: 'pc1-1',
      title: '1·1 長度與體積的測量',
      levels: [
        {
          type: 'order',
          title: '長度單位由大到小排列',
          description: '國際單位制（SI）以「米（公尺）」為長度基本單位。請將下列常見的長度單位由大到小依序排列。',
          items: [
            { text: '千米（公里，km＝10³ m）', explain: 'kilo 代表千倍，1 公里 ＝ 1000 公尺。' },
            { text: '米（公尺，m，國際基本單位）', explain: '米（m）是國際單位制（SI）的長度基本單位。' },
            { text: '厘米（公分，cm＝10⁻² m）', explain: '1 公分是百分之一公尺（0.01 m）。' },
            { text: '毫米（mm＝10⁻³ m）', explain: 'milli 代表千分之一，1 毫米 ＝ 0.001 公尺 ＝ 0.1 公分。' },
            { text: '微米（µm＝10⁻⁶ m）', explain: '1 微米是百萬分之一公尺，細菌大小約數微米、頭髮直徑約 60 微米。' },
            { text: '奈米（nm＝10⁻⁹ m）', explain: '1 奈米是十億分之一公尺，IC 晶片的電子元件與原子尺度屬於奈米級。' }
          ],
          summary: '長度單位由大到小：千米（km，10³ m）＞ 米（m）＞ 厘米（cm，10⁻² m）＞ 毫米（mm，10⁻³ m）＞ 微米（µm，10⁻⁶ m）＞ 奈米（nm，10⁻⁹ m）。'
        },
        {
          type: 'classification',
          title: '測量結果的表示方法',
          description: '完整的測量結果包含「數值（準確數值＋估計數值）」與「單位」。以最小刻度 1 毫米的直尺測得鉛筆長「137.5 毫米」為例，請將下列敘述歸類。',
          zones: [
            { id: 'accurate', title: '準確數值', icon: '🎯' },
            { id: 'estimate', title: '估計數值', icon: '👁️' },
            { id: 'unit', title: '單位', icon: '📏' }
          ],
          items: [
            { text: '記錄到測量工具的最小刻度', zone: 'accurate', explain: '準確數值最後一位對應測量工具的最小刻度單位。' },
            { text: '最小刻度單位的整數倍部分', zone: 'accurate', explain: '可直接從刻度上讀出的整數倍部分稱為準確數值。' },
            { text: '「137.5 毫米」中的 137', zone: 'accurate', explain: '直尺最小刻度為 1 毫米，因此整數 137 毫米是準確數值。' },
            { text: '取到最小刻度單位的下一位', zone: 'estimate', explain: '不足一最小刻度的部分需目測估計，只取到最小刻度的下一位。' },
            { text: '因測量者不同而有差異的那一位', zone: 'estimate', explain: '每個人目測估計的數值可能略有不同，是造成測量誤差的原因之一。' },
            { text: '「137.5 毫米」中的 0.5', zone: 'estimate', explain: '小數點後這一位（0.5 毫米）是目測估計出來的估計數值。' },
            { text: '測量時選定的公認參考標準', zone: 'unit', explain: '測量需選定公認的參考量作為單位（如公尺、公分、毫米）。' },
            { text: '「137.5 毫米」中的毫米', zone: 'unit', explain: '「毫米（mm）」是這次測量所使用的長度單位。' }
          ],
          summary: '測量結果＝數值（準確數值＋1 位估計數值）＋單位；倒數第二位對應工具的「最小刻度」，最後一位則是「估計數值」。'
        },
        {
          type: 'classification',
          title: '體積的測量方法',
          description: '判斷下列物體或做法屬於「公式法」、「直接排水法」，還是「不適合直接排水法」（需特殊處理或改用他法）。',
          zones: [
            { id: 'formula', title: '公式法', icon: '📐' },
            { id: 'displace', title: '直接排水法', icon: '💧' },
            { id: 'not_direct', title: '不適合直接排水法', icon: '⚠️' }
          ],
          items: [
            { text: '形狀規則的長方體木塊', zone: 'formula', explain: '形狀規則的物體，可測量邊長後用數學公式計算體積。' },
            { text: '用長度、寬度與高度相乘計算', zone: 'formula', explain: '長方體體積 ＝ 長度 × 寬度 × 高度。' },
            { text: '不溶於水且沉底的不規則鐵塊', zone: 'displace', explain: '不溶於水且能完全沒入水中的不規則物體，可直接用排水法測體積。' },
            { text: '完全沉入量筒水面下的綠豆', zone: 'displace', explain: '綠豆沉在水面下且短時間不溶解，排開水的體積即為綠豆總體積。' },
            { text: '不溶於水且沉底的金屬小零件', zone: 'displace', explain: '金屬零件完全浸入水中，排開水的體積等於零件體積。' },
            { text: '放入水中會溶解的砂糖顆粒', zone: 'not_direct', explain: '砂糖會溶於水中，無法直接用水進行排水法測量體積。' },
            { text: '放入水中會浮在水面上的桌球', zone: 'not_direct', explain: '桌球會浮在水面上，無法自然完全沒入水中，需用細針壓入或綁重物才能測。' }
          ],
          summary: '規則物體用「公式法」；不規則、不溶於水且能完全沒入水中的物體用「排水法」（1 L ＝ 1000 mL ＝ 1000 cm³，1 mL ＝ 1 cm³）。'
        },
        {
          type: 'order',
          title: '排水法測量金屬塊體積的步驟',
          description: '想利用量筒與排水法測量未知金屬塊的體積，請依正確順序排列操作步驟。',
          items: [
            { text: '在量筒中倒入適量的水，平視讀取初始水位 V₁', explain: '水量須足以淹過金屬塊，且放入後不可超過量筒最大刻度。' },
            { text: '將量筒微傾，讓金屬塊沿筒壁緩緩滑入並完全沒入水中', explain: '避免直接丟入導致水花濺出或打破量筒底部。' },
            { text: '視線與液面中央處等高，讀取放入後的新水位 V₂', explain: '讀取量筒刻度時，視線必須與液面中央處等高。' },
            { text: '將兩次水位相減（V₂ − V₁），即為金屬塊的體積', explain: '完全沒入水中的物體，其體積等於所排開水的體積。' }
          ],
          summary: '排水法測體積：先讀初始水位 V₁，將量筒微傾讓待測物緩緩滑入並完全沒入水中，再讀新水位 V₂，待測物體積 ＝ V₂ − V₁。'
        }
      ]
    },
    {
      id: 'pc1-2',
      title: '1·2 質量與密度',
      levels: [
        {
          type: 'classification',
          title: '上皿天平與電子天平',
          description: '測量物體質量可使用上皿天平或電子天平。請將下列構造與操作特徵歸類到對應的天平。',
          zones: [
            { id: 'upper', title: '上皿天平', icon: '⚖️' },
            { id: 'electronic', title: '電子天平', icon: '🔢' }
          ],
          items: [
            { text: '旋轉兩側校準螺絲使指針歸零', zone: 'upper', explain: '上皿天平使用前需旋轉兩側的校準螺絲，使指針指在正中央刻度。' },
            { text: '待測物放左盤，砝碼放右盤', zone: 'upper', explain: '習慣上將待測物放左盤，砝碼放右盤（左物右碼）。' },
            { text: '以砝碼夾由大到小夾取砝碼', zone: 'upper', explain: '為避免砝碼生鏽改變質量，須用砝碼夾由大到小夾取砝碼。' },
            { text: '指針指中央或左右擺幅相等即平衡', zone: 'upper', explain: '當指針停在中央或左右擺動幅度相等時，待測物質量等於砝碼總質量。' },
            { text: '氣泡位於水平儀中心代表已放水平', zone: 'electronic', explain: '電子天平需放置在水平桌面上，氣泡位於水平儀中心代表已水平。' },
            { text: '先放秤量紙再按歸零鈕扣除質量', zone: 'electronic', explain: '秤量藥品時，先放秤量紙或容器再按歸零鈕，即可直接扣除其質量。' },
            { text: '由螢幕顯示數字直接讀出質量', zone: 'electronic', explain: '電子天平不需使用砝碼，螢幕顯示的數字即為待測物質量。' }
          ],
          summary: '上皿天平靠「校準螺絲」歸零、左物右碼並加總砝碼質量；電子天平先調水平、按「歸零鈕」扣重，由螢幕直接讀取質量。'
        },
        {
          type: 'order',
          title: '上皿天平測量質量的步驟',
          description: '請依正確順序排列使用「上皿天平」測量物體質量的操作步驟。',
          items: [
            { text: '旋轉兩側校準螺絲，使指針指在正中央刻度歸零', explain: '使用天平前必須先完成歸零。' },
            { text: '將待測物放置在天平的左盤中央', explain: '待測物放左盤；若為藥品應先放秤量紙再歸零。' },
            { text: '用砝碼夾由大到小逐步夾取砝碼放在右盤', explain: '不可用手直接拿砝碼，應以砝碼夾由大到小夾取。' },
            { text: '待指針停在中央或左右擺幅相等，加總砝碼總質量', explain: '天平達成平衡時，右盤砝碼的總質量即等於左盤待測物的質量。' }
          ],
          summary: '上皿天平操作順序：先轉校準螺絲歸零 → 待測物放左盤 → 砝碼夾由大到小放右盤 → 平衡時計算砝碼總質量。'
        },
        {
          type: 'formula',
          title: '密度公式',
          description: '將卡片拖入正確位置，完成物質的密度（D）與質量（M）、體積（V）的公式。',
          left: 'D',
          right: ['M', 'V'],
          ops: ['÷'],
          ordered: true,
          distractors: ['L', 't'],
          explain: '密度 D = 質量 M ÷ 體積 V，分子是質量、分母是體積，順序不可顛倒。',
          summary: '密度 D = M ÷ V，常用單位為 g/cm³（水在常溫常壓下密度約為 1.00 g/cm³）。'
        },
        {
          type: 'classification',
          title: '質量、體積與密度的關係',
          description: '根據密度公式（D = M ÷ V）與物質特性，判斷下列情況中物體的密度是「較大」、「較小」還是「保持不變」。',
          zones: [
            { id: 'larger_d', title: '密度較大', icon: '📈' },
            { id: 'smaller_d', title: '密度較小', icon: '📉' },
            { id: 'same_d', title: '密度不變', icon: '🟰' }
          ],
          items: [
            { text: '體積相同時，質量較大的物體', zone: 'larger_d', explain: '由 D＝M/V 可知，體積 V 相同時，質量 M 越大，密度 D 越大（如鋁塊密度大於同體積木塊）。' },
            { text: '質量相同時，體積較小的物體', zone: 'larger_d', explain: '質量 M 相同時，體積 V 越小，代表物質越緊密，密度 D 越大。' },
            { text: '水與酒精相比，其中的「水」', zone: 'larger_d', explain: '水的密度為 1.00 g/cm³，大於酒精的密度 0.79 g/cm³。' },
            { text: '體積相同時，質量較小的物體', zone: 'smaller_d', explain: '體積相同時，質量越小者，其密度越小。' },
            { text: '質量相同時，體積較大的物體', zone: 'smaller_d', explain: '質量相同時，體積越大者（如木塊體積大於同質量鋁塊），其密度越小。' },
            { text: '水與酒精相比，其中的「酒精」', zone: 'smaller_d', explain: '酒精密度 0.79 g/cm³ 小於水的 1.00 g/cm³，同體積下酒精質量較小。' },
            { text: '將同一塊純鐵塊切成大小兩半', zone: 'same_d', explain: '同種均勻純物質，無論切成多大或多小，質量與體積成正比，密度保持不變。' },
            { text: '純水體積變為原來的 3 倍時', zone: 'same_d', explain: '同種物質體積變為 3 倍時，質量也變為 3 倍，質量與體積的比值（密度）不變。' }
          ],
          summary: '同種物質的質量與體積成正比，密度固定不變；不同物質比較時，同體積下質量越大密度越大，同質量下體積越大密度越小。'
        }
      ]
    }
  ]
});
