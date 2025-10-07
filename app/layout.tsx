import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vikas Gupta - Security Engineer & Full-Stack Developer",
  description:
    "Portfolio of Vikas Gupta - Security Engineer at Recorded Future specializing in vulnerability research, penetration testing, and secure web development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}
