import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <header className=" text-center leading-relaxed">
        <div className="flex flex-row justify-evenly">
            <div className="flex p-5">
                <Link id="link" href="/">Home</Link>
            </div>
            <div className="flex p-5">
                <span className="pl-2">
                <Link legacyBehavior href="https://privacyisfreedom.blogspot.com/">
                    <a
                    rel="nofollow noreferrer noindex noopener"
                    target="_blank"
                    >
                        <Image
                        alt="blogger"
                        src="/icons/blogger.svg"
                        height="30"
                        width="30"
                        />
                    </a>
                </Link>
                </span>
                <span className="pl-2">
                <Link legacyBehavior href="https://github.com/iamxhunt3r/">
                    <a
                    rel="nofollow noreferrer noindex noopener"
                    target="_blank"
                    >
                        <Image
                        alt="github"
                        src="/icons/github.svg"
                        height="30"
                        width="30"
                        />
                    </a>
                </Link>
                </span>
                <span className="pl-2">
                <Link legacyBehavior href="https://www.linkedin.com/in/vikas-gupta-56885b131/">
                    <a 
                    rel="nofollow noreferrer noindex noopener"
                    target="_blank"
                    >
                        <Image
                        alt="linkedin"
                        src="/icons/linkedin.svg"
                        height="30"
                        width="30"
                        />
                    </a>
                </Link>
                </span>
                <span className="pl-2">
                <Link legacyBehavior href="https://twitter.com/iamxhunt3r">
                    <a
                    rel="nofollow noreferrer noindex noopener"
                    target="_blank"
                    >
                        <Image
                        alt="twitter"
                        src="/icons/twitter.svg"
                        height="30"
                        width="30"
                        />
                    </a>
                </Link>
                </span>
                <span className="pl-2">
                <Link legacyBehavior href="mailto:vikasgupta.92155@gmail.com">
                    <a>
                        <Image
                        alt="gmail"
                        src="/icons/gmail.svg"
                        height="30"
                        width="30"
                        />
                    </a>
                </Link>
                </span>
            </div>
        </div>
        
        </header>
    )
}

export default Header
