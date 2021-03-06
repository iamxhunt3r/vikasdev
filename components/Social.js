import Image from 'next/image'
import Link from 'next/link'

function Social() {
    return (
        <div>
            <span className="pl-2">
            <Link href="https://privacyisfreedom.blogspot.com/">
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
            <Link href="https://github.com/iamxhunt3r/">
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
            <Link href="https://www.linkedin.com/in/vikas-gupta-56885b131/">
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
            <Link href="https://twitter.com/iamxhunt3r">
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
            <Link href="mailto:vikasgupta.92155@gmail.com">
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
    )
}

export default Social
