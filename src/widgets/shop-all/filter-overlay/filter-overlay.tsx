"use client";
import PrimaryButtton from "@/features/primary-buttton/primary-buttton";
import { ProductFilters, emptyProductFilters } from "@/lib/product-filters";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
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

  const handleReset = () => {
    setSelected(emptyProductFilters);
    setMinPrice("");
    setMaxPrice("");
    onApply(emptyProductFilters);
  };

  return (
    <div className="w-full rounded-[1.5rem] border border-[#e9e3dc] bg-white/70 p-5 text-[#29352f] backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <h2 className="inline-flex items-center gap-2 font-serif text-2xl">
          <SlidersHorizontal className="h-4 w-4 text-[#a36e69]" />
          Filters
        </h2>
        <button
          type="button"
          onClick={handleReset}
          className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#707970] transition-colors hover:text-[#a36e69]"
        >
          Clear
        </button>
      </div>
      {filtersData.map((item, ind) => (
        <div className="border-b border-[#e9e3dc] py-3" key={item.title}>
          <button
            type="button"
            className="flex min-h-10 w-full items-center justify-between text-left"
            onClick={() => setActiveIndex(activeIndex === ind ? null : ind)}
            aria-expanded={activeIndex === ind}
          >
            <span className="text-sm font-medium">{item.title}</span>
            {activeIndex === ind ? (
              <ChevronUp className="h-4 w-4 text-[#a36e69]" />
            ) : (
              <ChevronDown className="h-4 w-4 text-[#707970]" />
            )}
          </button>
          {activeIndex === ind &&
            item.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className="flex cursor-pointer items-center gap-3 pt-3 text-sm text-[#526258]"
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
                min="0"
                placeholder="Min $"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full rounded-xl border border-[#e9e3dc] bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-[#a36e69]"
              />
              <input
                type="number"
                min="0"
                placeholder="Max $"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full rounded-xl border border-[#e9e3dc] bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-[#a36e69]"
              />
            </div>
          )}
        </div>
      ))}
      <PrimaryButtton
        text="Apply filters"
        classname="!mt-5 !max-w-none"
        onClick={handleApply}
      />
    </div>
  );
};

export default FilterOverlay;
