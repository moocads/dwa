export type LocaleCode =
  | "en"
  | "es"
  | "fr"
  | "zh-Hans"
  | "zh-Hant"
  | "ja"
  | "pt"
  | "ar"

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
    label: string
    title: string
    titleHighlight: string
    p1: string
    p2: string
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
]

export const DEFAULT_LOCALE: LocaleCode = "en"
export const STORAGE_KEY = "dwa-lang"
