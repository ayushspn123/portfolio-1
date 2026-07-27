"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Xcelore Pvt Ltd",
      logo: "/xcelore-logo.png",
      location: "Noida, India",
      period: "Nov 2023 - Present",
      duration: "2.5+ Years",
      description:
        "Architected and developed scalable MERN stack applications with focus on performance optimization, automation, and user experience enhancement. Collaborate cross-functionally with product managers, UI/UX designers, and QA engineers in Agile cycles, and mentor 5+ junior developers on Git workflow, architecture, and code review practices.",
      highlights: [
        "Next.js",
        "React.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Kafka",
      ],
      projects: [
        {
          name: "MreKYC - Muthoot Finance",
          duration: "Ongoing",
          role: "Full-Stack Developer",
          description:
            "Engineered a scalable, microservices-based KYC user creation service for Muthoot Finance using Node.js and REST APIs — with Kafka for async event processing and Redis for caching hot lookups — handling configuration, validation, error handling, and end-to-end testing to support high-throughput, large-scale concurrent user onboarding.",
          keyFeatures: [
            "High-throughput concurrent onboarding",
            "Kafka-driven async processing",
            "Redis caching layer",
            "Request validation & error handling",
            "End-to-end API testing",
          ],
          tech: ["Node.js", "Microservices", "Kafka", "Redis", "SQL", "Docker"],
        },
        {
          name: "Log Analyzer",
          duration: "2 Months",
          role: "Frontend Developer",
          description:
            "Integrated an ML API to analyze logs stored in the database and return actionable responses. Developed a user-friendly UI allowing users to submit queries and view analyzed results in real-time.",
          keyFeatures: ["Real-time log analysis", "Query suggestions", "ML API integration"],
          tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"],
        },
        {
          name: "Vaidik Edu CMS",
          duration: "Feb - Present",
          role: "Full-Stack Developer",
          description:
            "Led modernization of Vaidik Edu CMS, migrating from Ant Design to Material UI and upgrading to latest React.js. Implemented role-based access for admins, students, and teachers.",
          keyFeatures: ["Role-based access control", "Dynamic course management", "60% page load time reduction"],
          tech: ["React.js", "Node.js", "MongoDB", "Material UI"],
        },
        {
          name: "Vaidik HRMS",
          duration: "Feb - Present",
          role: "Full-Stack Developer",
          description:
            "Owned product customization and configuration for HR.Vaidik, a full-featured HR platform built from scratch and taken through UAT to production, now actively used by 18+ professionals in daily operations — including Zoho and HubSpot integrations for CRM-linked employee and lead workflows.",
          keyFeatures: [
            "Productivity calendar & task logging",
            "Attendance & leave management",
            "Zoho & HubSpot integrations",
            "18+ professionals in daily use",
          ],
          tech: ["React.js", "Node.js", "MongoDB", "Material UI", "Zoho", "HubSpot"],
        },
        {
          name: "Xcelorate",
          duration: "May - Present",
          role: "Full-Stack Developer (Project Lead)",
          description:
            "Led development of robust full-stack MERN application with four integrated panels — Reimbursement, CAMS, Attendance, and Admin.",
          keyFeatures: ["Automated expense management", "Reimbursement workflow", "Interactive data visualizations"],
          tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
        },
        {
          name: "Pythag",
          duration: "March - April",
          role: "Full-Stack Developer",
          description:
            "Resolved critical issues across real-time dashboards, live meters, and analytics modules during UAT and post-release hypercare support.",
          keyFeatures: ["Real-time dashboards", "Data pipeline optimization", "ML API integration"],
          tech: ["React.js", "Node.js", "MongoDB", "Ant Design"],
        },
        {
          name: "Vaidik TimeBack Admin",
          duration: "Feb - Present",
          role: "Full-Stack Developer",
          description:
            "Developed dynamic question generation platform for creating custom quizzes, with an interactive design panel for admins.",
          keyFeatures: ["Dynamic quiz generation", "Bulk question generation", "Real-time scoring & progress"],
          tech: ["React.js", "Node.js", "MongoDB", "Material UI"],
        },
      ],
    },
    {
      title: "Software Researcher",
      company: "Indian Institute of Remote Sensing (IIRS), ISRO",
      logo: "/isro-logo.png",
      location: "Remote, India",
      period: "Jul 2023 - Aug 2023",
      duration: "2 Months",
      description:
        "Conducted research on remote sensing technologies and space applications. Developed proof-of-concept solutions with focus on scalable architecture and responsive UI design.",
      highlights: ["Research", "POC Development", "Architecture Design"],
      projects: [
        {
          name: "ISRO Remote Sensing Research",
          duration: "2 Months",
          role: "Research Intern",
          description:
            "Participated in ISRO's remote sensing research initiatives with focus on developing scalable solutions and responsive user interfaces for space technology applications.",
          keyFeatures: ["Research & Development", "POC Development", "Responsive UI"],
          tech: ["Research Tools", "System Design"],
        },
      ],
    },
  ]

  const stats = [
    { label: "Projects Shipped", value: "6+" },
    { label: "Team Members", value: "5+" },
    { label: "Platforms Built", value: "4+" },
    { label: "Performance Gain", value: "90%" },
  ]

  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <ScrollReveal direction="up">
          <p className="kicker">[ 02 — Work History ]</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Building production-grade products and exploring applied research.</p>
        </ScrollReveal>

        {/* Stats strip */}
        <div className="flex flex-wrap divide-x divide-border border-t border-b border-border mt-10 mb-16">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delayMs={70 * i} className="px-6 py-4 first:pl-0">
              <p className="text-2xl font-semibold text-foreground">{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Records */}
        <div className="space-y-14">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delayMs={100 * idx}>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10">
                <span className="index-num text-6xl sm:text-7xl font-semibold leading-none shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="border-t border-border pt-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 shrink-0 border border-border bg-white flex items-center justify-center p-2">
                        <div className="relative h-full w-full">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                          <span className="text-secondary font-semibold text-sm">{exp.company}</span>
                          <span className="hidden sm:inline text-foreground/25">·</span>
                          <span className="flex items-center gap-1 text-foreground/55 text-xs font-mono">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0 font-mono text-xs text-muted-foreground">
                      <span>{exp.period}</span>
                      <span className="text-primary">{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/65 leading-relaxed mb-5 max-w-3xl">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.highlights.map((skill, sidx) => (
                      <span key={sidx} className="doc-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:opacity-75 transition-opacity"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`}
                    />
                    {openIdx === idx ? "Hide Projects" : `View ${exp.projects.length} Projects`}
                  </button>

                  {openIdx === idx && (
                    <div className="mt-5 grid sm:grid-cols-2 gap-4">
                      {exp.projects.map((p, pidx) => (
                        <ScrollReveal key={pidx} delayMs={70 * pidx}>
                          <div className="doc-card p-4 h-full">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h4 className="text-sm font-semibold text-foreground">{p.name}</h4>
                              <span className="shrink-0 font-mono text-[10px] uppercase text-secondary">{p.duration}</span>
                            </div>
                            <p className="text-xs text-primary font-mono mb-2">{p.role}</p>
                            <p className="text-xs text-foreground/60 leading-relaxed mb-3">{p.description}</p>
                            <ul className="space-y-1 mb-3">
                              {p.keyFeatures.map((f, fi) => (
                                <li key={fi} className="text-xs text-foreground/60 flex items-start gap-1.5">
                                  <span className="text-primary mt-0.5 shrink-0">›</span>
                                  {f}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5">
                              {p.tech.map((t, ti) => (
                                <span key={ti} className="doc-tag text-[10px]">
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
    </section>
  )
}
