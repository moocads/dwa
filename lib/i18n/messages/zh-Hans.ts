import type { Translations } from "../types"

export const zhHans: Translations = {
  nav: {
    home: "首页",
    whyChoose: "为什么选择 DWA",
    technology: "技术优势",
    ecosystem: "生态系统",
    vision: "我们的愿景",
    partners: "合作伙伴",
    launchApp: "启动DApp",
  },
  hero: {
    headline1: "全球首个",
    headline2: "去中心化",
    headline3: "贝莱德",
    tagline: "DWA 是由 AI × Web3 × DAO × RWA 驱动的 Web3 金融操作系统",
    taglineMobile2: "面向所有人的",
    taglineMobile3: "WEB3 金融操作系统",
    taglineDesktop: ["DWA", "面向", "所有人的", "WEB3", "金融", "操作系统"],
    launchApp: "启动DApp",
  },
  whyChoose: {
    title: "为什么选择 DWA？",
    features: {
      lowCost: {
        title: "低成本、无域名运行",
        description:
          "应用部署几乎零成本，并可无域名访问，不再依赖高成本云基础设施或中心化服务器。",
      },
      antiDdos: {
        title: "抗DDoS与隐私保护",
        description:
          "通过去中心化网络与加密通信，有效抵御 DDoS、数据泄露与平台控制。",
      },
      quantum: {
        title: "量子安全",
        description:
          "采用先进密码学方案，为未来算力威胁提供长期韧性保障。",
      },
      decentralized: {
        title: "完全去中心化应用",
        description:
          "去中心化覆盖应用访问、数据传输、身份、资产与治理，不仅限于链上资产。",
      },
      communication: {
        title: "可信且无边界通信",
        description:
          "实现应用到设备的数据可信传输与跨地域消息通信，不受地理与网络边界限制。",
      },
      ownership: {
        title: "访问认证与所有权",
        description:
          "用户自主掌控身份、数据、应用访问与资产入口，避免平台单方面封禁。",
      },
    },
    readMore: "展开更多",
    readLess: "收起",
  },
  technology: {
    title: "核心技术",
    subtitle: "DWA核心技术",
    bannerAlt: "DWA 核心技术",
    protocols: {
      network: {
        title: "去中心化网络协议",
        copy: "构建 P2P 覆盖网络，降低单点故障风险，实现抗审查、全球可达与去中心化应用运行环境。",
        keywords: ["P2P 网络", "无单点故障", "抗审查", "全球访问", "地址即应用框架"],
      },
      privacy: {
        title: "隐私与加密协议",
        copy: "通过加密通信、内容隐私、关系隐私与多点分发机制，保护用户数据、交互行为与金融隐私。",
        keywords: ["关系隐私", "内容隐私", "混合加密", "加密通信", "数据安全"],
      },
      ai: {
        title: "AI Agent 推理与策略协议",
        copy: "内置 AI Agent 在协议规则下执行市场分析、策略辅助、路径优化、风险识别与智能调度。",
        keywords: ["AI Agent", "策略推理", "多智能体协作", "风险识别", "智能调度"],
      },
      rwa: {
        title: "RWA 资产协议",
        copy: "连接现实世界资产与链上资产网络，支持 RWA 资产上链、映射、流通与协议化管理。",
        keywords: ["RWA", "现实资产代币化", "资产协议化", "链上流动性", "全球资产入口"],
      },
      dao: {
        title: "DAO 治理与组织协议",
        copy: "通过 DAO 治理管理系统参数、规则升级、生态协同与长期演进，将 DWA 从中心化平台升级为自治理金融网络。",
        keywords: ["DAO 治理", "参数管理", "协议升级", "社区协同", "自我演进"],
      },
    },
  },
  ecosystem: {
    title: "生态系统",
    p1: "DWA 九大生态支柱：构建完整的 Web3 金融闭环",
    p2: "覆盖交易、支付、资产管理、RWA、AI、应用基础设施、钱包、社交与DeFi 借贷，九大支柱共同形成链上资产完整闭环。",
    bannerAlt: "DWA 生态全景",
    gridHintMobile: "悬停或点击卡片可查看模块说明。",
    gridHintDesktop: "悬停或点击卡片可查看模块说明。",
    modules: {
      rwa: {
        name: "RWA 协议",
        tag: "实物资产上链",
        desc: "传统资产的数字化通道，将房地产、债券等转为链上 Token，实现合规资产代币化与自由流通。",
      },
      card: {
        name: "DWA Card",
        tag: "Web3 支付卡",
        desc: "连接加密与现实消费，支持全球商户，让数字资产可用于日常支付，支持实时法币结算。",
      },
      earn: {
        name: "DWA Earn",
        tag: "链上理财平台",
        desc: "智能的资产增值引擎，提供质押与借贷等策略，实现智能收益聚合，帮助资产稳健增值。",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "去中心化多链钱包",
        desc: "统一管理全网资产，提供安全便捷的 Web3 入口，保障用户资产的绝对控制权与隐私安全。",
      },
      swap: {
        name: "DWA Swap",
        tag: "去中心化交易所",
        desc: "生态的流动性心脏，提供安全，高效的链上资产兑换服务，实现无缝跨链与深度流动性聚合。",
      },
      ai: {
        name: "AI Agent",
        tag: "智能金融引擎",
        desc: "智能金融引擎，提供 AI 策略订阅与 AI 自动化理财，让投资决策更精准高效。",
      },
      lending: {
        name: "DeFi 借贷",
        tag: "借贷与质押协议",
        desc: "去中心化借贷与质押服务，释放资产流动性，提高资金利用率与收益，为生态提供强大的金融杠杆。",
      },
      social: {
        name: "DWA Social",
        tag: "去中心化身份与社交",
        desc: "建立去中心化身份(DID)，沉淀链上社交关系与信用，为用户构建专属的 Web3 社交名片。",
      },
      web3: {
        name: "Web3 应用网络",
        tag: "去中心化应用开发",
        desc: "大规模 Web3 应用基础设施，支持免域服务器运行，实现低成本甚至零成本的应用部署与全球分发。",
      },
    },
  },
  vision: {
    title: "我们的愿景",
    subtitle: "自治资产管理文明",
    intro: "DWA 的终极形态不是一个平台，",
    definition: "DWA是一个全球自治的资产管理文明体系",
    pillars: [
      "资产来自全球",
      "策略由 AI 执行",
      "安全由链上保障",
      "规则由 DAO 制定",
      "价值由用户共享",
      "生态可无限扩展",
    ],
    closing: "这是 BlackRock 的下一代版本：它不属于任何机构，属于全球用户。",
  },
  partners: {
    title: "合作伙伴",
    copy: "DWA 正在与全球领先的区块链网络、数字资产、RWA 协议与 Web3 金融基础设施建立开放连接，推动链上资产时代的生态协作。",
  },
  footer: {
    copyright: "© {year} DWA Labs. 保留所有权利。",
  },
  common: {
    selectLanguage: "选择语言",
  },
}
