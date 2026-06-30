"use client";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import Link from "next/link";
import { useRef, useState } from "react";
import { products } from "@/data/products";
import Image_1 from "./images/img.png";
import Image_2 from "./images/img-1.png";
import Image_3 from "./images/img-2.png";
import Image_4 from "./images/img-3.png";

const arrivalProducts = [
  { image: Image_1, slug: products[0]?.slug ?? "cloud-jelly", title: products[0]?.title ?? "Cloud Jelly", info: products[0]?.info ?? "", price: products[0]?.price ?? "$31" },
  { image: Image_2, slug: products[1]?.slug ?? "clarifying-emulsion", title: products[1]?.title ?? "Clarifying Emulsion", info: products[1]?.info ?? "", price: products[1]?.price ?? "$29" },
  { image: Image_3, slug: products[2]?.slug ?? "clay-mask-2x", title: products[2]?.title ?? "Clay Mask 2X", info: products[2]?.info ?? "", price: products[2]?.price ?? "$34" },
  { image: Image_4, slug: products[3]?.slug ?? "silk-feel-lotion", title: products[3]?.title ?? "Silk Feel Lotion", info: products[3]?.info ?? "", price: products[3]?.price ?? "$27" },
];
import { ChevronLeft, ChevronRight } from "lucide-react";
import Icon from "./images/flower.svg";
import Image from "next/image";
import { scrollCarouselToIndex } from "@/lib/carousel";
const NewArrivals = () => {
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
      scrollBar.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const rightScroll = () => {
    if (scrollBar.current) {
      scrollBar.current.scrollBy({ left: 300, behavior: "smooth" });
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
        <h3 className="text-2xl">NEW ARRIVALS </h3>
        <Image
          src={Icon}
          alt="icon"
          width={13}
          height={50}
          className="rotate-90"
        />
      </div>
      <Link href="/shop-all" className="text-[#697586] text-[18px] hover:text-[#F5A3B7]">See all</Link>
      <div className="relative w-full lg:max-w-[1200px]">
        <button
          type="button"
          onClick={leftScroll}
          aria-label="Scroll new arrivals left"
          className="flex justify-center scrollbar-hidden items-center scroll-smooth overflow-x-hidden bg-[#DEDAE5] rounded-full h-8 w-8 absolute opacity-65 top-1/2  left-0 translate-y-1/2   "
        >
          <ChevronLeft className="text-white" />
        </button>
        <div
          ref={scrollBar}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hidden flex my-10 gap-10 n scroll-smooth px-10 "
        >
          {[...arrivalProducts, ...arrivalProducts].map((item, index) => (
            <div
              key={index}
              className="inline-block no-scrollbar  mr-4 min-w-[250px]"
            >
              <ArrivalsCart
                imageUrl={item.image}
                title={item.title}
                info={item.info}
                price={item.price}
                href={`/product/${item.slug}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={rightScroll}
          aria-label="Scroll new arrivals right"
          className="      bg-[#DEDAE5] flex justify-center items-center opacity-65 rounded-full h-8 w-8 top-1/2 absolute right-0 translate-y-1/2 "
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <button
            type="button"
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              scrollCarouselToIndex(scrollBar.current, i, 270);
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

export default NewArrivals;
