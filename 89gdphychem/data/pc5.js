QuizWorld.registerChapter({
  id: 'pc5',
  sections: [
    {
      id: 'pc5-1',
      title: '5·1 溫度與溫度計',
      levels: [
        {
          type: 'classification',
          title: '常見溫度計的測量原理',
          description: '不同的溫度計會利用物質不同的物理性質隨溫度改變來測量溫度。請將下列溫度計與特性歸類到對應的原理。',
          zones: [
            { id: 'expansion', title: '熱脹冷縮原理', icon: '🌡️' },
            { id: 'lcd', title: '液晶變色原理', icon: '🎨' },
            { id: 'infrared', title: '紅外線感測原理', icon: '📡' }
          ],
          items: [
            { text: '實驗室常用的酒精、煤油溫度計', zone: 'expansion', explain: '液體溫度計利用液囊內酒精或煤油受熱體積膨脹、遇冷體積縮小的性質來測溫。' },
            { text: '錐形瓶加細玻璃管的自製溫度計', zone: 'expansion', explain: '自製簡易溫度計是利用瓶內水受熱膨脹使細管水位上升、遇冷縮小的原理。' },
            { text: '利用固體或氣體體積隨溫度改變', zone: 'expansion', explain: '除了液體外，氣溫計或金屬烹飪溫度計也是利用物質熱脹冷縮的特性。' },
            { text: '利用液晶顏色隨溫度變化的性質', zone: 'lcd', explain: '液晶溫度計內的液晶會隨溫度高低而顯現不同顏色。' },
            { text: '貼在額頭或魚缸上的變色溫度貼片', zone: 'lcd', explain: '薄片狀的溫度貼片是利用液晶隨溫度變色的原理製成。' },
            { text: '測量體溫的耳溫槍與額溫槍', zone: 'infrared', explain: '耳溫槍透過感測耳膜發出的紅外線來快速測量體溫。' },
            { text: '非接觸式的熱成像儀', zone: 'infrared', explain: '熱成像儀接收物體發出的紅外線並轉為彩色溫度分布影像。' },
            { text: '感測物體表面發出的紅外線強弱', zone: 'infrared', explain: '物體發出的紅外線會隨溫度而變，可藉此非接觸測量溫度。' }
          ],
          summary: '傳統液體、氣體與金屬溫度計利用「熱脹冷縮」；液晶溫度計利用「顏色變化」；耳溫槍與熱成像儀則利用「紅外線感測」。'
        },
        {
          type: 'classification',
          title: '攝氏溫標（℃）與華氏溫標（℉）',
          description: '比較生活中常用的「攝氏溫標（℃）」與「華氏溫標（℉）」在制定標準與使用地區上的差異。',
          zones: [
            { id: 'celsius', title: '攝氏溫標（℃）', icon: '🇹🇼' },
            { id: 'fahrenheit', title: '華氏溫標（℉）', icon: '🇺🇸' }
          ],
          items: [
            { text: '一大氣壓下水的冰點定為 0', zone: 'celsius', explain: '攝氏溫標將一大氣壓下水結冰的溫度（冰點）定為 0℃。' },
            { text: '一大氣壓下水的沸點定為 100', zone: 'celsius', explain: '攝氏溫標將一大氣壓下水沸騰的溫度（沸點）定為 100℃。' },
            { text: '冰點與沸點之間等分為 100 份', zone: 'celsius', explain: '0℃ 到 100℃ 之間分為 100 等份，每一等份為 1℃。' },
            { text: '臺灣日常生活中習慣使用的溫標', zone: 'celsius', explain: '臺灣氣象預報與日常生活皆習慣使用攝氏溫標（℃）。' },
            { text: '一大氣壓下水的冰點定為 32', zone: 'fahrenheit', explain: '華氏溫標將一大氣壓下水的冰點定為 32℉。' },
            { text: '一大氣壓下水的沸點定為 212', zone: 'fahrenheit', explain: '華氏溫標將一大氣壓下水的沸點定為 212℉。' },
            { text: '冰點與沸點之間等分為 180 份', zone: 'fahrenheit', explain: '32℉ 到 212℉ 之間分為 180 等份，每一等份為 1℉。' },
            { text: '美國等國家日常習慣使用的溫標', zone: 'fahrenheit', explain: '美國等少數國家在日常生活中習慣使用華氏溫標（℉）。' }
          ],
          summary: '常壓下水的冰點與沸點在攝氏溫標為「0℃ 與 100℃」（100 等份），在華氏溫標則為「32℉ 與 212℉」（180 等份）。'
        }
      ]
    },
    {
      id: 'pc5-2',
      title: '5·2 熱量與比熱',
      levels: [
        {
          type: 'classification',
          title: '熱能轉移與熱平衡',
          description: '當溫度不同的物體接觸時會發生熱轉移。請區分下列關於熱量與熱平衡的正確觀念與常見迷思。',
          zones: [
            { id: 'correct', title: '正確的熱平衡與熱量觀念', icon: '⭕' },
            { id: 'myth', title: '錯誤的迷思概念', icon: '❌' }
          ],
          items: [
            { text: '熱由溫度高的物體傳向溫度低的', zone: 'correct', explain: '自然狀態下，熱能轉移的方向是由「溫度高低」決定，由高溫物體傳向低溫物體。' },
            { text: '兩物體溫度相同不再改變稱熱平衡', zone: 'correct', explain: '當兩物體溫度達到一致且不再改變時，稱為熱平衡。' },
            { text: '溫度計是利用熱平衡原理測溫', zone: 'correct', explain: '溫度計與待測物達熱平衡時，讀數穩定即代表待測物平衡時的溫度。' },
            { text: '使1g水上升1℃約需1卡熱量', zone: 'correct', explain: '1 卡（cal）定義為使 1 公克的水溫度上升 1℃ 所需的熱量；1 千卡（大卡）＝ 1000 卡。' },
            { text: '熱必定由熱量多的物體傳向熱量少的', zone: 'myth', explain: '熱傳播方向只看「溫度高低」，不看所含熱量多寡！' },
            { text: '達熱平衡時兩物體所含熱量必相等', zone: 'myth', explain: '達熱平衡時是兩物體的「末溫相等」，而非所含熱量相等！' },
            { text: '溫度計測熱水時熱由溫度計傳向水', zone: 'myth', explain: '熱水溫度高於室溫溫度計，熱應由「熱水傳向溫度計」才對。' }
          ],
          summary: '熱能由「高溫物體傳向低溫物體」，直到兩者「溫度相同」達成熱平衡；使 1 公克水上升 1℃ 約需 1 卡（cal）熱量。'
        },
        {
          type: 'formula',
          title: '熱量與比熱公式',
          description: '將卡片拖入正確位置，完成物質吸收或放出的熱量（H）與質量（M）、比熱（S）、溫度變化（ΔT）的公式。',
          left: 'H',
          right: ['M', 'S', 'ΔT'],
          ops: ['×', '×'],
          ordered: false,
          distractors: ['V', 'D'],
          explain: '吸收或放出的熱量 H = 質量 M × 比熱 S × 溫度變化 ΔT。',
          summary: 'H = M × S × ΔT（熱量單位為卡 cal，質量為公克 g，比熱為 cal/(g·℃)，溫度變化為 ℃）。'
        },
        {
          type: 'classification',
          title: '比熱大小的比較與應用',
          description: '水的比熱為 1.0 cal/(g·℃)，比乾沙（約 0.2）與金屬（鐵約 0.107）大很多。請將下列特性與生活實例歸類。',
          zones: [
            { id: 'large_s', title: '比熱較大（如水、海水）', icon: '🌊' },
            { id: 'small_s', title: '比熱較小（如乾沙、金屬）', icon: '🏖️' }
          ],
          items: [
            { text: '同質量吸收等熱量時，溫度上升慢', zone: 'large_s', explain: '比熱大的物質「難熱難冷」，同質量吸收相同熱量時，溫度上升較少。' },
            { text: '同質量放出等熱量時，溫度下降慢', zone: 'large_s', explain: '比熱大的物質降溫慢，因此自助餐臺常在底盤放熱水幫菜肴保溫。' },
            { text: '白天海邊的「海水」比沙灘涼爽', zone: 'large_s', explain: '海水比熱大，白天陽光照射下溫度上升較慢，感覺較涼爽。' },
            { text: '汽車引擎利用水來冷卻降溫', zone: 'large_s', explain: '水比熱大，吸收大量熱量後溫度也不易急遽升高，適合做冷卻劑。' },
            { text: '海洋使沿海地區四季溫差較小', zone: 'large_s', explain: '海水比熱大，水溫不易大幅改變，能調節氣溫使沿海年溫差小於內陸。' },
            { text: '同質量吸收等熱量時，溫度上升快', zone: 'small_s', explain: '比熱小的物質「易熱易冷」，受熱時溫度上升很快。' },
            { text: '白天陽光下的「沙灘」比海水燙腳', zone: 'small_s', explain: '乾沙比熱小（約 0.2），白天受陽光照射升溫快而覺得燙腳。' },
            { text: '夜晚散熱降溫較快而比海水冰冷', zone: 'small_s', explain: '乾沙比熱小，到了夜晚放出熱量後溫度下降也很快，比海水冰冷。' }
          ],
          summary: '比熱大的物質（如水）「難冷難熱」，適合冷卻、保溫與調節氣溫；比熱小的物質（如乾沙、金屬）「易冷易熱」，受熱升溫快、散熱降溫也快。'
        }
      ]
    },
    {
      id: 'pc5-3',
      title: '5·3 熱對物質的影響',
      levels: [
        {
          type: 'classification',
          title: '純水在 0℃～100℃ 的體積與密度變化',
          description: '大多數物質受熱體積膨脹，但純水在 0℃～4℃ 之間有特別的變化。請將下列特徵歸類到對應的溫度範圍。',
          zones: [
            { id: 'zero_four', title: '0℃ 升溫至 4℃', icon: '❄️' },
            { id: 'at_four', title: '4℃ 時的狀態', icon: '💧' },
            { id: 'four_hundred', title: '4℃ 升溫至 100℃', icon: '🔥' }
          ],
          items: [
            { text: '溫度升高，體積反而縮小', zone: 'zero_four', explain: '純水在 0℃～4℃ 範圍內受熱時，溫度升高，體積反而縮小（熱縮冷脹）。' },
            { text: '溫度升高，密度逐漸變大', zone: 'zero_four', explain: '質量不變下，0℃ 升溫至 4℃ 時體積縮小，因此密度變大。' },
            { text: '純水的體積達到最小', zone: 'at_four', explain: '定量的純水在 4℃ 時體積最小。' },
            { text: '純水密度達到最大（1g/cm³）', zone: 'at_four', explain: '純水在 4℃ 時體積最小，因此密度最大（約 1.0000 g/cm³）。' },
            { text: '寒冬表面結冰時湖底維持此水溫', zone: 'at_four', explain: '4℃ 的水密度最大而沉在湖底，使水中生物能度過寒冬。' },
            { text: '溫度升高，體積膨脹變大', zone: 'four_hundred', explain: '純水在 4℃～100℃ 範圍內受熱時，溫度升高，體積會膨脹。' },
            { text: '溫度升高，密度逐漸變小', zone: 'four_hundred', explain: '4℃ 以上水溫升高時體積變大，因此密度變小。' }
          ],
          summary: '純水在 4℃ 時「體積最小、密度最大」；0℃→4℃ 升溫時體積縮小，4℃→100℃ 升溫時體積膨脹（不論從 4℃ 升溫或降溫，體積都會變大）。'
        },
        {
          type: 'classification',
          title: '物質三態變化是吸熱還是放熱？',
          description: '物質在固態、液態與氣態之間轉換時，必然伴隨吸熱或放熱。請將下列狀態變化與生活現象歸類。',
          zones: [
            { id: 'absorb', title: '吸熱過程', icon: '🔥' },
            { id: 'release', title: '放熱過程', icon: '❄️' }
          ],
          items: [
            { text: '熔化：固態冰變成液態水', zone: 'absorb', explain: '固體吸收熱量變成液體的過程稱為熔化。' },
            { text: '汽化：液態水蒸發或沸騰變水蒸氣', zone: 'absorb', explain: '液體變成氣體（包含蒸發與沸騰）需要吸收熱量。' },
            { text: '昇華：乾冰或固態碘直接變氣體', zone: 'absorb', explain: '固體直接變成氣體稱為昇華，過程需吸收熱量。' },
            { text: '手臂擦拭酒精後揮發覺得涼涼的', zone: 'absorb', explain: '酒精汽化（蒸發）時從皮膚吸收熱量，使皮膚溫度下降而感到涼爽。' },
            { text: '凝固：液態水結冰變成固態冰', zone: 'release', explain: '液體放出熱量變成固體的過程稱為凝固。' },
            { text: '凝結：水蒸氣遇冷變成小水滴', zone: 'release', explain: '氣體變成液體（如飲料罐外壁水滴、呼出白霧）稱為凝結，會放出熱量。' },
            { text: '凝華：水蒸氣在冷凍庫直接結成霜', zone: 'release', explain: '氣體直接變成固體稱為凝華，過程會放出熱量。' }
          ],
          summary: '熔化（固→液）、汽化（液→氣）、昇華（固→氣）為「吸熱」；凝固（液→固）、凝結（氣→液）、凝華（氣→固）為「放熱」。'
        },
        {
          type: 'classification',
          title: '加熱冰塊的溫度與狀態變化',
          description: '將 −20℃ 的冰塊持續加熱直到變成高於 100℃ 的水蒸氣，請判斷各階段的溫度是「隨加熱時間上升」還是「保持不變」。',
          zones: [
            { id: 'temp_up', title: '溫度隨加熱時間上升', icon: '📈' },
            { id: 'temp_const', title: '兩態共存、溫度不變', icon: '➖' }
          ],
          items: [
            { text: '低於 0℃、全部為固態冰的階段', zone: 'temp_up', explain: '尚未達熔點前，固態冰吸收熱量使溫度持續上升。' },
            { text: '0～100℃、全部為液態水的階段', zone: 'temp_up', explain: '冰完全熔化成水後，液態水吸熱使水溫由 0℃ 上升至 100℃。' },
            { text: '高於100℃、全為水蒸氣的階段', zone: 'temp_up', explain: '液態水完全汽化成水蒸氣後繼續加熱，水蒸氣溫度會上升形成過熱水蒸氣。' },
            { text: '0℃ 熔點時，冰與水共存的階段', zone: 'temp_const', explain: '純物質熔化過程中，吸收的熱量用來改變狀態，冰水共存時溫度維持在 0℃ 不變。' },
            { text: '100℃沸點時，水與水蒸氣共存', zone: 'temp_const', explain: '水沸騰汽化過程中，液態水與水蒸氣共存，溫度維持在 100℃ 不變。' },
            { text: '純物質正在發生狀態改變的期間', zone: 'temp_const', explain: '定壓下純物質在熔化、凝固、沸騰、凝結的兩態共存期間，溫度皆保持不變。' }
          ],
          summary: '加熱純物質時，單一狀態（固、液或氣）下溫度隨加熱上升；正在發生狀態改變（冰水共存 0℃、水與水蒸氣共存 100℃）時，雖持續吸熱但溫度保持不變。'
        },
        {
          type: 'classification',
          title: '硫酸銅與氯化亞鈷試紙檢驗水分',
          description: '實驗室常利用「硫酸銅」與「氯化亞鈷試紙」吸收或失去水分時的顏色變化來檢驗水。請將下列特徵歸類。',
          zones: [
            { id: 'hydrated', title: '含水狀態（加水放熱後）', icon: '💧' },
            { id: 'anhydrous', title: '無水狀態（加熱吸熱後）', icon: '🔥' }
          ],
          items: [
            { text: '藍色的硫酸銅晶體', zone: 'hydrated', explain: '含水的硫酸銅呈藍色。' },
            { text: '粉紅色的氯化亞鈷試紙', zone: 'hydrated', explain: '氯化亞鈷試紙吸收水分後會呈現粉紅色。' },
            { text: '接觸水蒸氣後放出熱量的狀態', zone: 'hydrated', explain: '無水硫酸銅或乾燥氯化亞鈷遇水結合時，屬於放熱的化學變化。' },
            { text: '白色的無水硫酸銅粉末', zone: 'anhydrous', explain: '藍色含水硫酸銅加熱吸熱失去水分後，會變成白色的無水硫酸銅粉末。' },
            { text: '藍色的乾燥氯化亞鈷試紙', zone: 'anhydrous', explain: '將粉紅色含水氯化亞鈷試紙加熱烘乾後，會變回藍色，才可用來檢驗水。' },
            { text: '加熱吸收熱量將水分蒸乾後的狀態', zone: 'anhydrous', explain: '加熱使結晶水脫離屬於吸熱的化學變化。' }
          ],
          summary: '硫酸銅「無水白色 ⇄ 含水藍色」；氯化亞鈷試紙「無水藍色 ⇄ 含水粉紅色」。由含水加熱變無水是「吸熱」，無水遇水變色則是「放熱」。'
        }
      ]
    },
    {
      id: 'pc5-4',
      title: '5·4 熱的傳播方式',
      levels: [
        {
          type: 'classification',
          title: '傳導、對流還是輻射？',
          description: '熱可以經由「傳導」、「對流」和「輻射」三種方式傳播。請將下列特性與生活實例歸類到對應的傳播方式。',
          zones: [
            { id: 'conduction', title: '傳導', icon: '🥄' },
            { id: 'convection', title: '對流', icon: '🌀' },
            { id: 'radiation', title: '輻射', icon: '☀️' }
          ],
          items: [
            { text: '透過物質間直接接觸傳播熱', zone: 'conduction', explain: '熱透過物質間直接接觸傳播的現象稱為傳導。' },
            { text: '固態物質最主要的傳熱方式', zone: 'conduction', explain: '固體粒子不會自由流動，主要靠接觸傳導傳熱。' },
            { text: '金屬鍋身導熱快、塑膠把手隔熱', zone: 'conduction', explain: '金屬是熱的良導體，塑膠、木頭與不流動空氣是熱的不良導體。' },
            { text: '經由液體或氣體的流動傳播熱', zone: 'convection', explain: '熱經由流體（液體或氣體）的循環流動而傳播稱為對流。' },
            { text: '受熱流體密度變小上升、冷流體下沉', zone: 'convection', explain: '底部的水或空氣受熱膨脹、密度變小而上升，上方冷流體密度較大而下沉。' },
            { text: '冷氣機裝上方、電暖器放地面', zone: 'convection', explain: '冷空氣下沉、熱空氣上升，藉對流使全室迅速降溫或升溫。' },
            { text: '不需要靠任何介質就能傳播熱', zone: 'radiation', explain: '傳導與對流都需要介質，只有輻射不需要介質即可傳播。' },
            { text: '太陽將熱能穿過太空傳到地球', zone: 'radiation', explain: '太空幾乎是真空沒有介質，太陽是靠輻射將熱傳到地球。' },
            { text: '深色表面比淺色表面更容易吸熱', zone: 'radiation', explain: '深色粗糙表面容易吸收或放出輻射熱；淺色光滑表面則不容易。' }
          ],
          summary: '傳導靠「直接接觸」（主要為固體，金屬導熱快）；對流靠「流體循環」（熱升冷降，液體與氣體）；輻射「不需介質」（深色易吸收或放出輻射熱）。'
        },
        {
          type: 'classification',
          title: '白天海風與夜晚陸風的成因',
          description: '由於陸地（乾沙）的比熱比海水小，日夜溫差造成空氣對流而形成「海風」與「陸風」。請將下列現象歸類。',
          zones: [
            { id: 'sea_breeze', title: '白天吹海風', icon: '🌞' },
            { id: 'land_breeze', title: '夜晚吹陸風', icon: '🌙' }
          ],
          items: [
            { text: '陸地受熱升溫快，溫度比海水高', zone: 'sea_breeze', explain: '白天陽光照射下，比熱小的陸地升溫比海水快。' },
            { text: '陸地上的熱空氣密度小而上升', zone: 'sea_breeze', explain: '白天陸地溫度較高，地面上的熱空氣受熱膨脹、密度變小而上升。' },
            { text: '海面冷空氣流向陸地形成風', zone: 'sea_breeze', explain: '白天海面較涼爽的空氣流向陸地補充，風從海面吹向陸地稱為海風。' },
            { text: '陸地散熱降溫快，海水比陸地溫暖', zone: 'land_breeze', explain: '夜晚無陽光時，比熱小的陸地降溫快，比熱大的海水降溫慢而較溫暖。' },
            { text: '海面上的熱空氣密度小而上升', zone: 'land_breeze', explain: '夜晚海水溫度高於陸地，海面上的溫暖空氣密度變小而上升。' },
            { text: '陸地冷空氣流向海面形成風', zone: 'land_breeze', explain: '夜晚陸地較冷的空氣流向海面補充，風從陸地吹向海面稱為陸風。' }
          ],
          summary: '白天陸地比海水熱，陸地熱空氣上升，冷空氣由海吹向陸地成「海風」；夜晚海水比陸地暖，海面熱空氣上升，冷空氣由陸地吹向海面成「陸風」。'
        },
        {
          type: 'classification',
          title: '保溫瓶構造與阻隔熱傳播原理',
          description: '保溫瓶透過巧妙的構造設計，同時阻斷傳導、對流與輻射三種熱傳播途徑。請將各構造的功能歸類。',
          zones: [
            { id: 'cap', title: '塑膠瓶蓋', icon: '🧴' },
            { id: 'vacuum', title: '真空夾層', icon: '🫙' },
            { id: 'mirror', title: '內壁光滑鏡面', icon: '🪞' }
          ],
          items: [
            { text: '利用不良導體減少瓶口熱傳導', zone: 'cap', explain: '塑膠或軟木塞是熱的不良導體，可減少熱由瓶口傳導散失。' },
            { text: '蓋緊瓶口防止瓶內外空氣對流', zone: 'cap', explain: '封住瓶口可阻止瓶內熱空氣上升逸出與外界冷空氣對流。' },
            { text: '夾層內抽走空氣，沒有傳熱介質', zone: 'vacuum', explain: '雙層瓶壁之間抽成真空，沒有固體或氣體介質。' },
            { text: '同時阻斷夾層間的熱傳導與對流', zone: 'vacuum', explain: '因為傳導與對流都必須靠介質，真空夾層可同時防止傳導與對流。' },
            { text: '採用淺色光滑亮面反射輻射熱', zone: 'mirror', explain: '淺色光滑鏡面不易吸收也不易放出輻射熱，能將輻射熱反射回瓶內。' },
            { text: '減少熱能以輻射的方式散失', zone: 'mirror', explain: '真空夾層無法阻擋不需介質的輻射，因此靠內壁光滑鏡面減少輻射散失。' }
          ],
          summary: '保溫瓶原理：塑膠瓶蓋「防對流與減少傳導」、真空夾層「無介質，防止傳導與對流」、內壁光滑鏡面「反射輻射熱，減少輻射散失」。'
        }
      ]
    }
  ]
});
