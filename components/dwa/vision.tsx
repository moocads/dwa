"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useTranslations } from "@/contexts/locale-context"

export function Vision() {
  const t = useTranslations()
  const { ref: headRef, isVisible: headVisible } = useInView()
  const { ref: bodyRef, isVisible: bodyVisible } = useInView()

  return (
    <section
      id="vision"
      className="relative overflow-hidden border-t border-dwa-border bg-dwa-bg py-16 sm:py-24 lg:py-28"
    >
      <video
        src="/global-video-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,3,3,0.92) 0%, rgba(3,3,3,0.75) 45%, rgba(3,3,3,0.92) 80%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={cn(
            "transition-all duration-700",
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.vision.title}
          </h2>
          <p className="mt-2 text-lg font-semibold text-dwa-orange sm:text-xl">
            {t.vision.subtitle}
          </p>
        </div>

        <div
          ref={bodyRef}
          className={cn(
            "mt-10 grid grid-cols-1 gap-8 transition-all duration-700 delay-150 lg:mt-14 lg:grid-cols-5 lg:gap-10",
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-2xl border border-dwa-orange/30 bg-gradient-to-br from-dwa-orange/20 via-dwa-orange/8 to-dwa-orange/5 p-5 shadow-[0_8px_32px_rgba(255,98,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl backdrop-saturate-150 sm:p-6">
              <p className="text-sm font-medium text-neutral-200 sm:text-base">
                {t.vision.intro}
              </p>
              <p className="mt-4 text-base font-semibold leading-snug text-dwa-orange sm:text-lg">
                {t.vision.definition}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
                {t.vision.closing}
              </p>
            </div>

          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {t.vision.pillars.map((pillar, index) => (
              <li
                key={pillar}
                className="group flex gap-3 rounded-2xl border border-dwa-orange/15 bg-[#0a0a0a]/90 p-4 backdrop-blur-sm transition-all duration-300 hover:border-dwa-orange/40 hover:shadow-[0_0_24px_rgba(227,88,6,0.15)] sm:p-5"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="shrink-0 text-lg font-bold tabular-nums text-dwa-orange/40 transition-colors group-hover:text-dwa-orange/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-neutral-300 sm:text-base">
                  {pillar}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
