import ArrowButton from "@/features/arrow-button/arrow-button";
import Button from "@/features/base-button/Button";
import HasgtagButton from "@/features/hashtag-button/hasgtagButton";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ProductShowcaseType = {
  imageUrl: StaticImageData;
  title: string;
  text: string;
  row: boolean;
};

const ProductShowcase = ({
  imageUrl,
  title,
  text,
  row,
}: ProductShowcaseType) => {
  return (
    <div
      className={`flex text-[#383838] gap-5 px-5 ${
        row ? "flex-row" : "flex-row-reverse"
      } `}
    >
      <div className="w-[50%] justify-center gap-5 flex flex-col">
        <h2 className="text-[36px] font-medium ">{title}</h2>
        <p className="text-[#697586] text-[16px]">{text}</p>
        <div className="flex gap-1">
          <HasgtagButton text="GreatGift" />
          <HasgtagButton text="AntiAging" />
          <HasgtagButton text="GreatGift" />
          <HasgtagButton text="Ingredients" />
          <HasgtagButton text="Ingredients" />
        </div>
        <div>
          <Button text={"Shop Now"} />
          <ArrowButton text={"Explore More"} />
        </div>
      </div>
      <Image width={598} height={500} src={imageUrl} alt={title} />
    </div>
  );
};

export default ProductShowcase;
