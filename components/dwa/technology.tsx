"use client"

import {
  Network,
  BrainCircuit,
  Landmark,
  Vote,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

type Protocol = {
  icon: LucideIcon
  title: string
  copy: string
  keywords: string[]
}

const protocols: Protocol[] = [
  {
    icon: Network,
    title: "Network & Privacy Protocol",
    copy: "Builds a decentralized P2P network with encrypted communication and privacy protection — enabling censorship resistance, borderless access, and secure application runtime.",
    keywords: [
      "P2P Network",
      "Hybrid Encryption",
      "Censorship Resistance",
      "Data Security",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Agent Protocol",
    copy: "Embedded AI Agents deliver market analysis, strategy assistance, risk identification, and intelligent scheduling — all within protocol-defined rules.",
    keywords: [
      "AI Agent",
      "Strategy Reasoning",
      "Risk Identification",
      "Intelligent Scheduling",
    ],
  },
  {
    icon: Landmark,
    title: "RWA Asset Protocol",
    copy: "Connects real-world assets to the on-chain network, supporting tokenization, mapping, circulation, and protocol-based management of RWA assets.",
    keywords: [
      "RWA",
      "Asset Tokenization",
      "On-Chain Liquidity",
      "Global Asset Gateway",
    ],
  },
  {
    icon: Vote,
    title: "DAO Governance Protocol",
    copy: "Manages system parameters, rule upgrades, and ecosystem collaboration through DAO governance — evolving DWA into a self-governing financial network.",
    keywords: [
      "DAO Governance",
      "Protocol Upgrades",
      "Community Coordination",
      "Self-Evolution",
    ],
  },
]

export function Technology() {
  const { ref: headRef, isVisible: headVisible } = useInView()
  const { ref: listRef, isVisible: listVisible } = useInView()

  return (
    <section id="technology" className="bg-dwa-bg py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technology
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-semibold text-dwa-orange">
            Core Technology
          </p>
          <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-neutral-300/90">
            <p>
              At its foundation, DWA is not a single application or a single smart
              contract — it is a Web3 financial operating system built on four core
              protocol modules.
            </p>
            <p>
              These four protocols handle network infrastructure, AI reasoning, asset
              onboarding, and DAO governance, providing the infrastructure backbone
              for DWA&apos;s long-term ecosystem expansion.
            </p>
          </div>
        </div>

        {/* Banner + protocol stack */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-start">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24">
            <Image
              src="/images/tech-banner.jpg"
              alt="DWA core technology"
              width={1500}
              height={2250}
              className="w-full h-auto object-contain rounded-4xl"
              priority={false}
            />
          </div>

          <div ref={listRef} className="flex flex-col gap-4">
            {protocols.map((protocol, index) => {
              const Icon = protocol.icon
              return (
                <div
                  key={protocol.title}
                  className={`group flex flex-col gap-5 rounded-2xl border border-dwa-orange/15 bg-[#0a0a0a] p-5 sm:p-6 transition-all duration-700 hover:border-dwa-orange/50 hover:shadow-[0_0_28px_rgba(227,88,6,0.22)] sm:flex-row sm:items-start ${
                    listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center gap-4 sm:w-44 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3">
                    <span className="font-medium text-2xl font-bold text-dwa-orange/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dwa-orange/25 bg-dwa-orange/10 text-dwa-orange transition-colors duration-300 group-hover:bg-dwa-orange/20">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {protocol.title}
                    </h3>
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
