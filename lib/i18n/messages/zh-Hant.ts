import type { Translations } from "../types"

export const zhHant: Translations = {
  nav: {
    home: "首頁",
    whyChoose: "為何選擇 DWA",
    technology: "技術優勢",
    ecosystem: "生態系",
    vision: "我們的願景",
    partners: "合作夥伴",
    launchApp: "啟動應用程式",
  },
  hero: {
    headline1: "全球首個",
    headline2: "去中心化",
    headline3: "BLACKROCK黑石",
    tagline: "DWA 是由 AI × Web3 × DAO × RWA 驅動的 Web3 金融作業系統",
    taglineMobile2: "為所有人打造的",
    taglineMobile3: "WEB3 金融作業系統",
    taglineDesktop: ["DWA", "為所有人", "打造的 WEB3", "金融", "作業", "系統"],
    launchApp: "啟動應用程式",
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
    title: "技術",
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
    title: "生態系",
    p1: "DWA 並非單一功能產品，而是由九大生態支柱構成的 Web3 金融作業系統。",
    p2: "涵蓋交易、支付、資產管理、RWA、AI、應用基礎設施、錢包、社交與借貸，九大支柱共同形成鏈上資產完整閉環。",
    bannerAlt: "DWA 生態全覽",
    gridHintMobile: "點選模組即可展開查看功能說明。",
    gridHintDesktop: "流動性由中央的 DWA Swap 向各模組擴散。滑過或點擊卡片即可查看其功能。",
    modules: {
      rwa: {
        name: "RWA 協議",
        tag: "現實世界資產",
        desc: "串接房地產、債券、基金、股票、黃金、ETF 等現實資產與 Web3 流動性。",
      },
      card: {
        name: "DWA Card",
        tag: "支付",
        desc: "連接加密資產與現實消費場景，支援全球支付清算。",
      },
      earn: {
        name: "DWA Earn",
        tag: "收益",
        desc: "提供資產配置、策略聚合與鏈上金融服務。",
      },
      wallet: {
        name: "DWA Wallet",
        tag: "帳戶",
        desc: "整合鏈上身分、多鏈資產管理、交易紀錄與生態入口。",
      },
      swap: {
        name: "DWA Swap",
        tag: "流動性核心",
        desc: "提供鏈上交換、跨鏈交易與流動性聚合，是整個 DWA 生態的核心引擎。",
      },
      ai: {
        name: "AI Agent",
        tag: "智慧",
        desc: "提供市場分析、策略輔助、風險辨識與自動化金融決策支援。",
      },
      lending: {
        name: "DWA Lending",
        tag: "信用",
        desc: "提供鏈上借貸、抵押與流動性釋放，提升資產使用效率。",
      },
      social: {
        name: "DWA Social",
        tag: "身分",
        desc: "提供去中心化身分（DID）、鏈上關係、社交信用與 Web3 個人檔案。",
      },
      web3: {
        name: "Web3 應用網路",
        tag: "基礎設施",
        desc: "支援低成本 Web3 應用部署，具備無伺服器執行、全球存取與生態擴充能力。",
      },
    },
  },
  vision: {
    label: "DWA最終願景",
    title: "構建一個全球自治的資產管理文明體系。",
    titleHighlight: "面向全球。",
    p1: "讓來自各地的資產，人人可及。",
    p2: "每一項策略由你定義，由 AI 執行。",
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
