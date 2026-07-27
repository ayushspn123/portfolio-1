"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-40 border-b border-border bg-background/92 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="h-8 w-8 border border-foreground/70 flex items-center justify-center font-mono text-xs font-semibold group-hover:border-primary group-hover:text-primary transition-colors">
              AK
            </span>
            <span className="font-mono text-sm hidden sm:inline text-foreground tracking-tight">
              ayush<span className="text-primary">/</span>kumar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.1em] text-foreground/65 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-[0.1em] px-4 py-2 border border-foreground bg-foreground text-background hover:bg-primary hover:border-primary transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 border border-border hover:border-primary transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <div className="pt-3 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-foreground/75 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 py-2.5 text-center font-mono text-xs uppercase tracking-[0.1em] border border-foreground bg-foreground text-background"
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
