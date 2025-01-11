import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'posts')

// Make sure to declare these as named exports using 'export function'
export function getAllPosts() {
  try {
    // Create posts directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
      return [] // Return empty array if no posts exist yet
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        const readTime = readingTime(content)

        return {
          slug,
          ...data,
          date: format(new Date(data.date), 'MMMM dd, yyyy'),
          readingTime: readTime.text,
          content,
        }
      })

    return allPostsData.sort((a, b) => (new Date(b.date) - new Date(a.date)))
  } catch (error) {
    console.error('Error in getAllPosts:', error)
    return []
  }
}

export async function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()
    
    const readTime = readingTime(content)

    return {
      slug,
      contentHtml,
      readingTime: readTime.text,
      ...data,
      date: format(new Date(data.date), 'MMMM dd, yyyy'),
    }
  } catch (error) {
    console.error('Error in getPostBySlug:', error)
    return null
  }
} 