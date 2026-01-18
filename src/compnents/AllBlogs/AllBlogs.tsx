import { getPost } from '@/actions/server';
import React, { JSX } from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { Blog } from '@/type/Blog';

const AllBlogs = async (): Promise<JSX.Element> => {
    const result:Blog[] = await getPost()
  return (
    <div>
        <h1 className='text-4xl font-bold py-10'> All Blogs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
            {
                result.map(blog=><BlogPostCard blog={blog} key={blog._id.toString()}></BlogPostCard>)
            }
        </div>


  </div>
  )
};

export default AllBlogs;