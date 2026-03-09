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
      skills: ["Data Structures & Algorithms", "System Design", "Machine Learning Basics", "RESTful APIs"],
      icon: Brain,
      gradient: "from-indigo-500 to-purple-400",
    },
    {
      category: "AI Research (Current Focus)",
      skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Model Evaluation", "Literature Review"],
      icon: Brain,
      gradient: "from-fuchsia-500 to-violet-400",
    },
  ]

  return (
    <section id="skills" className="section-shell bg-gradient-to-b from-background to-card/20">
      <div className="section-container">
        <h2 className="section-title">
          Skills & Expertise
        </h2>
        <p className="section-subtitle">
          Proficient in modern web technologies and proven expertise across multiple company projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon
            return (
              <div
                key={idx}
                className={`group modern-card p-6 sm:p-8 transition-all duration-300 animate-fade-up hover:-translate-y-1 ${
                  idx === 0 ? "lg:col-span-2" : ""
                } ${idx === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
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
                <p className="text-sm text-foreground/65 mb-4">
                  {cat.skills.length} tools and technologies used in real-world delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/15 to-accent/15 text-foreground rounded-full border border-primary/30 hover:border-accent/60 hover:bg-accent/20 transition-all duration-300 text-xs font-semibold cursor-default hover:-translate-y-0.5"
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
