import Work from '../components/Work'
import Image from 'next/image';


function Main({projectsList}) {
    return (
        <div>
            <section className="text-center mx-8">
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
                <p className="p-1 font-normal text-xl">Greetings, I&rsquo;m Vikas Gupta, a Security Engineer, Software Developer</p>
                <p className="p-1 font-normal text-xl">
                I&apos;m a savvy professional who&apos;s passionate about technology, traveling, and music.
                </p>
                <p className="p-1 font-normal text-xl">
                I&apos;m eager to engage in collaborations focused on software development and security research.<br/> Let&apos;s connect and create something great together!
                </p>
            </section>
            <h1 className="mt-12 mb-4 text-3xl font-bold text-center">Work</h1>
            <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                {projectsList.map(projectsList => (
                    <Work key={projectsList.id} {...projectsList} />
                ))}
            </div>
        </div>
    )
}

export default Main

  