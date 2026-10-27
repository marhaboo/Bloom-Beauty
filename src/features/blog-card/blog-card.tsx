"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PrimaryButtton from "../primary-buttton/primary-buttton";

type BlogCardProps = {
  imageUrl: StaticImageData;
  title: string;
  info: string;
  href?: string;
};

const BlogCard = ({ imageUrl, title, info, href }: BlogCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#eee8e0] bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-36px_rgba(32,55,46,0.35)]">
      {href ? (
        <Link href={href} aria-label={`Read ${title}`} className="overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            className="aspect-[1.35/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            sizes="(max-width: 640px) 85vw, 40vw"
          />
        </Link>
      ) : (
        <Image
          src={imageUrl}
          alt={title}
          className="aspect-[1.35/1] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#a36e69]">
          From the journal
        </p>
        {href ? (
          <Link
            href={href}
            className="mt-2 font-serif text-xl leading-snug text-[#20372e] transition-colors group-hover:text-[#a36e69] sm:text-2xl"
          >
            {title}
          </Link>
        ) : (
          <h3 className="mt-2 font-serif text-xl leading-snug text-[#20372e] sm:text-2xl">
            {title}
          </h3>
        )}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#707970]">
          {info}
        </p>
        <div className="mt-auto w-full pt-5">
          <PrimaryButtton
            text="Read the story"
            href={href}
            classname="!max-w-none !rounded-full !border-[#d7d0c7] !px-5 !py-2.5 !text-[10px] !font-medium !uppercase !tracking-[0.12em] !text-[#29352f] !transition hover:!border-[#20372e] hover:!bg-[#20372e] hover:!text-white"
          />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
