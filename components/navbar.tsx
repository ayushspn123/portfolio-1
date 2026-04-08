"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Sparkles, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Skills", href: "/skills" },
    { label: "Hire Me", href: "/hire-me" },
  ]

  return (
    <nav className="fixed top-3 sm:top-4 w-full z-40 animate-slide-left px-3 sm:px-4">
      <div className="relative max-w-6xl mx-auto frame-panel px-3 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm shadow-primary/25">
              <span className="text-primary-foreground font-bold text-sm">AK</span>
            </div>
            <span className="font-semibold text-base hidden sm:inline text-foreground tracking-tight">Ayush Kumar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 items-center rounded-full border border-border/80 bg-background/45 p-1.5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-foreground/72 hover:text-primary hover:bg-primary/10 transition-colors duration-300 text-sm font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/hire-me"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-sm shadow-primary/25 hover:bg-primary/90 transition-colors uppercase tracking-[0.08em]"
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
            className="md:hidden p-2.5 hover:bg-card rounded-lg transition-colors border border-border/70"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 animate-fade-up">
            <div className="glass-card rounded-xl border border-border/80 p-2 shadow-xl shadow-foreground/10">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-foreground/85 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/hire-me"
                onClick={() => setIsOpen(false)}
                className="mt-1 block px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
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
