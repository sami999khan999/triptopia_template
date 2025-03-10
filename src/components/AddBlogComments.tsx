"use client";

import { useState } from "react";

const AddBlogComment = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic to send data to API or state management
  };

  return (
    <div className="text-primary-foreground/90">
      <p className="text-2xl md:text-4xl font-semibold text-primary-foreground">
        Leave A Comment
      </p>

      <div className="mt-6">
        <p>
          Sign in to post your comment or signup if you don&apos;t have an
          account.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-primary-foreground/10 rounded-lg p-3 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-primary-foreground/10 rounded-lg p-3 w-full"
            required
          />
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
            className="border-2 border-primary-foreground/10 rounded-lg p-3 w-full h-[150px]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary-foreground text-foreground px-7 py-2 rounded-sm hover:bg-primary-foreground/90 transition"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogComment;
