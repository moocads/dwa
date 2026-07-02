import type { LocaleCode, Translations } from "../types"
import { ar } from "./ar"
import { en } from "./en"
import { es } from "./es"
import { fr } from "./fr"
import { ja } from "./ja"
import { ko } from "./ko"
import { pt } from "./pt"
import { th } from "./th"
import { vi } from "./vi"
import { zhHans } from "./zh-Hans"
import { zhHant } from "./zh-Hant"

export const messages: Record<LocaleCode, Translations> = {
  en,
  es,
  fr,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
  pt,
  ar,
  vi,
  th,
  ko,
}
