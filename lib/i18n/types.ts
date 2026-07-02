export type LocaleCode =
  | "en"
  | "es"
  | "fr"
  | "zh-Hans"
  | "zh-Hant"
  | "ja"
  | "pt"
  | "ar"
  | "vi"
  | "th"
  | "ko"

export type FeatureKey =
  | "lowCost"
  | "antiDdos"
  | "quantum"
  | "decentralized"
  | "communication"
  | "ownership"

export type ProtocolKey = "network" | "privacy" | "ai" | "rwa" | "dao"

export type EcosystemModuleKey =
  | "rwa"
  | "card"
  | "earn"
  | "wallet"
  | "swap"
  | "ai"
  | "lending"
  | "social"
  | "web3"

export interface Translations {
  nav: {
    home: string
    whyChoose: string
    technology: string
    ecosystem: string
    vision: string
    partners: string
    launchApp: string
  }
  hero: {
    headline1: string
    headline2: string
    headline3: string
    tagline: string
    taglineMobile2: string
    taglineMobile3: string
    taglineDesktop: [string, string, string, string, string, string]
    launchApp: string
  }
  whyChoose: {
    title: string
    features: Record<FeatureKey, { title: string; description: string }>
    readMore: string
    readLess: string
  }
  technology: {
    title: string
    subtitle: string
    bannerAlt: string
    protocols: Record<ProtocolKey, { title: string; copy: string; keywords: string[] }>
  }
  ecosystem: {
    title: string
    p1: string
    p2: string
    bannerAlt: string
    gridHintMobile: string
    gridHintDesktop: string
    modules: Record<EcosystemModuleKey, { name: string; tag: string; desc: string }>
  }
  vision: {
    title: string
    subtitle: string
    intro: string
    definition: string
    pillars: [string, string, string, string, string, string]
    closing: string
  }
  partners: {
    title: string
    copy: string
  }
  footer: {
    copyright: string
  }
  common: {
    selectLanguage: string
  }
}

export type LanguageOption = {
  code: LocaleCode
  label: string
  flag: string
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", flag: "us" },
  { code: "es", label: "Español", flag: "es" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "zh-Hans", label: "简体中文", flag: "cn" },
  { code: "zh-Hant", label: "繁體中文", flag: "cn" },
  { code: "ja", label: "日本語", flag: "jp" },
  { code: "pt", label: "Português", flag: "pt" },
  { code: "ar", label: "العربية", flag: "sa" },
  { code: "vi", label: "Tiếng Việt", flag: "vn" },
  { code: "th", label: "ไทย", flag: "th" },
  { code: "ko", label: "한국어", flag: "kr" },
]

export const DEFAULT_LOCALE: LocaleCode = "en"
export const STORAGE_KEY = "dwa-lang"
