"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import PrimaryButtton from "../primary-buttton/primary-buttton";
import { Heart } from "lucide-react";

type ArrivalsType = {
  imageUrl: StaticImageData;
  title: string;
  info: string;
};

const BlogCard = ({ imageUrl, title, info }: ArrivalsType) => {
  const [isHover, setHover] = useState(false);
  const [isLiked, setLiked] = useState(false);

  return (
    <div
      className={`flex flex-col relative text-[#383838] transition-all duration-300
        w-full max-w-[320px] md:max-w-[392px]
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isHover && (
        <Heart
          className={`absolute right-5 hover:stroke-[#F5A3B7] hover:fill-[#F5A3B7] top-3 cursor-pointer transition-all duration-200 ${
            isLiked
              ? "stroke-[#F5A3B7] fill-[#F5A3B7]"
              : "stroke-[#BFB9CF] fill-transparent"
          }`}
          onClick={() => setLiked(!isLiked)}
        />
      )}
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover"
      />
      <div className="flex flex-col px-5 py-3 gap-1.5">
        <div className="flex flex-col gap-1.5 ">
          <p
            className={`font-medium text-xl ${isHover ? "text-[#F5A3B7]" : ""}`}
          >
            {title}
          </p>

          <p className="text-[#697586] h-[81px]  line-clamp-3 md:line-clamp-4 text-[16px]">
            {info}
          </p>
        </div>
        <PrimaryButtton text="Read More" />
      </div>
    </div>
  );
};

export default BlogCard;
