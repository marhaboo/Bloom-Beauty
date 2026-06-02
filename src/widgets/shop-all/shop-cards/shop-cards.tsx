"use client";
import CustomSelect from "@/features/custom-select/custom-select";
import React, { useMemo, useState } from "react";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import ArrowButton from "@/features/arrow-button/arrow-button";
import { products as allProducts } from "@/data/products";
import {
  ProductFilters,
  applyProductFilters,
  sortProducts,
} from "@/lib/product-filters";

type ShopCardsProps = {
  filter?: "all" | "bestsellers";
  searchQuery?: string;
  productFilters?: ProductFilters;
};

const ShopCards = ({
  filter = "all",
  searchQuery = "",
  productFilters,
}: ShopCardsProps) => {
  const sourceProducts = useMemo(() => {
    if (filter === "bestsellers") {
      return allProducts.filter((p) => p.isBestseller);
    }
    return allProducts;
  }, [filter]);

  const [sortBy, setSortBy] = useState("Relevance");
  const [visibleCount, setVisibleCount] = useState(sourceProducts.length);

  const filteredData = useMemo(() => {
    let items = sourceProducts;
    const query = searchQuery.trim().toLowerCase();

    if (query) {
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.info.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    if (productFilters) {
      items = applyProductFilters(items, productFilters);
    }

    return sortProducts(items, sortBy).slice(0, visibleCount);
  }, [sourceProducts, searchQuery, productFilters, sortBy, visibleCount]);

  const productCount =
    filter === "bestsellers"
      ? `${filteredData.length} bestsellers`
      : `${filteredData.length} product`;

  return (
    <div className="flex flex-col w-full gap-10 ">
      <div className="flex justify-between w-full ">
        <p className="text-sm font-normal text-[#BFB9CF]">{productCount}</p>
        <div className="flex h-[29px] gap-3 ">
          <p className="text-sm self-end font-normal text-[#BFB9CF]">SORT BY</p>
          <CustomSelect
            options={["Relevance", "Lowest price", "Highest price"]}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>
      {filteredData.length === 0 ? (
        <p className="text-[#697586] text-center py-10">
          No products match your search. Try a different keyword.
        </p>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {filteredData.map((item) => (
            <ArrivalsCart
              key={item.slug}
              imageUrl={item.imageUrl}
              info={item.info}
              price={item.price}
              title={item.title}
              height={150}
              href={`/product/${item.slug}`}
            />
          ))}
        </div>
      )}
      <div className="self-center">
        <ArrowButton
          text="Show more"
          arrow="down"
          onClick={() =>
            setVisibleCount((count) =>
              Math.min(count + sourceProducts.length, sourceProducts.length * 2)
            )
          }
        />
      </div>
    </div>
  );
};

export default ShopCards;
