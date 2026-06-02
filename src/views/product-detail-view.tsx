"use client";
import Button from "@/features/base-button/Button";
import PrimaryButtton from "@/features/primary-buttton/primary-buttton";
import { getProductBySlug, products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type ProductDetailViewProps = {
  slug: string;
};

const ProductDetailView = ({ slug }: ProductDetailViewProps) => {
  const product = getProductBySlug(slug)!;
  const [rating, setRating] = useState(4);

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="bg-[#F9FAFC] py-10 px-4 md:px-10 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-xl p-6 md:p-10">
        <Image
          src={product.imageUrl}
          alt={product.title}
          className="w-full md:w-[45%] h-auto object-cover rounded"
        />
        <div className="flex flex-col gap-4 text-[#383838] flex-1">
          <p className="text-[#BFB9CF] text-sm">{product.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <div className="rating flex gap-1">
            <span className="text-[#697586]">({rating})</span>
            {[5, 4, 3, 2, 1].map((value) => (
              <span
                key={value}
                onClick={() => setRating(value)}
                className={`text-xl cursor-pointer rating_item ${
                  value <= rating ? "text-[#ffa500]" : "text-[#DFE1E3]"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-[#697586]">{product.info}</p>
          <p className="text-xl font-medium">{product.price}</p>
          <p className="text-sm text-[#697586]">
            Vegan, cruelty-free, and formulated with naturally inspired
            ingredients for everyday radiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <PrimaryButtton text="Add to bag" href="/cart" classname="w-full sm:w-auto" />
            <Button text="Back to Shop" href="/shop-all" property="w-full sm:w-auto" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="flex flex-col gap-6">
          <h2 className="text-[#383838] text-xl font-semibold">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/product/${item.slug}`}
                className="bg-white rounded-xl p-4 flex gap-4 items-center hover:shadow-sm transition"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-[#697586]">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailView;
