"use client";

import ShopAllOverLay from "@/widgets/shop-all/shop-all-overlay/shop-all-overlay";
import { ArrowRight, ChevronLeft, ChevronRight, Search, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Shop all", href: "/shop-all", hasMenu: true },
  { label: "Bestsellers", href: "/bestsellers" },
  { label: "Collections", href: "/collection" },
  { label: "Our story", href: "/about-us" },
  { label: "Journal", href: "/blog" },
];

type MenuProps = {
  onClose: () => void;
};

const MenuMob = ({ onClose }: MenuProps) => {
  const [isShopAll, setShopAll] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-[#1f2c26]/45 backdrop-blur-[2px]"
      />
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label={isShopAll ? "Shop all categories" : "Main menu"}
        className="mobile-menu-panel absolute inset-y-0 left-0 flex w-[min(88vw,420px)] flex-col overflow-y-auto bg-[#fffdf9] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#e9e3dc] px-5 py-4">
          {isShopAll ? (
            <button
              type="button"
              onClick={() => setShopAll(false)}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-[#526258]"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to menu
            </button>
          ) : (
            <div>
              <p className="font-serif text-2xl tracking-tight text-[#20372e]">bloom</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#95636b]">
                Beauty, naturally
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9e3dc] text-[#29352f] transition-colors hover:bg-[#f5e8e4]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isShopAll ? (
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <p className="mb-5 font-serif text-2xl text-[#20372e]">Shop by ritual</p>
            <ShopAllOverLay onNavigate={onClose} />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 px-5 py-5">
              <Link
                href="/search"
                onClick={onClose}
                className="flex min-h-12 items-center gap-2 rounded-sm border border-[#e9e3dc] px-3 text-xs font-medium text-[#526258] transition-colors hover:border-[#b7a99a]"
              >
                <Search className="h-4 w-4" strokeWidth={1.6} />
                Search
              </Link>
              <Link
                href="/account"
                onClick={onClose}
                className="flex min-h-12 items-center gap-2 rounded-sm border border-[#e9e3dc] px-3 text-xs font-medium text-[#526258] transition-colors hover:border-[#b7a99a]"
              >
                <UserRound className="h-4 w-4" strokeWidth={1.6} />
                Account
              </Link>
            </div>

            <nav aria-label="Mobile navigation" className="px-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#95636b]">
                Discover
              </p>
              <ul className="divide-y divide-[#e9e3dc] border-y border-[#e9e3dc]">
                {menuItems.map((item, index) => (
                  <li key={item.label}>
                    {item.hasMenu ? (
                      <button
                        type="button"
                        onClick={() => setShopAll(true)}
                        className="flex min-h-[58px] w-full items-center justify-between text-left font-serif text-xl text-[#29352f] transition-colors hover:text-[#a36e69]"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-[#9b6b66]" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex min-h-[58px] items-center justify-between font-serif text-xl text-[#29352f] transition-colors hover:text-[#a36e69]"
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] font-sans tracking-[0.1em] text-[#b7a99a]">
                          0{index + 1}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto bg-[#f5e8e4] px-5 py-5">
              <p className="font-serif text-lg text-[#29352f]">A softer kind of skincare.</p>
              <p className="mt-1 text-sm leading-6 text-[#66756d]">
                Thoughtful little rituals, made to feel like you.
              </p>
              <Link
                href="/shop-all"
                onClick={onClose}
                className="mt-4 inline-flex min-h-10 items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-[#263f36]"
              >
                Find your ritual
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default MenuMob;
