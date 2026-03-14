"use client"


import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 50, delay = 0, startWhen = true) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText("")
    setIsComplete(false)

    if (!startWhen) {
      return
    }

    let interval: ReturnType<typeof setInterval> | undefined
    const delayTimer = setTimeout(() => {
      let index = 0
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1))
          index++
          return
        }

        if (interval) {
          clearInterval(interval)
        }
        setIsComplete(true)
      }, speed)
    }, delay)

    return () => {
      clearTimeout(delayTimer)
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [text, speed, delay, startWhen])

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
    <span className="inline-flex items-baseline">
      {displayedText}
      {!isComplete && <span className="typewriter-caret" aria-hidden>|</span>}
    </span>
  )
}
