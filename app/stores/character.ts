import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    // Character Details
    imageUrl: '',
    characterDetails: {
      name: '',
      role: '',
      trope: '',
      background: '',
      age: '',
      flaw: '',
      catchphrase: ''
    },
    
    // Aces
    aces: [
      { name: 'Hearts', icon: 'ace-hearts', active: false },
      { name: 'Diamonds', icon: 'ace-diamonds', active: false },
      { name: 'Clubs', icon: 'ace-clubs', active: false },
      { name: 'Spades', icon: 'ace-spades', active: false },
      { name: 'Joker', icon: 'ace-joker', active: false }
    ],
    
    // Moves
    moves: [
      { text: '', suits: { heart: false, diamond: false, club: false, spade: false }, used: false },
      { text: '', suits: { heart: false, diamond: false, club: false, spade: false }, used: false },
      { text: '', suits: { heart: false, diamond: false, club: false, spade: false }, used: false }
    ],
    
    // Category Levels
    categoryLevels: {
      society: 1,
      academia: 1,
      war: 1,
      street: 1
    },
    
    // Society Skills
    societySkills: [
      { name: 'ART', name_cn: '藝術', level: 1, description: '當你在舞蹈、音樂會或戲劇演出中表演，意圖迷住他人、證明自身技藝，或分散大眾注意力時，使用藝術。你也可以使用藝術來創作、辨識或評價任何形式的藝術品，或展現你對藝術的淵博知識。' },
      { name: 'CHARM', name_cn: '魅力', level: 1, description: '當你試圖展現引人注目、討喜、優雅或整潔的形象時，使用魅力。魅力能讓你勾引小小族，或給人留下良好印象。你的魅力並不代表外貌上的美麗；而是你如何運用自身條件，贏得他人好感的能力。' },
      { name: 'ELOQUENCE', name_cn: '口才', level: 1, description: '當你以三寸不爛之舌動搖、說服、議價或欺騙他人時，使用口才。你也可以用它在群眾面前發言，或對大型聽眾演說。只要口才足夠高明，你甚至能改變一名小小族的觀點，在不訴諸暴力的情況下化解局勢。' },
      { name: 'ETIQUETTE', name_cn: '禮儀', level: 1, description: '當你展現完美無缺的禮節時，使用禮儀。無論是深深鞠躬、行出完美的屈膝禮、選對餐叉、贈送得體的禮物，與拘謹或高貴的小小族互動，或依循另一族群的傳統行事，在所有這些情況下，你都可以依靠禮儀。' },
      { name: 'GRACE', name_cn: '身姿', level: 1, description: '使用身姿來流暢地移動、維持良好儀態，或在極為高雅的情境中舞蹈。身姿能幫助你保持平衡、完成雜技般的動作，或做出需要極高精準度的行為。此外，若你是仙靈族，則使用身姿來靈巧而精確地飛行。' }
    ],
    
    // Academia Skills
    academiaSkills: [
      { name: 'CARE', name_cn: '照護', level: 1, description: '使用照護來移除「受傷」或「崩潰」狀態、施行醫療照護，或診斷與治療任何疾病。你也可以透過照護提供情緒或心理上的支持，照顧他人，或幫助一名小小族度過艱難時期。' },
      { name: 'CRAFT', name_cn: '工匠', level: 1, description: '使用工匠來打造、修理並使用科技物品與裝置。你也可以將工匠用於各類手工技藝、製作陷阱與臨時結構，或執行小型修繕與維護工作。此外，工匠亦可用於烹調健康且均衡的餐點，並藉此移除「疲勞」狀態。' },
      { name: 'CULTURE', name_cn: '文化', level: 1, description: '使用文化來回想你在學習過程或親身經驗中獲得的資訊。你也可以用它來翻譯手稿，或嘗試理解並說出你不熟悉的語言。你的文化代表你的受教育程度，以及你對自身文化與家宅其他文化之習俗、慣例與傳統的理解。' },
      { name: 'INSIGHT', name_cn: '洞悉', level: 1, description: '使用洞悉來分析你所處的情境、周遭環境，以及你身邊的小小族。透過洞悉，你能識破謊言與詐騙。你也可以用它來解開謎語與謎題，或在絕境中找出解決方案。' },
      { name: 'INVESTIGATION', name_cn: '調查', level: 1, description: '使用調查來尋找或評估證據與隱藏物品，或蒐集資訊。你也可以藉由調查分析犯罪現場以搜尋線索，或注意到那些極易被忽略的細微細節。此外，當你面對一名對手時，可以使用調查來得知其弱點。' }
    ],
    
    // War Skills
    warSkills: [
      { name: 'ATHLETICS', name_cn: '運動', level: 1, description: '使用運動來奔跑、跳躍、攀爬或游泳。你也可以將運動用於任何需要高度敏捷與體能的身體壯舉、衝刺，或試圖化解一次災難性的墜落。當你全速騎乘在老鼠、甲蟲或蝸牛背上時，同樣是在使用運動技能。' },
      { name: 'AUTHORITY', name_cn: '權威', level: 1, description: '使用權威來領導、下達清楚而果斷的命令，並讓他人在絕境中仍願意追隨你。透過權威，你也能激勵並重新點燃勇氣、威嚇他人、勒索情報，甚至馴服家養或野生動物。' },
      { name: 'FIGHT', name_cn: '武術', level: 1, description: '使用武術直接攻擊你的對手，或防禦其猛烈攻勢。透過武術，你可以徒手鬥毆、壓制、抓住或制伏他人。此外，你也能使用任何形式的近戰或決鬥武器。' },
      { name: 'STRENGTH', name_cn: '力量', level: 1, description: '使用力量來推、拉、舉起、破壞或搬運物體。你也可以將力量用於任何需要蠻力的身體行動，例如踢倒門扉或路障，或承受長時間且劇烈的勞動。當你狂飲暴食、撐到極限，只為展示你鋼鐵般的胃袋時，你使用的正是力量技能。' },
      { name: 'WILL', name_cn: '意志', level: 1, description: '使用意志來展現你的勇氣與臨危不亂的心智。透過意志，你能在危險或絕望的情境中抵抗恐懼，或在艱難時刻承受痛楚與緊張。此外，你也可以用它來保持清醒與警覺。' }
    ],
    
    // Street Skills
    streetSkills: [
      { name: 'CAUTION', name_cn: '警覺', level: 1, description: '使用警覺來保持高度戒備，並避開或繞過陷阱、危險或敵人。透過警覺，你也能預先察覺伏擊、發現隱藏的小小族或動物、注意到自己正被尾隨，或以謹慎而低調的方式行動。' },
      { name: 'DEXTERITY', name_cn: '敏捷', level: 1, description: '使用敏捷來完成需要極高精準度、靈活性或手上把戲的行動。透過敏捷，你可以扒竊或開鎖、使用釘尖或決鬥劍等輕型武器、掙脫束縛，或施展細微的障眼小戲法。' },
      { name: 'ELUSION', name_cn: '迴避', level: 1, description: '使用迴避來藏身、跟蹤、甩掉跟蹤者，或無聲而隱密地移動。此外，你也可以用它來閃避拋射物或投擲武器。依你所處的領域不同，迴避亦可用來拖延時間，或脫離險境。' },
      { name: 'EXPLORATION', name_cn: '探索', level: 1, description: '使用探索在荒野中辨識方向，並穿越無人地帶。透過探索，你也能在惡劣環境中求生、遠離聚落時尋找食物與資源，或找到一處可避開昆蟲的臨時藏身處。你也可以使用探索來與自然環境互動，並辨識動物或植物。' },
      { name: 'SHOOT', name_cn: '射術', level: 1, description: '使用射術來操作火器或遠程武器，或投擲各類武器。透過射術，你也可以將小物件擲向目標，或拋給你的同伴。' }
    ],
    
    // Conditions
    conditions: [
      { name_en: 'Embarrassed', name_cn: '尷尬', icon: 'heart', checked: false, description: '在社交領域的所有擲骰承受 –1。你可能因為出醜、被人讓你難堪，或遭逢令人灼痛的羞辱或失敗而陷入尷尬。\n要移除此狀態，你必須贏得他人的尊重或重視，例如協助有需要的人，或證明你的英勇。或者，一名朋友可以透過在照護＋社交進行一次關鍵成功的擲骰來鼓舞你，從而移除此狀態。' },
      { name_en: 'Tired', name_cn: '疲憊', icon: '', checked: false, description: '你不承受任何直接劣勢，但距離陷入崩潰又近了一步。在付出巨大努力後，或長時間未能充分進食、飲水或睡眠時，你可能會變得疲憫。\n要移除此狀態，在溫暖的床上睡一覺，或前往餐館享用一頓花費 2 枚金錢的好餐。在營地中，你或一名朋友也可以進行一次工匠＋社交的關鍵成功擲骰，準備一頓佳餚，讓所有享用的人都感到恢復精神。' },
      { name_en: 'Confused', name_cn: '困惑', icon: 'diamond', checked: false, description: '在學識領域的所有擲骰承受 –1。你可能因為思緒中斷或過度專注、頭部受到撞擊，或因情緒激動、憤怒、分心而變得困惑。\n要移除此狀態，你必須花些時間清理思緒或放鬆，例如花費2 枚金錢外出用餐或看戲。' },
      { name_en: 'Sick', name_cn: '生病', icon: '', checked: false, description: '即使在休息或獲得一次片刻喘息之後，你的壓力仍至少維持在 3 點。你可能因在寒冷中露宿、吃了腐敗的食物，或接觸到刺痛植物或有害孢子而生病。\n要移除此狀態，你必須在 3 天內不承受任何其他狀態，並同時確保良好飲食與遮蔽處所。' },
      { name_en: 'Hurt', name_cn: '受傷', icon: 'club', checked: false, description: '在戰事領域的所有擲骰承受 –1。當你遭受嚴重傷勢、被敵人重擊，或自高處墜落時，便可能受傷。\n要移除此狀態，進行一次照護＋學識的關鍵成功擲骰。或者，若你身在城鎮，也可以前往醫師處，以 2 枚金錢治療傷勢。' },
      { name_en: 'Poisoned', name_cn: '中毒', icon: '', checked: false, description: '在每個回合開始時，敘述者擲一顆數字骰。若結果為偶數：你承受 1 點壓力。若你已處於壓力滿載，並因本狀態承受額外壓力，你會陷入崩潰，但不會退場。\n當你接觸到有毒物質，或被討厭的野獸所傷時，便可能中毒。\n要移除此狀態，你可以以探索＋學識進行一次關鍵成功的擲骰來製作解毒劑，或以3 枚金錢購買一份。偶爾，敘述者也可能裁定：為了移除某種特定毒素的效果，你需要稀有且難以取得的材料。' },
      { name_en: 'Scared', name_cn: '驚恐', icon: 'spade', checked: false, description: '在街巷領域的所有擲骰承受 –1。你可能因直面極其可怕、突如其來或震撼的事物，或因陷入絕望處境而感到驚恐。\n要移除此狀態，花些時間與一位朋友坦誠交談，誠實回顧發生的事情以及它對你的影響。或者，你也可以正面面對恐懼，或在困難情境中證明你的意志力或勇氣。' },
      { name_en: 'Broken', name_cn: '崩潰', icon: '', checked: false, description: '所有擲骰額外承受 –1。即使在休息或獲得一次片刻喘息後，你的壓力也始終至少為 8 點。當你已擁有 3 個狀態，卻本應承受第 4 個時，你會改為陷入崩潰。在你移除至少一個狀態之前，無法再承受其他狀態。\n要移除此狀態，你能夠以照護＋學識進行一次極端成功的擲骰，或前往醫院治療，費用為 4 枚金錢。' },
      { name_en: '', name_cn: '', icon: 'text', checked: false, description: '' },
      { name_en: '', name_cn: '', icon: 'text', checked: false, description: '' }
    ],
    
    // Decorum
    currentDecorum: 3,
    
    // Stress
    currentStress: 0,
    
    // TTT
    currentTTT: 1,
    
    // Equipment & Wealth
    equipmentText: '',
    wealthLevel: 'middle',
    coins: 0,
    
    // Traits
    traits: ['', '', '', ''],
    
    // Attributes
    attributes: {
      grit: 1,
      luck: 1
    },
    
    // Feats
    feats: ['', '', '', '', '', ''],
    
    // Grit Checkboxes
    gritChecked: [false, false, false, false, false, false, false, false, false, false, false, false],
    
    // Attribute Group Level States (the title checkboxes)
    attributeGroupStates: {
      brawn: [true, true, false],
      nerves: [true, true, false],
      smooth: [true, true, false],
      focus: [true, true, false],
      crime: [true, true, false]
    },
    
    // Attribute Item States (individual skill checkboxes)
    attributeItemStates: {
      brawn: {
        '忍耐': [true, false, false],
        '戰鬥': [true, false, false],
        '蠻力': [true, false, false],
        '特技': [true, false, false]
      },
      nerves: {
        '冷靜': [true, false, false],
        '駕駛': [true, false, false],
        '射擊': [true, false, false],
        '求生': [true, false, false]
      },
      smooth: {
        '調情': [true, false, false],
        '領導': [true, false, false],
        '話術': [true, false, false],
        '風範': [true, false, false]
      },
      focus: {
        '偵查': [true, false, false],
        '治療': [true, false, false],
        '修理': [true, false, false],
        '知識': [true, false, false]
      },
      crime: {
        '警覺': [true, false, false],
        '巧手': [true, false, false],
        '潛行': [true, false, false],
        '街頭智慧': [true, false, false]
      }
    },
    
    // Character Info
    characterInfo: {
      name: '',
      homeland: '',
      profession: '',
      vocation: '',
      languages: ''
    },
    
    // Memories
    memories: ['', '', '', '', '', '', ''],
    
    // Treasure
    treasure: '',
    
    // Experiences
    experiences: ['', '', '', ''],
    
    // Spotlight Checkboxes (3 circles)
    spotlight: [false, false, false],
    
    // Contracts
    contracts: '',
    
    // TTT Notes
    tttNotes: ''
  }),
  
  actions: {
    toggleAce(index: number) {
      const newAce = {
        ...this.aces[index],
        active: !this.aces[index].active
      }
      this.aces.splice(index, 1, newAce)
      this.saveToLocalStorage()
    },
    
    toggleMoveSuit(moveIndex: number, suit: string) {
      const currentSuits = this.moves[moveIndex].suits
      const newMove = {
        ...this.moves[moveIndex],
        suits: {
          ...currentSuits,
          [suit]: !currentSuits[suit as keyof typeof currentSuits]
        }
      }
      this.moves.splice(moveIndex, 1, newMove)
      this.saveToLocalStorage()
    },
    
    toggleMoveUsed(moveIndex: number) {
      const newMove = {
        ...this.moves[moveIndex],
        used: !this.moves[moveIndex].used
      }
      this.moves.splice(moveIndex, 1, newMove)
      this.saveToLocalStorage()
    },
    
    toggleCategoryLevel(categoryId: string, clickedIndex: number) {
      const currentLevel = this.categoryLevels[categoryId]
      if (clickedIndex === currentLevel) {
        this.categoryLevels[categoryId] = 1
      } else {
        this.categoryLevels[categoryId] = clickedIndex
      }
      this.saveToLocalStorage()
    },
    
    toggleSkillLevel(categoryId: string, skillName: string, clickedIndex: number) {
      let targetSkills
      if (categoryId === 'society') {
        targetSkills = this.societySkills
      } else if (categoryId === 'academia') {
        targetSkills = this.academiaSkills
      } else if (categoryId === 'war') {
        targetSkills = this.warSkills
      } else {
        targetSkills = this.streetSkills
      }
      
      const skillIndex = targetSkills.findIndex(s => s.name === skillName)
      if (skillIndex !== -1) {
        const currentLevel = targetSkills[skillIndex].level
        const newLevel = clickedIndex === currentLevel ? 1 : clickedIndex
        
        const newSkill = {
          ...targetSkills[skillIndex],
          level: newLevel
        }
        targetSkills.splice(skillIndex, 1, newSkill)
        this.saveToLocalStorage()
      }
    },
    
    setDecorum(level: number) {
      this.currentDecorum = level
      this.saveToLocalStorage()
    },
    
    setStressLevel(level: number) {
      if (this.currentStress === level) {
        this.currentStress = 0
      } else {
        this.currentStress = level
      }
      this.saveToLocalStorage()
    },
    
    toggleCondition(condition: any) {
      // 如果有 name_en，使用原有邏輯
      if (condition.name_en) {
        const index = this.conditions.findIndex(c => c.name_en === condition.name_en)
        if (index !== -1) {
          const newCondition = {
            ...this.conditions[index],
            checked: !this.conditions[index].checked
          }
          this.conditions.splice(index, 1, newCondition)
          this.saveToLocalStorage()
        }
      } else {
        // 對於 text 類型，直接使用陣列中的位置
        const index = this.conditions.indexOf(condition)
        if (index !== -1) {
          const newCondition = {
            ...this.conditions[index],
            checked: !this.conditions[index].checked
          }
          this.conditions.splice(index, 1, newCondition)
          this.saveToLocalStorage()
        }
      }
    },
    
    updateConditionName(index: number, newName: string) {
      if (index >= 0 && index < this.conditions.length) {
        const newCondition = {
          ...this.conditions[index],
          name_cn: newName
        }
        this.conditions.splice(index, 1, newCondition)
        this.saveToLocalStorage()
      }
    },
    
    setTTT(level: number) {
      this.currentTTT = level
      this.saveToLocalStorage()
    },
    
    exportData() {
      const characterName = this.characterDetails.name || 'Character'
      
      const data = {
        metadata: {
          version: '1.0',
          exportDate: new Date().toISOString(),
          characterName: characterName
        },
        characterDetails: this.characterDetails,
        imageUrl: this.imageUrl,
        aces: this.aces,
        moves: this.moves,
        categoryLevels: this.categoryLevels,
        societySkills: this.societySkills,
        academiaSkills: this.academiaSkills,
        warSkills: this.warSkills,
        streetSkills: this.streetSkills,
        conditions: this.conditions,
        currentDecorum: this.currentDecorum,
        currentStress: this.currentStress,
        currentTTT: this.currentTTT,
        equipmentText: this.equipmentText,
        wealthLevel: this.wealthLevel,
        coins: this.coins,
        traits: this.traits,
        attributes: this.attributes,
        feats: this.feats,
        gritChecked: this.gritChecked,
        attributeGroupStates: this.attributeGroupStates,
        attributeItemStates: this.attributeItemStates,
        characterInfo: this.characterInfo,
        memories: this.memories,
        treasure: this.treasure,
        experiences: this.experiences,
        spotlight: this.spotlight,
        contracts: this.contracts,
        tttNotes: this.tttNotes
      }
      
      const dataStr = JSON.stringify(data, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${characterName}-${Date.now()}.json`
      link.click()
      URL.revokeObjectURL(url)
    },
    
    importData(jsonData: any) {
      try {
        // 如果有 metadata，说明是新格式
        if (jsonData.metadata) {
          // 从新格式导入
          const dataToImport = {
            imageUrl: jsonData.imageUrl || '',
            characterDetails: jsonData.characterDetails || {},
            aces: jsonData.aces || [],
            moves: jsonData.moves || [],
            categoryLevels: jsonData.categoryLevels || {},
            societySkills: jsonData.societySkills || [],
            academiaSkills: jsonData.academiaSkills || [],
            warSkills: jsonData.warSkills || [],
            streetSkills: jsonData.streetSkills || [],
            conditions: jsonData.conditions || [],
            currentDecorum: jsonData.currentDecorum || 3,
            currentStress: jsonData.currentStress || 0,
            currentTTT: jsonData.currentTTT || 1,
            equipmentText: jsonData.equipmentText || '',
            wealthLevel: jsonData.wealthLevel || 'middle',
            coins: jsonData.coins || 0,
            traits: jsonData.traits || [],
            attributes: jsonData.attributes || {},
            feats: jsonData.feats || [],
            gritChecked: jsonData.gritChecked || [],
            attributeGroupStates: jsonData.attributeGroupStates || {},
            attributeItemStates: jsonData.attributeItemStates || {},
            characterInfo: jsonData.characterInfo || {},
            memories: jsonData.memories || [],
            treasure: jsonData.treasure || '',
            experiences: jsonData.experiences || ['', '', '', ''],
            spotlight: jsonData.spotlight || [false, false, false],
            contracts: jsonData.contracts || '',
            tttNotes: jsonData.tttNotes || ''
          }
          
          Object.keys(dataToImport).forEach(key => {
            if (key in this) {
              this[key] = dataToImport[key]
            }
          })
        } else {
          // 从旧格式导入
          Object.keys(jsonData).forEach(key => {
            if (key in this) {
              this[key] = jsonData[key]
            }
          })
        }
        
        // 檢查並補齊自訂狀態
        this.ensureCustomConditions()
        return true
      } catch (error) {
        console.error('Import failed:', error)
        return false
      }
    },
    
    // 確保自訂狀態存在
    ensureCustomConditions() {
      // 檢查是否有足夠的 conditions (應該有 10 個)
      const expectedLength = 10
      if (this.conditions.length < expectedLength) {
        // 計算需要補充的數量
        const missingCount = expectedLength - this.conditions.length
        for (let i = 0; i < missingCount; i++) {
          this.conditions.push({
            name_en: '',
            name_cn: '',
            icon: 'text',
            checked: false,
            description: ''
          })
        }
      }
      // 如果沒有任何 icon='text' 的狀態，在最後添加兩個
      const hasTextConditions = this.conditions.some(c => c.icon === 'text')
      if (!hasTextConditions) {
        this.conditions.push(
          { name_en: '', name_cn: '', icon: 'text', checked: false, description: '' },
          { name_en: '', name_cn: '', icon: 'text', checked: false, description: '' }
        )
      }
    },
    
    // 手動持久化方法
    saveToLocalStorage() {
      if (process.client) {
        try {
          const data = JSON.stringify(this.$state)
          localStorage.setItem('outgunned-character', data)
        } catch (error) {
          console.error('Failed to save to localStorage:', error)
        }
      }
    },
    
    loadFromLocalStorage() {
      if (process.client) {
        try {
          const data = localStorage.getItem('outgunned-character')
          if (data) {
            const parsed = JSON.parse(data)
            this.$patch(parsed)
            // 檢查並補齊自訂狀態
            this.ensureCustomConditions()
          }
        } catch (error) {
          console.error('Failed to load from localStorage:', error)
        }
      }
    },
    
    clearAll() {
      // 重置所有狀態為初始值
      this.$reset()
      // 清除 localStorage
      if (process.client) {
        localStorage.removeItem('outgunned-character')
      }
    }
  },
  
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'outgunned-character',
        storage: localStorage,
        paths: [
          'imageUrl',
          'characterDetails',
          'aces',
          'moves',
          'categoryLevels',
          'societySkills',
          'academiaSkills',
          'warSkills',
          'streetSkills',
          'conditions',
          'currentDecorum',
          'currentStress',
          'currentTTT',
          'equipmentText',
          'wealthLevel',
          'coins',
          'traits',
          'attributes',
          'feats',
          'gritChecked',
          'attributeGroupStates',
          'attributeItemStates',
          'characterInfo',
          'memories',
          'treasure',
          'experiences',
          'spotlight',
          'contracts',
          'tttNotes'
        ]
      }
    ]
  }
})
