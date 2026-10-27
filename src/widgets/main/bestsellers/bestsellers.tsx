"use client";

import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { getBestsellerProducts } from "@/data/products";
import Image_1 from "./images/img.png";
import Image_2 from "./images/img-1.png";
import Image_3 from "./images/img-2.png";
import Image_4 from "./images/img-3.png";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const bestsellerImages = [Image_1, Image_2, Image_3, Image_4];
const bestsellerItems = getBestsellerProducts().map((product, index) => ({
  ...product,
  image: bestsellerImages[index % bestsellerImages.length],
}));

const BestSellers = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    setActiveIndex(
      Array.from(carousel.children).reduce(
        (nearest, card, index) => {
          const bounds = card.getBoundingClientRect();
          const distance = Math.abs(bounds.left + bounds.width / 2 - center);
          return distance < nearest.distance ? { index, distance } : nearest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index,
    );
  };

  const scrollByCard = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    carousel?.scrollBy({
      left: direction * carousel.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <div className="mb-7 flex flex-col items-center text-center sm:mb-9">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69]">
          The ones you love
        </p>
        <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#20372e] sm:text-4xl">
          Bestsellers
        </h2>
        <Link
          href="/bestsellers"
          className="group mt-3 inline-flex items-center gap-1.5 text-sm text-[#526258] transition-colors hover:text-[#a36e69]"
        >
          Shop all bestsellers
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll bestsellers left"
          className="absolute -left-3 top-[38%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddd2] bg-[#fffdf9]/90 text-[#29352f] shadow-sm transition hover:bg-[#29352f] hover:text-white sm:flex lg:-left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          aria-label="Bestselling skincare products"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 sm:gap-5 lg:gap-6"
        >
          {bestsellerItems.map((item) => (
            <article
              key={item.slug}
              className="w-[82%] flex-none snap-start sm:w-[44%] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <ArrivalsCart
                imageUrl={item.image}
                title={item.title}
                info={item.info}
                price={item.price}
                href={`/product/${item.slug}`}
              />
            </article>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll bestsellers right"
          className="absolute -right-3 top-[38%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddd2] bg-[#fffdf9]/90 text-[#29352f] shadow-sm transition hover:bg-[#29352f] hover:text-white sm:flex lg:-right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-5 flex justify-center gap-2 sm:hidden">
        {bestsellerItems.map((item, index) => (
          <button
            type="button"
            key={item.slug}
            aria-label={`Go to ${item.title}`}
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

export default BestSellers;
