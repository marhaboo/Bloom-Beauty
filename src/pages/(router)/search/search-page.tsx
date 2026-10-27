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
    <div className="min-h-screen w-full bg-[#fbf8f2]">
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
        <div className="flex min-h-[50vh] items-center justify-center bg-[#fbf8f2] text-[#707970]">
          Loading search...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
