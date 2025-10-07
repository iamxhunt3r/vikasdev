import { getAllBlogPosts } from "@/lib/blog"
import BlogsClient from "./blogs-client"

export default function BlogsPage() {
  const posts = getAllBlogPosts()

  return <BlogsClient initialPosts={posts} />
}
