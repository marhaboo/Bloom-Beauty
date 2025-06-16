"use client";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import React, { useRef, useState } from "react";
import Image_1 from "./images/Rectangle 47.png";
import Image_2 from "./images/Rectangle 47-1.png";
import Image_3 from "./images/Rectangle 47-2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Icon from "./images/flower.svg";
import Image from "next/image";
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
        <h3 className="text-2xl">ON THE BLOG</h3>
        <Image
          src={Icon}
          alt="icon"
          width={13}
          height={50}
          className="rotate-90"
        />
      </div>
      <p className="text-[#697586] text-[18px]">See all</p>
      <div className="relative w-full max-w-[1200px]">
        <button className="flex justify-center scrollbar-hidden items-center scroll-smooth overflow-x-hidden bg-[#DEDAE5] rounded-full h-8 w-8 absolute opacity-65 top-1/2  left-0 translate-y-1/2   ">
          <ChevronLeft onClick={leftScroll} className="text-white" />
        </button>
        <div
          ref={scrollBar}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hidden flex my-10 gap-2 n scroll-smooth px-10 "
        >
          {[
            Image_1,
            Image_2,
            Image_3,
            Image_1,
            Image_2,
            Image_3,
          ].map((img, index) => (
            <div
              key={index}
              className="inline-block no-scrollbar  mr-4 min-w-[392px]"
            >
              <ArrivalsCart
                imageUrl={img}
                title={
                  index % 2 !== 0
                    ? "Cracking the Coconut Code"
                    : "Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams "
                }
                info={
                  index % 2 !== 0
                    ? "Bloom Beauty Best of 2023"
                    : "Bloom Beauty Best of 2023 products winners are here."
                }
                price="32$"
                width={392}
                height={130}
                noRating={true}
              />
            </div>
          ))}
        </div>
        <button
          onClick={rightScroll}
          className="      bg-[#DEDAE5] flex justify-center items-center opacity-65 rounded-full h-8 w-8 top-1/2 absolute right-0 translate-y-1/2 "
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
      <div className="flex gap-2">
        {[0, 1].map((i) => (
          <button
            key={i}
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
