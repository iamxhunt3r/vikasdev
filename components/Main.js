import Work from '../components/Work'
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


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
                <p className="p-1 font-normal text-xl">Greetings, I&rsquo;m a Security Engineer, Software Developer</p>
                <p className="p-1 font-normal text-xl">
                I&apos;m a savvy professional who&apos;s passionate about technology, traveling, and music.
                </p>
                <p className="p-1 font-normal text-xl">
                I&apos;m eager to engage in collaborations focused on software development and security research.<br/> Let&apos;s connect and create something great together!
                </p>
            </section>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a 
                    href='https://www.linkedin.com/in/vikas-gupta-56885b131' 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <FaLinkedinIn />
                </a>
                <a 
                    href='https://github.com/iamxhunt3r/' 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <FaGithub />
                </a>
                <a 
                    href='https://twitter.com/iamxhunt3r' 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <FaTwitter />
                </a>
                <a 
                    href='mailto:vikasgupta.92155@gmail.com'
                    aria-label="Email Me"
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <AiOutlineMail />
                </a>
            </div>
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

  