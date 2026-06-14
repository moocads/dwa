"use client"

import { useInView } from "@/hooks/use-in-view"
import dynamic from "next/dynamic"
import { useTranslations } from "@/contexts/locale-context"

const HeroGrid = dynamic(() => import("@/components/HeroGrid"), { ssr: false })

export function Hero() {
  const t = useTranslations()
  const { ref: titleRef, isVisible: titleVisible } = useInView()



  return (
    <section id="home" className="relative min-h-screen bg-dwa-bg overflow-hidden pt-20">
      <HeroGrid />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-dwa-orange/20 rounded-full blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            linear-gradient(to top,  #030303 0%, transparent 35%),
            linear-gradient(to left, #030303 0%, transparent 25%),
            linear-gradient(to right,#030303 0%, transparent 25%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col items-center justify-center px-4 py-10 sm:px-3 lg:px-6 lg:py-20">
        <div className="flex w-full flex-col items-center justify-center">
          <div
            ref={titleRef}
            className={`mx-auto w-full max-w-4xl text-center transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight text-balance">
              {t.hero.headline1}
              <br />
              <span className="text-dwa-orange">{t.hero.headline2}</span>
              
              {t.hero.headline3}
            </h1>

            <div className="mt-6">
              <p className="text-balance bg-dwa-orange/30 rounded-full px-4 py-2 text-white text-lg sm:text-md border border-dwa-orange">
                {t.hero.tagline}
              </p>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-col items-center gap-2 sm:hidden">
                <p className="text-dwa-orange text-lg font-bold">DWA</p>
                <p className="text-dwa-text text-base leading-snug">
                  {t.hero.taglineMobile2}
                </p>
                <p className="text-dwa-orange text-base font-semibold">
                  {t.hero.taglineMobile3}
                </p>
              </div>
              {/* <div className="hidden flex-wrap items-center justify-center gap-x-2 sm:flex">
                <p className="text-dwa-orange text-md font-bold">{dwa}</p>
                <p className="text-dwa-text text-md">{aWeb3}</p>
                <p className="text-dwa-text text-md">{financial}</p>
                <p className="text-dwa-text text-md">{operation}</p>
                <p className="text-dwa-text text-md">{system}</p>
                <p className="text-dwa-orange text-md">{forEveryone}</p>
              </div> */}
            </div>
          </div>

          <button className="border border-dwa-orange bg-dwa-orange text-white px-4 mt-8 sm:px-6 py-4 rounded-full text-md sm:text-md font-semibold hover:bg-dwa-orange hover:text-white transition-all duration-300 shrink-0">
            {t.hero.launchApp}
          </button>
        </div>
      </div>
    </section>
  )
}
