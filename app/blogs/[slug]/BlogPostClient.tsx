"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, Twitter, Linkedin, Copy } from "lucide-react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Highlight, themes } from "prism-react-renderer"

export default function BlogPostClient({ post }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-[#fefefe]">
      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#666] hover:text-[#1a1a1a] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-[#999]" />
              <span className="text-sm text-[#999] capitalize">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-6 text-sm text-[#999]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <span>By {post.author}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-[#666]">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
                >
                  <Twitter className="w-4 h-4 text-[#666]" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#666]" />
                </a>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-full hover:bg-[#f5f5f5] transition-colors relative"
                >
                  <Copy className="w-4 h-4 text-[#666]" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#f5f5f5] text-[#666] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <ReactMarkdown
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  const code = String(children).replace(/\n$/, "")

                  if (inline || !match) {
                    return (
                      <code className="bg-[#f5f5f5] px-2 py-1 rounded text-sm" {...props}>
                        {children}
                      </code>
                    )
                  }

                  return (
                    <Highlight code={code} language={match[1] as any} theme={themes.dracula}>
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={`${className} rounded-lg overflow-x-auto`} style={style}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  )
                },
                h1: ({ children }) => (
                  <h1 className="text-3xl font-medium text-[#1a1a1a] mt-12 mb-6 first:mt-0">{children}</h1>
                ),
                h2: ({ children }) => <h2 className="text-2xl font-medium text-[#1a1a1a] mt-10 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-medium text-[#1a1a1a] mt-8 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-[#666] leading-relaxed mb-6">{children}</p>,
                ul: ({ children }) => <ul className="text-[#666] mb-6 pl-6 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="text-[#666] mb-6 pl-6 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="list-disc">{children}</li>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-[#1a1a1a] underline hover:text-[#666] transition-colors"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#ddd] pl-6 italic text-[#666] my-6">{children}</blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-[#eee]"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Written by {post.author}</h3>
                <p className="text-[#666]">Security Engineer & Full-Stack Developer</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/vikas-gupta-56885b131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#666]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[#ddd] hover:bg-[#f5f5f5] transition-colors"
                >
                  <Twitter className="w-5 h-5 text-[#666]" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
