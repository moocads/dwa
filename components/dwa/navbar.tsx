"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dwa-bg/80 backdrop-blur-lg border-b border-dwa-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/dwa-logo.png" alt="DWA Logo" width={100} height={100} />
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-dwa-text hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              ABOUT
            </Link>
            <Link
              href="#why-dwa"
              className="text-dwa-text hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              WHY DWA
            </Link>
            <Link
              href="#how-it-works"
              className="text-dwa-text hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              HOW IT WORKS
            </Link>
          </div>

          {/* Connect Wallet Button */}
          <button className="border border-dwa-orange text-dwa-orange px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-dwa-orange hover:text-white transition-all duration-300">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </nav>
  )
}
