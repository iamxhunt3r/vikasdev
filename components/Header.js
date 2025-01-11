import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  
  const isActive = (path) => router.pathname === path

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight hover:text-indigo-100 transition-colors"
          >
            Vikas Gupta
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-all ${
                isActive('/') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-indigo-100 hover:text-white hover:border-b-2 hover:border-indigo-100 pb-1'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`text-lg font-medium transition-all ${
                router.pathname.includes('/blog') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-indigo-100 hover:text-white hover:border-b-2 hover:border-indigo-100 pb-1'
              }`}
            >
              Blog
            </Link>
            <a 
              href="https://github.com/iamxhunt3r/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium transition-all text-indigo-100 hover:text-white hover:border-b-2 hover:border-indigo-100 pb-1"
            >
              Github
            </a>
            <Link 
              href="https://www.linkedin.com/in/vikas-gupta-56885b131" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium transition-all text-indigo-100 hover:text-white hover:border-b-2 hover:border-indigo-100 pb-1"
            >
              Linkedin
            </Link>
            <Link 
              href="ttps://twitter.com/iamxhunt3r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium transition-all text-indigo-100 hover:text-white hover:border-b-2 hover:border-indigo-100 pb-1"
            >
              Twitter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}