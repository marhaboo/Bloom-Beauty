"use client";
import CustomSelect from "@/features/custom-select/custom-select";
import React, { useMemo, useState } from "react";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import { products as allProducts } from "@/data/products";
import {
  ProductFilters,
  applyProductFilters,
  sortProducts,
} from "@/lib/product-filters";
import { ChevronDown } from "lucide-react";

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
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
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

    return sortProducts(items, sortBy);
  }, [sourceProducts, searchQuery, productFilters, sortBy]);

  const filteredData = filteredProducts.slice(0, visibleCount);

  const productCount = `${filteredProducts.length} ${
    filter === "bestsellers"
      ? "bestsellers"
      : filteredProducts.length === 1
        ? "product"
        : "products"
  }`;

  return (
    <div className="flex w-full flex-col gap-7 sm:gap-9">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-[#e9e3dc] pb-4">
        <p className="text-sm text-[#707970]">{productCount}</p>
        <div className="flex items-center gap-3">
          <label htmlFor="product-sort" className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#707970]">
            Sort
          </label>
          <CustomSelect
            ariaLabel="Sort products"
            options={["Relevance", "Lowest price", "Highest price"]}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>
      {filteredData.length === 0 ? (
        <p className="rounded-3xl border border-[#e9e3dc] bg-white/70 px-6 py-12 text-center text-[#707970]">
          No products match your search. Try a different keyword.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
      {visibleCount < filteredProducts.length && (
        <button
          type="button"
          onClick={() => setVisibleCount((count) => count + 6)}
          className="mx-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7d0c7] bg-white/70 px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#29352f] transition hover:border-[#20372e] hover:bg-[#20372e] hover:text-white"
        >
          Show more
          <ChevronDown className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ShopCards;
