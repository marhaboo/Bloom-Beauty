"use client";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import { products } from "@/data/products";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

type AccountTab = "overview" | "addresses" | "orders" | "wishlist";

const tabItems = [
  { key: "overview" as const, label: "Overview" },
  { key: "addresses" as const, label: "Addresses" },
  { key: "orders" as const, label: "Order Status" },
  { key: "wishlist" as const, label: "Wishlist" },
];

const isValidTab = (value: string | null): value is AccountTab =>
  value === "overview" ||
  value === "addresses" ||
  value === "orders" ||
  value === "wishlist";

const AccountPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab") ?? null;
  const initialTab = isValidTab(tabParam) ? tabParam : "overview";
  const [tab, setTab] = useState<AccountTab>(initialTab);

  useEffect(() => {
    if (isValidTab(tabParam)) {
      setTab(tabParam);
    }
  }, [tabParam]);

  const selectTab = (key: AccountTab) => {
    setTab(key);
    router.replace(`/account?tab=${key}`, { scroll: false });
  };

  const wishlistProducts = products.slice(0, 4);

  return (
    <main className="min-h-[65vh] bg-[#fbf8f2] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 lg:flex-row lg:items-start">
      <nav className="flex h-fit flex-col gap-2 rounded-[1.5rem] border border-[#e9e3dc] bg-white/70 p-4 backdrop-blur-md lg:sticky lg:top-28 lg:w-72">
        <h1 className="px-3 pb-2 font-serif text-2xl text-[#20372e]">My account</h1>
        {tabItems.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => selectTab(item.key)}
            className={`min-h-11 cursor-pointer rounded-full px-4 py-3 text-left text-sm font-medium transition-all ${
              tab === item.key
                ? "bg-[#20372e] text-white shadow-sm"
                : "text-[#526258] hover:bg-[#f5e8e4] hover:text-[#20372e]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <section className="min-w-0 flex-1 rounded-[1.5rem] border border-[#e9e3dc] bg-white/75 p-5 text-[#20372e] backdrop-blur-md sm:p-8 lg:p-10">
        {tab === "overview" && (
          <div className="flex flex-col gap-4">
            <h2 className="border-b border-[#e9e3dc] pb-4 font-serif text-3xl">
              Welcome back
            </h2>
            <p className="max-w-2xl leading-6 text-[#707970]">
              Manage your orders, saved addresses, and wishlist from this
              dashboard. This is a demo account area for portfolio presentation.
            </p>
            <div className="grid gap-4 pt-4 md:grid-cols-3">
              <div className="rounded-[1.25rem] border border-[#e9e3dc] bg-[#fbf8f2] p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[#a36e69]">Recent order</p>
                <p className="font-medium">#BB-10482</p>
                <p className="text-sm text-[#707970]">Shipped · 2 items</p>
              </div>
              <div className="rounded-[1.25rem] border border-[#e9e3dc] bg-[#fbf8f2] p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[#a36e69]">Saved addresses</p>
                <p className="font-medium">2 locations</p>
              </div>
              <div className="rounded-[1.25rem] border border-[#e9e3dc] bg-[#fbf8f2] p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[#a36e69]">Wishlist</p>
                <p className="font-medium">{wishlistProducts.length} items</p>
              </div>
            </div>
          </div>
        )}

        {tab === "addresses" && (
          <div className="flex flex-col gap-6">
            <h2 className="border-b border-[#e9e3dc] pb-4 font-serif text-3xl">
              Addresses
            </h2>
            {[
              {
                label: "Home",
                line: "12 Blossom Street, Kyiv, Ukraine 01001",
                default: true,
              },
              {
                label: "Work",
                line: "48 Petal Avenue, Kyiv, Ukraine 03150",
                default: false,
              },
            ].map((address) => (
              <div
                key={address.label}
                className="flex flex-col gap-2 rounded-[1.25rem] border border-[#e9e3dc] p-5"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium">{address.label}</p>
                  {address.default && (
                    <span className="rounded-full bg-[#f5e8e4] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#8e6e66]">Default</span>
                  )}
                </div>
                <p className="text-sm text-[#707970]">{address.line}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "orders" && (
          <div className="flex flex-col gap-6">
            <h2 className="border-b border-[#e9e3dc] pb-4 font-serif text-3xl">
              Order Status
            </h2>
            {[
              {
                id: "#BB-10482",
                date: "May 28, 2026",
                status: "Shipped",
                total: "$60.00",
              },
              {
                id: "#BB-10311",
                date: "April 12, 2026",
                status: "Delivered",
                total: "$31.00",
              },
            ].map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-2 rounded-[1.25rem] border border-[#e9e3dc] p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-[#707970]">{order.date}</p>
                </div>
                <p className="font-medium text-[#a36e69]">{order.status}</p>
                <p className="font-medium">{order.total}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "wishlist" && (
          <div className="flex flex-col gap-6">
            <h2 className="border-b border-[#e9e3dc] pb-4 font-serif text-3xl">
              Wishlist
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {wishlistProducts.map((product) => (
                <ArrivalsCart
                  key={product.slug}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  info={product.info}
                  price={product.price}
                  href={`/product/${product.slug}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>
      </div>
    </main>
  );
};

const AccountPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] bg-[#fbf8f2] p-10 text-[#707970]">Loading account...</div>
      }
    >
      <AccountPageContent />
    </Suspense>
  );
};

export default AccountPage;
