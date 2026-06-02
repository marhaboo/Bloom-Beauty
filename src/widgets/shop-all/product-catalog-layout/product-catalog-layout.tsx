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
    <div className="w-full bg-[#F9FAFC] py-8 sm:py-10 md:py-12">
      <div className="page-container">
        {hideSidebarOnSearch && searchQuery && (
          <p className="text-[#697586] text-sm mb-6 text-center sm:text-left">
            Showing results for{" "}
            <span className="text-[#383838] font-medium">&ldquo;{searchQuery}&rdquo;</span>
          </p>
        )}

        <div
          className={`flex flex-col gap-6 lg:gap-8 ${
            showSidebar ? "lg:flex-row lg:items-start" : ""
          }`}
        >
          {showSidebar && (
            <aside className="flex flex-col gap-6 w-full lg:w-[289px] shrink-0">
              <div className="bg-white w-full rounded-xl border border-[#DFE1E3]/60 overflow-hidden">
                <h2 className="font-semibold p-4 text-xl sm:text-2xl text-[#383838] border-b border-[#DFE1E3]/60">
                  {title}
                </h2>
                <ShopAllOverLay />
              </div>
              <FilterOverlay onApply={setProductFilters} />
            </aside>
          )}

          <div className={`flex-1 min-w-0 ${!showSidebar ? "w-full" : ""}`}>
            {!showSidebar && (
              <h2 className="font-semibold text-xl sm:text-2xl text-[#383838] mb-6 text-center sm:text-left">
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
    </div>
  );
};

export default ProductCatalogLayout;
