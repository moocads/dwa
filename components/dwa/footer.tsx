"use client"

import { useTranslations } from "@/contexts/locale-context"

export function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dwa-bg py-12 border-t border-dwa-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-dwa-text/60 text-xs">
          {t.footer.copyright.replace("{year}", String(year))}
        </p>
      </div>
    </footer>
  )
}
