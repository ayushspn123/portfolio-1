"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Sparkles, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ["About", "Experience", "Projects", "Research", "Skills", "Contact"]

  return (
    <nav className="fixed top-3 sm:top-4 w-full z-40 animate-slide-left px-3 sm:px-4">
      <div className="relative max-w-6xl mx-auto signature-shell px-3 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-md shadow-accent/30">
              <span className="text-primary-foreground font-bold text-sm">AK</span>
            </div>
            <span className="font-semibold text-base hidden sm:inline text-foreground">Ayush Kumar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm font-semibold"
              >
                {item}
              </Link>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold shadow-md shadow-accent/25 hover:opacity-95 transition-opacity uppercase tracking-[0.08em]"
            >
              <Sparkles className="w-4 h-4" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 hover:bg-card rounded-lg transition-colors border border-border/60"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 animate-fade-up">
            <div className="glass-card rounded-xl border border-border/70 p-2 shadow-xl shadow-primary/10">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-foreground/85 hover:text-accent hover:bg-accent/10 rounded-xl transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-1 block px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
