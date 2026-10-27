import ArrowButton from "@/features/arrow-button/arrow-button";
import Button from "@/features/base-button/Button";
import HasgtagButton from "@/features/hashtag-button/hasgtagButton";
import { blogTagHref } from "@/lib/navigation";
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
    <section
      className={`mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 ${
        row
          ? ""
          : "lg:[&>div:first-child]:order-2"
      }`}
    >
      <div className="flex flex-col items-start justify-center gap-5 py-2 lg:py-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69]">
          A ritual to return to
        </p>
        <h2 className="max-w-[520px] font-serif text-3xl leading-tight tracking-[-0.03em] text-[#20372e] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-[480px] text-sm leading-7 text-[#707970] sm:text-base">
          {text}
        </p>
        <div className="flex flex-wrap gap-2">
          <HasgtagButton text="GreatGift" href={blogTagHref("GreatGift")} />
          <HasgtagButton text="AntiAging" href={blogTagHref("AntiAging")} />
          <HasgtagButton text="Ingredients" href={blogTagHref("Ingredients")} />
        </div>
        <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button text="Shop the ritual" property="w-full sm:w-auto" href="/shop-all" />
          <ArrowButton text="Explore more" property="w-full sm:w-auto" href="/collection" />
        </div>
      </div>
      <div className="overflow-hidden rounded-[2rem] bg-[#f5e8e4] shadow-[0_24px_70px_-42px_rgba(54,48,38,0.5)]">
        <Image
          width={598}
          height={500}
          className="h-full max-h-[560px] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
          src={imageUrl}
          alt={title}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
