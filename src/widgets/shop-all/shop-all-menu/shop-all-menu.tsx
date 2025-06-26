import { ChevronRight, Search, User, X } from "lucide-react";
import Link from "next/link";
import React from "react";

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
const ShopAllMob = ({ onClose }: MenuProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-white bg-opacity-100 overflow-auto">
      <div className="bg-[#F5A3B7] text-[24px] flex justify-between items-center font-semibold text-white p-5">
        <p>Menu</p>
        <X onClick={onClose} />
      </div>
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

        {menuItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex justify-between items-center"
            onClick={onClose}
          >
            <p>{label}</p>
            <ChevronRight className="text-[#BFB9CF]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopAllMob;
