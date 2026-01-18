"use client";


import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface CreateBlogForm {
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  categoryId: number;
  tags: string;
  readingTime: string;
  isFeatured: boolean;
  authorEmail: string;
  createdAt?: string;
}

const CreateBlogPage = () => {
    const router = useRouter()
  const [formData, setFormData] = useState<CreateBlogForm>({
    title: "",
    shortDescription: "",
    longDescription: "",
    image: "",
    categoryId: 1,
    tags: "",
    readingTime: "",
    isFeatured: false,
    authorEmail: "sheikhalnahian@gmail.com",

  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : name === "categoryId"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),

    };



    const res = await fetch('/api/posts',{
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
        },
        body: JSON.stringify(finalData)
    })
    const response = await res.json()
    if(response.insertedId){
        toast('blog creation Successfull')
        router.push('/')
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          className="input input-bordered w-full"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="shortDescription"
          placeholder="Short Description"
          className="textarea textarea-bordered w-full"
          value={formData.shortDescription}
          onChange={handleChange}
          required
        />

        <textarea
          name="longDescription"
          placeholder="Long Description"
          className="textarea textarea-bordered w-full min-h-37.5"
          value={formData.longDescription}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="categoryId"
          placeholder="Category ID"
          className="input input-bordered w-full"
          value={formData.categoryId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="input input-bordered w-full"
          value={formData.tags}
          onChange={handleChange}
        />

        <input
          type="text"
          name="readingTime"
          placeholder="Reading Time (e.g. 6 min read)"
          className="input input-bordered w-full"
          value={formData.readingTime}
          onChange={handleChange}
          required
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFeatured"
            className="checkbox"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          <label className="label-text">Featured Post</label>
        </div>

        <input
          type="email"
          name="authorEmail"
          className="input input-bordered w-full"
          value={formData.authorEmail}
          readOnly
        />



        <button type="submit" className="btn btn-primary w-full">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
