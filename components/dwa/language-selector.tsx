"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLocale } from "@/contexts/locale-context"
import { LANGUAGES } from "@/lib/i18n/types"

function Flag({ code, className }: { code: string; className?: string }) {
  return (
    <span
      className={cn(
        "fi rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
        `fi-${code}`,
        className
      )}
      style={{ width: "1.25rem", height: "0.9375rem" }}
      aria-hidden
    />
  )
}

export function LanguageSelector() {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.common.selectLanguage}
        className="flex items-center gap-1.5 rounded-full border border-dwa-border px-2.5 py-2 text-dwa-text transition-colors duration-300 hover:border-dwa-orange hover:text-white sm:gap-2 sm:px-3"
      >
        <Flag code={current.flag} />
        <span className="hidden text-xs font-medium sm:inline">
          {current.label}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-dwa-border bg-dwa-bg/95 p-1 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-lg"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === locale
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(lang.code)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors",
                    active
                      ? "bg-dwa-orange/10 text-dwa-orange"
                      : "text-dwa-text hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Flag code={lang.flag} />
                  <span className="flex-1 font-medium">{lang.label}</span>
                  {active && <Check className="h-3.5 w-3.5" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
