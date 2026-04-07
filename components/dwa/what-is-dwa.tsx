"use client"

import { useInView } from "@/hooks/use-in-view"
import { BlurBall } from "@/components/blurball"

export function WhatIsDwa() {
  const { ref: textRef, isVisible: textVisible } = useInView()
  const { ref: cardRef, isVisible: cardVisible } = useInView()

  return (
    <section id="about" className="relative overflow-hidden bg-dwa-bg py-24 sm:py-32">
            {/* 色标须从 0% → 100% 递增；两侧深色、中间透明以遮住 video 边缘 */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] w-full h-full"
        style={{
          background:
            "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 100%);",
        }}
        aria-hidden
      />
      <video
        src="/global-video-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-contain"
      />

      <BlurBall className="absolute top-1/2 left-0 z-[2] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What is <span className="text-dwa-orange">DWA</span>?
            </h2>
            <div className="space-y-4 text-dwa-text leading-relaxed">
              <p>
                DWA is a decentralized asset participation and management
                platform built around node access, staking mechanisms,
                contribution tracking, and reward distribution. More than
                just an app, DWA is designed as a collaborative digital asset
                network where users can connect their wallet, join the
                ecosystem, track performance, and manage rewards
                through a streamlined on-chain experience.
              </p>
              <p>
                By integrating concepts from AI, Web3, DAO, and RWA,
                DWA aims to create a more open, structured, and scalable
                model for digital asset collaboration.
              </p>
            </div>
          </div>

          {/* Right Content - Dashboard Card */}
          <div
            ref={cardRef}
            className={`transition-all duration-700 delay-200 ${
              cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-dwa-card border border-dwa-border rounded-2xl p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-dwa-text text-sm">RISK DASHBOARD</span>
                <span className="text-dwa-orange text-xs bg-dwa-orange/10 px-3 py-1 rounded-full">
                  ▲ LIVE
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">24,850</p>
                  <p className="text-dwa-text text-sm mt-1">USDT</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">1,240</p>
                  <p className="text-dwa-text text-sm mt-1">USDT</p>
                </div>
              </div>

              {/* Node Level */}
              <div className="flex items-center justify-between py-4 border-t border-dwa-border">
                <span className="text-dwa-text text-sm">Node Level</span>
                <span className="text-dwa-orange font-semibold">DIAMOND</span>
              </div>

              {/* Network Rank */}
              <div className="flex items-center justify-between py-4 border-t border-dwa-border">
                <span className="text-dwa-text text-sm">Network Rank</span>
                <span className="text-white font-semibold">#131</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
