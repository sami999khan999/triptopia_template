import PageHeader from "@/components/PageHeader";
import Button from "@/components/shared/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <PageHeader />
      <div className="wrapper mt-[6rem] flex flex-col gap-8 items-center justify-center">
        <div className="relative w-[90%] h-[300px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[450px] xl:w-[700px] xl:h-[550px] 2xl:w-[777px] 2xl:h-[650px]">
          <Image
            src="/not-found.png"
            objectFit="cover"
            layout="fill"
            alt="Not Found"
          />
        </div>

        <div className="flex flex-col items-center text-primary-foreground gap-5 text-center">
          <h2 className="lg:text-5xl text-3xl font-semibold">
            {`${"Sorry, we can't find that page"}`}
          </h2>
          <div className="space-y-3 flex flex-col items-center">
            <p className="text-sm text-primary-foreground/80">
              You may have mistyped the address or the page may have moved.
            </p>
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 rounded-sm px-8">
              <Link href={"/"}>Go To Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
