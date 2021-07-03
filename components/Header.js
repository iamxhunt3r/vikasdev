import Image from 'next/image'

function Header() {
    return (
        <header className=" text-center leading-relaxed">
        <div className="mt-16">
            <Image
            className="rounded-full w-40 h-40 block mx-auto shadow-soft"
            src="https://avatars.githubusercontent.com/u/17361847"
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
