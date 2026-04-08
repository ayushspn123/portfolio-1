"use client"

import { useState } from "react"
import { Briefcase, Calendar, ChevronDown, Code2, Database, Users, Target, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Xcelore Pvt Ltd",
      period: "Nov 2023 - Present",
      duration: "2.5+ Years",
      description:
        "Architected and developed scalable MERN stack applications with focus on performance optimization, automation, and user experience enhancement. Built production-ready platforms serving enterprise clients.",
      overview:
        "Proficient MERN Stack Developer with 2.5+ years of expertise in building and deploying scalable web applications. Successfully led end-to-end development of multiple enterprise platforms with cross-functional teams.",
      highlights: ["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript", "Material UI", "Context API"],
      projects: [
        {
          name: "Log Analyzer",
          duration: "2 Months",
          role: "Frontend Developer",
          description:
            "Integrated an ML API to analyze logs stored in the database and return actionable responses. Developed a user-friendly UI allowing users to submit queries and view analyzed results in real-time.",
          keyFeatures: ["Real-time log analysis", "Query suggestions", "Query history sidebar", "ML API integration"],
          tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"],
        },
        {
          name: "Vaidik Edu CMS",
          duration: "Feb - Present",
          role: "Full-Stack Developer",
          description:
            "Led modernization of Vaidik Edu CMS, migrating from Ant Design to Material UI and upgrading to latest React.js. Implemented role-based access for admins, students, and teachers with dynamic modules for course, subject, and content management.",
          keyFeatures: [
            "Role-based access control",
            "Dynamic course management",
            "Document uploads & video embedding",
            "Real-time content updates",
            "60% page load time reduction",
          ],
          tech: ["React.js", "Node.js", "MongoDB", "Context API", "Material UI"],
        },
        {
          name: "Vaidik HRMS",
          duration: "Feb - Present",
          role: "Full-Stack Developer",
          description:
            "Built comprehensive HR management system with smart Productivity Calendar, attendance tracking, leave management, ticketing, and employee onboarding. Developed interactive dashboards with role-based access and clean UI.",
          keyFeatures: [
            "Productivity calendar with task logging",
            "Attendance tracking",
            "Leave management",
            "Ticketing system",
            "Employee onboarding",
            "Admin dashboards",
          ],
          tech: ["React.js", "Node.js", "MongoDB", "Context API", "Material UI"],
        },
        {
          name: "Xcelorate",
          duration: "May - Present",
          role: "Full-Stack Developer (Project Lead)",
          description:
            "Led development of robust full-stack MERN application with four integrated panels—Reimbursement, CAMS, Attendance, and Admin. Engineered secure, scalable solutions with RESTful APIs and role-based access.",
          keyFeatures: [
            "Automated expense management",
            "Real-time attendance tracking",
            "Reimbursement workflow",
            "CAMS integration",
            "Centralized admin control",
            "Interactive data visualizations",
          ],
          tech: ["Next.js", "Node.js", "MongoDB", "Context API", "TypeScript"],
        },
        {
          name: "Pythag",
          duration: "March - April",
          role: "Full-Stack Developer",
          description:
            "Resolved critical issues across real-time dashboards, live meters, and analytics modules. Corrected calculation errors in derived metrics and optimized data pipelines for smoother updates and enhanced visualization.",
          keyFeatures: [
            "Real-time dashboards",
            "Live metrics tracking",
            "Batch performance monitoring",
            "Alert system",
            "Data pipeline optimization",
          ],
          tech: ["React.js", "Node.js", "MongoDB", "Context API", "Ant Design"],
        },
        {
          name: "Vaidik TimeBack Admin",
          duration: "Feb - Present",
          role: "Full-Stack Developer",
          description:
            "Developed dynamic question generation platform for creating custom quizzes. Built interactive design panel for admins to configure question flow, scoring rules, and experience points.",
          keyFeatures: [
            "Dynamic quiz generation",
            "Interactive design panel",
            "Bulk question generation",
            "XML export compatibility",
            "Student-facing interface",
            "Real-time scoring & progress tracking",
            "Quiz review & history",
          ],
          tech: ["React.js", "Node.js", "MongoDB", "Context API", "Material UI", "XML generation"],
        },
      ],
      icon: Briefcase,
    },
    {
      title: "Software Researcher",
      company: "Indian Institute of Remote Sensing (IIRS), ISRO",
      period: "Jul 2023 - Aug 2023",
      duration: "2 Months",
      description:
        "Conducted research on remote sensing technologies and space applications. Developed proof-of-concept solutions with focus on scalable architecture and responsive UI design.",
      overview: "Internship at Indian Space Research Organization focusing on R&D and POC development.",
      highlights: ["Research", "POC Development", "Architecture Design"],
      projects: [
        {
          name: "ISRO Remote Sensing Research",
          duration: "2 Months",
          role: "Research Intern",
          description:
            "Participated in ISRO's remote sensing research initiatives with focus on developing scalable solutions and responsive user interfaces for space technology applications.",
          keyFeatures: ["Research & Development", "POC Development", "Responsive UI", "Architecture Design"],
          tech: ["Research Tools", "System Design"],
        },
      ],
      icon: Briefcase,
    },
  ]

  return (
    <section id="experience" className="section-shell">
      <div className="pointer-events-none absolute inset-0 mesh-backdrop opacity-[0.06]" aria-hidden />
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl" aria-hidden />

      <div className="section-container">
        {/* Section header */}
        <ScrollReveal className="text-center mb-14" direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Building production-grade products and exploring applied research</p>
        </ScrollReveal>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {[
            { icon: Code2, label: "Projects Shipped", value: "6+" },
            { icon: Users, label: "Team Members", value: "5+" },
            { icon: Database, label: "Platforms Built", value: "4+" },
            { icon: Target, label: "Performance Gain", value: "60%" },
          ].map((s, i) => (
            <ScrollReveal key={i} delayMs={90 * i}>
              <div className="modern-card flex flex-col items-center justify-center py-5 px-3 gap-2 hover:border-accent/50 transition-colors duration-300">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center">
                  <s.icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
                <p className="text-xs text-foreground/55 text-center">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} className="relative" delayMs={120 * idx} direction={idx % 2 === 0 ? "up" : "right"}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-3.5 top-7 h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/40 z-10">
                  <div className="h-2 w-2 rounded-full bg-white/80" />
                </div>

                {/* Card */}
                <div className="md:ml-16 modern-card group overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

                  <div className="p-5 sm:p-6">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                          <span className="text-secondary font-semibold text-sm">{exp.company}</span>
                          <span className="hidden sm:inline text-foreground/25">·</span>
                          <span className="flex items-center gap-1 text-foreground/55 text-xs">
                            <MapPin className="w-3 h-3" />
                            Noida, India
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                        <div className="flex items-center gap-1.5 text-foreground/60 text-xs border border-border/60 rounded-full px-3 py-1.5 bg-background/50">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/25">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/65 leading-relaxed mb-5">{exp.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.highlights.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Projects toggle */}
                    <button
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      className="group/btn flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/10 transition-transform duration-300 ${openIdx === idx ? "rotate-45" : ""}`}>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
                      </span>
                      {openIdx === idx ? "Hide Projects" : `View ${exp.projects.length} Projects`}
                    </button>

                    {/* Projects list */}
                    {openIdx === idx && (
                      <div className="mt-5 grid sm:grid-cols-2 gap-3">
                        {exp.projects.map((p, pidx) => (
                          <ScrollReveal key={pidx} delayMs={90 * pidx}>
                            <div className="rounded-xl border border-border/50 bg-background/50 p-4 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="text-sm font-bold text-foreground">{p.name}</h4>
                                <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary">
                                  {p.duration}
                                </span>
                              </div>
                              <p className="text-xs text-accent/80 font-medium mb-2">{p.role}</p>
                              <ul className="space-y-1 mb-3">
                                {p.keyFeatures.slice(0, 3).map((f, fi) => (
                                  <li key={fi} className="text-xs text-foreground/60 flex items-start gap-1.5">
                                    <span className="text-accent/70 mt-0.5 shrink-0">›</span>
                                    {f}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1">
                                {p.tech.map((t, ti) => (
                                  <span key={ti} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary/80 border border-primary/15">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
