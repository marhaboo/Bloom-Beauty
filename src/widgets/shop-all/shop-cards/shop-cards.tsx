import CustomSelect from "@/features/custom-select/custom-select";
import React from "react";
import Clarifying from "./images/img.png";
import ClayMask from "./images/img copy.png";
import SilkFeel from "./images/img-1.png";
import CloudJelly from "./images/img-2.png";
import CloudJelly2 from "./images/img-2.png";
import Innisfree2 from "./images/img-3.png";
import Hyaluronic from "./images/img-1 copy.png";
import Innisfree from "./images/img-2 copy.png";
import SoyMask from "./images/img-3 copy.png";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";

const data = [
  {
    imageUrl: CloudJelly,
    title: "Cloud Jelly",
    price: "$31",
    info: "Lightweight hydrating jelly",
  },
  {
    imageUrl: Clarifying,
    title: "Clarifying Emulsion",
    price: "$29",
    info: "Gentle emulsion for daily cleansing",
  },
  {
    imageUrl: ClayMask,
    title: "Clay Mask 2X",
    price: "$34",
    info: "Deep pore-clearing clay mask",
  },
  {
    imageUrl: SilkFeel,
    title: "Silk Feel Lotion",
    price: "$27",
    info: "Smooth texture with silk protein",
  },
  {
    imageUrl: CloudJelly,
    title: "Cloud Jelly",
    price: "$31",
    info: "Lightweight hydrating jelly",
  },
  {
    imageUrl: Innisfree2,
    title: "Innisfree Green Tea",
    price: "$25",
    info: "Refreshing toner with green tea",
  },
  {
    imageUrl: Hyaluronic,
    title: "Hyaluronic Acid",
    price: "$38",
    info: "Boost moisture retention",
  },
  {
    imageUrl: Innisfree,
    title: "Innisfree Brightening",
    price: "$30",
    info: "Vitamin C + Jeju cherry blossom",
  },
  {
    imageUrl: SoyMask,
    title: "Soy Mask",
    price: "$36",
    info: "Fermented soybean bio cellulose mask",
  },
];

const ShopCards = () => {
  return (
    <div className="flex flex-col w-full gap-10 ">
      <div className="flex justify-between w-full ">
        <p className="text-sm font-normal text-[#BFB9CF]">46 product</p>
        <div className="flex h-[29px] gap-3 ">
          <p className="text-sm self-end font-normal text-[#BFB9CF]">SORT BY</p>
          <CustomSelect
            options={["Relevance", "Lowest price", "Highest price"]}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {data.map((item, ind) => (
          <ArrivalsCart
            key={ind}
            imageUrl={item.imageUrl}
            info={item.info}
            price={item.price}
            title={item.title}
            height={90}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
