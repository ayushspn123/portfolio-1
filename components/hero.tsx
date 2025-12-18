"use client"

import { useState } from "react"
import { Typewriter, useTypewriter } from "./typewriter"
import { Code2, ArrowRight, Mail, Linkedin, Github } from "lucide-react"

const BIT_VALUES = ["001", "010", "011", "100", "101", "110", "111", "000"];


function getRandomAngle(i: number, total: number): number {
  // Spread bits in a circle, with a little random offset for natural look
  return (i / total) * 2 * Math.PI + (Math.random() - 0.5) * 0.3;
}


export function Hero() {
  // Texts for typewriter effect
  const line1 = "Building Scalable Web and Mobile Apps"
  const line2 = "Full-Stack Developer passionate about crafting production-ready applications with modern technologies and best practices."
  const line3 = "Currently at Xcelore Pvt Ltd (2+ years experience), building innovative solutions using MERN stack, Next.js, React Native, and cloud technologies. 1K+ LinkedIn followers."


  // Sequential typewriter: each line starts after previous is done
  const { displayedText: text1, isComplete: done1 } = useTypewriter(line1, 30, 600)
  const { displayedText: text2, isComplete: done2 } = useTypewriter(line2, 20, done1 ? 200 : 999999)
  const { displayedText: text3, isComplete: done3 } = useTypewriter(line3, 18, done2 ? 200 : 999999)



  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
      style={{ cursor: "pointer" }}
    >
      {/* Animated floating bits - absolutely positioned, behind main content */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <span className="bit-float bit-float-visible absolute text-xs md:text-lg font-mono left-10 top-10 animate-bit-down-1">001</span>
        <span className="bit-float bit-float-visible absolute text-xs md:text-lg font-mono left-1/3 top-0 animate-bit-down-2">110</span>
        <span className="bit-float bit-float-visible absolute text-xs md:text-lg font-mono left-1/2 top-8 animate-bit-down-3">101</span>
        <span className="bit-float bit-float-visible absolute text-xs md:text-lg font-mono right-1/4 top-4 animate-bit-down-4">011</span>
        <span className="bit-float bit-float-visible absolute text-xs md:text-lg font-mono right-10 top-16 animate-bit-down-5">100</span>
        {/* Removed bit explosion bits */}
      </div>
      <div className="absolute top-20 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Code2 className="w-5 h-5 text-accent animate-bounce-subtle" />
              </div>
              <p className="text-accent font-semibold text-lg">Welcome to my portfolio</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow-text">
                Ayush Kumar
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-accent mb-4 leading-relaxed">
              <span>{text1}{!done1 && <span className="animate-pulse">|</span>}</span>
            </p>
            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              <span>{text2}{done1 && !done2 && <span className="animate-pulse">|</span>}</span>
            </p>
            <p className="text-foreground/60 text-base mb-8 leading-relaxed">
              <span>{text3}{done2 && !done3 && <span className="animate-pulse">|</span>}</span>
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <a
                href="https://linkedin.com/in/ayushkumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-accent/30 p-2 rounded-lg hover:bg-accent/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ayushspn123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-accent/30 p-2 rounded-lg hover:bg-accent/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:ayushvermaspn@gmail.com"
                className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-accent/30 p-2 rounded-lg hover:bg-accent/10"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-secondary/20 rounded-2xl blur-xl animate-glow-pulse" />
              <div className="relative bg-card border-2 border-accent/30 rounded-2xl p-8 backdrop-blur-md hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
                <div className="w-full h-64 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-12 h-12 text-white animate-pulse" />
                    </div>
                    <p className="text-foreground/90 font-semibold text-lg">Full-Stack Developer</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ayush Kumar
                </h3>
                <p className="text-foreground/70 mb-6">
                  Building scalable, beautiful web and mobile experiences with cutting-edge technologies.
                </p>
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
                      <span className="text-accent font-semibold">Experience:</span> 2+ Years Full-Stack
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
