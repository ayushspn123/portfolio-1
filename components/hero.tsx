"use client"

import { useTypewriter } from "./typewriter"
import { Code2, ArrowRight, Mail, Linkedin, Github, Sparkles, CircleCheck } from "lucide-react"

export function Hero() {
  // Texts for typewriter effect
  const line1 = "Full-Stack Developer and AI Researcher"
  const line2 = "I build production-ready apps and now actively explore applied AI research with practical implementation focus."
  const line3 = "Currently at Xcelore Pvt Ltd (2.5+ years experience), working across MERN stack and expanding into AI research, model experimentation, and real-world problem solving."


  // Sequential typewriter: each line starts after previous is done
  const { displayedText: text1, isComplete: done1 } = useTypewriter(line1, 30, 600)
  const { displayedText: text2, isComplete: done2 } = useTypewriter(line2, 20, 220, done1)
  const { displayedText: text3, isComplete: done3 } = useTypewriter(line3, 18, 220, done2)

  return (
    <section
      id="about"
      className="section-shell min-h-[calc(100svh-2rem)] flex items-center justify-center pt-24 sm:pt-28 relative"
    >
      <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-[0.17]" aria-hidden />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/3 left-[42%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/10 text-xs sm:text-sm font-semibold text-primary shadow-sm shadow-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Available for impactful product teams
            </div>
            <p className="text-accent/90 font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">Full-Stack Engineer | AI Researcher</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow-text">
                Ayush Kumar
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-accent mb-4 leading-relaxed">
              <span className="inline-flex items-baseline">{text1}{!done1 && <span className="typewriter-caret" aria-hidden>|</span>}</span>
            </p>
            <p className="text-foreground/75 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
              <span className="inline-flex items-baseline">{text2}{done1 && !done2 && <span className="typewriter-caret" aria-hidden>|</span>}</span>
            </p>
            <p className="text-foreground/65 text-sm sm:text-base mb-8 leading-relaxed max-w-xl">
              <span className="inline-flex items-baseline">{text3}{done2 && !done3 && <span className="typewriter-caret" aria-hidden>|</span>}</span>
            </p>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-5 sm:px-7 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-5 sm:px-7 py-3 border border-accent/60 text-accent rounded-xl font-semibold hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Let's Collaborate
              </a>
            </div>
            <div className="flex gap-4 sm:gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/ayushkumar-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-accent/30 p-2.5 rounded-lg hover:bg-accent/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ayushspn123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-accent/30 p-2.5 rounded-lg hover:bg-accent/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:ayushvermaspn@gmail.com"
                className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-accent/30 p-2.5 rounded-lg hover:bg-accent/10"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-xl">
              {[
                { label: "Experience", value: "2.5+ yrs" },
                { label: "Projects", value: "15+" },
                { label: "Research", value: "Early Stage" },
              ].map((stat) => (
                <div key={stat.label} className="signature-shell px-3 py-2.5 text-center">
                  <p className="text-sm sm:text-base font-bold text-foreground">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-foreground/65">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="md:hidden mt-8 glass-card rounded-2xl border border-accent/20 p-5">
              <p className="text-sm text-foreground/70">
                <span className="text-accent font-semibold">Location:</span> Noida, India
              </p>
              <p className="text-sm text-foreground/70 mt-2">
                <span className="text-accent font-semibold">Experience:</span> 2.5+ Years Full-Stack
              </p>
              <p className="text-sm text-foreground/70 mt-2">
                <span className="text-accent font-semibold">Email:</span> ayushvermaspn@gmail.com
              </p>
              <p className="text-sm text-foreground/70 mt-2 flex items-center gap-1.5">
                <CircleCheck className="w-4 h-4 text-primary" />
                Open to freelance and full-time roles
              </p>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/15 rounded-2xl blur-xl" />
              <div className="relative signature-shell p-8 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
                <div className="mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="w-full h-56 bg-gradient-to-br from-primary/85 via-accent/80 to-secondary/85 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white font-semibold text-lg">Full-Stack Developer</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ayush Kumar
                </h3>
                <p className="text-foreground/70 mb-6">
                  Building scalable, beautiful web and mobile experiences with cutting-edge technologies.
                </p>
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary">
                  <CircleCheck className="w-3.5 h-3.5" />
                  Open for collaboration
                </div>
                <div className="space-y-3 border-t border-border/50 pt-6">
                  <p className="text-sm flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="truncate">
                      <span className="text-accent font-semibold">Email:</span> ayushvermaspn@gmail.com
                    </span>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span>
                      <span className="text-accent font-semibold">Phone:</span> +91 7905032371
                    </span>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span>
                      <span className="text-accent font-semibold">Location:</span> Noida, India
                    </span>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span>
                      <span className="text-accent font-semibold">Experience:</span> 2.5+ Years Full-Stack
                    </span>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span>
                      <span className="text-accent font-semibold">LinkedIn:</span> 1K+ Followers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
