"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const isDarkMode = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && true) // Default to dark
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <div>
      {children}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 shadow-lg hover:scale-110 z-50"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536a1 1 0 111.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zm2.121-10.607a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707A1 1 0 104.343 5.757l.707.707zm5.657 9.193a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707zM5 17a1 1 0 100-2H4a1 1 0 100 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
