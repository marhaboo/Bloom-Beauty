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
    <div className="bg-[#F9FAFC] min-h-screen py-10 px-4 md:px-10">
      <h1 className="text-[#383838] text-2xl font-bold mb-8">Your Cart</h1>

      {lines.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center flex flex-col gap-4 items-center">
          <p className="text-[#697586]">Your cart is empty.</p>
          <Button text="Continue Shopping" href="/shop-all" />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-4">
            {lines.map((line) => (
              <div
                key={line.productSlug}
                className="bg-white rounded-xl p-4 flex gap-4 items-center"
              >
                <Image
                  src={line.product.imageUrl}
                  alt={line.product.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <Link
                    href={`/product/${line.product.slug}`}
                    className="font-medium hover:text-[#F5A3B7]"
                  >
                    {line.product.title}
                  </Link>
                  <p className="text-sm text-[#697586]">{line.product.info}</p>
                  <p className="font-medium">{line.product.price}</p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productSlug, -1)}
                      className="border border-[#DFE1E3] w-8 h-8 rounded"
                    >
                      −
                    </button>
                    <span>{line.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productSlug, 1)}
                      className="border border-[#DFE1E3] w-8 h-8 rounded"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(line.productSlug)}
                      className="text-sm text-[#697586] ml-2 hover:text-[#F5A3B7]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="bg-white rounded-xl p-6 h-fit w-full lg:w-80 flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Order Summary</h2>
            <div className="flex justify-between text-[#697586]">
              <span>Subtotal</span>
              <span>{subtotal}</span>
            </div>
            <div className="flex justify-between text-[#697586]">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between font-medium border-t border-[#DFE1E3] pt-4">
              <span>Total</span>
              <span>{subtotal}</span>
            </div>
            <PrimaryButtton text="Checkout" classname="w-full" href="/checkout" />
            <Link
              href="/shop-all"
              className="text-center text-sm text-[#F5A3B7] hover:underline"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
