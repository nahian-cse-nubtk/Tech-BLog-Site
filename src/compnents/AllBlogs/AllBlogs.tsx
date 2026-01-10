import { getPost } from '@/actions/server';
import React, { JSX } from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { Blog } from '@/type/Blog';

const AllBlogs = async (): Promise<JSX.Element> => {
    const result:Blog[] = await getPost()
  return (
    <div>
        <h1 className='text-4xl font-bold '> All Blogs: {result.length}</h1>
        <div>
            {
                result.map(blog=><BlogPostCard blog={blog} key={blog._id.toString()}></BlogPostCard>)
            }
        </div>


  </div>
  )
};

export default AllBlogs;