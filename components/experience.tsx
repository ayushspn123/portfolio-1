"use client"

import { useState } from "react"
import { Briefcase, Calendar, ChevronDown, Zap, Target, Code2, Database, Users } from "lucide-react"

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Xcelore Pvt Ltd",
      period: "Nov 2023 - Present",
      duration: "2+ Years",
      description:
        "Architected and developed scalable MERN stack applications with focus on performance optimization, automation, and user experience enhancement. Built production-ready platforms serving enterprise clients.",
      overview:
        "Proficient MERN Stack Developer with 2+ years of expertise in building and deploying scalable web applications. Successfully led end-to-end development of multiple enterprise platforms with cross-functional teams.",
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
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Professional journey with enterprise-scale projects
        </p>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/60 rounded-xl overflow-hidden transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-secondary font-semibold mt-1 text-lg">{exp.company}</p>
                      <p className="text-foreground/60 text-sm mt-1">{exp.overview}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 text-foreground/60 text-sm mt-4 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/30">
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">{exp.description}</p>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-3 py-1 bg-primary/15 text-accent text-sm rounded-full border border-accent/30 hover:bg-accent/20 hover:border-accent/60 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Projects Section */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-4 bg-primary/10 hover:bg-primary/15 rounded-lg border border-primary/30 transition-all duration-300 group/btn"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Key Projects ({exp.projects.length})</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      expandedIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Projects Grid */}
                {expandedIndex === idx && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up">
                    {exp.projects.map((project, pidx) => (
                      <div
                        key={pidx}
                        className="bg-background/40 border border-border/50 rounded-lg p-5 hover:border-accent/50 hover:bg-background/60 transition-all duration-300 hover:shadow-md hover:shadow-accent/10"
                      >
                        {/* Project Header */}
                        <div className="mb-3">
                          <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <Target className="w-4 h-4 text-accent" />
                            {project.name}
                          </h4>
                          <p className="text-sm text-foreground/60 mt-1">{project.role}</p>
                          <p className="text-xs text-secondary mt-1">{project.duration}</p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                        {/* Key Features */}
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-accent mb-2">Key Features:</p>
                          <ul className="space-y-1">
                            {project.keyFeatures.slice(0, 3).map((feature, fidx) => (
                              <li key={fidx} className="text-xs text-foreground/60 flex items-start gap-2">
                                <span className="text-accent mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                            {project.keyFeatures.length > 3 && (
                              <li className="text-xs text-accent/80">
                                +{project.keyFeatures.length - 3} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((t, tidx) => (
                            <span
                              key={tidx}
                              className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Code2, label: "Projects Led", value: "6+" },
            { icon: Users, label: "Team Mentored", value: "5+" },
            { icon: Database, label: "Platforms Built", value: "4+" },
            { icon: Target, label: "Performance Gain", value: "60%" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-lg hover:border-accent/60 transition-all duration-300"
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
