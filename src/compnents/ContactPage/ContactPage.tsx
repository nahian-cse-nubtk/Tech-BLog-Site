"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Later: send to backend / email service
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-500">
          Have a question, suggestion, or collaboration idea? Let’s talk.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Whether you want to ask a question, report an issue, or discuss a
            project, feel free to reach out. I’ll try my best to respond as
            quickly as possible.
          </p>

          <div className="space-y-3 text-gray-600">
            <p>
              📧 Email:{" "}
              <span className="font-medium">
                sheikhalnahian@gmail.com
              </span>
            </p>
            <p>🌍 Location: Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-base-200 p-6 rounded-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
