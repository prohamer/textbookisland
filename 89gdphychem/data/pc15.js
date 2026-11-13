QuizWorld.registerChapter({
  id: 'pc15',
  sections: [
    {
      id: 'pc15-1',
      title: '15·1 功與功率',
      levels: [
        {
          type: 'formula',
          title: '功的公式',
          description: '將正確的物理量符號拖入空格，組出功（W）、作用力（F）與沿力方向位移（S）的關係式。',
          left: 'W',
          right: ['F', 'S'],
          ops: ['×'],
          ordered: false,
          distractors: ['t', 'P'],
          explain: '功（W）定義為作用力（F）與物體沿作用力方向位移（S）的乘積。',
          summary: 'W = F × S，功的單位為牛頓．公尺（N．m），又稱為焦耳（J）。'
        },
        {
          type: 'classification',
          title: '作正功、作負功還是作功為零？',
          description: '根據作用力方向與物體位移的關係，判斷下列各種情境屬於「作正功」、「作負功」還是「作功為零」。',
          zones: [
            { id: 'pos', title: '作正功（W＞0）', icon: '➕' },
            { id: 'neg', title: '作負功（W＜0）', icon: '➖' },
            { id: 'zero', title: '作功為零（W＝0）', icon: '⭕' }
          ],
          items: [
            { text: '作用力方向與物體位移方向相同', zone: 'pos' },
            { text: '向前施力推動推車使其往前移動', zone: 'pos' },
            { text: '將地上的書包往上提起時手的拉力', zone: 'pos', explain: '手提書包的作用力向上，書包的位移也向上，兩者同向，因此手對書包作正功。' },
            { text: '作用力方向與物體位移方向相反', zone: 'neg' },
            { text: '將書包往上提起時書包所受的重力', zone: 'neg', explain: '書包向上移動，但重力方向向下，力與位移方向相反，因此重力作負功。' },
            { text: '滾動足球減速停止時所受的摩擦力', zone: 'neg', explain: '草地摩擦力方向與足球滾動位移方向相反，使足球減速，作負功。' },
            { text: '手提著書包站在原地不動', zone: 'zero', explain: '站在原地時位移 S＝0，因此作用力與重力對書包所作的功均為零。' },
            { text: '提書包在水平面等高行走時手的力', zone: 'zero', explain: '手向上的拉力與水平前進的位移方向垂直，因此對書包作功為零。' },
            { text: '等速率繞地球衛星所受的萬有引力', zone: 'zero', explain: '圓周運動的向心力（萬有引力）指向圓心，與切線運動方向隨時垂直，作功為零。' }
          ],
          summary: '力與位移同向作正功、反向作負功；若無位移（S＝0）或力與位移垂直，則作功為零（W＝0）。'
        },
        {
          type: 'formula',
          title: '功率公式',
          description: '將正確的物理量符號拖入空格，組出功率（P）、所作的功（W）與所花時間（t）的關係式。',
          left: 'P',
          right: ['W', 't'],
          ops: ['÷'],
          ordered: true,
          distractors: ['S', 'm'],
          explain: '功率（P）用來表示作功的快慢，等於所作的功（W）除以作功所用的時間（t），順序不能顛倒。',
          summary: 'P = W ÷ t，功率單位為瓦特（W，即 J/s），1 千瓦（瓩，kW）＝ 1000 瓦特。'
        }
      ]
    },
    {
      id: 'pc15-2',
      title: '15·2 動能、位能與能量守恆',
      levels: [
        {
          type: 'classification',
          title: '動能、重力位能與彈性位能',
          description: '將下列能量的定義、影響因素與生活實例，歸類到「動能」、「重力位能」或「彈性位能」。',
          zones: [
            { id: 'kinetic', title: '動能', icon: '🏎️' },
            { id: 'gravity', title: '重力位能', icon: '⛰️' },
            { id: 'elastic', title: '彈性位能', icon: '🏹' }
          ],
          items: [
            { text: '物體因運動而具有的能量', zone: 'kinetic' },
            { text: '與物體質量及速率平方成正比', zone: 'kinetic', explain: '質量相同時，動能與速率平方成正比；速率變兩倍時，動能變為四倍。' },
            { text: '車速變兩倍時此能量變為四倍', zone: 'kinetic' },
            { text: '與物體質量及離地高度差成正比', zone: 'gravity', explain: '把物體從地表垂直抬高時，增加的重力位能等於物重乘以高度差。' },
            { text: '舉重選手將槓鈴舉至高處儲存的能', zone: 'gravity' },
            { text: '將礦泉水從一樓搬上二樓增加的能', zone: 'gravity', explain: '爬樓梯上二樓使高度增加，因此礦泉水的重力位能增加。' },
            { text: '彈性體因形狀改變而儲存的能量', zone: 'elastic' },
            { text: '拉長橡皮筋或壓縮彈簧所儲存的能', zone: 'elastic' },
            { text: '同一彈簧壓縮量越大此能量越大', zone: 'elastic', explain: '同一個彈性體的形變量越大，所具有的彈性位能就越大。' }
          ],
          summary: '動能與質量、速率平方成正比；重力位能與質量、高度差成正比；彈性位能隨形變量變大而增加。'
        },
        {
          type: 'classification',
          title: '單擺與自由落體的力學能守恆',
          description: '在不計空氣阻力與摩擦力的情況下，區分單擺、自由落體與光滑軌道運動的能量變化與守恆特性。',
          zones: [
            { id: 'u_to_k', title: '位能轉換為動能', icon: '📉' },
            { id: 'k_to_u', title: '動能轉換為位能', icon: '📈' },
            { id: 'conserve', title: '力學能總和特性', icon: '⚖️' }
          ],
          items: [
            { text: '小球由空中靜止自由落下的過程', zone: 'u_to_k', explain: '自由落下時高度降低、速率變快，減少的重力位能轉換成動能。' },
            { text: '單擺由左方最高點擺至最低點過程', zone: 'u_to_k' },
            { text: '光滑軌道玩具車由頂端滑至底部', zone: 'u_to_k' },
            { text: '單擺由最低點向上擺至右方最高點', zone: 'k_to_u', explain: '向上擺動時高度增加、速率變慢，減少的動能轉換成重力位能。' },
            { text: '光滑軌道玩具車由底部衝上高處', zone: 'k_to_u' },
            { text: '動能與位能的總和稱為力學能', zone: 'conserve' },
            { text: '無摩擦時單擺各位置的力學能相等', zone: 'conserve', explain: '只受重力作功、忽略阻力時，動能與位能的總和（力學能）保持不變。' },
            { text: '單擺在最高點速率為0但位能最大', zone: 'conserve', explain: '在最高點時動能為 0，此時全部的力學能都以重力位能的形式存在。' },
            { text: '單擺在最低點位能最小但動能最大', zone: 'conserve' }
          ],
          summary: '只受重力或彈力作功時，力學能（動能＋位能）保持定值：最高點位能最大，最低點動能最大。'
        },
        {
          type: 'order',
          title: '水力發電到照明的能量轉換',
          description: '依序排列從水力發電廠高處的水庫，一路輸送電能到家庭電燈照明的能量形式轉換過程。',
          items: [
            { text: '高處水庫中的水，儲存了大量的重力位能' },
            { text: '高處的水往下沖刷流動，將重力位能轉換成動能' },
            { text: '水流推動水力發電廠的發電機運轉，將動能轉換成電能', explain: '發電機利用流動水的動能運轉發電，轉換為電能。' },
            { text: '電能輸送至家庭用於電燈照明，轉換成光能與熱能', explain: '能量形式不斷轉換，但總和保持不變，遵守能量守恆定律。' }
          ],
          summary: '各種形式的能量可互相轉換，且轉換過程中能量的總和保持不變，稱為能量守恆定律。'
        }
      ]
    },
    {
      id: 'pc15-3',
      title: '15·3 槓桿原理與靜力平衡',
      levels: [
        {
          type: 'formula',
          title: '力矩公式',
          description: '將正確的物理量符號拖入空格，組出力矩（L）、施力大小（F）與力臂（d）的關係式。',
          left: 'L',
          right: ['F', 'd'],
          ops: ['×'],
          ordered: false,
          distractors: ['t', 'v'],
          explain: '力矩（L）等於施力大小（F）與力臂（d，支點到力作用線的垂直距離）的乘積。',
          summary: 'L = F × d，力矩常用單位為公斤重．公尺（kgw．m）或牛頓．公尺（N．m）。'
        },
        {
          type: 'classification',
          title: '影響力矩與轉動的因素',
          description: '推門或對槓桿施力時，依施力位置與角度判斷屬於「力矩較大」、「力矩較小」還是「力矩為零」。',
          zones: [
            { id: 'larger', title: '力矩較大（易轉動）', icon: '🔄' },
            { id: 'smaller', title: '力矩較小（難轉動）', icon: '🤏' },
            { id: 'zero', title: '力矩為零（不轉動）', icon: '🛑' }
          ],
          items: [
            { text: '在離門軸最遠處垂直門板施力推門', zone: 'larger' },
            { text: '力臂固定時加大對門板的施力大小', zone: 'larger' },
            { text: '施力方向與槓桿夾角越接近90度', zone: 'larger', explain: '施力方向與槓桿夾角為 90 度（垂直）時，支點到力作用線的垂直距離（力臂）最大。' },
            { text: '兩力矩轉動方向相同時的合力矩', zone: 'larger', explain: '兩力矩轉動方向相同時，轉動效果增強，合力矩為兩者相加。' },
            { text: '施力點移近門軸使力臂變短', zone: 'smaller' },
            { text: '施力點固定但施力夾角小於90度', zone: 'smaller', explain: '施力角度越小，支點到力作用線的垂直距離（力臂）就越小，力矩也變小。' },
            { text: '兩力矩轉動方向相反時的合力矩', zone: 'smaller', explain: '兩力矩轉動方向相反時，轉動效果減弱，合力矩為兩者相減。' },
            { text: '直接推在門軸（支點）上', zone: 'zero', explain: '施力在支點上時，力臂 d＝0，因此力矩 L＝0，無法使門板轉動。' },
            { text: '施力的作用線直接通過支點', zone: 'zero', explain: '當施力的作用線通過支點時，支點到力作用線的垂直距離（力臂）為 0，力矩為零。' }
          ],
          summary: '力臂是支點到力作用線的垂直距離；施力越大、力臂越長，力矩越大；力作用線通過支點時力矩為零。'
        },
        {
          type: 'classification',
          title: '槓桿原理與靜力平衡',
          description: '處於靜力平衡的物體必須同時滿足「合力為零」與「合力矩為零」，請區分下列敘述與應用屬於哪一項。',
          zones: [
            { id: 'force_eq', title: '合力為零（不移動）', icon: '↔️' },
            { id: 'torque_eq', title: '合力矩為零（不轉動）', icon: '⚖️' }
          ],
          items: [
            { text: '靜力平衡中使物體不發生移動條件', zone: 'force_eq', explain: '物體處於靜力平衡時，既不移動（合力為零）也不轉動（合力矩為零）。' },
            { text: '作用在同一物體向上與向下力抵消', zone: 'force_eq' },
            { text: '木棍兩端受等大反向平行力的合力', zone: 'force_eq', explain: '如課本例題，木棍兩端受大小相等、方向相反的平行力時，合力為零，但合力矩不為零會轉動。' },
            { text: '靜力平衡中使物體不發生轉動條件', zone: 'torque_eq' },
            { text: '順時鐘力矩大小等於逆時鐘力矩', zone: 'torque_eq', explain: '當順時鐘與逆時鐘方向的力矩大小相等時，兩者抵消使合力矩為零，槓桿達水平平衡。' },
            { text: '施力×施力臂等於抗力×抗力臂', zone: 'torque_eq' },
            { text: '蹺蹺板重的人坐近支點與輕的人平衡', zone: 'torque_eq', explain: '體重較重的人力臂較短，體重較輕的人力臂較長，使兩側力矩相等達成平衡。' },
            { text: '等臂天平兩端力臂相等時達成平衡', zone: 'torque_eq', explain: '等臂天平運用槓桿原理，平衡時兩端力矩相等，且因力臂相等而測得質量相等。' }
          ],
          summary: '靜力平衡需同時滿足合力＝0（不移動）與合力矩＝0（不轉動）；槓桿平衡時施力×施力臂＝抗力×抗力臂。'
        }
      ]
    },
    {
      id: 'pc15-4',
      title: '15·4 簡單機械',
      levels: [
        {
          type: 'classification',
          title: '省力、省時還是改變方向？',
          description: '依據施力臂與抗力臂的長短關係，將下列槓桿與輪軸工具歸類到對應的效果。',
          zones: [
            { id: 'save_f', title: '省力費時（施力臂＞抗力臂）', icon: '💪' },
            { id: 'save_t', title: '省時費力（施力臂＜抗力臂）', icon: '⚡' },
            { id: 'equal', title: '不省力不省時（施力臂＝抗力臂）', icon: '⚖️' }
          ],
          items: [
            { text: '支點在中間、柄長口短的鋁罐拉環', zone: 'save_f' },
            { text: '抗力點在中間的行李箱與開瓶器', zone: 'save_f', explain: '抗力點在支點與施力點中間時，施力臂必大於抗力臂，因此省力但費時。' },
            { text: '抗力點在中間的大型釘書機', zone: 'save_f' },
            { text: '施力在輪上、抗力在軸上的方向盤', zone: 'save_f', explain: '輪的半徑大於軸的半徑，施力在輪上時施力臂大於抗力臂，可達到省力目的。' },
            { text: '支點在中間、柄短刃長的裁縫剪刀', zone: 'save_t', explain: '裁縫剪刀的施力臂小於抗力臂，雖較費力，但施力作用距離較短，較省時。' },
            { text: '施力點在中間的麵包夾、筷子與掃把', zone: 'save_t', explain: '施力點在支點與抗力點中間時，施力臂必小於抗力臂，費力但省時。' },
            { text: '施力在軸上、抗力在輪上的擀麵棍', zone: 'save_t', explain: '施力在半徑較小的軸上時，施力臂小於抗力臂，費力但省時。' },
            { text: '施力臂等於抗力臂的等臂天平', zone: 'equal' },
            { text: '裝在升旗杆頂端改變方向的定滑輪', zone: 'equal', explain: '定滑輪相當於支點在中間且施力臂等於抗力臂的槓桿，不省力也不省時，但可改變施力方向。' }
          ],
          summary: '施力臂＞抗力臂（如抗力點在中間、輪軸施力在輪）省力費時；施力臂＜抗力臂（如施力點在中間、施力在軸）省時費力。'
        },
        {
          type: 'classification',
          title: '定滑輪與動滑輪',
          description: '比較「定滑輪」與「動滑輪」的中心軸狀態、槓桿原理、施力大小與拉繩距離關係。',
          zones: [
            { id: 'fixed', title: '定滑輪', icon: '🚩' },
            { id: 'movable', title: '動滑輪', icon: '🏗️' }
          ],
          items: [
            { text: '中心軸位置固定不隨物體移動', zone: 'fixed' },
            { text: '可視為支點在中間的等臂槓桿', zone: 'fixed', explain: '定滑輪以中心軸為支點，兩側力臂皆為半徑 r，施力臂等於抗力臂。' },
            { text: '不計摩擦時施力大小等於物重', zone: 'fixed' },
            { text: '拉下繩子的距離等於物體上升距離', zone: 'fixed' },
            { text: '不能省力但能改變施力方向便於操作', zone: 'fixed' },
            { text: '中心軸會隨著物體一起上下移動', zone: 'movable' },
            { text: '可視為抗力點在中間的省力槓桿', zone: 'movable', explain: '動滑輪以輪緣一側為支點，中心軸掛重物為抗力點，施力臂（2r）是抗力臂（r）的兩倍。' },
            { text: '鉛直上拉時施力只需總物重的一半', zone: 'movable', explain: '由於施力臂為抗力臂的 2 倍，根據槓桿原理 F × 2r ＝ W × r，施力 F ＝ 1/2 W。' },
            { text: '上拉繩子的距離是物體上升的兩倍', zone: 'movable', explain: '動滑輪省一半的力，但施力拉動的距離是物體上升距離的兩倍，省力而費時。' }
          ],
          summary: '定滑輪不省力但可改變施力方向（F＝W）；動滑輪可省一半力但費時（F＝1/2 W，拉繩距離為 2 倍）。'
        },
        {
          type: 'classification',
          title: '斜面、螺旋與機械作功觀念',
          description: '判斷下列關於「斜面」、「螺旋」與「簡單機械作功」的敘述，是正確觀念還是常見錯誤迷思。',
          zones: [
            { id: 'correct', title: '正確機械觀念', icon: '✅' },
            { id: 'myth', title: '常見錯誤迷思', icon: '❌' }
          ],
          items: [
            { text: '利用光滑斜面推重物上車可以省力', zone: 'correct', explain: '斜面長度 L 必大於高度 H，因此沿斜面推力 F ＝ W × (H/L) 必小於物重 W。' },
            { text: '高度相同時斜面越長越平緩越省力', zone: 'correct' },
            { text: '無障礙坡道與蜿蜒山路是斜面應用', zone: 'correct' },
            { text: '螺旋是將斜面圍繞在圓柱上的變形', zone: 'correct' },
            { text: '高度相同時螺距越小螺紋越密越省力', zone: 'correct', explain: '螺距越小，展開的斜面越長、越平緩，因此越省力。' },
            { text: '定滑輪與動滑輪組合可省力且變方向', zone: 'correct' },
            { text: '不管哪一種簡單機械都無法省功', zone: 'correct', explain: '根據功能轉換與能量守恆，省力的機械施力距離必加長，所作的功不會減少。' },
            { text: '沿光滑斜面推物上樓比直接抬省功', zone: 'myth', explain: '沿斜面推與垂直直接抬到相同高度，物體增加的重力位能相同，因此所作的功相同（斜面只省力不省功）。' },
            { text: '高度相同時螺距越大轉起來越省力', zone: 'myth', explain: '螺距越小、螺紋越密，展開的斜面才越平緩、越省力。' }
          ],
          summary: '斜面與螺旋都是省力費時的機械（斜面越平緩、螺距越小越省力）；任何簡單機械都無法省功。'
        }
      ]
    }
  ]
});
