import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About TechBlog</h1>
        <p className="text-lg text-gray-500">
          Empowering developers with modern technology insights
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          TechBlog is a modern technology-focused blog dedicated to helping
          developers, students, and tech enthusiasts stay up to date with the
          latest trends in web development, programming, and emerging
          technologies. We believe learning should be practical, clear, and
          accessible to everyone.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to simplify complex technologies and provide
          easy-to-understand tutorials, guides, and real-world examples.
          Whether you are a beginner or an experienced developer, TechBlog
          aims to support your learning journey.
        </p>
      </section>

      {/* What We Cover */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What We Cover</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Web Development (HTML, CSS, JavaScript)</li>
          <li>Modern Frameworks (React, Next.js)</li>
          <li>TypeScript & Best Practices</li>
          <li>Backend & Databases (Node.js, MongoDB)</li>
          <li>AI & Emerging Technologies</li>
        </ul>
      </section>

      {/* Why TechBlog */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Why TechBlog?</h2>
        <p className="text-gray-600 leading-relaxed">
          We focus on real-world use cases rather than just theory. Our articles
          are written with clarity, hands-on examples, and best practices to
          help you build confidence and practical skills that matter in the
          real world.
        </p>
      </section>

      {/* Author */}
      <section className="bg-base-200 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">About the Author</h2>
        <p className="text-gray-600 leading-relaxed">
          Hi, I’m <span className="font-medium">Shaikh Al Nahian</span>, a
          passionate web developer and technology enthusiast. I enjoy building
          modern web applications and sharing knowledge with the developer
          community. TechBlog is my personal space to document learning,
          experiments, and insights gained from real projects.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
