import { Blog } from "@/type/Blog";
import Image from "next/image";
import Link from "next/link";

type BlogPostCardProps = {
  blog:Blog
};

const BlogPostCard = ({blog}: BlogPostCardProps) => {
    const {_id,image,title,readingTime}=blog
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      <figure className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>

        <p className="text-sm text-gray-500">
          ⏱ {readingTime}
        </p>

        <div className="card-actions justify-end mt-3">
          <Link href='/' className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
