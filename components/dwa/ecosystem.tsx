"use client"

import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  ArrowLeftRight,
  CreditCard,
  TrendingUp,
  Landmark,
  Bot,
  Globe,
  Wallet,
  Users,
  Coins,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useTranslations } from "@/contexts/locale-context"
import type { EcosystemModuleKey, Translations } from "@/lib/i18n/types"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ORANGE = "#FF6200"
const ORANGE_BRIGHT = "#FF8533"
const ORANGE_RGB = "255, 98, 0"
const GAP = 32

type FlowPositions = {
  core: { x: number; y: number }
  cells: Record<string, { x: number; y: number }>
  haloRadius: number
}

function positionsEqual(a: FlowPositions | null, b: FlowPositions): boolean {
  if (!a) return false
  if (Math.abs(a.haloRadius - b.haloRadius) > 0.5) return false
  if (Math.abs(a.core.x - b.core.x) > 0.5 || Math.abs(a.core.y - b.core.y) > 0.5) {
    return false
  }
  for (const cell of CELLS) {
    if (cell.core) continue
    const pa = a.cells[cell.key]
    const pb = b.cells[cell.key]
    if (!pa || !pb) return false
    if (Math.abs(pa.x - pb.x) > 0.5 || Math.abs(pa.y - pb.y) > 0.5) return false
  }
  return true
}

const orangeAlpha = (alpha: number) => `rgba(${ORANGE_RGB}, ${alpha})`

type Cell = {
  key: EcosystemModuleKey
  Icon: LucideIcon
  col: number
  row: number
  core?: boolean
}

const CELLS: Cell[] = [
  { key: "rwa", Icon: Landmark, col: 0, row: 0 },
  { key: "card", Icon: CreditCard, col: 1, row: 0 },
  { key: "earn", Icon: TrendingUp, col: 2, row: 0 },
  { key: "wallet", Icon: Wallet, col: 0, row: 1 },
  { key: "web3", Icon: Globe, col: 1, row: 1, core: true },
  { key: "ai", Icon: Bot, col: 2, row: 1 },
  { key: "lending", Icon: Coins, col: 0, row: 2 },
  { key: "social", Icon: Users, col: 1, row: 2 },
  { key: "swap", Icon: ArrowLeftRight, col: 2, row: 2 },
]

const MOBILE_CELLS = [
  CELLS.find((c) => c.core)!,
  ...CELLS.filter((c) => !c.core),
]

function EcosystemMobileAccordion({
  modules,
}: {
  modules: Translations["ecosystem"]["modules"]
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="web3"
      className="flex flex-col gap-3"
    >
      {MOBILE_CELLS.map((cell) => {
        const { Icon, core, key } = cell
        const module = modules[key]
        return (
          <AccordionItem
            key={cell.key}
            value={cell.key}
            className={cn(
              "overflow-hidden rounded-[14px] border border-b-0 last:border-b",
              core
                ? "border-dwa-orange/30 bg-gradient-to-br from-[#1a120c]/95 to-[#0a0a0a]/95 shadow-[0_0_26px_-10px_rgba(255,98,0,0.4)]"
                : "border-dwa-orange/15 bg-gradient-to-br from-[#121212]/90 to-[#0a0a0a]/90"
            )}
          >
            <AccordionTrigger className="gap-3 px-4 py-[15px] hover:no-underline [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-dwa-orange">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div
                  className={cn(
                    "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] border",
                    core
                      ? "border-dwa-orange/45 bg-dwa-orange/15 text-dwa-orange"
                      : "border-dwa-orange/20 bg-dwa-orange/5 text-neutral-300"
                  )}
                >
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm font-semibold leading-tight text-white">
                    {module.name}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-dwa-orange/85">
                    {module.tag}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <p className="text-[13px] leading-relaxed text-neutral-400">
                {module.desc}
              </p>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

function Flows({
  size,
  positions,
  activeKeys,
}: {
  size: { w: number; h: number }
  positions: FlowPositions | null
  activeKeys: string[]
}) {
  const { w, h } = size
  if (!w || !h || !positions) return null

  const { core, cells, haloRadius } = positions
  const ccx = core.x
  const ccy = core.y

  const coreActive = activeKeys.includes("web3")
  const anyActive = activeKeys.length > 0

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      aria-hidden
    >
      <defs>
        <radialGradient id="ecosystem-core-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={orangeAlpha(0.4)} />
          <stop offset="45%" stopColor={orangeAlpha(0.1)} />
          <stop offset="100%" stopColor={orangeAlpha(0)} />
        </radialGradient>
      </defs>

      <circle cx={ccx} cy={ccy} r={haloRadius} fill="url(#ecosystem-core-halo)">
        <animate
          attributeName="opacity"
          values="0.55;0.85;0.55"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {CELLS.filter((m) => !m.core).map((m) => {
        const target = cells[m.key]
        if (!target) return null

        const tx = target.x
        const ty = target.y
        const orth = m.col === 1 || m.row === 1
        const dur = orth ? 2.4 : 3.0
        const active = coreActive || activeKeys.includes(m.key)
        const dim = anyActive && !active
        const path = `M${ccx},${ccy} L${tx},${ty}`

        return (
          <g
            key={m.key}
            style={{ opacity: dim ? 0.12 : 1, transition: "opacity 300ms ease" }}
          >
            <line
              x1={ccx}
              y1={ccy}
              x2={tx}
              y2={ty}
              stroke={active ? ORANGE_BRIGHT : ORANGE}
              strokeWidth={active ? 1.6 : 1}
              opacity={active ? 0.85 : 0.3}
              strokeLinecap="round"
            />
            {[0, 1, 2].map((p) => (
              <circle
                key={p}
                r={active ? 3.4 : 2.4}
                fill={active ? ORANGE_BRIGHT : ORANGE}
              >
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${(p * dur) / 3}s`}
                  repeatCount="indefinite"
                  path={path}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.7;1"
                  dur={`${dur}s`}
                  begin={`${(p * dur) / 3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

function EcosystemCard({
  cell,
  module,
  active,
  anyActive,
  onEnter,
  onLeave,
  onClick,
  cardRef,
}: {
  cell: Cell
  module: { name: string; tag: string; desc: string }
  active: boolean
  anyActive: boolean
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
  cardRef: (el: HTMLDivElement | null) => void
}) {
  const { Icon, core } = cell
  const dim = anyActive && !active

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer select-none transition-opacity duration-[260ms]",
        active ? "z-40" : "z-[1]",
        dim ? "opacity-[0.42]" : "opacity-100"
      )}
    >
      <div
        data-ecosystem-header
        className={cn(
          "flex items-center gap-3 border px-4 py-[15px] transition-all duration-[240ms]",
          active
            ? "rounded-t-[14px] border-dwa-orange/50 bg-[#141414]/98 shadow-[0_-2px_28px_-12px_rgba(255,98,0,0.4)]"
            : core
              ? "rounded-[14px] border-dwa-orange/30 bg-gradient-to-br from-[#1a120c]/95 to-[#0a0a0a]/95 shadow-[0_0_26px_-10px_rgba(255,98,0,0.4)]"
              : "rounded-[14px] border-dwa-orange/15 bg-gradient-to-br from-[#121212]/90 to-[#0a0a0a]/90"
        )}
        style={active ? { borderBottomColor: "transparent" } : undefined}
      >
        <div
          className={cn(
            "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] border transition-colors",
            active || core
              ? "border-dwa-orange/45 bg-dwa-orange/15 text-dwa-orange"
              : "border-dwa-orange/20 bg-dwa-orange/5 text-neutral-300"
          )}
        >
          <Icon size={19} strokeWidth={1.6} />
        </div>
        <div className="min-w-0">
          <div className="text-md font-semibold leading-tight text-white">
            {module.name}
          </div>
          <div className="mt-0.5 text-[12px] font-medium uppercase tracking-wider text-dwa-orange/85">
            {module.tag}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute left-0 right-0 top-full z-[41] overflow-hidden border border-t-0 border-dwa-orange/50 bg-[#141414]/98 backdrop-blur-sm transition-all duration-300",
          active
            ? "max-h-60 px-4 pb-[15px] pt-1 opacity-100 shadow-[0_22px_46px_-18px_rgba(0,0,0,0.85)]"
            : "max-h-0 px-4 pb-0 pt-0 opacity-0"
        )}
        style={{ borderRadius: active ? "0 0 14px 14px" : undefined }}
      >
        <p className="m-0 text-[11.5px] leading-relaxed text-neutral-400">
          {module.desc}
        </p>
      </div>
    </div>
  )
}

function EcosystemGrid() {
  const t = useTranslations()
  const [hover, setHover] = useState<string | null>(null)
  const [pinned, setPinned] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [positions, setPositions] = useState<FlowPositions | null>(null)
  const sizeRef = useRef(size)
  const positionsRef = useRef<FlowPositions | null>(null)
  const { ref: gridInRef, isVisible: gridVisible } = useInView()

  sizeRef.current = size

  const measureLayout = () => {
    const grid = gridRef.current
    if (!grid) return

    const gridRect = grid.getBoundingClientRect()
    const nextW = grid.clientWidth
    const nextH = grid.clientHeight
    const sizeChanged =
      nextW !== sizeRef.current.w || nextH !== sizeRef.current.h

    const getHeaderCenter = (key: string) => {
      const card = cardRefs.current.get(key)
      if (!card) return null
      const header = card.querySelector("[data-ecosystem-header]")
      if (!header) return null
      const rect = header.getBoundingClientRect()
      return {
        x: rect.left - gridRect.left + rect.width / 2,
        y: rect.top - gridRect.top + rect.height / 2,
      }
    }

    const core = getHeaderCenter("web3")
    if (sizeChanged) {
      sizeRef.current = { w: nextW, h: nextH }
      setSize({ w: nextW, h: nextH })
    }

    if (!core) return

    const cells: Record<string, { x: number; y: number }> = {}
    for (const cell of CELLS) {
      if (cell.core) continue
      const point = getHeaderCenter(cell.key)
      if (point) cells[cell.key] = point
    }

    const web3Header = cardRefs.current
      .get("web3")
      ?.querySelector("[data-ecosystem-header]")
      ?.getBoundingClientRect()
    const haloRadius = web3Header
      ? Math.max(web3Header.width, web3Header.height) * 0.72
      : 72

    const nextPositions: FlowPositions = { core, cells, haloRadius }
    if (!positionsEqual(positionsRef.current, nextPositions)) {
      positionsRef.current = nextPositions
      setPositions(nextPositions)
    }
  }

  useLayoutEffect(() => {
    measureLayout()
  }, [gridVisible])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const run = () => requestAnimationFrame(measureLayout)

    run()

    const ro = new ResizeObserver(run)
    ro.observe(grid)
    window.addEventListener("resize", run)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", run)
    }
  }, [gridVisible])

  const isActive = (key: string) => key === hover || key === pinned
  const activeKeys = [hover, pinned].filter(Boolean) as string[]
  const anyActive = activeKeys.length > 0

  return (
    <div
      ref={gridInRef}
      className={cn(
        "mt-10 lg:mt-14 transition-all duration-700",
        gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <p className="mb-6 text-center text-sm text-neutral-400 lg:hidden">
        {t.ecosystem.gridHintMobile}
      </p>
      <p className="mb-6 hidden text-center text-sm text-neutral-400 lg:block">
        {t.ecosystem.gridHintDesktop}
      </p>

      <div className="mx-auto max-w-[920px] lg:hidden">
        <EcosystemMobileAccordion modules={t.ecosystem.modules} />
      </div>

      <div className="relative mx-auto hidden max-w-[920px] pb-24 lg:block">
        <div
          ref={gridRef}
          className="relative grid grid-cols-3"
          style={{ gap: GAP }}
        >
          <Flows size={size} positions={positions} activeKeys={activeKeys} />
          {CELLS.map((cell) => (
            <EcosystemCard
              key={cell.key}
              cell={cell}
              module={t.ecosystem.modules[cell.key]}
              active={isActive(cell.key)}
              anyActive={anyActive}
              onEnter={() => setHover(cell.key)}
              onLeave={() => setHover(null)}
              onClick={() => setPinned((p) => (p === cell.key ? null : cell.key))}
              cardRef={(el) => {
                if (el) cardRefs.current.set(cell.key, el)
                else cardRefs.current.delete(cell.key)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Ecosystem() {
  const t = useTranslations()
  const { ref: headRef, isVisible: headVisible } = useInView()

  return (
    <section id="ecosystem" className="bg-black py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.ecosystem.title}
            </h2>
            <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-neutral-400">
              <p>{t.ecosystem.p1}</p>
              <p>{t.ecosystem.p2}</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:ml-auto">
            <Image
              src="/images/ecosystem-banner-2.png"
              alt={t.ecosystem.bannerAlt}
              width={350}
              height={543}
              className="w-[450px] h-auto object-contain"
              priority={false}
            />
          </div>
        </div>

        <EcosystemGrid />
      </div>
    </section>
  )
}
