import type { Translations } from "../types"

export const zhHant: Translations = {
  nav: {
    home: "首頁",
    whyChoose: "為什麼選擇 DWA",
    technology: "技術優勢",
    ecosystem: "生態系統",
    vision: "我們的願景",
    partners: "合作夥伴",
    launchApp: "啟動DApp",
  },
  hero: {
    headline1: "全球首個",
    headline2: "去中心化",
    headline3: "貝萊德",
    tagline: "DWA 是由 AI × Web3 × DAO × RWA 驅動的 Web3 金融作業系統",
    taglineMobile2: "面向所有人的",
    taglineMobile3: "WEB3 金融作業系統",
    taglineDesktop: ["DWA", "面向", "所有人的", "WEB3", "金融", "作業系統"],
    launchApp: "啟動DApp",
  },
  whyChoose: {
    title: "為什麼選擇 DWA？",
    features: {
      lowCost: {
        title: "低成本、無網域運行",
        description:
          "應用部署幾乎零成本，並可無網域存取，不再依賴高成本雲端基礎設施或中心化伺服器。",
      },
      antiDdos: {
        title: "抗 DDoS 與隱私保護",
        description:
          "透過去中心化網路與加密通訊，有效抵禦 DDoS、資料外洩與平台控制。",
      },
      quantum: {
        title: "量子安全",
        description:
          "採用先進密碼學方案，為未來算力威脅提供長期韌性保障。",
      },
      decentralized: {
        title: "完全去中心化應用",
        description:
          "去中心化涵蓋應用存取、資料傳輸、身分、資產與治理，不僅限於鏈上資產。",
      },
      communication: {
        title: "可信且無邊界通訊",
        description:
          "實現應用到裝置的資料可信傳輸與跨地域訊息通訊，不受地理與網路邊界限制。",
      },
      ownership: {
        title: "存取認證與所有權",
        description:
          "使用者自主掌控身分、資料、應用存取與資產入口，避免平台單方面封禁。",
      },
    },
    readMore: "展開更多",
    readLess: "收起",
  },
  technology: {
    title: "核心技術",
    subtitle: "DWA核心技術",
    bannerAlt: "DWA 核心技術",
    protocols: {
      network: {
        title: "去中心化網路協議",
        copy: "建構 P2P 覆蓋網路，降低單點故障風險，實現抗審查、全球可達與去中心化應用運行環境。",
        keywords: ["P2P 網路", "無單點故障", "抗審查", "全球存取", "地址即應用框架"],
      },
      privacy: {
        title: "隱私與加密協議",
        copy: "透過加密通訊、內容隱私、關係隱私與多點分發機制，保護使用者資料、互動行為與金融隱私。",
        keywords: ["關係隱私", "內容隱私", "混合加密", "加密通訊", "資料安全"],
      },
      ai: {
        title: "AI Agent 推理與策略協議",
        copy: "內建 AI Agent 在協議規則下執行市場分析、策略輔助、路徑優化、風險識別與智慧排程。",
        keywords: ["AI Agent", "策略推理", "多智慧體協作", "風險識別", "智慧排程"],
      },
      rwa: {
        title: "RWA 資產協議",
        copy: "連接現實世界資產與鏈上資產網路，支援 RWA 資產上鏈、映射、流通與協議化管理。",
        keywords: ["RWA", "現實資產代幣化", "資產協議化", "鏈上流動性", "全球資產入口"],
      },
      dao: {
        title: "DAO 治理與組織協議",
        copy: "透過 DAO 治理管理系統參數、規則升級、生態協同與長期演進，將 DWA 從中心化平台升級為自治理金融網路。",
        keywords: ["DAO 治理", "參數管理", "協議升級", "社群協同", "自我演進"],
      },
    },
  },
  ecosystem: {
    title: "生態系統",
    p1: "DWA 九大生態支柱：構建完整的 Web3 金融閉環",
    p2: "涵蓋交易、支付、資產管理、RWA、AI、應用基礎設施、錢包、社交與 DeFi 借貸，九大支柱共同形成鏈上資產完整閉環。",
    bannerAlt: "DWA 生態全景",
    gridHintMobile: "Web3 應用網路位於中心，連接各個模組。懸停或點擊卡片可查看模組說明。",
    gridHintDesktop: "Web3 應用網路位於中心，連接各個模組。懸停或點擊卡片可查看模組說明。",
    modules: {
      rwa: {
        name: "RWA 協議",
        tag: "實物資產上鏈",
        desc: "傳統資產的數位化通道，將房地產、債券等轉為鏈上 Token，實現合規資產代幣化與自由流通。",
      },
      card: {
        name: "DWA Card",
        tag: "Web3 支付卡",
        desc: "連接加密與現實消費，支援全球商戶，讓數位資產可用於日常支付，支援即時法幣結算。",
      },
      earn: {
        name: "DWA Earn",
        tag: "鏈上理財平台",
        desc: "智慧的資產增值引擎，提供質押與借貸等策略，實現智慧收益聚合，幫助資產穩健增值。",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "去中心化多鏈錢包",
        desc: "統一管理全網資產，提供安全便捷的 Web3 入口，保障使用者資產的絕對控制權與隱私安全。",
      },
      swap: {
        name: "DWA Swap",
        tag: "去中心化交易所",
        desc: "生態的流動性心臟，提供安全、高效的鏈上資產兌換服務，實現無縫跨鏈與深度流動性聚合。",
      },
      ai: {
        name: "AI Agent",
        tag: "智慧金融引擎",
        desc: "智慧金融引擎，提供 AI 策略訂閱與 AI 自動化理財，讓投資決策更精準高效。",
      },
      lending: {
        name: "DeFi 借貸",
        tag: "借貸與質押協議",
        desc: "去中心化借貸與質押服務，釋放資產流動性，提高資金利用率與收益，為生態提供強大的金融槓桿。",
      },
      social: {
        name: "DWA Social",
        tag: "去中心化身分與社交",
        desc: "建立去中心化身分（DID），沉澱鏈上社交關係與信用，為使用者構建專屬的 Web3 社交名片。",
      },
      web3: {
        name: "Web3 應用網路",
        tag: "去中心化應用開發",
        desc: "大規模 Web3 應用基礎設施，支援免網域伺服器運行，實現低成本甚至零成本的應用部署與全球分發。",
      },
    },
  },
  vision: {
    title: "我們的願景",
    subtitle: "自治資產管理文明",
    intro: "DWA 的終極形態不是一個平台，",
    definition: "DWA 是一個全球自治的資產管理文明體系",
    pillars: [
      "資產來自全球",
      "策略由 AI 執行",
      "安全由鏈上保障",
      "規則由 DAO 制定",
      "價值由使用者共享",
      "生態可無限擴展",
    ],
    closing: "這是 BlackRock 的下一代版本：它不屬於任何機構，屬於全球使用者。",
  },
  partners: {
    title: "合作夥伴",
    copy: "DWA 正在與全球領先的區塊鏈網路、數位資產、RWA 協議與 Web3 金融基礎設施建立開放連接，推動鏈上資產時代的生態協作。",
  },
  footer: {
    copyright: "© {year} DWA Labs. 保留所有權利。",
  },
  common: {
    selectLanguage: "選擇語言",
  },
}
