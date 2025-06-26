"use client";
import PrimaryButtton from "@/features/primary-buttton/primary-buttton";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const filtersData = [
  {
    title: "Product Type",
    type: "checkbox",
    options: ["Cleansers", "Moisturizers", "Serums", "Masks"],
  },
  {
    title: "Ingredient Type",
    type: "checkbox",
    options: ["Vitamin C", "Hyaluronic Acid", "Retinol", "Niacinamide"],
  },
  {
    title: "Skin Type",
    type: "checkbox",
    required: true,
    options: ["All", "Combination/Oily", "Dry", "Normal", "Sensitive"],
  },
  {
    title: "Price Range",
    type: "radio",
    required: true,
    options: ["Under $25", "$25 - $50", "$50 - $100"],
    customRange: true,
  },
];

const FilterOverlay = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="bg-white text-[#383838] w-[289px] p-4">
      <div className="flex items-center text-2xl font-semibold  gap-1">
        <h2>Filters</h2> <span className="text-[#F5A3B7] ">•</span>
      </div>
      {filtersData.map((item, ind) => (
        <div className="border-b border-[#DFE1E3] py-2.5" key={ind}>
          <div
            className="flex items-center cursor-pointer justify-between"
            onClick={() => setActiveIndex(activeIndex === ind ? null : ind)}
          >
            <div className="flex gap-1 ">
              <p className="font-medium text-sm">{item.title}</p>{" "}
              {activeIndex ===   ind && (
                <span className="text-[#F5A3B7] ">•</span>
              )}
            </div>
            {activeIndex === ind ? (
              <ChevronUp className="text-[#BFB9CF]" />
            ) : (
              <ChevronDown className="text-[#BFB9CF]" />
            )}
          </div>
          {activeIndex === ind &&
            item.options.map((option, ind) => (
              <label
                key={ind}
                className="flex items-center  pt-2.5  gap-3 text-sm"
              >
                <input type={item.type} name={item.title} />
                {option}
              </label>
            ))}
          {activeIndex === ind && item.customRange && (
            <div className="flex  gap-2 mt-2 pr-5">
              <input type="radio" />
              <input
                type="number"
                placeholder="$  Max"
                className="border px-2 py-1 rounded w-full text-sm"
              />
              <input
                type="number"
                placeholder="$  Min"
                className="border px-2 py-1 rounded w-full text-sm"
              />
            </div>
          )}
        </div>
      ))}
      <PrimaryButtton text="Apply" />
    </div>
  );
};

export default FilterOverlay;
