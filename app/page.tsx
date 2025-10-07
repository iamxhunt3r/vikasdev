"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Globe, Shield, Code, Bug, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-light text-[#1a1a1a] mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="font-medium">Vikas</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#666] mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Security Engineer, Full-Stack Developer, and Bug Bounty Hunter specializing in vulnerability research, penetration testing, and
            building secure applications. Previously worked at Recorded Future, currently securing the world and co-founder at a stealth company.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full hover:bg-[#333] transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blogs"
              className="group flex items-center gap-2 border border-[#ddd] text-[#1a1a1a] px-8 py-4 rounded-full hover:bg-[#f5f5f5] transition-all duration-300 hover:scale-105"
            >
              Read Blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://github.com/vikasgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-[#666]" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-gupta-56885b131/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-[#666]" />
            </a>
            <a
              href="http://x.com/iamxhunt3r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-[#666]" />
            </a>
            <a
              href="https://vikasdev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-all duration-300 hover:scale-110"
            >
              <Globe className="w-5 h-5 text-[#666]" />
            </a>
            <a
              href="mailto:vikasgupta.92155@gmail.com"
              className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 text-[#666]" />
            </a>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center p-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] transition-colors">
              <Shield className="w-8 h-8 text-[#666] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Security Research</h3>
              <p className="text-[#666] text-sm">700+ vulnerabilities reported, CVE discoveries, penetration testing</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] transition-colors">
              <Code className="w-8 h-8 text-[#666] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Full-Stack Development</h3>
              <p className="text-[#666] text-sm">JavaScript, Python, PHP, Next.js, Laravel, and modern frameworks</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] transition-colors">
              <Bug className="w-8 h-8 text-[#666] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Automation & Tools</h3>
              <p className="text-[#666] text-sm">CI/CD, Docker, vulnerability management, custom security tools</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-[#666] leading-relaxed mb-6">
                I'm a Security Engineer at Recorded Future with a passion for finding and fixing vulnerabilities. With
                over 5 years of experience in cybersecurity and full-stack development, I've reported 700+ security
                vulnerabilities and earned recognition from top companies.
              </p>
              <p className="text-lg text-[#666] leading-relaxed mb-6">
                My expertise spans from vulnerability research and penetration testing to building secure web
                applications. I hold a BE in Software Engineering from Thapar Institute and have been recognized with
                CVE discoveries and industry awards.
              </p>
              <p className="text-lg text-[#666] leading-relaxed">
                When I'm not hunting bugs or coding, you can find me contributing to security communities like OWASP
                Chandigarh and attending conferences like DefCon and BSides.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Penetration Testing",
                  "Vulnerability Research",
                  "JavaScript",
                  "Python",
                  "PHP",
                  "Next.js",
                  "Laravel",
                  "Docker",
                  "CI/CD",
                  "OWASP Top 10",
                  "Burp Suite",
                  "NMAP",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#f5f5f5] text-[#666] rounded-full text-sm hover:bg-[#eee] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Education</h3>
              <div className="bg-[#f9f9f9] p-4 rounded-lg">
                <h4 className="font-medium text-[#1a1a1a]">Thapar Institute of Engineering and Technology</h4>
                <p className="text-[#666] text-sm">BE in Software Engineering (2015-2019)</p>
                <p className="text-[#666] text-sm">CGPA: 7.80/10.00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
