import { NavLinkData } from "@/lib/data";
import Link from "next/link";
import Button from "./shared/Button";
import Logo from "./shared/Logo";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="lg:hidden sticky top-0">
      <div className="h-16 bg-gray-100/50 flex justify-between items-center px-4 backdrop-blur-md">
        <Logo />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-background text-primary-foreground"
          >
            <div className="m-3">
              <Logo />
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div>
                {NavLinkData.map((navItem) => (
                  <DropdownMenu key={navItem.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                      >
                        {navItem.name} <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-full bg-background border-muted-foreground space-y-[2px]"
                    >
                      {navItem.items.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link
                            href={item.path}
                            className="w-full block py-1 text-lg bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
                <Button variant={"ghost"}>
                  <Link href="/">Contact</Link>
                </Button>
              </div>
              <Button className="mt-4 mx-2">Book Trip</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
