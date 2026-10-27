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
    <section className="w-full bg-[radial-gradient(ellipse_at_top,#f5e8e4_0%,#fbf8f2_62%,#fbf8f2_100%)] px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69] sm:text-xs">
          Bloom Beauty
        </p>
        <h1 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[#20372e] sm:text-5xl md:text-6xl">
          Search
        </h1>
        <p className="max-w-lg text-sm leading-6 text-[#707970] sm:text-base">{subtitle}</p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl md:mt-6"
          role="search"
        >
          <div className="flex flex-col items-stretch gap-2 rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-[0_18px_50px_-28px_rgba(32,55,46,0.3)] backdrop-blur-xl sm:flex-row sm:items-center sm:rounded-full sm:pl-6 sm:pr-2">
            <div className="flex flex-1 items-center gap-3 px-3 py-2 sm:px-0 sm:py-0">
              <Search className="h-5 w-5 shrink-0 text-[#a36e69]" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, ingredients, categories..."
                className="min-w-0 flex-1 bg-transparent text-sm text-[#20372e] outline-none placeholder:text-[#a7aaa2] sm:text-base"
                aria-label="Search products"
              />
            </div>
            <button
              type="submit"
              className="min-h-11 w-full shrink-0 rounded-full bg-[#20372e] px-8 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#a36e69] sm:w-auto sm:py-2.5"
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
