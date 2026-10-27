"use client";
import Image_1 from "./images/1inst shots-2.png";
import Image_2 from "./images/img.png";
import Image_3 from "./images/1inst shots-3.png";
import Image_4 from "./images/1inst shots.png";
import Image_5 from "./images/inst shots-1.png";
import Image_6 from "./images/inst shots-2.png";
import Image_7 from "./images/inst shots-3.png";
import Image_8 from "./images/inst shots.png";
import Image from "next/image";
import Button from "@/features/base-button/Button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/navigation";

const ShareCard = () => {
  const gallery = [
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_5,
    Image_6,
    Image_7,
    Image_8,
  ];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <div className="mb-7 flex flex-col items-center text-center sm:mb-9">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69]">
          The bloom community
        </p>
        <h2 className="max-w-[680px] font-serif text-3xl leading-tight tracking-[-0.03em] text-[#20372e] sm:text-4xl">
          Little moments, shared with{" "}
          <span className="italic text-[#a36e69]">#BloomBeauty</span>
        </h2>
        <p className="mt-3 max-w-[430px] text-sm leading-6 text-[#707970]">
          Your rituals, your glow, your own lovely way of blooming.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {gallery.map((image, index) => (
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            aria-label="Visit Bloom Beauty on Instagram"
            className="group relative aspect-square overflow-hidden rounded-[1.25rem] bg-[#f5e8e4] sm:rounded-[1.75rem]"
          >
            <Image
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px]"
              src={image}
              alt={`Bloom Beauty skincare community moment ${index + 1}`}
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#20372e]/0 text-white opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-[#20372e]/25 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/25 backdrop-blur-md">
                <Instagram className="h-5 w-5" />
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button text="Follow our story" href={SOCIAL_LINKS.instagram} />
      </div>
    </section>
  );
};

export default ShareCard;
