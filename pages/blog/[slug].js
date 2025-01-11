import { useRouter } from 'next/router'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Header from '../../components/Header'

export default function BlogPost({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${params.slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  
  const { data, content } = matter(fileContents)
  const htmlContent = marked(content)

  return {
    props: {
      post: {
        slug: params.slug,
        title: data.title,
        date: data.date,
        content: htmlContent,
        heroImage: data.heroImage || '/default-hero.webp'
      },
    },
  }
} 