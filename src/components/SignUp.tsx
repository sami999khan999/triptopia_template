"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./shared/Button";

const SignUp = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here, you can send `formData` to an API
  };

  return (
    <div className="wrapper mt-[6rem] flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="relative lg:w-[570px] w-full h-[467px]">
        <Image
          src={"/signup.png"}
          layout="fill"
          objectFit="cover"
          alt="Sign Up"
        />
      </div>
      <div className="lg:w-1/2 text-primary-foreground space-y-6">
        <div className="space-y-3">
          <h1>Register Yourself</h1>
          <p className="text-lg text-primary-foreground/80">
            Please Sign Up here
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="border-none bg-foreground w-full px-4 py-3 rounded-sm focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="border-none bg-foreground w-full px-4 py-3 rounded-sm focus:outline-none"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="border-none bg-foreground w-full px-4 py-3 rounded-sm focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full text-lg mt-5">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
