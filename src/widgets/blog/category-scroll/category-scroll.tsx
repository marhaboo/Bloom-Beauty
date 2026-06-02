"use client";
import CustomSelect from "@/features/custom-select/custom-select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const categories = [
  "ALL CATEGORY",
  "ECOFRIENDLY",
  "ORGANIC",
  "TIPS",
  "COMPILATION",
  "INGREDIENTS",
  "ANTIAGING",
];

type CategoryScrollProps = {
  activeCategories: string[];
  onCategoryChange: (categories: string[]) => void;
};

const CategoryScroll = ({
  activeCategories,
  onCategoryChange,
}: CategoryScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const uniqueCategories = Array.from(new Set(categories));

  const scrollBy = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  const toggleCategory = (cat: string) => {
    if (cat === "ALL CATEGORY") {
      onCategoryChange(["ALL CATEGORY"]);
      return;
    }

    const withoutAll = activeCategories.filter((item) => item !== "ALL CATEGORY");
    const exists = withoutAll.includes(cat);
    const next = exists
      ? withoutAll.filter((item) => item !== cat)
      : [...withoutAll, cat];
    onCategoryChange(next.length === 0 ? ["ALL CATEGORY"] : next);
  };

  const handleSelectChange = (value: string) => {
    toggleCategory(value);
  };

  return (
    <section className="w-full bg-[#F7CFDA] border-y border-[#F5A3B7]/25">
      {/* Desktop / tablet: full-width band with centered scroll track */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 relative">
          <button
            type="button"
            onClick={() => scrollBy(-280)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#383838] border border-[#DFE1E3] p-2 rounded-full shadow-md transition"
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hidden mx-10 sm:mx-12"
          >
            <div className="flex gap-3 w-max min-w-full justify-start px-1">
              {categories.map((cat) => (
                <button
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  key={cat}
                  className={`flex-shrink-0 font-semibold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-200 whitespace-nowrap ${
                    activeCategories.includes(cat)
                      ? "bg-[#F5A3B7] text-white shadow-sm"
                      : "bg-white text-[#383838] hover:bg-[#383838] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollBy(280)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#383838] border border-[#DFE1E3] p-2 rounded-full shadow-md transition"
            aria-label="Scroll categories right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 py-4">
        <p className="text-[#383838] text-sm font-semibold mb-3">Filter by category</p>
        <CustomSelect
          options={uniqueCategories}
          value={activeCategories[0] ?? "ALL CATEGORY"}
          onChange={handleSelectChange}
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.slice(0, 4).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => toggleCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                activeCategories.includes(cat)
                  ? "bg-[#F5A3B7] text-white"
                  : "bg-white text-[#383838]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryScroll;
