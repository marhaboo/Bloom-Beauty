import Image from "next/image";
import React from "react";
import Devider from "./images/devider.svg";
const ShopAllOnHover = () => {
  return (
    <>
      <div className="flex gap-20 text-[#4F4F4F] text-[14px] font-medium justify-center py-15">
        <div className="flex flex-col text-[15px] gap-3.5 ">
          <p>Shop All</p>
          <p>Bestsellers</p>
          <p>Collection</p>
          <p>Deals</p>
          <p>Minis</p>
          <p>New Arrivals</p>
        </div>

        <Image height={351} src={Devider} alt={"Devider"} />

        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Double-Cleanse</p>
            <p>Cleansing Balms</p>
            <p>Oil Cleansers</p>
            <p>Water Cleansers</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Exfoliators</p>
            <p>Physical Exfoliators</p>
            <p>Chemical Exfoliators</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Toners</p>
            <p>Acid Toners</p>
            <p>Cleansing Toners</p>
            <p>Hydrating Toners</p>
          </div>
        </div>
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Masks</p>
            <p>Sheet Masks</p>
            <p>Wash-off Masks</p>
            <p>Sleeping Masks</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Eye Care</p>
            <p>Eye Cream</p>
            <p>Eye Masks</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Moisturizers</p>
            <p>Facial Moisturizer</p>
            <p>Facial Mist</p>
            <p>Facial Oil</p>
          </div>
        </div>
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Sun Protection</p>
            <p>Sunscreen</p>
            <p>Makeup & SPF</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Hair & Body</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">Makeup & Tools</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-[#383838] pb-1">SKIN TYPE</p>
            <p>Oily</p>
            <p>Dry</p>
            <p>Combination</p>
            <p>Normal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAllOnHover;
