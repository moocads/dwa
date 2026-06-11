"use client"

import Image from "next/image"
import {
  ArrowLeftRight,
  CreditCard,
  TrendingUp,
  Landmark,
  BrainCircuit,
  Globe,
  Wallet,
  Users,
  HandCoins,
  type LucideIcon,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Module = {
  icon: LucideIcon
  name: string
  description: string
}

const modules: Module[] = [
  {
    icon: ArrowLeftRight,
    name: "DWA Swap",
    description:
      "On-chain asset swaps, cross-chain trading, and liquidity aggregation — the liquidity core of the DWA ecosystem.",
  },
  {
    icon: CreditCard,
    name: "DWA Card",
    description:
      "Bridges crypto assets to real-world spending and global payment settlement.",
  },
  {
    icon: TrendingUp,
    name: "DWA Earn",
    description:
      "Asset allocation, strategy aggregation, and on-chain financial services for users.",
  },
  {
    icon: Landmark,
    name: "RWA Protocol",
    description:
      "Connects real-world assets — real estate, bonds, funds, equities, gold, ETFs — to Web3 liquidity.",
  },
  {
    icon: BrainCircuit,
    name: "AI Agent",
    description:
      "Market analysis, strategy assistance, risk identification, and automated financial decision support.",
  },
  {
    icon: Globe,
    name: "Web3 Application Network",
    description:
      "Low-cost Web3 app deployment with serverless runtime, global access, and ecosystem scalability.",
  },
  {
    icon: Wallet,
    name: "DWA Wallet",
    description:
      "Unified on-chain identity, multi-chain asset management, transaction history, and ecosystem access.",
  },
  {
    icon: Users,
    name: "DWA Social",
    description:
      "Decentralized identity (DID), on-chain relationships, social credit, and Web3 profile.",
  },
  {
    icon: HandCoins,
    name: "DWA Lending",
    description:
      "On-chain lending, collateralization, and liquidity release to maximize asset efficiency.",
  },
]

export function Ecosystem() {
  const { ref: headRef, isVisible: headVisible } = useInView()
  const { ref: gridRef, isVisible: gridVisible } = useInView()

  return (
    <section id="ecosystem" className="bg-black py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ecosystem
            </h2>
            <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-neutral-400">
              <p>
                DWA is not a single-function product — it is a Web3 financial
                operating system built on nine ecosystem pillars.
              </p>
              <p>
                Spanning trading, payments, asset management, RWA, AI, app
                infrastructure, wallets, social, and lending, these nine pillars
                form a complete closed-loop for on-chain assets.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:ml-auto ">
            <Image
              src="/images/ecosystem-banner-2.png"
              alt="DWA ecosystem overview"
              width={350}
              height={543}
              className="w-[450px] h-auto object-contain"
              priority={false}
            />
          </div>
        </div>

        <div
          ref={gridRef}
          className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {modules.map((mod, index) => {
            const Icon = mod.icon
            return (
              <div
                key={mod.name}
                className={`group flex flex-col rounded-2xl border border-dwa-orange/15 bg-[#0a0a0a] p-5 sm:p-6 transition-all duration-700 hover:border-dwa-orange hover:shadow-[0_0_28px_rgba(227,88,6,0.22)] ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-dwa-orange/20 bg-white/[0.03] text-neutral-300 transition-all duration-300 group-hover:border-dwa-orange group-hover:bg-dwa-orange/10 group-hover:text-dwa-orange group-hover:drop-shadow-[0_0_12px_rgba(227,88,6,0.75)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {mod.name}
                </h3>
                <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-neutral-400">
                  {mod.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
