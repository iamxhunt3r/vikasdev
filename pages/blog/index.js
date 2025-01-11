import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../../lib/posts'
import debounce from 'lodash/debounce'
import Header from '../../components/Header'

const POSTS_PER_PAGE = 6

export default function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [isSearching, setIsSearching] = useState(false)

  // Get unique tags from all posts
  const allTags = [...new Set(posts.flatMap(post => post.tags))]

  // Debounced search function
  const debouncedSearch = debounce((searchTerm, tag) => {
    const filtered = posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesTag = tag === '' || post.tags.includes(tag)
      return matchesSearch && matchesTag
    })
    setFilteredPosts(filtered)
    setCurrentPage(1)
    setIsSearching(false)
  }, 300)

  useEffect(() => {
    setIsSearching(true)
    debouncedSearch(searchTerm, selectedTag)
    return () => debouncedSearch.cancel()
  }, [searchTerm, selectedTag])

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        
        {/* Search and filter controls */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full p-2 pl-10 border rounded"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className={`absolute left-3 top-3 h-4 w-4 ${
                isSearching ? 'animate-spin' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <button
              className={`px-3 py-1 rounded ${
                selectedTag === '' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedTag('')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded ${
                  selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <article key={post.slug} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2">
                    {post.date} • {post.readingTime}
                  </p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No posts found matching your criteria</p>
          </div>
        )}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts: posts || [],
    },
  }
} 