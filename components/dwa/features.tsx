"use client"

import { useInView } from "@/hooks/use-in-view"
import { TrendingUp, Lock, Layers } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Liquidity Network Effects",
    description:
      "Trading depth and user scale reinforce each other. More users bring better liquidity, and better liquidity attracts more capital, forming an irreversible barrier to entry.",
  },
  {
    icon: Lock,
    title: "Payment Scenario Lock-in",
    description:
      "By connecting both online and offline consumption scenarios, high-frequency daily payments are deeply integrated with users' crypto assets, creating extremely high switching costs.",
  },
  {
    icon: Layers,
    title: "Asset Management Stickiness",
    description:
      "By offering stable wealth management returns and RWA asset allocation, funds can continue generating value within the ecosystem, enabling a transition from \"trading\" to \"retention.\"",
  },
]

export function Features() {
  const { ref, isVisible } = useInView()

  return (
    <section id="how-it-works" className="bg-dwa-bg py-16 sm:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            A New Way to Participate in
            <br />
            <span className="text-dwa-orange">Digital Asset Networks</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-dwa-card border border-dwa-border rounded-2xl p-6 sm:p-8 hover:border-dwa-orange/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-dwa-orange/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-dwa-orange" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-dwa-text text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
