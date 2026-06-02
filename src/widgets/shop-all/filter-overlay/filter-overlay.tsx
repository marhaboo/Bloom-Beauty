"use client";
import PrimaryButtton from "@/features/primary-buttton/primary-buttton";
import { ProductFilters, emptyProductFilters } from "@/lib/product-filters";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const filtersData = [
  {
    title: "Product Type",
    type: "checkbox" as const,
    options: ["Cleansers", "Moisturizers", "Serums", "Masks"],
    key: "categories" as const,
  },
  {
    title: "Ingredient Type",
    type: "checkbox" as const,
    options: ["Vitamin C", "Hyaluronic Acid", "Retinol", "Niacinamide"],
    key: "ingredients" as const,
  },
  {
    title: "Skin Type",
    type: "checkbox" as const,
    options: ["All", "Combination/Oily", "Dry", "Normal", "Sensitive"],
    key: "skinTypes" as const,
  },
  {
    title: "Price Range",
    type: "radio" as const,
    options: ["Under $25", "$25 - $50", "$50 - $100"],
    key: "priceRange" as const,
    customRange: true,
  },
];

type FilterOverlayProps = {
  onApply: (filters: ProductFilters) => void;
};

const FilterOverlay = ({ onApply }: FilterOverlayProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<ProductFilters>(emptyProductFilters);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleCheckbox = (
    key: "categories" | "ingredients" | "skinTypes",
    value: string
  ) => {
    setSelected((prev) => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      };
    });
  };

  const setPriceRange = (value: string) => {
    setSelected((prev) => ({
      ...prev,
      priceRange: prev.priceRange === value ? null : value,
    }));
  };

  const handleApply = () => {
    onApply({
      ...selected,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  };

  return (
    <div className="bg-white text-[#383838] w-full rounded-xl border border-[#DFE1E3]/60 p-4">
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
              {activeIndex === ind && (
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
            item.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className="flex items-center  pt-2.5  gap-3 text-sm cursor-pointer"
              >
                <input
                  type={item.type}
                  name={item.title}
                  checked={
                    item.key === "priceRange"
                      ? selected.priceRange === option
                      : selected[item.key].includes(option)
                  }
                  onChange={() => {
                    if (item.key === "priceRange") {
                      setPriceRange(option);
                    } else {
                      toggleCheckbox(item.key, option);
                    }
                  }}
                />
                {option}
              </label>
            ))}
          {activeIndex === ind && item.customRange && (
            <div className="flex  gap-2 mt-2 pr-5">
              <input
                type="number"
                placeholder="$  Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border px-2 py-1 rounded w-full text-sm"
              />
              <input
                type="number"
                placeholder="$  Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border px-2 py-1 rounded w-full text-sm"
              />
            </div>
          )}
        </div>
      ))}
      <div onClick={handleApply}>
        <PrimaryButtton text="Apply" />
      </div>
    </div>
  );
};

export default FilterOverlay;
