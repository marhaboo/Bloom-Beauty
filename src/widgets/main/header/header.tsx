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

  return (
    <>
      <div className="relative z-40">
      <header className="sticky top-0 w-full bg-white border-b border-[#DFE1E3]/60 px-4 sm:px-6 lg:px-10 py-3 sm:py-4 text-[#484848]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            className="flex flex-col lg:hidden items-center shrink-0"
            onClick={() => setMenu(!isMenuOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
            <p className="text-[10px] sm:text-[12px] font-normal">Menu</p>
          </button>

          <Link href="/" className="flex items-center shrink-0 mx-auto lg:mx-0">
            <Image
              alt="logo_bloom_beauty"
              src={logo}
              width={168}
              height={25}
              className="w-[120px] sm:w-[140px] lg:w-[168px] h-auto"
            />
          </Link>

          <nav className="hidden lg:block flex-1 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-5 xl:gap-x-6 text-sm">
              <li
                onMouseEnter={() => setShop(true)}
                onMouseLeave={() => setShop(false)}
              >
                <Link className="hover:text-[#F5A3B7]" href="/shop-all">
                  SHOP ALL
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F5A3B7]" href="/bestsellers">
                  BESTSELLERS
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F5A3B7]" href="/collection">
                  COLLECTION
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F5A3B7]" href="/about-us">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F5A3B7]" href="/blog">
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/search"
              className="lg:hidden flex flex-col items-center hover:text-[#F5A3B7]"
              aria-label="Search"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="/search"
              className="hidden lg:flex cursor-pointer flex-col hover:text-[#F5A3B7] items-center text-xs"
            >
              <Search className="w-6 h-6" />
              <p>SEARCH</p>
            </Link>
            <Link
              href="/account"
              className="hidden lg:flex cursor-pointer hover:text-[#F5A3B7] flex-col items-center text-xs"
            >
              <User className="w-6 h-6" />
              <p>ACCOUNT</p>
            </Link>
            <Link
              href="/cart"
              className="flex flex-col cursor-pointer hover:text-[#F5A3B7] items-center text-xs"
            >
              <ShoppingBasket className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="hidden sm:block">CART</p>
            </Link>
          </div>
        </div>
      </header>

      {shopAll && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-[#DFE1E3]/60 shadow-sm"
          onMouseEnter={() => setShop(true)}
          onMouseLeave={() => setShop(false)}
        >
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <ShopAllOnHover />
          </div>
        </div>
      )}
      </div>

      {isMenuOpen && <MenuMob onClose={() => setMenu(false)} />}
    </>
  );
}
