"use client";
import FilterOverlay from "@/widgets/shop-all/filter-overlay/filter-overlay";
import ShopAllOverLay from "@/widgets/shop-all/shop-all-overlay/shop-all-overlay";
import ShopCards from "@/widgets/shop-all/shop-cards/shop-cards";
import React, { useState } from "react";
import {
  ProductFilters,
  emptyProductFilters,
} from "@/lib/product-filters";

type ProductCatalogLayoutProps = {
  title: string;
  filter?: "all" | "bestsellers";
  searchQuery?: string;
  hideSidebarOnSearch?: boolean;
};

const ProductCatalogLayout = ({
  title,
  filter = "all",
  searchQuery,
  hideSidebarOnSearch = false,
}: ProductCatalogLayoutProps) => {
  const [productFilters, setProductFilters] =
    useState<ProductFilters>(emptyProductFilters);

  const showSidebar = !hideSidebarOnSearch;

  return (
    <main className="min-h-[65vh] w-full bg-[#fbf8f2] py-8 sm:py-12 md:py-16">
      <div className="page-container">
        {hideSidebarOnSearch && searchQuery && (
          <p className="mb-6 text-sm text-[#707970]">
            Showing results for{" "}
            <span className="font-medium text-[#20372e]">&ldquo;{searchQuery}&rdquo;</span>
          </p>
        )}

        <div
          className={`flex flex-col gap-6 lg:gap-8 ${
            showSidebar ? "lg:flex-row lg:items-start" : ""
          }`}
        >
          {showSidebar && (
            <aside className="flex w-full shrink-0 flex-col gap-5 lg:w-[280px]">
              <div className="w-full overflow-hidden rounded-[1.5rem] border border-[#e9e3dc] bg-white/70 backdrop-blur-md">
                <h2 className="border-b border-[#e9e3dc] px-5 py-4 font-serif text-xl text-[#20372e] sm:text-2xl">
                  {title}
                </h2>
                <ShopAllOverLay />
              </div>
              <FilterOverlay onApply={setProductFilters} />
            </aside>
          )}

          <div className={`flex-1 min-w-0 ${!showSidebar ? "w-full" : ""}`}>
            {!showSidebar && (
              <h2 className="mb-7 font-serif text-3xl tracking-tight text-[#20372e] sm:text-4xl">
                {title}
              </h2>
            )}
            <ShopCards
              filter={filter}
              searchQuery={searchQuery}
              productFilters={productFilters}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCatalogLayout;
