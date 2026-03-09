import { Brain, BookOpen, ExternalLink } from "lucide-react"

const publicationLink = "https://books.google.co.in/books?id=aDlcEQAAQBAJ&pg=PA170"

export function Research() {
  const focusAreas = [
    "Applied AI research for practical product use-cases",
    "Model experimentation and evaluation workflows",
    "Combining full-stack systems with intelligent features",
  ]

  return (
    <section id="research" className="section-shell bg-gradient-to-b from-background to-card/20">
      <div className="section-container">
        <h2 className="section-title">Research Journey</h2>
        <p className="section-subtitle">I recently started my AI research track with practical implementation focus.</p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="modern-card p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Current Focus</h3>
            </div>
            <ul className="space-y-3 text-foreground/75">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-card p-6 group hover:border-accent/60 transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-accent" />
              <p className="text-sm font-semibold text-accent uppercase tracking-[0.12em]">Publication</p>
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">Research Work</h3>
            <p className="mt-3 text-sm text-foreground/70">Read my research contribution published on Google Books.</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              View Publication
              <ExternalLink className="w-4 h-4" />
            </p>
            <p className="mt-5 pt-4 border-t border-border/60 text-foreground/65 text-sm">Research Track: Early Stage</p>
          </a>
        </div>
      </div>
    </section>
  )
}
