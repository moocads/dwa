"use client"

import { useInView } from "@/hooks/use-in-view"
import { X, Check } from "lucide-react"

const traditionalItems = [
  {
    title: "Siloed",
    description: "Assets and data are monopolized by the platform, creating isolated silos.",
  },
  {
    title: "High fees",
    description: "Leverages massive user bases to charge high fees.",
  },
  {
    title: "Concentrated",
    description: "Enormous platform revenues flow only to a handful of corporate shareholders.",
  },
]

const dwaItems = [
  {
    title: "Borderless",
    description: "Seamless access to global on-chain assets, breaking geographic barriers.",
  },
  {
    title: "Low Friction",
    description: "Serves as the unified hub for billions in Web3 on-chain transactions.",
  },
  {
    title: "Community-owned",
    description: "System revenues are distributed to all ecosystem participants via dividends and deflation.",
  },
]

export function Comparison() {
  const { ref, isVisible } = useInView()

  return (
    <section className="bg-dwa-bg py-16 sm:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-4 text-xl sm:text-2xl font-semibold">
            <span className="text-white">Traditional Financial Gateway</span>
            <span className="text-dwa-orange bg-dwa-orange/10 px-4 py-1 rounded-full text-sm">VS</span>
            <span className="text-dwa-orange">DWA Web3 Gateway</span>
          </div>
          <p className="text-dwa-text text-sm mt-2">(e.g. Alipay, WeChat Pay, Brokerages)</p>
          <p className="text-dwa-text text-sm">(Decentralized Asset Management Network)</p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional */}
          <div
            className={`bg-dwa-card border border-dwa-border rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Traditional Financial Gateway</h3>
            <div className="space-y-6">
              {traditionalItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-dwa-text text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DWA */}
          <div
            className={`bg-dwa-card border border-dwa-orange/30 rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-dwa-orange font-semibold text-lg mb-6">DWA Web3 Gateway</h3>
            <div className="space-y-6">
              {dwaItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dwa-orange/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-dwa-orange" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-dwa-text text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
