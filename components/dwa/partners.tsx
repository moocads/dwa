"use client"

import type { ComponentType } from "react"
import { BlurBall } from "@/components/blurball"
import { useInView } from "@/hooks/use-in-view"
import { useTranslations } from "@/contexts/locale-context"
import ExchangeBinance from "@web3icons/react/icons/exchanges/ExchangeBinance"
import TokenETH from "@web3icons/react/icons/tokens/TokenETH"
import TokenBTC from "@web3icons/react/icons/tokens/TokenBTC"
import TokenSOL from "@web3icons/react/icons/tokens/TokenSOL"
import TokenPAXG from "@web3icons/react/icons/tokens/TokenPAXG"
import TokenXAUT from "@web3icons/react/icons/tokens/TokenXAUT"
import TokenCFG from "@web3icons/react/icons/tokens/TokenCFG"
import TokenPOLYX from "@web3icons/react/icons/tokens/TokenPOLYX"

type IconProps = {
  variant?: "mono" | "branded" | "background"
  size?: number | string
  className?: string
}

type Partner = {
  name: string
  Icon?: ComponentType<IconProps>
  monogram?: string
  variant?: "mono" | "branded"
}

const ROW_1: Partner[] = [
  { name: "Binance", Icon: ExchangeBinance },
  { name: "Ethereum", Icon: TokenETH },
  { name: "Bitcoin", Icon: TokenBTC },
  { name: "Ondo Finance", monogram: "ON" },
  { name: "Solana", Icon: TokenSOL },
  { name: "Pax Gold", Icon: TokenPAXG },
]

const ROW_2: Partner[] = [
  { name: "Tether Gold", Icon: TokenXAUT, variant: "branded" },
  { name: "Rayls Labs", monogram: "RL" },
  { name: "Centrifuge", Icon: TokenCFG },
  { name: "Canton Network", monogram: "CN" },
  { name: "Polymesh", Icon: TokenPOLYX },
]

function PartnerLogo({ partner }: { partner: Partner }) {
  if (partner.Icon) {
    const Icon = partner.Icon
    const variant = partner.variant ?? "mono"
    const monoClass =
      "text-neutral-300 group-hover:text-dwa-orange group-hover:drop-shadow-[0_0_10px_rgba(227,88,6,0.85)]"
    const brandedClass =
      "opacity-80 grayscale brightness-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_10px_rgba(227,88,6,0.85)]"

    return (
      <Icon
        variant={variant}
        size={36}
        className={`h-9 w-9 shrink-0 transition-all duration-300 ${
          variant === "mono" ? monoClass : brandedClass
        }`}
      />
    )
  }

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-800/80 text-xs font-bold text-neutral-300 transition-all duration-300 group-hover:bg-dwa-orange/15 group-hover:text-dwa-orange group-hover:drop-shadow-[0_0_10px_rgba(227,88,6,0.85)]`}
    >
      {partner.monogram}
    </div>
  )
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="group flex h-[88px] w-[180px] shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-dwa-orange/20 bg-[#0a0a0a]/90 px-4 transition-all duration-300 hover:border-dwa-orange hover:shadow-[0_0_24px_rgba(227,88,6,0.28)] sm:w-[200px]">
      <PartnerLogo partner={partner} />
      <span className="max-w-full truncate text-center text-xs font-medium text-neutral-400 transition-colors duration-300 group-hover:text-dwa-orange sm:text-sm">
        {partner.name}
      </span>
    </div>
  )
}

function MarqueeRow({
  partners,
  direction,
}: {
  partners: Partner[]
  direction: "left" | "right"
}) {
  const items = [...partners, ...partners]

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "animate-partners-left" : "animate-partners-right"
        }`}
      >
        {items.map((partner, i) => (
          <PartnerCard key={`${partner.name}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  const t = useTranslations()
  const { ref: headRef, isVisible: headVisible } = useInView()

  return (
    <section id="partners" className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-28">
      {/* L1 — dark dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(64, 64, 64, 0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* L2 — top-right orange halo (BlurBall + pulse) */}
      <div
        className="pointer-events-none absolute -top-28 -right-28 z-[1] animate-halo-pulse sm:-top-36 sm:-right-36 lg:-top-44 lg:-right-44"
        aria-hidden
      >
        <BlurBall className="h-[480px] w-[480px] sm:h-[560px] sm:w-[560px] lg:h-[640px] lg:w-[640px]" />
      </div>

      {/* L3 — edge vignette for readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: [
            "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 25%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.75) 100%)",
            "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.65) 100%)",
          ].join(", "),
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={headRef}
          className="max-w-3xl transition-all duration-700 mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.partners.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-400">
            {t.partners.copy}
          </p>
        </div>

        <div className="mt-12 lg:mt-16 flex flex-col gap-5">
          <MarqueeRow partners={ROW_1} direction="left" />
          <MarqueeRow partners={ROW_2} direction="right" />
        </div>
      </div>
    </section>
  )
}
