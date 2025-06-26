"use client";
import ShopAllOverLay from "@/widgets/shop-all/shop-all-overlay/shop-all-overlay";
import { ChevronRight, Search, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  { label: "Shop All", href: "/shop-all" },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "Collection", href: "/collection" },
  { label: "About us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

type MenuProps = {
  onClose: () => void;
};
const MenuMob = ({ onClose }: MenuProps) => {
  const [isShopAll, setShopAll] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-white bg-opacity-100 overflow-hidden">
      <div className="bg-[#F5A3B7] text-[24px] flex justify-between items-center font-semibold text-white p-5">
        {!isShopAll ? (
          <p>Menu</p>
        ) : (
          <p onClick={() => setShopAll(!isShopAll)}>
            {" "}
            <span className="text-3xl">←</span> Shop All
          </p>
        )}
        <X onClick={onClose} />
      </div>
      {!isShopAll && (
        <>
          <div className="flex text-[16px] gap-5 p-5 pr-10 text-[#383838] font-medium flex-col">
            {[
              { icon: <Search />, label: "Search", href: "/search" },
              { icon: <User />, label: "Account", href: "/account" },
            ].map(({ icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex gap-2.5 items-center"
                onClick={onClose}
              >
                {icon}
                <p>{label}</p>
              </Link>
            ))}

            {menuItems.map(({ label, href }) => {
              const isShopAllItem = label === "Shop All";

              return isShopAllItem ? (
                <div
                  key={label}
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setShopAll(true)}
                >
                  <p className="hover:text-[#F5A3B7]">{label}</p>
                  <ChevronRight className="text-[#BFB9CF]" />
                </div>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="flex justify-between items-center"
                  onClick={onClose}
                >
                  <p>{label}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
      {isShopAll && <ShopAllOverLay />}
    </div>
  );
};

export default MenuMob;
