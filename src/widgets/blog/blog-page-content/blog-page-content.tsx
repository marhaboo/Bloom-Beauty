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
    <div className="w-full min-h-screen bg-[#F9FAFC]">
      {/* Blog hero */}
      <header className="w-full bg-gradient-to-b from-[#F5E0E5] to-[#F9FAFC] pt-10 pb-8 sm:pt-14 sm:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F5A3B7] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Bloom Beauty Journal
          </p>
          <h1 className="text-[#383838] text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Blog
          </h1>
          <p className="text-[#697586] text-sm sm:text-base max-w-xl mx-auto">
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
    </div>
  );
};

const BlogPageContent = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#F9FAFC] min-h-[50vh] flex items-center justify-center text-[#697586]">
          Loading blog...
        </div>
      }
    >
      <BlogPageContentInner />
    </Suspense>
  );
};

export default BlogPageContent;
