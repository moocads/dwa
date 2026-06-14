import type { Translations } from "../types"

export const zhHans: Translations = {
  nav: {
    home: "首页",
    whyChoose: "为什么选择 DWA",
    technology: "技术优势",
    ecosystem: "生态系统",
    vision: "我们的愿景",
    partners: "合作伙伴",
    launchApp: "启动应用",
  },
  hero: {
    headline1: "全球首个",
    headline2: "去中心化",
    headline3: "BLACKROCK黑石",
    tagline: "DWA 是由 AI × Web3 × DAO × RWA 驱动的 Web3 金融操作系统",
    taglineMobile2: "面向所有人的",
    taglineMobile3: "WEB3 金融操作系统",
    taglineDesktop: ["DWA", "面向所有人", "的 WEB3", "金融", "操作", "系统"],
    launchApp: "启动应用",
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
    title: "技术",
    subtitle: "核心技术",
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
    title: "DWA生态系统",
    p1: "DWA 不是单一功能产品，而是由九大生态支柱构成的 Web3 金融操作系统。",
    p2: "覆盖交易、支付、资产管理、RWA、AI、应用基础设施、钱包、社交与借贷，九大支柱共同形成链上资产完整闭环。",
    bannerAlt: "DWA 生态全景",
    gridHintMobile: "点击模块可展开查看其功能。",
    gridHintDesktop: "流动性由中心的 DWA Swap 向各模块流动。悬停或点击卡片可查看模块说明。",
    modules: {
      rwa: {
        name: "RWA 协议",
        tag: "现实世界资产",
        desc: "连接房地产、债券、基金、股票、黄金、ETF 等现实资产与 Web3 流动性。",
      },
      card: {
        name: "DWA Card",
        tag: "支付",
        desc: "连接加密资产与现实消费及全球支付清算。",
      },
      earn: {
        name: "DWA Earn",
        tag: "收益",
        desc: "为用户提供资产配置、策略聚合与链上金融服务。",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "账户",
        desc: "统一链上身份、多链资产管理、交易记录与生态入口。",
      },
      swap: {
        name: "DWA Swap",
        tag: "流动性核心",
        desc: "提供链上兑换、跨链交易与流动性聚合，是整个 DWA 生态的核心引擎。",
      },
      ai: {
        name: "AI Agent",
        tag: "智能",
        desc: "提供市场分析、策略辅助、风险识别与自动化金融决策支持。",
      },
      lending: {
        name: "DWA Lending",
        tag: "信用",
        desc: "提供链上借贷、抵押与流动性释放，提升资产使用效率。",
      },
      social: {
        name: "DWA Social",
        tag: "身份",
        desc: "提供去中心化身份（DID）、链上关系、社交信用与 Web3 画像。",
      },
      web3: {
        name: "Web3 应用网络",
        tag: "基础设施",
        desc: "支持低成本 Web3 应用部署，具备无服务器运行、全球访问与生态扩展能力。",
      },
    },
  },
  vision: {
    label: "DWA最终愿景",
    title: "构建一个全球自治的资产管理文明体系。",
    titleHighlight: "面向全球。",
    p1: "让来自各地的资产，人人可及。",
    p2: "每一项策略由你定义，由 AI 执行。",
  },
  partners: {
    title: "我们的合作伙伴",
    copy: "DWA 正在与全球领先的区块链网络、数字资产、RWA 协议与 Web3 金融基础设施建立开放连接，推动链上资产时代的生态协作。",
  },
  footer: {
    copyright: "© {year} DWA Labs. 保留所有权利。",
  },
  common: {
    selectLanguage: "选择语言",
  },
}
