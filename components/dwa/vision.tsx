"use client"

import { useInView } from "@/hooks/use-in-view"

export function Vision() {
  const { ref, isVisible } = useInView()

  return (
    <section className="bg-dwa-bg py-16 sm:py-24 border-t border-dwa-border">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-dwa-orange text-sm font-semibold tracking-wider mb-4">OUR VISION</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Redefining Asset
              <br />
              <span className="text-dwa-orange">Management</span> for
              <br />
              the On-Chain Era
            </h2>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-dwa-text leading-relaxed">
              DWA is built on the belief that the future of asset management should
              be more open, intelligent, and participatory. By combining the
              infrastructure of Web3, the coordination logic of DAO, the scalability
              vision of RWA, and the strategic potential of AI, DWA aims to shape a
              new generation of decentralized asset networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
