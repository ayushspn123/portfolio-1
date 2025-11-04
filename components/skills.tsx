"use client"

import { Database, Building2, Brain, Code2, GitBranch } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Node.js", "Express.js"],
      icon: Code2,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQL", "Firebase"],
      icon: Database,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub", "npm", "VS Code", "Docker", "AWS"],
      icon: GitBranch,
      gradient: "from-orange-500 to-red-400",
    },
    {
      category: "Company Projects",
      skills: ["MUthoot Finance", "Vaidik HR System", "Xcelore Platform", "CAMS", "React Native Apps", "Exei"],
      icon: Building2,
      gradient: "from-green-500 to-emerald-400",
    },
    {
      category: "Other Skills",
      skills: ["Data Structures & Algorithms", "System Design", "Machine Learning Basics", "OOP", "RESTful APIs"],
      icon: Brain,
      gradient: "from-indigo-500 to-purple-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Proficient in modern web technologies and proven expertise across multiple company projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/60 rounded-xl p-8 transition-all duration-300 animate-fade-up hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${cat.gradient} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/15 to-accent/15 text-foreground rounded-lg border border-primary/30 hover:border-accent/60 hover:bg-accent/20 transition-all duration-300 text-xs font-semibold hover:shadow-md hover:shadow-accent/20 cursor-default hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
