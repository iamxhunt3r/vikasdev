import { getBlogPost, getAllBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
