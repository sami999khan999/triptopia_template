"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./shared/Button";

// Define the form data type
interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const GetInTouch: React.FC = () => {
  // State to store form input values
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // TODO: Send formData to an API
  };

  return (
    <div className="wrapper my-[6rem] flex flex-col lg:flex-row gap-6 border-x border-primary-foreground/10 border-b shadow-sm p-6 rounded-lg">
      <div className="lg:w-1/2 text-primary-foreground space-y-5">
        <h1>Get In Touch</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-foreground px-5 py-2 rounded-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-foreground px-5 py-2 rounded-sm"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="bg-foreground px-5 py-2 rounded-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="h-[256px] bg-foreground px-5 py-2 rounded-sm"
            required
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
      <div className="relative h-[584px] lg:w-[500px]">
        <Image
          src={"/get-in-touch.png"}
          layout="fill"
          objectFit="cover"
          alt="Get In Touch"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
