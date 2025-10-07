import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: string
  published: boolean
}

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllBlogPosts(): BlogPost[] {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        content,
        date: data.date || "",
        readTime: data.readTime || "",
        category: data.category || "",
        tags: data.tags || [],
        author: data.author || "Vikas Gupta",
        published: data.published !== false,
      } as BlogPost
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      content,
      date: data.date || "",
      readTime: data.readTime || "",
      category: data.category || "",
      tags: data.tags || [],
      author: data.author || "Vikas Gupta",
      published: data.published !== false,
    } as BlogPost
  } catch (error) {
    console.error("Error reading blog post:", error)
    return null
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category)
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return getAllBlogPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
