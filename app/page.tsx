import type { Metadata } from "next"
import Link from "next/link"
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
  title: "Full-Stack Developer Portfolio",
  description:
    "Ayush Kumar's full-stack developer portfolio featuring production-ready projects, research work, technical skills, achievements, and contact details.",
  keywords: [
    "Ayush Kumar",
    "Ayush Kumar developer",
    "full-stack developer portfolio",
    "MERN stack developer",
    "software engineer portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayush Kumar | Full-Stack Developer Portfolio",
    description:
      "Explore projects, research, skills, and achievements by Ayush Kumar, a full-stack developer focused on scalable and user-first web products.",
    url: siteUrl,
    type: "website",
    images: ["/placeholder.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar | Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing Ayush Kumar's full-stack projects, research, and engineering experience.",
    images: ["/placeholder.jpg"],
  },
}

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Kumar",
    url: siteUrl,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer focused on scalable web applications, clean architecture, and impactful product experiences.",
    image: `${siteUrl}/placeholder-user.jpg`,
    sameAs: [
      "https://github.com/ayushspn123",
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ayush Kumar Portfolio",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Ayush Kumar | Full-Stack Developer Portfolio",
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: "Ayush Kumar",
    },
  }

  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "About",
        url: `${siteUrl}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Experience",
        url: `${siteUrl}/experience`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Projects",
        url: `${siteUrl}/projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Research",
        url: `${siteUrl}/research`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Skills",
        url: `${siteUrl}/skills`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Hire Me",
        url: `${siteUrl}/hire-me`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
      />
      <nav aria-label="Sitelink navigation" className="sr-only">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/research">Research</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/hire-me">Hire Me</Link>
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
