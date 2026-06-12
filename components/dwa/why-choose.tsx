"use client"

import {
  Rocket,
  ShieldCheck,
  Atom,
  Boxes,
  Radio,
  KeyRound,
  type LucideIcon,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Sphere from "@/components/Sphere"
import { BlurBall } from "@/components/blurball"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: "Low-Cost & Domainless Operation",
    description:
      "Near-zero-cost app deployment and domainless access — without reliance on expensive cloud infrastructure or centralized servers.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-DDoS & Privacy Protection",
    description:
      "Decentralized networks and encrypted communication against DDoS, breaches, and platform control.",
  },
  {
    icon: Atom,
    title: "Quantum-Resistant Security",
    description:
      "Advanced cryptography built for long-term resilience against future computing threats.",
  },
  {
    icon: Boxes,
    title: "Fully Decentralized Applications",
    description:
      "Decentralizes app access, data transfer, identity, assets, and governance — not just on-chain assets.",
  },
  {
    icon: Radio,
    title: "Trusted & Borderless Communication",
    description:
      "Verified app-to-device data transfer and borderless messaging free from geographic limits and network borders.",
  },
  {
    icon: KeyRound,
    title: "Access Authentication & Ownership",
    description:
      "User-controlled identity, data, app access, and asset gateways — no unilateral platform bans.",
  },
]

export function WhyChoose() {
  const { ref: orbRef, isVisible: orbVisible } = useInView()
  const { ref: cardsRef, isVisible: cardsVisible } = useInView()

  return (
    <section id="why-dwa" className="bg-black py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: left Sphere, right Title + description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      

          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Why Choose <span className="text-dwa-orange">DWA</span>?
            </h2>
            <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-neutral-300/90">
              <p>
                Traditional Web2 and centralized financial systems rely on servers,
                domains, account systems, and platform permissions. Users' data, asset
                access, and control all remain in the hands of platforms.
              </p>
              <p>
                DWA leverages decentralized networks, privacy encryption, AI
                scheduling, and DAO governance to build a more open, secure,
                censorship-resistant, and scalable Web3 financial operating system.
              </p>
            </div>
          </div>

              <div
            ref={orbRef}
            className={`flex w-full items-center justify-center transition-all duration-700 ${
              orbVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.92]"
            }`}
          >
            <div className="w-full">
              <Sphere />
            </div>
          </div>
        </div>

        {/* Row 2: 4 cards per row */}
        <div className="relative mt-10 lg:mt-16">
          <BlurBall className="pointer-events-none absolute bottom-0 left-0 z-0 -translate-x-1/3 translate-y-1/3 h-[420px] w-[420px] sm:h-[500px] sm:w-[500px]" />
          <div
            ref={cardsRef}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >

          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group flex flex-col rounded-2xl border border-dwa-orange/15 bg-[#0a0a0a] p-5 transition-all duration-100 hover:border-dwa-orange/50 hover:shadow-[0_0_24px_rgba(227,88,6,0.25)] ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dwa-orange/25 bg-dwa-orange/10 text-dwa-orange transition-colors duration-100 group-hover:bg-dwa-orange/20">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <h3 className="mt-4 text-base font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
