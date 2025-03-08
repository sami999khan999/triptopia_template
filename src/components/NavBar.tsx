import { NavLinkData } from "@/lib/data";
import Link from "next/link";
import Button from "./shared/Button";
import Logo from "./shared/Logo";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="hidden lg:block sticky top-0 z-50">
      <div className="h-20 bg-gray-100/50 flex justify-center items-center backdrop-blur-md">
        <div className="wrapper flex justify-between items-center w-full">
          <Logo />
          <div className="flex  text-lg items-center">
            {NavLinkData.map((navItem) => (
              <DropdownMenu key={navItem.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hover:bg-gray-100">
                    {navItem.name} <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-foreground/50 border-y-0 backdrop-blur-xl p-0 text-primary-foreground rounded-none border-x-4 border-x-primary-foreground/50"
                >
                  {navItem.items.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="2xl:text-xl text-primary-foreground font-medium hover:bg-background/70 rounded-none border-b border-primary-foreground/10"
                    >
                      <Link href={item.path} scroll={true}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Link href={"/"} className="hover:bg-background px-5 py-3">
              Contact
            </Link>
          </div>
          <Button>Book Trip</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
