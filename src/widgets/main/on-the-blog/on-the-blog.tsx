"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Icon from "./images/flower.svg";
import Image from "next/image";
import BlogCard from "@/features/blog-card/blog-card";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { scrollCarouselToIndex } from "@/lib/carousel";

const OnTheBlog = () => {
  const scrollBar = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollBar.current) {
      const scrollLeft = scrollBar.current.scrollLeft;
      const cardWidth = 270;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const leftScroll = () => {
    if (scrollBar.current) {
      scrollBar.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const rightScroll = () => {
    if (scrollBar.current) {
      scrollBar.current.scrollBy({ left: 410, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center text-[#383838] font-bold items-center gap-8">
        <Image
          src={Icon}
          alt="icon"
          width={13}
          height={50}
          className="rotate-270  scale-x-[-1]"
        />
        <h3 className="text-2xl">ON THE BLOG</h3>
        <Image
          src={Icon}
          alt="icon"
          width={13}
          height={50}
          className="rotate-90"
        />
      </div>
      <Link href="/blog" className="text-[#697586] text-[18px] hover:text-[#F5A3B7]">
        See all
      </Link>
      <div className="relative w-full max-w-[1200px]">
        <button
          type="button"
          onClick={leftScroll}
          aria-label="Scroll blog posts left"
          className="flex justify-center scrollbar-hidden items-center scroll-smooth overflow-x-hidden bg-[#DEDAE5] rounded-full h-8 w-8 absolute opacity-65 top-1/2 md:left-0 left-3 translate-y-1/2   "
        >
          <ChevronLeft className="text-white" />
        </button>
        <div
          ref={scrollBar}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hidden flex pr-3 my-10 gap-2 n scroll-smooth px-10 "
        >
          {[...blogPosts, ...blogPosts].map((data, index) => (
            <div
              key={`${data.slug}-${index}`}
              className="inline-block no-scrollbar  mr-4 min-w-[392px]"
            >
              <BlogCard
                imageUrl={data.photoSrc}
                title={data.title}
                info={data.excerpt}
                href={`/blog/${data.slug}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={rightScroll}
          aria-label="Scroll blog posts right"
          className="  md:right-0  bg-[#DEDAE5] flex justify-center items-center opacity-65 rounded-full h-8 w-8 top-1/2 absolute right-6 translate-y-1/2 "
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
      <div className="flex gap-2">
        {[0, 1].map((i) => (
          <button
            type="button"
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              scrollCarouselToIndex(scrollBar.current, i, 392);
              setActiveIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-[#383838]" : "bg-[#DFE1E3]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OnTheBlog;
