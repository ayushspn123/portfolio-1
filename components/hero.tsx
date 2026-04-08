"use client"

import { useTypewriter } from "./typewriter"
import { TerminalNeuralNetwork } from "./terminal-neural-network"
import { Code2, ArrowRight, Mail, Linkedin, Github, Sparkles, CircleCheck } from "lucide-react"

export function Hero() {
  // Texts for typewriter effect
  const line1 = "Full-Stack Developer and AI Researcher"
  const line2 = "I build production-ready apps and actively explore applied AI research with practical implementation focus."
  const line3 = "Currently at Xcelore Pvt Ltd (2.5+ years), working across MERN stack and real-world product delivery."


  // Sequential typewriter: each line starts after previous is done
  const { displayedText: text1, isComplete: done1 } = useTypewriter(line1, 30, 600)

  return (
    <section
      id="about"
      className="section-shell min-h-[calc(100svh-2rem)] flex items-center justify-center pt-24 sm:pt-28 relative text-slate-100"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.08),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(15,23,42,0.88))]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-[0.1]" aria-hidden />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/3 left-[42%] w-64 h-64 bg-emerald-400/8 rounded-full blur-3xl" />

      <div className="section-container max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="editorial-kicker mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Available for impactful product teams
            </div>
            <p className="text-cyan-300/90 font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase mb-4">
              Full-Stack Engineer | AI Researcher
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-[1.04] tracking-tight text-slate-50">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-glow-text">
                Ayush Kumar
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-cyan-200 mb-4 leading-relaxed">
              <span className="inline-flex items-baseline">{text1}{!done1 && <span className="typewriter-caret" aria-hidden>|</span>}</span>
            </p>
            <p className="text-slate-300/90 text-sm sm:text-base md:text-lg mb-4 leading-relaxed max-w-xl">
              {line2}
            </p>
            <p className="text-slate-400/90 text-sm sm:text-base mb-8 leading-relaxed max-w-xl">
              {line3}
            </p>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-5 sm:px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-colors flex items-center gap-2 group shadow-lg shadow-cyan-500/20"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-5 sm:px-7 py-3 border border-cyan-300/35 text-cyan-100 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                Let's Collaborate
              </a>
            </div>
            <div className="flex gap-4 sm:gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/ayushkumar-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-200 transition-colors duration-300 p-2.5 rounded-lg hover:bg-cyan-400/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ayushspn123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-200 transition-colors duration-300 p-2.5 rounded-lg hover:bg-cyan-400/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:ayushvermaspn@gmail.com"
                className="text-slate-400 hover:text-cyan-200 transition-colors duration-300 p-2.5 rounded-lg hover:bg-cyan-400/10"
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
                <div key={stat.label} className="modern-card px-3 py-2.5 text-center">
                  <p className="text-sm sm:text-base font-bold text-slate-50">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="md:hidden mt-8 glass-card rounded-2xl border border-border/80 p-5">
              <p className="text-sm text-slate-300">
                <span className="text-cyan-300 font-semibold">Location:</span> Noida, India
              </p>
              <p className="text-sm text-slate-300 mt-2">
                <span className="text-cyan-300 font-semibold">Experience:</span> 2.5+ Years Full-Stack
              </p>
              <p className="text-sm text-slate-300 mt-2">
                <span className="text-cyan-300 font-semibold">Email:</span> ayushvermaspn@gmail.com
              </p>
              <p className="text-sm text-slate-300 mt-2 flex items-center gap-1.5">
                <CircleCheck className="w-4 h-4 text-emerald-300" />
                Open to freelance and full-time roles
              </p>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="hidden md:block">
            <div className="relative group">
              {/* Glow background effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-accent/25 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100" />
              
              {/* Main card container */}
              <div className="relative bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 rounded-2xl p-7 border border-cyan-400/20 shadow-2xl hover:border-cyan-300/35 transition-all duration-300">
                {/* Top bar with window controls */}
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg shadow-red-500/30" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/30" />
                  <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-lg shadow-green-500/30" />
                  <div className="ml-auto text-xs font-semibold text-cyan-200/70 tracking-widest">NEURAL.APP</div>
                </div>

                {/* Neural Network Display */}
                <div className="w-full h-60 rounded-xl mb-6 relative overflow-hidden border border-cyan-400/25 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 shadow-inner">
                  <TerminalNeuralNetwork />
                  
                  {/* Overlay gradients for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(125,211,252,0.14),transparent_46%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.16),transparent_46%)] pointer-events-none" />
                  
                  {/* Terminal content overlay */}
                  <div className="relative z-10 h-full p-5 flex flex-col justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 rounded-md border border-cyan-300/35 bg-slate-950/35 backdrop-blur-sm px-3 py-1.5 w-fit text-xs font-semibold text-cyan-200">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse shadow-lg shadow-cyan-400/50" />
                      Terminal Ready
                    </div>
                    <div className="space-y-2 font-mono text-xs text-cyan-100/90 drop-shadow-[0_0_10px_rgba(34,211,238,0.12)]">
                      <p className="text-cyan-100/80">$ npm run build</p>
                      <p className="text-cyan-100/80">$ npm run test</p>
                      <p className="text-cyan-100/80">$ git push origin main</p>
                    </div>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute left-4 right-4 bottom-4 z-20 rounded-lg border border-cyan-400/30 bg-slate-950/72 backdrop-blur-md px-3 py-2 shadow-lg shadow-cyan-500/12">
                    <div className="flex items-center gap-2 text-slate-100">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <p className="font-semibold text-sm tracking-wide">Engineering + Applied AI</p>
                    </div>
                  </div>
                </div>

                {/* Profile info section */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                    Ayush Kumar
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Building scalable, beautiful web and mobile experiences with cutting-edge technologies.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 text-xs font-semibold text-emerald-200">
                    <CircleCheck className="w-3.5 h-3.5 text-emerald-300" />
                    Open for collaboration
                  </div>

                  {/* Contact info section */}
                  <div className="space-y-3 border-t border-cyan-400/10 pt-4">
                    <p className="text-sm flex items-center gap-3">
                      <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">
                        <span className="text-cyan-300 font-semibold">Email:</span>{" "}
                        <span className="text-slate-300">ayushvermaspn@gmail.com</span>
                      </span>
                    </p>
                    <p className="text-sm flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>
                        <span className="text-cyan-300 font-semibold">Experience:</span>{" "}
                        <span className="text-slate-300">2.5+ Years Full-Stack</span>
                      </span>
                    </p>
                    <p className="text-sm flex items-center gap-3">
                      <Github className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>
                        <span className="text-cyan-300 font-semibold">Location:</span>{" "}
                        <span className="text-slate-300">Noida, India</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
