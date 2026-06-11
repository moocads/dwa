"use client"

import {
  Rocket,
  Globe,
  ShieldCheck,
  Atom,
  Boxes,
  Radio,
  Send,
  KeyRound,
  type LucideIcon,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Sphere from "@/components/Sphere"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  value: string
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: "Low-Cost Deployment",
    description:
      "DWA supports low-cost or even near-zero-cost app deployment and distribution, so Web3 apps no longer depend heavily on expensive centralized cloud services and traditional infrastructure.",
    value: "Lowers the barrier to development and deployment, letting more apps join the DWA ecosystem.",
  },
  {
    icon: Globe,
    title: "Domainless Operation",
    description:
      "DWA explores app access without traditional domains or centralized servers, reducing reliance on Web2 infrastructure.",
    value: "Reduces the risk of being blocked, hijacked, or controlled by a single point.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-DDoS & Privacy Protection",
    description:
      "Through decentralized networks and encrypted communication, DWA reduces risks from DDoS attacks, data breaches, and centralized platform control.",
    value: "Improves system stability while protecting user privacy and interaction security.",
  },
  {
    icon: Atom,
    title: "Quantum-Resistant Security",
    description:
      "DWA treats cutting-edge cryptography as a long-term security direction, preparing for potential challenges from future computing power.",
    value: "Provides stronger security evolution for long-term financial infrastructure.",
  },
  {
    icon: Boxes,
    title: "Fully Decentralized Applications",
    description:
      "DWA goes beyond putting assets on-chain — it aims to progressively decentralize app access, data transfer, identity verification, asset operations, and governance.",
    value: "Keeps applications from being controlled by any single platform or centralized server.",
  },
  {
    icon: Radio,
    title: "Trusted App-to-Device Communication",
    description:
      "DWA enables trusted communication between apps and between devices, so data transfer can be verified and protected within a decentralized network.",
    value: "Builds a safer, more trustworthy environment for Web3 app interactions.",
  },
  {
    icon: Send,
    title: "Borderless Global Messaging",
    description:
      "With DWA's decentralized network capabilities, apps and messaging are no longer limited by geography or traditional network borders.",
    value: "Lets users worldwide access Web3 financial services more freely.",
  },
  {
    icon: KeyRound,
    title: "Access Authentication & Ownership",
    description:
      "DWA emphasizes user control over identity, data, app access, and asset gateways, reducing the risk of unilateral bans, freezes, or revoked access by platforms.",
    value: "Users truly own their assets, identity, and data gateway.",
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
        <div
          ref={cardsRef}
          className="mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                <div className="min-h-[250px]">
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
                <div className="h-px w-full bg-dwa-orange/20 mb-2" />
                <div className="relative items-end gap-1 justify-end">
                  <span className="text-[12px] font-bold text-dwa-orange">
                    Core Value
                  </span>
                <div className="mt-2 inline-flex items-center gap-1.5 self-start rounded-[5px] border border-dwa-orange/20 bg-dwa-orange/5 px-2.5 py-1">
                  <span className="text-[12px] font-medium text-dwa-orange">
                    {feature.value}
                  </span>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
