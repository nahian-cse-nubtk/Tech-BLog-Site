import { getPostDetails } from "@/actions/server";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const blog = await getPostDetails(id);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Blog Image */}
      <div className="mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="rounded-lg object-cover w-full h-100"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

      {/* Short Description */}
      <p className="text-gray-600 mb-4">{blog.shortDescription}</p>

      {/* Blog Meta */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
        <span>Category: {blog.categoryId}</span>
        <span>Reading time: {blog.readingTime}</span>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg">
        {blog.longDescription.split("\n").map((line: string, idx: number) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Tags:</h3>
        <div className="flex gap-2 flex-wrap">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
