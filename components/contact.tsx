"use client"

import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      description: "ayushvermaspn@gmail.com",
      icon: Mail,
      link: "mailto:ayushvermaspn@gmail.com",
    },
    {
      title: "LinkedIn",
      description: "Connect with me",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ayushkumar-dev/",
    },
    {
      title: "GitHub",
      description: "Check my projects",
      icon: Github,
      link: "https://github.com/ayushspn123",
    },
  ]

  return (
    <section id="contact" className="section-shell">
      <div className="section-container max-w-3xl">
        <ScrollReveal>
          <p className="kicker">[ 07 — Contact ]</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
            like to collaborate.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-b border-border mt-12 mb-12">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon
            return (
              <ScrollReveal key={method.title} delayMs={70 * idx}>
                <a
                  href={method.link}
                  target={method.title !== "Email" ? "_blank" : undefined}
                  rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-2 py-6 px-2 sm:px-6 hover:text-primary transition-colors"
                >
                  <IconComponent className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-foreground/60 truncate">{method.description}</p>
                </a>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delayMs={100}>
          <div className="doc-card p-6 sm:p-8">
            <p className="kicker mb-2">[ Quick Start ]</p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">Tell me what you are building</h3>
            <p className="mt-3 text-foreground/65 text-sm sm:text-base max-w-xl">
              I can help with frontend architecture, full-stack implementation, and production release readiness.
            </p>
            <div className="hairline my-6" />
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:ayushvermaspn@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors group"
              >
                Send Me an Email
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushkumar-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/40 font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
              >
                Message on LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
