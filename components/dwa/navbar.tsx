"use client"

import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { LanguageSelector } from "@/components/dwa/language-selector"
import { useLocale } from "@/contexts/locale-context"

type NavId = "home" | "why-dwa" | "technology" | "ecosystem" | "vision" | "partners"

const NAV_OFFSET = 88

export function Navbar() {
  const { t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<NavId>("home")

  const navItems = useMemo(
    () =>
      [
        { id: "home" as const, label: t.nav.home },
        { id: "why-dwa" as const, label: t.nav.whyChoose },
        { id: "technology" as const, label: t.nav.technology },
        { id: "ecosystem" as const, label: t.nav.ecosystem },
        { id: "vision" as const, label: t.nav.vision },
        { id: "partners" as const, label: t.nav.partners },
      ],
    [t]
  )

  const updateActiveSection = useCallback(() => {
    const scrollPos = window.scrollY + NAV_OFFSET

    let current: NavId = "home"
    for (const item of navItems) {
      const section = document.getElementById(item.id)
      if (section && section.offsetTop <= scrollPos) {
        current = item.id
      }
    }
    setActiveId(current)
  }, [navItems])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      updateActiveSection()
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [updateActiveSection])

  const scrollToSection = (id: NavId) => {
    const section = document.getElementById(id)
    if (!section) return

    section.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveId(id)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dwa-bg/80 backdrop-blur-lg border-b border-dwa-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
            className="flex items-center shrink-0"
          >
            <Image src="/dwa-logo.png" alt="DWA Logo" width={100} height={100} />
          </Link>

          <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={cn(
                  "transition-colors text-xs lg:text-sm tracking-wide whitespace-nowrap",
                  activeId === item.id
                    ? "text-dwa-orange font-bold"
                    : "text-dwa-text font-medium hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link href="https://app.dwaweb3.io" target="_blank">
            <button className="border border-dwa-orange text-dwa-orange px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-dwa-orange hover:text-white transition-all duration-300 shrink-0">
              {t.nav.launchApp}
            </button>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}
