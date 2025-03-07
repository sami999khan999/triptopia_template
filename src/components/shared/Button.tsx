import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer rounded-md duration-100 hover",
  {
    variants: {
      variant: {
        default: "text-foreground bg-primary hover:bg-primary/80",
        link: "text-primary-foreground hover:underline",
        outline:
          "text-primary-foreground outline hover:bg-primary hover:outline-none hover:text-background rounded-xs",

        ghost: "text-primary-foreground ",
      },
      size: {
        default: "px-6 py-3",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "px-7 py-7",
        icon: "h-5 w-5",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        class: "p-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  );
};

Button.displayName = "Button";

export default Button;
