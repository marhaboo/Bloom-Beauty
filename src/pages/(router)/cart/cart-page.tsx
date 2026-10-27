"use client";
import Button from "@/features/base-button/Button";
import PrimaryButtton from "@/features/primary-buttton/primary-buttton";
import {
  defaultCartItems,
  formatCartSubtotal,
  resolveCartItems,
} from "@/data/cart";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const CartPage = () => {
  const [items, setItems] = useState(defaultCartItems);

  const lines = useMemo(() => resolveCartItems(items), [items]);
  const subtotal = formatCartSubtotal(lines);

  const updateQuantity = (slug: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.productSlug === slug
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.productSlug !== slug));
  };

  return (
    <main className="min-h-[65vh] bg-[#fbf8f2] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
      <div className="mb-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">Your little rituals</p>
        <h1 className="mt-2 font-serif text-4xl text-[#20372e]">Shopping bag</h1>
      </div>

      {lines.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-[#e9e3dc] bg-white/70 p-10 text-center backdrop-blur-md">
          <p className="text-[#707970]">Your shopping bag is waiting for something lovely.</p>
          <Button text="Continue Shopping" href="/shop-all" />
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex flex-1 flex-col gap-4">
            {lines.map((line) => (
              <div
                key={line.productSlug}
                className="flex items-center gap-4 rounded-[1.5rem] border border-[#e9e3dc] bg-white/75 p-4 backdrop-blur-md sm:gap-6 sm:p-5"
              >
                <Image
                  src={line.product.imageUrl}
                  alt={line.product.title}
                  className="h-20 w-20 rounded-[1rem] object-cover sm:h-28 sm:w-28 sm:rounded-[1.25rem]"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <Link
                    href={`/product/${line.product.slug}`}
                    className="font-medium text-[#20372e] transition-colors hover:text-[#a36e69]"
                  >
                    {line.product.title}
                  </Link>
                  <p className="text-xs text-[#707970] sm:text-sm">{line.product.info}</p>
                  <p className="text-sm font-semibold text-[#20372e]">{line.product.price}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productSlug, -1)}
                      aria-label={`Decrease ${line.product.title} quantity`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e3dc] transition hover:bg-[#f5e8e4]"
                    >
                      −
                    </button>
                    <span>{line.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productSlug, 1)}
                      aria-label={`Increase ${line.product.title} quantity`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e3dc] transition hover:bg-[#f5e8e4]"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(line.productSlug)}
                      className="ml-1 text-xs text-[#707970] transition-colors hover:text-[#a36e69]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="flex h-fit w-full flex-col gap-4 rounded-[1.5rem] border border-[#e9e3dc] bg-white/75 p-6 backdrop-blur-md lg:sticky lg:top-28 lg:w-[340px]">
            <h2 className="font-serif text-2xl text-[#20372e]">Order summary</h2>
            <div className="flex justify-between text-sm text-[#707970]">
              <span>Subtotal</span>
              <span>{subtotal}</span>
            </div>
            <div className="flex justify-between gap-3 text-sm text-[#707970]">
              <span>Shipping</span>
              <span className="text-right">Calculated at checkout</span>
            </div>
            <div className="flex justify-between border-t border-[#e9e3dc] pt-4 font-medium">
              <span>Total</span>
              <span>{subtotal}</span>
            </div>
            <PrimaryButtton text="Continue to checkout" classname="!max-w-none" href="/checkout" />
            <Link
              href="/shop-all"
              className="text-center text-sm text-[#707970] transition-colors hover:text-[#a36e69]"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
      </div>
    </main>
  );
};

export default CartPage;
