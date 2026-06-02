"use client";
import SearchHero from "@/features/search-hero/search-hero";
import ProductCatalogLayout from "@/widgets/shop-all/product-catalog-layout/product-catalog-layout";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") ?? "";
  const [activeQuery, setActiveQuery] = useState(initialQuery);

  useEffect(() => {
    setActiveQuery(searchParams?.get("q") ?? "");
  }, [searchParams]);

  return (
    <div className="w-full min-h-screen bg-[#F9FAFC]">
      <SearchHero
        initialQuery={initialQuery}
        onSearch={setActiveQuery}
      />
      <ProductCatalogLayout
        title="Search Results"
        searchQuery={activeQuery}
        hideSidebarOnSearch
      />
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#F9FAFC] min-h-[50vh] flex items-center justify-center text-[#697586]">
          Loading search...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
