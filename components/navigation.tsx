"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navItems = [
    { href: "/", label: "home" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/blogs", label: "blogs" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#fefefe]/80 backdrop-blur-sm border-b border-[#eee]/50"
    >
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-[#1a1a1a] hover:text-[#666] transition-colors">
          Vikas Gupta
        </Link>

        <div className="flex items-center gap-8">
          {isMounted && navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors relative ${
                pathname === item.href ? "text-[#1a1a1a]" : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#1a1a1a]"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}