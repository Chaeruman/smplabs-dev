"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ScrollIndicatorProps {
  targetId?: string
  className?: string
}

export default function ScrollIndicator({ targetId, className = "" }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide indicator when scrolled down
      if (currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTarget = () => {
    if (targetId) {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <button
        onClick={scrollToTarget}
        className="group flex flex-col items-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
        </div>
        <span className="text-xs mt-2 group-hover:scale-105 transition-transform duration-300">
          {scrollDirection === 'down' ? 'Scroll ke bawah' : 'Scroll ke atas'}
        </span>
        <div className="mt-1 group-hover:translate-y-1 transition-transform duration-300">
          {scrollDirection === 'down' ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronUp className="h-4 w-4" />
          )}
        </div>
      </button>
    </div>
  )
}
