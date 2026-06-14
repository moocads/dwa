import type { Translations } from "../types"

export const zhHant: Translations = {
  nav: {
    home: "首頁",
    whyChoose: "為何選擇 DWA",
    technology: "技術優勢",
    ecosystem: "生態系",
    vision: "我們的願景",
    partners: "合作夥伴",
    launchApp: "啟動DApp",
  },
  hero: {
    headline1: "全球首個",
    headline2: "去中心化",
    headline3: "貝萊德",
    tagline: "DWA 是由 AI × Web3 × DAO × RWA 驅動的 Web3 金融作業系統",
    taglineMobile2: "為所有人打造的",
    taglineMobile3: "WEB3 金融作業系統",
    taglineDesktop: ["DWA", "為所有人", "打造的 WEB3", "金融", "作業", "系統"],
    launchApp: "啟動DApp",
  },
  whyChoose: {
    title: "為何選擇 DWA？",
    features: {
      lowCost: {
        title: "低成本、免網域運行",
        description:
          "應用部署接近零成本，並可在無網域情境下存取，不需依賴昂貴雲端基礎設施或中心化伺服器。",
      },
      antiDdos: {
        title: "抗 DDoS 與隱私防護",
        description:
          "透過去中心化網路與加密通訊，有效防禦 DDoS、資料外洩與平台控制風險。",
      },
      quantum: {
        title: "抗量子安全能力",
        description:
          "採用先進密碼學機制，面向未來運算威脅提供長期韌性。",
      },
      decentralized: {
        title: "完全去中心化應用",
        description:
          "去中心化涵蓋應用存取、資料傳輸、身分、資產與治理，不只侷限於鏈上資產。",
      },
      communication: {
        title: "可信且無國界通訊",
        description:
          "實現應用與裝置間資料可信傳輸及跨境訊息互通，不受地理或網路邊界限制。",
      },
      ownership: {
        title: "存取驗證與資產主權",
        description:
          "使用者可自主管理身分、資料、應用存取與資產入口，避免平台片面封鎖。",
      },
    },
    readMore: "閱讀更多",
    readLess: "收合",
  },
  technology: {
    title: "我們的核心技術",
    subtitle: "核心技術",
    bannerAlt: "DWA 核心技術",
    protocols: {
      network: {
        title: "去中心化網路協議",
        copy: "建構 P2P 疊加網路，降低單點故障風險，實現抗審查、全球可達與去中心化應用執行環境。",
        keywords: ["P2P 網路", "無單點故障", "抗審查", "全球存取", "地址即應用框架"],
      },
      privacy: {
        title: "隱私與加密協議",
        copy: "透過加密通訊、內容隱私、關係隱私與多點分發機制，保護使用者資料、互動行為與金融隱私。",
        keywords: ["關係隱私", "內容隱私", "混合加密", "加密通訊", "資料安全"],
      },
      ai: {
        title: "AI Agent 推理與策略協議",
        copy: "內建 AI Agent 在協議規則下執行市場分析、策略輔助、路徑最佳化、風險辨識與智慧排程。",
        keywords: ["AI Agent", "策略推理", "多代理協作", "風險辨識", "智慧排程"],
      },
      rwa: {
        title: "RWA 資產協議",
        copy: "串接現實世界資產與鏈上資產網路，支援 RWA 資產上鏈、映射、流通與協議化管理。",
        keywords: ["RWA", "實體資產代幣化", "資產協議化", "鏈上流動性", "全球資產入口"],
      },
      dao: {
        title: "DAO 治理與組織協議",
        copy: "透過 DAO 治理管理系統參數、規則升級、生態協作與長期演進，讓 DWA 由中心化平台轉型為自我治理金融網路。",
        keywords: ["DAO 治理", "參數管理", "協議升級", "社群協調", "自我演進"],
      },
    },
  },
  ecosystem: {
    title: "我們的生態系統",
    p1: "DWA 九大生態支柱：構建完整的 Web3 金融閉環",
    p2: "涵蓋交易、支付、資產管理、RWA、AI、應用基礎設施、錢包、社交與DeFi 借貸，九大支柱共同形成鏈上資產完整閉環。",
    bannerAlt: "DWA 生態全覽",
    gridHintMobile: "點選模組即可展開查看功能說明。",
    gridHintDesktop: "Web3 應用網路位於中心，連接各個模組。懸停或點擊卡片可查看模組說明。",
    modules: {
      rwa: {
        name: "RWA 協議",
        tag: "實物資產上鏈",
        desc: "傳統資產的數字化通道，將房地產、債券等轉為鏈上 Token，實現合規資產代幣化與自由流通。",
      },
      card: {
        name: "DWA Card",
        tag: "Web3 支付卡",
        desc: "連接加密與現實消費，支持全球支付，讓數字資產可用于日常支付，支持實時法幣結算。",
      },
      earn: {
        name: "DWA Earn",
        tag: "鏈上理財平台",
        desc: "智能的資產增值引擎，提供質押與借貸等策略，實現智能收益聚合，幫助資產穩健增值。",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "去中心化多鏈錢包",
        desc: "統一管理全網資產，提供安全便捷的 Web3 入口，保障用戶資產的絕對控制權與隱私安全。",
      },
      web3: {
        name: "Web3 應用網路",
        tag: "去中心化應用開發",
        desc: "大規模 Web3 應用基礎設施，支持免域伺服器運行，實現低成本甚至零成本的應用部署與全球分發。",
      },
      swap: {
        name: "DWA Swap",
        tag: "去中心化交易所",
        desc: "生態的流動性心臟，提供安全，高效的鏈上資產兌換服務，實現無縫跨鏈與深度流動性聚合。",
      },
      ai: {
        name: "AI Agent",
        tag: "智能金融引擎",
        desc: "智能金融引擎，提供 AI 策略訂閱與 AI 自動化理財，讓投資決策更精准高效。",
      },
      lending: {
        name: "DWA Lending",
        tag: "借貸與質押協議",
        desc: "提供鏈上借貸、抵押與流動性釋放，提高資產使用效率與收益，為生態提供強大的金融槓桿。",
      },
      social: {
        name: "DWA Social",
        tag: "去中心化身份與社交",
        desc: "建立去中心化身份(DID)，沉淀鏈上社交關係與信用，為用戶構建專屬的 Web3 社交名片。",
      }
    },
  },
  vision: {
    title: "DWA的最終願景",
    subtitle: "自治資產管理文明",
    intro: "DWA 的終極形態不是一個平台，而是：",
    definition: "一個全球自治的資產管理文明體系",
    pillars: [
      "資產來自全球",
      "策略由 AI 執行",
      "安全由鏈上保障",
      "規則由 DAO 制定",
      "價值由用戶共享",
      "生態可無限擴展",
    ],
    closing: "這是 BlackRock 的下一代版本：它不屬於任何機構，屬於全球用戶",
  },
  partners: {
    title: "我們的合作夥伴",
    copy: "DWA 與全球領先的區塊鏈網路、數位資產、RWA 協議與 Web3 金融基礎設施建立開放連結，推動鏈上資產時代的生態協作。",
  },
  footer: {
    copyright: "© {year} DWA Labs. 版權所有。",
  },
  common: {
    selectLanguage: "選擇語言",
  },
}
