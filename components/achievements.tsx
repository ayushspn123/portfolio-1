"use client"

import Image from "next/image"
import { ExternalLink, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Achievements() {
  const achievements = [
    {
      title: "2nd Prize Winner",
      description: "Hack The November Hackathon",
      detail: "180+ teams participated",
    },
    {
      title: "SIH Finalist 2023",
      description: "Smart India Hackathon",
      detail: "National level competition",
    },
    {
      title: "400+",
      description: "Coding Problems Solved",
      detail: "LeetCode & GeeksforGeeks",
    },
    {
      title: "Ranked 726",
      description: "CodeChef Contest",
      detail: "Out of 14,000+ participants",
    },
    {
      title: "HackRx 4.0",
      description: "Certificate of Participation",
      detail: "Unstop Platform (Aug 2023)",
    },
    {
      title: "ISRO START",
      description: "Indian Space Research Organization",
      detail: "Completed certification (Aug 2023)",
    },
    {
      title: "Research Publication",
      description: "Published Research Work",
      detail: "Available on Google Books",
      link: "https://books.google.co.in/books?hl=en&lr=lang_en&id=aDlcEQAAQBAJ&oi=fnd&pg=PA170&ots=zHutAxvrQf&sig=cgJKLn3WCtGnhkI6k014-RhKSm4&redir_esc=y#v=onepage&q&f=false",
    },
  ]

  return (
    <section id="achievements" className="section-shell">
      <div className="section-container">
        <ScrollReveal>
          <p className="kicker">[ 05 — Record ]</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognitions and milestones in my coding journey.</p>
        </ScrollReveal>

        {/* Education record */}
        <ScrollReveal delayMs={40}>
          <div className="doc-card overflow-hidden mt-12 mb-10 flex flex-col sm:flex-row">
            <div className="relative w-full aspect-[16/10] sm:aspect-[3/4] sm:w-64 shrink-0 overflow-hidden bg-muted">
              <Image
                src="/ayush-convocation.jpg"
                alt="Ayush Kumar at ABESIT Convocation 2026"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 15%" }}
                sizes="(min-width: 640px) 256px, 100vw"
              />
            </div>

            <div className="flex-1 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary mb-2 block">
                  Education
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Abes Institute of Technology</h3>
                <p className="text-sm text-foreground/60 mt-1.5">B.Tech in Information Technology · CGPA: 8.15/10</p>
                <p className="text-sm text-foreground/65 leading-relaxed mt-3 max-w-md">
                  Built a strong foundation in Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems, and
                  Computer Networks — plus hands-on project work that took me from writing my first programs to
                  shipping production full-stack applications.
                </p>
              </div>

              <div className="flex flex-row sm:flex-col sm:items-end gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground shrink-0">
                <span>2020 - 2024</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Ghaziabad, UP
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, idx) => (
            <ScrollReveal key={idx} delayMs={60 * idx}>
              <a
                href={achievement.link ?? "#"}
                target={achievement.link ? "_blank" : undefined}
                rel={achievement.link ? "noopener noreferrer" : undefined}
                className={`doc-card p-5 h-full flex flex-col ${achievement.link ? "cursor-pointer" : "cursor-default"}`}
              >
                <span className="font-mono text-[11px] text-primary mb-2">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold text-foreground mb-1">{achievement.title}</h3>
                <p className="text-secondary font-medium text-sm mb-1">{achievement.description}</p>
                <p className="text-foreground/55 text-xs">{achievement.detail}</p>
                {achievement.link ? (
                  <p className="mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-primary">
                    View Publication
                    <ExternalLink className="w-3.5 h-3.5" />
                  </p>
                ) : null}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
