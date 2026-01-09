import { JSX } from "react";

interface Category {
  id: number;
  name: string;
  count: number;
}

const categories: Category[] = [
  { id: 1, name: "Technology", count: 12 },
  { id: 2, name: "Web Development", count: 8 },
  { id: 3, name: "JavaScript", count: 10 },
  { id: 4, name: "TypeScript", count: 6 },
  { id: 5, name: "Next.js", count: 5 },
  { id: 6, name: "AI & Machine Learning", count: 4 },
];

const NewsCategory = (): JSX.Element => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-4">
        <h2 className="card-title text-lg mb-3">Categories</h2>

        <ul className="menu menu-sm">
          {categories.map((category) => (
            <li key={category.id}>
              <a className="flex justify-between">
                <span>{category.name}</span>
                <span className="badge badge-neutral badge-sm">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsCategory;
