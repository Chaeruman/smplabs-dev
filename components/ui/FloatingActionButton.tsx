"use client"

import { useState, useEffect } from "react"
import { ChevronUp, MessageCircle, Phone, Mail } from "lucide-react"

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      <div className={`absolute bottom-16 right-0 mb-2 space-y-2 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <a
          href="tel:+622147123456"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
          title="Telepon"
        >
          <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
        </a>
        <a
          href="mailto:info@smplabschooljakarta.sch.id"
          className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 group"
          title="Email"
        >
          <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
        </a>
        <a
          href="https://wa.me/6281234567890"
          className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 group"
          title="WhatsApp"
        >
          <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => {
          if (isExpanded) {
            scrollToTop()
          } else {
            setIsExpanded(!isExpanded)
          }
        }}
        className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isExpanded ? 'rotate-45' : ''
        }`}
        title={isExpanded ? "Kembali ke atas" : "Kontak & Bantuan"}
      >
        <ChevronUp className={`h-6 w-6 transition-transform duration-300 ${
          isExpanded ? 'rotate-180' : ''
        }`} />
      </button>
    </div>
  )
}

export default FloatingActionButton
