"use client"

import { useState } from "react"
import {
  Rocket,
  ShieldCheck,
  Atom,
  Boxes,
  Radio,
  KeyRound,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useTranslations } from "@/contexts/locale-context"
import type { FeatureKey } from "@/lib/i18n/types"
import Sphere from "@/components/Sphere"
import { BlurBall } from "@/components/blurball"

const FEATURE_KEYS: FeatureKey[] = [
  "lowCost",
  "antiDdos",
  "quantum",
  "decentralized",
  "communication",
  "ownership",
]

const FEATURE_ICONS: Record<FeatureKey, LucideIcon> = {
  lowCost: Rocket,
  antiDdos: ShieldCheck,
  quantum: Atom,
  decentralized: Boxes,
  communication: Radio,
  ownership: KeyRound,
}

function FeatureCard({
  featureKey,
  title,
  description,
  index,
  visible,
  expanded,
  onToggle,
  readMore,
  readLess,
}: {
  featureKey: FeatureKey
  title: string
  description: string
  index: number
  visible: boolean
  expanded: boolean
  onToggle: () => void
  readMore: string
  readLess: string
}) {
  const Icon = FEATURE_ICONS[featureKey]

  return (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border border-dwa-orange/15 bg-[#0a0a0a] p-5 transition-all duration-300 hover:border-dwa-orange/50 hover:shadow-[0_0_24px_rgba(227,88,6,0.25)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dwa-orange/25 bg-dwa-orange/10 text-dwa-orange transition-colors duration-100 group-hover:bg-dwa-orange/20">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          expanded ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[13px] leading-relaxed text-neutral-400">{description}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-4 inline-flex items-center gap-1 self-start text-xs font-semibold text-dwa-orange transition-colors hover:text-dwa-orange/80"
      >
        {expanded ? readLess : readMore}
        <ChevronRight
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            expanded && "rotate-90"
          )}
        />
      </button>
    </div>
  )
}

export function WhyChoose() {
  const t = useTranslations()
  const { ref: orbRef, isVisible: orbVisible } = useInView()
  const { ref: cardsRef, isVisible: cardsVisible } = useInView()
  const [expanded, setExpanded] = useState<Set<FeatureKey>>(new Set())

  const toggleCard = (key: FeatureKey) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <section id="why-dwa" className="bg-black py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.whyChoose.title}
            </h2>

            <div className="relative mt-10 lg:mt-16">
              <BlurBall className="pointer-events-none absolute bottom-0 left-0 z-0 -translate-x-1/3 translate-y-1/3 h-[420px] w-[420px] sm:h-[500px] sm:w-[500px]" />
              <div
                ref={cardsRef}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {FEATURE_KEYS.map((key, index) => {
                  const feature = t.whyChoose.features[key]
                  return (
                    <FeatureCard
                      key={key}
                      featureKey={key}
                      title={feature.title}
                      description={feature.description}
                      index={index}
                      visible={cardsVisible}
                      expanded={expanded.has(key)}
                      onToggle={() => toggleCard(key)}
                      readMore={t.whyChoose.readMore}
                      readLess={t.whyChoose.readLess}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div
            ref={orbRef}
            className={`flex w-full items-center justify-center overflow-visible transition-all duration-700 ${
              orbVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.92]"
            }`}
          >
            <div className="w-full overflow-visible">
              <Sphere />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
