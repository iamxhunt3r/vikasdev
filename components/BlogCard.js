import Image from 'next/image'

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <Image
        className="w-full h-40 object-cover mb-4 rounded-lg"
          layout="responsive"
          alt={blog.title}
          src={blog.image}
          width={200}
          height={100}
        />
      <div>
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-600">{blog.description}</p>
        <a href={blog.url} className="block mt-4 text-blue-500 hover:underline">Read more</a>
      </div>
    </div>
  );
};

export default BlogCard;