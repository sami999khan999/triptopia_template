import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Button from "./shared/Button";
import Logo from "./shared/Logo";

const Footer = () => {
  const posts = Array(6).fill("/posts.png");
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Offer Section */}
      <div className="bg-secondary wrapper mx-4 lg:mx-auto py-8 lg:py-0 rounded-3xl relative top-[9rem] lg:top-[7rem]">
        <div className="relative h-[241px]">
          <Image
            src={"/footer-img.png"}
            objectFit="cover"
            layout="fill"
            alt="Footer Image"
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between h-full 2xl:px-14 text-foreground gap-8 md:gap-20 z-40">
            <div className="space-y-4 w-full">
              <p className="text-3xl md:text-5xl font-semibold text-center lg:text-left">
                Get our pro offers
              </p>
              <p className="w-full max-w-[26rem] text-foreground/70 text-center lg:text-left">
                Create a visual identity for your company, and an overall
                branding that stands out.
              </p>
            </div>
            <div className="bg-foreground p-3 rounded-sm w-full flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-primary-foreground w-full lg:pl-8 pl-2 outline-none"
              />
              <Button className="bg-primary-foreground">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary-foreground/5 pt-[12rem] lg:pt-[10rem] pb-[4rem]">
        <div className="wrapper flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <Logo />
            <p className="w-full max-w-[20rem] text-primary-foreground text-lg">
              {`Hello, we are Lift Media. Our goal is to
translate the positive effects from
revolutionizing`}
            </p>
            <div className="text-primary-foreground flex gap-2 w-full justify-center lg:justify-start">
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <FaFacebookF size={19} />
              </Link>
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn size={19} />
              </Link>
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <AiFillInstagram size={19} />
              </Link>
              <Link
                href={"/"}
                className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
              >
                <FaYoutube size={19} />
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl text-primary-foreground font-bold tracking-wide">
              About
            </h2>
            <div className="text-[16px] flex flex-col items-center lg:items-start text-primary-foreground tracking-wide space-y-3 font-medium mt-4 cursor-pointer ">
              <Button variant={"link"} className="line-clamp-1">
                About Us
              </Button>
              <Button variant={"link"} className="line-clamp-1">
                Our Services
              </Button>
              <Button variant={"link"} className="line-clamp-1">
                Privacy Policy
              </Button>
              <Button variant={"link"} className="line-clamp-1">
                Terms & Conditions
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl text-primary-foreground font-bold tracking-wide">
              Contact
            </h2>
            <div className="text-[16px] text-primary-foreground tracking-wide space-y-4 font-medium mt-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaPhoneAlt size={20} /> +1 123 456 7890
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaLocationDot size={20} /> 421 Allen, Mexico 4233
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <IoMdMail size={20} /> houseboxesate@com
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl text-primary-foreground font-bold tracking-wide mb-4">
              Gallery
            </h2>
            <div className="grid grid-cols-3 gap-4 justify-center">
              {posts.map((post, index) => (
                <div key={index}>
                  <Image
                    src={post}
                    width={100}
                    height={100}
                    alt={`post-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/30 bg-secondary/5 flex items-center justify-center gap-3 py-[2rem] text-center text-primary-foreground">
        ©Copyright {currentYear} - Blackrise Themes. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
