"use client";

import BlogPreview from "@/components/BlogPreview";
import Pagination from "@/components/Pagination";
import { BlogData } from "@/lib/data";
import { useSearchParams } from "next/navigation";

const BlogPageContent = () => {
  const searchParams = useSearchParams();

  const tags = searchParams.getAll("tag");
  const category = searchParams.get("category")?.replaceAll("_", " ");
  const query = searchParams.get("query");

  const filteredData = BlogData.filter((item) => {
    const tagsMatch = tags.length
      ? tags.every((tag) => item.tags.includes(tag))
      : true;
    const categoryMatch = category ? item.category === category : true;
    const queryMatch = query
      ? item.title.toLowerCase().includes(query.toLowerCase())
      : true;

    return tagsMatch && categoryMatch && queryMatch;
  });

  const itemsPerPage = 3;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-full">
      <div className="space-y-12">
        {paginatedData.length > 0 &&
          paginatedData.map((blog, i) => <BlogPreview key={i} {...blog} />)}
      </div>

      {filteredData.length > 0 && (
        <div className="flex justify-center w-full mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
};

export default BlogPageContent;
