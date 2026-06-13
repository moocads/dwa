"use client"

export function Footer() {
  return (
    <footer className="bg-dwa-bg py-12 border-t border-dwa-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <p className="text-3xl sm:text-4xl font-black text-white mb-4">DWA</p>
        <p className="text-dwa-text text-sm">
          The Gateway Where Every Asset Meets Web3.
        </p> */}
 
          <p className="text-dwa-text/60 text-xs">
            © {new Date().getFullYear()} DWA Labs. All rights reserved.
          </p>
       
      </div>
    </footer>
  )
}
