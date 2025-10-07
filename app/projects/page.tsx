"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Vulnerability Detection Automation",
    description:
      "Developed internal tools for automated vulnerability rule creation at Recorded Future, enhancing threat detection workflows and Attack Surface Intelligence capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "YAML", "NMAP NSE", "Docker", "CI/CD"],
    github: "#",
    live: "#",
    category: "Security",
  },
  {
    id: 2,
    title: "CVE Research & Analysis",
    description:
      "Conducted deep research on newly disclosed CVEs, analyzing root causes, exploitation methods, and developing detection signatures for critical vulnerabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "YAML", "Vulnerability Research", "Threat Intelligence"],
    github: "#",
    live: "https://nvd.nist.gov/vuln/detail/CVE-2023-3479",
    category: "Research",
  },
  {
    id: 3,
    title: "SecurityTrails Marketing Platform",
    description:
      "Developed multiple landing pages and Chrome browser extension for cybersecurity marketing, improving page speed scores and user experience.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "HTML/CSS", "HubSpot", "Chrome Extension API"],
    github: "#",
    live: "#",
    category: "Web Development",
  },
  {
    id: 4,
    title: "BGPView.io Network Intelligence",
    description:
      "Worked on BGPView.io website development using Laravel, providing network intelligence and BGP routing information to security professionals.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Laravel", "PHP", "MySQL", "Network Intelligence"],
    github: "#",
    live: "https://bgpview.io",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Patent Search Algorithm",
    description:
      "Implemented advanced patent searching algorithms using ElasticSearch, MongoDB, and Python for Xlpat Labs, improving search accuracy and performance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "ElasticSearch", "MongoDB", "PHP", "Algorithm Design"],
    github: "#",
    live: "#",
    category: "Algorithm",
  },
  {
    id: 6,
    title: "Bug Bounty Research",
    description:
      "Reported 700+ unique security vulnerabilities across web, API, and mobile applications through freelance security research on various platforms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Burp Suite", "OWASP ZAP", "Penetration Testing", "Web Security"],
    github: "#",
    live: "#",
    category: "Security",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <main className="container mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projects
          </motion.h1>

          <motion.p
            className="text-xl text-[#666] mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of security research, vulnerability discoveries, and full-stack development projects spanning
            cybersecurity and web development.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-medium text-[#1a1a1a] mb-3">{project.title}</h3>
                <p className="text-[#666] mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#f5f5f5] text-[#666] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#666] hover:text-[#1a1a1a] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#666] hover:text-[#1a1a1a] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
