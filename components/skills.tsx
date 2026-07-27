"use client"

import { ScrollReveal } from "./scroll-reveal"

export function Skills() {
  const skillCategories = [
    {
      category: "Core",
      skills: ["Python", "SQL (MS-SQL, MySQL)", "REST APIs", "Postman", "Git/GitHub", "Linux/Unix"],
    },
    {
      category: "DevOps & Infra",
      skills: ["Docker", "Kubernetes", "Kafka", "RabbitMQ", "CI/CD", "Microservices", "Vercel"],
    },
    {
      category: "Application Development",
      skills: ["JavaScript", "TypeScript", "Node.js", "Express.js", "FastAPI", "React.js", "Next.js",'MongoDb'],
    },
    {
      category: "Company Projects",
      skills: ["Muthoot Finance (MreKYC)", "Vaidik HR System", "Xcelorate Platform", "CAMS", "React Native Apps"],
    },
    {
      category: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "OOP", "System Design", "Computer Networks", "Operating Systems"],
    },
    {
      category: "AI Research (Current Focus)",
      skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Model Evaluation", "Literature Review"],
    },
  ]

  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <ScrollReveal>
          <p className="kicker">[ 04 — Toolbox ]</p>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-subtitle">
            Proficient in modern web technologies and proven expertise across multiple company projects.
          </p>
        </ScrollReveal>

        <div className="mt-12 border-t border-border">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.category} delayMs={60 * idx}>
              <div className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-6 border-b border-border">
                <div className="flex items-baseline gap-3 sm:block">
                  <span className="font-mono text-xs text-primary">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-semibold text-foreground">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="doc-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
