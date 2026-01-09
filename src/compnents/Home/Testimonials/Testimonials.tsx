import Image from "next/image";
import { JSX } from "react";
interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arafat Hossain",
    role: "Frontend Developer",
    message:
      "This blog explains complex topics in a very simple way. The real-world examples helped me a lot in my projects.",
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-man-smiling_23-2149137084.jpg",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "CS Student",
    message:
      "I finally understood TypeScript and Next.js properly after reading the articles here. Highly recommended!",
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-woman-smiling_23-2149137086.jpg",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    role: "Software Engineer",
    message:
      "Clean code, clear explanations, and up-to-date content. This blog is a must-read for modern developers.",
    avatar:
      "https://img.freepik.com/free-photo/portrait-young-man-smiling_23-2149137082.jpg",
  },
];

const Testimonials = ():JSX.Element  => {
  return (
    <section className="my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          What Readers Say
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Feedback from developers and learners who read our blog regularly.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="card-body">
              {/* Message */}
              <p className="text-sm text-gray-600 italic">
                “{item.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-6">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
