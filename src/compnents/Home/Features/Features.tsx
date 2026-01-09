import { JSX } from "react";
import {
  FaPenNib,
  FaCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Quality Articles",
    description:
      "Well-researched, beginner-friendly, and production-ready articles on modern web technologies.",
    icon: <FaPenNib className="text-3xl text-primary" />,
  },
  {
    id: 2,
    title: "Clean Code Examples",
    description:
      "Every article includes clean, readable, and real-world code snippets you can use directly.",
    icon: <FaCode className="text-3xl text-primary" />,
  },
  {
    id: 3,
    title: "Latest Tech Trends",
    description:
      "Stay updated with the latest trends in JavaScript, TypeScript, Next.js, and AI.",
    icon: <FaRocket className="text-3xl text-primary" />,
  },
  {
    id: 4,
    title: "Practical Learning",
    description:
      "Learn by building real projects, not just theory. Perfect for developers at any level.",
    icon: <FaLightbulb className="text-3xl text-primary" />,
  },
];

const Features = (): JSX.Element => {
  return (
    <section className="my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Why Read This Blog?
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Everything you need to grow as a modern web developer,
          explained clearly and practically.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>

              <h3 className="card-title text-lg">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
