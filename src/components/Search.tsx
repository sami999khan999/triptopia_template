import { searchParamsData } from "@/lib/data";
import { cn } from "@/lib/utils";

import { MapPin, SearchCheck, User } from "lucide-react";
import { useState } from "react";
import Button from "./shared/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Link from "next/link";

interface SearchParamsType {
  searchType: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

const Search = () => {
  const [searchParams, setSearchParams] = useState<SearchParamsType>({
    searchType: searchParamsData.searchType[0],
    location: searchParamsData.location[0],
    checkIn: searchParamsData.checkIn[0],
    checkOut: searchParamsData.checkOut[0],
    guests: searchParamsData.guests[0],
  });

  const handleSubmit = () => {
    console.log(searchParams);
  };

  return (
    <div className="bg-background lg:p-8 px-3 py-6 rounded-xl space-y-6 lg:w-[35rem]">
      <div className="flex justify-center  max-w-fit flex-wrap">
        {searchParamsData.searchType.map((type, i) => (
          <div
            key={i}
            className={cn(
              "px-6 py-2 rounded-full capitalize hover:bg-foreground duration-150 hover:text-muted cursor-pointer",
              {
                "bg-muted text-foreground hover:bg-muted hover:text-foreground":
                  searchParams.searchType === type,
              }
            )}
            onClick={() =>
              setSearchParams({ ...searchParams, searchType: type })
            }
          >
            {type}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 bg-[#F2F4F6] p-8 rounded-xl">
        <div className="flex flex-col xl:flex-row gap-4">
          <div>
            <p className="text-muted-foreground">Location</p>
            <div className="flex items-center ">
              <MapPin className="text-muted-foreground" />
              <Select
                onValueChange={(value) =>
                  setSearchParams({ ...searchParams, location: value })
                }
                value={searchParams.location}
              >
                <SelectTrigger className="w-[10rem] border-none text-muted outline-none text-base font-medium shadow-none hover:bg-background duration-200 cursor-pointer">
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent className="bg-background border-muted-foreground ">
                  {searchParamsData.location.map((city, i) => (
                    <SelectItem
                      key={i}
                      value={city}
                      className="text-lg hover:bg-foreground"
                    >
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border border-gray-200"></div>

          {/* Check-In Date Select */}
          <div>
            <p className="text-muted-foreground">Check In</p>
            <div className="flex items-center ">
              <MapPin className="text-muted-foreground" />
              <Select
                onValueChange={(value) =>
                  setSearchParams({ ...searchParams, checkIn: value })
                }
                value={searchParams.checkIn}
              >
                <SelectTrigger
                  duration-200
                  cursor-pointer
                  className="w-[10rem] border-none text-muted outline-none text-base font-medium shadow-none hover:bg-background duration-200 cursor-pointer"
                >
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent className="bg-background border-muted-foreground ">
                  {searchParamsData.checkIn.map((city, i) => (
                    <SelectItem
                      key={i}
                      value={city}
                      className="text-lg hover:bg-foreground"
                    >
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Check-Out Date Select */}
        <div className="flex flex-col xl:flex-row gap-4">
          <div>
            <p className="text-muted-foreground">Check Out</p>
            <div className="flex items-center ">
              <MapPin className="text-muted-foreground" />
              <Select
                onValueChange={(value) =>
                  setSearchParams({ ...searchParams, checkOut: value })
                }
                value={searchParams.checkOut}
              >
                <SelectTrigger className="w-[10rem] border-none text-muted outline-none text-base font-medium shadow-none hover:bg-background duration-200 cursor-pointer">
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent className="bg-background border-muted-foreground ">
                  {searchParamsData.checkOut.map((city, i) => (
                    <SelectItem
                      key={i}
                      value={city}
                      className="text-lg hover:bg-foreground"
                    >
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border border-gray-200"></div>

          {/* Check-In Date Select */}
          <div>
            <p className="text-muted-foreground">Guests</p>
            <div className="flex items-center">
              <MapPin className="text-muted-foreground" />
              <Select
                onValueChange={(value) =>
                  setSearchParams({ ...searchParams, guests: value })
                }
                value={searchParams.guests}
              >
                <SelectTrigger className="w-[10rem] border-none text-muted outline-none text-base font-medium shadow-none hover:bg-background duration-200 cursor-pointer">
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent className="bg-background border-muted-foreground ">
                  {searchParamsData.guests.map((city, i) => (
                    <SelectItem
                      key={i}
                      value={city}
                      className="text-lg hover:bg-foreground"
                    >
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          className="bg-muted hover:bg-muted/90 text-foreground rounded-full text-lg"
          onClick={handleSubmit}
        >
          <SearchCheck /> Search
        </Button>
        <Button variant="link" className="text-muted-foreground ">
          <Link href={"/"} className="flex gap-1 items-center justify-center">
            <User /> Need Some Help?
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Search;
