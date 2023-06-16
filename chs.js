/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制品",
    "About & Changelog": "关于 & 更新日志",
    "Charge": "充能",
    "Collapse": "折叠",
    "Craftable": "可制作",
    "Drill rock": "开采石头",
    "Drone Actions": "无人机动作",
    "Drone Upgrades": "无人机升级",
    "Export text": "导出文本",
    "Export to file": "导出到文件",
    "Game Data": "游戏数据",
    "Get export text": "获取导出文本",
    "None": "无",
    "Power up": "通电",
    "Hard reset": "硬重置",
    "Ignited Space": "激燃太空",
    "Import from file": "从文件导入",
    "Import from text": "从文本导入",
    "Landing zone": "着陆区",
    "Planet": "行星",
    "Power": "电力",
    "Repair Drill": "修理钻机",
    "Select file": "选择文件",
    "Stone": "石头",
    "Time:": "时间：",
    "Wipe game data": "擦除游戏数据",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "Consume": "消耗",
    "Drill rock at cost of some energy": "开采 岩石 会消耗一些电力",
    "Drill ore at cost of some energy": "开采 矿石 会消耗一些电力",
    "Never": "从不",
    "Produce": "生产",
    "Recover your energy power": "恢复你的电力",
    "Ore": "矿石",
    "Drill ore": "开采矿石",
    "Allows building quarry": "允许建造采石场",
    "Allows digging and picking more materials": "允许挖掘和捡起更多材料",
    "Auto-quarrying": "自动开采石头",
    "Repair Charging Cable": "修理充电线",
    "Repair Manipulators": "修理机械手",
    "Allows creating electricity power by burning biomass": "允许通过燃烧生物质来产生电力",
    "Automatically collect some biomass": "自动收集一些生物量",
    "Bacteria Incubator": "细菌培养箱",
    "Biomass": "生物质",
    "Collect Biomass": "收集生物质",
    "Combustion": "燃烧",
    "Dig and get some organics": "挖掘并获得一些有机物",
    "Drill some stone": "开采一些石头",
    "Further facilities repair": "进一步的设施修理",
    "Industrial Buildings": "工业建筑",
    "Repair Charging Cable": "修理充电线",
    "Repair Drill": "修理钻头",
    "Automatically collect some stone": "自动收集一些石头",
    "Quarry": "采石场",
    "Repair machinery": "修理机器",
    "Repair machinery. Improves your automatic quarries and mines by 50%": "修理机器。 将您的自动采石场和矿山提高 50%",
    "Auto-miners": "自动采矿",
    "Allows building mine": "允许建造矿山",
    "Collect some organics": "收集一些有机物",
    "Repair storage module": "修理存储模块",
    "Autonomous power supply": "自动化电力供应",
    "Repair storage module. Allows building storage sections": "修理存储模块。 允许构建存储部分",
    "Bacteria Incubator": "细菌培养箱",
    "Thermoelectric Power plant": "热电厂",
    "Expand": "展开",
    "Burns biomass to obtain electricity": "燃烧生物质以获取电力",
    "Power Buildings": "电力建筑",
    "Automatically collect some ore": "自动收集一些矿石",
    "Mine": "矿山",
    "Storage section": "存储部分",
    "Storage facilities": "储存设施",
    "Combustion cameras": "燃烧相机",
    "Storage Buildings": "存储建筑",
    "Decrease biomass consumption by thermoelectric power plants by 25%": "热电厂的生物质消耗量减少25%",
    "Metal": "金属",
    "Provides additional storage space": "提供额外的存储空间",
    "Storage": "存储",
    "Wood": "木头",
    "Boost power supply": "提升电力供应",
    "Repair battery": "修理电池",
    "Bio technology": "生物技术",
    "Increase incubators output by 25%": "将孵化器产量提高 25%",
    "Increase quarries output by 25%": "将采石场产量提高 25%",
    "Quarry technology": "采石技术",
    "Bacteria selection": "菌种选择",
    "Ore production": "矿石生产",
    "Power capacity": "电力容量",
    "Increase electricity consumption by incubators, but incubators start producing oxygen": "增加孵化器的耗电量，但孵化器开始产生氧气",
    "Combustion technology": "燃烧科技",
    "Increase thermal plant output by 25%": "将热电厂输出增加 25%",
    "Economy Boost": "经济提升",
    "Increase mine output by 25%": "矿山产量提高 25%",
    "Mine technology": "矿山技术",
    "More Storage": "更多存储空间",
    "Breath In": "吸气",
    "Storage hub": "存储中心",
    "Provides more storage space, but consumes power": "提供更多存储空间，但耗电",
    "Improved thermal plants": "改良热电厂",
    "Allow building oxygen compressors to store more oxygen": "允许建造氧气压缩机以储存更多的氧气",
    "Basic habitability requirements": "基本宜居性要求",
    "Oxidase burning cameras": "氧化酶燃烧相机",
    "Oxygen": "氧气",
    "Oxygen compressor": "氧气压缩机",
    "Oxygen compressors": "氧气压缩机",
    "Thermal plants are 50% more efficient, but now consume oxygen": "热电厂的效率提高了 50%，但现在消耗的是氧气",
    "Water pump": "水泵",
    "Water storage": "水储存",
    "Allow building water pumping stations": "允许建造水泵站",
    "Increase stone, ore and biomass storage from storage section and hub by 25%": "将存储部分和存储中心的石头、矿石和生物质存储量增加 25%",
    "Reserve batteries": "备用电池",
    "Storage Bonuses": "存储奖励",
    "Storage technology": "存储技术",
    "Thermoelectric plants now also provide small power storage": "热电厂现在也提供小型电力储存",
    "Water pumping": "抽水",
    "Water": "水",
    "Provides water storage": "提供蓄水功能",
    "Ship hold": "船舱",
    "Provides water supply": "提供供水",
    "To max:": "装满：",
    "To empty:": "用完：",
    "Breakdown:": "分解：",
    "Base battery": "基础电池",
    "Base": "基础",
    "Provides more storage for oxygen": "提供更多的氧气储存",
    "Allows building battery. Also, improves power output by 20%": "允许建造电池。 此外，提高 20% 的电力输出",
    "Electrolytes": "电解质",
    "Final preparation": "最后准备",
    "Income Bonuses": "收入奖励",
    "Nutrition": "营养学",
    "Repair supply module": "修理供电模块",
    "Battery": "电池",
    "Provides power storage": "提供电力储存",
    "Start generating trace amount of nutrition": "开始产生微量营养",
    "Enables colonists arrival": "使殖民者能够到达",
    "First colonists": "第一批殖民者",
    "Living Cabin": "生活舱",
    "Repair docking module": "修复对接模块",
    "You start with broken ship on hostile planet. Your main goal is to prepare for firts colonists to arrive, and build prosperous civilisation": "你从敌对星球上的破船开始。 你的主要目标是为第一批殖民者的到来做好准备，并建立繁荣的文明",
    "Empty and cold here": "这里空旷寒冷",
    "This game was pretty much inspired by": "这个游戏的灵感来自于",
    "Popups will now appear always to right": "弹出窗口现在总是出现在右边",
    "Basic game mechanics: buildings, researches, upgrades, colony management": "基本游戏机制：建筑、研究、升级、殖民地管理",
    "Cargo Sorting": "货物分拣",
    "Colonists": "殖民者",
    "Colony": "殖民地",
    "Provides living space for 2 colonists": "为 2 名殖民者提供生活空间",
    "Repair research module": "修复研究模块",
    "Repair research module to enable researchers working at it and produce some science.": "修复研究模块，使研究人员能够在其中工作并产生一些科学成果。",
    "Repair sorting machinery. Gives 75% bonus to stone, ore and biomass storage.": "维修分拣机械。 为石头、矿石和生物质储存提供 75% 的加成。",
    "Research": "研究",
    "Residental Buildings": "住宅楼",
    "Aesthetics": "美学",
    "Basic": "基础",
    "Exo farming": "外部农业",
    "Free colonists:": "自由殖民者：",
    "Generates research": "产生研究",
    "Happiness affects your colonists productivity. Has no effect on machinery production or crafting": "幸福会影响您的殖民者的生产力。 对机械生产或手工艺没有影响",
    "Jobs": "工作",
    "Learn how to work with soil on a foreign planet. Allows you hiring farmers": "了解如何在外星球上处理土壤。 允许你雇佣农民",
    "Miner": "矿工",
    "Mines ore": "开采矿石",
    "Mines stone": "矿石",
    "Overview": "概览",
    "Population": "人口",
    "Population:": "人口：",
    "Quarrymen": "采石工人",
    "Research: Exo farming": "研究：外种农业",
    "Researcher": "研究员",
    "Researches": "研究",
    "Science": "科学",
    "Scientific basics": "基础科学",
    "Farmer": "农民",
    "Farming tools": "农具",
    "Generates nutrition": "产生营养",
    "Improves farming output by 10%.": "农业产出提高 10%。",
    "Learn more about minerals available at your new home": "详细了解您的新家可用的矿物质",
    "Learn your atmosphere closer. Unlocks new upgrades and buildings": "更深入地了解你的氛围。 解锁新的升级和建筑",
    "Meteorology": "气象",
    "Mineralogy": "矿物学",
    "Service Industry": "服务业",
    "Unlock providing some services to your groving colony": "解锁为您的殖民地提供一些服务",
    "Exo biology": "外生物学",
    "Learn more about local organisms": "了解有关当地生物的更多信息",
    "Bio laboratory": "生物实验室",
    "Building cranes": "建筑起重机",
    "Clinic": "诊所",
    "Decrease building level prices scaling by 10%.": "将建筑级别的价格比例降低 10%。",
    "Deep mining": "深挖",
    "Entertainment": "娱乐",
    "Exo-forestry": "外林业",
    "Fertilizing": "施肥",
    "Healthcare": "卫生保健",
    "Improves stone and ore output by 20%.": "将石头和矿石产量提高 20%。",
    "Improves water output by 20%.": "将出水量提高 20%。",
    "Improves your stone, ore and biomass storage facilities by 50%.": "将您的石头、矿石和生物质储存设施提高 50%。",
    "Learn how to work with exotic ores. Unlocks crafting": "了解如何处理奇异矿石。 解锁工艺",
    "Lets learn how to plant something bigger in this empty grounds": "让我们学习如何在这片空地上种更大的东西",
    "Metallurgy": "冶金",
    "Meteorology Station": "气象站",
    "Monument": "纪念碑",
    "Nutritious Flora": "营养植物群",
    "Place some special flora to your incubators to make them 50% more productive.": "在您的培养箱中放置一些特殊的植物群，使它们的生产力提高 50%。",
    "Platinum": "铂",
    "Positive Effect": "积极作用",
    "Provides 25 science storage and boost science output by 2% multiplicative": "提供 25 科学存储并提高 2% 乘法科学输出",
    "Provides basic healthcare service": "提供基本医疗服务",
    "Provides even more science storage and boost science output by 5% multiplicative": "提供更多的科学存储并将科学产出提高 5%",
    "Provides some aesthetics": "提供一些美学",
    "Public Buildings": "公共建筑",
    "Science Buildings": "科学建筑",
    "Sociology": "社会学",
    "Underground vaults": "地下金库",
    "Unlocks new ways to make your little society happier and more efficient": "解锁新方法，让您的小社会更快乐、更高效",
    "Water deposits": "积水",
    "Your farmers start consume biomass, but increase nutrition output.": "您的农民开始消耗生物质，但会增加营养输出。",
    "Beam": "木梁",
    "Better cables": "更好的电缆",
    "Brick": "砖头",
    "Cargo cranes": "货物起重机",
    "Chemistry": "化学",
    "Converts ore and wood into rolled metal": "将矿石和木材转化为轧制金属",
    "Crafting": "制作",
    "Forest Plant": "森林植物",
    "Forest plants now boost biomass production": "森林植物现在促进生物质生产",
    "Forester": "林务员",
    "Forester tools": "林务员工具",
    "Fruit trees": "果树",
    "Further research precious minerals at your new habitat": "在你的新栖息地进一步研究珍贵矿物",
    "Generates oxygen": "产生氧气",
    "Geology": "地质学",
    "Improves all resources storages.": "改进所有资源存储。",
    "Improves foresters output.": "提高林务员产出。",
    "Improves stone and ore output.": "提高石头和矿石的产量。",
    "Improves wood output by foresters.": "提高林务员的木材产量。",
    "Improves your power capacity and output.": "提高您的功率容量和输出。",
    "Metal containers": "金属容器",
    "Metal machine parts": "金属机械零件",
    "Metal tools": "五金工具",
    "Natural Environment": "自然环境",
    "Park zone": "公园区",
    "Parking zone provides basic possibility to relax for your people": "公园区为您的员工提供基本的放松机会",
    "Plate": "板材",
    "Provides more raw materials storage": "提供更多原材料储存",
    "Provides oxygen and water storage": "提供氧气和水储存",
    "Smelter": "冶炼厂",
    "Tank": "水箱",
    "Tree care": "树木护理",
    "Tree plants also provide nutrition.": "树木植物也提供营养。",
    "Unlocks new materials and upgrades": "解锁新材料和升级",
    "Warehouse": "仓库",
    "Artisan": "工匠",
    "Crafting Slots:": "制作插槽：",
    "Crafts various goods": "制作各种商品",
    "Free slots:": "空闲插槽：",
    "Plants and cuts wood": "种植和砍伐木材",
    "Space": "太空",
    "Support project": "支持项目",
    ", but it's not a clone.": "，但它不是克隆。",
    "Added highlight on missing resource when hower over building/upgrade/research": "在构建/升级/研究过程中添加了对丢失资源的突出显示",
    "Added manual save and hard reset buttons": "添加了手动保存和硬重置按钮",
    "Added new early space content (researches, buildings)": "添加了新的早期太空内容（研究、建筑）",
    "Added prestige mechanics": "添加声望机制",
    "Approximately 48 hours of playable content": "大约 48 小时的可播放内容",
    "By Strange Matter Gaming": "通过奇怪的物质游戏",
    "Changed size and background for buildable/upgradeable items to make them easier to see/click": "更改了可建造/可升级物品的大小和背景，使其更易于查看/点击",
    "Fixed bug when max colonists amount could be not integer value": "修复了最大殖民者数量可能不是整数值的错误",
    "Join our Discord": "加入我们的 Discord",
    "Kittens game": "猫国建设者（Kittens game）",
    "Negative and capped resources are now highlighted": "负资源和上限资源现在突出显示",
    "Support on Patreon": "支持Patreon",
    "v0.0.1 First Playable Prototype": "v0.0.1 第一个可玩原型",
    "v0.0.1a UI and small features update": "v0.0.1a UI 和小功能更新",
    "v0.0.2 Prestige mechanics & New content": "v0.0.2 声望机制和新内容",
    "Administrative service center": "行政服务中心",
    "Advanced anatomy": "高级解剖学",
    "Allow": "允许",
    "Apartment": "公寓",
    "Artificial organs": "人工器官",
    "Better understanding of quantum physics can significantly boost your civilization": "更好地理解量子物理学可以显着促进你的文明",
    "Bigger grants": "更大的捐款",
    "Building materials factory": "建材厂",
    "Cinema": "电影院",
    "Clinics are working in regular way, providing service using only reliable traditional medicine methods": "诊所正常运作，只使用可靠的传统医学方法提供服务",
    "Computer.": "电脑.",
    "Cottage": "小屋",
    "Data Center": "数据中心",
    "Each level decrease public services requirements by your people by 2%": "每个级别将您的人民的公共服务需求降低 2%",
    "Economy": "经济",
    "Electronics factory": "电子厂",
    "Experimental medicine": "实验医学",
    "Forbid": "禁止",
    "Forest plants operating as normal": "林业生产正常",
    "Forest plants produce 50% of oxygen only, but provide small bonus to \"Aesthetics\"": "森林植物只产生 50% 的氧气，但对“美学”的贡献很小",
    "Forest plants produce 50% of oxygen only, but provide small bonus to \"Entertainment\"": "森林植物只产生 50% 的氧气，但对“娱乐”的贡献很小",
    "Further research human body can make maintaining larger colony much easier": "进一步研究人体可以使维持更大的群体更容易",
    "Great building devoted to the Gods. Significantly boosts your religion service": "献给众神的伟大建筑。 显着提高你的宗教服务",
    "Great Radio Transmitter": "伟大的无线电发射机",
    "Increase healthcare service but decrease religious": "增加医疗保健服务但减少宗教信仰",
    "Infinity": "无限",
    "Its too little space on our planet, isn't?": "我们星球上的空间太小了，不是吗？",
    "Knowledge": "知识",
    "Law Water Filtering Control: On": "法水过滤控制：开",
    "Laws & Order": "法律与秩序",
    "Metallurgy Complex": "冶金综合体",
    "Nature Reserve": "自然保护区",
    "Negative Effect": "负面影响",
    "No effect": "无影响",
    "No grants": "无补助",
    "Normal": "普通",
    "Off": "关闭",
    "On": "开启",
    "Picnic zones": "野餐区",
    "Plastics": "塑胶",
    "Policeman": "警察",
    "Policemen consume 0.5 Nutrition and 0.2 water each but provides better service": "警察每人消耗 0.5 营养和 0.2 水，但提供更好的服务",
    "Policemen does not consume additional resources": "警察不消耗额外资源",
    "Provides 5% bonus to your materials storage in warehouses": "为您在仓库中的材料存储提供 5% 的奖励",
    "Provides additional 2% boost to your colonists production": "为您的殖民者生产提供额外 2% 的提升",
    "Provides additional living space for 2 colonists": "为 2 名殖民者提供额外的生活空间",
    "Provides additional living space for 5 colonists": "为 5 名殖民者提供额外的生活空间",
    "Provides additional science capacity and generation": "提供额外的科学能力和生成",
    "Provides bonus to bricks, beams and plates production": "为砖块、横梁和板材的生产提供奖励",
    "Provides bonus to metal output": "为金属输出提供奖励",
    "Provides bonus to wires, semiconductors and computers production": "为电线、半导体和计算机生产提供红利",
    "Provides power from solar radiation": "从太阳辐射中提供能量",
    "Provides some religious service": "提供一些宗教服务",
    "Provides some security": "提供一定的安全性",
    "Quantum Physics": "量子物理学",
    "Religion": "宗教",
    "Research grants": "研究资助",
    "Rocket science": "火箭科学",
    "Rubber": "橡皮",
    "Rules of behavior in the forest": "森林行为准则",
    "Science buildings consume 150% more electricity but provide 10% more science capacity": "科学建筑多消耗 150% 的电力，但提供多 10% 的科学容量",
    "Science buildings consume 50% more electricity but provide 5% more science capacity": "科学建筑多消耗 50% 的电力，但提供多 5% 的科学容量",
    "Science buildings operate as normally": "科学楼正常运作",
    "Security": "安保",
    "Security dotations": "安保捐赠",
    "Semiconduct.": "半导体.",
    "Setting research as priority of your civilization can boost your development, but it won't be free.": "将研究作为你文明的优先事项可以促进你的发展，但它不会是免费的。",
    "Shrine": "圣地",
    "Small grants": "小额捐款",
    "Social": "社交",
    "Social research center": "社会研究中心",
    "Solar Panel": "太阳能板",
    "Storage container": "储存容器",
    "Temple": "寺庙",
    "Using 3D printers in creating or healing organs can significantly boost healthcare but religious people can suffer": "使用 3D 打印机创建或修复器官可以显着促进医疗保健，但宗教人士可能会受苦",
    "Using experimental medicine reduces healthcare efficiency of clinics, but they now provide some max research boost": "使用实验医学降低了诊所的医疗保健效率，但它们现在提供了一些最大的研究推动力",
    "Water Filtering Control": "水过滤控制",
    "Waterpumps consume 4 times more power. Increase healthcare by 10.": "水泵消耗的功率是水泵的 4 倍。 医疗保健增加 10。",
    "Waterpumps working in regular way": "水泵正常工作",
    "Wire": "金属丝",
    "Your forest plants can be used in different modes, providing various advantages to you.": "您的森林植物可以以不同的方式使用，为您提供各种优势。",
    "Your police starts consuming more resources but provide better service.": "您的警察开始消耗更多资源，但提供更好的服务。",
    "3D Printers construction": "3D打印机构造",
    "Advanced metallurgy": "先进冶金",
    "Advanced Physics": "高等物理",
    "Advanced Science": "先进科学",
    "Advanced water filtering": "先进的水过滤",
    "Allows you building containers that providing boost to your storage capacity": "允许您构建可提高存储容量的容器",
    "Chemical analysis": "化学分析",
    "Composite metals": "复合金属",
    "Computers": "电脑",
    "Electricity Study": "电力研究",
    "Energy Saving": "节能",
    "Further decrease building cost": "进一步降低建筑成本",
    "Further increase power supply": "进一步增加电源",
    "Gain 5% bonus to all crafting activities": "所有手工艺活动获得 5% 的奖励",
    "Increase policemen efficiency by 25%": "将警察效率提高 25%",
    "Increase smelter output": "增加冶炼厂产量",
    "Industry Automation": "工业自动化",
    "Multistore Warehouses": "多店仓库",
    "Organs printing": "机关印刷",
    "Platinum drills": "铂金钻头",
    "Platinum tools": "铂金工具",
    "Platinum tools provides additional production boost to your wood and crafting beams, plates and bricks": "铂金工具为您的木材和工艺梁、板材和砖块提供额外的生产提升",
    "Rubber Details": "橡胶细节",
    "Sealing": "密封",
    "Significantly reduces building power cost": "显着降低建筑电力成本",
    "Surveillance Cameras": "监控摄像头",
    "Unlocks computers crafting and building data-centers": "解锁计算机制作和建造数据中心",
    "Unlocks new medicine mode order": "解锁新的药物模式命令",
    "Upgrade wiring": "升级线路",
    "Using composite metals allows to increase metal crafting output": "使用复合金属可以增加金属工艺产量",
    "Using new materials further decreasing building costs scale": "使用新材料进一步降低建筑成本规模",
    "Your warehouses can now store twice as much goods": "您的仓库现在可以存储两倍的货物",
    "Fuel": "燃料",
    "Geography": "地理",
    "Geography knowledge unlocks expeditions": "地理知识解锁探险",
    "Orbit Buildings": "轨道建筑",
    "Provides power from solar radiation. More efficient comparing to planet surface analog": "从太阳辐射中提供能量。 与行星表面模拟相比更有效",
    "Rocket": "火箭",
    "Space Constructions": "空间构造",
    "": "",
    "Solar Panel Satellite": "太阳能电池板卫星",
    "Allow building cottages.": "允许建造别墅。",
    "Civilized life": "文明生活",
    "Cottages": "别墅",
    "Improved electrolytes": "改善电解质",
    "Improves power capacity.": "提高电源容量。",
    "Improves water output.": "改善水的输出。",
    "Law": "法律",
    "Miners can now mine platinum.": "矿工现在可以开采铂金。",
    "Platinum mining": "铂金开采",
    "Unlocks new scientific building": "解锁新的科学建筑",
    "Allows further advance of your science": "允许进一步推进你的科学",
    "Allows using more saving rocket engine techs, which reduces rockets consumption by 20% for all space structures and ships": "允许使用更节省的火箭发动机技术，从而将所有空间结构和船舶的火箭消耗减少 20%",
    "Astrophysics": "天体物理学",
    "Better Photo-elements": "更好的照片元素",
    "Boosts computers production": "促进计算机生产",
    "Boosts knowledge about virus diseases. Each level decrease colony health consumption by 5%": "提高对病毒病的认识。 每个级别减少 5% 的蜂群健康消耗",
    "Boosts your solar satellites and solar panels output by 20%": "将您的太阳能卫星和太阳能电池板输出提高 20%",
    "Complete": "完成",
    "Conductive nano-particles": "导电纳米粒子",
    "Expedition": "远征",
    "Expedition Center": "探险中心",
    "Expeditions completed:": "完成的探险：",
    "Faster Rockets": "更快的火箭",
    "Fuel Factory": "燃料厂",
    "Genetic modification of organisms can help boost nutrition and biomass production": "生物体的基因改造可以帮助提高营养和生物量生产",
    "Ice Melting Station": "融冰站",
    "Improved Lithography": "改进光刻",
    "Improves your batteries and accumulators": "改进您的电池和蓄电池",
    "Laser Cutting": "激光切割",
    "Laser Cutting of metal parts significantly simplifies plates and wires production": "金属零件的激光切割显着简化了板材和线材的生产",
    "Last Loot": "最后战利品",
    "Loot multiplier: x": "战利品乘数：x",
    "Melts ice on your cold satellite to obtain water": "融化冰冷卫星上的冰以获得水",
    "Moon Buildings": "月球建筑",
    "Move toxic fuel production outside of your planet to avoid ecology restrictions and enlarge your fuel production capabilities": "将有毒燃料生产转移到地球之外，以避免生态限制并扩大燃料生产能力",
    "Nanobots": "纳米机器人",
    "Orbital Tourism Center": "轨道旅游中心",
    "Pandemic research center": "流行病研究中心",
    "Prestige": "声望",
    "Provides 5% multiplicative bonus to your expeditions outcome. Consumes some oxygen that your expeditions will take with them.": "为您的探险结果提供 5% 的倍增奖励。 消耗一些氧气，您的探险将随身携带这些氧气。",
    "Reducing time of flight allows to make your space tourism 50% more efficient": "减少飞行时间可以使您的太空旅行效率提高 50%",
    "Rocket Flight Technology": "火箭飞行技术",
    "Small space station that provides some entertainment and aesthetics to your people": "为您的人民提供一些娱乐和美学的小型空间站",
    "Unlocks building nanobots factory on your satellite that provides bonus to all crafting activities": "解锁在您的卫星上建造纳米机器人工厂，为所有制作活动提供奖励",
    "Conductive Nano-particles": "导电纳米粒子",
    "Deep Mining": "深挖",
    "Farming Tools": "农具",
    "Forester Tools": "林务员工具",
    "Fuel Conservation": "节省燃料",
    "GMO": "转基因生物",
    "Improved fuel combustion cycle allows to install less rockets to achieve the same thrust. Reduces rocket consumption by 20% for all space structures and ships": "改进的燃料燃烧循环允许安装更少的火箭来实现相同的推力。 所有空间结构和船舶的火箭消耗减少 20%",
    "Improved photoelement technology allows you to boost solar satellites and solar panels output by 20%": "改进的光电元件技术可让您将太阳能卫星和太阳能电池板的输出提高 20%",
    "Improved smelting technique increases smelter output": "改进的冶炼技术提高了冶炼厂的产量",
    "Improved Storage": "改进的存储",
    "Lay new wires to further increase power supply": "铺设新电线进一步增加供电",
    "Metal Machine Parts": "金属机械零件",
    "Metal Tools": "金属工具",
    "New methods of lithography improve assembling processes. Boosts computers production": "新的光刻方法改进了装配工艺。 促进计算机生产",
    "Rangers": "流浪者队",
    "Repair Battery": "修复电池",
    "Repair Supply Module": "维修补给模块",
    "Underground Vaults": "地下金库",
    "Unlocks nanobots factory building on your satellite that provides bonus to all crafting activities": "在您的卫星上解锁纳米机器人工厂，为所有制作活动提供奖励",
    "Using improved flight path calculation reduces total flight time. Space tourism is now 50% more efficient": "使用改进的飞行路径计算减少了总飞行时间。 太空旅游现在效率提高了 50%",
    "Using lasers to cut out metal parts significantly simplifies plates and wires production": "使用激光切割金属零件可显着简化板材和线材的生产",
    "Using new conductive particles improves the efficiency of your batteries and accumulators": "使用新的导电颗粒可提高电池和蓄电池的效率",
    "Water Deposits": "积水",
    "Added \"Expeditions\" - active way to speed up getting resources": "添加了“远征”——加速获取资源的主动方式",
    "Available actions are now highlighted on hover": "可用的操作现在在悬停时突出显示",
    "Controls are shown disabled now when they not available": "控件在不可用时显示为已禁用",
    "Edited upgrade descriptions": "编辑升级说明",
    "Expedition center now also requires Geography research": "探险中心现在也需要地理研究",
    "Fixed bug when locked resources still were displaying in bonuses or requirements list": "修复了锁定资源仍然显示在奖金或需求列表中的错误",
    "Fixed bug when not active expedition centers provided boost to expedition multiplier": "修复了当不活跃的远征中心提供远征乘数提升时的错误",
    "Fixed descriptions of some upgrades": "修复了一些升级的描述",
    "Inverted colors for in-progress items": "正在进行的项目的反色",
    "Items that will never be available now highlighted in different color": "永远无法使用的物品现在以不同颜色突出显示",
    "v0.0.2a Small UI updates": "v0.0.2a 小的 UI 更新",
    "v0.0.2b Expeditions added": "v0.0.2b 添加远征",
    "v0.0.2c Small hotfix update": "v0.0.2c 小补丁更新",
    "v0.0.2d Small update": "v0.0.2d 小更新",
    "Allows you to send missions to other planets": "允许您向其他星球发送任务",
    "Automate some mundane task for your artisans. Gain 5% bonus to all crafting activities": "为您的工匠自动化一些平凡的任务。 所有手工艺活动获得 5% 的奖励",
    "Create a scalable solution for your storages. Your warehouses can now store twice as much goods": "为您的存储创建可扩展的解决方案。 您的仓库现在可以存储两倍的货物",
    "Create a signal transmitter with a much stronger output. Allows you to send signals to other civilizations. Unlocks first prestige level": "创建具有更强输出的信号发射器。 允许您向其他文明发送信号。 解锁第一个声望等级",
    "Further nanotechnologies investigation can further boost your civilization development": "进一步的纳米技术研究可以进一步促进您的文明发展",
    "Gravity Theory": "重力理论",
    "Improve Health Diagnostics": "改善健康诊断",
    "Nano-physics": "纳米物理学",
    "New synthetic organs allow for a better treatment of your colonists. Unlocks a new medicine mode": "新的合成器官可以更好地治疗你的殖民者。 解锁新的药物模式",
    "Organs Printing": "风琴印刷",
    "Rerout energy toward terrain scanners of your expedition drones. Increases expedition loot by 30%": "将能量重新分配给远征无人机的地形扫描仪。 远征战利品增加 30%",
    "Saving Expedition Drones": "拯救远征无人机",
    "Using computers for diagnostics can significantly improve healthcare services. Each level increases clinic efficiency by 5%": "使用计算机进行诊断可以显着改善医疗保健服务。 每级提高诊所效率5%",
    "Aesthetics Consumption": "审美消费",
    "Capacity": "容量",
    "Drone masterity": "无人机掌握",
    "Drone Solar Panel": "无人机太阳能电池板",
    "Each level provides 3% bonus to all your crafting productions": "每个级别为您的所有手工艺品提供 3% 的奖励",
    "Electronics Mastery": "电子精通",
    "Entertainment Consumption": "娱乐消费",
    "Every point boost all solid materials capacity 4%": "每点增加所有固体材料容量4%",
    "Every point boost beam, brick and plate production by 4%": "每点提升梁、砖和板材产量 4%",
    "Every point boost biomass, wood and nutrition production by 4%": "每一点都可以将生物质、木材和营养物质的产量提高 4%",
    "Every point boost electronics (wire, semiconductor, computer, etc) production 4%": "每点提升电子产品（电线、半导体、计算机等）产量 4%",
    "Every point boost fuel and rockets production by 4%": "每一点都会使燃料和火箭产量提高 4%",
    "Every point boost oxygen and water capacity 4%": "每点提升氧气和水容量4%",
    "Every point boost oxygen and water production 4%": "每点增加氧气和水的产生 4%",
    "Every point boost power production by 4%": "每一点提升发电量4%",
    "Every point boost stone, ore and platinum production by 4%": "每一点都会使石头、矿石和铂金产量提高 4%",
    "Every point decrease aesthetics consumption by 4%": "每点减少4%的审美消耗",
    "Every point decrease entertainment consumption by 4%": "每点减少4%的娱乐消费",
    "Every point decrease healthcare consumption by 4%": "每一点减少 4% 的医疗保健消费",
    "Every point decrease religion consumption by 4%": "每一点减少 4% 的宗教消费",
    "Every point decrease security consumption by 4%": "每一点减少 4% 的安全消耗",
    "Every point increase drone actions output by 10%": "每一点增加无人机动作输出10%",
    "Every point science capacity 4%": "每点科学能力4%",
    "Gas & Liquid Mastery": "掌握气体和液体",
    "Healthcare Consumption": "医疗保健消费",
    "Knowledge Point": "知识点数",
    "knowledge points (based on your current population) that can be used to purchase various upgrades": "可用于购买各种升级的知识点（根据您当前的人口）",
    "Liquid & Gas Capacity": "液体和气体容量",
    "Materials Capacity": "材料容量",
    "Materials Mastery": "材料精通",
    "Mining Mastery": "采矿精通",
    "Nanobots Factory": "纳米机器人工厂",
    "Nature Mastery": "自然精通",
    "Power Mastery": "电力精通",
    "Production": "生产",
    "Religion Consumption": "宗教消费",
    "Research Capacity": "研究容量",
    "Rocket Mastery": "火箭精通",
    "Security Consumption": "安保消费",
    "Transmit knowledge": "传播知识",
    "Transmit Knowledge": "传播知识",
    "Transmit Knowledge and leave the planet": "传播知识并离开地球",
    "Transmit Knowledge Upgrades: 0.00 points left": "传输知识升级：还剩 0.00 分",
    "You will earn": "你将获得",
    "You will loose all your resources, upgrades, buildings and science. But you will transmit your knowledge to next colonizers, making their progress much faster.": "你将失去所有的资源、升级、建筑和科技。 但是你会将你的知识传授给下一个殖民者，使他们的进步更快。",
    "Your solar panel on drone grants small power generation": "无人机上的太阳能电池板可提供小功率发电",
    "Allows drilling harder materials. Also improves stone output": "允许开采更硬的材料。 同时提高石材产量",
    "Transmit knowledge only available once you have more than 50 colonizers and did \"Great Radio Transmitter\" under landing zone upgrades section": "传输知识仅在您拥有超过 50 个殖民者并在着陆区升级部分下执行“伟大的无线电发射机”后才可用",
    "Repair Docking Module": "修复对接模块",
    "About & Change Log": "关于&更新日志",
    "Added 2 new science researches, 3 upgrades and 1 building": "添加了 2 个新的科学研究、3 个升级和 1 个建筑",
    "Added expedition length settings": "添加了远征长度设置",
    "Added new laws": "增加了新的法律",
    "Added notifications for new buildings/upgrades/laws": "添加了新建筑/升级/法律的通知",
    "Fixed bugs with expeditions": "修复了远征的错误",
    "Fixed some mistakes in descriptions": "修正了描述中的一些错误",
    "Re-balanced some buildings: Smelters and Monuments prices reduces, increased Smelter ore upkeep, removed Warehouse power upkeep": "重新平衡了一些建筑物：冶炼厂和纪念碑价格降低，增加了冶炼厂矿石维护，移除了仓库电力维护",
    "v0.0.3 Minor update": "v0.0.3 次要更新",
    "v0.0.3a Hotfix update": "v0.0.3a 修补程序更新",
    "Aggressive cutting": "强力切割",
    "Allow limited": "允许限制",
    "Allow or forbid chemical processing of food": "允许或禁止对食品进行化学处理",
    "Allow or forbid forests usage for coal production": "允许或禁止森林用于煤炭生产",
    "Change forest cutting restrictions in order to balance your precious wood production and environment care": "改变森林砍伐限制，以平衡您的珍贵木材生产和环境保护",
    "Cistern": "蓄水池",
    "Coal burning permission": "燃煤许可",
    "Electrothermal Smelting": "电热熔炼",
    "Food chemical processing": "食品化工加工",
    "Foresters operating as normal": "林务员正常工作",
    "Forests saving": "节约森林",
    "Law Food chemical processing: Allow": "食品化学加工法：允许",
    "Learn more about impact of radiation on living organisms. Unlocks piloted missions": "详细了解辐射对生物体的影响。 解锁试飞任务",
    "Provides additional entertainment for your people": "为您的员工提供额外的娱乐",
    "Radiation Study": "辐射研究",
    "Security donations": "安保捐款",
    "Time to complete:": "完成时间：",
    "Use electricity to boost metal smelting": "用电促进金属冶炼",
    "Wood cutting policy": "木材切割政策",
    "Your foresters will produce 20% less wood but provide 1 point to aesthetics each": "你的林务员将减少 20% 的木材产量，但每人提供 1 点美学",
    "Your foresters will produce 20% more wood, but each forester providing 1.5 points penalty aesthetics.": "您的林务员将多生产 20% 的木材，但每个林务员提供 1.5 分的美学惩罚。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Resource: ": "资源：",
    "Goal: ": "目标：",
    "Allows drilling harder materials. Also improve stone output by ": "允许开采更硬的材料。 同时提高石头产量 ",
    "Improves Charge Output by ": "将电力输出提高 ",
    "Upgrade: ": "升级: ",
    "Building: ": "建筑: ",
    "Improves energy storage by ": "提升电力存储 ",
    "Happiness: ": "幸福: ",
    "Job: ": "工作: ",
    "Research: ": "研究: ",
    "Crafting: ": "制作: ",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^\/ ([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Transmit Knowledge Upgrades: (.+) points left$/, '传输知识升级：还剩 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);