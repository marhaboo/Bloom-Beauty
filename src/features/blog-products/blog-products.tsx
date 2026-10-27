import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import HasgtagButton from "../hashtag-button/hasgtagButton";
import PrimaryButtton from "../primary-buttton/primary-buttton";

type BlogProductsProps = {
  photoSrc: StaticImageData;
  data: string;
  title: string;
  info: string;
  hashtags: string[];
  reversed?: boolean;
  readMoreHref?: string;
  readMoreText?: string;
  hashtagHref?: (tag: string) => string;
};

const BlogProducts = ({
  photoSrc,
  data,
  title,
  info,
  hashtags,
  reversed = false,
  readMoreHref,
  readMoreText = "Read More",
  hashtagHref,
}: BlogProductsProps) => {
  return (
    <article className="w-full">
      <div
        className={`flex flex-col overflow-hidden rounded-[2rem] border border-[#e9e3dc] bg-white/75 shadow-[0_24px_70px_-52px_rgba(32,55,46,0.35)] backdrop-blur-md ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative w-full md:w-[48%] aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[320px] lg:min-h-[380px] shrink-0">
          <Image
            src={photoSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 p-6 sm:p-8 md:p-10 md:w-[52%]">
          <div className="flex flex-col gap-2">
            <time className="text-xs font-medium uppercase tracking-[0.12em] text-[#a36e69]">
              {data}
            </time>
            {readMoreHref ? (
              <Link href={readMoreHref}>
                <h2 className="font-serif text-2xl font-medium leading-snug text-[#20372e] transition-colors hover:text-[#a36e69] sm:text-3xl lg:text-4xl">
                  {title}
                </h2>
              </Link>
            ) : (
              <h2 className="font-serif text-2xl font-medium leading-snug text-[#20372e] sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
          </div>

          <p className="line-clamp-6 text-sm leading-7 text-[#707970] sm:text-base md:line-clamp-none">
            {info}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {hashtags.map((hash) => (
              <HasgtagButton
                text={hash}
                key={hash}
                href={hashtagHref ? hashtagHref(hash) : undefined}
              />
            ))}
          </div>

          <div className="pt-1">
            {readMoreHref ? (
              <PrimaryButtton
                text={readMoreText}
                classname="w-full sm:w-auto max-w-full"
                href={readMoreHref}
              />
            ) : (
              <PrimaryButtton text={readMoreText} classname="w-full sm:w-auto" />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogProducts;
