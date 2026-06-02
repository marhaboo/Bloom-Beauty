import Image from "next/image";
import Link from "next/link";
import React from "react";
import Devider from "./images/devider.svg";
import { searchHref } from "@/lib/navigation";

const ShopAllOnHover = () => {
  const linkClass = "hover:text-[#F5A3B7] cursor-pointer";

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 xl:gap-20 text-[#4F4F4F] text-[14px] font-medium justify-center py-8 lg:py-12 px-4 min-w-max">
        <div className="flex flex-col text-[15px] gap-3.5 ">
          <Link href="/shop-all" className={linkClass}>Shop All</Link>
          <Link href="/bestsellers" className={linkClass}>Bestsellers</Link>
          <Link href="/collection" className={linkClass}>Collection</Link>
          <Link href={searchHref("deals")} className={linkClass}>Deals</Link>
          <Link href={searchHref("minis")} className={linkClass}>Minis</Link>
          <Link href={searchHref("new arrivals")} className={linkClass}>New Arrivals</Link>
        </div>

        <Image height={351} src={Devider} alt={"Devider"} />

        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Double-Cleanse</p>
            <Link href={searchHref("Cleansing Balms")} className={linkClass}>Cleansing Balms</Link>
            <Link href={searchHref("Oil Cleansers")} className={linkClass}>Oil Cleansers</Link>
            <Link href={searchHref("Water Cleansers")} className={linkClass}>Water Cleansers</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Exfoliators</p>
            <Link href={searchHref("Physical Exfoliators")} className={linkClass}>Physical Exfoliators</Link>
            <Link href={searchHref("Chemical Exfoliators")} className={linkClass}>Chemical Exfoliators</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Toners</p>
            <Link href={searchHref("Acid Toners")} className={linkClass}>Acid Toners</Link>
            <Link href={searchHref("Cleansing Toners")} className={linkClass}>Cleansing Toners</Link>
            <Link href={searchHref("Hydrating Toners")} className={linkClass}>Hydrating Toners</Link>
          </div>
        </div>
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Masks</p>
            <Link href={searchHref("Sheet Masks")} className={linkClass}>Sheet Masks</Link>
            <Link href={searchHref("Wash-off Masks")} className={linkClass}>Wash-off Masks</Link>
            <Link href={searchHref("Sleeping Masks")} className={linkClass}>Sleeping Masks</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Eye Care</p>
            <Link href={searchHref("Eye Cream")} className={linkClass}>Eye Cream</Link>
            <Link href={searchHref("Eye Masks")} className={linkClass}>Eye Masks</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Moisturizers</p>
            <Link href={searchHref("Facial Moisturizer")} className={linkClass}>Facial Moisturizer</Link>
            <Link href={searchHref("Facial Mist")} className={linkClass}>Facial Mist</Link>
            <Link href={searchHref("Facial Oil")} className={linkClass}>Facial Oil</Link>
          </div>
        </div>
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Sun Protection</p>
            <Link href={searchHref("Sunscreen")} className={linkClass}>Sunscreen</Link>
            <Link href={searchHref("Makeup SPF")} className={linkClass}>Makeup & SPF</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Hair & Body</p>
            <Link href={searchHref("Hair Body")} className={linkClass}>Shop Hair & Body</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Makeup & Tools</p>
            <Link href={searchHref("Makeup Tools")} className={linkClass}>Shop Makeup & Tools</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">SKIN TYPE</p>
            <Link href={searchHref("Oily skin")} className={linkClass}>Oily</Link>
            <Link href={searchHref("Dry skin")} className={linkClass}>Dry</Link>
            <Link href={searchHref("Combination skin")} className={linkClass}>Combination</Link>
            <Link href={searchHref("Normal skin")} className={linkClass}>Normal</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAllOnHover;
