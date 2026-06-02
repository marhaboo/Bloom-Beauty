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
    <div className="bg-[#F7F6F8] min-h-screen p-4 md:p-10 flex flex-col lg:flex-row gap-6">
      <nav className="bg-white rounded-xl p-4 lg:w-72 flex flex-col gap-2 lg:sticky lg:top-10 h-fit">
        <h1 className="text-[#383838] text-xl font-bold px-2 pb-2">My Account</h1>
        {tabItems.map((item) => (
          <button
            key={item.key}
            onClick={() => selectTab(item.key)}
            className={`cursor-pointer text-left px-4 py-3 rounded-lg font-medium transition-all ${
              tab === item.key
                ? "text-[#F5A3B7] bg-pink-50 border-l-4 border-[#F5A3B7]"
                : "text-black hover:text-[#F5A3B7] hover:bg-pink-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <section className="flex-1 bg-white rounded-xl p-6 md:p-10 text-[#383838]">
        {tab === "overview" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold border-b border-[#97a3b0] pb-4">
              Welcome back
            </h2>
            <p className="text-[#697586]">
              Manage your orders, saved addresses, and wishlist from this
              dashboard. This is a demo account area for portfolio presentation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="border border-[#DFE1E3] rounded p-4">
                <p className="text-[#BFB9CF] text-sm">Recent order</p>
                <p className="font-medium">#BB-10482</p>
                <p className="text-sm text-[#697586]">Shipped · 2 items</p>
              </div>
              <div className="border border-[#DFE1E3] rounded p-4">
                <p className="text-[#BFB9CF] text-sm">Saved addresses</p>
                <p className="font-medium">2 locations</p>
              </div>
              <div className="border border-[#DFE1E3] rounded p-4">
                <p className="text-[#BFB9CF] text-sm">Wishlist</p>
                <p className="font-medium">{wishlistProducts.length} items</p>
              </div>
            </div>
          </div>
        )}

        {tab === "addresses" && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold border-b border-[#97a3b0] pb-4">
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
                className="border border-[#DFE1E3] rounded p-4 flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium">{address.label}</p>
                  {address.default && (
                    <span className="text-xs text-[#F5A3B7]">Default</span>
                  )}
                </div>
                <p className="text-[#697586] text-sm">{address.line}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "orders" && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold border-b border-[#97a3b0] pb-4">
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
                className="border border-[#DFE1E3] rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-[#697586]">{order.date}</p>
                </div>
                <p className="text-[#F5A3B7] font-medium">{order.status}</p>
                <p className="font-medium">{order.total}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "wishlist" && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold border-b border-[#97a3b0] pb-4">
              Wishlist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
  );
};

const AccountPage = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#F7F6F8] p-10 text-[#697586]">Loading account...</div>
      }
    >
      <AccountPageContent />
    </Suspense>
  );
};

export default AccountPage;
