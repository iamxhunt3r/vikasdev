import Image from 'next/image'

const Work = ({ id , image, title, url }) => {
    return (
            <a 
            href={`${url}`}
            rel="nofollow noreferrer noindex noopener"
            target="_blank"
            >
            <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
                <Image 
                layout="responsive"
                alt="Movie Image"
                src={
                    `${image}` 
                }
                width="300"
                height="150" 
                />
                <div className="p-2">
                    <h3 className="mt-1 text-xl font-medium transform duration-100 ease-in-out group-hover:font-bold text-center">
                        {title}
                    </h3>
                    {/* <p className="flex items-center opacity-0 group-hover:opacity-100">
                        {result.media_type && `${result.media_type} •`}{" "}
                        {result.release_date || result.first_air_date} •{" "}
                        <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                    </p> */}
                </div>
            </div>
            </a>
    )
}

export default Work

