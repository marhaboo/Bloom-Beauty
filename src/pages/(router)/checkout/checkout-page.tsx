import Button from "@/features/base-button/Button";
import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#fbf8f2] px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 rounded-[2rem] border border-[#e9e3dc] bg-white/75 p-8 text-center shadow-[0_30px_90px_-64px_rgba(32,55,46,0.42)] backdrop-blur-md sm:p-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5e8e4] text-[#a36e69]">
          <span aria-hidden="true" className="font-serif text-2xl">b</span>
        </span>
        <h1 className="font-serif text-3xl text-[#20372e] sm:text-4xl">Thank you for your order</h1>
        <p className="max-w-lg text-sm leading-6 text-[#707970] sm:text-base">
          This is a portfolio demo checkout. Your cart items were not charged.
          In a production store, payment and order confirmation would appear
          here.
        </p>
        <p className="rounded-full bg-[#f7f2eb] px-4 py-2 text-xs text-[#707970]">Order reference: #BB-DEMO-2026</p>
        <div className="flex w-full flex-col justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
          <Button text="Continue shopping" href="/shop-all" />
          <Link
            href="/account?tab=orders"
            className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-[#526258] transition hover:bg-[#f5e8e4]"
          >
            View order status
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
