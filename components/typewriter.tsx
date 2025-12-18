"use client"


import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText("")
    setIsComplete(false)
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        let index = 0
        const interval = setInterval(() => {
          if (index < text.length) {
            setDisplayedText(text.substring(0, index + 1))
            index++
          } else {
            clearInterval(interval)
            setIsComplete(true)
          }
        }, speed)
        return () => clearInterval(interval)
      }, delay)
      return () => clearTimeout(delayTimer)
    } else {
      let index = 0
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }
  }, [text, speed, delay])

  return { displayedText, isComplete }
}

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
}

export function Typewriter({ text, speed = 50, delay = 0 }: TypewriterProps) {
  const { displayedText, isComplete } = useTypewriter(text, speed, delay)
  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}
