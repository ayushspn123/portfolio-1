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
    images: ["/ayush-kumar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar | Full-Stack Developer Portfolio",
    description:
      "Portfolio showcasing Ayush Kumar's full-stack projects, research, and engineering experience.",
    images: ["/ayush-kumar.jpg"],
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
    image: `${siteUrl}/ayush-kumar.jpg`,
    sameAs: [
      "https://github.com/ayushspn123",
      "https://www.linkedin.com/in/ayushkumar-dev/",
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
        url: `${siteUrl}/#about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Experience",
        url: `${siteUrl}/#experience`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Projects",
        url: `${siteUrl}/#projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Research",
        url: `${siteUrl}/#research`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Skills",
        url: `${siteUrl}/#skills`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Achievements",
        url: `${siteUrl}/#achievements`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "Contact",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
      />
      <nav aria-label="Sitelink navigation" className="sr-only">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
