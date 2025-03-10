"use client";

import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import Button from "./shared/Button";
import { LiaCommentSolid } from "react-icons/lia";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BlogType {
  id: number;
  title: string;
  image: string;
  sectionHeading: {
    title: string;
    paragraphs: string[];
  };
  sectionBody: {
    title: string;
    paragraphs: string[];
  };
  sectionFooter: {
    title: string;
    paragraphs: string[];
    images: string[];
    conclusion: string;
  };
  tags: string[];
  date: string;
  category: string;
  comments: number[];
  shares: string;
}

const BlogPreview = (blog: BlogType) => {
  const router = useRouter();

  return (
    <div>
      <div
        className="relative 2xl:h-[600px] md:h-[500px] h-[300px] rounded-t-xl overflow-hidden"
        onClick={() => router.push(`/blog/${blog.id}`)}
      >
        <Image
          src={blog.image}
          layout="fill"
          objectFit="cover"
          alt={blog.title}
        />
      </div>

      <div className="border-x border-b border-primary-foreground/10 rounded-b-xl">
        <div className="p-6">
          <h2 className="text-4xl font-semibold text-primary-foreground">
            {blog.title}
          </h2>
          <p className="line-clamp-3 text-primary-foreground/80 mt-4">
            {blog.sectionHeading.paragraphs[0]}
          </p>
        </div>
        <div className="flex justify-between px-4 border-t border-muted-foreground/30 py-2">
          <div className="flex items-center gap-5 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-1">
              <SlCalender size={15} />
              <p>{blog.date}</p>
            </div>
            <div className="flex items-center gap-1">
              <LiaCommentSolid size={20} />
              <p>{blog.comments.length} Comments</p>
            </div>
            <div className="flex items-center gap-1">
              <CiShare2 size={20} />
              <p>{blog.shares} Shares</p>
            </div>
          </div>
          <Button>
            <Link href={`/blog/${blog.id}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
