"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const searchParams = useSearchParams();

  const buildQueryString = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const getPaginationItems = (): (number | string)[] => {
    if (totalPages <= 1) return [1];

    const pages: (number | string)[] = [];
    pages.push(1);

    const start = Math.max(currentPage - 1, 2);
    const end = Math.min(currentPage + 1, totalPages - 1);

    if (start > 2) {
      pages.push("• • •");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("• • •");
    }

    pages.push(totalPages);

    return pages;
  };

  const paginationItems = getPaginationItems();

  return (
    <div className="text-white mt-4 flex gap-2 items-center">
      {currentPage > 1 && (
        <Link
          href={buildQueryString(currentPage - 1)}
          className="px-4 py-2 rounded text-primary-foreground"
        >
          <IoIosArrowBack size={20} />
        </Link>
      )}

      {paginationItems.map((item, index) => {
        if (typeof item === "number") {
          return (
            <Link
              key={index}
              href={buildQueryString(item)}
              className={`px-4 py-2 rounded ${
                item === currentPage
                  ? "bg-primary text-foreground"
                  : "text-primary-foreground"
              }`}
            >
              {item}
            </Link>
          );
        } else {
          return (
            <span key={index} className="px-4 py-2 text-primary-foreground">
              {item}
            </span>
          );
        }
      })}

      {currentPage < totalPages && (
        <Link
          href={buildQueryString(currentPage + 1)}
          className="px-4 py-2 rounded text-primary-foreground"
        >
          <IoIosArrowForward size={20} />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
