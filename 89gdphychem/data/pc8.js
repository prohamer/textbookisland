QuizWorld.registerChapter({
  id: 'pc8',
  sections: [
    {
      id: 'pc8-1',
      title: '8·1 氧化反應與金屬活性',
      levels: [
        {
          type: 'classification',
          title: '金屬與非金屬的氧化性質',
          description: '物質與氧結合的反應稱為「氧化反應」。請比較金屬元素（如鈉、鎂）與非金屬元素（如硫、碳）燃燒時的現象及氧化物溶於水的酸鹼性。',
          zones: [
            { id: 'metal_ox', title: '金屬元素的氧化', icon: '🪙' },
            { id: 'nonmetal_ox', title: '非金屬元素的氧化', icon: '🌋' }
          ],
          items: [
            { text: '鈉燃燒呈黃色火焰，生白色氧化鈉', zone: 'metal_ox', explain: '金屬鈉在空氣中燃燒時火焰呈黃色，生成白色的氧化鈉（Na₂O）。' },
            { text: '氧化物若可溶於水，水溶液呈鹼性', zone: 'metal_ox', explain: '一般而言，金屬氧化物若能溶於水，其水溶液通常呈鹼性。' },
            { text: '水溶液可使紅色石蕊試紙變成藍色', zone: 'metal_ox', explain: '鹼性水溶液能使紅色石蕊試紙變藍色。' },
            { text: '氧化鈉溶於水產生氫氧化鈉', zone: 'metal_ox', explain: 'Na₂O ＋ H₂O → 2NaOH（氫氧化鈉，呈鹼性）。' },
            { text: '硫燃燒呈藍紫色火焰，生二氧化硫', zone: 'nonmetal_ox', explain: '硫粉在氧氣中燃燒時火焰呈藍紫色，生成具刺鼻味、會造成空汙的二氧化硫（SO₂）。' },
            { text: '氧化物若可溶於水，水溶液呈酸性', zone: 'nonmetal_ox', explain: '一般而言，非金屬氧化物溶於水後，其水溶液呈酸性。' },
            { text: '水溶液可使藍色石蕊試紙變成紅色', zone: 'nonmetal_ox', explain: '酸性水溶液能使藍色石蕊試紙變紅色。' },
            { text: '二氧化碳與二氧化硫溶於水生成酸', zone: 'nonmetal_ox', explain: 'CO₂ 溶於水生成碳酸，SO₂ 溶於水生成亞硫酸（會造成酸雨）。' }
          ],
          summary: '金屬氧化物若可溶於水，水溶液呈「鹼性」（使紅石蕊試紙變藍）；非金屬氧化物溶於水，水溶液呈「酸性」（使藍石蕊試紙變紅）。'
        },
        {
          type: 'classification',
          title: '鎂、鋅、銅在空氣中加熱的比較',
          description: '在空氣中分別加熱鎂帶、鋅粉與銅粉，可由與氧反應的難易程度比較三者對氧的活性。請將實驗現象歸類。',
          zones: [
            { id: 'mg', title: '鎂帶（Mg）', icon: '✨' },
            { id: 'zn', title: '鋅粉（Zn）', icon: '🪡' },
            { id: 'cu', title: '銅粉（Cu）', icon: '🔥' }
          ],
          items: [
            { text: '最容易燃燒，對氧活性最大', zone: 'mg', explain: '三者之中鎂最容易點燃，代表鎂對氧的活性最大。' },
            { text: '燃燒發出耀眼白光，生白色氧化物', zone: 'mg', explain: '鎂帶燃燒時發出耀眼的白色強光，產物為白色的氧化鎂（MgO）。' },
            { text: '移開火源不久即熄，挑開表層續燃', zone: 'zn', explain: '鋅粉燃燒生成的氧化鋅覆蓋在表面阻隔空氣，用針挑開表層讓內部鋅接觸空氣即可繼續燃燒。' },
            { text: '燃燒難易程度與對氧活性居三者中', zone: 'zn', explain: '鋅比鎂難燃燒，但比銅容易燃燒，對氧活性介於鎂與銅之間。' },
            { text: '最不易燃燒，加熱時沒有火焰', zone: 'cu', explain: '銅對氧活性最小，加熱時不會起火燃燒，沒有火焰。' },
            { text: '加熱後表面生成一層黑色的氧化物', zone: 'cu', explain: '紅棕色的銅加熱氧化後，表面會生成黑色的氧化銅（CuO）。' }
          ],
          summary: '加熱鎂、鋅、銅時，由燃燒難易程度可知對氧活性大小為：「鎂（白光、白色氧化物 MgO）＞ 鋅（挑開表層續燃、ZnO）＞ 銅（無火焰、黑色氧化物 CuO）」。'
        },
        {
          type: 'order',
          title: '常見元素對氧的活性由大到小',
          description: '越容易與氧反應的元素，代表對氧的活性越大。請將下列常見元素依「對氧的活性」由大到小排列。',
          items: [
            { text: '鉀（K）、鈉（Na）', explain: '鹼金屬鉀、鈉對氧活性極大，在空氣中極易氧化。' },
            { text: '鎂（Mg）、鋁（Al）', explain: '鎂與鋁對氧活性很大，皆大於碳。' },
            { text: '碳（C）', explain: '非金屬碳對氧的活性介於鋁與鋅之間，常用來冶煉還原鋅、鐵、鉛、銅的礦石！' },
            { text: '鋅（Zn）', explain: '鋅對氧活性小於碳，但大於鐵。' },
            { text: '鐵（Fe）', explain: '鐵對氧活性小於鋅，但大於鉛與氫。' },
            { text: '氫（H）', explain: '氫對氧活性介於鐵（及鉛）與銅之間；活性大於氫的金屬才能與稀酸反應產生氫氣。' },
            { text: '銅（Cu）', explain: '銅對氧活性小於氫，需高溫加熱才會在表面生成黑色氧化銅。' },
            { text: '金（Au）、鉑（Pt）', explain: '金與鉑對氧活性極小，在自然狀態下幾乎不與氧反應。' }
          ],
          summary: '常見元素對氧的活性順序：鉀＞鈉＞鎂＞鋁＞碳＞鋅＞鐵＞鉛＞氫＞銅＞銀＞鉑＞金。'
        },
        {
          type: 'classification',
          title: '金屬對氧活性與防鏽保存',
          description: '不同金屬對氧的活性及氧化物的質地差異，決定了它們的保存方式與生活用途。請將下列特徵歸類。',
          zones: [
            { id: 'k_na', title: '鉀、鈉（活性極大）', icon: '🔥' },
            { id: 'al_zn', title: '鋁、鋅（緻密氧化層）', icon: '🛡️' },
            { id: 'au_pt', title: '金、鉑（活性極小）', icon: '👑' }
          ],
          items: [
            { text: '極易氧化，須保存在礦物油中', zone: 'k_na', explain: '鉀與鈉極易與空氣中的氧氣及水反應，必須存放在礦物油中隔絕空氣。' },
            { text: '週期表第1族', zone: 'k_na', explain: '鉀與鈉同屬於週期表第 1 族（鹼金屬），化學性質相似。' },
            { text: '遇水產生氫氣', zone: 'k_na', explain: '鉀與鈉投入水中會劇烈反應產生氫氣，且水溶液呈鹼性。' },
            { text: '對氧活性比鐵大，但表面生緻密層', zone: 'al_zn', explain: '鋁、鋅對氧活性雖大於鐵，但氧化生成的氧化鋁、氧化鋅質地非常緻密。' },
            { text: '氧化層能阻絕氧氣，保護內部金屬', zone: 'al_zn', explain: '表面的緻密氧化物如同保護膜，使內部金屬不會繼續被氧化鏽蝕。' },
            { text: '常用於防鏽鍍鋅噴漆或製成鋁罐', zone: 'al_zn', explain: '利用緻密氧化層不易完全鏽蝕的特性，廣泛用於防鏽噴漆、鋁門窗與鋁罐。' },
            { text: '地殼中含量豐富', zone: 'al_zn', explain: '鋁是地殼中含量最豐富的金屬元素（僅次於氧和矽），常以化合物形式存在。' },
            { text: '在空氣中幾乎不與氧發生反應', zone: 'au_pt', explain: '金與鉑（白金）對氧活性極小，不易氧化。' },
            { text: '製成金箔牌樓或飾品可長久保光澤', zone: 'au_pt', explain: '因為本身就不易氧化，不需要保護層也能長期保持閃亮的金屬光澤。' },
            { text: '活性小適合做為電極', zone: 'au_pt', explain: '鉑（白金）或金因活性極小、不易參與反應，常在電解實驗中作為惰性電極。' }
          ],
          summary: '鉀鈉（第 1 族）遇水生氫氣、存礦物油；鋁鋅地殼含量豐富、表面生「緻密氧化物」防鏽；金鉑活性極小，長久保光澤且適合做電極。'
        }
      ]
    },
    {
      id: 'pc8-2',
      title: '8·2 氧化與還原',
      levels: [
        {
          type: 'classification',
          title: '發生氧化還是發生還原？',
          description: '在氧化還原反應中，氧化與還原必定同時發生。請判斷下列定義及反應中的物質是「發生氧化」還是「發生還原」。',
          zones: [
            { id: 'oxidation', title: '發生氧化（得到氧）', icon: '➕' },
            { id: 'reduction', title: '發生還原（失去氧）', icon: '➖' }
          ],
          items: [
            { text: '物質在反應中與氧結合（得到氧）', zone: 'oxidation', explain: '物質得到氧而結合成氧化物的反應稱為氧化。' },
            { text: '對氧活性較大而搶走氧的那一方', zone: 'oxidation', explain: '對氧活性較大的元素會搶走氧化物中的氧，使自己發生氧化。' },
            { text: '鎂在二氧化碳中燃燒時的「鎂」', zone: 'oxidation', explain: '2Mg ＋ CO₂ → C ＋ 2MgO，鎂得到氧變成氧化鎂，發生氧化。' },
            { text: '碳與氧化銅加熱反應時的「碳」', zone: 'oxidation', explain: 'C ＋ 2CuO → CO₂ ＋ 2Cu，碳得到氧變成二氧化碳，發生氧化。' },
            { text: '氧化物在反應中失去氧', zone: 'reduction', explain: '氧化物失去氧的反應稱為還原。' },
            { text: '對氧活性較小而被搶走氧的氧化物', zone: 'reduction', explain: '對氧活性較小的元素其氧化物會被奪走氧，發生還原。' },
            { text: '鎂在二氧化碳中燃燒時的「CO₂」', zone: 'reduction', explain: '二氧化碳失去氧變成黑色的碳（CO₂ → C），發生還原。' },
            { text: '碳與氧化銅加熱時的「氧化銅」', zone: 'reduction', explain: '氧化銅失去氧變回紅棕色的銅（CuO → Cu），發生還原。' }
          ],
          summary: '得到氧稱為「氧化」、失去氧稱為「還原」，氧化與還原必同時發生；對氧活性大的元素會搶走氧而「氧化」，使另一方的氧化物「還原」。'
        },
        {
          type: 'classification',
          title: '鎂與二氧化碳、碳與氧化銅反應',
          description: '比較「點燃鎂帶放入二氧化碳瓶中」與「碳粉與氧化銅混合加熱」兩個重要氧化還原實驗的反應式、現象與應用。',
          zones: [
            { id: 'mg_co2', title: '鎂帶在二氧化碳中燃燒', icon: '🎇' },
            { id: 'c_cuo', title: '碳粉與氧化銅混合加熱', icon: '🔥' }
          ],
          items: [
            { text: '2Mg＋CO₂→C＋2MgO', zone: 'mg_co2', explain: '鎂與二氧化碳反應生成黑色的碳與白色的氧化鎂。' },
            { text: '因為鎂對氧的活性大於碳而能進行', zone: 'mg_co2', explain: '鎂對氧活性大於碳，因此能奪取二氧化碳中的氧。' },
            { text: '反應後生成白色氧化鎂與黑色碳粒', zone: 'mg_co2', explain: '廣口瓶內會出現白色的氧化鎂粉末與附著在瓶壁的黑色碳粒。' },
            { text: '說明鎂火災不可用二氧化碳滅火', zone: 'mg_co2', explain: '活性大的金屬（如鉀、鈉、鎂、鋁）火災若噴二氧化碳，反而會繼續反應助長火勢！' },
            { text: 'C＋2CuO→CO₂＋2Cu', zone: 'c_cuo', explain: '碳與氧化銅加熱生成二氧化碳氣體與金屬銅。' },
            { text: '因為碳對氧的活性大於銅而能進行', zone: 'c_cuo', explain: '碳對氧活性大於銅，因此能奪取氧化銅中的氧。' },
            { text: '黑色的氧化銅被還原成紅棕色的銅', zone: 'c_cuo', explain: '原本黑色的氧化銅粉末失去氧，還原出紅棕色的金屬銅。' },
            { text: '與利用碳從鐵礦冶煉出鐵原理相同', zone: 'c_cuo', explain: '工業上因為碳對氧活性比鐵、鉛、銅大且便宜，常以碳將金屬從礦石（如赤鐵礦 Fe₂O₃）中還原出來。' }
          ],
          summary: '鎂＋二氧化碳 → 氧化鎂（白）＋碳（黑）；碳＋氧化銅（黑）→ 二氧化碳＋銅（紅棕）。工業冶煉鐵礦也是利用碳對氧活性大於鐵，把鐵還原出來。'
        },
        {
          type: 'classification',
          title: '利用對氧活性判斷能否反應',
          description: '已知元素對氧的活性順序為：鎂（Mg）＞ 鋁（Al）＞ 碳（C）＞ 鐵（Fe）＞ 銅（Cu）＞ 金（Au）。請判斷下列各組混合加熱時是否會發生氧化還原反應。',
          zones: [
            { id: 'react', title: '會發生氧化還原反應', icon: '⭕' },
            { id: 'no_react', title: '不會發生反應', icon: '❌' }
          ],
          items: [
            { text: '鎂（Mg）＋二氧化碳（CO₂）', zone: 'react', explain: '鎂的活性大於碳（Mg ＞ C），鎂能搶走 CO₂ 中的氧。' },
            { text: '碳（C）＋氧化銅（CuO）', zone: 'react', explain: '碳的活性大於銅（C ＞ Cu），碳能搶走 CuO 中的氧。' },
            { text: '碳（C）＋氧化鐵（Fe₂O₃）', zone: 'react', explain: '碳的活性大於鐵（C ＞ Fe），碳能搶走氧化鐵中的氧，即煉鐵原理。' },
            { text: '鋁（Al）＋氧化鐵（Fe₂O₃）', zone: 'react', explain: '鋁的活性大於鐵（Al ＞ Fe），鋁能搶走氧化鐵中的氧。' },
            { text: '銅（Cu）＋二氧化碳（CO₂）', zone: 'no_react', explain: '銅的活性小於碳（Cu ＜ C），銅搶不走 CO₂ 中的氧，因此不反應。' },
            { text: '銅（Cu）＋氧化鎂（MgO）', zone: 'no_react', explain: '銅的活性小於鎂（Cu ＜ Mg），無法搶走 MgO 中的氧。' },
            { text: '鐵（Fe）＋氧化鋁（Al₂O₃）', zone: 'no_react', explain: '鐵的活性小於鋁（Fe ＜ Al），無法搶走氧化鋁中的氧。' },
            { text: '金（Au）＋氧化銅（CuO）', zone: 'no_react', explain: '金的活性極小（Au ＜ Cu），無法搶走氧化銅中的氧。' }
          ],
          summary: '只有當「單質元素的對氧活性 ＞ 氧化物中元素的對氧活性」時，單質元素才能搶走氧而發生氧化還原反應；反之則不反應。'
        },
        {
          type: 'classification',
          title: '生活中的氧化還原與安全',
          description: '日常生活中處處可見氧化還原反應的應用（如抗氧化劑、脫氧劑、漂白劑）。請區分下列哪些是正確原理與安全做法、哪些是錯誤或危險行為。',
          zones: [
            { id: 'correct', title: '正確原理與安全做法', icon: '⭕' },
            { id: 'wrong', title: '錯誤迷思或危險行為', icon: '❌' }
          ],
          items: [
            { text: '食品加維生素C、E減緩食品氧化', zone: 'correct', explain: '胡蘿蔔素、維生素 C 與維生素 E 對氧活性比食物大，可先與氧反應以減緩食品氧化。' },
            { text: '包裝放鐵粉脫氧劑消耗氧氣保鮮', zone: 'correct', explain: '脫氧劑利用鐵粉與密封包裝內的氧氣結合，防止食物變質。' },
            { text: '光合作用與呼吸作用皆屬氧化還原', zone: 'correct', explain: '植物光合作用、生物呼吸作用與煙火燃燒都屬於氧化還原反應。' },
            { text: '無字天書以維生素C將碘液還原無色', zone: 'correct', explain: '檸檬汁中的維生素 C 能與黃褐色的碘液發生氧化還原反應，使其變無色而顯現字跡。' },
            { text: '將含氯漂白水與鹽酸混合加強清潔', zone: 'wrong', explain: '含氯漂白水（次氯酸鈉）絕對不可與鹽酸混合，否則會產生劇毒的氯氣！' },
            { text: '金針與竹筷殘留過量二氧化硫漂白', zone: 'wrong', explain: '二氧化硫雖可漂白食品與竹筷，但殘留過量會危害人體呼吸系統健康。' },
            { text: '鎂粉工廠失火時直接噴水或CO₂', zone: 'wrong', explain: '鎂活性大，會與水或二氧化碳劇烈反應產生易爆的氫氣或碳，造成二次爆炸！' }
          ],
          summary: '維生素 C、E 與鐵粉脫氧劑因「對氧活性大」可保護食物不變質；含氯漂白水嚴禁與鹽酸混合（會產生有毒氯氣）；活性大金屬火災不可用水或 CO₂ 滅火。'
        }
      ]
    }
  ]
});
