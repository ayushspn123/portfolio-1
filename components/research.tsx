import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const publicationLink = "https://books.google.co.in/books?id=aDlcEQAAQBAJ&pg=PA170"

export function Research() {
  const focusAreas = [
    "Applied AI research for practical product use-cases",
    "Model experimentation and evaluation workflows",
    "Combining full-stack systems with intelligent features",
  ]

  return (
    <section id="research" className="section-shell">
      <div className="section-container">
        <ScrollReveal>
          <p className="kicker">[ 06 — Research ]</p>
          <h2 className="section-title">Research Journey</h2>
          <p className="section-subtitle">I recently started my AI research track with practical implementation focus.</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-5 mt-12">
          <ScrollReveal className="lg:col-span-2">
            <div className="doc-card p-6 h-full">
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary">Current Focus</span>
              <ul className="mt-4 space-y-3 text-foreground/75">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-0.5 font-mono">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={70}>
            <a
              href={publicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-card group p-6 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">Publication</span>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Research Work
              </h3>
              <p className="mt-2 text-sm text-foreground/65 flex-grow">
                Read my research contribution published on Google Books.
              </p>
              <p className="mt-5 pt-4 border-t border-border text-foreground/55 text-xs font-mono uppercase tracking-widest">
                Track: Early Stage
              </p>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
