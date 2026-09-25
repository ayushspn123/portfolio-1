import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

export const metadata: Metadata = {
  title: "Ayush Kumar | Software Developer & Full-Stack Engineer",
  description:
    "Official portfolio of Ayush Kumar — Full-Stack Software Developer & Software Engineer with 2.5+ years experience building production apps, React/Next.js platforms, Node.js APIs, and applied AI projects.",
  keywords: [
    "Ayush Kumar",
    "Ayush Kumar developer",
    "Ayush Kumar software developer",
    "Ayush Kumar software engineer",
    "Ayush Kumar portfolio",
    "developer",
    "software developer",
    "full stack developer",
    "software engineer",
    "full stack software engineer",
    "web developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "ayushspn123",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ayush Kumar | Software Developer & Full-Stack Engineer",
    description:
      "Explore projects, research, technical skills, and experience of Ayush Kumar — Full-Stack Software Developer specializing in scalable web & mobile apps.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "/ayush-kumar.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar — Full-Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar | Software Developer & Full-Stack Engineer",
    description:
      "Portfolio showcasing Ayush Kumar's full-stack software development, MERN projects, and applied AI research.",
    images: ["/ayush-kumar.jpg"],
  },
}

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Kumar",
    alternateName: [
      "Ayush Kumar Developer",
      "Ayush Kumar Software Developer",
      "Ayush Kumar Software Engineer",
      "Ayush Kumar Full Stack Developer",
      "ayushspn123",
    ],
    url: siteUrl,
    jobTitle: "Full-Stack Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Xcelore Pvt Ltd",
    },
    description:
      "Ayush Kumar is a Full-Stack Software Developer specializing in building scalable web applications, microservices, Next.js/React platforms, and applied AI solutions.",
    image: `${siteUrl}/ayush-kumar.jpg`,
    sameAs: [
      "https://github.com/ayushspn123",
      "https://www.linkedin.com/in/ayushkumar-dev/",
    ],
    knowsAbout: [
      "Software Development",
      "Full-Stack Web Development",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Python",
      "MERN Stack",
      "MongoDB",
      "Docker",
      "REST APIs",
      "Microservices",
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ayush Kumar - Software Developer Portfolio",
    alternateName: [
      "Ayush Kumar Portfolio",
      "Ayush Kumar Developer Website",
      "Ayush Kumar Software Engineer",
    ],
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "About Ayush Kumar",
        item: `${siteUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Software Developer Experience",
        item: `${siteUrl}/#experience`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Featured Projects",
        item: `${siteUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "AI Research",
        item: `${siteUrl}/#research`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Skills & Toolbox",
        item: `${siteUrl}/#skills`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Achievements",
        item: `${siteUrl}/#achievements`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Contact Developer",
        item: `${siteUrl}/#contact`,
      },
    ],
  }

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Ayush Kumar | Software Developer & Full-Stack Engineer Portfolio",
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: "Ayush Kumar",
      jobTitle: "Software Developer",
    },
  }

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Sitelinks",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "About Developer",
        description: "Overview of Ayush Kumar's background as a full-stack developer.",
        url: `${siteUrl}/#about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Work Experience",
        description: "Software developer role at Xcelore Pvt Ltd and key client projects.",
        url: `${siteUrl}/#experience`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Projects",
        description: "Docorio, Alpha UI, Comment Kro, and production applications built by Ayush Kumar.",
        url: `${siteUrl}/#projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "AI Research",
        description: "Applied AI research and practical machine learning experiments.",
        url: `${siteUrl}/#research`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Technical Skills",
        description: "Full-stack developer tech stack: React, Next.js, Node.js, TypeScript, Python, Docker.",
        url: `${siteUrl}/#skills`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Achievements",
        description: "Hackathon wins, open-source contributions, and engineering milestones.",
        url: `${siteUrl}/#achievements`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "Contact Ayush Kumar",
        description: "Get in touch for software developer roles, project inquiries, or collaborations.",
        url: `${siteUrl}/#contact`,
      },
    ],
  }

  return (
    <main className="relative bg-transparent text-foreground overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
      />
      <nav aria-label="Sitelink navigation" className="sr-only">
        <ul>
          <li>
            <a href="#about">About Developer</a>
          </li>
          <li>
            <a href="#experience">Software Developer Experience</a>
          </li>
          <li>
            <a href="#projects">Software Projects</a>
          </li>
          <li>
            <a href="#research">AI Research</a>
          </li>
          <li>
            <a href="#skills">Developer Skills &amp; Stack</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact Ayush Kumar</a>
          </li>
        </ul>
      </nav>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

