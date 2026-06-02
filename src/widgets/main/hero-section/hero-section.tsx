"use client";
import Image from "next/image";
import beautyKit from "./images/beauty kit.png";
import Button from "@/features/base-button/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[420px] h-[55vh] sm:h-[500px] md:h-[600px] max-h-[700px] bg-[#F5E0E5] overflow-hidden">
      <Image
        src={beautyKit}
        alt="Beauty Kit"
        fill
        priority
        className="object-cover object-left"
      />

      <div className="relative z-10 h-full w-full flex items-center justify-center md:justify-start px-5 sm:px-10 md:px-24">
        <div className="max-w-[420px] md:max-w-[620px] text-[#383838] space-y-3 sm:space-y-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-[40px] font-bold leading-snug">
            DISCOVER YOUR INNER BEAUTY <br />
            WITH BLOSSOM GLOW KIT
          </h2>
          <p className="text-[14px] md:text-[18px]">
            Great gift for yourself and loved ones
          </p>
          <div>
            <Button text="Shop Now" href="/shop-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
