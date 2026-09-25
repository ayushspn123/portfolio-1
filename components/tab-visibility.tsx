"use client"

import { useEffect, useState } from "react"

const sectionTitles: Record<string, string> = {
  about: "Ayush Kumar | Full-Stack Software Developer Portfolio",
  experience: "Experience | Ayush Kumar - Software Developer",
  projects: "Projects | Ayush Kumar - Full-Stack Developer",
  research: "AI Research | Ayush Kumar - Software Engineer",
  skills: "Technical Skills | Ayush Kumar - Software Developer",
  achievements: "Achievements | Ayush Kumar - Software Engineer",
  contact: "Contact | Ayush Kumar - Software Developer",
}

export function TabVisibility() {
  const [activeSection, setActiveSection] = useState<string>("about")
  const [isTabHidden, setIsTabHidden] = useState<boolean>(false)

  // Handle Tab Visibility Change (switched to another tab or minimized)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsTabHidden(true)
        document.title = "👋 Come back! | Ayush Kumar - Software Developer"
      } else {
        setIsTabHidden(false)
        const currentTitle = sectionTitles[activeSection] || sectionTitles["about"]
        document.title = currentTitle
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [activeSection])

  // Active section observer for dynamic scroll tab updates
  useEffect(() => {
    const sectionIds = Object.keys(sectionTitles)
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          const id = entry.target.id
          setActiveSection(id)
          if (!document.hidden) {
            document.title = sectionTitles[id] || sectionTitles["about"]
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0.25, 0.5, 0.75],
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
