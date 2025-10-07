"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, Search, Tag } from "lucide-react"
import { useState } from "react"
import type { BlogPost } from "@/lib/blog"

interface BlogsClientProps {
  initialPosts: BlogPost[]
}

export default function BlogsClient({ initialPosts }: BlogsClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", ...Array.from(new Set(initialPosts.map((post) => post.category)))]

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            Blog
          </motion.h1>

          <motion.p
            className="text-xl text-[#666] mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Insights on cybersecurity, vulnerability research, secure development practices, and lessons learned from
            the field.
          </motion.p>

          {/* Search and Filter */}
          <motion.div
            className="mb-12 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#666] w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#ddd] rounded-full focus:outline-none focus:border-[#1a1a1a] transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-[#f5f5f5] text-[#666] hover:bg-[#eee]"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="group border-b border-[#eee] pb-12 last:border-b-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <Link href={`/blogs/${post.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-[#999]" />
                    <span className="text-sm text-[#999] capitalize">{post.category}</span>
                  </div>
                  <h2 className="text-3xl font-medium text-[#1a1a1a] mb-4 group-hover:text-[#666] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-[#666] mb-4 leading-relaxed">{post.excerpt}</p>
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
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#666] text-lg">No blog posts found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  )
}
