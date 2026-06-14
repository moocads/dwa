"use client"

import { useInView } from "@/hooks/use-in-view"
import { useTranslations } from "@/contexts/locale-context"

export function Vision() {
  const t = useTranslations()
  const { ref, isVisible } = useInView()

  return (
    <section id="vision" className="bg-dwa-bg py-16 sm:py-24 border-t border-dwa-border">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-dwa-orange text-sm font-semibold tracking-wider mb-4">
              {t.vision.label}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {t.vision.title}
              <br />
              <span className="text-dwa-orange">{t.vision.titleHighlight}</span>
            </h2>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-dwa-orange leading-relaxed">{t.vision.p1}</p>
            <p className="text-dwa-orange leading-relaxed">{t.vision.p2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
