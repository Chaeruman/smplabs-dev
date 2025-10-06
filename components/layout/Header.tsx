"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { DarkModeToggle } from "@/components/theme/DarkModeToggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()
  const pathname = usePathname()

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
    { href: "/spp", label: "SPP"},
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl shadow-blue-100/20 dark:shadow-gray-900/30 border-b border-white/20 dark:border-gray-700/30" 
          : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg shadow-blue-100/10 dark:shadow-gray-900/20"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 hover:scale-105 transition-all duration-300 ease-out min-w-0 flex-shrink-0"
            onMouseEnter={() => setHoveredItem('logo')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative flex-shrink-0">
              <Image
                src="/logo-smp-labschool.png"
                alt="SMP Labschool Jakarta"
                width={28}
                height={28}
                className="rounded-full w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-blue-200/50 dark:group-hover:shadow-blue-400/30"
              />
              {hoveredItem === 'logo' && (
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              )}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-xs xs:text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 leading-tight">
                <span className="hidden xs:inline">SMP </span>
                <span className="xs:hidden">SMP</span>
                <span className="block xs:inline">Labschool</span>
                {hoveredItem === 'logo' && (
                  <Sparkles className="inline-block ml-1 h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-yellow-500 animate-pulse" />
                )}
              </span>
              <span className="text-[10px] xs:text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 leading-tight">
                Jakarta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <div key={item.href} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div 
                        className={`flex items-center space-x-1 font-medium transition-all duration-300 cursor-pointer py-2 text-sm lg:text-base relative group-hover:scale-105 ${
                          isActive 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        }`}
                        onMouseEnter={() => setHoveredItem(item.href)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-all duration-300 ${
                            isAboutDropdownOpen ? "rotate-180 scale-110" : "group-hover:scale-110"
                          }`}
                        />
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        )}
                        {/* Hover indicator */}
                        <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 rounded-full ${
                          hoveredItem === item.href ? "w-full" : "w-0"
                        }`}></div>
                      </div>

                    {/* Dropdown Menu */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-56 animate-in slide-in-from-top-2 duration-300">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl shadow-2xl shadow-blue-100/20 dark:shadow-gray-900/30 border border-white/20 dark:border-gray-700/30 py-3 overflow-hidden">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <button
                              key={dropdownItem.href}
                              onClick={() => handleDropdownClick(dropdownItem.href, dropdownItem.section)}
                              className="group block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-600/80 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-sm relative overflow-hidden"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <span className="relative z-10">{dropdownItem.label}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-all duration-300 relative group py-2 text-sm lg:text-base group-hover:scale-105 ${
                      isActive 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    )}
                    {/* Hover indicator */}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 rounded-full ${
                      hoveredItem === item.href ? "w-full" : "w-0"
                    }`}></div>
                  </Link>
                )}
              </div>
            )
            })}
            <DarkModeToggle />
            <a
              href="https://satupemuda.smplabschooljakarta.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 hover:scale-105"
            >
              <span className="relative z-10">SATUPEMUDA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <DarkModeToggle />
            <button
              className="group p-1.5 sm:p-2 rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:scale-110" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 sm:top-16 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-blue-100/20 dark:shadow-gray-900/30 border-t border-white/20 dark:border-gray-700/30 animate-in slide-in-from-top-2 duration-300">
            <div className="py-3 sm:py-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <div key={item.href} style={{ animationDelay: `${index * 100}ms` }}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className={`flex items-center justify-between w-full px-4 py-3 transition-all duration-300 text-sm sm:text-base group ${
                            isActive 
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20" 
                              : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-600/80 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                          onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-all duration-300 group-hover:scale-110 ${
                              isAboutDropdownOpen ? "rotate-180 scale-110" : ""
                            }`}
                          />
                        </button>
                        {isAboutDropdownOpen && (
                          <div className="pl-4 space-y-1 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-gray-800/50 dark:to-gray-700/50 animate-in slide-in-from-top-1 duration-200">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                              <button
                                key={dropdownItem.href}
                                onClick={() => {
                                  handleDropdownClick(dropdownItem.href, dropdownItem.section)
                                  setIsMenuOpen(false)
                                  setIsAboutDropdownOpen(false)
                                }}
                                className="group block w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-600/80 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative overflow-hidden"
                                style={{ animationDelay: `${dropdownIndex * 50}ms` }}
                              >
                                <span className="relative z-10">{dropdownItem.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 transition-all duration-300 text-sm sm:text-base group relative overflow-hidden ${
                          isActive 
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20" 
                            : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-600/80 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                      </Link>
                    )}
                  </div>
                )
              })}
              <div className="px-4 pt-2">
                <a
                  href="https://satupemuda.smplabschooljakarta.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs sm:text-sm px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 hover:scale-105 block text-center"
                >
                  <span className="relative z-10">SATUPEMUDA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
