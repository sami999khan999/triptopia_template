"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PageHeader = () => {
  const path = usePathname();

  const segments = path.split("/").filter(Boolean);

  let pathName;

  if (segments.length > 1) {
    pathName = segments[0] + " " + "details";
  } else {
    pathName = segments[0];
  }

  return (
    <div>
      <div className="h-[50vh] relative">
        <Image
          src={"/page-header.png"}
          layout="fill"
          objectFit="cover"
          alt="Page Header"
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-3 text-foreground/80 capitalize">
          <p className="text-foreground text-5xl">{pathName}</p>
          <div className="flex text-lg gap-2">
            <Link href={"/"}>Home</Link>
            <p className="text-primary">•</p>
            <p className="text-primary cursor-pointer">{pathName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
