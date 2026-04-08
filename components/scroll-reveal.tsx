"use client"

import { useEffect, useRef, useState } from "react"

type RevealDirection = "up" | "left" | "right"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
  direction?: RevealDirection
}

export function ScrollReveal({ children, className = "", delayMs = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = ref.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
