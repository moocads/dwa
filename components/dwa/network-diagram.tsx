"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

/**
 * 自 12 点顺时针每 60° 一个，与参考图一致：
 * 12h Node Servers → 2h Any Application → 4h Any Network →
 * 6h Any Device → 8h Any Location → 10h User Controlled
 */
const NODES = [
  "Node Servers",
  "Any Application",
  "Any Network",
  "Any Device",
  "Any Location",
  "User Controlled",
] as const

export function NetworkDiagram() {
  const { ref, isVisible } = useInView()

  return (
    <section id="ecosystem" className=" py-16 sm:py-24">
      <div ref={ref} className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative mx-auto aspect-square max-w-xl transition-all duration-1000 [--orbit-r:min(17rem,47vw)] sm:[--orbit-r:min(18.5rem,49vw)] ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* 三层圆线：内 → 外 opacity 递减；半径与标签轨道同比例放大 */}
          <svg
            className="absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            <circle
              cx="200"
              cy="200"
              r="132"
              stroke="#E35806"
              strokeWidth="1"
              strokeOpacity={0.55}
            />
            <circle
              cx="200"
              cy="200"
              r="158"
              stroke="#E35806"
              strokeWidth="1"
              strokeOpacity={0.32}
            />
            <circle
              cx="200"
              cy="200"
              r="188"
              stroke="#E35806"
              strokeWidth="1"
              strokeOpacity={0.16}
            />
          </svg>

          {/* 静态标签：极坐标均匀分布，无旋转 → 全部 horizontal */}
          {/* {NODES.map((label, i) => {
            const theta = (i * Math.PI) / 3
            const x = Math.sin(theta)
            const y = -Math.cos(theta)
            return (
              <div
                key={label}
                className="absolute left-1/2 top-1/2 z-[5]"
                style={{
                  transform: `translate(calc(-50% + ${x} * var(--orbit-r)), calc(-50% + ${y} * var(--orbit-r)))`,
                }}
              >
                <div
                  className={`rounded-lg border border-[#E35806] bg-[#111111]/95 px-3 py-2 shadow-[0_0_18px_rgba(227,88,6,0.15)] transition-opacity duration-700 sm:px-4 sm:py-2.5 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${(i + 1) * 100}ms`,
                  }}
                >
                  <span className="whitespace-nowrap text-xs font-bold tracking-tight text-[#E35806] sm:text-sm">
                    {label}
                  </span>
                </div>
              </div>
            )
          })} */}

          {/* 中心圆形图（盖在圆线与标签之上） */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-[min(76%,304px)] w-[min(76%,304px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[min(80%,352px)] sm:w-[min(80%,352px)]">
            <div className="relative h-full w-full drop-shadow-[0_0_28px_rgba(227,88,6,0.42)]">
              <Image
                src="/images/dwa-circle.png"
                alt="DWA"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 304px, 352px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
