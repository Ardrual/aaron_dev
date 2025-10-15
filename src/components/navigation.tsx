"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Aaron
        </Link>
        <div className="flex gap-6">
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
