"use client";

import Image from "next/image";
import { ArrowRight, Flower2, Heart, Leaf } from "lucide-react";
import Button from "@/features/base-button/Button";

const rituals = [
  { icon: Leaf, label: "Plant-powered" },
  { icon: Heart, label: "Kind to your skin" },
  { icon: Flower2, label: "Made with care" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate mx-auto min-h-[700px] w-full overflow-hidden bg-[#f7ebe6] md:aspect-[1672/941] md:min-h-[620px] md:max-h-[780px]">
      <picture className="absolute inset-0 -z-10 overflow-hidden">
        <source media="(max-width: 767px)" srcSet="/Images/Hero/mobile.jpeg" />
        <Image
          src="/Images/Hero/desk.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image-motion object-cover object-center"
        />
      </picture>

      <div className="mx-auto flex min-h-[700px] w-full max-w-[1600px] items-start px-6 pb-10 pt-6 sm:px-12 sm:pt-14 md:min-h-0 md:h-full md:items-center md:px-12 md:py-12 lg:px-16 xl:px-24">
        <div className="max-w-[510px] md:w-[48%]">
          <p className="hero-copy-item mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#95636b] sm:mb-5 sm:text-sm">
            Your everyday, made beautiful
          </p>
          <h1 className="hero-copy-item font-serif text-[clamp(2.4rem,10vw,3rem)] leading-[0.98] tracking-[-0.055em] text-[#20372e] sm:text-[clamp(2.8rem,6.1vw,5.75rem)]">
            Good skin
            <br />
            <span className="italic text-[#a36e69]">begins</span> with a
            <br /> little self-love.
          </h1>
          <p className="hero-copy-item mt-3 max-w-[390px] text-sm leading-6 text-[#52645a] sm:mt-5 sm:text-base sm:leading-7">
            Thoughtful skincare, inspired by flowers and made for the moments
            that are just for you.
          </p>
          <div className="hero-copy-item mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-7 sm:gap-x-6 sm:gap-y-4">
            <Button
              text="Discover the collection"
              href="/shop-all"
              property="!px-5 !py-2.5 !text-[10px] !tracking-[0.08em] sm:!px-7 sm:!py-3 sm:!text-xs sm:!tracking-[0.11em]"
            />
            <a
              href="#new-arrivals"
              className="group inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#29352f]"
            >
              Explore
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="hero-copy-item mt-6 hidden flex-wrap gap-x-5 gap-y-2 sm:mt-10 sm:flex sm:gap-x-6">
            {rituals.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[#66756d] sm:text-xs"
              >
                <Icon className="h-3.5 w-3.5 text-[#a36e69]" strokeWidth={1.5} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
