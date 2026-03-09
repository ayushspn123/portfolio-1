"use client"

import { Trophy, Star, Code2, TrendingUp, ExternalLink } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "2nd Prize Winner",
      description: "Hack The November Hackathon",
      detail: "180+ teams participated",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      title: "SIH Finalist 2023",
      description: "Smart India Hackathon",
      detail: "National Level Competition",
      icon: Star,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "400+",
      description: "Coding Problems Solved",
      detail: "LeetCode & GeeksforGeeks",
      icon: Code2,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Ranked 726",
      description: "CodeChef Contest",
      detail: "Out of 14000 participants",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "HackRx 4.0",
      description: "Certificate of Participation",
      detail: "Unstop Platform (Aug 2023)",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      title: "ISRO START",
      description: "Indian Space Research Organization",
      detail: "Completed certification (Aug 2023)",
      icon: Star,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Research Publication",
      description: "Published Research Work",
      detail: "Available on Google Books",
      icon: Code2,
      gradient: "from-violet-500 to-indigo-400",
      link: "https://books.google.co.in/books?hl=en&lr=lang_en&id=aDlcEQAAQBAJ&oi=fnd&pg=PA170&ots=zHutAxvrQf&sig=cgJKLn3WCtGnhkI6k014-RhKSm4&redir_esc=y#v=onepage&q&f=false",
    },
  ]

  return (
    <section id="achievements" className="section-shell bg-gradient-to-b from-background to-card/20">
      <div className="section-container">
        <h2 className="section-title">
          Achievements
        </h2>
        <p className="section-subtitle">
          Recognitions and milestones in my coding journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon
            const cardClasses =
              "group relative bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/60 rounded-xl p-6 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 text-center animate-fade-up overflow-hidden"

            return (
              <a
                key={idx}
                href={achievement.link ?? "#"}
                target={achievement.link ? "_blank" : undefined}
                rel={achievement.link ? "noopener noreferrer" : undefined}
                className={`${cardClasses} ${achievement.link ? "cursor-pointer" : "cursor-default"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-1">{achievement.description}</p>
                  <p className="text-foreground/60 text-xs">{achievement.detail}</p>
                  {achievement.link ? (
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      View Publication
                      <ExternalLink className="w-3.5 h-3.5" />
                    </p>
                  ) : null}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
