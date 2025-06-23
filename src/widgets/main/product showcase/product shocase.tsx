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
        row
          ? "md:flex-row  flex-col-reverse"
          : "md:flex-row-reverse flex-col-reverse"
      } `}
    >
      <div className="md:w-[50%] w-full m justify-center gap-5 flex flex-col">
        <h2 className="md:text-[36px] text-[32px] font-medium ">{title}</h2>
        <p className="text-[#697586] text-[16px]">{text}</p>
        <div className="flex gap-1 flex-wrap">
          <HasgtagButton text="GreatGift" />
          <HasgtagButton text="AntiAging" />
          <HasgtagButton text="GreatGift" />
          <HasgtagButton text="Ingredients" />
          <HasgtagButton text="Ingredients" />
        </div>
        <div className="w-full md:w-auto flex flex-col gap-4 md:flex-row">
          <Button text={"Shop Now"} property="w-full md:w-auto" />
          <ArrowButton text={"Explore More"} property="w-full md:w-auto" />
        </div>
      </div>
      <Image width={598} height={500} className="self-center" src={imageUrl} alt={title} />
    </div>
  );
};

export default ProductShowcase;
