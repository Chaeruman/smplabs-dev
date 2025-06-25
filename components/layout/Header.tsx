"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Beranda" },
    {
      href: "/tentang",
      label: "Tentang",
      hasDropdown: true,
      dropdownItems: [
        { href: "/tentang", label: "Tentang Sekolah" },
        { href: "/tentang#visi", label: "Visi", section: "visi" },
        { href: "/tentang#misi", label: "Misi", section: "misi" },
      ],
    },
    { href: "/galeri", label: "Galeri" },
    { href: "/kegiatan", label: "Kegiatan" },
    { href: "/ekstrakurikuler", label: "Ekstrakurikuler" },
    { href: "/kontak", label: "Kontak" },
  ]

  const handleDropdownClick = (href: string, section?: string) => {
    setIsAboutDropdownOpen(false)

    if (section) {
      // If we're already on the tentang page, just scroll to section
      if (window.location.pathname === "/tentang") {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        // Navigate to tentang page first, then scroll to section
        router.push("/tentang")
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(section)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    } else {
      // Regular navigation
      router.push(href)
    }
  }

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsAboutDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false)
    }, 150) // 150ms delay before hiding
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-100/50" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-smp-labschool.png"
              alt="SMP Labschool Jakarta"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-blue-600 text-lg">SMP Labschool</span>
              <span className="text-xs text-gray-600">Jakarta</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200 cursor-pointer py-2">
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    {/* Dropdown Menu */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1 w-48">
                        <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-blue-100 py-2 overflow-hidden">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <button
                              key={dropdownItem.href}
                              onClick={() => handleDropdownClick(dropdownItem.href, dropdownItem.section)}
                              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200 relative group py-2"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/kontak" className="btn-primary">
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-blue-100">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isAboutDropdownOpen && (
                        <div className="pl-4 space-y-1 bg-gray-50/50">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.href}
                              onClick={() => {
                                handleDropdownClick(dropdownItem.href, dropdownItem.section)
                                setIsMenuOpen(false)
                                setIsAboutDropdownOpen(false)
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-colors"
                            >
                              {dropdownItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-2">
                <Link href="/kontak" className="btn-primary block text-center">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
