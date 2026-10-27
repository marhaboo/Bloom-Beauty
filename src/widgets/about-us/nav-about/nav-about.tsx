"use client";

import React, { useEffect, useState } from "react";
import TabAbout from "../tab-about/tab-about";
import { useRouter, useSearchParams } from "next/navigation";

type TabKey = "sh-returns" | "about-us" | "contact-us" | "faqs";

const isValidTab = (value: string | null): value is TabKey =>
  value === "sh-returns" ||
  value === "about-us" ||
  value === "contact-us" ||
  value === "faqs";

const navItems = [
  { key: "about-us" as const, label: "About us" },
  { key: "sh-returns" as const, label: "Shipping & returns" },
  { key: "contact-us" as const, label: "Contact us" },
  { key: "faqs" as const, label: "FAQs" },
];

const NavAbout = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab") ?? null;
  const [tabName, setTabName] = useState<TabKey>(
    isValidTab(tabParam) ? tabParam : "about-us",
  );

  useEffect(() => {
    if (isValidTab(tabParam)) setTabName(tabParam);
  }, [tabParam]);

  const selectTab = (key: TabKey) => {
    setTabName(key);
    router.replace(`/about-us?tab=${key}`, { scroll: false });
  };

  return (
    <main className="min-h-[65vh] bg-[#fbf8f2] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">
            A note from Bloom
          </p>
          <h1 className="mt-2 font-serif text-4xl tracking-[-0.03em] text-[#20372e]">
            Here for you
          </h1>
        </header>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <nav
            aria-label="About Bloom"
            className="w-full overflow-x-auto rounded-[1.5rem] border border-[#e9e3dc] bg-white/70 p-3 backdrop-blur-md lg:sticky lg:top-28 lg:flex lg:h-fit lg:w-72 lg:flex-col lg:gap-2 lg:p-4"
          >
            <div className="flex min-w-max gap-2 lg:flex-col">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  aria-current={tabName === item.key ? "page" : undefined}
                  onClick={() => selectTab(item.key)}
                  className={`min-h-10 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all lg:min-h-11 lg:text-sm ${
                    tabName === item.key
                      ? "bg-[#20372e] text-white"
                      : "text-[#526258] hover:bg-[#f5e8e4] hover:text-[#20372e]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
          <div className="min-w-0 w-full flex-1">
            <TabAbout tabName={tabName} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NavAbout;
