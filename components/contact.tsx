"use client"

import { Mail, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      description: "ayushvermaspn@gmail.com",
      icon: Mail,
      link: "mailto:ayushvermaspn@gmail.com",
      gradient: "from-red-500 to-pink-400",
    },
    {
      title: "LinkedIn",
      description: "Connect with me",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ayushkumar-dev/",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "GitHub",
      description: "Check my projects",
      icon: Github,
      link: "https://github.com/ayushspn123",
      gradient: "from-gray-600 to-gray-400",
    },
  ]

  return (
    <section id="contact" className="section-shell bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-0">
          Let's Work Together
        </h2>
        <p className="section-subtitle leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                target={method.title !== "Email" ? "_blank" : undefined}
                rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                className="group modern-card p-5 sm:p-6 hover:border-accent/60 transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-accent text-sm">{method.description}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="modern-card max-w-2xl mx-auto p-5 sm:p-7 text-left sm:text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Quick Start</p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gradient-soft">Tell me what you are building</h3>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base">
            I can help with frontend architecture, full-stack implementation, and production release readiness.
          </p>
          <div className="mt-5 flex flex-wrap sm:justify-center gap-3">
            <a
              href="mailto:ayushvermaspn@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 animate-bounce-subtle group"
            >
              Send Me an Email
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushkumar-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-accent/50 text-accent rounded-xl font-semibold hover:bg-accent/10 transition-all duration-300"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
