"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const ShopAllOverLay = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shopAllData = [
    {
      title: "Double-Cleanse",
      items: ["Cleansing Balms", "Oil Cleansers", "Water Cleansers"],
    },
    {
      title: "Exfoliators",
      items: ["Physical Exfoliators", "Chemical Exfoliators"],
    },
    {
      title: "Toners",
      items: ["Acid Toners", "Cleansing Toners", "Hydrating Toners"],
    },
    {
      title: "Masks",
      items: ["Sheet Masks", "Wash-off Masks", "Sleeping Masks"],
    },
    {
      title: "Eye Care",
      items: ["Eye Cream", "Eye Masks"],
    },
    {
      title: "Moisturizers",
      items: ["Facial Moisturizer", "Facial Mist", "Facial Oil"],
    },
    {
      title: "Sun Protection",
      items: ["Sunscreen", "Makeup & SPF"],
    },
    { title: "Hair & Body", items: [] },
    { title: "Makeup & Tools", items: [] },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-4 w-[289px]">
      <h2 className="font-semibold text-[24px] text-[#383838] mb-4">
        Shop All
      </h2>
      {shopAllData.map((item, ind) => (
        <div className="flex flex-col mb-2" key={ind}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(ind)}
          >
            <p className="text-[#697586] font-medium text-[16px]">
              {item.title}
            </p>
            {openIndex === ind ? (
              <ChevronUp className="text-[#697586] w-5 h-5" />
            ) : (
              <ChevronDown className="text-[#697586] w-5 h-5" />
            )}
          </div>
          {openIndex === ind &&
            item.items.map((subItem, subIndex) => (
              <p className="text-[14px] text-gray-600 ml-4 mt-1" key={subIndex}>
                {subItem}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ShopAllOverLay;
