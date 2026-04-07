"use client"

import { useInView } from "@/hooks/use-in-view"
import Sphere from "@/components/Sphere"  

const benefits = [
  {
    title: "Decentralized Access",
    description:
      "Connect your wallet and enter the ecosystem without relying on traditional centralized structures.",
  },
  {
    title: "Structured Reward Visibility",
    description:
      "Track total rewards, pending rewards, earnings sources, staking records, and performance in one place.",
  },
  {
    title: "Contribution-Based Growth",
    description:
      "DWA introduces a contribution and level system that supports both individual activity and broader network participation.",
  },
  {
    title: "Flexible Asset Actions",
    description:
      "Manage your earnings through reinvestment and withdrawal options based on your preferred strategy.",
  },
]

export function WhyChoose() {
  const { ref: orbRef, isVisible: orbVisible } = useInView()
  const { ref: cardsRef, isVisible: cardsVisible } = useInView()

  return (
    <section id="why-dwa" className="bg-black py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Mobile: title → orb → cards.
          lg: col1 = orb (row-span-2), col2 = title + cards (left-aligned, matches design).
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] gap-y-10 lg:gap-x-14 lg:gap-y-8 items-start lg:items-stretch">
          <h2 className="order-1 text-center lg:text-left lg:order-none lg:col-start-2 lg:row-start-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Choose <span className="text-dwa-orange">DWA</span>?
          </h2>

          <div
            ref={orbRef}
            className={`order-2 lg:order-none flex min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] w-full items-center justify-center transition-all duration-700 lg:col-start-1 lg:row-span-2 lg:row-start-1 ${
              orbVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.92]"
            }`}
          >
            <div className="h-full w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
                <Sphere />
            </div>
          </div>

          <div
            ref={cardsRef}
            className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 flex flex-col gap-4 lg:gap-5 lg:justify-center"
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex gap-4 rounded-2xl border border-white/[0.08] bg-[#111111] p-5 sm:p-6 transition-all duration-700 hover:border-dwa-orange/35 ${
                  cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
             
                <div className="min-w-0">
                  <h3 className="text-dwa-orange font-semibold mb-2 text-[15px] sm:text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300/90 sm:text-[15px]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
