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

const ShopAllOverLay = ({ onNavigate }: { onNavigate?: () => void }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent px-4 py-3">
      {shopAllData.map((item, ind) => (
        <div className="flex flex-col border-b border-[#e9e3dc] py-2 last:border-0" key={item.title}>
          <div className="flex items-center justify-between gap-3">
            <Link
              href={searchHref(item.title)}
              onClick={onNavigate}
              className="py-2 text-sm font-medium text-[#526258] transition-colors hover:text-[#a36e69]"
            >
              {item.title}
            </Link>
            <button
              type="button"
              onClick={() => toggleOpen(ind)}
              aria-label={`${openIndex === ind ? "Collapse" : "Expand"} ${item.title}`}
              aria-expanded={openIndex === ind}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#707970] transition-colors hover:bg-[#f5e8e4] hover:text-[#20372e]"
            >
              {openIndex === ind ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
          {openIndex === ind &&
            item.items.map((subItem, subIndex) => (
              <Link
                href={searchHref(subItem)}
                onClick={onNavigate}
                className="ml-3 block py-1.5 text-xs text-[#707970] transition-colors hover:text-[#a36e69]"
                key={`${item.title}-${subIndex}`}
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
