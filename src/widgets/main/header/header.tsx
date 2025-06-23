"use client";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import { Menu, Search, ShoppingBasket, User } from "lucide-react";
import { useState } from "react";
import ShopAllOnHover from "../shop-all-on-hover/shop-all-on-hover";
import MenuMob from "../menu-mob/menu-mob";
export default function Header() {
  const [shopAll, setShop] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);
  // const [bestsellers, setBestsellers] = useState(false);
  return (
    <>
      <header className="flex bg-white justify-evenly py-4 items-center text-[#484848] ">
        <button
          className="flex flex-col   lg:hidden items-center"
          onClick={() => setMenu(!isMenuOpen)}
        >
          <Menu />
          <p className="text-[12px] font-normal">Menu</p>
        </button>
        <div>
          <Image alt="logo_bloom_beauty" src={logo} width={168} height={25} />
        </div>
        <nav className="hidden lg:block ">
          <ul className="flex space-x-6">
            <li
              onMouseEnter={() => setShop(true)}
              onMouseLeave={() => setShop(false)}
            >
              <Link className=" hover:text-[#F5A3B7] " href={"/shop-all"}>
                SHOP ALL
              </Link>{" "}
            </li>
            <li
            // onMouseEnter={() => setBestsellers(true)}
            // onMouseLeave={() => setBestsellers(false)}
            >
              <Link className=" hover:text-[#F5A3B7] " href={"/bestsellers"}>
                BESTSELLERS
              </Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#F5A3B7] " href={"/collection"}>
                COLLECTION
              </Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#F5A3B7] " href={"/about-us"}>
                ABOUT US
              </Link>{" "}
            </li>
            <li>
              <Link className=" hover:text-[#F5A3B7] " href={"/blog"}>
                BLOG
              </Link>{" "}
            </li>
          </ul>
        </nav>
        <div className="flex space-x-3 justify-center items-center gap-4 ">
          <div className="lg:flex flex-col hidden  justify-center items-center ">
            <Search className="w-6 h-6" />
            <p className="">SEARCH</p>
          </div>
          <div className="lg:flex hidden  flex-col justify-center items-center">
            <User className="w-6 h-6" />
            <p>ACCOUNT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ShoppingBasket className="w-6 h-6" />
            <p>CART</p>
          </div>
        </div>
      </header>
      {shopAll && <ShopAllOnHover />}
      {isMenuOpen && <MenuMob onClose={() => setMenu(false)} />}
    </>
  );
}
