"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import PrimaryButtton from "../primary-buttton/primary-buttton";
import { Heart } from "lucide-react";

type ArrivalsType = {
  imageUrl: StaticImageData;
  title: string;
  info: string;
  price: string;
  width?: number;
  noRating?: boolean;
  height?: number;
};

const ArrivalsCart = ({
  imageUrl,
  title,
  info,
  price,
  width,
  height,
  noRating,
}: ArrivalsType) => {
  const [rating, setRating] = useState(0);
  const [isHover, setHover] = useState(false);
  const [isLiked, setLiked] = useState(false);

  return (
    <div
      className={`flex flex-col relative text-[#383838] `}
      style={{ width: width || "250px" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isHover && (
        <Heart
          className={`absolute right-5 top-3 cursor-pointer transition-all duration-200 ${
            isLiked
              ? "stroke-[#F5A3B7] fill-[#F5A3B7]"
              : "stroke-[#BFB9CF] fill-transparent"
          }`}
          onClick={() => setLiked(!isLiked)}
        />
      )}
      <Image src={imageUrl} alt={title} />
      <div className="flex flex-col px-5 py-3 gap-1.5">
        <div
          className=" flex flex-col gap-1.5 "
          style={{ height: height || "200px" }}
        >
          <p className={`font-medium ${isHover ? "text-[#F5A3B7]" : null} `}>
            {title}
          </p>

          {noRating ? null : (
            <div className="rating flex gap-1 self-start ">
              <span className="text-[#697586]">({rating})</span>
              {[5, 4, 3, 2, 1].map((value) => (
                <span
                  key={value}
                  onClick={() => setRating(value)}
                  className={`text-xl cursor-pointer rating_item ${
                    value <= rating ? "text-[#ffa500]" : "text-[#DFE1E3]"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          <p className="text-[#697586] text-sm">{info}</p>
          <p>{price}</p>
        </div>
        <div>
          <PrimaryButtton text="Add to bag" />
        </div>
      </div>
    </div>
  );
};

export default ArrivalsCart;
