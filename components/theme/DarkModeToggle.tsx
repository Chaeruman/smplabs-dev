"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 animate-pulse"></div>
    )
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  const getTooltip = () => {
    switch (theme) {
      case "light":
        return "Mode Terang"
      case "dark":
        return "Mode Gelap"
      default:
        return "Mode Terang"
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
      title={getTooltip()}
      aria-label={`Ubah ke ${getTooltip()}`}
    >
      <div className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
        {getIcon()}
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-lg bg-blue-500/20 scale-0 group-active:scale-100 transition-transform duration-150"></div>
    </button>
  )
}
