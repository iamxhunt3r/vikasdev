import Work from '../components/Work'

function Main({projectsList}) {
    return (
        <div>
            <section className="text-center mx-8">
                <p className="p-1 font-normal text-xl">Hello, I&rsquo;m Vikas Gupta. I am Web Developer, Penetration Tester and occassional Bug Bounty Hunter.</p>
                <p className="p-1 font-normal text-xl">
                Smart worker who likes Tech, Travelling, and Music
                </p>
                <p className="p-1 font-normal text-xl">
                I’m looking forward to collaborate on Software Developement | Security Research
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

  