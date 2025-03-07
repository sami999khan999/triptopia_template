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
          <div className="flex gap-6 text-lg items-center">
            {NavLinkData.map((navItem) => (
              <DropdownMenu key={navItem.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hover:bg-gray-100">
                    {navItem.name} <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-background border border-muted-foreground text-primary-foreground"
                >
                  {navItem.items.map((item) => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="2xl:text-lg hover:bg-gray-100 "
                    >
                      <Link href={item.path} scroll={true}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Link href={"/"} className="hover:bg-gray-100">
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
