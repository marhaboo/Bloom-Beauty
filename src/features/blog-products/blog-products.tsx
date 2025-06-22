import Image, { StaticImageData } from "next/image";
import React from "react";
import HasgtagButton from "../hashtag-button/hasgtagButton";
import PrimaryButtton from "../primary-buttton/primary-buttton";

type BlogProducts = {
  photoSrc: StaticImageData;
  data: string;
  title: string;
  info: string;
  hashtags: string[];
  property?: string;
};
const BlogProducts = ({
  photoSrc,
  data,
  title,
  info,
  hashtags,
  property
}: BlogProducts) => {
  return (
    <div className={`flex gap-5 px-10 bg-[#F9FAFC] ${property} `}>
      <div className="w-1/2">
        <Image src={photoSrc} alt={title} />
      </div>
      <div className="flex flex-col gap-7 justify-center w-1/2">
        <div>
          <p className="text-[#BFB9CF] text-[16px]">{data}</p>
          <p className="text-[#383838] text-[36px] text font-medium">{title}</p>
        </div>
        <p className="text-[#697586] text-[16px]">{info}</p>
        <div className="flex  gap-3">
          {hashtags.map((hash, ind) => (
            <HasgtagButton text={hash} key={ind} />
          ))}
        </div>
        <PrimaryButtton text="Read More" />
      </div>
    </div>
  );
};

export default BlogProducts;
