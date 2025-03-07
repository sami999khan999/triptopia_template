"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Use a slight delay to ensure the target element is rendered
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100); // Adjust delay as needed
  }, [pathname]);

  return null;
}
