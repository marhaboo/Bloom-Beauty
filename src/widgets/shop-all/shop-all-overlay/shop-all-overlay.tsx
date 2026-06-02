"use client";
import { searchHref } from "@/lib/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

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

const ShopAllOverLay = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-4 ">
      {shopAllData.map((item, ind) => (
        <div className="flex flex-col mb-2" key={ind}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(ind)}
          >
            <Link
              href={searchHref(item.title)}
              onClick={(e) => e.stopPropagation()}
              className="text-[#697586] font-medium text-[16px] hover:text-[#F5A3B7]"
            >
              {item.title}
            </Link>
            {openIndex === ind ? (
              <ChevronUp className="text-[#697586] w-5 h-5 mr-1.5" />
            ) : (
              <ChevronDown className="text-[#697586] w-5 h-5 mr-1.5" />
            )}
          </div>
          {openIndex === ind &&
            item.items.map((subItem, subIndex) => (
              <Link
                href={searchHref(subItem)}
                className="text-[14px] text-gray-600 ml-4 mt-1 block hover:text-[#F5A3B7]"
                key={subIndex}
              >
                {subItem}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ShopAllOverLay;
