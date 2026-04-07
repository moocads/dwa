"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import dynamic from "next/dynamic"  // ← 新增

// ← 新增：动态导入避免 SSR 报错（Three.js 需要 window）
const HeroGrid = dynamic(() => import("@/components/HeroGrid"), { ssr: false })

export function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useInView()
  const { ref: phoneRef, isVisible: phoneVisible } = useInView()

  return (
    <section className="relative min-h-screen bg-dwa-bg overflow-hidden pt-20">

      {/* ① 波浪网格背景 — 最底层 */}
      <HeroGrid />

      {/* ② 原有橙色光晕 Glow — 叠在网格上面 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-dwa-orange/20 rounded-full blur-[150px] pointer-events-none" />

      {/* ③ 删掉原来的静态 Grid Pattern，已被 HeroGrid 替代 */}
      {/* 保留边缘渐变遮罩，让网格自然融入背景 */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            linear-gradient(to top,  #030303 0%, transparent 35%),
            linear-gradient(to left, #030303 0%, transparent 25%),
            linear-gradient(to right,#030303 0%, transparent 25%)
          `
        }}
      />

      {/* ④ 内容层 — z-10 确保在所有背景之上 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-3 lg:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* Left Content */}
          <div
            ref={titleRef}
            className={`transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight text-balance">
              THE WORLD&apos;S FIRST
              <br />
              DECENTRALIZED
              <br />
              BLACKROCK
            </h1>

            <div className="mt-6 space-y-2">
              <p className="text-dwa-orange text-lg sm:text-4xl">AI x Web3 x DAO x RWA</p>
              <p className="text-dwa-orange text-lg sm:text-2xl">Asset Management Network</p>
            </div>

            <div className="mt-8">
              <p className="text-dwa-orange font-bold text-md">DWA</p>
              <p className="text-dwa-text text-md">A WEB3</p>
              <p className="text-dwa-text text-md">FINANCIAL</p>
              <p className="text-dwa-text text-md">OPERATION</p>
              <p className="text-dwa-text text-md">SYSTEM</p>
              <p className="text-dwa-orange text-md">FOR EVERYONE</p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            ref={phoneRef}
            className={`transition-all duration-700 delay-300 ${
              phoneVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Image src="/images/app-mockup.png" alt="Phone Mockup" width={400} height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}