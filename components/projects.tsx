"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel"

type Project = {
  title: string
  description: string
  tags: string[]
  highlights: string
  link: string
  featured?: boolean
  image?: string
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Docorio",
      description:
        "Full-stack document platform trusted by 100+ users, offering 40+ tools (PDF merge, split, compress, convert, OCR, eSign, AI document chat) with sub-1s processing speeds. Core tools run entirely client-side so files never leave the user's device, while AI-powered tools stream through server pipelines deployed on AWS with S3 for object storage and Docker-based processing workers.",
      tags: ["Next.js", "TypeScript", "Node.js", "Python", "AWS S3", "Docker"],
      highlights: "100+ Users - Document Platform",
      link: "https://docorio.app",
      image: "/projects/docorio.png",
      featured: true,
    },
    {
      title: "Alpha UI",
      description:
        "Production-ready component library with 80+ components, adopted by 500+ engineering teams. Includes 200+ interactive Storybook stories with copy-ready code and full prop documentation for fast onboarding.",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Storybook"],
      highlights: "500+ Teams - Component Library",
      link: "https://alphaui.dev",
      image: "/projects/alpha-ui.png",
      featured: true,
    },
    {
      title: "Comment Kro",
      description:
        "Instagram automation platform that auto-replies to comments, DMs, and story interactions with AI-powered, keyword-triggered messaging — converting engagement into leads in under a second, 24/7. Meta API compliant and Meta Verified, with Digio, HyperVerge, and PennyDrop integrated for identity and bank-account verification, used by creators and businesses across 20+ countries.",
      tags: ["Instagram API", "AI Automation", "Meta API",'WebHooks'],
      highlights: "20+ Countries - Instagram Automation SaaS",
      link: "https://www.commentkro.in/",
      image: "/projects/comment-kro.png",
      featured: true,
    },
    {
      title: "Heart Sync",
      description:
        "Secure real-time chat platform for couples with end-to-end encryption and privacy features. Enables couples to communicate safely with message history, status updates, and relationship insights.",
      tags: ["TypeScript", "React", "Node.js", "WebSocket"],
      highlights: "Secure Chat Platform",
      link: "https://github.com/ayushspn123/heart-sync-client",
    },
    {
      title: "Fake News Detector",
      description:
        "Machine learning powered model measuring news article accuracy with 89% precision. Provides automated mechanism for media companies to verify authenticity.",
      tags: ["Next.js", "TypeScript", "Machine Learning", "Flask"],
      highlights: "89% Accuracy - ML Model",
      link: "#",
    },
    {
      title: "Socket Chat App",
      description:
        "Scalable real-time messaging application using Socket.io. Supports multiple rooms, user authentication, and message history with persistent storage.",
      tags: ["Socket.io", "React", "Node.js", "MongoDB"],
      highlights: "Real-time Chat",
      link: "https://github.com/ayushspn123/socket",
    },
    {
      title: "Question Builder",
      description:
        "Interactive quiz creation and management platform. Allows users to build custom quizzes with various question types and track student performance.",
      tags: ["HTML", "JavaScript", "CSS"],
      highlights: "Quiz Platform",
      link: "https://github.com/ayushspn123/question-Builder",
    },
    {
      title: "Game Nest",
      description:
        "Gaming platform featuring multiple mini-games with leaderboards and user profiles. Built with modern web technologies for smooth gameplay.",
      tags: ["React", "JavaScript", "Firebase"],
      highlights: "Gaming Platform",
      link: "https://github.com/ayushspn123/game-Nest",
    },
    {
      title: "Cooller",
      description:
        "Temperature monitoring and analysis application. Provides real-time weather data, historical trends, and weather alerts with beautiful visualizations.",
      tags: ["TypeScript", "React", "API Integration"],
      highlights: "Weather App",
      link: "https://github.com/ayushspn123/cooller",
    },
    {
      title: "Weather Summary",
      description:
        "Comprehensive weather tracking application with real-time forecasts, historical data analysis, and location-based weather alerts for multiple cities.",
      tags: ["JavaScript", "Weather API", "React"],
      highlights: "Weather Tracking",
      link: "#",
    },
    {
      title: "Speed Booster Extension",
      description:
        "Chrome extension that optimizes browser performance and speeds up web page loading. Includes caching optimization and resource minification.",
      tags: ["HTML", "JavaScript", "Chrome API"],
      highlights: "Browser Extension",
      link: "https://github.com/ayushspn123/speed_booster-extensions",
    },
    {
      title: "APNA MARKET",
      description:
        "Award-winning online grocery platform. Includes admin panel for management, user authentication, and real-time inventory tracking system.",
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Material UI"],
      highlights: "2nd Prize - Hackathon Winner",
      link: "#",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const restProjects = projects.filter((p) => !p.featured)

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const goPrev = () => {
    api?.scrollPrev()
    autoplay.current.reset()
  }

  const goNext = () => {
    api?.scrollNext()
    autoplay.current.reset()
  }

  return (
    <section id="projects" className="section-shell">
      <div className="section-container max-w-7xl">
        <ScrollReveal>
          <p className="kicker">[ 03 — Selected Work ]</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            {featuredProjects.length} featured builds, {projects.length} shipped in total — MERN + Next core stack.
          </p>
        </ScrollReveal>

        {/* Featured Projects Carousel */}
        <ScrollReveal delayMs={60}>
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[autoplay.current]}
            className="mt-12 mb-6"
          >
            <CarouselContent className="-ml-0">
              {featuredProjects.map((project, idx) => (
                <CarouselItem key={project.title} className="pl-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-card group relative block aspect-[16/10] sm:aspect-[21/9] overflow-hidden"
                  >
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          priority={idx === 0}
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="100vw"
                        />

                        {/* Base label, visible by default */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent p-6 pt-20 transition-opacity duration-300 group-hover:opacity-0">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                            Featured / {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1">{project.title}</h3>
                        </div>

                        {/* Hover detail panel */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-black/88 p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            Featured / {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1 mb-3">{project.title}</h3>
                          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl mb-4 line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-1 border border-white/25 text-white/85"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between border-t border-white/20 pt-4">
                            <span className="text-sm font-semibold text-secondary">{project.highlights}</span>
                            <span className="font-mono text-xs uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
                              Explore
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 paper-grain">
                        <div className="flex items-start justify-between">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            Featured / {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="index-num text-6xl sm:text-7xl font-semibold leading-none">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">{project.title}</h3>
                          <p className="text-foreground/65 text-sm sm:text-base leading-relaxed max-w-2xl mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.tags.map((tag) => (
                              <span key={tag} className="doc-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between border-t border-border pt-4">
                            <span className="text-sm font-semibold text-secondary">{project.highlights}</span>
                            <span className="font-mono text-xs uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
                              Explore
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress hairline */}
          <div className="h-px bg-border relative">
            <div
              className="h-px bg-primary absolute left-0 top-0 transition-all duration-300"
              style={{ width: `${((current + 1) / featuredProjects.length) * 100}%` }}
            />
          </div>

          {/* Custom controls */}
          <div className="flex items-center justify-between mt-5 mb-16">
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous project"
                className="p-2.5 border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next project"
                className="p-2.5 border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <span className="font-mono text-xs text-muted-foreground">
              {String(current + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
            </span>
          </div>
        </ScrollReveal>

        {/* Index of remaining projects */}
        <ScrollReveal>
          <p className="kicker mb-2">[ Index ]</p>
          <h3 className="text-2xl font-semibold text-foreground mb-6">More Builds</h3>
        </ScrollReveal>

        <div className="border-t border-border">
          {restProjects.map((project, idx) => (
            <ScrollReveal key={project.title} delayMs={40 * idx}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 border-b border-border hover:bg-card transition-colors px-2 -mx-2"
              >
                <span className="index-num text-2xl font-semibold w-10 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </h4>
                    <Github className="w-3.5 h-3.5 text-foreground/35 shrink-0" />
                  </div>
                  <p className="text-xs text-foreground/55 truncate mt-0.5">{project.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="doc-tag text-[10px] hidden sm:inline-flex">
                      {tag}
                    </span>
                  ))}
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12" delayMs={140}>
          <a
            href="https://github.com/ayushspn123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary hover:border-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
