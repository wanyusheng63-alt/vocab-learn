import type { WordAnalysis } from "@/types/word";

export const wordsData: WordAnalysis[] = [
  {
    word: "daunt",
    partOfSpeech: "v",
    phonetic: { uk: "/dɔːnt/", us: "/dɔːnt/" },
    root: {
      components: [
        { part: "daunt", meaning: "使胆怯，使气馁", origin: "拉丁语 domitare（驯服）" }
      ],
      explanation: "daunt = 让人心生畏惧、不敢前进"
    },
    logic: {
      premise: "面对困难或强大对手",
      feature: "心生恐惧、勇气被削弱",
      result: "犹豫、退缩、不敢继续",
      essence: "心理上的恐吓导致行动受阻"
    },
    usage: [
      {
        context: "面对挑战时的恐惧",
        example: "The difficulty of the task did not daunt her.",
        explanation: "任务的难度没有让她气馁"
      },
      {
        context: "不可阻挡的决心",
        example: "Nothing daunted, they continued their journey.",
        explanation: "毫不畏惧，他们继续前行"
      }
    ],
    distinction: [
      { word: "fear", essence: "普通的害怕情绪" },
      { word: "intimidate", essence: "通过威胁使人害怕" },
      { word: "daunt", essence: "因困难/强大而产生的畏惧气馁" }
    ],
    memory: {
      methods: ["谐音：'dont' 像 'don't'，让人不敢做", "联想： daunting task（令人望而生畏的任务）"],
      visualHint: "想象面对一座高山，心里打退堂鼓"
    },
    pitfalls: ["不要与 'daub'（涂抹）混淆", "注意区分 daunt（使气馁）和 flaunt（炫耀）"],
    summary: "daunt = 因困难或强大而产生畏惧、使气馁"
  },
  {
    word: "inventive",
    partOfSpeech: "adj",
    phonetic: { uk: "/ɪnˈventɪv/", us: "/ɪnˈventɪv/" },
    root: {
      components: [
        { part: "in-", meaning: "进入，向内", origin: "拉丁语" },
        { part: "vent", meaning: "来", origin: "拉丁语 venire" },
        { part: "-ive", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "invent = 从内心涌现出新东西 → inventive = 有发明创造力的"
    },
    logic: {
      premise: "遇到问题时",
      feature: "能从无到有想出新颖解决方案",
      result: "创造出前所未有的方法或物品",
      essence: "从内心迸发创意的能力"
    },
    usage: [
      {
        context: "形容人有创造力",
        example: "She has an inventive mind.",
        explanation: "她有一颗富有创造力的大脑"
      },
      {
        context: "巧妙的解决方案",
        example: "an inventive solution to the problem",
        explanation: "对问题的创造性解决方案"
      }
    ],
    distinction: [
      { word: "creative", essence: "艺术性的创造，强调想象" },
      { word: "innovative", essence: "引入新事物，强调革新" },
      { word: "inventive", essence: "从无到有发明，强调巧思" }
    ],
    memory: {
      methods: ["词根：in（进）+ vent（来）= 从内心涌现", "联想：invent（发明）+ ive = 善于发明的"],
      visualHint: "灯泡突然亮起，创意从脑海中涌现"
    },
    pitfalls: ["不要只理解为'发明的'，更强调'有创造力的'", "与 inventive 相比，creative 更偏向艺术"],
    summary: "inventive = 有发明创造力的，善于想出新颖方法的"
  },
  {
    word: "humid",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈhjuːmɪd/", us: "/ˈhjuːmɪd/" },
    root: {
      components: [
        { part: "hum-", meaning: "潮湿，土", origin: "拉丁语 humere（湿润）" },
        { part: "-id", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "humid = 湿润的，湿气重的"
    },
    logic: {
      premise: "空气中水分含量高",
      feature: "湿度过大，感觉黏腻闷热",
      result: "人体感觉不舒适，容易出汗",
      essence: "空气中水汽饱和导致的不舒适感"
    },
    usage: [
      {
        context: "描述天气/气候",
        example: "a hot and humid day",
        explanation: "炎热潮湿的一天"
      },
      {
        context: "环境描述",
        example: "The greenhouse is very humid.",
        explanation: "温室里非常潮湿"
      }
    ],
    distinction: [
      { word: "wet", essence: "表面有水，湿的" },
      { word: "damp", essence: "微湿，略带湿气" },
      { word: "humid", essence: "空气湿度大，闷热潮湿" },
      { word: "moist", essence: "适度湿润（偏褒义）" }
    ],
    memory: {
      methods: ["联想：human（人类）喜欢 humid（湿润）的环境", "谐音：'humid' 像 '又密的'，水汽密集"],
      visualHint: "热带雨林中，空气又热又湿，身上黏黏的"
    },
    pitfalls: ["humid 只用于描述空气，不能用于物体", "humid 通常带有负面含义（闷热不适）"],
    summary: "humid = （空气）潮湿闷热的，湿气重的"
  },
  {
    word: "vernacular",
    partOfSpeech: "n",
    phonetic: { uk: "/vəˈnækjələ(r)/", us: "/vərˈnækjələr/" },
    root: {
      components: [
        { part: "vernacul-", meaning: "本土的，本地的", origin: "拉丁语 vernaculus（家里的奴隶）" }
      ],
      explanation: "vernacular = 本地的，方言的，白话的"
    },
    logic: {
      premise: "特定地区/群体内部使用的语言",
      feature: "非正式、非官方、土生土长",
      result: "与标准语或官方语形成对比",
      essence: "本土原生、未经修饰的自然语言"
    },
    usage: [
      {
        context: "本地语言",
        example: "The vernacular language of the region",
        explanation: "该地区的方言/本地语言"
      },
      {
        context: "白话文",
        example: "He wrote in the vernacular rather than Latin.",
        explanation: "他用白话文写作，而非拉丁文"
      }
    ],
    distinction: [
      { word: "dialect", essence: "方言，强调地区差异" },
      { word: "slang", essence: "俚语，强调非正式" },
      { word: "vernacular", essence: "本地/白话语言，强调原生自然" }
    ],
    memory: {
      methods: ["联想：'verna' 像 'very native'（非常本土的）", "对比：Latin（拉丁标准语）vs vernacular（白话）"],
      visualHint: "村子里老人们用土话聊天的场景"
    },
    pitfalls: ["vernacular 可以指任何非官方语言，不限于方言", "在文学中指'白话'，与古典/拉丁文相对"],
    summary: "vernacular = 本土的，方言的，白话的（与标准语相对）"
  },
  {
    word: "inflame",
    partOfSpeech: "v",
    phonetic: { uk: "/ɪnˈfleɪm/", us: "/ɪnˈfleɪm/" },
    root: {
      components: [
        { part: "in-", meaning: "进入，使", origin: "" },
        { part: "flame", meaning: "火焰", origin: "拉丁语 flamma" }
      ],
      explanation: "inflame = 使燃烧，引申为激怒、加剧"
    },
    logic: {
      premise: "某事物或情绪被点燃",
      feature: "如火一般蔓延、升级、恶化",
      result: "情绪爆发或炎症加剧",
      essence: "像火一样点燃、激发、激化"
    },
    usage: [
      {
        context: "激怒某人",
        example: "His words inflamed the crowd.",
        explanation: "他的话语激怒了人群"
      },
      {
        context: "医学：发炎",
        example: "The wound became inflamed.",
        explanation: "伤口发炎了"
      }
    ],
    distinction: [
      { word: "anger", essence: "使人愤怒（直接结果）" },
      { word: "provoke", essence: "挑衅，激起反应" },
      { word: "inflame", essence: "点燃、激化，如火焰般蔓延" }
    ],
    memory: {
      methods: ["词根：in + flame（火焰）= 点燃", "联想：inflame → inflammation（炎症）"],
      visualHint: "一把火点燃干草堆，火势迅速蔓延"
    },
    pitfalls: ["医学上的 inflame 指发炎，不要误解", "inflame 强调升级和蔓延的过程"],
    summary: "inflame = 点燃，激怒，使发炎，使加剧"
  },
  {
    word: "certify",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈsɜːtɪfaɪ/", us: "/ˈsɜːrtɪfaɪ/" },
    root: {
      components: [
        { part: "cert-", meaning: "确定，确信", origin: "拉丁语 certus（确定的）" },
        { part: "-ify", meaning: "使成为，动词后缀", origin: "" }
      ],
      explanation: "certify = 使确定 → 证明，认证"
    },
    logic: {
      premise: "某事物需要官方确认",
      feature: "权威机构审查并给出确认",
      result: "发放证明、证书或官方认可",
      essence: "通过权威确认使其成为确定的"
    },
    usage: [
      {
        context: "官方认证",
        example: "The board certifies qualified teachers.",
        explanation: "委员会为合格教师颁发证书"
      },
      {
        context: "证明真实性",
        example: "I certify that this is a true copy.",
        explanation: "我证明这是真实的副本"
      }
    ],
    distinction: [
      { word: "prove", essence: "证明（一般性）" },
      { word: "verify", essence: "核实，验证真实性" },
      { word: "certify", essence: "官方认证，颁发证书" }
    ],
    memory: {
      methods: ["词根：cert（确定）+ ify（使）= 使确定", "联想：certificate（证书）来自 certify"],
      visualHint: "官方盖章的文件，盖上'认证通过'的印章"
    },
    pitfalls: ["certify 强调官方/权威的认证", "certify 后可接 that 从句或直接宾语"],
    summary: "certify = 证明，认证，颁发证书（官方权威行为）"
  },
  {
    word: "formalize",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈfɔːməlaɪz/", us: "/ˈfɔːrməlaɪz/" },
    root: {
      components: [
        { part: "form-", meaning: "形式，形态", origin: "拉丁语 forma" },
        { part: "-al", meaning: "形容词后缀", origin: "" },
        { part: "-ize", meaning: "使成为，动词后缀", origin: "" }
      ],
      explanation: "formalize = 使形式化 → 使正式化，确立"
    },
    logic: {
      premise: "某事物原本非正式或模糊",
      feature: "赋予其正式的形式、规则或地位",
      result: "成为正式的、官方的、有约束力的",
      essence: "从非正式状态转变为正式规范"
    },
    usage: [
      {
        context: "使关系正式化",
        example: "They decided to formalize their partnership.",
        explanation: "他们决定正式确立合作关系"
      },
      {
        context: "制定规则",
        example: "The company formalized its dress code policy.",
        explanation: "公司将着装规定正式制度化"
      }
    ],
    distinction: [
      { word: "organize", essence: "组织，整理" },
      { word: "establish", essence: "建立，确立" },
      { word: "formalize", essence: "使正式化，赋予正式形式" }
    ],
    memory: {
      methods: ["词根：formal（正式的）+ ize（使）", "联想：从 casual 变成 formal 的过程"],
      visualHint: "握手之后签署正式合同的场景"
    },
    pitfalls: ["formalize 强调'形式化'的过程", "不要与 formula（公式）混淆"],
    summary: "formalize = 使正式化，确立，使成定规"
  },
  {
    word: "cumbersome",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈkʌmbəsəm/", us: "/ˈkʌmbərsəm/" },
    root: {
      components: [
        { part: "cumber-", meaning: "阻碍，拖累", origin: "中古英语 cumbrer" },
        { part: "-some", meaning: "形容词后缀，具有...性质的", origin: "" }
      ],
      explanation: "cumbersome = 具有阻碍性质的 → 笨重的，累赘的"
    },
    logic: {
      premise: "某物体积大或结构复杂",
      feature: "难以携带、操作或处理",
      result: "造成不便，拖慢进程",
      essence: "因笨重或繁琐而带来负担"
    },
    usage: [
      {
        context: "笨重的物品",
        example: "a cumbersome piece of luggage",
        explanation: "一件笨重的行李"
      },
      {
        context: "繁琐的程序",
        example: "The process is cumbersome and time-consuming.",
        explanation: "这个流程繁琐且费时"
      }
    ],
    distinction: [
      { word: "heavy", essence: "重量大" },
      { word: "complicated", essence: "复杂的" },
      { word: "cumbersome", essence: "笨重累赘的，难以处理的" }
    ],
    memory: {
      methods: ["词根：cumber（阻碍）+ some", "谐音：'cumber' 像 '卡吧'，卡住阻碍"],
      visualHint: "背着超大背包爬山，行动缓慢吃力"
    },
    pitfalls: ["cumbersome 可用于抽象事物（流程、制度）", "强调'不便'而非单纯的'重'"],
    summary: "cumbersome = 笨重的，累赘的，繁琐的"
  },
  {
    word: "toolkit",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈtuːlkɪt/", us: "/ˈtuːlkɪt/" },
    root: {
      components: [
        { part: "tool", meaning: "工具", origin: "" },
        { part: "kit", meaning: "成套装备", origin: "" }
      ],
      explanation: "toolkit = 工具箱，工具包，引申为一整套方法/工具"
    },
    logic: {
      premise: "完成某项任务需要多种工具",
      feature: "将所需工具集合在一起",
      result: "方便取用，提高效率",
      essence: "为特定目的准备的一整套工具/方法"
    },
    usage: [
      {
        context: "实体工具箱",
        example: "a toolkit for car repairs",
        explanation: "汽车维修工具箱"
      },
      {
        context: "抽象：方法工具包",
        example: "a toolkit for dealing with stress",
        explanation: "应对压力的一套方法"
      }
    ],
    distinction: [
      { word: "tool", essence: "单个工具" },
      { word: "equipment", essence: "设备，器材（泛指）" },
      { word: "toolkit", essence: "成套工具/方法" }
    ],
    memory: {
      methods: ["合成词：tool + kit", "联想：软件开发中的 UI toolkit"],
      visualHint: "一个装满各种工具的箱子，整齐排列"
    },
    pitfalls: ["toolkit 可用于抽象概念（方法、技能）", "IT领域常指'开发工具包'"],
    summary: "toolkit = 工具箱，工具包，一整套工具/方法"
  },
  {
    word: "afield",
    partOfSpeech: "adv",
    phonetic: { uk: "/əˈfiːld/", us: "/əˈfiːld/" },
    root: {
      components: [
        { part: "a-", meaning: "在...，处于...状态", origin: "" },
        { part: "field", meaning: "田野，领域", origin: "" }
      ],
      explanation: "afield = 在田野里 → 去远方，远离"
    },
    logic: {
      premise: "原本在某地（通常指家/熟悉的地方）",
      feature: "去往外面的广阔田野/远方",
      result: "远离原地，到远处去",
      essence: "远离熟悉环境，去往远方"
    },
    usage: [
      {
        context: "去远方",
        example: "They traveled far afield to find new markets.",
        explanation: "他们远赴他乡寻找新市场"
      },
      {
        context: "远离主题",
        example: "Don't go too far afield from the main topic.",
        explanation: "不要偏离主题太远"
      }
    ],
    distinction: [
      { word: "abroad", essence: "在国外，在海外" },
      { word: "away", essence: "离开，远去（一般性）" },
      { word: "afield", essence: "去远方，远离（常指田野/野外）" }
    ],
    memory: {
      methods: ["a + field（田野）= 在田野里 = 去远方", "联想：far afield = 远赴田野/远方"],
      visualHint: "从家中出发，走向广阔的田野和远方"
    },
    pitfalls: ["常用搭配：far afield（遥远地）", "可指物理距离远或主题偏离"],
    summary: "afield = 去远方，远离（常作副词用）"
  },
  {
    word: "implicitly",
    partOfSpeech: "adv",
    phonetic: { uk: "/ɪmˈplɪsɪtli/", us: "/ɪmˈplɪsɪtli/" },
    root: {
      components: [
        { part: "im-", meaning: "在内，进入", origin: "" },
        { part: "plic", meaning: "折叠，包含", origin: "拉丁语 plicare" },
        { part: "-it", meaning: "形容词后缀", origin: "" },
        { part: "-ly", meaning: "副词后缀", origin: "" }
      ],
      explanation: "implicit = 内含的 → implicitly = 含蓄地，暗中地"
    },
    logic: {
      premise: "意义或含义包含在内部",
      feature: "没有明说，但可从上下文推断",
      result: "需要理解言外之意",
      essence: "内含其中，不言而喻"
    },
    usage: [
      {
        context: "含蓄地相信",
        example: "I trust her implicitly.",
        explanation: "我绝对信任她（不言而喻的信任）"
      },
      {
        context: "隐含的意思",
        example: "His words implicitly criticized the policy.",
        explanation: "他的话含蓄地批评了该政策"
      }
    ],
    distinction: [
      { word: "explicitly", essence: "明确地，清楚地说明" },
      { word: "implicitly", essence: "含蓄地，暗示地，不言而喻地" }
    ],
    memory: {
      methods: ["反义词：explicitly（明确地）vs implicitly（含蓄地）", "词根：im（内）+ plic（折叠）= 内折的"],
      visualHint: "话只说了一半，另一半意思藏在话里"
    },
    pitfalls: ["与 explicitly 是反义词", "I trust you implicitly 是常见搭配，表示'绝对信任'"],
    summary: "implicitly = 含蓄地，暗中地，绝对地（信任等）"
  },
  {
    word: "hone",
    partOfSpeech: "v",
    phonetic: { uk: "/həʊn/", us: "/hoʊn/" },
    root: {
      components: [
        { part: "hone", meaning: "磨石，磨刀石", origin: "古英语 han" }
      ],
      explanation: "hone = 用磨石磨 → 磨练，提高"
    },
    logic: {
      premise: "工具（如刀）变钝了",
      feature: "在磨石上反复打磨",
      result: "变得锋利，性能提升",
      essence: "通过反复练习使技能精进"
    },
    usage: [
      {
        context: "磨练技能",
        example: "She honed her skills through years of practice.",
        explanation: "她通过多年练习磨练技能"
      },
      {
        context: "打磨想法",
        example: "We need to hone our proposal before the meeting.",
        explanation: "我们需要在会议前完善提案"
      }
    ],
    distinction: [
      { word: "practice", essence: "练习（一般性）" },
      { word: "improve", essence: "改进，提高（结果）" },
      { word: "hone", essence: "磨练，精进（强调打磨过程）" }
    ],
    memory: {
      methods: ["联想：hone 和 stone（石头）有关，磨刀石", "谐音：'hone' 像 '好'，越磨越好"],
      visualHint: "刀在磨刀石上来回摩擦，变得锋利"
    },
    pitfalls: ["hone 强调精进、打磨到更锋利", "常与 skills/talents 搭配"],
    summary: "hone = 磨练（技能），使精湛，打磨"
  },
  {
    word: "tolerate",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈtɒləreɪt/", us: "/ˈtɑːləreɪt/" },
    root: {
      components: [
        { part: "toler-", meaning: "忍受，容忍", origin: "拉丁语 tolerare" },
        { part: "-ate", meaning: "动词后缀", origin: "" }
      ],
      explanation: "tolerate = 忍受，容忍，容许"
    },
    logic: {
      premise: "存在令人不悦的事物",
      feature: "虽然不赞成，但选择承受而不反对",
      result: "允许其存在或继续",
      essence: "勉强的接受和忍耐"
    },
    usage: [
      {
        context: "容忍行为",
        example: "I won't tolerate such behavior.",
        explanation: "我不能容忍这种行为"
      },
      {
        context: "忍受条件",
        example: "Plants that tolerate drought",
        explanation: "耐旱的植物"
      }
    ],
    distinction: [
      { word: "accept", essence: "接受（心理认同）" },
      { word: "bear", essence: "忍受（强调承受力）" },
      { word: "tolerate", essence: "容忍（勉强允许存在）" }
    ],
    memory: {
      methods: ["词根：toler（忍受）", "联想：tolerate 比 accept 更勉强"],
      visualHint: "皱着眉头，不情愿但还是忍下来的表情"
    },
    pitfalls: ["tolerate 强调'虽然不悦但允许存在'", "医学/生物学中指'耐受'"],
    summary: "tolerate = 容忍，忍受，容许（勉强接受）"
  },
  {
    word: "wealthy",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈwelθi/", us: "/ˈwelθi/" },
    root: {
      components: [
        { part: "wealth", meaning: "财富", origin: "中古英语 welthe" },
        { part: "-y", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "wealthy = 富有的，富裕的"
    },
    logic: {
      premise: "拥有大量金钱或资源",
      feature: "物质充裕，生活优渥",
      result: "有能力购买奢侈品或投资",
      essence: "拥有丰富财富的状态"
    },
    usage: [
      {
        context: "形容人富有",
        example: "a wealthy businessman",
        explanation: "一位富有的商人"
      },
      {
        context: "资源丰富",
        example: "a country wealthy in natural resources",
        explanation: "一个自然资源丰富的国家"
      }
    ],
    distinction: [
      { word: "rich", essence: "富有的（最常用）" },
      { word: "affluent", essence: "富裕的（强调源源不断）" },
      { word: "wealthy", essence: "富有的（强调拥有财富）" }
    ],
    memory: {
      methods: ["wealth（财富）+ y = 有财富的", "联想：wealthy 和 healthy 押韵，有钱又健康"],
      visualHint: "大房子里，奢华装修，金银财宝"
    },
    pitfalls: ["wealthy 比 rich 更正式", "可指抽象财富（资源丰富）"],
    summary: "wealthy = 富有的，富裕的，丰富的"
  },
  {
    word: "incorporate",
    partOfSpeech: "v",
    phonetic: { uk: "/ɪnˈkɔːpəreɪt/", us: "/ɪnˈkɔːrpəreɪt/" },
    root: {
      components: [
        { part: "in-", meaning: "进入", origin: "" },
        { part: "corpor", meaning: "身体，团体", origin: "拉丁语 corpus" },
        { part: "-ate", meaning: "动词后缀", origin: "" }
      ],
      explanation: "incorporate = 使身体进入 → 合并，纳入，包含"
    },
    logic: {
      premise: "存在两个或多个独立事物",
      feature: "将其中一个纳入到整体中",
      result: "形成统一的整体",
      essence: "将部分融入整体的过程"
    },
    usage: [
      {
        context: "纳入想法",
        example: "We should incorporate customer feedback into the design.",
        explanation: "我们应该将客户反馈纳入设计中"
      },
      {
        context: "公司合并",
        example: "The business was incorporated in 1995.",
        explanation: "该企业于1995年成立（注册为法人）"
      }
    ],
    distinction: [
      { word: "include", essence: "包含（一般性）" },
      { word: "merge", essence: "合并（两者平等融合）" },
      { word: "incorporate", essence: "纳入，使成为一部分" }
    ],
    memory: {
      methods: ["词根：in + corpor（身体/团体）= 进入团体", "联想：corporation（公司）来自同根词"],
      visualHint: "一个小拼图块被嵌入到大拼图中"
    },
    pitfalls: ["incorporate 强调'使成为一部分'", "商业上指'注册成立公司'"],
    summary: "incorporate = 包含，纳入，合并，注册成立"
  },
  {
    word: "initiate",
    partOfSpeech: "v",
    phonetic: { uk: "/ɪˈnɪʃieɪt/", us: "/ɪˈnɪʃieɪt/" },
    root: {
      components: [
        { part: "initi-", meaning: "开始，着手", origin: "拉丁语 initium（开端）" },
        { part: "-ate", meaning: "动词后缀", origin: "" }
      ],
      explanation: "initiate = 使开始 → 发起，启动，开创"
    },
    logic: {
      premise: "某事尚未开始",
      feature: "采取第一个行动",
      result: "正式启动或引入新阶段",
      essence: "从零到一的启动动作"
    },
    usage: [
      {
        context: "发起项目",
        example: "The company initiated a new training program.",
        explanation: "公司启动了一个新的培训项目"
      },
      {
        context: "介绍入门",
        example: "He initiated me into the club.",
        explanation: "他介绍我加入俱乐部"
      }
    ],
    distinction: [
      { word: "start", essence: "开始（一般性）" },
      { word: "begin", essence: "开始（常用）" },
      { word: "initiate", essence: "发起，启动（正式，强调开创性）" }
    ],
    memory: {
      methods: ["词根：initi（开始）= initial（最初的）", "联想：initiate 比 start 更正式"],
      visualHint: "按下启动按钮，绿灯亮起，机器开始运转"
    },
    pitfalls: ["initiate 强调'开创性'的第一步", "可指介绍某人进入某个圈子"],
    summary: "initiate = 发起，启动，开创，介绍加入"
  },
  {
    word: "picturesque",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˌpɪktʃəˈresk/", us: "/ˌpɪktʃəˈresk/" },
    root: {
      components: [
        { part: "picture", meaning: "图画", origin: "" },
        { part: "-esque", meaning: "像...的，...风格的", origin: "" }
      ],
      explanation: "picturesque = 像画一样的 → 风景如画的"
    },
    logic: {
      premise: "某处风景美丽",
      feature: "美到像画一样值得描绘",
      result: "令人赏心悦目，适合拍照/绘画",
      essence: "如画般美丽，适合入画"
    },
    usage: [
      {
        context: "风景如画的",
        example: "a picturesque village in the mountains",
        explanation: "山中的一个风景如画的村庄"
      },
      {
        context: "生动的描述",
        example: "He gave a picturesque account of his travels.",
        explanation: "他生动地描述了他的旅行"
      }
    ],
    distinction: [
      { word: "beautiful", essence: "美丽的（一般性）" },
      { word: "scenic", essence: "风景优美的" },
      { word: "picturesque", essence: "如画的，适合入画的" }
    ],
    memory: {
      methods: ["词根：picture（画）+ esque（像...的）", "联想：像明信片上的风景一样美"],
      visualHint: "一幅美丽的山水画，景色和现实一样"
    },
    pitfalls: ["picturesque 强调'像画一样'的美感", "可形容语言'生动形象'"],
    summary: "picturesque = 风景如画的，生动的"
  },
  {
    word: "dissemination",
    partOfSpeech: "n",
    phonetic: { uk: "/dɪˌsemɪˈneɪʃn/", us: "/dɪˌsemɪˈneɪʃn/" },
    root: {
      components: [
        { part: "dis-", meaning: "分散，分开", origin: "" },
        { part: "semin", meaning: "种子", origin: "拉丁语 semen" },
        { part: "-ation", meaning: "名词后缀", origin: "" }
      ],
      explanation: "dissemination = 像撒种子一样散开 → 传播，散布"
    },
    logic: {
      premise: "信息、知识或想法需要扩散",
      feature: "如播种般广泛散布到各处",
      result: "被更多人知晓和接受",
      essence: "广泛散布如播种"
    },
    usage: [
      {
        context: "信息传播",
        example: "the dissemination of information",
        explanation: "信息的传播"
      },
      {
        context: "知识普及",
        example: "the dissemination of scientific knowledge",
        explanation: "科学知识的普及传播"
      }
    ],
    distinction: [
      { word: "spread", essence: "传播，扩散（一般性）" },
      { word: "broadcast", essence: "广播，播送" },
      { word: "dissemination", essence: "散布，普及（正式，如播种）" }
    ],
    memory: {
      methods: ["词根：dis（分散）+ semin（种子）= 撒种", "联想：seminar（研讨会）传播知识"],
      visualHint: "农夫撒种子，种子四处飞散"
    },
    pitfalls: ["dissemination 是正式用语", "常用于信息、知识、思想的传播"],
    summary: "dissemination = 传播，散布，普及（如播种）"
  },
  {
    word: "herald",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈherəld/", us: "/ˈherəld/" },
    root: {
      components: [
        { part: "herald", meaning: "传令官，使者", origin: "古法语 herault" }
      ],
      explanation: "herald = 传令官 → 预示，宣告"
    },
    logic: {
      premise: "某个重要事件即将发生",
      feature: "先行信号或迹象出现",
      result: "正式宣告或预示未来之事",
      essence: "作为先兆宣告到来"
    },
    usage: [
      {
        context: "预示新时代",
        example: "This invention heralded a new era.",
        explanation: "这项发明预示了一个新时代的到来"
      },
      {
        context: "宣告",
        example: "The newspaper heralded the good news.",
        explanation: "报纸宣告了这个好消息"
      }
    ],
    distinction: [
      { word: "announce", essence: "宣布，宣告" },
      { word: "signal", essence: "发出信号" },
      { word: "herald", essence: "预示，宣告（强调作为先兆）" }
    ],
    memory: {
      methods: ["联想：herald 像 'hero + old'，老英雄宣告好消息", "历史：中世纪传令官（herald）宣布消息"],
      visualHint: "号角手吹响号角，宣告国王到来"
    },
    pitfalls: ["herald 可指'预示...的到来'", "正式用语，文学色彩浓"],
    summary: "herald = 预示，宣告，是...的先兆"
  },
  {
    word: "flange",
    partOfSpeech: "n",
    phonetic: { uk: "/flændʒ/", us: "/flændʒ/" },
    root: {
      components: [
        { part: "flange", meaning: "凸缘，法兰", origin: "法语 flanche" }
      ],
      explanation: "flange = （机器）凸缘，法兰盘"
    },
    logic: {
      premise: "两个管道或部件需要连接",
      feature: "边缘有凸出的环形部分",
      result: "通过螺栓固定，实现牢固连接",
      essence: "用于连接固定的边缘凸起"
    },
    usage: [
      {
        context: "机械部件",
        example: "The pipe has a flange at each end.",
        explanation: "这根管子两端都有法兰盘"
      },
      {
        context: "工程连接",
        example: "Bolt the flanges together.",
        explanation: "把法兰盘栓在一起"
      }
    ],
    distinction: [
      { word: "rim", essence: "边缘（一般性）" },
      { word: "edge", essence: "边，边缘" },
      { word: "flange", essence: "凸缘，法兰（机械术语）" }
    ],
    memory: {
      methods: ["谐音：'flange' 像 '法兰'，就是法兰盘", "联想：flange 是 flat + range（平的边缘）"],
      visualHint: "管道两端突出的环形金属片，用螺栓连接"
    },
    pitfalls: ["flange 是专业机械术语", "日常生活很少用到"],
    summary: "flange = （机械的）凸缘，法兰盘"
  },
  {
    word: "primitive",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈprɪmətɪv/", us: "/ˈprɪmətɪv/" },
    root: {
      components: [
        { part: "primit-", meaning: "最初的，最早的", origin: "拉丁语 primus（第一）" },
        { part: "-ive", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "primitive = 最初的，原始的，早期的"
    },
    logic: {
      premise: "事物发展的早期阶段",
      feature: "简单、粗糙、未经过完善",
      result: "保留最初的状态或特征",
      essence: "发展初期的原始状态"
    },
    usage: [
      {
        context: "原始社会",
        example: "primitive tribes",
        explanation: "原始部落"
      },
      {
        context: "简陋的",
        example: "The living conditions were quite primitive.",
        explanation: "居住条件相当简陋"
      }
    ],
    distinction: [
      { word: "ancient", essence: "古代的，古老的" },
      { word: "original", essence: "原始的，最初的（中性）" },
      { word: "primitive", essence: "原始的，简陋的（偏落后）" }
    ],
    memory: {
      methods: ["词根：prim（第一）= prime（首要的）", "联想：primitive 比 ancient 更原始"],
      visualHint: "原始人住在山洞里，用石器生活"
    },
    pitfalls: ["primitive 有时带贬义（落后的）", "也可指艺术上的'原始风格'"],
    summary: "primitive = 原始的，早期的，简陋的"
  },
  {
    word: "astonish",
    partOfSpeech: "v",
    phonetic: { uk: "/əˈstɒnɪʃ/", us: "/əˈstɑːnɪʃ/" },
    root: {
      components: [
        { part: "a-", meaning: "强调", origin: "" },
        { part: "ston", meaning: "雷打，震惊", origin: "拉丁语 extonare" },
        { part: "-ish", meaning: "动词后缀", origin: "" }
      ],
      explanation: "astonish = 如雷击般震惊 → 使惊讶，使吃惊"
    },
    logic: {
      premise: "发生出乎意料的事情",
      feature: "震惊到几乎无法相信",
      result: "强烈的惊讶情绪",
      essence: "如遭雷击般的震惊"
    },
    usage: [
      {
        context: "令人惊讶",
        example: "The news astonished everyone.",
        explanation: "这个消息让所有人震惊"
      },
      {
        context: "惊讶的",
        example: "I was astonished at the result.",
        explanation: "我对这个结果感到惊讶"
      }
    ],
    distinction: [
      { word: "surprise", essence: "使惊讶（一般性）" },
      { word: "amaze", essence: "使惊奇（赞叹）" },
      { word: "astonish", essence: "使大吃一惊（程度深）" }
    ],
    memory: {
      methods: ["联想：a + ston（石头）= 像被石头砸中一样震惊", "比较：astonish > amaze > surprise"],
      visualHint: "目瞪口呆，下巴掉下来的表情"
    },
    pitfalls: ["astonish 程度比 surprise 深", "常用被动：be astonished at/by"],
    summary: "astonish = 使大吃一惊，使惊讶"
  },
  {
    word: "chronic",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈkrɒnɪk/", us: "/ˈkrɑːnɪk/" },
    root: {
      components: [
        { part: "chron-", meaning: "时间", origin: "希腊语 khronos" },
        { part: "-ic", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "chronic = 长时间的 → 慢性的，长期的"
    },
    logic: {
      premise: "某种状态或疾病持续很长时间",
      feature: "反复发作或持续存在",
      result: "难以根治，成为常态",
      essence: "长期持续的，习惯性的"
    },
    usage: [
      {
        context: "慢性疾病",
        example: "chronic back pain",
        explanation: "慢性背痛"
      },
      {
        context: "长期问题",
        example: "a chronic shortage of housing",
        explanation: "长期的住房短缺"
      }
    ],
    distinction: [
      { word: "acute", essence: "急性的（短期严重）" },
      { word: "persistent", essence: "持续的（强调坚持）" },
      { word: "chronic", essence: "慢性的，长期的（强调时间跨度）" }
    ],
    memory: {
      methods: ["词根：chron（时间）= chronology（年代学）", "反义词：chronic（慢性）vs acute（急性）"],
      visualHint: "日历上标记了很长的日期范围，问题一直存在"
    },
    pitfalls: ["chronic 反义词是 acute（急性）", "可指'习惯性的、积习难改的'"],
    summary: "chronic = 慢性的，长期的，习惯性的"
  },
  {
    word: "erratic",
    partOfSpeech: "adj",
    phonetic: { uk: "/ɪˈrætɪk/", us: "/ɪˈrætɪk/" },
    root: {
      components: [
        { part: "errat-", meaning: "漫游，犯错", origin: "拉丁语 errare" },
        { part: "-ic", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "erratic = 漫游的 → 不稳定的，飘忽不定的"
    },
    logic: {
      premise: "某事物没有固定规律",
      feature: "变化无常，难以预测",
      result: "不可信赖，表现不稳定",
      essence: "无规律、飘忽不定的状态"
    },
    usage: [
      {
        context: "不稳定的行为",
        example: "erratic behavior",
        explanation: "古怪反复无常的行为"
      },
      {
        context: "不规律的",
        example: "erratic heartbeat",
        explanation: "心律不齐"
      }
    ],
    distinction: [
      { word: "unpredictable", essence: "不可预测的" },
      { word: "irregular", essence: "不规则的" },
      { word: "erratic", essence: "飘忽不定的，古怪的" }
    ],
    memory: {
      methods: ["词根：err（犯错/漫游）= error（错误）", "联想：像迷路的人一样到处乱走"],
      visualHint: "折线图上上下下，没有规律可循"
    },
    pitfalls: ["erratic 强调'不稳定、不规律'", "常与 behavior/driving/performance 搭配"],
    summary: "erratic = 不稳定的，飘忽不定的，古怪的"
  },
  {
    word: "tend",
    partOfSpeech: "v",
    phonetic: { uk: "/tend/", us: "/tend/" },
    root: {
      components: [
        { part: "tend", meaning: "伸展，倾向", origin: "拉丁语 tendere" }
      ],
      explanation: "tend = 倾向于，往往会"
    },
    logic: {
      premise: "事物有其内在倾向",
      feature: "朝着某个方向发展或表现出某种特征",
      result: "呈现出某种趋势或习惯",
      essence: "内在倾向导致的发展方向"
    },
    usage: [
      {
        context: "倾向于",
        example: "I tend to agree with you.",
        explanation: "我倾向于同意你的看法"
      },
      {
        context: "趋向",
        example: "Prices tend to rise in winter.",
        explanation: "物价往往在冬天上涨"
      }
    ],
    distinction: [
      { word: "incline", essence: "使倾向于（心理）" },
      { word: "trend", essence: "趋势（名词）" },
      { word: "tend", essence: "倾向于（动词，倾向性）" }
    ],
    memory: {
      methods: ["词根：tend = extend（伸展）的倾向", "联想：tend = tendency（倾向）的动词"],
      visualHint: "一个箭头指向某个方向，表示倾向"
    },
    pitfalls: ["tend to do 是常用搭配", "注意与 tend（照料）区分"],
    summary: "tend = 倾向于，往往会，趋向"
  },
  {
    word: "crude",
    partOfSpeech: "adj",
    phonetic: { uk: "/kruːd/", us: "/kruːd/" },
    root: {
      components: [
        { part: "crude", meaning: "天然的，未加工的", origin: "拉丁语 crudus（生的）" }
      ],
      explanation: "crude = 未加工的，粗糙的，粗俗的"
    },
    logic: {
      premise: "事物处于原始状态",
      feature: "未经提炼、加工或修饰",
      result: "粗糙、简陋或不精致",
      essence: "原始未加工的状态"
    },
    usage: [
      {
        context: "原油",
        example: "crude oil",
        explanation: "原油"
      },
      {
        context: "粗糙的",
        example: "a crude drawing",
        explanation: "一幅粗糙的画"
      },
      {
        context: "粗俗的",
        example: "crude language",
        explanation: "粗俗的语言"
      }
    ],
    distinction: [
      { word: "raw", essence: "生的，未加工的" },
      { word: "rough", essence: "粗糙的（手感）" },
      { word: "crude", essence: "未加工的，粗俗的" }
    ],
    memory: {
      methods: ["联想：crude = rude（粗鲁的）前面加 c", "谐音：'crude' 像 '可入的'，原油可直接入口？不对，是未提炼的"],
      visualHint: "刚挖出来的原油，黑乎乎未提炼"
    },
    pitfalls: ["crude oil 是'原油'", "可指人'粗俗无礼'"],
    summary: "crude = 未加工的，粗糙的，粗俗的"
  },
  {
    word: "halt",
    partOfSpeech: "v",
    phonetic: { uk: "/hɔːlt/", us: "/hɔːlt/" },
    root: {
      components: [
        { part: "halt", meaning: "停止", origin: "德语 halten（停止）" }
      ],
      explanation: "halt = 停止，止步"
    },
    logic: {
      premise: "某事物正在运动或进行中",
      feature: "突然或命令式地停止",
      result: "完全停下，不再继续",
      essence: "突然完全的停止"
    },
    usage: [
      {
        context: "停止",
        example: "The train came to a halt.",
        explanation: "火车停了下来"
      },
      {
        context: "使停止",
        example: "Work was halted by the strike.",
        explanation: "工作因罢工而停止"
      }
    ],
    distinction: [
      { word: "stop", essence: "停止（最常用）" },
      { word: "cease", essence: "停止（正式）" },
      { word: "halt", essence: "止步，停止（突然、命令式）" }
    ],
    memory: {
      methods: ["联想：'halt' 像喊声'停！'", "谐音：'halt' 像 '嚯停'"],
      visualHint: "交通警察举手，车辆急刹停止"
    },
    pitfalls: ["halt 可作名词和动词", "come to a halt 是常见搭配"],
    summary: "halt = 停止，止步，使停止"
  },
  {
    word: "eardrum",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈɪədrʌm/", us: "/ˈɪrdrʌm/" },
    root: {
      components: [
        { part: "ear", meaning: "耳朵", origin: "" },
        { part: "drum", meaning: "鼓", origin: "" }
      ],
      explanation: "eardrum = 耳鼓，鼓膜"
    },
    logic: {
      premise: "耳朵内部有薄膜结构",
      feature: "形状像鼓面，能振动",
      result: "传递声音振动到内耳",
      essence: "耳朵里的'鼓面'，传声薄膜"
    },
    usage: [
      {
        context: "医学",
        example: "a perforated eardrum",
        explanation: "鼓膜穿孔"
      }
    ],
    distinction: [
      { word: "ear", essence: "耳朵（整体）" },
      { word: "eardrum", essence: "鼓膜（具体部位）" }
    ],
    memory: {
      methods: ["合成词：ear（耳朵）+ drum（鼓）", "联想：耳膜像小鼓一样振动"],
      visualHint: "耳朵内部，一层薄膜像小鼓皮"
    },
    pitfalls: ["医学专用词", "perforated eardrum = 鼓膜穿孔"],
    summary: "eardrum = 鼓膜，耳膜"
  },
  {
    word: "invigilator",
    partOfSpeech: "n",
    phonetic: { uk: "/ɪnˈvɪdʒɪleɪtə(r)/", us: "/ɪnˈvɪdʒɪleɪtər/" },
    root: {
      components: [
        { part: "in-", meaning: "在内", origin: "" },
        { part: "vigil", meaning: "看守，警戒", origin: "拉丁语 vigilare" },
        { part: "-ator", meaning: "人，名词后缀", origin: "" }
      ],
      explanation: "invigilator = 监视者 → 监考人"
    },
    logic: {
      premise: "考试需要维持秩序",
      feature: "专人负责监视考场",
      result: "防止作弊，确保公平",
      essence: "考试中的看守监督者"
    },
    usage: [
      {
        context: "考试监考",
        example: "The invigilator walked around the exam hall.",
        explanation: "监考人在考场里走来走去"
      }
    ],
    distinction: [
      { word: "supervisor", essence: "监督者（通用）" },
      { word: "monitor", essence: "监视者，班长" },
      { word: "invigilator", essence: "监考人（专指考试）" }
    ],
    memory: {
      methods: ["词根：vigil = vigilant（警惕的）", "联想：vigil（守夜）+ ator = 看守的人"],
      visualHint: "考场里严肃走动、防止作弊的老师"
    },
    pitfalls: ["主要用于英式英语，美式常用 proctor", "考试场景专用词"],
    summary: "invigilator = 监考人（英式英语）"
  },
  {
    word: "conflate",
    partOfSpeech: "v",
    phonetic: { uk: "/kənˈfleɪt/", us: "/kənˈfleɪt/" },
    root: {
      components: [
        { part: "con-", meaning: "一起", origin: "" },
        { part: "flat", meaning: "吹，气流", origin: "拉丁语 flare" }
      ],
      explanation: "conflate = 吹到一起 → 合并，混为一谈"
    },
    logic: {
      premise: "两个或多个不同事物",
      feature: "被错误地视为同一事物",
      result: "概念混淆，界限模糊",
      essence: "将不同事物错误合并"
    },
    usage: [
      {
        context: "混淆概念",
        example: "Don't conflate opinion with fact.",
        explanation: "不要把观点和事实混为一谈"
      }
    ],
    distinction: [
      { word: "combine", essence: "结合（正确合并）" },
      { word: "merge", essence: "合并（平等融合）" },
      { word: "conflate", essence: "混为一谈（常指错误）" }
    ],
    memory: {
      methods: ["词根：con（一起）+ flat（吹）= 吹到一起", "联想：inflate（充气）的兄弟，都涉及'气/吹'"],
      visualHint: "两个气球被吹到一起，黏在一起分不清"
    },
    pitfalls: ["conflate 常带有'错误地'含义", "学术写作中常用"],
    summary: "conflate = 合并，混为一谈（常指错误地将不同事物等同）"
  },
  {
    word: "steadfast",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈstedfɑːst/", us: "/ˈstedfæst/" },
    root: {
      components: [
        { part: "stead", meaning: "位置，立足点", origin: "古英语 stede" },
        { part: "fast", meaning: "牢固的", origin: "" }
      ],
      explanation: "steadfast = 立足牢固的 → 坚定的，不动摇的"
    },
    logic: {
      premise: "面对压力或诱惑",
      feature: "立场稳固，不改变",
      result: "忠诚可靠，始终如一",
      essence: "如磐石般坚定的立场"
    },
    usage: [
      {
        context: "忠诚的",
        example: "a steadfast friend",
        explanation: "一位忠诚的朋友"
      },
      {
        context: "坚定的",
        example: "remain steadfast in one's beliefs",
        explanation: "坚守自己的信仰"
      }
    ],
    distinction: [
      { word: "loyal", essence: "忠诚的" },
      { word: "firm", essence: "坚定的" },
      { word: "steadfast", essence: "坚定不移的（文学性）" }
    ],
    memory: {
      methods: ["stead（立足点）+ fast（牢固）= 站稳脚跟", "联想：stand fast（站稳）的变体"],
      visualHint: "大风中屹立不倒的大树，根扎得深"
    },
    pitfalls: ["steadfast 是文学性较强的词", "强调不动摇的忠诚"],
    summary: "steadfast = 坚定的，忠诚的，不动摇的"
  },
  {
    word: "forbid",
    partOfSpeech: "v",
    phonetic: { uk: "/fəˈbɪd/", us: "/fərˈbɪd/" },
    root: {
      components: [
        { part: "for-", meaning: "反对，阻止", origin: "" },
        { part: "bid", meaning: "命令，请求", origin: "古英语 biddan" }
      ],
      explanation: "forbid = 反对的命令 → 禁止"
    },
    logic: {
      premise: "某行为不被允许",
      feature: "权威方下达禁令",
      result: "严禁执行，违者受罚",
      essence: "权威性的禁止命令"
    },
    usage: [
      {
        context: "禁止",
        example: "Smoking is forbidden here.",
        explanation: "此处禁止吸烟"
      },
      {
        context: "阻止",
        example: "God forbid!",
        explanation: "但愿不会如此！"
      }
    ],
    distinction: [
      { word: "ban", essence: "禁止（官方明令）" },
      { word: "prohibit", essence: "禁止（正式法律）" },
      { word: "forbid", essence: "禁止（权威命令，常用）" }
    ],
    memory: {
      methods: ["联想：for（为了）+ bid（出价）≠ 禁止", "forbid 过去式 forbade，过去分词 forbidden"],
      visualHint: "红色禁止标志，大大的'禁止'字样"
    },
    pitfalls: ["过去式 forbade，过去分词 forbidden", "God forbid 是常用感叹语"],
    summary: "forbid = 禁止，不准，阻止"
  },
  {
    word: "pre-requisite",
    partOfSpeech: "n",
    phonetic: { uk: "/priːˈrekwɪzɪt/", us: "/priːˈrekwɪzɪt/" },
    root: {
      components: [
        { part: "pre-", meaning: "之前", origin: "" },
        { part: "re-", meaning: "一再", origin: "" },
        { part: "quisit", meaning: "寻求，要求", origin: "拉丁语 quaerere" }
      ],
      explanation: "pre-requisite = 事先要求的 → 先决条件"
    },
    logic: {
      premise: "要进行某事",
      feature: "必须先满足某些条件",
      result: "这些条件成为门槛",
      essence: "事先必须具备的条件"
    },
    usage: [
      {
        context: "先修课程",
        example: "A degree is a prerequisite for this job.",
        explanation: "学位是这份工作的先决条件"
      }
    ],
    distinction: [
      { word: "requirement", essence: "要求（一般性）" },
      { word: "condition", essence: "条件" },
      { word: "prerequisite", essence: "先决条件（必须先满足）" }
    ],
    memory: {
      methods: ["pre（先）+ requisite（要求的）= 先决条件", "同根词：require（要求）"],
      visualHint: "一道门前有台阶，必须先上台阶才能进门"
    },
    pitfalls: ["常缩写为 prereq", "强调'必须先完成'的条件"],
    summary: "pre-requisite = 先决条件，前提"
  },
  {
    word: "assert",
    partOfSpeech: "v",
    phonetic: { uk: "/əˈsɜːt/", us: "/əˈsɜːrt/" },
    root: {
      components: [
        { part: "as-", meaning: "朝向", origin: "" },
        { part: "sert", meaning: "加入，放置", origin: "拉丁语 serere" }
      ],
      explanation: "assert = 坚定地放置 → 断言，坚持"
    },
    logic: {
      premise: "某人有明确的观点或立场",
      feature: "坚定有力地表达出来",
      result: "维护主张，确立权威",
      essence: "坚定有力地声明"
    },
    usage: [
      {
        context: "断言",
        example: "He asserted his innocence.",
        explanation: "他坚称自己无罪"
      },
      {
        context: "维护",
        example: "assert one's authority",
        explanation: "维护自己的权威"
      }
    ],
    distinction: [
      { word: "claim", essence: "声称（不一定有证据）" },
      { word: "declare", essence: "宣布（正式）" },
      { word: "assert", essence: "断言，坚称（强调信心）" }
    ],
    memory: {
      methods: ["词根：as + sert（放置）= 坚定地放", "联想：assert = a + certain（确定的）"],
      visualHint: "站得笔直，手指前方，坚定地说出自己的观点"
    },
    pitfalls: ["assert oneself = 维护自己的权利", "assert 强调信心十足"],
    summary: "assert = 断言，坚称，维护（权利）"
  },
  {
    word: "burgeon",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈbɜːdʒən/", us: "/ˈbɜːrdʒən/" },
    root: {
      components: [
        { part: "burgeon", meaning: "发芽，萌芽", origin: "古法语 burjon" }
      ],
      explanation: "burgeon = 发芽 → 迅速发展，激增"
    },
    logic: {
      premise: "如植物发芽般",
      feature: "快速生长，迅速扩展",
      result: "大量涌现，蓬勃发展",
      essence: "如萌芽般迅速成长"
    },
    usage: [
      {
        context: "迅速发展",
        example: "The industry is burgeoning.",
        explanation: "这个行业正在蓬勃发展"
      },
      {
        context: "激增",
        example: "a burgeoning population",
        explanation: "激增的人口"
      }
    ],
    distinction: [
      { word: "grow", essence: "成长（一般性）" },
      { word: "flourish", essence: "繁荣，兴旺" },
      { word: "burgeon", essence: "迅速发展，激增（如萌芽）" }
    ],
    memory: {
      methods: ["联想：burger（汉堡）on（在...上）→ 汉堡店遍地开花", "词源：萌芽 → 快速发展"],
      visualHint: "春天里，种子发芽，迅速长成嫩芽"
    },
    pitfalls: ["burgeon 是文学性词汇", "强调'如萌芽般的快速增长'"],
    summary: "burgeon = 迅速发展，激增，萌芽"
  },
  {
    word: "proponent",
    partOfSpeech: "n",
    phonetic: { uk: "/prəˈpəʊnənt/", us: "/prəˈpoʊnənt/" },
    root: {
      components: [
        { part: "pro-", meaning: "向前", origin: "" },
        { part: "pon", meaning: "放置", origin: "拉丁语 ponere" },
        { part: "-ent", meaning: "人，名词后缀", origin: "" }
      ],
      explanation: "proponent = 向前放置的人 → 提出者，支持者"
    },
    logic: {
      premise: "某个观点、计划或政策",
      feature: "有人公开支持并推动",
      result: "成为该立场的代言人",
      essence: "主动提出并支持某事的人"
    },
    usage: [
      {
        context: "支持者",
        example: "a leading proponent of the new policy",
        explanation: "新政策的主要支持者"
      }
    ],
    distinction: [
      { word: "supporter", essence: "支持者（一般性）" },
      { word: "advocate", essence: "倡导者（积极推广）" },
      { word: "proponent", essence: "支持者（提出并支持）" }
    ],
    memory: {
      methods: ["词根：pro（向前）+ pon（放）= 向前提出的人", "反义词：opponent（反对者）"],
      visualHint: "举手发言，站起来支持某方案的人"
    },
    pitfalls: ["proponent 的反义词是 opponent", "常指政策/观点的支持者"],
    summary: "proponent = 支持者，提倡者，提出者"
  },
  {
    word: "noticeably",
    partOfSpeech: "adv",
    phonetic: { uk: "/ˈnəʊtɪsəbli/", us: "/ˈnoʊtɪsəbli/" },
    root: {
      components: [
        { part: "notice", meaning: "注意", origin: "" },
        { part: "-able", meaning: "能够...的", origin: "" },
        { part: "-ly", meaning: "副词后缀", origin: "" }
      ],
      explanation: "noticeably = 能够被注意到地 → 明显地"
    },
    logic: {
      premise: "某事物有变化或特征",
      feature: "足够显著，能被注意到",
      result: "不费力就能观察到",
      essence: "显著到容易被察觉的程度"
    },
    usage: [
      {
        context: "明显地",
        example: "She was noticeably tired.",
        explanation: "她明显很疲惫"
      }
    ],
    distinction: [
      { word: "obviously", essence: "明显地（强调清楚）" },
      { word: "clearly", essence: "清楚地" },
      { word: "noticeably", essence: "显著地（能被注意到）" }
    ],
    memory: {
      methods: ["notice（注意）+ ably = 能被注意到的", "副词形式：noticeable 的副词"],
      visualHint: "一个人打哈欠，周围人都注意到了"
    },
    pitfalls: ["noticeably 修饰形容词或动词", "强调'能被察觉到'"],
    summary: "noticeably = 显著地，明显地，引人注目地"
  },
  {
    word: "reintroduce",
    partOfSpeech: "v",
    phonetic: { uk: "/ˌriːɪntrəˈdjuːs/", us: "/ˌriːɪntrəˈduːs/" },
    root: {
      components: [
        { part: "re-", meaning: "再次", origin: "" },
        { part: "introduce", meaning: "引入，介绍", origin: "" }
      ],
      explanation: "reintroduce = 再次引入 → 重新引入，恢复"
    },
    logic: {
      premise: "某事物曾经存在后被移除",
      feature: "再次将其引入",
      result: "使其重新出现或流通",
      essence: "让消失的事物回归"
    },
    usage: [
      {
        context: "重新引入物种",
        example: "The wolves were reintroduced to the park.",
        explanation: "狼被重新引入公园"
      },
      {
        context: "恢复",
        example: "reintroduce old traditions",
        explanation: "恢复古老传统"
      }
    ],
    distinction: [
      { word: "introduce", essence: "引入（第一次）" },
      { word: "restore", essence: "恢复（到原状）" },
      { word: "reintroduce", essence: "重新引入" }
    ],
    memory: {
      methods: ["re（再次）+ introduce（引入）", "联想：introduce 的'再来一次'"],
      visualHint: "放归大自然的动物，再次回到原本的环境"
    },
    pitfalls: ["reintroduce 强调'再次'引入", "常用于物种保护、政策恢复"],
    summary: "reintroduce = 重新引入，恢复"
  },
  {
    word: "salvage",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈsælvɪdʒ/", us: "/ˈsælvɪdʒ/" },
    root: {
      components: [
        { part: "salv-", meaning: "救", origin: "拉丁语 salvare（拯救）" },
        { part: "-age", meaning: "名词/动词后缀", origin: "" }
      ],
      explanation: "salvage = 抢救 → 打捞，挽救"
    },
    logic: {
      premise: "某物处于危险或废弃状态",
      feature: "努力从中抢救出有价值的部分",
      result: "挽回损失，获得剩余价值",
      essence: "从危机中抢救价值"
    },
    usage: [
      {
        context: "打捞",
        example: "salvage the sunken ship",
        explanation: "打捞沉船"
      },
      {
        context: "挽救",
        example: "We managed to salvage something from the failure.",
        explanation: "我们设法从失败中挽救了一些东西"
      }
    ],
    distinction: [
      { word: "save", essence: "拯救（一般性）" },
      { word: "rescue", essence: "营救（人或动物）" },
      { word: "salvage", essence: "打捞，挽救（从废墟/失败中）" }
    ],
    memory: {
      methods: ["词根：salv（救）= salvation（拯救）", "联想：salvage 比 save 更艰难"],
      visualHint: "从沉没的船里抢救货物"
    },
    pitfalls: ["salvage 强调从灾难/废墟中抢救", "可作名词（打捞物）和动词"],
    summary: "salvage = 打捞，抢救，挽救（从困境中）"
  },
  {
    word: "shed",
    partOfSpeech: "v",
    phonetic: { uk: "/ʃed/", us: "/ʃed/" },
    root: {
      components: [
        { part: "shed", meaning: "脱落，摆脱", origin: "古英语 sceadan" }
      ],
      explanation: "shed = 脱落，摆脱，流出"
    },
    logic: {
      premise: "某物附着于主体",
      feature: "自然或主动脱离",
      result: "摆脱负担或显露内在",
      essence: "脱离、释放的过程"
    },
    usage: [
      {
        context: "脱落",
        example: "The snake shed its skin.",
        explanation: "蛇蜕皮了"
      },
      {
        context: "摆脱",
        example: "shed light on the problem",
        explanation: "阐明问题（把光洒在问题上）"
      },
      {
        context: "流泪",
        example: "shed tears",
        explanation: "流泪"
      }
    ],
    distinction: [
      { word: "lose", essence: "失去（非主动）" },
      { word: "discard", essence: "丢弃（主动扔掉）" },
      { word: "shed", essence: "脱落，摆脱（自然或主动）" }
    ],
    memory: {
      methods: ["联想：蛇 shed skin（蜕皮）", "常用搭配：shed light on（阐明）"],
      visualHint: "蛇蜕皮的瞬间，旧皮脱落"
    },
    pitfalls: ["shed 过去式和过去分词都是 shed", "shed light on 是非常常用的短语"],
    summary: "shed = 脱落，摆脱，流出（光、泪等）"
  },
  {
    word: "waxy",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈwæksi/", us: "/ˈwæksi/" },
    root: {
      components: [
        { part: "wax", meaning: "蜡", origin: "" },
        { part: "-y", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "waxy = 像蜡一样的"
    },
    logic: {
      premise: "某物表面特征",
      feature: "光滑、有光泽、质地像蜡",
      result: "呈现蜡状的质感或外观",
      essence: "蜡般的质感"
    },
    usage: [
      {
        context: "蜡质的",
        example: "waxy leaves",
        explanation: "蜡质的叶子"
      },
      {
        context: "面色苍白的",
        example: "a waxy complexion",
        explanation: "蜡黄/苍白的面色"
      }
    ],
    distinction: [
      { word: "smooth", essence: "光滑的" },
      { word: "shiny", essence: "有光泽的" },
      { word: "waxy", essence: "蜡质的（特定质感）" }
    ],
    memory: {
      methods: ["wax（蜡）+ y = 像蜡的", "联想：苹果表面的蜡感"],
      visualHint: "打蜡的苹果，表面光滑有光泽"
    },
    pitfalls: ["waxy complexion 指'蜡黄的脸色'，常形容病态", "可形容植物表面的蜡质层"],
    summary: "waxy = 蜡质的，光滑的，苍白的"
  },
  {
    word: "autumn",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈɔːtəm/", us: "/ˈɔːtəm/" },
    root: {
      components: [
        { part: "autumn", meaning: "秋天", origin: "拉丁语 autumnus" }
      ],
      explanation: "autumn = 秋天，秋季"
    },
    logic: {
      premise: "一年中的季节",
      feature: "夏去冬来，树叶变色飘落",
      result: "收获季节，天气转凉",
      essence: "夏秋之交，万物凋零的季节"
    },
    usage: [
      {
        context: "季节",
        example: "in the autumn of 2020",
        explanation: "在2020年秋天"
      },
      {
        context: "晚年",
        example: "in the autumn of one's life",
        explanation: "在某人的晚年"
      }
    ],
    distinction: [
      { word: "fall", essence: "秋天（美式英语）" },
      { word: "autumn", essence: "秋天（英式/正式）" }
    ],
    memory: {
      methods: ["英式 autumn = 美式 fall", "联想：Au（金）tumn，金秋时节"],
      visualHint: "金黄的落叶，满地的枫叶"
    },
    pitfalls: ["autumn 是英式英语，fall 是美式", "the autumn of one's life = 晚年"],
    summary: "autumn = 秋天，秋季（英式）"
  },
  {
    word: "shelter",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈʃeltə(r)/", us: "/ˈʃeltər/" },
    root: {
      components: [
        { part: "shelter", meaning: "遮蔽，庇护", origin: "中古英语 sheltron" }
      ],
      explanation: "shelter = 庇护所，遮蔽，避难"
    },
    logic: {
      premise: "面临危险或恶劣天气",
      feature: "提供保护性的遮蔽空间",
      result: "免受伤害，安全栖身",
      essence: "提供保护和安全的场所"
    },
    usage: [
      {
        context: "避难所",
        example: "a shelter for homeless people",
        explanation: "无家可归者的收容所"
      },
      {
        context: "遮蔽",
        example: "We took shelter from the rain.",
        explanation: "我们避雨"
      }
    ],
    distinction: [
      { word: "house", essence: "房子（居住）" },
      { word: "refuge", essence: "避难所（安全）" },
      { word: "shelter", essence: "庇护所（遮蔽保护）" }
    ],
    memory: {
      methods: ["谐音：'shelter' 像 '舍它'，舍弃它去避难", "联想：shell（壳）+ ter = 像壳一样保护"],
      visualHint: "暴风雨中，一间小屋提供庇护"
    },
    pitfalls: ["shelter 可作名词和动词", "take shelter from = 躲避..."],
    summary: "shelter = 庇护所，遮蔽，避难"
  },
  {
    word: "efficacy",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈefɪkəsi/", us: "/ˈefɪkəsi/" },
    root: {
      components: [
        { part: "effic-", meaning: "做出，生效", origin: "拉丁语 efficere" },
        { part: "-acy", meaning: "名词后缀，性质", origin: "" }
      ],
      explanation: "efficacy = 生效的性质 → 功效，效力"
    },
    logic: {
      premise: "某物（尤指药物/方法）被使用",
      feature: "产生预期效果的能力",
      result: "有效达到目的",
      essence: "产生预期效果的能力"
    },
    usage: [
      {
        context: "药效",
        example: "the efficacy of the new drug",
        explanation: "新药的功效"
      }
    ],
    distinction: [
      { word: "effectiveness", essence: "有效性（实际效果）" },
      { word: "efficiency", essence: "效率（投入产出比）" },
      { word: "efficacy", essence: "功效（理想状态下的效力）" }
    ],
    memory: {
      methods: ["词根：effic = effect（效果）", "联想：efficacy 比 efficiency 多一个 a（效果）"],
      visualHint: "药物说明书上的'功效'说明"
    },
    pitfalls: ["efficacy 常指药物/治疗的功效", "与 efficiency（效率）区分"],
    summary: "efficacy = 功效，效力（尤指药物）"
  },
  {
    word: "regulate",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈreɡjuleɪt/", us: "/ˈreɡjuleɪt/" },
    root: {
      components: [
        { part: "regul-", meaning: "规则，统治", origin: "拉丁语 regula（规则）" },
        { part: "-ate", meaning: "动词后缀", origin: "" }
      ],
      explanation: "regulate = 使符合规则 → 管理，调节，控制"
    },
    logic: {
      premise: "某事物需要秩序或标准",
      feature: "建立规则并进行管理",
      result: "使其有序运行，符合规范",
      essence: "通过规则进行管理和调节"
    },
    usage: [
      {
        context: "管理",
        example: "The industry is strictly regulated.",
        explanation: "这个行业受到严格监管"
      },
      {
        context: "调节",
        example: "regulate body temperature",
        explanation: "调节体温"
      }
    ],
    distinction: [
      { word: "control", essence: "控制（直接）" },
      { word: "manage", essence: "管理（处理事务）" },
      { word: "regulate", essence: "监管，调节（按规则）" }
    ],
    memory: {
      methods: ["词根：regul = rule（规则）", "同根词：regular（规则的）"],
      visualHint: "恒温器自动调节温度"
    },
    pitfalls: ["regulate 强调'按规则管理'", "可用于生理/机械调节"],
    summary: "regulate = 管理，调节，控制（按规则）"
  },
  {
    word: "scurry",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈskʌri/", us: "/ˈskɜːri/" },
    root: {
      components: [
        { part: "scur-", meaning: "急跑", origin: "" },
        { part: "-ry", meaning: "动词后缀", origin: "" }
      ],
      explanation: "scurry = 急促奔跑，小步快跑"
    },
    logic: {
      premise: "需要快速移动",
      feature: "小步急促地跑，匆忙",
      result: "迅速到达目的地或躲藏",
      essence: "匆忙小跑的状态"
    },
    usage: [
      {
        context: "小跑",
        example: "The mouse scurried across the floor.",
        explanation: "老鼠小跑穿过地板"
      },
      {
        context: "匆忙",
        example: "People scurried to find shelter.",
        explanation: "人们匆忙寻找避难所"
      }
    ],
    distinction: [
      { word: "run", essence: "跑（一般性）" },
      { word: "rush", essence: "冲，匆忙" },
      { word: "scurry", essence: "小步快跑（小动物/匆忙）" }
    ],
    memory: {
      methods: ["谐音：'scurry' 像 '死跑'，拼命跑", "联想：scurry = hurry + scuttle"],
      visualHint: "小老鼠快速小跑，尾巴摇摆"
    },
    pitfalls: ["scurry 常形容小动物或人匆忙小跑", "带有'慌乱'的感觉"],
    summary: "scurry = 小步快跑，急促奔跑"
  },
  {
    word: "archipelago",
    partOfSpeech: "n",
    phonetic: { uk: "/ˌɑːkɪˈpeləɡəʊ/", us: "/ˌɑːrkɪˈpeləɡoʊ/" },
    root: {
      components: [
        { part: "archi-", meaning: "主要的，首席的", origin: "希腊语 arkhi-" },
        { part: "pelago", meaning: "海", origin: "希腊语 pelagos" }
      ],
      explanation: "archipelago = 主海 → 群岛"
    },
    logic: {
      premise: "海洋中有一群岛屿",
      feature: "岛屿密集分布，彼此靠近",
      result: "形成岛群或列岛",
      essence: "海洋中的岛群"
    },
    usage: [
      {
        context: "群岛",
        example: "the Greek archipelago",
        explanation: "希腊群岛"
      }
    ],
    distinction: [
      { word: "island", essence: "岛屿（单个）" },
      { word: "archipelago", essence: "群岛，列岛（一群）" }
    ],
    memory: {
      methods: ["词根：archi（主要的）+ pelago（海）", "联想：爱琴海上的希腊群岛"],
      visualHint: "海面上散布的许多小岛"
    },
    pitfalls: ["复数 archipelagos 或 archipelagoes", "可指地理上的群岛，也用于比喻"],
    summary: "archipelago = 群岛，列岛"
  },
  {
    word: "aground",
    partOfSpeech: "adv",
    phonetic: { uk: "/əˈɡraʊnd/", us: "/əˈɡraʊnd/" },
    root: {
      components: [
        { part: "a-", meaning: "在...上", origin: "" },
        { part: "ground", meaning: "地面，海底", origin: "" }
      ],
      explanation: "aground = 在地面上 → 搁浅"
    },
    logic: {
      premise: "船只原本在水中航行",
      feature: "触到水底的地面",
      result: "无法移动，被困住",
      essence: "船触底搁浅的状态"
    },
    usage: [
      {
        context: "搁浅",
        example: "The ship ran aground on a sandbank.",
        explanation: "船在沙洲上搁浅了"
      }
    ],
    distinction: [
      { word: "stranded", essence: "被困（可以指人或物）" },
      { word: "aground", essence: "搁浅（专指船只）" }
    ],
    memory: {
      methods: ["a + ground = 在地面上了（船不应该在地面）", "联想：ground = 海底"],
      visualHint: "船斜靠在沙滩上，不能动弹"
    },
    pitfalls: ["常用搭配：run aground（搁浅）", "只用于船只"],
    summary: "aground = 搁浅的（船只）"
  },
  {
    word: "tendency",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈtendənsi/", us: "/ˈtendənsi/" },
    root: {
      components: [
        { part: "tend", meaning: "倾向，趋向", origin: "" },
        { part: "-ency", meaning: "名词后缀", origin: "" }
      ],
      explanation: "tendency = 倾向，趋势，习性"
    },
    logic: {
      premise: "事物有特定的发展方向",
      feature: "呈现出稳定的趋势或偏好",
      result: "可预测的行为或变化模式",
      essence: "内在的倾向性"
    },
    usage: [
      {
        context: "趋势",
        example: "a tendency towards smaller families",
        explanation: "家庭规模变小的趋势"
      },
      {
        context: "倾向",
        example: "She has a tendency to talk too much.",
        explanation: "她有说话太多的倾向"
      }
    ],
    distinction: [
      { word: "trend", essence: "趋势（社会/时尚）" },
      { word: "inclination", essence: "倾向（心理偏好）" },
      { word: "tendency", essence: "倾向，趋势（通用）" }
    ],
    memory: {
      methods: ["tend（倾向）+ ency = 倾向性", "have a tendency to do = 倾向于做"],
      visualHint: "一个箭头指向某个方向"
    },
    pitfalls: ["常用搭配：have a tendency to", "tendency 可指人或事物的趋势"],
    summary: "tendency = 倾向，趋势，习性"
  },
  {
    word: "graphically",
    partOfSpeech: "adv",
    phonetic: { uk: "/ˈɡræfɪkli/", us: "/ˈɡræfɪkli/" },
    root: {
      components: [
        { part: "graph", meaning: "写，画", origin: "希腊语 graphein" },
        { part: "-ic", meaning: "形容词后缀", origin: "" },
        { part: "-ally", meaning: "副词后缀", origin: "" }
      ],
      explanation: "graphically = 以图画方式 → 生动地，形象地"
    },
    logic: {
      premise: "描述需要被理解",
      feature: "用图像或生动的方式呈现",
      result: "清晰直观，印象深刻",
      essence: "如图像般清晰生动的呈现"
    },
    usage: [
      {
        context: "生动地",
        example: "The book describes the war graphically.",
        explanation: "这本书生动地描述了战争"
      },
      {
        context: "用图表",
        example: "The data is presented graphically.",
        explanation: "数据以图表形式呈现"
      }
    ],
    distinction: [
      { word: "vividly", essence: "生动地（想象）" },
      { word: "clearly", essence: "清楚地" },
      { word: "graphically", essence: "形象地（如图像般）" }
    ],
    memory: {
      methods: ["graph（图表）+ ically = 像图表一样清晰", "同根词：graphic（图形的）"],
      visualHint: "复杂的数据变成清晰的图表"
    },
    pitfalls: ["graphically 可指'形象地'或'用图表'", "有时含'赤裸裸、露骨地'之意"],
    summary: "graphically = 生动地，形象地，用图表地"
  },
  {
    word: "trivialize",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈtrɪviəlaɪz/", us: "/ˈtrɪviəlaɪz/" },
    root: {
      components: [
        { part: "trivia", meaning: "琐事，小事", origin: "拉丁语 trivium" },
        { part: "-lize", meaning: "使...化", origin: "" }
      ],
      explanation: "trivialize = 使变得琐碎 → 轻视，贬低"
    },
    logic: {
      premise: "某事其实很重要",
      feature: "被当作微不足道的小事",
      result: "重要性被低估，被轻视",
      essence: "将重要事物贬为琐碎"
    },
    usage: [
      {
        context: "轻视",
        example: "Don't trivialize her concerns.",
        explanation: "不要轻视她的担忧"
      }
    ],
    distinction: [
      { word: "ignore", essence: "忽视" },
      { word: "underestimate", essence: "低估" },
      { word: "trivialize", essence: "轻视，使显得琐碎" }
    ],
    memory: {
      methods: ["trivia（琐事）+ lize = 使成琐事", "联想：把大事说成小事"],
      visualHint: "一个人摆摆手说'这没什么大不了'"
    },
    pitfalls: ["trivialize 带有贬义", "指把重要的事说得不重要"],
    summary: "trivialize = 轻视，贬低，使显得琐碎"
  },
  {
    word: "bravery",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈbreɪvəri/", us: "/ˈbreɪvəri/" },
    root: {
      components: [
        { part: "brave", meaning: "勇敢的", origin: "" },
        { part: "-ery", meaning: "名词后缀", origin: "" }
      ],
      explanation: "bravery = 勇敢，勇气"
    },
    logic: {
      premise: "面临危险或恐惧",
      feature: "不逃避，挺身而出",
      result: "克服恐惧，完成艰难之事",
      essence: "面对恐惧的勇气"
    },
    usage: [
      {
        context: "勇气",
        example: "He showed great bravery in the rescue.",
        explanation: "他在救援中表现出极大的勇气"
      }
    ],
    distinction: [
      { word: "courage", essence: "勇气（最常用）" },
      { word: "valor", essence: "英勇（战场）" },
      { word: "bravery", essence: "勇敢，勇气（行为表现）" }
    ],
    memory: {
      methods: ["brave（勇敢的）+ ry = 勇敢", "联想：brave 的名词形式"],
      visualHint: "消防员冲进火场的背影"
    },
    pitfalls: ["bravery 和 courage 常可互换", "bravery 更强调行为上的表现"],
    summary: "bravery = 勇敢，勇气"
  },
  {
    word: "dispose",
    partOfSpeech: "v",
    phonetic: { uk: "/dɪˈspəʊz/", us: "/dɪˈspoʊz/" },
    root: {
      components: [
        { part: "dis-", meaning: "分开", origin: "" },
        { part: "pose", meaning: "放置", origin: "拉丁语 ponere" }
      ],
      explanation: "dispose = 分开放置 → 处理，安排，使倾向于"
    },
    logic: {
      premise: "某物不再需要或需要安排",
      feature: "将其放置到合适的位置",
      result: "处理掉或安排妥当",
      essence: "妥善安排或清除"
    },
    usage: [
      {
        context: "处理",
        example: "dispose of the waste",
        explanation: "处理垃圾"
      },
      {
        context: "使倾向于",
        example: "His attitude disposed me to like him.",
        explanation: "他的态度使我倾向于喜欢他"
      }
    ],
    distinction: [
      { word: "throw away", essence: "扔掉" },
      { word: "deal with", essence: "处理" },
      { word: "dispose", essence: "处理，安排（正式）" }
    ],
    memory: {
      methods: ["dis（分开）+ pose（放）= 分开放置", "常用短语：dispose of（处理掉）"],
      visualHint: "把垃圾分类投放到不同的垃圾桶"
    },
    pitfalls: ["dispose of = 处理掉，扔掉", "dispose 作'使倾向于'时常用被动"],
    summary: "dispose = 处理，安排，使倾向于"
  },
  {
    word: "discharge",
    partOfSpeech: "v",
    phonetic: { uk: "/dɪsˈtʃɑːdʒ/", us: "/dɪsˈtʃɑːrdʒ/" },
    root: {
      components: [
        { part: "dis-", meaning: "离开，去掉", origin: "" },
        { part: "charge", meaning: "装载，负责", origin: "" }
      ],
      explanation: "discharge = 卸掉负担 → 释放，排出，解雇"
    },
    logic: {
      premise: "某物被装载或承担",
      feature: "将其卸下或解除",
      result: "释放内容或解除责任",
      essence: "解除负担或释放内容"
    },
    usage: [
      {
        context: "排放",
        example: "The factory discharges waste into the river.",
        explanation: "工厂向河里排放废水"
      },
      {
        context: "出院",
        example: "The patient was discharged from hospital.",
        explanation: "病人出院了"
      },
      {
        context: "履行职责",
        example: "discharge one's duties",
        explanation: "履行职责"
      }
    ],
    distinction: [
      { word: "release", essence: "释放（人或物）" },
      { word: "emit", essence: "排放（气体等）" },
      { word: "discharge", essence: "排出，释放，解雇（多义）" }
    ],
    memory: {
      methods: ["dis（去掉）+ charge（负担）= 卸下", "联想：charge（充电）的反向操作"],
      visualHint: "打开阀门，液体从管道中排出"
    },
    pitfalls: ["discharge 多义词：排放、出院、解雇、履行职责", "注意不同语境下的含义"],
    summary: "discharge = 排放，释放，出院，解雇，履行"
  },
  {
    word: "shift",
    partOfSpeech: "v",
    phonetic: { uk: "/ʃɪft/", us: "/ʃɪft/" },
    root: {
      components: [
        { part: "shift", meaning: "移动，转变", origin: "古英语 sciftan" }
      ],
      explanation: "shift = 移动，转变，轮班"
    },
    logic: {
      premise: "事物从一种状态到另一种",
      feature: "位置、方向或状态改变",
      result: "新的状态或位置",
      essence: "位置或状态的转变"
    },
    usage: [
      {
        context: "转变",
        example: "a shift in attitude",
        explanation: "态度的转变"
      },
      {
        context: "轮班",
        example: "work the night shift",
        explanation: "上夜班"
      },
      {
        context: "移动",
        example: "Shift the sofa to the left.",
        explanation: "把沙发往左移"
      }
    ],
    distinction: [
      { word: "move", essence: "移动" },
      { word: "change", essence: "改变" },
      { word: "shift", essence: "转移，转变（位置或方向）" }
    ],
    memory: {
      methods: ["联想：键盘上的 Shift 键", "shift gears = 换挡"],
      visualHint: "汽车换挡杆移动"
    },
    pitfalls: ["shift 多义词：移动、转变、轮班", "paradigm shift = 范式转变"],
    summary: "shift = 移动，转变，轮班"
  },
  {
    word: "invade",
    partOfSpeech: "v",
    phonetic: { uk: "/ɪnˈveɪd/", us: "/ɪnˈveɪd/" },
    root: {
      components: [
        { part: "in-", meaning: "进入", origin: "" },
        { part: "vad", meaning: "走，去", origin: "拉丁语 vadere" }
      ],
      explanation: "invade = 走进去 → 入侵，侵略"
    },
    logic: {
      premise: "一方进入另一方的领地",
      feature: "未经许可强行进入",
      result: "占领或侵犯",
      essence: "强行进入他人领地"
    },
    usage: [
      {
        context: "入侵",
        example: "The army invaded the country.",
        explanation: "军队入侵了该国"
      },
      {
        context: "涌入",
        example: "Tourists invaded the small town.",
        explanation: "游客涌入小镇"
      }
    ],
    distinction: [
      { word: "attack", essence: "攻击" },
      { word: "enter", essence: "进入（中性）" },
      { word: "invade", essence: "入侵，侵犯（强行）" }
    ],
    memory: {
      methods: ["词根：in（进入）+ vad（走）", "联想：invasion（入侵）的动词"],
      visualHint: "军队越过边境，进入他国领土"
    },
    pitfalls: ["invade 强调未经许可进入", "可用于'涌入'大量人群"],
    summary: "invade = 入侵，侵略，涌入"
  },
  {
    word: "strenuously",
    partOfSpeech: "adv",
    phonetic: { uk: "/ˈstrenjuəsli/", us: "/ˈstrenjuəsli/" },
    root: {
      components: [
        { part: "strenu-", meaning: "努力的，使劲的", origin: "拉丁语 strenuus" },
        { part: "-ous", meaning: "形容词后缀", origin: "" },
        { part: "-ly", meaning: "副词后缀", origin: "" }
      ],
      explanation: "strenuously = 努力地，奋力地"
    },
    logic: {
      premise: "需要付出大量努力",
      feature: "全力以赴，毫不松懈",
      result: "达到目标或强烈反对",
      essence: "付出极大努力的程度"
    },
    usage: [
      {
        context: "极力反对",
        example: "He strenuously denied the accusations.",
        explanation: "他极力否认指控"
      },
      {
        context: "努力",
        example: "She worked strenuously to finish on time.",
        explanation: "她努力工作以按时完成"
      }
    ],
    distinction: [
      { word: "hard", essence: "努力地" },
      { word: "vigorously", essence: "精力充沛地" },
      { word: "strenuously", essence: "奋力地，极力地" }
    ],
    memory: {
      methods: ["联想：strenuous = strenuous exercise（剧烈运动）", "谐音：'死抓牛'，死死抓住努力"],
      visualHint: "运动员全力以赴冲刺终点"
    },
    pitfalls: ["strenuously deny/object = 极力否认/反对", "强调程度强烈"],
    summary: "strenuously = 努力地，奋力地，极力地"
  },
  {
    word: "corrupt",
    partOfSpeech: "adj",
    phonetic: { uk: "/kəˈrʌpt/", us: "/kəˈrʌpt/" },
    root: {
      components: [
        { part: "cor-", meaning: "完全，加强", origin: "" },
        { part: "rupt", meaning: "破，裂", origin: "拉丁语 rumpere" }
      ],
      explanation: "corrupt = 完全破裂 → 腐败的，使堕落"
    },
    logic: {
      premise: "原本好的事物",
      feature: "道德或质量完全败坏",
      result: "失去纯洁性，道德沦丧",
      essence: "道德或质量的彻底败坏"
    },
    usage: [
      {
        context: "腐败的",
        example: "a corrupt government",
        explanation: "一个腐败的政府"
      },
      {
        context: "使堕落",
        example: "Power corrupted him.",
        explanation: "权力使他腐化"
      },
      {
        context: "损坏",
        example: "The file was corrupted.",
        explanation: "文件损坏了"
      }
    ],
    distinction: [
      { word: "dishonest", essence: "不诚实的" },
      { word: "immoral", essence: "不道德的" },
      { word: "corrupt", essence: "腐败的，堕落的（程度深）" }
    ],
    memory: {
      methods: ["词根：cor + rupt（破）= 完全破裂", "同根词：bankrupt（破产），interrupt（打断）"],
      visualHint: "苹果从内部腐烂变坏"
    },
    pitfalls: ["corrupt 可作形容词和动词", "数字文件的'损坏'也用 corrupt"],
    summary: "corrupt = 腐败的，堕落的，使腐化，损坏"
  },
  {
    word: "sight",
    partOfSpeech: "n",
    phonetic: { uk: "/saɪt/", us: "/saɪt/" },
    root: {
      components: [
        { part: "sight", meaning: "看见，视力", origin: "古英语 sihth" }
      ],
      explanation: "sight = 视力，景象，看见"
    },
    logic: {
      premise: "视觉感知",
      feature: "通过眼睛观察到的事物",
      result: "形成印象或景象",
      essence: "视觉所及之物"
    },
    usage: [
      {
        context: "视力",
        example: "lose one's sight",
        explanation: "失明"
      },
      {
        context: "景象",
        example: "The sunset was a beautiful sight.",
        explanation: "日落是一道美丽的风景"
      },
      {
        context: "看见",
        example: "catch sight of",
        explanation: "瞥见"
      }
    ],
    distinction: [
      { word: "view", essence: "视野，观点" },
      { word: "vision", essence: "视力，远见" },
      { word: "sight", essence: "视力，景象，看见" }
    ],
    memory: {
      methods: ["sight 和 site（地点）同音", "常用短语：in sight（看得见）"],
      visualHint: "眼睛看到远处的风景"
    },
    pitfalls: ["sight 多义词：视力、景象、看见", "注意和 site（地点）区分拼写"],
    summary: "sight = 视力，景象，看见"
  },
  {
    word: "unpack",
    partOfSpeech: "v",
    phonetic: { uk: "/ʌnˈpæk/", us: "/ʌnˈpæk/" },
    root: {
      components: [
        { part: "un-", meaning: "相反，解开", origin: "" },
        { part: "pack", meaning: "打包", origin: "" }
      ],
      explanation: "unpack = 打开包裹 → 取出，分析"
    },
    logic: {
      premise: "物品被打包或问题被压缩",
      feature: "打开包装或展开分析",
      result: "取出内容或理解含义",
      essence: "打开并展开内容"
    },
    usage: [
      {
        context: "打开行李",
        example: "We need to unpack our bags.",
        explanation: "我们需要打开行李"
      },
      {
        context: "分析",
        example: "Let's unpack this statement.",
        explanation: "让我们分析这句话"
      }
    ],
    distinction: [
      { word: "open", essence: "打开" },
      { word: "analyze", essence: "分析" },
      { word: "unpack", essence: "打开，分析（打开包装展开内容）" }
    ],
    memory: {
      methods: ["un（解开）+ pack（包）= 打开包裹", "反义词：pack（打包）"],
      visualHint: "打开行李箱，把衣服取出来"
    },
    pitfalls: ["unpack 可指'分析（深入展开）'", "反义词 pack（打包）"],
    summary: "unpack = 打开（行李），分析（展开论述）"
  },
  {
    word: "commit",
    partOfSpeech: "v",
    phonetic: { uk: "/kəˈmɪt/", us: "/kəˈmɪt/" },
    root: {
      components: [
        { part: "com-", meaning: "完全", origin: "" },
        { part: "mit", meaning: "送，派", origin: "拉丁语 mittere" }
      ],
      explanation: "commit = 完全送出 → 承诺，犯罪，投入"
    },
    logic: {
      premise: "将自己或某物完全投入",
      feature: "不再保留，全身心交付",
      result: "形成承诺、行动或错误",
      essence: "完全投入，不留退路"
    },
    usage: [
      {
        context: "承诺",
        example: "commit to the project",
        explanation: "承诺投入这个项目"
      },
      {
        context: "犯罪",
        example: "commit a crime",
        explanation: "犯罪"
      },
      {
        context: "投入",
        example: "commit resources to education",
        explanation: "将资源投入教育"
      }
    ],
    distinction: [
      { word: "promise", essence: "承诺（口头）" },
      { word: "dedicate", essence: "奉献" },
      { word: "commit", essence: "承诺，投入，犯（罪/错）" }
    ],
    memory: {
      methods: ["词根：com + mit（送）= 完全送出", "联想：把自己完全送出去"],
      visualHint: "双手递交承诺书，全身心投入"
    },
    pitfalls: ["commit 多义词：承诺、犯罪、投入", "commitment = 承诺，投入"],
    summary: "commit = 承诺，犯罪，投入"
  },
  {
    word: "breakthrough",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈbreɪkθruː/", us: "/ˈbreɪkθruː/" },
    root: {
      components: [
        { part: "break", meaning: "打破", origin: "" },
        { part: "through", meaning: "穿过", origin: "" }
      ],
      explanation: "breakthrough = 突破，重大进展"
    },
    logic: {
      premise: "遇到障碍或瓶颈",
      feature: "打破障碍，取得进展",
      result: "重大突破或发现",
      essence: "突破阻碍的重大进展"
    },
    usage: [
      {
        context: "科学突破",
        example: "a major breakthrough in cancer research",
        explanation: "癌症研究的重大突破"
      },
      {
        context: "突破",
        example: "The negotiations made a breakthrough.",
        explanation: "谈判取得了突破"
      }
    ],
    distinction: [
      { word: "progress", essence: "进步" },
      { word: "advance", essence: "进展" },
      { word: "breakthrough", essence: "突破（重大）" }
    ],
    memory: {
      methods: ["break（打破）+ through（穿过）= 突破", "合成词，直接理解"],
      visualHint: "打破墙壁，看到新的天地"
    },
    pitfalls: ["breakthrough 是名词", "指重大的、突破性的进展"],
    summary: "breakthrough = 突破，重大进展"
  },
  {
    word: "comprise",
    partOfSpeech: "v",
    phonetic: { uk: "/kəmˈpraɪz/", us: "/kəmˈpraɪz/" },
    root: {
      components: [
        { part: "com-", meaning: "一起", origin: "" },
        { part: "prise", meaning: "拿，抓", origin: "拉丁语 prehendere" }
      ],
      explanation: "comprise = 一起拿住 → 包含，由...组成"
    },
    logic: {
      premise: "整体由部分构成",
      feature: "各部分被整体包含",
      result: "形成完整的集合",
      essence: "整体包含部分的关系"
    },
    usage: [
      {
        context: "包含",
        example: "The book comprises ten chapters.",
        explanation: "这本书包含十个章节"
      },
      {
        context: "由...组成",
        example: "The team comprises five members.",
        explanation: "这个团队由五名成员组成"
      }
    ],
    distinction: [
      { word: "include", essence: "包含（部分）" },
      { word: "consist of", essence: "由...组成" },
      { word: "comprise", essence: "包含，由...组成（整体在前）" }
    ],
    memory: {
      methods: ["词根：com + prise（拿）= 一起拿住", "注意：整体 comprise 部分"],
      visualHint: "一个盒子里面装着各种零件"
    },
    pitfalls: ["整体 comprise 部分，不能用被动", "不用 be comprised of（误用）"],
    summary: "comprise = 包含，由...组成（整体在前）"
  },
  {
    word: "relish",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈrelɪʃ/", us: "/ˈrelɪʃ/" },
    root: {
      components: [
        { part: "relish", meaning: "味道，享受", origin: "古法语 relais" }
      ],
      explanation: "relish = 享受，喜欢，风味"
    },
    logic: {
      premise: "某事物令人愉悦",
      feature: "从中获得极大享受",
      result: "沉浸其中，细细品味",
      essence: "深切享受的乐趣"
    },
    usage: [
      {
        context: "享受",
        example: "He relished the challenge.",
        explanation: "他很享受这个挑战"
      },
      {
        context: "调味品",
        example: "hot dog with relish",
        explanation: "加了调味酱的热狗"
      }
    ],
    distinction: [
      { word: "enjoy", essence: "享受（一般）" },
      { word: "savor", essence: "细细品味" },
      { word: "relish", essence: "享受，喜欢（热切）" }
    ],
    memory: {
      methods: ["联想：relish 听起来像'热舔'，热切地品尝", "也指'调味品'"],
      visualHint: "品尝美食时满足的表情"
    },
    pitfalls: ["relish 可作动词（享受）和名词（调味品）", "relish doing sth = 喜欢做某事"],
    summary: "relish = 享受，喜欢，风味（酱）"
  },
  {
    word: "gulosity",
    partOfSpeech: "n",
    phonetic: { uk: "/ɡjuːˈlɒsəti/", us: "/ɡjuːˈlɑːsəti/" },
    root: {
      components: [
        { part: "gul-", meaning: "吞，咽", origin: "拉丁语 gula（喉咙）" },
        { part: "-osity", meaning: "名词后缀，性质", origin: "" }
      ],
      explanation: "gulosity = 吞咽的性质 → 贪婪，暴食"
    },
    logic: {
      premise: "对食物或事物有过度欲望",
      feature: "如吞咽般急切获取",
      result: "贪婪、暴食的行为",
      essence: "如饥似渴的贪婪"
    },
    usage: [
      {
        context: "暴食",
        example: "His gulosity at the buffet was embarrassing.",
        explanation: "他在自助餐上的暴食令人尴尬"
      }
    ],
    distinction: [
      { word: "greed", essence: "贪婪（通用）" },
      { word: "gluttony", essence: "暴食（七宗罪之一）" },
      { word: "gulosity", essence: "贪婪，暴食（古语/文学）" }
    ],
    memory: {
      methods: ["词根：gul（喉咙）= gulp（大口吞）", "gulosity 比 greed 更文学化"],
      visualHint: "狼吞虎咽，大口吞咽食物"
    },
    pitfalls: ["gulosity 是古语/文学词汇，日常少用", "同根词：gulp（大口吞）"],
    summary: "gulosity = 贪婪，暴食（文学用语）"
  },
  {
    word: "vehement",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈviːəmənt/", us: "/ˈviːəmənt/" },
    root: {
      components: [
        { part: "vehem-", meaning: "猛烈的，激烈的", origin: "拉丁语 vehemens" }
      ],
      explanation: "vehement = 猛烈的，激烈的，热烈的"
    },
    logic: {
      premise: "某人有强烈的情感或观点",
      feature: "激烈地表达出来",
      result: "情绪强烈，态度坚决",
      essence: "强烈激烈的情感表达"
    },
    usage: [
      {
        context: "激烈的",
        example: "a vehement argument",
        explanation: "激烈的争论"
      },
      {
        context: "强烈的",
        example: "vehement opposition",
        explanation: "强烈的反对"
      }
    ],
    distinction: [
      { word: "strong", essence: "强烈的" },
      { word: "fierce", essence: "凶猛的，激烈的" },
      { word: "vehement", essence: "猛烈的，热烈的（情感）" }
    ],
    memory: {
      methods: ["谐音：'威门'，威风凛凛地激烈表达", "联想：vehicle（车辆）的凶猛版"],
      visualHint: "激动地挥舞手臂大声辩论"
    },
    pitfalls: ["vehement 常形容情感、反对、争论", "副词 vehemently 更常用"],
    summary: "vehement = 猛烈的，激烈的，热烈的"
  },
  {
    word: "studiously",
    partOfSpeech: "adv",
    phonetic: { uk: "/ˈstjuːdiəsli/", us: "/ˈstuːdiəsli/" },
    root: {
      components: [
        { part: "studious", meaning: "好学的，认真的", origin: "" },
        { part: "-ly", meaning: "副词后缀", origin: "" }
      ],
      explanation: "studiously = 认真地，刻意地"
    },
    logic: {
      premise: "需要专注和努力",
      feature: "如学习般认真对待",
      result: "刻意为之，一丝不苟",
      essence: "认真学习般的态度"
    },
    usage: [
      {
        context: "认真地",
        example: "He studiously avoided the topic.",
        explanation: "他刻意回避这个话题"
      },
      {
        context: "勤奋地",
        example: "She worked studiously on her thesis.",
        explanation: "她勤奋地写论文"
      }
    ],
    distinction: [
      { word: "carefully", essence: "小心地" },
      { word: "diligently", essence: "勤勉地" },
      { word: "studiously", essence: "认真地，刻意地" }
    ],
    memory: {
      methods: ["study（学习）+ ous + ly = 学习般地", "联想：像学生一样认真"],
      visualHint: "学生在图书馆认真看书"
    },
    pitfalls: ["studiously avoid/ignore = 刻意回避/忽视", "强调'故意地'"],
    summary: "studiously = 认真地，刻意地，勤奋地"
  },
  {
    word: "dominance",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈdɒmɪnəns/", us: "/ˈdɑːmɪnəns/" },
    root: {
      components: [
        { part: "domin-", meaning: "统治，主人", origin: "拉丁语 dominus" },
        { part: "-ance", meaning: "名词后缀", origin: "" }
      ],
      explanation: "dominance = 统治，支配，优势"
    },
    logic: {
      premise: "存在竞争或等级关系",
      feature: "一方占据主导地位",
      result: "控制局面，影响他人",
      essence: "统治或支配的地位"
    },
    usage: [
      {
        context: "统治地位",
        example: "the dominance of the tech giants",
        explanation: "科技巨头的统治地位"
      },
      {
        context: "优势",
        example: "achieve dominance in the market",
        explanation: "在市场上取得优势"
      }
    ],
    distinction: [
      { word: "power", essence: "权力" },
      { word: "control", essence: "控制" },
      { word: "dominance", essence: "支配地位，优势" }
    ],
    memory: {
      methods: ["词根：domin = domain（领域）= 统治范围", "同根词：dominate（支配）"],
      visualHint: "狮子站在山顶，俯视领地"
    },
    pitfalls: ["dominance 和 domination 近义", "可指'优势地位'"],
    summary: "dominance = 支配，统治，优势"
  },
  {
    word: "unprecedented",
    partOfSpeech: "adj",
    phonetic: { uk: "/ʌnˈpresɪdentɪd/", us: "/ʌnˈpresɪdentɪd/" },
    root: {
      components: [
        { part: "un-", meaning: "不，无", origin: "" },
        { part: "precedent", meaning: "先例", origin: "" },
        { part: "-ed", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "unprecedented = 没有先例的 → 前所未有的"
    },
    logic: {
      premise: "某事在历史上从未发生",
      feature: "完全新的，无前例可循",
      result: "开创性的，独特的",
      essence: "史无前例的独特性"
    },
    usage: [
      {
        context: "前所未有的",
        example: "unprecedented growth",
        explanation: "前所未有的增长"
      },
      {
        context: "史无前例的",
        example: "an unprecedented crisis",
        explanation: "一场史无前例的危机"
      }
    ],
    distinction: [
      { word: "new", essence: "新的" },
      { word: "unique", essence: "独特的" },
      { word: "unprecedented", essence: "前所未有的（强调无先例）" }
    ],
    memory: {
      methods: ["un（无）+ precedent（先例）+ ed", "precedent = precedent（先例）"],
      visualHint: "一张白纸，上面没有任何记录"
    },
    pitfalls: ["unprecedented 是正式用语", "常用于新闻、学术写作"],
    summary: "unprecedented = 前所未有的，史无前例的"
  },
  {
    word: "portion",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈpɔːʃn/", us: "/ˈpɔːrʃn/" },
    root: {
      components: [
        { part: "port-", meaning: "部分", origin: "拉丁语 portio" }
      ],
      explanation: "portion = 部分，一份"
    },
    logic: {
      premise: "整体被分割",
      feature: "其中一份被分出",
      result: "成为独立的部分",
      essence: "整体中的一部分"
    },
    usage: [
      {
        context: "部分",
        example: "a large portion of the budget",
        explanation: "预算的很大一部分"
      },
      {
        context: "一份（食物）",
        example: "a generous portion of fries",
        explanation: "一大份薯条"
      }
    ],
    distinction: [
      { word: "part", essence: "部分（通用）" },
      { word: "share", essence: "份额（分配）" },
      { word: "portion", essence: "部分，一份（可指食物）" }
    ],
    memory: {
      methods: ["词根：port = part（部分）", "联想：portion control（份量控制）"],
      visualHint: "蛋糕被切成几块，每人一份"
    },
    pitfalls: ["portion 可指食物的一份", "常与 of 连用：a portion of"],
    summary: "portion = 部分，一份"
  },
  {
    word: "co-evolutionary",
    partOfSpeech: "adj",
    phonetic: { uk: "/kəʊˌiːvəˈluːʃənəri/", us: "/koʊˌiːvəˈluːʃəneri/" },
    root: {
      components: [
        { part: "co-", meaning: "共同，一起", origin: "" },
        { part: "evolution", meaning: "进化", origin: "" },
        { part: "-ary", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "co-evolutionary = 共同进化的"
    },
    logic: {
      premise: "两个或多个物种相互影响",
      feature: "彼此施加选择压力",
      result: "相互适应，共同演化",
      essence: "相互影响的进化过程"
    },
    usage: [
      {
        context: "共同进化",
        example: "co-evolutionary relationship between bees and flowers",
        explanation: "蜜蜂和花朵之间的共同进化关系"
      }
    ],
    distinction: [
      { word: "evolutionary", essence: "进化的" },
      { word: "co-evolutionary", essence: "共同进化的（相互影响）" }
    ],
    memory: {
      methods: ["co（共同）+ evolutionary（进化的）", "联想：蜜蜂和花一起进化"],
      visualHint: "蜜蜂采蜜，花朵随之改变形态"
    },
    pitfalls: ["生物学术语", "强调'相互影响'的进化"],
    summary: "co-evolutionary = 共同进化的"
  },
  {
    word: "disperse",
    partOfSpeech: "v",
    phonetic: { uk: "/dɪˈspɜːs/", us: "/dɪˈspɜːrs/" },
    root: {
      components: [
        { part: "dis-", meaning: "分开", origin: "" },
        { part: "sperse", meaning: "撒，散", origin: "拉丁语 spargere" }
      ],
      explanation: "disperse = 撒开 → 分散，散开"
    },
    logic: {
      premise: "物体或人群聚集在一起",
      feature: "向四周散开",
      result: "分散到各处",
      essence: "从集中到分散的过程"
    },
    usage: [
      {
        context: "散开",
        example: "The crowd dispersed after the concert.",
        explanation: "音乐会后人群散开了"
      },
      {
        context: "分散",
        example: "The seeds are dispersed by the wind.",
        explanation: "种子被风分散传播"
      }
    ],
    distinction: [
      { word: "scatter", essence: "散开（随意）" },
      { word: "spread", essence: "传播，扩散" },
      { word: "disperse", essence: "分散，散开（较正式）" }
    ],
    memory: {
      methods: ["dis（分开）+ perse（散）", "联想：disperse = disappear（消失）的亲戚"],
      visualHint: "蒲公英种子随风四散飘走"
    },
    pitfalls: ["disperse 可作及物和不及物动词", "与 scatter 近义，但更正式"],
    summary: "disperse = 分散，散开，传播"
  },
  {
    word: "substance",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈsʌbstəns/", us: "/ˈsʌbstəns/" },
    root: {
      components: [
        { part: "sub-", meaning: "在...下", origin: "" },
        { part: "st", meaning: "站", origin: "拉丁语 stare" },
        { part: "-ance", meaning: "名词后缀", origin: "" }
      ],
      explanation: "substance = 站在下面的 → 实质，物质"
    },
    logic: {
      premise: "事物有表面和内在",
      feature: "内在的核心存在",
      result: "构成事物本质的物质或内容",
      essence: "事物的实质内容"
    },
    usage: [
      {
        context: "物质",
        example: "a chemical substance",
        explanation: "化学物质"
      },
      {
        context: "实质",
        example: "the substance of his argument",
        explanation: "他论点的实质"
      },
      {
        context: "重要性",
        example: "a matter of substance",
        explanation: "实质性问题"
      }
    ],
    distinction: [
      { word: "matter", essence: "物质（物理）" },
      { word: "material", essence: "材料" },
      { word: "substance", essence: "物质，实质（可指抽象）" }
    ],
    memory: {
      methods: ["词根：sub（下）+ st（站）= 站在下面的基础", "substantial = 实质的，大量的"],
      visualHint: "冰山的水下部分，真正的实质"
    },
    pitfalls: ["substance 多义词：物质、实质", "in substance = 实质上"],
    summary: "substance = 物质，实质，主旨"
  },
  {
    word: "laborious",
    partOfSpeech: "adj",
    phonetic: { uk: "/ləˈbɔːriəs/", us: "/ləˈbɔːriəs/" },
    root: {
      components: [
        { part: "labor", meaning: "劳动，工作", origin: "拉丁语 labor" },
        { part: "-ious", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "laborious = 费力的，辛苦的"
    },
    logic: {
      premise: "任务需要大量劳动",
      feature: "耗时耗力，进展缓慢",
      result: "需要付出艰辛努力",
      essence: "需要大量劳作的性质"
    },
    usage: [
      {
        context: "费力的",
        example: "a laborious task",
        explanation: "一项费力的任务"
      },
      {
        context: "冗长乏味的",
        example: "a laborious writing style",
        explanation: "冗长乏味的写作风格"
      }
    ],
    distinction: [
      { word: "hard", essence: "困难的" },
      { word: "tiring", essence: "累人的" },
      { word: "laborious", essence: "费力的，辛苦的（强调劳动量大）" }
    ],
    memory: {
      methods: ["词根：labor（劳动）+ ious = 费力的", "联想：laboratory（实验室）的工作是 laborious"],
      visualHint: "工人满头大汗地搬运重物"
    },
    pitfalls: ["laborious 强调'费力'而非'困难'", "可形容'冗长乏味'的文字"],
    summary: "laborious = 费力的，辛苦的，冗长的"
  },
  {
    word: "gratification",
    partOfSpeech: "n",
    phonetic: { uk: "/ˌɡrætɪfɪˈkeɪʃn/", us: "/ˌɡrætɪfɪˈkeɪʃn/" },
    root: {
      components: [
        { part: "grat-", meaning: "高兴，满意", origin: "拉丁语 gratus" },
        { part: "-ification", meaning: "名词后缀", origin: "" }
      ],
      explanation: "gratification = 满足，喜悦"
    },
    logic: {
      premise: "欲望或需求得到满足",
      feature: "产生愉悦和满意的感觉",
      result: "心理上的满足感",
      essence: "满足带来的愉悦"
    },
    usage: [
      {
        context: "满足感",
        example: "instant gratification",
        explanation: "即时满足"
      },
      {
        context: "成就感",
        example: "the gratification of completing a project",
        explanation: "完成项目的满足感"
      }
    ],
    distinction: [
      { word: "satisfaction", essence: "满意（一般）" },
      { word: "pleasure", essence: "快乐" },
      { word: "gratification", essence: "满足感（欲望得到满足）" }
    ],
    memory: {
      methods: ["词根：grat = grateful（感激的）", "联想：gratify（使满足）的名词"],
      visualHint: "完成一项任务后满足的微笑"
    },
    pitfalls: ["instant gratification = 即时满足（常指短期快感）", "与 gratitude（感激）同根"],
    summary: "gratification = 满足，喜悦，满足感"
  },
  {
    word: "expenditure",
    partOfSpeech: "n",
    phonetic: { uk: "/ɪkˈspendɪtʃə(r)/", us: "/ɪkˈspendɪtʃər/" },
    root: {
      components: [
        { part: "ex-", meaning: "出", origin: "" },
        { part: "pend", meaning: "支付，花费", origin: "拉丁语 pendere" },
        { part: "-iture", meaning: "名词后缀", origin: "" }
      ],
      explanation: "expenditure = 支出，花费"
    },
    logic: {
      premise: "资源（金钱、时间、精力）被使用",
      feature: "从拥有状态转为消耗状态",
      result: "产生支出或消耗",
      essence: "资源的消耗支出"
    },
    usage: [
      {
        context: "开支",
        example: "reduce public expenditure",
        explanation: "减少公共开支"
      },
      {
        context: "消耗",
        example: "the expenditure of time and energy",
        explanation: "时间和精力的消耗"
      }
    ],
    distinction: [
      { word: "expense", essence: "费用（具体）" },
      { word: "cost", essence: "成本，代价" },
      { word: "expenditure", essence: "支出，花费（正式，总量）" }
    ],
    memory: {
      methods: ["词根：ex + pend（支付）= 支出", "联想：expend（花费）的名词"],
      visualHint: "钱包里的钱被花出去"
    },
    pitfalls: ["expenditure 是正式用语", "可指金钱、时间、精力的消耗"],
    summary: "expenditure = 支出，花费，消耗"
  },
  {
    word: "hardcore",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈhɑːdkɔː(r)/", us: "/ˈhɑːrdkɔːr/" },
    root: {
      components: [
        { part: "hard", meaning: "硬的，强烈的", origin: "" },
        { part: "core", meaning: "核心", origin: "" }
      ],
      explanation: "hardcore = 硬核的，死忠的"
    },
    logic: {
      premise: "某人对某事物有强烈执着",
      feature: "达到核心、极致的程度",
      result: "坚定不移的忠诚或极端的表现",
      essence: "核心级别的执着"
    },
    usage: [
      {
        context: "死忠粉丝",
        example: "hardcore fans",
        explanation: "硬核粉丝，死忠粉"
      },
      {
        context: "硬核的",
        example: "hardcore gamers",
        explanation: "硬核游戏玩家"
      }
    ],
    distinction: [
      { word: "loyal", essence: "忠诚的" },
      { word: "dedicated", essence: "投入的" },
      { word: "hardcore", essence: "硬核的，死忠的（程度深）" }
    ],
    memory: {
      methods: ["hard（硬）+ core（核心）= 硬核", "联想：硬核音乐、硬核游戏"],
      visualHint: "摇滚音乐会上狂热投入的粉丝"
    },
    pitfalls: ["hardcore 源自硬核音乐（朋克摇滚）", "现泛指'死忠、极端投入'"],
    summary: "hardcore = 硬核的，死忠的，极端的"
  },
  {
    word: "attune",
    partOfSpeech: "v",
    phonetic: { uk: "/əˈtjuːn/", us: "/əˈtuːn/" },
    root: {
      components: [
        { part: "at-", meaning: "朝向", origin: "" },
        { part: "tune", meaning: "调子，和谐", origin: "" }
      ],
      explanation: "attune = 使和谐，使协调"
    },
    logic: {
      premise: "两个事物需要协调",
      feature: "调整到相同的频率或状态",
      result: "达到和谐一致",
      essence: "调整到和谐状态"
    },
    usage: [
      {
        context: "使适应",
        example: "attune oneself to a new culture",
        explanation: "使自己适应新文化"
      },
      {
        context: "使协调",
        example: "attune the instruments",
        explanation: "给乐器调音"
      }
    ],
    distinction: [
      { word: "adapt", essence: "适应" },
      { word: "adjust", essence: "调整" },
      { word: "attune", essence: "使协调，使合拍（如调音）" }
    ],
    memory: {
      methods: ["at + tune（调子）= 调到同一个调子", "联想：tune（调音）的动词形式"],
      visualHint: "乐师调整琴弦，使所有乐器音调一致"
    },
    pitfalls: ["attune to = 适应，对...敏感", "常与 oneself 连用"],
    summary: "attune = 使协调，使适应，调音"
  },
  {
    word: "corollary",
    partOfSpeech: "n",
    phonetic: { uk: "/kəˈrɒləri/", us: "/ˈkɔːrəleri/" },
    root: {
      components: [
        { part: "cor-", meaning: "完全", origin: "" },
        { part: "ol", meaning: "礼物，赏金", origin: "拉丁语" }
      ],
      explanation: "corollary = 自然的推论，必然的结果"
    },
    logic: {
      premise: "某一事实或命题成立",
      feature: "随之而来的必然结论",
      result: "无需额外证明即可得出的结果",
      essence: "自然衍生的结论"
    },
    usage: [
      {
        context: "推论",
        example: "a corollary of this theory",
        explanation: "这个理论的推论"
      },
      {
        context: "必然结果",
        example: "Increased traffic is a corollary of urban growth.",
        explanation: "交通增加是城市发展的必然结果"
      }
    ],
    distinction: [
      { word: "result", essence: "结果" },
      { word: "conclusion", essence: "结论" },
      { word: "corollary", essence: "推论，必然结果（逻辑/数学）" }
    ],
    memory: {
      methods: ["联想：corollary = core + lorry，核心的运载=推论", "数学中常用"],
      visualHint: "数学定理后面跟着一个小定理"
    },
    pitfalls: ["corollary 常用在逻辑、数学中", "强调'自然跟随'的结论"],
    summary: "corollary = 推论，必然的结果"
  },
  {
    word: "overemphasize",
    partOfSpeech: "v",
    phonetic: { uk: "/ˌəʊvərˈemfəsaɪz/", us: "/ˌoʊvərˈemfəsaɪz/" },
    root: {
      components: [
        { part: "over-", meaning: "过度", origin: "" },
        { part: "emphasize", meaning: "强调", origin: "" }
      ],
      explanation: "overemphasize = 过分强调"
    },
    logic: {
      premise: "某事物有一定重要性",
      feature: "强调程度超过其实际重要性",
      result: "主次颠倒，产生误导",
      essence: "强调过度的行为"
    },
    usage: [
      {
        context: "过分强调",
        example: "Don't overemphasize the risks.",
        explanation: "不要过分强调风险"
      }
    ],
    distinction: [
      { word: "emphasize", essence: "强调" },
      { word: "stress", essence: "强调" },
      { word: "overemphasize", essence: "过分强调" }
    ],
    memory: {
      methods: ["over（过度）+ emphasize（强调）", "合成词，直译"],
      visualHint: "放大镜把一个小点放得过大"
    },
    pitfalls: ["overemphasize 是过度强调", "常与 on 连用"],
    summary: "overemphasize = 过分强调"
  },
  {
    word: "articulate",
    partOfSpeech: "adj",
    phonetic: { uk: "/ɑːˈtɪkjələt/", us: "/ɑːrˈtɪkjələt/" },
    root: {
      components: [
        { part: "articul-", meaning: "关节，连接", origin: "拉丁语 articulus" }
      ],
      explanation: "articulate = 发音清晰的，善于表达的"
    },
    logic: {
      premise: "思想或声音需要被传达",
      feature: "清晰有序地连接组织",
      result: "易于理解，表达流畅",
      essence: "清晰流畅的表达能力"
    },
    usage: [
      {
        context: "善于表达的",
        example: "an articulate speaker",
        explanation: "一位口齿清晰的演讲者"
      },
      {
        context: "清楚表达",
        example: "She articulated her concerns clearly.",
        explanation: "她清楚地表达了她的担忧"
      }
    ],
    distinction: [
      { word: "speak", essence: "说话" },
      { word: "express", essence: "表达" },
      { word: "articulate", essence: "清晰表达，发音清晰" }
    ],
    memory: {
      methods: ["词根：articul = article（文章），有组织的", "联想：article（文章）+ ate = 像文章一样有条理"],
      visualHint: "演讲者口若悬河，表达清晰流畅"
    },
    pitfalls: ["articulate 可作形容词和动词", "强调'清晰、有条理'"],
    summary: "articulate = 善于表达的，发音清晰的，清楚表达"
  },
  {
    word: "integral",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈɪntɪɡrəl/", us: "/ˈɪntɪɡrəl/" },
    root: {
      components: [
        { part: "integr-", meaning: "完整，整体", origin: "拉丁语 integer" }
      ],
      explanation: "integral = 构成整体所必需的，不可或缺的"
    },
    logic: {
      premise: "整体由多个部分组成",
      feature: "某部分是构成整体必需的",
      result: "缺少则整体不完整",
      essence: "整体性中不可或缺的部分"
    },
    usage: [
      {
        context: "不可或缺的",
        example: "an integral part of the system",
        explanation: "系统中不可或缺的一部分"
      },
      {
        context: "完整的",
        example: "integral to the plan",
        explanation: "计划中必不可少的一部分"
      }
    ],
    distinction: [
      { word: "essential", essence: "必要的" },
      { word: "necessary", essence: "必需的" },
      { word: "integral", essence: "构成整体必需的（强调整体性）" }
    ],
    memory: {
      methods: ["词根：integr = integer（整数/完整）", "联想：integration（整合）的形容词"],
      visualHint: "拼图的核心块，没有它图案就不完整"
    },
    pitfalls: ["integral to = 对...是不可或缺的", "不要与 integrate（整合）混淆"],
    summary: "integral = 不可或缺的，构成整体必需的"
  },
  {
    word: "poll",
    partOfSpeech: "n",
    phonetic: { uk: "/pəʊl/", us: "/poʊl/" },
    root: {
      components: [
        { part: "poll", meaning: "人头，投票", origin: "中古英语" }
      ],
      explanation: "poll = 民意调查，投票"
    },
    logic: {
      premise: "需要了解公众意见",
      feature: "收集个体的选择或观点",
      result: "统计出整体民意",
      essence: "收集和统计民意"
    },
    usage: [
      {
        context: "民意调查",
        example: "according to a recent poll",
        explanation: "根据最近的民意调查"
      },
      {
        context: "投票",
        example: "go to the polls",
        explanation: "去投票"
      }
    ],
    distinction: [
      { word: "survey", essence: "调查（范围广）" },
      { word: "vote", essence: "投票（行为）" },
      { word: "poll", essence: "民意调查，投票" }
    ],
    memory: {
      methods: ["联想：poll = people（人民）的意见", "go to the polls = 去投票"],
      visualHint: "投票站外人们排队投票"
    },
    pitfalls: ["poll 可作名词和动词", "the polls = 投票站"],
    summary: "poll = 民意调查，投票"
  },
  {
    word: "disproportionately",
    partOfSpeech: "adv",
    phonetic: { uk: "/ˌdɪsprəˈpɔːʃənətli/", us: "/ˌdɪsprəˈpɔːrʃənətli/" },
    root: {
      components: [
        { part: "dis-", meaning: "不，相反", origin: "" },
        { part: "proportion", meaning: "比例", origin: "" },
        { part: "-ate", meaning: "形容词后缀", origin: "" },
        { part: "-ly", meaning: "副词后缀", origin: "" }
      ],
      explanation: "disproportionately = 不成比例地"
    },
    logic: {
      premise: "期望按一定比例分配",
      feature: "实际分配与期望不符",
      result: "某部分过多或过少",
      essence: "与比例不相称的程度"
    },
    usage: [
      {
        context: "不成比例地",
        example: "disproportionately high costs",
        explanation: "不成比例的高成本"
      }
    ],
    distinction: [
      { word: "unequally", essence: "不平等地" },
      { word: "unfairly", essence: "不公平地" },
      { word: "disproportionately", essence: "不成比例地" }
    ],
    memory: {
      methods: ["dis（不）+ proportion（比例）+ ately", "联想：proportion（比例）的反面"],
      visualHint: "跷跷板严重倾斜，两边不成比例"
    },
    pitfalls: ["disproportionately 强调'与比例不符'", "常与 high/low 搭配"],
    summary: "disproportionately = 不成比例地"
  },
  {
    word: "composition",
    partOfSpeech: "n",
    phonetic: { uk: "/ˌkɒmpəˈzɪʃn/", us: "/ˌkɑːmpəˈzɪʃn/" },
    root: {
      components: [
        { part: "com-", meaning: "一起", origin: "" },
        { part: "pos", meaning: "放置", origin: "拉丁语 ponere" },
        { part: "-ition", meaning: "名词后缀", origin: "" }
      ],
      explanation: "composition = 组成，构成，作文，作曲"
    },
    logic: {
      premise: "多个元素需要组织",
      feature: "按特定方式组合放置",
      result: "形成完整的作品或整体",
      essence: "元素的组合与组织"
    },
    usage: [
      {
        context: "组成",
        example: "the chemical composition",
        explanation: "化学组成"
      },
      {
        context: "作文",
        example: "write a composition",
        explanation: "写一篇作文"
      },
      {
        context: "作曲",
        example: "a musical composition",
        explanation: "音乐作品"
      }
    ],
    distinction: [
      { word: "structure", essence: "结构" },
      { word: "essay", essence: "文章" },
      { word: "composition", essence: "组成，作文，作曲（组合的结果）" }
    ],
    memory: {
      methods: ["词根：com + pose（放）= 放在一起", "联想：compose（组成/作曲）的名词"],
      visualHint: "乐高积木组合成各种形状"
    },
    pitfalls: ["composition 多义词：组成、作文、作曲", "根据语境理解具体含义"],
    summary: "composition = 组成，构成，作文，作曲"
  },
  {
    word: "elicit",
    partOfSpeech: "v",
    phonetic: { uk: "/ɪˈlɪsɪt/", us: "/ɪˈlɪsɪt/" },
    root: {
      components: [
        { part: "e-", meaning: "出", origin: "" },
        { part: "licit", meaning: "引诱", origin: "拉丁语 lacere" }
      ],
      explanation: "elicit = 引出，诱出，引出反应"
    },
    logic: {
      premise: "信息或反应隐藏未显",
      feature: "通过方法使其显现出来",
      result: "成功获得隐藏的信息",
      essence: "引出隐藏的信息或反应"
    },
    usage: [
      {
        context: "引出",
        example: "elicit information from witnesses",
        explanation: "从证人那里引出信息"
      },
      {
        context: "引起",
        example: "The speech elicited strong reactions.",
        explanation: "演讲引起了强烈反应"
      }
    ],
    distinction: [
      { word: "draw out", essence: "引出" },
      { word: "extract", essence: "提取" },
      { word: "elicit", essence: "引出，诱出（信息/反应）" }
    ],
    memory: {
      methods: ["e（出）+ licit（引诱）= 诱出", "注意：elicit 和 illicit（非法的）发音不同"],
      visualHint: "提问者引导对方说出隐藏的信息"
    },
    pitfalls: ["elicit 常指'引出信息、反应'", "不要与 illicit（非法的）混淆"],
    summary: "elicit = 引出，诱出，引起（反应）"
  },
  {
    word: "civilisation",
    partOfSpeech: "n",
    phonetic: { uk: "/ˌsɪvəlaɪˈzeɪʃn/", us: "/ˌsɪvələˈzeɪʃn/" },
    root: {
      components: [
        { part: "civil", meaning: "公民的，文明的", origin: "" }
      ],
      explanation: "civilisation = 文明（英式拼写）"
    },
    logic: {
      premise: "人类社会发展到高级阶段",
      feature: "形成复杂的社会组织和文化",
      result: "文明状态",
      essence: "人类社会的高级发展阶段"
    },
    usage: [
      {
        context: "文明",
        example: "the rise of ancient civilisations",
        explanation: "古代文明的兴起"
      },
      {
        context: "开化",
        example: "bring civilisation to remote areas",
        explanation: "给偏远地区带来文明"
      }
    ],
    distinction: [
      { word: "culture", essence: "文化" },
      { word: "civilisation", essence: "文明（更广，含社会发展）" }
    ],
    memory: {
      methods: ["英式 civilisation = 美式 civilization", "civil（文明的）+ isation"],
      visualHint: "古埃及金字塔代表古代文明"
    },
    pitfalls: ["英式拼写 -sation，美式 -zation", "与 culture（文化）有区别"],
    summary: "civilisation = 文明，开化（英式）"
  },
  {
    word: "cripple",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈkrɪpl/", us: "/ˈkrɪpl/" },
    root: {
      components: [
        { part: "cripple", meaning: "跛子，使瘫痪", origin: "古英语 crypel" }
      ],
      explanation: "cripple = 使跛，使瘫痪，严重损坏"
    },
    logic: {
      premise: "身体或系统原本正常",
      feature: "受到严重损伤",
      result: "功能丧失或严重受限",
      essence: "严重削弱功能"
    },
    usage: [
      {
        context: "使瘫痪",
        example: "The accident crippled him for life.",
        explanation: "那场事故使他终身残疾"
      },
      {
        context: "严重损坏",
        example: "The strike crippled the industry.",
        explanation: "罢工使该行业陷入瘫痪"
      }
    ],
    distinction: [
      { word: "damage", essence: "损坏" },
      { word: "disable", essence: "使失去能力" },
      { word: "cripple", essence: "使瘫痪，严重削弱" }
    ],
    memory: {
      methods: ["cripple 原指'跛子'，现多用作动词", "联想：cripple 使功能'crippled'（瘸了）"],
      visualHint: "受伤的人拄着拐杖，行动不便"
    },
    pitfalls: ["作名词指'残疾人'时可能冒犯，现多用 disabled person", "作动词'使瘫痪'常用"],
    summary: "cripple = 使跛，使瘫痪，严重损坏"
  },
  {
    word: "integrative",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˈɪntɪɡreɪtɪv/", us: "/ˈɪntɪɡreɪtɪv/" },
    root: {
      components: [
        { part: "integr-", meaning: "完整，整体", origin: "" },
        { part: "-ative", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "integrative = 综合的，整合的"
    },
    logic: {
      premise: "多个部分需要统一",
      feature: "将各部分整合成整体",
      result: "形成统一协调的系统",
      essence: "整合各部分成整体"
    },
    usage: [
      {
        context: "综合的",
        example: "an integrative approach to medicine",
        explanation: "综合医学方法"
      }
    ],
    distinction: [
      { word: "integrated", essence: "整合的（已完成）" },
      { word: "integrative", essence: "整合的（强调过程/方法）" }
    ],
    memory: {
      methods: ["integrate（整合）+ ive = 整合性的", "联想：整合医学（integrative medicine）"],
      visualHint: "各种治疗方法被整合在一起"
    },
    pitfalls: ["integrative 强调'整合的过程/方法'", "与 integrated（已整合的）区分"],
    summary: "integrative = 综合的，整合的"
  },
  {
    word: "emulate",
    partOfSpeech: "v",
    phonetic: { uk: "/ˈemjuleɪt/", us: "/ˈemjuleɪt/" },
    root: {
      components: [
        { part: "aemul-", meaning: "竞争，模仿", origin: "拉丁语 aemulus" }
      ],
      explanation: "emulate = 仿效，模仿，努力赶上"
    },
    logic: {
      premise: "某人有值得学习的成就",
      feature: "以其为榜样努力追赶",
      result: "达到或超越其水平",
      essence: "以榜样为目标的努力追赶"
    },
    usage: [
      {
        context: "仿效",
        example: "emulate one's role model",
        explanation: "效仿自己的榜样"
      },
      {
        context: "赶上",
        example: "The company hopes to emulate its rival's success.",
        explanation: "公司希望赶上竞争对手的成功"
      }
    ],
    distinction: [
      { word: "imitate", essence: "模仿（外表）" },
      { word: "copy", essence: "复制" },
      { word: "emulate", essence: "仿效，努力赶上（有尊重意味）" }
    ],
    memory: {
      methods: ["e（出）+ mulate（竞争）= 努力赶上", "联想：emulate 带有敬意和竞争的模仿"],
      visualHint: "学生努力模仿老师的样子"
    },
    pitfalls: ["emulate 含有'尊敬并努力赶上'的意味", "比 imitate 更正式、更有敬意"],
    summary: "emulate = 仿效，模仿，努力赶上"
  },
  {
    word: "assumption",
    partOfSpeech: "n",
    phonetic: { uk: "/əˈsʌmpʃn/", us: "/əˈsʌmpʃn/" },
    root: {
      components: [
        { part: "as-", meaning: "朝向", origin: "" },
        { part: "sumpt", meaning: "拿，取", origin: "拉丁语 sumere" },
        { part: "-ion", meaning: "名词后缀", origin: "" }
      ],
      explanation: "assumption = 假设，假定"
    },
    logic: {
      premise: "信息不完全",
      feature: "在缺乏证据时先取一种说法",
      result: "暂时接受为真",
      essence: "无充分证据的前提假设"
    },
    usage: [
      {
        context: "假设",
        example: "based on the assumption that...",
        explanation: "基于...的假设"
      },
      {
        context: "承担",
        example: "the assumption of responsibility",
        explanation: "承担责任"
      }
    ],
    distinction: [
      { word: "hypothesis", essence: "假设（科学）" },
      { word: "presumption", essence: "假定（基于概率）" },
      { word: "assumption", essence: "假设（主观认定）" }
    ],
    memory: {
      methods: ["词根：assume（假设/承担）的名词", "联想：assume 的名词形式"],
      visualHint: "问号下的前提：'假设这是真的...'"
    },
    pitfalls: ["assumption 是 assume 的名词", "也可指'承担（责任/职位）'"],
    summary: "assumption = 假设，假定，承担"
  },
  {
    word: "conservative",
    partOfSpeech: "adj",
    phonetic: { uk: "/kənˈsɜːvətɪv/", us: "/kənˈsɜːrvətɪv/" },
    root: {
      components: [
        { part: "con-", meaning: "完全", origin: "" },
        { part: "serv", meaning: "保持", origin: "拉丁语 servare" },
        { part: "-ative", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "conservative = 保守的，守旧的"
    },
    logic: {
      premise: "面临变化或新事物",
      feature: "倾向于保持原有状态",
      result: "反对激进变革，维护传统",
      essence: "倾向于保持传统的态度"
    },
    usage: [
      {
        context: "保守的",
        example: "a conservative approach",
        explanation: "保守的方法"
      },
      {
        context: "保守党",
        example: "the Conservative Party",
        explanation: "保守党"
      },
      {
        context: "保守估计",
        example: "a conservative estimate",
        explanation: "保守估计"
      }
    ],
    distinction: [
      { word: "traditional", essence: "传统的" },
      { word: "cautious", essence: "谨慎的" },
      { word: "conservative", essence: "保守的（反对变革）" }
    ],
    memory: {
      methods: ["conserve（保护）+ ative = 保护传统的", "联想：想'保存'现状"],
      visualHint: "一位老者坚持传统方式，不愿改变"
    },
    pitfalls: ["conservative 可指'保守估计'（偏低）", "大写 C 指保守党"],
    summary: "conservative = 保守的，守旧的，保守估计的"
  },
  {
    word: "reimagine",
    partOfSpeech: "v",
    phonetic: { uk: "/ˌriːɪˈmædʒɪn/", us: "/ˌriːɪˈmædʒɪn/" },
    root: {
      components: [
        { part: "re-", meaning: "重新", origin: "" },
        { part: "imagine", meaning: "想象", origin: "" }
      ],
      explanation: "reimagine = 重新想象，重新构想"
    },
    logic: {
      premise: "已有的事物或概念",
      feature: "以新的方式重新构想",
      result: "赋予新的形式或意义",
      essence: "以新视角重新构想"
    },
    usage: [
      {
        context: "重新构想",
        example: "reimagine the future of education",
        explanation: "重新构想教育的未来"
      }
    ],
    distinction: [
      { word: "imagine", essence: "想象" },
      { word: "rethink", essence: "重新思考" },
      { word: "reimagine", essence: "重新想象，重新构想" }
    ],
    memory: {
      methods: ["re（重新）+ imagine（想象）", "联想：imagine 的'重来一次'"],
      visualHint: "老电影被翻拍成新版本"
    },
    pitfalls: ["reimagine 是近年流行词", "强调'以全新方式构想'"],
    summary: "reimagine = 重新想象，重新构想"
  },
  {
    word: "sustenance",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈsʌstənəns/", us: "/ˈsʌstənəns/" },
    root: {
      components: [
        { part: "sustin-", meaning: "支撑，维持", origin: "拉丁语 sustinere" },
        { part: "-ance", meaning: "名词后缀", origin: "" }
      ],
      explanation: "sustenance =  sustenance = 食物，营养，维持"
    },
    logic: {
      premise: "生命需要持续的能量供应",
      feature: "提供维持生命所需的营养",
      result: "维持生存和健康",
      essence: "维持生命的必需品"
    },
    usage: [
      {
        context: "食物",
        example: "seek sustenance",
        explanation: "寻找食物"
      },
      {
        context: "支持",
        example: "emotional sustenance",
        explanation: "情感支持"
      }
    ],
    distinction: [
      { word: "food", essence: "食物" },
      { word: "nutrition", essence: "营养" },
      { word: "sustenance", essence: "食物，维持（强调支撑生命）" }
    ],
    memory: {
      methods: ["词根：sustain（维持）+ ance", "联想：维持生命的东西"],
      visualHint: "野外求生时找到的食物和水源"
    },
    pitfalls: ["sustenance 强调'维持生命'的意义", "可指物质或精神支持"],
    summary: "sustenance = 食物，营养，维持"
  },
  {
    word: "disproportionate",
    partOfSpeech: "adj",
    phonetic: { uk: "/ˌdɪsprəˈpɔːʃənət/", us: "/ˌdɪsprəˈpɔːrʃənət/" },
    root: {
      components: [
        { part: "dis-", meaning: "不，相反", origin: "" },
        { part: "proportion", meaning: "比例", origin: "" },
        { part: "-ate", meaning: "形容词后缀", origin: "" }
      ],
      explanation: "disproportionate = 不成比例的"
    },
    logic: {
      premise: "期望各部分按比例",
      feature: "实际与期望比例不符",
      result: "某部分过大或过小",
      essence: "与正常比例不相称"
    },
    usage: [
      {
        context: "不成比例的",
        example: "disproportionate influence",
        explanation: "不成比例的影响力"
      }
    ],
    distinction: [
      { word: "unequal", essence: "不平等的" },
      { word: "unbalanced", essence: "不平衡的" },
      { word: "disproportionate", essence: "不成比例的" }
    ],
    memory: {
      methods: ["dis（不）+ proportion（比例）+ ate", "副词形式：disproportionately"],
      visualHint: "大头小身体的卡通人物"
    },
    pitfalls: ["disproportionate 是形容词", "常指'过大'的不成比例"],
    summary: "disproportionate = 不成比例的"
  },
  {
    word: "donor",
    partOfSpeech: "n",
    phonetic: { uk: "/ˈdəʊnə(r)/", us: "/ˈdoʊnər/" },
    root: {
      components: [
        { part: "don-", meaning: "给", origin: "拉丁语 donare" },
        { part: "-or", meaning: "人，名词后缀", origin: "" }
      ],
      explanation: "donor = 捐赠者，捐献者"
    },
    logic: {
      premise: "某人拥有资源",
      feature: "自愿给予他人或机构",
      result: "成为捐赠者",
      essence: "自愿给予的人"
    },
    usage: [
      {
        context: "捐赠者",
        example: "blood donor",
        explanation: "献血者"
      },
      {
        context: "器官捐献者",
        example: "organ donor",
        explanation: "器官捐献者"
      }
    ],
    distinction: [
      { word: "giver", essence: "给予者" },
      { word: "contributor", essence: "贡献者" },
      { word: "donor", essence: "捐赠者（正式）" }
    ],
    memory: {
      methods: ["词根：don = donate（捐赠）", "联想：donor = do + nor，做好事的人"],
      visualHint: "献血者在献血站捐血"
    },
    pitfalls: ["donor 是正式用语", "与 recipient（接受者）相对"],
    summary: "donor = 捐赠者，捐献者"
  },
  {
    word: "jack",
    partOfSpeech: "n",
    phonetic: { uk: "/dʒæk/", us: "/dʒæk/" },
    root: {
      components: [
        { part: "jack", meaning: "千斤顶，插座", origin: "" }
      ],
      explanation: "jack = 千斤顶，插座，提高"
    },
    logic: {
      premise: "需要提升重物",
      feature: "使用机械装置施加力量",
      result: "将重物抬起",
      essence: "提升重物的工具"
    },
    usage: [
      {
        context: "千斤顶",
        example: "car jack",
        explanation: "汽车千斤顶"
      },
      {
        context: "插座",
        example: "headphone jack",
        explanation: "耳机插孔"
      },
      {
        context: "提高",
        example: "jack up the prices",
        explanation: "抬高价格"
      }
    ],
    distinction: [
      { word: "lift", essence: "举起" },
      { word: "jack", essence: "千斤顶，插孔，抬高（口语）" }
    ],
    memory: {
      methods: ["Jack 也是常见男子名", "联想：用千斤顶抬起汽车换轮胎"],
      visualHint: "汽车千斤顶把车顶起来"
    },
    pitfalls: ["jack 多义词：人名、工具、动词", "jack up = 抬高（价格）"],
    summary: "jack = 千斤顶，插座，提高"
  },
  {
    word: "un",
    partOfSpeech: "prefix",
    phonetic: { uk: "/ʌn/", us: "/ʌn/" },
    root: {
      components: [
        { part: "un", meaning: "联合国", origin: "United Nations" }
      ],
      explanation: "UN = United Nations，联合国"
    },
    logic: {
      premise: "国际事务需要协调",
      feature: "各国组成国际组织",
      result: "联合国作为全球性组织",
      essence: "国际合作的组织"
    },
    usage: [
      {
        context: "联合国",
        example: "UN peacekeeping forces",
        explanation: "联合国维和部队"
      }
    ],
    distinction: [
      { word: "United Nations", essence: "联合国（全称）" },
      { word: "UN", essence: "联合国（缩写）" }
    ],
    memory: {
      methods: ["U（United）N（Nations）", "常见缩写"],
      visualHint: "联合国总部大楼和旗帜"
    },
    pitfalls: ["UN 是 United Nations 的缩写", "注意大写"],
    summary: "UN = 联合国"
  }
];