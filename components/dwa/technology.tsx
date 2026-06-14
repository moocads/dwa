"use client"

import {
  Network,
  ShieldCheck,
  BrainCircuit,
  Landmark,
  Vote,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { useTranslations } from "@/contexts/locale-context"
import type { ProtocolKey } from "@/lib/i18n/types"

const PROTOCOL_KEYS: ProtocolKey[] = ["network", "privacy", "ai", "rwa", "dao"]

const PROTOCOL_ICONS: Record<ProtocolKey, LucideIcon> = {
  network: Network,
  privacy: ShieldCheck,
  ai: BrainCircuit,
  rwa: Landmark,
  dao: Vote,
}

export function Technology() {
  const t = useTranslations()
  const { ref: headRef, isVisible: headVisible } = useInView()
  const { ref: listRef, isVisible: listVisible } = useInView()

  return (
    <section id="technology" className="bg-dwa-bg py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.technology.title}
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-semibold text-dwa-orange">
            {t.technology.subtitle}
          </p>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-start">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24">
            <Image
              src="/images/tech-banner.jpg"
              alt={t.technology.bannerAlt}
              width={1500}
              height={2250}
              className="w-full h-auto object-contain rounded-4xl"
              priority={false}
            />
          </div>

          <div ref={listRef} className="flex flex-col gap-4">
            {PROTOCOL_KEYS.map((key, index) => {
              const protocol = t.technology.protocols[key]
              const Icon = PROTOCOL_ICONS[key]
              return (
                <div
                  key={key}
                  className={`group flex flex-col gap-5 rounded-2xl border border-dwa-orange/15 bg-[#0a0a0a] p-5 sm:p-6 transition-all duration-700 hover:border-dwa-orange/50 hover:shadow-[0_0_28px_rgba(227,88,6,0.22)] sm:flex-row sm:items-start ${
                    listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center gap-4 sm:w-12 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3">
                    <span className="font-medium text-2xl font-bold text-dwa-orange/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dwa-orange/25 bg-dwa-orange/10 text-dwa-orange transition-colors duration-300 group-hover:bg-dwa-orange/20">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">{protocol.title}</h3>
                    <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-neutral-400">
                      {protocol.copy}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {protocol.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full border border-dwa-orange/20 bg-dwa-orange/5 px-2.5 py-1 text-[11px] font-medium text-dwa-orange/90"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
