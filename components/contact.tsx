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
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-foreground/70 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                target={method.title !== "Email" ? "_blank" : undefined}
                rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                className="group relative p-6 bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/60 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 animate-fade-up overflow-hidden"
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

        <a
          href="mailto:ayushvermaspn@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 animate-bounce-subtle group"
        >
          Send Me an Email
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
