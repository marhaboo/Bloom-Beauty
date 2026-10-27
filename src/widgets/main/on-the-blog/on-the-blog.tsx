"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "@/features/blog-card/blog-card";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

const OnTheBlog = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselCenter =
      carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    const nearestIndex = Array.from(carousel.children).reduce(
      (nearest, card, index) => {
        const bounds = card.getBoundingClientRect();
        const distance = Math.abs(bounds.left + bounds.width / 2 - carouselCenter);
        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActiveIndex(nearestIndex);
  };

  const scrollByCard = (direction: -1 | 1) => {
    carouselRef.current?.scrollBy({
      left: direction * (carouselRef.current.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <div className="mb-7 flex flex-col items-center text-center sm:mb-9">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69]">
          Notes for your ritual
        </p>
        <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#20372e] sm:text-4xl">
          From the journal
        </h2>
        <Link
          href="/blog"
          className="group mt-3 inline-flex items-center gap-1.5 text-sm text-[#526258] transition-colors hover:text-[#a36e69]"
        >
          Visit the journal
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll journal stories left"
          className="absolute -left-3 top-1/3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddd2] bg-[#fffdf9]/90 text-[#29352f] shadow-sm transition hover:bg-[#29352f] hover:text-white sm:flex lg:-left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          aria-label="Latest journal stories"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 sm:gap-5 lg:gap-6"
        >
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="w-[86%] flex-none snap-start sm:w-[48%] lg:w-[calc((100%-3rem)/3)]"
            >
              <BlogCard
                imageUrl={post.photoSrc}
                title={post.title}
                info={post.excerpt}
                href={`/blog/${post.slug}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll journal stories right"
          className="absolute -right-3 top-1/3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddd2] bg-[#fffdf9]/90 text-[#29352f] shadow-sm transition hover:bg-[#29352f] hover:text-white sm:flex lg:-right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-5 flex justify-center gap-2 sm:hidden">
        {blogPosts.map((post, index) => (
          <button
            type="button"
            key={post.slug}
            aria-label={`Go to story: ${post.title}`}
            aria-current={activeIndex === index}
            onClick={() => {
              const card = carouselRef.current?.children.item(index);
              if (card instanceof HTMLElement) {
                carouselRef.current?.scrollTo({
                  left: card.offsetLeft,
                  behavior: "smooth",
                });
              }
            }}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index ? "w-6 bg-[#29352f]" : "w-1.5 bg-[#d8cdc4]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OnTheBlog;
