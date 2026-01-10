import { getPost } from '@/actions/server';
import BlogPostCard from '@/compnents/BlogPostCard/BlogPostCard';
import { Blog } from '@/type/Blog';
import React from 'react';
import { JSX } from 'react';

const RecentBlogs = async():Promise<JSX.Element>  => {
    const result:Blog[] =await getPost(6);
    return (
        <div>
            <h2 className=" text-center text-3xl font-bold">
          Recent Blogs
        </h2>
        <p className="mt-3 text-center text-gray-500  ">
          Explore the recent news
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
            {
                result.map(blog=><BlogPostCard blog={blog} key={blog._id.toString()}></BlogPostCard>)
            }
        </div>

        </div>
    );
};

export default RecentBlogs;