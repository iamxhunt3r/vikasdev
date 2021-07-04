import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'

function Header() {
    return (
        <header className=" text-center leading-relaxed">
        <div className="flex flex-row justify-evenly">
        <p className="p-5">
            <Link href="/">
                <a>Home</a>
            </Link>
            </p>
            <p className="p-5">
                <Social />
            </p>
        </div>
        
        <div className="mt-16 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
            className="rounded-full w-40 h-40 block mx-auto shadow-soft"
            src="/me.jpeg"
            width="180"
            height="180"
            alt="Vikas Gupta"
            />
        </div>
        <h1 className="text-4xl font-extrabold mt-4 mb-4">Vikas Gupta</h1>
        </header>
    )
}

export default Header
