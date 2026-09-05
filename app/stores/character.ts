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
        '力量': [true, false, false],
        '特技': [true, false, false]
      },
      nerves: {
        '冷靜': [true, false, false],
        '駕駛': [true, false, false],
        '射擊': [true, false, false],
        '生存': [true, false, false]
      },
      smooth: {
        '調情': [true, false, false],
        '領導': [true, false, false],
        '演講': [true, false, false],
        '風格': [true, false, false]
      },
      focus: {
        '偵查': [true, false, false],
        '治療': [true, false, false],
        '修理': [true, false, false],
        '知識': [true, false, false]
      },
      crime: {
        '警覺': [true, false, false],
        '靈活性': [true, false, false],
        '隱蔽': [true, false, false],
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
    
    // You Look (Custom Conditions)
    youLook: ['', ''],
    
    // Conditions (for YouLook system)
    conditions: {
      tired: false,
      hurt: false,
      nervous: false,
      likeAFool: false,
      distracted: false,
      scared: false,
      broken: false,
      youLook1: false,
      youLook2: false
    },
    
    // Spotlight Checkboxes (3 circles)
    spotlight: [false, false, false],

    // Death Roulette (6 chambers, 1 is owned by default)
    deathRoulette: [true, false, false, false, false, false],
    
    // Ammo Slots (each item 1-3 has 0-3 ammo count)
    ammo: {
      item1: 0,
      item2: 0,
      item3: 0
    },
    
    // Guns & Gear Equipment (6 input fields)
    equipment: {
      item1: '',
      item2: '',
      item3: '',
      item4: '',
      item5: '',
      item6: ''
    },
    
    // Backpack & Bag Notes (5 rows each)
    backpackNotes: ['', '', '', '', ''],
    bagNotes: ['', '', '', '', ''],
    
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
        youLook: this.youLook,
        conditions: this.conditions,
        spotlight: this.spotlight,
        deathRoulette: this.deathRoulette,
        equipment: this.equipment,
        backpackNotes: this.backpackNotes,
        bagNotes: this.bagNotes,
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
            youLook: jsonData.youLook || ['', ''],
            conditions: this.normalizeConditions(jsonData.conditions),
            spotlight: jsonData.spotlight || [false, false, false],
            deathRoulette: jsonData.deathRoulette || [true, false, false, false, false, false],
            equipment: jsonData.equipment || {
              revolver: true,
              knife: true,
              winterClothes: true,
              rope: ''
            },
            backpackNotes: jsonData.backpackNotes || '',
            bagNotes: jsonData.bagNotes || '',
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
            if (key === 'conditions') {
              this[key] = this.normalizeConditions(jsonData[key])
            } else if (key in this) {
              this[key] = jsonData[key]
            }
          })
        }
        
        return true
      } catch (error) {
        console.error('Import failed:', error)
        return false
      }
    },

    // 確保 conditions 是正確的 Object 格式
    normalizeConditions(conditions: any) {
      // 如果是陣列或不存在，使用預設對象
      if (Array.isArray(conditions) || !conditions || typeof conditions !== 'object') {
        console.warn('⚠ 舊版本 conditions，轉換為新格式')
        return {
          tired: false,
          hurt: false,
          nervous: false,
          likeAFool: false,
          distracted: false,
          scared: false,
          broken: false,
          youLook1: false,
          youLook2: false
        }
      }
      
      // 如果是對象，確保有所有必要的鍵
      return {
        tired: conditions.tired ?? false,
        hurt: conditions.hurt ?? false,
        nervous: conditions.nervous ?? false,
        likeAFool: conditions.likeAFool ?? false,
        distracted: conditions.distracted ?? false,
        scared: conditions.scared ?? false,
        broken: conditions.broken ?? false,
        youLook1: conditions.youLook1 ?? false,
        youLook2: conditions.youLook2 ?? false
      }
    },

    // 保留舊版角色資料，僅將顯示用的舊譯名鍵轉成角色卡用詞
    normalizeAttributeItemStates(states: any) {
      if (!states || typeof states !== 'object') return this.attributeItemStates
      const normalized = structuredClone(states)
      const aliases = {
        brawn: { '蠻力': '力量' },
        nerves: { '求生': '生存' },
        smooth: { '話術': '演講', '風範': '風格' },
        crime: { '巧手': '靈活性', '潛行': '隱蔽' }
      }
      Object.entries(aliases).forEach(([group, names]) => {
        normalized[group] ||= {}
        Object.entries(names).forEach(([oldName, newName]) => {
          if (normalized[group][oldName] && !normalized[group][newName]) {
            normalized[group][newName] = normalized[group][oldName]
          }
          delete normalized[group][oldName]
        })
      })
      return normalized
    },
    
    loadFromLocalStorage() {
      if (process.client) {
        try {
          const data = localStorage.getItem('outgunned-character')
          if (data) {
            const parsed = JSON.parse(data)
            parsed.attributeItemStates = this.normalizeAttributeItemStates(parsed.attributeItemStates)
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
        console.log('✓ 已清除 localStorage 舊數據')
      }
    },

    // 初始化存儲，清理舊數據
    // 手動保存到 localStorage（確保持久化）
    saveToLocalStorage() {
      if (process.client) {
        try {
          const fullState = this.$state
          localStorage.setItem('outgunned-character', JSON.stringify(fullState))
          console.log('💾 已保存到 localStorage')
        } catch (error) {
          console.error('❌ 保存失敗:', error)
        }
      }
    },

    initializeStore() {
      if (process.client) {
        try {
          const data = localStorage.getItem('outgunned-character')
          if (data) {
            const parsed = JSON.parse(data)
            // 檢查是否有舊格式 conditions（Array）
            if (Array.isArray(parsed.conditions)) {
              console.warn('🔄 檢測到舊格式 conditions（Array），正在升級...')
              parsed.conditions = this.normalizeConditions(parsed.conditions)
              // 保存升級後的數據
              localStorage.setItem('outgunned-character', JSON.stringify(parsed))
              console.log('✓ 已升級舊數據格式')
            }
            this.$patch(parsed)
          }
        } catch (error) {
          console.error('❌ 初始化存儲失敗:', error)
        }
      }
    },

    // YouLook 條件切換方法
    toggleYouLookCondition(condition: string) {
      // 確保 conditions 是正確的 Object 格式
      if (Array.isArray(this.conditions)) {
        console.warn('⚠ 檢測到舊格式 Array，正在轉換為 Object...')
        this.conditions = this.normalizeConditions(this.conditions)
      }
      
      if (condition in this.conditions) {
        const oldValue = (this.conditions as any)[condition]
        // 使用 $patch 確保狀態變化被正確追踪
        this.$patch({
          conditions: {
            ...this.conditions,
            [condition]: !oldValue
          }
        })
        console.log(`✓ ${condition}: ${oldValue} → ${!oldValue}`)
        
        // 立即保存到 localStorage
        this.saveToLocalStorage()
      } else {
        console.error(`✗ condition "${condition}" 不存在，可用鍵:`, Object.keys(this.conditions))
      }
    },

    // 更新自定義條件名稱
    setYouLookName(index: number, value: string) {
      if (index >= 0 && index < this.youLook.length) {
        // 使用 $patch 確保狀態變化被正確追踪
        this.$patch({
          youLook: [
            ...this.youLook.slice(0, index),
            value,
            ...this.youLook.slice(index + 1)
          ]
        })
        // 立即保存到 localStorage
        this.saveToLocalStorage()
      }
    },

    // Death Roulette 槽位切換 (範圍選擇：點擊 i 則 0-i 都會亮)
    toggleDeathRoulette(index: number) {
      if (index >= 0 && index < this.deathRoulette.length) {
        const isCurrentlyChecked = this.deathRoulette[index]
        const newValue = !isCurrentlyChecked
        const newDeathRoulette = Array(this.deathRoulette.length).fill(false)
        for (let i = 0; i <= index; i++) {
          newDeathRoulette[i] = newValue
        }
        this.$patch({ deathRoulette: newDeathRoulette })
        this.saveToLocalStorage()
      }
    },

    // 矚目時刻槽位切換 (範圍選擇：點擊 i 則 0-i 都會亮)
    toggleSpotlight(index: number) {
      if (index >= 0 && index < this.spotlight.length) {
        const isCurrentlyChecked = this.spotlight[index]
        const newValue = !isCurrentlyChecked
        const newSpotlight = Array(this.spotlight.length).fill(false)
        for (let i = 0; i <= index; i++) {
          newSpotlight[i] = newValue
        }
        this.$patch({ spotlight: newSpotlight })
        this.saveToLocalStorage()
      }
    },

    // 彈藥槽位切換 (範圍選擇：點擊 i 則 1-i 都會亮)
    toggleAmmo(itemId: string, index: number) {
      const validItems = ['item1', 'item2', 'item3']
      if (!validItems.includes(itemId)) return
      
      const currentCount = (this.ammo as any)[itemId] || 0
      // 如果當前數值等於要點擊的位置，則清空；否則設為點擊的位置
      const newCount = currentCount === index ? 0 : index
      
      this.$patch({
        ammo: {
          ...this.ammo,
          [itemId]: newCount
        }
      })
      this.saveToLocalStorage()
    },

    // 設置幸運數值
    setLuck(count: number) {
      this.$patch({
        attributes: {
          ...this.attributes,
          luck: Math.max(0, Math.min(6, count))
        }
      })
      this.saveToLocalStorage()
    },

    // 背包筆記行更新
    setBackpackNoteRow(index: number, value: string) {
      this.$patch({
        backpackNotes: [
          ...this.backpackNotes.slice(0, index),
          value,
          ...this.backpackNotes.slice(index + 1)
        ]
      })
      this.saveToLocalStorage()
    },

    // 提包筆記行更新
    setBagNoteRow(index: number, value: string) {
      this.$patch({
        bagNotes: [
          ...this.bagNotes.slice(0, index),
          value,
          ...this.bagNotes.slice(index + 1)
        ]
      })
      this.saveToLocalStorage()
    },

    // 開始新電影 - 重置所有相關狀態
    resetForNewMovie() {
      this.$patch({
        // 清空角色細節
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

        // 清空角色資訊
        characterInfo: {
          name: '',
          homeland: '',
          profession: '',
          vocation: '',
          languages: ''
        },

        // 清空記憶
        memories: ['', '', '', '', '', '', ''],

        // 清空寶藏
        treasure: '',

        // 清空經歷
        experiences: ['', '', '', ''],

        // 清空自定義條件名稱
        youLook: ['', ''],

        // 重置牌組
        aces: [
          { name: 'Hearts', icon: 'ace-hearts', active: false },
          { name: 'Diamonds', icon: 'ace-diamonds', active: false },
          { name: 'Clubs', icon: 'ace-clubs', active: false },
          { name: 'Spades', icon: 'ace-spades', active: false },
          { name: 'Joker', icon: 'ace-joker', active: false }
        ],

        // 清空招式
        moves: [
          { text: '', suits: { heart: false, diamond: false, club: false, spade: false }, used: false },
          { text: '', suits: { heart: false, diamond: false, club: false, spade: false }, used: false },
          { text: '', suits: { heart: false, diamond: false, club: false, spade: false }, used: false }
        ],

        // 重置技能等級
        categoryLevels: {
          society: 1,
          academia: 1,
          war: 1,
          street: 1
        },

        // 重置屬性
        attributes: {
          grit: 1,
          luck: 1
        },

        // 清空特質
        traits: ['', '', '', ''],

        // 清空特技
        feats: ['', '', '', '', '', ''],

        // 重置禮儀值
        currentDecorum: 3,

        // 重置壓力值
        currentStress: 0,

        // 重置TTT
        currentTTT: 1,

        // 清空裝備與財富
        equipmentText: '',
        wealthLevel: 'middle',

        // 重置毅力
        gritChecked: [false, false, false, false, false, false, false, false, false, false, false, false],

        // 重置你看起來的所有條件
        conditions: {
          tired: false,
          hurt: false,
          nervous: false,
          likeAFool: false,
          distracted: false,
          scared: false,
          broken: false,
          youLook1: false,
          youLook2: false
        },

        // 重置致命輪盤到1
        deathRoulette: [true, false, false, false, false, false],

        // 重置聚光燈到1
        spotlight: [true, false, false],

        // 清空槍枝與裝備數據
        equipment: {
          item1: '',
          item2: '',
          item3: '',
          item4: '',
          item5: '',
          item6: ''
        },
        ammo: {
          item1: 0,
          item2: 0,
          item3: 0
        },
        coins: 0,
        backpackNotes: ['', '', '', '', ''],
        bagNotes: ['', '', '', '', ''],

        // 清空合約與TTT筆記
        contracts: '',
        tttNotes: '',

        // 重置屬性組狀態
        attributeGroupStates: {
          brawn: [true, true, false],
          nerves: [true, true, false],
          smooth: [true, true, false],
          focus: [true, true, false],
          crime: [true, true, false]
        },

        // 重置屬性項目狀態
        attributeItemStates: {
          brawn: {
            '忍耐': [true, false, false],
            '戰鬥': [true, false, false],
            '力量': [true, false, false],
            '特技': [true, false, false]
          },
          nerves: {
            '冷靜': [true, false, false],
            '駕駛': [true, false, false],
            '射擊': [true, false, false],
            '生存': [true, false, false]
          },
          smooth: {
            '調情': [true, false, false],
            '領導': [true, false, false],
            '演講': [true, false, false],
            '風格': [true, false, false]
          },
          focus: {
            '偵查': [true, false, false],
            '治療': [true, false, false],
            '修理': [true, false, false],
            '知識': [true, false, false]
          },
          crime: {
            '警覺': [true, false, false],
            '靈活性': [true, false, false],
            '隱蔽': [true, false, false],
            '街頭智慧': [true, false, false]
          }
        }
      })
      this.saveToLocalStorage()
      console.log('✓ 開始新電影 - 所有狀態已重置')
    },

    // 匯出角色數據為 JSON
    exportCharacterData() {
      const data = JSON.stringify(this.$state, null, 2)
      return data
    },

    // 匯入角色數據從 JSON
    importCharacterData(jsonString: string) {
      try {
        const data = JSON.parse(jsonString)
        // 驗證基本結構
        if (!data || typeof data !== 'object') {
          throw new Error('無效的 JSON 格式')
        }
        // 導入數據並正規化
        this.$patch(data)
        this.attributeItemStates = this.normalizeAttributeItemStates(data.attributeItemStates)
        if (data.conditions) {
          this.conditions = this.normalizeConditions(data.conditions)
        }
        this.saveToLocalStorage()
        console.log('✓ 角色數據已成功匯入')
        return true
      } catch (error) {
        console.error('❌ 匯入失敗:', error)
        return false
      }
    }
  },
  
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'outgunned-character',
        storage: localStorage,
        version: 1,
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
          'youLook',
          'conditions',
          'spotlight',
          'deathRoulette',
          'ammo',
          'equipment',
          'backpackNotes',
          'bagNotes',
          'contracts',
          'tttNotes'
        ],
        beforeRestore: () => {
          // 在恢复前执行，如果需要
        },
        afterRestore: (context) => {
          // 恢复后确保 conditions 是正确的对象格式
          context.store.conditions = context.store.normalizeConditions(context.store.conditions)
        }
      }
    ]
  }
})
