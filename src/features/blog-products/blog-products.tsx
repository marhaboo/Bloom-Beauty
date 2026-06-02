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
        className={`bg-white rounded-2xl overflow-hidden border border-[#DFE1E3]/70 shadow-[0_4px_24px_rgba(56,56,56,0.06)] flex flex-col ${
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
            <time className="text-[#BFB9CF] text-sm font-medium">{data}</time>
            {readMoreHref ? (
              <Link href={readMoreHref}>
                <h2 className="text-[#383838] text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug hover:text-[#F5A3B7] transition-colors">
                  {title}
                </h2>
              </Link>
            ) : (
              <h2 className="text-[#383838] text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug">
                {title}
              </h2>
            )}
          </div>

          <p className="text-[#697586] text-sm sm:text-base leading-relaxed line-clamp-6 md:line-clamp-none">
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
