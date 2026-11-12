QuizWorld.registerChapter({
  id: 'pc3',
  sections: [
    {
      id: 'pc3-1',
      title: '3·1 波的傳播',
      levels: [
        {
          type: 'classification',
          title: '橫波與縱波',
          description: '依介質振動方向與波前進方向的關係，區分下列特徵與實例屬於「橫波」還是「縱波」。',
          zones: [
            { id: 'transverse', title: '橫波', icon: '〰️' },
            { id: 'longitudinal', title: '縱波', icon: '📏' }
          ],
          items: [
            { text: '介質振動方向與波前進方向垂直', zone: 'transverse' },
            { text: '波形呈現高低起伏', zone: 'transverse' },
            { text: '具有波峰與波谷的波形構造', zone: 'transverse' },
            { text: '相鄰兩波峰或兩波谷間距離為波長', zone: 'transverse' },
            { text: '手左右擺動彈簧或繩子產生的波', zone: 'transverse' },
            { text: '介質振動方向與波前進方向平行', zone: 'longitudinal' },
            { text: '波形呈現縱向的疏密相間', zone: 'longitudinal' },
            { text: '具有密部與疏部的波形構造', zone: 'longitudinal' },
            { text: '相鄰兩密部或兩疏部中點間為波長', zone: 'longitudinal' },
            { text: '手前後推拉彈簧與空氣傳播的聲波', zone: 'longitudinal', explain: '前後推拉彈簧產生的彈簧波，以及在空氣中疏密相間傳播的聲波，皆屬於縱波。' }
          ],
          summary: '波只傳遞能量不傳遞介質；介質振動與波前進垂直為橫波（高低起伏），平行為縱波（疏密相間）。'
        },
        {
          type: 'classification',
          title: '週期與頻率',
          description: '比較波的「週期（T）」與「頻率（f）」的定義、計算方法、單位與實例。',
          zones: [
            { id: 'period', title: '週期（T）', icon: '⏱️' },
            { id: 'freq', title: '頻率（f）', icon: '🔄' }
          ],
          items: [
            { text: '產生一個全波所需要的時間', zone: 'period' },
            { text: '常用單位為秒（s）', zone: 'period' },
            { text: '計算方法為總時間除以振動次數', zone: 'period', explain: '週期是完成一次完整振動所需的時間，等於時間 ÷ 次數。' },
            { text: '描述每次心跳約需要1秒', zone: 'period', explain: '每次心跳所需的時間（1 秒／次），代表心跳的週期。' },
            { text: '介質每秒完整振動5次時為1/5秒', zone: 'period', explain: '每秒振動 5 次時，完整振動一次所需的時間為 1/5 秒。' },
            { text: '振源或介質在每秒內振動的次數', zone: 'freq' },
            { text: '常用單位為赫茲（Hz）或1/秒', zone: 'freq' },
            { text: '計算方法為振動次數除以總時間', zone: 'freq', explain: '頻率是每秒振動的次數，等於次數 ÷ 時間，與週期互為倒數。' },
            { text: '描述每分鐘心跳約60次', zone: 'freq', explain: '單位時間內心跳的次數（每分鐘 60 次＝每秒 1 次），代表心跳的頻率。' },
            { text: '介質每秒完整振動5次時為5赫', zone: 'freq' }
          ],
          summary: '週期（T）是產生一個全波的時間，頻率（f）是每秒振動的次數，兩者互為倒數（f = 1/T）。'
        },
        {
          type: 'formula',
          title: '波速公式',
          description: '將正確的物理量符號拖入空格，組出波速（v）、頻率（f）與波長（λ）的關係式。',
          left: 'v',
          right: ['f', 'λ'],
          ops: ['×'],
          ordered: false,
          distractors: ['T'],
          explain: '波前進一個波長（λ）需時一個週期（T），由於 f = 1/T，因此波速 v = λ ÷ T = f × λ（頻率乘以波長）。',
          summary: '波速 v = f × λ（頻率 × 波長），波速快慢由介質的種類與狀態決定。'
        }
      ]
    },
    {
      id: 'pc3-2',
      title: '3·2 聲音的產生與傳播',
      levels: [
        {
          type: 'classification',
          title: '聲音的產生與傳播特性',
          description: '判斷下列關於「聲音的產生」與「聲波傳播」的敘述，是正確觀念還是常見錯誤迷思。',
          zones: [
            { id: 'correct', title: '正確聲波觀念', icon: '✅' },
            { id: 'myth', title: '常見錯誤迷思', icon: '❌' }
          ],
          items: [
            { text: '要產生聲音物體必須發生振動', zone: 'correct' },
            { text: '振動的音叉放入水面會濺起水花', zone: 'correct' },
            { text: '用手握住音叉停止振動聲音就消失', zone: 'correct' },
            { text: '波以耳抽氣實驗證明聲波需靠介質', zone: 'correct', explain: '抽走容器內的空氣後幾乎聽不見鈴聲，證明聲波傳播需要介質，屬於力學波。' },
            { text: '氣溫越高時空氣中的聲速越快', zone: 'correct', explain: '空氣溫度每上升 1℃，聲速約增加 0.6 m/s，關係式為 v = 331 + 0.6T。' },
            { text: '耳朵貼桌面與水下麥克風可聽見聲', zone: 'correct', explain: '聲波不僅能在空氣中傳播，也能在固體桌面與液體海水中傳播。' },
            { text: '沒有空氣的外太空中聲音仍可傳播', zone: 'myth', explain: '外太空接近真空，沒有傳遞聲波的介質，因此聲音無法傳播。' },
            { text: '同溫下聲音在空氣比在固體傳得快', zone: 'myth', explain: '同溫下，聲波傳播速率為：固體＞液體＞氣體。' },
            { text: '水波與聲波會把介質一起傳到遠處', zone: 'myth', explain: '波在傳播時只傳遞能量使介質在原處附近振動，不會傳送介質本身。' }
          ],
          summary: '產生聲音需有物體振動與傳播介質；聲波是力學波也是縱波，無法在真空中傳播。'
        },
        {
          type: 'order',
          title: '不同介質與溫度的聲速排序',
          description: '請將聲波在下列不同介質與溫度下的傳播速率，依「由快到慢」排列。',
          items: [
            { text: '20℃ 的鋼鐵（固體，約 5200 公尺／秒）' },
            { text: '20℃ 的水（液體，約 1482 公尺／秒）', explain: '同溫下，聲波在液體中的傳播速率慢於固體，但快於氣體。' },
            { text: '20℃ 的空氣（氣體，約 343 公尺／秒）', explain: '同種氣體中，溫度較高（20℃）時的聲速比溫度較低（0℃）時快。' },
            { text: '0℃ 乾燥無風的空氣（氣體，約 331 公尺／秒）', explain: '氣體中聲速最慢，且溫度越低聲速越慢，0℃ 空氣中聲速約為 331 m/s。' }
          ],
          summary: '聲速大小：固體＞液體＞氣體；在空氣中溫度越高聲速越快（v = 331 + 0.6T）。'
        }
      ]
    },
    {
      id: 'pc3-3',
      title: '3·3 聲波的反射與超聲波',
      levels: [
        {
          type: 'classification',
          title: '反射聲波還是吸收聲波？',
          description: '請區分下列生活現象、器材與建築設計是利用「聲波的反射（回聲）」還是「聲波的吸收（消音）」。',
          zones: [
            { id: 'reflect', title: '聲波的反射（回聲）', icon: '📢' },
            { id: 'absorb', title: '聲波的吸收（消音）', icon: '🔇' }
          ],
          items: [
            { text: '聲波遇到光滑或堅硬的表面', zone: 'reflect' },
            { text: '在浴室唱歌比在空曠海邊更響亮', zone: 'reflect', explain: '浴室空間小，牆壁反射產生的回聲與原聲重疊，使聲音變得更響亮。' },
            { text: '傳聲筒利用筒壁集中傳播路徑', zone: 'reflect' },
            { text: '醫生用聽診器經細管內壁傳遞聲音', zone: 'reflect', explain: '聽診器利用聲波在細管內壁不斷反射，減少聲波能量散失。' },
            { text: '船艦用聲納探測海底深度與魚群', zone: 'reflect', explain: '聲納發射超聲波並接收海底反射回來的時間，利用「海底深度＝1/2×聲速×時間」計算深度。' },
            { text: '聲波遇到有孔隙或柔軟的表面', zone: 'absorb' },
            { text: '音樂廳牆壁裝設多孔隙的吸音板', zone: 'absorb', explain: '吸音板能吸收聲波，避免音樂廳空間大時回聲干擾原聲。' },
            { text: '音樂廳內懸掛厚重布幔與鋪設地毯', zone: 'absorb' }
          ],
          summary: '光滑堅硬表面易反射聲波（傳聲筒、聽診器、聲納）；多孔柔軟表面易吸收聲波（吸音板、布幔）。'
        },
        {
          type: 'classification',
          title: '人耳聽覺範圍與超聲波',
          description: '人耳可聽見的頻率範圍約為 20～20,000 赫，請判斷下列聲波屬於「人耳聽得見」還是「人耳聽不見」。',
          zones: [
            { id: 'audible', title: '人耳聽得見', icon: '👂' },
            { id: 'inaudible', title: '人耳聽不見', icon: '🦇' }
          ],
          items: [
            { text: '頻率介於20～20000赫的聲波', zone: 'audible' },
            { text: '蚊子飛行時翅膀快速振動的嗡嗡聲', zone: 'audible', explain: '蚊子拍翅頻率落在人耳聽覺範圍 20～20,000 Hz 內，因此聽得見。' },
            { text: '樂團調音常用的440赫標準音叉聲', zone: 'audible' },
            { text: '頻率高於20,000赫的超聲波', zone: 'inaudible', explain: '頻率高於 20,000 Hz 的超聲波超出人耳聽覺上限，但狗、貓、蝙蝠、海豚可聽見部分範圍。' },
            { text: '蝴蝶飛舞時翅膀緩慢振動的聲音', zone: 'inaudible', explain: '蝴蝶每秒拍翅次數太少，振動頻率太低（低於 20 Hz），因此人耳聽不見。' },
            { text: '醫生替孕婦做產前檢查用的超聲波', zone: 'inaudible', explain: '產前檢查使用的是頻率高於 20,000 Hz 的超聲波，人耳無法聽見。' },
            { text: '超聲波清洗機清洗細縫汙垢的聲波', zone: 'inaudible' },
            { text: '蝙蝠與海豚發出的高頻定位超聲波', zone: 'inaudible' }
          ],
          summary: '人耳聽覺頻率為 20～20,000 Hz；高於 20,000 Hz 稱為超聲波，與一般聲波在同一介質中聲速相同。'
        }
      ]
    },
    {
      id: 'pc3-4',
      title: '3·4 響度、音調與音色',
      levels: [
        {
          type: 'classification',
          title: '音調、響度與音色',
          description: '將下列決定因素、單位與生活實例，歸類到聲音的三要素「音調」、「響度」或「音色」。',
          zones: [
            { id: 'pitch', title: '音調（聲音高低）', icon: '🎵' },
            { id: 'loudness', title: '響度（聲音強弱）', icon: '📢' },
            { id: 'timbre', title: '音色（聲音特色）', icon: '🎻' }
          ],
          items: [
            { text: '由發聲體的振動頻率決定', zone: 'pitch' },
            { text: '常用單位為赫（Hz）', zone: 'pitch' },
            { text: '聽眾能聽出鋼琴聲的高音與低音', zone: 'pitch', explain: '鋼琴的高低音代表音調高低不同，主要是由振動頻率決定。' },
            { text: '由發聲體振動的振幅大小決定', zone: 'loudness' },
            { text: '利用分貝計以分貝（dB）表示', zone: 'loudness' },
            { text: '聽眾能聽出鼓聲敲擊的強與弱', zone: 'loudness', explain: '鼓聲的強弱代表響度大小不同，主要是由振動的振幅決定。' },
            { text: '長期處於70分貝以上會影響健康', zone: 'loudness', explain: '分貝（dB）是衡量聲音強度等級（響度相關）的單位，長期處在 70 分貝以上環境會危害健康。' },
            { text: '由發聲體獨特的聲音波形決定', zone: 'timbre' },
            { text: '聽眾能分辨長笛與小號的演奏聲', zone: 'timbre', explain: '不同樂器的發音波形不同，因此具有不同的音色。' },
            { text: '只聽聲音就能猜出是哪位同學說話', zone: 'timbre' }
          ],
          summary: '音調（高低）由頻率決定；響度（強弱）由振幅決定，以分貝表示；音色（特色）由波形決定。'
        },
        {
          type: 'classification',
          title: '樂器的音調高低變化',
          description: '改變吉他弦線、排笛空氣柱或桌緣直尺的條件時，判斷發出的聲音屬於「音調較高」還是「音調較低」。',
          zones: [
            { id: 'high', title: '音調較高（頻率高）', icon: '🔼' },
            { id: 'low', title: '音調較低（頻率低）', icon: '🔽' }
          ],
          items: [
            { text: '吉他弦線旋得越緊時撥彈的聲音', zone: 'high' },
            { text: '吉他弦線越細、越短時撥彈的聲音', zone: 'high', explain: '弦線越緊、越細、越短，振動頻率越高，發出的音調也越高。' },
            { text: '對著管子越短的排笛吹氣的聲音', zone: 'high', explain: '排笛管子越短，管內空氣柱越短，振動頻率越高，吹出的音調越高。' },
            { text: '桌緣直尺懸空長度越短時撥動的聲', zone: 'high', explain: '直尺懸空長度越短，振動越快（頻率越高），音調越高。' },
            { text: '吉他弦線放得越鬆時撥彈的聲音', zone: 'low' },
            { text: '吉他弦線越粗、越長時撥彈的聲音', zone: 'low', explain: '弦線越鬆、越粗、越長，振動頻率越低，發出的音調也越低。' },
            { text: '對著管子越長的排笛吹氣的聲音', zone: 'low', explain: '排笛管子越長，管內空氣柱越長，吹出的音調越低。' },
            { text: '桌緣直尺懸空長度越長時撥動的聲', zone: 'low', explain: '直尺懸空長度越長，振動越慢（頻率越低），音調越低。' }
          ],
          summary: '發聲體越緊、越細、越短（或空氣柱越短），振動頻率越高，音調也越高。'
        }
      ]
    }
  ]
});
