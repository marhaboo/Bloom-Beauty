"use client";

import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import Link from "next/link";
import { useRef, useState } from "react";
import { products } from "@/data/products";
import Image_1 from "./images/img.png";
import Image_2 from "./images/img-1.png";
import Image_3 from "./images/img-2.png";
import Image_4 from "./images/img-3.png";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const arrivalProducts = [
  { image: Image_1, product: products[0] },
  { image: Image_2, product: products[1] },
  { image: Image_3, product: products[2] },
  { image: Image_4, product: products[3] },
].map(({ image, product }) => ({
  image,
  slug: product.slug,
  title: product.title,
  info: product.info,
  price: product.price,
}));

const NewArrivals = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children);
    const nextIndex = cards.reduce(
      (closestIndex, card, index) => {
        const distance = Math.abs(
          card.getBoundingClientRect().left +
            card.getBoundingClientRect().width / 2 -
            carousel.getBoundingClientRect().left -
            carousel.clientWidth / 2,
        );
        return distance < closestIndex.distance
          ? { index, distance }
          : closestIndex;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;
    setActiveIndex(nextIndex);
  };

  const scrollByCard = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children.item(index);
    if (!carousel || !(card instanceof HTMLElement)) return;

    carousel.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
      <div className="mb-7 flex flex-col items-center text-center sm:mb-9">
        <p className="mb-2 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[#a36e69] sm:text-[11px]">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
          Fresh from the garden
        </p>
        <h2 className="font-serif text-3xl tracking-[0.04em] text-[#20372e] sm:text-4xl lg:text-[42px]">
          New arrivals
        </h2>
        <span className="mt-3 h-px w-12 bg-[#b99d77]" />
        <Link
          href="/shop-all"
          className="group mt-3 inline-flex items-center gap-1.5 text-sm text-[#526258] transition-colors hover:text-[#a36e69]"
        >
          Explore all skincare
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll new arrivals left"
          className="absolute -left-3 top-[38%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddd2] bg-[#fffdf9]/90 text-[#29352f] shadow-sm transition hover:bg-[#29352f] hover:text-white sm:flex lg:-left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          aria-label="New skincare arrivals"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 pt-1 sm:gap-5 lg:gap-6"
        >
          {arrivalProducts.map((item) => (
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
          aria-label="Scroll new arrivals right"
          className="absolute -right-3 top-[38%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ddd2] bg-[#fffdf9]/90 text-[#29352f] shadow-sm transition hover:bg-[#29352f] hover:text-white sm:flex lg:-right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-1 flex justify-center gap-2 sm:hidden">
        {arrivalProducts.map((item, index) => (
          <button
            type="button"
            key={item.slug}
            aria-label={`Go to ${item.title}`}
            aria-current={activeIndex === index}
            onClick={() => scrollToCard(index)}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index ? "w-6 bg-[#29352f]" : "w-1.5 bg-[#d8cdc4]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
