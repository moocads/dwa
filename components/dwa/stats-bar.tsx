"use client"

import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: "50,000+", label: "USER" },
  { value: "$120M+", label: "TVL" },
  { value: "180+", label: "COUNTRIES" },
  { value: "98%", label: "UPTIME" },
]

export function StatsBar() {
  const { ref, isVisible } = useInView()

  return (
    <section className="bg-dwa-bg border-y border-dwa-border">
      <div
        ref={ref}
        className="max-w-7xl mx-auto "
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 ">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center border-x py-5 border-dwa-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-dwa-text text-xs sm:text-sm font-semibold mt-2 tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
