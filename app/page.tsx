import { Navbar } from "@/components/dwa/navbar"
import { Hero } from "@/components/dwa/hero"
import { StatsBar } from "@/components/dwa/stats-bar"
import { WhatIsDwa } from "@/components/dwa/what-is-dwa"
import { Comparison } from "@/components/dwa/comparison"
import { Features } from "@/components/dwa/features"
import { WhyChoose } from "@/components/dwa/why-choose"
import { Technology } from "@/components/dwa/technology"
import { Ecosystem } from "@/components/dwa/ecosystem"
import { Partners } from "@/components/dwa/partners"

import { Vision } from "@/components/dwa/vision"
import { Footer } from "@/components/dwa/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-dwa-bg">
      <Navbar />
      <Hero />
      {/* <StatsBar /> */}
      {/* <WhatIsDwa /> */}
      {/* <Comparison /> */}
      <WhyChoose />
      {/* <Features /> */}
      <Technology />
      <Ecosystem />
      <Vision />
      <Partners />
      <Footer />
    </main>
  )
}
