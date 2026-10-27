"use client";
import CategoryScroll from "@/widgets/blog/category-scroll/category-scroll";
import Products from "@/widgets/blog/products/products";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const BlogPageContentInner = () => {
  const searchParams = useSearchParams();
  const tagFromUrl = searchParams?.get("tag");
  const [activeCategories, setActiveCategories] = useState<string[]>([
    "ALL CATEGORY",
  ]);

  useEffect(() => {
    if (tagFromUrl) {
      setActiveCategories([tagFromUrl.toUpperCase()]);
    }
  }, [tagFromUrl]);

  return (
    <main className="min-h-screen w-full bg-[#fbf8f2]">
      <header className="w-full bg-[radial-gradient(ellipse_at_top,#f5e8e4_0%,#fbf8f2_75%)] px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69] sm:text-xs">
            Bloom Beauty Journal
          </p>
          <h1 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-[#20372e] sm:text-5xl md:text-6xl">
            Notes for your ritual
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-6 text-[#707970] sm:text-base">
            Tips, ingredients, and skincare stories to help your natural glow
            bloom.
          </p>
        </div>
      </header>

      <CategoryScroll
        activeCategories={activeCategories}
        onCategoryChange={setActiveCategories}
      />

      <Products activeCategories={activeCategories} />
    </main>
  );
};

const BlogPageContent = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-[#fbf8f2] text-[#707970]">
          Loading blog...
        </div>
      }
    >
      <BlogPageContentInner />
    </Suspense>
  );
};

export default BlogPageContent;
