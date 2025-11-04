"use client"

import { Trophy, Star, Code2, TrendingUp } from "lucide-react"

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
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Achievements
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Recognitions and milestones in my coding journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/60 rounded-xl p-6 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 text-center animate-fade-up overflow-hidden"
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
