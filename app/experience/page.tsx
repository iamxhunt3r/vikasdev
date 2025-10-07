"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Security Engineer",
    company: "Recorded Future",
    location: "Remote",
    duration: "May 2023 – Present",
    description: [
      "Spearheaded the development and automation of internal tools for vulnerability rule creation, significantly enhancing the speed, accuracy, and scalability of threat detection workflows, including Attack Surface Intelligence (ASI) initiatives.",
      "Conducted deep research on newly disclosed CVEs to analyze root causes, affected products, exploitation methods, and mitigation techniques, supporting proactive ASI and threat monitoring efforts.",
      "Architected detection capabilities for critical vulnerabilities and technology fingerprints using customized YAML signatures, NMAP NSE scripts, and protocol-specific banner analysis.",
      "Innovated novel techniques to identify and detect CVEs by leveraging metadata, behavioral patterns, and environmental signals, enabling effective detection without reliance solely on detailed technical disclosures.",
      "Maintained a comprehensive vulnerability intelligence collection system monitoring multiple sources for early identification of emerging threats.",
      "Collaborated cross-functionally with threat intelligence analysts, vulnerability researchers teams to ensure cohesive threat understanding and response strategies.",
    ],
    technologies: ["Python", "YAML", "NMAP", "Docker", "CI/CD", "Vulnerability Research"],
  },
  {
    id: 2,
    title: "Freelance Security Researcher",
    company: "Inspectiv",
    location: "Remote",
    duration: "July 2019 – July 2023",
    description: [
      "Conducted part-time vulnerability research and penetration testing across web, API and mobile applications.",
      "Reported over 700+ unique security vulnerabilities, including issues from the OWASP Top 10.",
      "Performed targeted penetration tests for private organizations, helping improve their overall security posture.",
      "Utilized tools like Burp Suite, Nmap, OWASP ZAP, and custom scripts to identify complex bugs.",
      "Collaborated with development and security teams to validate findings and support secure code practices.",
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "Penetration Testing", "Web Security"],
  },
  {
    id: 3,
    title: "Marketing Web Developer",
    company: "SecurityTrails",
    location: "Remote",
    duration: "May 2021 – May 2023",
    description: [
      "Worked on the development of multiple landing pages on the core website and HubSpot landing pages using Markdown, HTML, JS, etc.",
      "Developed Chrome Browser Extension for Cyber Security Marketing.",
      "Worked on scripting for microservices and blog posts for Marketing.",
      "Worked on Bgpview.io website using Laravel, etc.",
      "Worked on core website to improve CLS, LCP for google page speed score.",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Laravel", "HubSpot", "Chrome Extensions"],
  },
  {
    id: 4,
    title: "Software Developer",
    company: "Xlpat Labs",
    location: "India",
    duration: "July 2019 – April 2021",
    description: [
      "Worked on the development of several user interface(s) using Bootstrap, Semantic UI as a HTML design framework and JavaScript, jQuery and Angular JS.",
      "Worked on the implementation of several patent searching algorithm using PHP, Python, MongoDB, MySQL and ElasticSearch.",
      "Worked on the deployment and maintenance of different production/development server and ensuring all servers and their services were running.",
      "Worked on setting up server and proxies during COVID for WFH.",
      "Led a team of interns and fresh employees.",
    ],
    technologies: ["PHP", "Python", "MongoDB", "MySQL", "ElasticSearch", "Angular JS"],
  },
  {
    id: 5,
    title: "Software Engineer Intern",
    company: "Xlpat Labs",
    location: "India",
    duration: "January 2019 – June 2019",
    description: [
      "Designed customizable dashboards and Integrated third-party libraries and API(s).",
      "Developed Chrome extensions to automate manual tasks.",
      "Worked on backend algorithm to export data in different formats such as XLSX, CSV, PDF etc.",
    ],
    technologies: ["JavaScript", "Chrome Extensions", "API Integration", "Data Export"],
  },
]

const achievements = [
  {
    title: "CVE-2023-3479",
    description: "Reflected XSS in HestiaCP",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2023-3479",
  },
  {
    title: "Hall of Fame",
    description: "Received mentions and rewards from top companies for reporting security vulnerabilities",
  },
  {
    title: "Top Bug Bounty Performer",
    description: "Admired from Inspectiv as top bug bounty performer on their platform",
  },
  {
    title: "Employee of the Quarter",
    description: "Received the Employee of the Quarter award in Xlpat Labs on 8th May 2020",
  },
  {
    title: "Cyber Security Convention",
    description: "Invited to fully sponsored Cyber Security Convention by Govt. of India (July 2020)",
  },
  {
    title: "CTF Competitions",
    description: "3rd place in CyberTalents CTF (2018), 1st place in Thapar University CTF (2017)",
  },
]

export default function ExperiencePage() {
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
            Experience
          </motion.h1>

          <motion.p
            className="text-xl text-[#666] mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My professional journey spanning cybersecurity, full-stack development, and vulnerability research across
            various organizations.
          </motion.p>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="border-l-2 border-[#eee] pl-8 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="absolute w-4 h-4 bg-[#1a1a1a] rounded-full -left-2 top-2"></div>

                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-[#1a1a1a] mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-[#666] mb-4">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-[#666] leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-[#666] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#f5f5f5] text-[#666] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-12">Achievements & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-[#f9f9f9] rounded-2xl hover:bg-[#f5f5f5] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                >
                  <h3 className="text-lg font-medium text-[#1a1a1a] mb-2 flex items-center gap-2">
                    {achievement.title}
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#666] hover:text-[#1a1a1a] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-[#666] text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
