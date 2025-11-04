"use client"

import { ExternalLink, Github, Star } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Heart Sync",
      description:
        "Secure real-time chat platform for couples with end-to-end encryption and privacy features. Enables couples to communicate safely with message history, status updates, and relationship insights.",
      tags: ["TypeScript", "React", "Node.js", "WebSocket"],
      highlights: "Secure Chat Platform",
      link: "https://github.com/ayushspn123/heart-sync-client",
      gradient: "from-red-500 to-pink-400",
      featured: true,
    },
    {
      title: "Socket Chat App",
      description:
        "Scalable real-time messaging application using Socket.io. Supports multiple rooms, user authentication, and message history with persistent storage.",
      tags: ["Socket.io", "React", "Node.js", "MongoDB"],
      highlights: "Real-time Chat",
      link: "https://github.com/ayushspn123/socket",
      gradient: "from-blue-500 to-cyan-400",
      featured: true,
    },
    {
      title: "Question Builder",
      description:
        "Interactive quiz creation and management platform. Allows users to build custom quizzes with various question types and track student performance.",
      tags: ["HTML", "JavaScript", "CSS"],
      highlights: "Quiz Platform",
      link: "https://github.com/ayushspn123/question-Builder",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Game Nest",
      description:
        "Gaming platform featuring multiple mini-games with leaderboards and user profiles. Built with modern web technologies for smooth gameplay.",
      tags: ["React", "JavaScript", "Firebase"],
      highlights: "Gaming Platform",
      link: "https://github.com/ayushspn123/game-Nest",
      gradient: "from-yellow-500 to-orange-400",
      featured: true,
    },
    {
      title: "Cooller",
      description:
        "Temperature monitoring and analysis application. Provides real-time weather data, historical trends, and weather alerts with beautiful visualizations.",
      tags: ["TypeScript", "React", "API Integration"],
      highlights: "Weather App",
      link: "https://github.com/ayushspn123/cooller",
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      title: "Weather Summary",
      description:
        "Comprehensive weather tracking application with real-time forecasts, historical data analysis, and location-based weather alerts for multiple cities.",
      tags: ["JavaScript", "Weather API", "React"],
      highlights: "Weather Tracking",
      link: "#",
      gradient: "from-sky-500 to-cyan-400",
    },
    {
      title: "Speed Booster Extension",
      description:
        "Chrome extension that optimizes browser performance and speeds up web page loading. Includes caching optimization and resource minification.",
      tags: ["HTML", "JavaScript", "Chrome API"],
      highlights: "Browser Extension",
      link: "https://github.com/ayushspn123/speed_booster-extensions",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Fake News Detector",
      description:
        "Machine learning powered model measuring news article accuracy with 89% precision. Provides automated mechanism for media companies to verify authenticity.",
      tags: ["Next.js", "TypeScript", "Machine Learning", "Flask"],
      highlights: "89% Accuracy - ML Model",
      link: "#",
      gradient: "from-yellow-500 to-orange-400",
      featured: true,
    },
    {
      title: "APNA MARKET",
      description:
        "Award-winning online grocery platform. Includes admin panel for management, user authentication, and real-time inventory tracking system.",
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Material UI"],
      highlights: "2nd Prize - Hackathon Winner",
      link: "#",
      gradient: "from-green-500 to-emerald-400",
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-foreground/60 max-w-2xl mx-auto text-lg">
            Showcase of impactful projects built with modern technologies, scalability, and best practices
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/10 to-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-foreground/70 text-sm mb-4 leading-relaxed relative z-10 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tags.map((tag, tidx) => (
                  <span
                    key={tidx}
                    className="px-2.5 py-1 bg-accent/15 text-accent text-xs rounded-lg border border-accent/30 font-medium hover:bg-accent/25 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm font-semibold text-secondary">{project.highlights}</span>
                <ExternalLink className="w-5 h-5 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* All Projects */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card/40 border border-border/30 hover:border-accent/50 rounded-lg p-5 transition-all duration-300 hover:bg-card/80 hover:shadow-md hover:shadow-accent/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h4>
                  <Github className="w-4 h-4 text-accent flex-shrink-0 ml-2" />
                </div>
                <p className="text-foreground/60 text-xs mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 text-foreground/50 text-xs">+{project.tags.length - 2}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All on GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ayushspn123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
