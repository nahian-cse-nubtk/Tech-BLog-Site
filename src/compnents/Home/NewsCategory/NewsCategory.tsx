import Image from "next/image";
import { JSX } from "react";

interface Category {
  id: number;
  title: string;
  slug: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Technology",
    slug: "technology",
    image:
      "https://img.freepik.com/free-vector/technology-background-with-circuit-board-design_1017-25538.jpg",
    count: 12,
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    image:
      "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    count: 8,
  },
  {
    id: 3,
    title: "JavaScript",
    slug: "javascript",
    image:
      "https://img.freepik.com/free-vector/javascript-abstract-concept-illustration_335657-3702.jpg",
    count: 10,
  },
  {
    id: 4,
    title: "TypeScript",
    slug: "typescript",
    image:
      "https://img.freepik.com/free-vector/programming-concept-illustration_114360-2512.jpg",
    count: 6,
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    slug: "ai-ml",
    image:
      "https://img.freepik.com/free-vector/artificial-intelligence-technology-background_52683-17407.jpg",
    count: 5,
  },
];

const NewsCategory = (): JSX.Element => {
  return (
    <section className="my-14">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center">Browse Categories</h2>
        <p className="text-xl text-gray-500 text-center">
          Explore articles by topic
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <figure className="relative h-40">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </figure>

            {/* Content */}
            <div className="card-body p-4">
              <h3 className="card-title text-base">
                {category.title}
              </h3>

              <p className="text-sm text-gray-500">
                {category.count} Articles
              </p>

              <div className="card-actions justify-end mt-2">
                <a
                  href={`/category/${category.slug}`}
                  className="btn btn-sm btn-outline"
                >
                  View Posts
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCategory;
