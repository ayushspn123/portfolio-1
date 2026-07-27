"use client"

import Image from "next/image"
import { useTypewriter } from "./typewriter"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"

export function Hero() {
  const line1 = "Full-Stack Developer and AI Researcher"
  const line2 = "I build production-ready apps and actively explore applied AI research with practical implementation focus."
  const line3 = "Currently at Xcelore Pvt Ltd (2.5+ years), working across MERN stack and real-world product delivery."

  const { displayedText: text1, isComplete: done1 } = useTypewriter(line1, 30, 600)

  const stats = [
    { label: "Experience", value: "2.5+ Yrs" },
    { label: "Projects", value: "15+" },
    { label: "Research", value: "Early Stage" },
  ]

  return (
    <section
      id="about"
      className="section-shell min-h-svh flex items-center pt-24 relative text-foreground"
    >
      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="md:col-span-3">
            <p className="kicker mb-6">[ Available for impactful product teams ]</p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance mb-6">
              <span className="font-medium">Hi, I'm</span>
              <br />
              <span className="font-semibold italic text-primary">Ayush Kumar</span>
            </h1>

            <p className="font-mono text-sm sm:text-base text-secondary mb-5 min-h-[1.5em]">
              <span className="inline-flex items-baseline">
                {text1}
                {!done1 && (
                  <span className="typewriter-caret" aria-hidden>
                    |
                  </span>
                )}
              </span>
            </p>

            <p className="font-body text-foreground/75 text-base sm:text-lg mb-4 leading-relaxed max-w-xl">
              {line2}
            </p>
            <p className="font-body text-foreground/55 text-sm sm:text-base mb-10 leading-relaxed max-w-xl">
              {line3}
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="#projects"
                className="px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest flex items-center gap-2 group border border-foreground hover:bg-primary hover:border-primary transition-colors"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-foreground/40 font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
              >
                Let's Collaborate
              </a>
            </div>

            <div className="flex items-center gap-5 mb-10">
              <a
                href="https://www.linkedin.com/in/ayushkumar-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ayushspn123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ayushvermaspn@gmail.com"
                className="text-foreground/50 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap divide-x divide-border border-t border-b border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-4 first:pl-0">
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dossier card */}
          <div className="md:col-span-2">
            <div className="doc-card overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src="/ayush-kumar.jpg"
                  alt="Ayush Kumar — Full-Stack Developer and AI Researcher"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                {/* Subtle frame + top scrim for label legibility, no color shift on the photo */}
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/25" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                {/* Fade the bottom of the photo into the card, so it reads as one surface */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/90 bg-black/20 backdrop-blur-md border border-white/15 px-2 py-1">
                    File / 01
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/90 bg-black/20 backdrop-blur-md border border-white/15 px-2 py-1">
                    Profile
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Ayush Kumar</h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-5">
                  Building scalable, production-grade web and mobile experiences, with an applied AI research track on
                  the side.
                </p>

                <dl className="space-y-0 border-t border-border">
                  {[
                    { k: "Role", v: "Full-Stack Developer" },
                    { k: "Focus", v: "MERN + Applied AI" },
                    { k: "Location", v: "Noida, India" },
                    { k: "Status", v: "Open to collaborate" },
                    { k: "Email", v: "ayushvermaspn@gmail.com" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-4 py-2.5 border-b border-border">
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground shrink-0">
                        {row.k}
                      </dt>
                      <dd className="text-sm text-foreground/85 text-right truncate">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
