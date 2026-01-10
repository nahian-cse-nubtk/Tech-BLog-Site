import { JSX } from "react";
import {
  FaMicrochip,
  FaRocket,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";

interface TechReason {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const reasons: TechReason[] = [
  {
    id: 1,
    title: "Stay Ahead in Your Career",
    description:
      "Learning the latest technologies ensures you remain competitive and in demand in the tech industry.",
    icon: <FaRocket className="text-4xl text-primary" />,
  },
  {
    id: 2,
    title: "Better Problem Solving",
    description:
      "Understanding recent tools and frameworks allows you to build better solutions faster.",
    icon: <FaMicrochip className="text-4xl text-primary" />,
  },
  {
    id: 3,
    title: "Network & Collaboration",
    description:
      "Modern tech knowledge helps you collaborate effectively in team projects and open-source communities.",
    icon: <FaNetworkWired className="text-4xl text-primary" />,
  },
  {
    id: 4,
    title: "Leverage Cloud & AI",
    description:
      "Recent technologies like cloud computing and AI give you opportunities to innovate and automate.",
    icon: <FaCloud className="text-4xl text-primary" />,
  },
];

const RecentTech = (): JSX.Element => {
  return (
    <section className="my-20  py-12 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Why You Should Know About Recent Technology
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Staying updated with the latest tools, frameworks, and trends empowers developers and tech enthusiasts to build innovative solutions.
        </p>
      </div>

      {/* Reason Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div>{reason.icon}</div>
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentTech;
