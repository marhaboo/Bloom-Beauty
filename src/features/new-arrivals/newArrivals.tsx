"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrimaryButtton from "../primary-buttton/primary-buttton";
import { Heart } from "lucide-react";

type ArrivalsType = {
  imageUrl: StaticImageData;
  title: string;
  info: string;
  price: string;
  height?: number;
  href?: string;
};

const ArrivalsCart = ({
  imageUrl,
  title,
  info,
  price,
  height,
  href,
}: ArrivalsType) => {
  const [isLiked, setLiked] = useState(false);

  const image = (
    <Image
      src={imageUrl}
      alt={title}
      className="aspect-square w-full rounded-[1.25rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] sm:rounded-[1.5rem]"
    />
  );

  return (
    <div className="group flex h-full flex-col text-[#29352f]">
      <div className="relative overflow-hidden rounded-[1.25rem] bg-[#f7ebe6] sm:rounded-[1.5rem]">
        {href ? (
          <Link href={href} aria-label={`View ${title}`}>
            {image}
          </Link>
        ) : (
          image
        )}
        <button
          type="button"
          aria-label={isLiked ? `Remove ${title} from wishlist` : `Add ${title} to wishlist`}
          aria-pressed={isLiked}
          onClick={() => setLiked((liked) => !liked)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#fffdf9]/70 text-[#526258] shadow-sm backdrop-blur-md transition hover:scale-105 hover:text-[#a36e69]"
        >
          <Heart
            className={`h-4 w-4 ${isLiked ? "fill-[#a36e69] text-[#a36e69]" : ""}`}
            strokeWidth={1.6}
          />
        </button>
      </div>

      <div
        className="flex flex-1 flex-col px-1 pt-3"
        style={height ? { minHeight: `${height}px` } : undefined}
      >
        <div className="flex items-start justify-between gap-3">
          {href ? (
            <Link
              href={href}
              className="text-sm font-medium transition-colors hover:text-[#a36e69] sm:text-base"
            >
              {title}
            </Link>
          ) : (
            <p className="text-sm font-medium sm:text-base">{title}</p>
          )}
          <p className="shrink-0 text-sm font-semibold">{price}</p>
        </div>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-[#66756d]">
          {info}
        </p>
        <div className="mt-3">
          {href ? (
            <PrimaryButtton
              href={href}
              text="View details"
              classname="!max-w-none !rounded-full !border-[#d7d0c7] !bg-white/55 !py-2.5 !text-[10px] !font-medium !uppercase !tracking-[0.12em] !text-[#29352f] !backdrop-blur-md !transition-all hover:!border-[#20372e] hover:!bg-[#20372e] hover:!text-white sm:!py-3 sm:!text-xs"
            />
          ) : (
            <PrimaryButtton text="View details" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArrivalsCart;
