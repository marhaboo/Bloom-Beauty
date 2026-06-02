"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

type SearchHeroProps = {
  initialQuery?: string;
  onSearch: (query: string) => void;
  subtitle?: string;
};

const SearchHero = ({
  initialQuery = "",
  onSearch,
  subtitle = "Find skincare, ingredients, and collections curated for you.",
}: SearchHeroProps) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    onSearch(trimmed);
    router.replace(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search", {
      scroll: false,
    });
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#F5E0E5] via-[#FAF0F3] to-[#F9FAFC] pt-10 pb-12 md:pt-14 md:pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 md:gap-4">
        <p className="text-[#F5A3B7] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
          Bloom Beauty
        </p>
        <h1 className="text-[#383838] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Search
        </h1>
        <p className="text-[#697586] text-sm sm:text-base max-w-lg">{subtitle}</p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 md:mt-6 w-full max-w-2xl"
          role="search"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white rounded-2xl sm:rounded-full shadow-[0_8px_30px_rgba(56,56,56,0.08)] border border-[#DFE1E3]/80 p-2 sm:pl-6 sm:pr-2 sm:py-2">
            <div className="flex flex-1 items-center gap-3 px-3 sm:px-0 py-2 sm:py-0">
              <Search className="text-[#F5A3B7] w-5 h-5 shrink-0" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, ingredients, categories..."
                className="flex-1 min-w-0 text-[#383838] placeholder:text-[#BFB9CF] outline-none text-sm sm:text-base bg-transparent"
                aria-label="Search products"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 text-white bg-[#F5A3B7] hover:bg-[#323232] transition-colors text-sm font-medium px-8 py-3 sm:py-2.5 rounded-xl sm:rounded-full"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchHero;
