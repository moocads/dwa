"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { messages } from "@/lib/i18n/messages"
import {
  DEFAULT_LOCALE,
  STORAGE_KEY,
  type LocaleCode,
  type Translations,
} from "@/lib/i18n/types"

type LocaleContextValue = {
  locale: LocaleCode
  t: Translations
  setLocale: (locale: LocaleCode) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function isLocaleCode(value: string): value is LocaleCode {
  return value in messages
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(DEFAULT_LOCALE)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isLocaleCode(stored)) {
      setLocaleState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLocale = useCallback((next: LocaleCode) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      setLocale,
    }),
    [locale, setLocale]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}

export function useTranslations() {
  return useLocale().t
}
