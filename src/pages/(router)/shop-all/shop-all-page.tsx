import FilterOverlay from "@/widgets/shop-all/filter-overlay/filter-overlay";
import ShopAllOverLay from "@/widgets/shop-all/shop-all-overlay/shop-all-overlay";
import ShopCards from "@/widgets/shop-all/shop-cards/shop-cards";
import React from "react";

const ShopAllPage = () => {
  return (
    <div className="bg-[#F9FAFC] py-10 px-10 flex flex-col gap-5.5">
      <div className=" flex gap-4.5 ">
        <div className="flex flex-col gap-8">

        <div className="bg-white w-[289px]">
          <h2 className="font-semibold  p-4  text-[24px] text-[#383838] mb-4">
            Shop All
          </h2>
          <ShopAllOverLay />
        </div>
          <FilterOverlay />
        </div>
        <ShopCards />
      </div>
    </div>
  );
};

export default ShopAllPage;
