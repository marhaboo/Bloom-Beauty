"use client";
import CustomSelect from "@/features/custom-select/custom-select";
import { ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

const CategoryScroll = () => {
  const categories = [
    "ALL CATEGORY",
    "ECOFRIENDLY",
    "ORGANIC",
    "TIPS",
    "COMPILATION",
    "INGREDIENTS",
    "ANTIAGING",
    "COMPILATION",
    "ECOFRIENDLY",
    "ORGANIC",
    "TIPS",
    "COMPILATION",
    "INGREDIENTS",
    "ANTIAGING",
    "COMPILATION",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string[]>(["ALL CATEGORY"]);

  const uniqueCategories = Array.from(new Set(categories));

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const toggleCategory = (cat: string) => {
    setActive((prev) =>
      prev.includes(cat) ? prev.filter((item) => item !== cat) : [...prev, cat]
    );
  };

  return (
    <>
      <div className="relative w-full  hidden md:block ">
        <div
          ref={scrollRef}
          className=" bg-[#F9FAFC] overflow-x-auto scrollbar-hidden"
        >
          <div className="flex space-x-3 bg-[#F7CFDA] py-6 px-6 rounded-xl w-max">
            {categories.map((cat, idx) => (
              <button
                onClick={() => toggleCategory(cat)}
                key={idx}
                className={`flex-shrink-0 font-semibold px-7 py-3 rounded-full transition 
                ${
                  active.includes(cat)
                    ? "bg-[#F5A3B7] text-white"
                    : "bg-white text-gray-800 hover:bg-black hover:text-white tap :bg-[#F5A3B7]"
                }
              `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#DEDAE5] border-none p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
      <div className="w-full px-10 block md:hidden ">
        <CustomSelect options={uniqueCategories} />
      </div>
    </>
  );
};

export default CategoryScroll;
