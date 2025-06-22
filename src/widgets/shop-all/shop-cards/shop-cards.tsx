import CustomSelect from "@/features/custom-select/custom-select";
import React from "react";
import Evolution from "./images/img.png";
import Aqua from "./images/img-1.png";
import Missha from "./images/img-2.png";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";

const data = [Evolution, Aqua, Missha];
const ShopCards = () => {
  return (
    <div  className="flex flex-col w-full gap-10 ">
      <div className="flex justify-between w-full ">
        <p className="text-sm font-normal text-[#BFB9CF]">46 product</p>
        <div className="flex h-[29px] gap-3 ">
          <p className="text-sm self-end font-normal text-[#BFB9CF]">SORT BY</p>
          <CustomSelect
            options={["Relevance", "Lowest price", "Highest price"]}
          />
        </div>
      </div>
      <div className="flex gap-5">
        {data.map((item, ind) => (
          <ArrivalsCart
            key={ind}
            imageUrl={item}
            price="32$"
            title="Soft Finish"
            height={180}
            info="All Around Safe Block Sun Milk SPF50+/PA+++"
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
