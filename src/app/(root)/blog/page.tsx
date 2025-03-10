import BlogPageContent from "@/components/BlogPageContent";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageContent />
    </Suspense>
  );
};

export default Page;
