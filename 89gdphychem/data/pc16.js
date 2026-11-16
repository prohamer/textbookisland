QuizWorld.registerChapter({
  id: 'pc16',
  sections: [
    {
      id: 'pc16-1',
      title: '16·1 靜電現象',
      levels: [
        {
          type: 'classification',
          title: '導體還是絕緣體？',
          description: '依電荷在物質內部是否容易自由移動，將下列特性與常見物質歸類為「電的導體」或「絕緣體」。',
          zones: [
            { id: 'conductor', title: '電的導體', icon: '⚡' },
            { id: 'insulator', title: '絕緣體', icon: '🛡️' }
          ],
          items: [
            { text: '內部含有可自由移動的電荷', zone: 'conductor', explain: '導體內有自由電子或離子可自由移動，通電時容易導電。' },
            { text: '金、銀、銅等金屬', zone: 'conductor', explain: '金屬含有大量自由電子，是電的良導體。' },
            { text: '石墨（鉛筆芯主要成分）', zone: 'conductor', explain: '石墨是唯一可導電的非金屬元素固體。' },
            { text: '電解質水溶液', zone: 'conductor', explain: '電解質水溶液中含有可自由移動的正、負離子，能夠導電。' },
            { text: '內部電荷不易自由移動', zone: 'insulator', explain: '絕緣體內的電子被原子束縛住，不易自由移動。' },
            { text: '玻璃棒與塑膠尺', zone: 'insulator', explain: '玻璃與塑膠都不容易導電，屬於絕緣體。' },
            { text: '琥珀與乾燥毛皮', zone: 'insulator', explain: '琥珀與毛皮都是絕緣體，摩擦後產生的電荷會停留在原處。' },
            { text: '橡膠手套與尼龍繩', zone: 'insulator', explain: '橡膠與尼龍不易導電，常用來作為絕緣材料。' }
          ],
          summary: '電荷能在內部自由移動、容易導電的物質稱為「導體」（如金屬、石墨）；電荷不易移動、不易導電的稱為「絕緣體」（如玻璃、塑膠、琥珀）。'
        },
        {
          type: 'classification',
          title: '摩擦、感應與接觸起電',
          description: '比較「摩擦起電」、「感應起電」與「接觸起電」三種使物體帶電的方式與結果。',
          zones: [
            { id: 'friction', title: '摩擦起電', icon: '🧣' },
            { id: 'induction', title: '感應起電', icon: '🧲' },
            { id: 'contact', title: '接觸起電', icon: '👉' }
          ],
          items: [
            { text: '適用於兩個不同的絕緣體', zone: 'friction', explain: '絕緣體經摩擦後，電子轉移並留在表面，形成摩擦起電。' },
            { text: '絲絹摩擦玻璃棒使其帶正電', zone: 'friction', explain: '玻璃棒失去電子帶正電，絲絹得到電子帶負電。' },
            { text: '毛皮摩擦琥珀棒使其帶負電', zone: 'friction', explain: '琥珀棒得到電子帶負電，毛皮失去電子帶正電。' },
            { text: '不接觸且配合接地使導體帶電', zone: 'induction', explain: '利用靜電感應並透過接地中和一端電荷，不需接觸帶電體即可使導體帶電。' },
            { text: '完成後導體與帶電體帶異性電', zone: 'induction', explain: '感應起電完成後，金屬球所帶電性與原帶電體相反。' },
            { text: '帶電導體直接碰觸不帶電導體', zone: 'contact', explain: '帶電導體直接接觸另一導體，使自由電子直接轉移。' },
            { text: '完成後兩導體帶同性電荷', zone: 'contact', explain: '接觸起電後，被接觸的導體會帶與原帶電導體相同的電性。' }
          ],
          summary: '摩擦起電使兩物體帶等量異性電；感應起電使導體帶異性電；接觸起電則使導體帶同性電。'
        },
        {
          type: 'classification',
          title: '靜電感應的電荷分布',
          description: '當帶電體靠近（但不接觸）電中性的金屬球時，金屬球會發生「靜電感應」。請將下列現象歸類到對應部位或狀態。',
          zones: [
            { id: 'near', title: '靠近帶電體端（近端）', icon: '🧲' },
            { id: 'far', title: '遠離帶電體端（遠端）', icon: '↔️' },
            { id: 'whole', title: '整個金屬球的狀態', icon: '⚪' }
          ],
          items: [
            { text: '感應出與帶電體相反的電性', zone: 'near', explain: '異性電荷相吸，近端會感應出與帶電體相反的電性。' },
            { text: '帶負電棒靠近時，此端帶正電', zone: 'near', explain: '帶負電棒將電子排斥到遠端，近端因電子減少而帶正電。' },
            { text: '帶正電棒靠近時，電子移向此端', zone: 'near', explain: '導體內能移動的是帶負電的電子，受正電棒吸引而聚集在近端。' },
            { text: '感應出與帶電體相同的電性', zone: 'far', explain: '同性電荷相斥，遠端會感應出與帶電體相同的電性。' },
            { text: '帶負電棒靠近時，電子被排斥至此', zone: 'far', explain: '金屬球內的自由電子受負電棒排斥，移動到遠端使遠端帶負電。' },
            { text: '帶正電棒靠近時，此端帶正電', zone: 'far', explain: '電子被吸引到近端後，遠端因缺乏電子而帶正電。' },
            { text: '正負電荷分離，總電量仍電中性', zone: 'whole', explain: '靜電感應只是金屬球內部電子重新分布，兩端正負電量相等，總電量仍為零。' },
            { text: '移走帶電體後恢復電中性', zone: 'whole', explain: '若未接地或接觸，一旦移走帶電體，正負電荷會重新混合恢復電中性。' }
          ],
          summary: '靜電感應時，導體內只有帶負電的「電子」能移動，使近端帶異性電、遠端帶同性電；移走帶電體後即恢復電中性。'
        },
        {
          type: 'order',
          title: '感應起電的步驟',
          description: '想利用「感應起電」使絕緣線懸吊的金屬球帶電，請依正確先後順序排列操作步驟。',
          items: [
            { text: '將帶電體靠近不帶電金屬球左端，使正負電荷分離', explain: '先產生靜電感應，使近端帶異性電、遠端帶同性電。' },
            { text: '用手指輕觸金屬球右端接地，使右端電荷中和', explain: '帶電體維持靠近時接地，讓電子經人體流入或流出地球。' },
            { text: '移走接地（手指），使金屬球正負電荷數量不同', explain: '必須在移走帶電體之前「先移開手指斷開接地」，否則電荷又會流回！' },
            { text: '最後移走帶電體，電荷均勻分布在金屬球表面', explain: '移走帶電體後，留下的異性電荷因同性相斥而均勻分布於金屬球表面。' }
          ],
          summary: '感應起電口訣：「靠近感應 → 接地中和 → 先斷接地 → 後移帶電體」，最後導體會帶與原帶電體相反的異性電。'
        }
      ]
    },
    {
      id: 'pc16-2',
      title: '16·2 電流',
      levels: [
        {
          type: 'classification',
          title: '電流方向還是電子流方向？',
          description: '比較封閉電路中「電流（I）」與「電子流（自由電子）」的方向與物理意義。',
          zones: [
            { id: 'current', title: '電流（I）', icon: '➕' },
            { id: 'electron', title: '電子流（自由電子）', icon: '➖' }
          ],
          items: [
            { text: '由電池正極經導線流向負極', zone: 'current', explain: '外部電路中，電流是由電池正極經導線流向負極。' },
            { text: '規定為正電荷流動的方向', zone: 'current', explain: '早期科學家規定正電荷流動的方向為電流方向，並沿用至今。' },
            { text: '與自由電子移動方向相反', zone: 'current', explain: '電流方向與導線內自由電子實際移動的方向正好相反。' },
            { text: '由電池負極經導線流向正極', zone: 'electron', explain: '自由電子帶負電，受電池驅動會由負極經外部導線流向正極。' },
            { text: '金屬導線中實際移動的粒子', zone: 'electron', explain: '金屬導體內帶正電的原子核不會移動，真正移動的是自由電子。' },
            { text: '帶有負電且不被原子束縛', zone: 'electron', explain: '導體內不被原子核束縛而能自由移動的負電荷稱為自由電子。' }
          ],
          summary: '外部導線中，電流方向為「正極 → 負極」（正電荷假想方向），而實際移動的自由電子方向為「負極 → 正極」，兩者方向相反。'
        },
        {
          type: 'formula',
          title: '電流與電量公式',
          description: '將卡片拖入正確位置，完成電流大小（I）與通過導線截面的電量（Q）、經過時間（t）的公式。',
          left: 'I',
          right: ['Q', 't'],
          ops: ['÷'],
          ordered: true,
          distractors: ['V', 'R'],
          explain: '電流 I = 通過導線截面的電量 Q ÷ 經過時間 t，分子是電量（庫侖）、分母是時間（秒），順序不可顛倒。',
          summary: '電流 I = Q ÷ t，1 安培（A）代表每秒通過導線截面 1 庫侖（C）的電量（1 A = 1 C/s）。'
        },
        {
          type: 'classification',
          title: '電器串聯與並聯的電流關係',
          description: '比較將兩個燈泡「串聯」或「並聯」時，電路結構、開路影響與電流大小的關係。',
          zones: [
            { id: 'series', title: '電器串聯', icon: '🔗' },
            { id: 'parallel', title: '電器並聯', icon: '🔀' }
          ],
          items: [
            { text: '接成一條沒有分支的單一迴路', zone: 'series', explain: '串聯是將電器依序接在同一條沒有分支的電路上。' },
            { text: '電路各處的電流大小皆相等', zone: 'series', explain: '串聯電路中電荷不會消失或累積，各處電流大小相同。' },
            { text: '取下一顆燈泡，另一顆就不亮', zone: 'series', explain: '串聯時取下一顆燈泡會使整條迴路變成斷路，另一顆也不亮。' },
            { text: 'I總 ＝ I₁ ＝ I₂', zone: 'series', explain: '串聯電路的總電流等於流經每一個電器的電流。' },
            { text: '連接在數條不同的分支電路上', zone: 'parallel', explain: '並聯是在兩個連接點之間接上多條分支電路。' },
            { text: '總電流等於各分支電流的總和', zone: 'parallel', explain: '從電池流出的總電流會分流進入各分支，總電流等於各分支電流相加。' },
            { text: '取下一顆燈泡，另一顆仍會亮', zone: 'parallel', explain: '並聯時一分支斷路，其他分支仍為通路，因此另一顆燈泡照常發亮（教室電燈即為並聯）。' },
            { text: 'I總 ＝ I₁ ＋ I₂', zone: 'parallel', explain: '並聯電路的總電流等於各分支電流的總和。' }
          ],
          summary: '串聯電路單一迴路各處電流相等（I總＝I₁＝I₂），一處斷路全不亮；並聯電路總電流等於各分支電流總和（I總＝I₁＋I₂），各分支獨立運作。'
        }
      ]
    },
    {
      id: 'pc16-3',
      title: '16·3 電壓',
      levels: [
        {
          type: 'classification',
          title: '安培計還是伏特計？',
          description: '安培計與伏特計在使用前都要先歸零、正極接正極端、負極接負極端，並先選高檔位再換低檔位。請區分兩者在測量對象與接法上的差異。',
          zones: [
            { id: 'ammeter', title: '安培計（毫安培計）', icon: '🅰️' },
            { id: 'voltmeter', title: '伏特計', icon: '🆅' }
          ],
          items: [
            { text: '用來測量電路中的電流大小', zone: 'ammeter', explain: '安培計與毫安培計是測量電流（單位：A 或 mA）的儀器。' },
            { text: '測量時必須與待測電器串聯', zone: 'ammeter', explain: '要測量流經電器的電流，必須讓同一股電流流過安培計，因此需與待測電器串聯。' },
            { text: '絕對不可單獨直接接在電池兩端', zone: 'ammeter', explain: '安培計不可單獨與電池連接，也不可與電器並聯，否則電流過大會燒毀儀器。' },
            { text: '電路符號為圈內標示 A 或 mA', zone: 'ammeter', explain: 'A 代表安培計，mA 代表毫安培計。' },
            { text: '用來測量電器兩端的電壓大小', zone: 'voltmeter', explain: '伏特計是測量電壓（電位差，單位：V）的儀器。' },
            { text: '測量時必須與待測電器並聯', zone: 'voltmeter', explain: '要測量電器兩端的電壓，必須將伏特計跨接（並聯）在待測電器的兩端。' },
            { text: '電路符號為圓圈內標示 V', zone: 'voltmeter', explain: 'V 代表伏特計。' }
          ],
          summary: '測電流用「安培計」且必須與待測電器「串聯」；測電壓用「伏特計」且必須與待測電器「並聯」。兩者皆需正接正、負接負，並由高檔位開始測量。'
        },
        {
          type: 'classification',
          title: '電池的串聯與並聯',
          description: '比較將多個相同的 1.5 V 乾電池「串聯」或「並聯」時，接法、總電壓與燈泡亮度的變化。',
          zones: [
            { id: 'cell_series', title: '電池串聯', icon: '🔋' },
            { id: 'cell_parallel', title: '電池並聯', icon: '🔋' }
          ],
          items: [
            { text: '將電池正極、負極依序相連', zone: 'cell_series', explain: '多個電池以正極接負極依序連接的方式稱為電池串聯。' },
            { text: '總電壓等於各個電池電壓的總和', zone: 'cell_series', explain: '電池串聯好比多個抽水馬達接力把水抽到更高處，總電壓相加。' },
            { text: '兩顆1.5V電池連接得3V', zone: 'cell_series', explain: '1.5 V ＋ 1.5 V ＝ 3.0 V。' },
            { text: '接同一燈泡時電流變大、變亮', zone: 'cell_series', explain: '在燈泡不燒毀下，串聯電池使總電壓升高、電流變大，燈泡變亮。' },
            { text: '各正極相連、各負極也相連', zone: 'cell_parallel', explain: '將各電池的正極接在一起、負極也接在一起稱為電池並聯。' },
            { text: '總電壓與單顆電池的電壓相等', zone: 'cell_parallel', explain: '相同電池並聯好比多個馬達並排抽水到相同高度，總電壓不變。' },
            { text: '兩顆1.5V連接仍為1.5V', zone: 'cell_parallel', explain: '相同 1.5 V 電池並聯後，總電壓仍維持 1.5 V。' },
            { text: '接同一燈泡時亮度不會改變', zone: 'cell_parallel', explain: '因為總電壓不變，流經燈泡的電流與單一電池相同，燈泡亮度不變。' }
          ],
          summary: '電池串聯時總電壓相加（V串＝V₁＋V₂），燈泡變亮；相同電池並聯時總電壓不變（V並＝V₁＝V₂），燈泡亮度不變。'
        },
        {
          type: 'classification',
          title: '燈泡串聯與並聯的電壓關係',
          description: '以相同電池供電時，比較相同的燈泡「串聯」或「並聯」時各燈泡兩端電壓與亮度的變化。',
          zones: [
            { id: 'bulb_series', title: '燈泡串聯', icon: '💡' },
            { id: 'bulb_parallel', title: '燈泡並聯', icon: '💡' }
          ],
          items: [
            { text: '電池電壓等於各燈泡電壓的總和', zone: 'bulb_series', explain: '燈泡串聯時共同瓜分電池提供的電壓，電池電壓等於各燈泡電壓相加。' },
            { text: 'V電池 ＝ V₁ ＋ V₂', zone: 'bulb_series', explain: '串聯電路中，總電壓等於各串聯電器兩端電壓的總和。' },
            { text: '每顆燈泡分到的電壓小於電池', zone: 'bulb_series', explain: '例如 1.5 V 電池接兩顆相同串聯燈泡，每顆只分到約 0.75 V。' },
            { text: '串聯越多顆燈泡，亮度越暗', zone: 'bulb_series', explain: '串聯越多顆燈泡，每顆分到的電壓越小，因此亮度越暗。' },
            { text: '各燈泡兩端電壓皆等於電池電壓', zone: 'bulb_parallel', explain: '並聯的各分支直接跨接在電池兩端，每顆燈泡獲得的電壓都與電池相同。' },
            { text: 'V電池 ＝ V₁ ＝ V₂', zone: 'bulb_parallel', explain: '並聯電路中，各分支電器兩端的電壓相等。' },
            { text: '並聯越多顆燈泡，亮度仍不變', zone: 'bulb_parallel', explain: '因為每顆並聯燈泡獲得的電壓仍等於電池電壓，故亮度不變。' }
          ],
          summary: '燈泡串聯時電壓相加（V＝V₁＋V₂），串越多顆越暗；燈泡並聯時各分支電壓相等（V＝V₁＝V₂），並聯越多顆亮度仍不變。'
        }
      ]
    },
    {
      id: 'pc16-4',
      title: '16·4 電阻與歐姆定律',
      levels: [
        {
          type: 'formula',
          title: '電阻公式',
          description: '將卡片拖入正確位置，完成物體的電阻（R）與兩端電壓（V）、通過電流（I）的公式。',
          left: 'R',
          right: ['V', 'I'],
          ops: ['÷'],
          ordered: true,
          distractors: ['Q', 't'],
          explain: '電阻 R = 物體兩端的電壓 V ÷ 通過物體的電流 I，分子是電壓（伏特）、分母是電流（安培），順序不可顛倒。',
          summary: '電阻 R = V ÷ I（或 V = I × R），電阻的國際單位為歐姆（Ω，1 Ω = 1 V/A）。'
        },
        {
          type: 'classification',
          title: '電阻變大還是變小？',
          description: '導體的電阻大小與材質、長度及截面積有關。請判斷下列改變會使電阻變大還是變小。',
          zones: [
            { id: 'larger_r', title: '電阻變大', icon: '📈' },
            { id: 'smaller_r', title: '電阻變小', icon: '📉' }
          ],
          items: [
            { text: '同材質導線的長度變長', zone: 'larger_r', explain: '粗細相同時，導線越長，電荷流動受到的阻礙越大，電阻與長度成正比。' },
            { text: '同材質導線的截面積變小（變細）', zone: 'larger_r', explain: '長度相同時，導線越細（截面積越小），電阻越大，電阻與截面積成反比。' },
            { text: '將兩條導線串聯在一起', zone: 'larger_r', explain: '兩導線串聯相當於增加導線的長度，因此總電阻變大。' },
            { text: '將銅線換成同規格的玻璃棒', zone: 'larger_r', explain: '玻璃是絕緣體，電阻遠大於金屬銅線。' },
            { text: '同材質導線的長度變短', zone: 'smaller_r', explain: '導線長度越短，電阻越小。' },
            { text: '同材質導線的截面積變大（變粗）', zone: 'smaller_r', explain: '導線越粗（截面積越大），電荷越容易通過，電阻越小。' },
            { text: '將兩條導線並聯在一起', zone: 'smaller_r', explain: '兩導線並聯相當於增加導線的截面積，因此總電阻變小。' },
            { text: '將銅線換成同規格的純銀線', zone: 'smaller_r', explain: '在相同長度與截面積下，銀是電阻最小的金屬，導電性比銅更好。' }
          ],
          summary: '同材質導線「越長、越細（或串聯）」電阻越大；「越短、越粗（或並聯）」電阻越小。金屬中以「銀」的電阻最小。'
        },
        {
          type: 'classification',
          title: '歐姆式導體還是非歐姆式導體？',
          description: '區分遵守歐姆定律的「歐姆式導體」與不遵守歐姆定律的「非歐姆式導體」。',
          zones: [
            { id: 'ohmic', title: '歐姆式導體', icon: '📏' },
            { id: 'non_ohmic', title: '非歐姆式導體', icon: '💡' }
          ],
          items: [
            { text: '定溫下電壓與電流成正比', zone: 'ohmic', explain: '歐姆定律指出，定溫下同一金屬導體兩端電壓與電流成正比。' },
            { text: 'V-I 關係圖為過原點的斜直線', zone: 'ohmic', explain: '電壓（V）與電流（I）關係圖為通過原點的斜直線，代表 V/I 比值固定。' },
            { text: '定溫下電阻值保持固定不變', zone: 'ohmic', explain: '不論外加電壓如何改變，只要溫度不變，歐姆式導體的電阻 R 皆為定值。' },
            { text: '一般金屬導體（如銅線、銀線）', zone: 'ohmic', explain: '大部分的金屬導體在定溫下皆遵守歐姆定律。' },
            { text: '電阻隨電壓高低或電流而改變', zone: 'non_ohmic', explain: '非歐姆式導體的 V/I 比值不是定值，電阻會隨電壓與電流而改變。' },
            { text: 'V-I 關係圖不是斜直線', zone: 'non_ohmic', explain: '非歐姆式導體的電壓與電流不成正比，關係圖為曲線。' },
            { text: '發光二極體（LED）', zone: 'non_ohmic', explain: '二極體（如 LED）不遵守歐姆定律，屬於非歐姆式導體。' }
          ],
          summary: '定溫下遵守歐姆定律（V 與 I 成正比、V-I 圖為過原點斜直線、電阻固定）的稱為「歐姆式導體」（如一般金屬）；反之稱為「非歐姆式導體」（如二極體 LED）。'
        }
      ]
    }
  ]
});
