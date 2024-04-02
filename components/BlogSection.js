import React from 'react';
import BlogCard from './Blogcard';

const BlogSection = ({ blogsList }) => {
  return (
    <section className="py-12 px-4 lg:px-0">
      <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {blogsList.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
