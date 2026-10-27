"use client";

import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingBasket,
  UserRound,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import ShopAllOnHover from "../shop-all-on-hover/shop-all-on-hover";
import MenuMob from "../menu-mob/menu-mob";

const navigation = [
  { label: "Shop all", href: "/shop-all", hasMenu: true },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "Collections", href: "/collection" },
  { label: "Our story", href: "/about-us" },
  { label: "Journal", href: "/blog" },
];

export default function Header() {
  const [shopAll, setShop] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);
  const closeMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openShopMenu = () => {
    if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current);
    setShop(true);
  };

  const scheduleShopMenuClose = () => {
    if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current);
    closeMenuTimer.current = setTimeout(() => setShop(false), 180);
  };

  return (
    <>
      <div className="sticky top-0 z-40">
        <header className="w-full border-b border-[#e9e3dc] bg-[#fffdf9]/95 px-4 text-[#29332e] backdrop-blur-md sm:px-6 lg:px-10">
          <div className="mx-auto grid h-[66px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center sm:h-[76px] lg:grid-cols-[auto_1fr_auto]">
            <button
              type="button"
              className="flex min-h-11 w-fit items-center gap-2 text-[#29332e] transition-colors hover:text-[#a36e69] lg:hidden"
              onClick={() => setMenu((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-xs font-medium uppercase tracking-[0.1em]">
                Menu
              </span>
            </button>

            <Link
              href="/"
              className="col-start-2 flex shrink-0 items-center justify-center lg:col-start-1 lg:justify-start"
            >
              <Image
                alt="Bloom Beauty home"
                src={logo}
                width={168}
                height={25}
                className="h-auto w-[120px] sm:w-[140px] lg:w-[168px]"
              />
            </Link>

            <nav aria-label="Main navigation" className="hidden lg:flex lg:justify-center">
              <ul className="flex items-center gap-6 xl:gap-9">
                {navigation.map((item) => (
                  <li
                    key={item.label}
                    onMouseEnter={item.hasMenu ? openShopMenu : undefined}
                    onMouseLeave={item.hasMenu ? scheduleShopMenuClose : undefined}
                  >
                    <Link
                      className="group inline-flex min-h-12 items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] transition-colors hover:text-[#b76e78] xl:text-[13px]"
                      href={item.href}
                      onClick={() => item.hasMenu && setShop(false)}
                      aria-haspopup={item.hasMenu ? "true" : undefined}
                      aria-expanded={item.hasMenu ? shopAll : undefined}
                    >
                      {item.label}
                      {item.hasMenu && (
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${shopAll ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="col-start-3 flex items-center justify-end gap-3 sm:gap-4 lg:gap-5">
              <Link
                href="/search"
                className="flex min-h-11 min-w-8 items-center justify-center transition-colors hover:text-[#a36e69]"
                aria-label="Search"
              >
                <Search className="h-5 w-5" strokeWidth={1.6} />
              </Link>
              <Link
                href="/account"
                className="hidden min-h-11 min-w-8 items-center justify-center transition-colors hover:text-[#a36e69] lg:flex"
                aria-label="Account"
              >
                <UserRound className="h-5 w-5" strokeWidth={1.6} />
              </Link>
              <Link
                href="/cart"
                className="flex min-h-11 min-w-8 items-center justify-center transition-colors hover:text-[#a36e69]"
                aria-label="Shopping bag"
              >
                <ShoppingBasket className="h-5 w-5" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </header>

        {shopAll && (
          <div
            className="absolute left-0 right-0 top-full hidden border-b border-[#e5ddd2] bg-[#fffdf9]/95 shadow-[0_20px_40px_-28px_rgba(36,72,63,0.5)] backdrop-blur-xl lg:block"
            onMouseEnter={openShopMenu}
            onMouseLeave={scheduleShopMenuClose}
            onClick={(event) => {
              if (event.target instanceof Element && event.target.closest("a")) {
                setShop(false);
              }
            }}
          >
            <div className="mx-auto max-w-[1440px] px-6">
              <ShopAllOnHover />
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && <MenuMob onClose={() => setMenu(false)} />}
    </>
  );
}
