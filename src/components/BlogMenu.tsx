"use client";

import { BlogCategory, BlogData, blogTagsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Button from "./shared/Button";

const BlogMenu = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="lg:w-[45%] space-y-6">
        <BlogSearch />
        <BlogCategories />
        <RecentNews />
        <BlogTags />
        <div className="relative h-[380px] w-full">
          <Image src={"/blog.png"} objectFit="cover" layout="fill" alt="Blog" />
        </div>
        <NewsLetter />
      </div>
    </Suspense>
  );
};

export default BlogMenu;

const BlogSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim() === "") return;
    params.set("query", query);
    params.delete("page");

    router.push(`/blog/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex h-12">
      <input
        type="text"
        placeholder="Search"
        className="bg-foreground w-full px-3 rounded-l-md active:outline-1 pl-5 outline-primary-foreground/10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        size="icon"
        className="rounded-l-none h-full px-3"
        onClick={handleSearch}
      >
        <CiSearch size={25} />
      </Button>
    </div>
  );
};

const BlogCategories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category")?.replaceAll("_", " ");

  const handleAddCategory = (tagName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategory === tagName) {
      params.delete("category");
      params.delete("page");
    } else {
      params.set("category", tagName.replaceAll(" ", "_"));
      params.delete("page");
    }

    router.push(`/blog/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Category</h1>
      <div className="space-y-1 flex flex-col w-fit">
        {BlogCategory.map((tag, i) => (
          <Button
            variant={"link"}
            key={i}
            className={cn(
              "text-lg text-primary-foreground justify-start py-1 px-2",
              {
                "bg-primary/10": selectedCategory === tag.name,
              }
            )}
            onClick={() => handleAddCategory(tag.name)}
          >
            {tag.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

const RecentNews = () => {
  const router = useRouter();
  const latestNewsData = [BlogData[2], BlogData[6], BlogData[12]];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Recent News</h1>
      <div className="space-y-6">
        {latestNewsData.map((news, i) => (
          <>
            <div className="flex gap-4" key={i}>
              <div
                className="relative w-[80px] aspect-square overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => router.push(`/blog/${news.id}`)}
              >
                <Image
                  src={news.image}
                  layout="fill"
                  objectFit="cover"
                  alt={news.title}
                />
              </div>
              <div className="space-y-1">
                <h3
                  className="text-lg font-semibold text-primary-foreground line-clamp-2 leading-tight cursor-pointer"
                  onClick={() => router.push(`/blog/${news.id}`)}
                >
                  {news.title}
                </h3>
                <p className="text-primary-foreground/50 font-medium mt-2">
                  {news.date}
                </p>
              </div>
            </div>
            <div
              className={cn({
                "border-b border-primary-foreground/10":
                  i < latestNewsData.length - 1,
              })}
            ></div>
          </>
        ))}
      </div>
    </div>
  );
};

const BlogTags = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedTags = searchParams.getAll("tag");

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams);

    if (selectedTags.includes(tag)) {
      params.delete("tag", tag);
      params.delete("page");
    } else {
      params.append("tag", tag);
      params.delete("page");
    }

    router.push(`/blog/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Tags</h1>
      <div className="flex flex-wrap gap-4 text-lg">
        {blogTagsData.map((tag, i) => (
          <div
            key={i}
            className={`py-2 px-4 rounded-md cursor-pointer transition-colors ${
              selectedTags.includes(tag)
                ? "bg-primary/20"
                : "bg-muted-foreground/10"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div className="space-y-4 w-full">
      <h1 className="text-2xl">News Letter</h1>

      <input
        type="text"
        placeholder="Enter Your Email Here"
        className="w-full border-2 border-primary-foreground/10 px-5 py-2 rounded-md"
      />

      <Button className="bg-primary-foreground w-full hover:bg-primary-foreground/90">
        Subscribe
      </Button>
    </div>
  );
};
