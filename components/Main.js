import Work from '../components/Work'

function Main({projectsList}) {
    return (
        <div>
            <section className="text-center">
                <p className="p-1 font-normal text-xl">Hello, I&rsquo;m Vikas Gupta. I am Web Developer, Penetration Tester and occassional Bug Bounty Hunter.</p>
                <p className="p-1 font-normal text-xl">
                You can contact me 
                <a 
                className="text-blue-400 pl-2 hover:text-blue-900"
                href="mailto:vikasgupta.92155@gmail.com"
                >here</a>
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

  