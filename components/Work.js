import Image from 'next/image';

const Work = ({ id, image, title, url }) => {
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <a href={url} target="_blank" rel="nofollow noreferrer noopener">
        <Image
          layout="responsive"
          alt="Movie Image"
          src={image}
          width={200}
          height={100}
        />
        <div className="p-2">
          <h3 className="mt-1 text-xl font-normal transform duration-100 ease-in-out group-hover:font-bold text-center">
            {title}
          </h3>
          {/* <p className="flex items-center opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type} •`}{" "}
            {result.release_date || result.first_air_date} •{" "}
            <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
          </p> */}
        </div>
      </a>
    </div>
  );
};

export default Work;
