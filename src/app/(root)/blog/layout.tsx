import BlogMenu from "@/components/BlogMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper flex flex-col lg:flex-row justify-between mt-[5rem] gap-16">
      {children}
      <BlogMenu />
    </div>
  );
};

export default layout;
