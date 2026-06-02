import Button from "@/features/base-button/Button";
import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="bg-[#F9FAFC] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl p-8 md:p-12 text-[#383838] flex flex-col gap-6 text-center">
        <h1 className="text-2xl font-bold">Thank you for your order</h1>
        <p className="text-[#697586]">
          This is a portfolio demo checkout. Your cart items were not charged.
          In a production store, payment and order confirmation would appear
          here.
        </p>
        <p className="text-sm text-[#BFB9CF]">Order reference: #BB-DEMO-2026</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button text="Continue Shopping" href="/shop-all" />
          <Link
            href="/account?tab=orders"
            className="text-[#F5A3B7] font-medium self-center hover:underline"
          >
            View order status →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
