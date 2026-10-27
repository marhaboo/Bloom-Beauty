"use client";
import Button from "@/features/base-button/Button";
import PrimaryButtton from "@/features/primary-buttton/primary-buttton";
import { getProductBySlug, products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductDetailViewProps = {
  slug: string;
};

const ProductDetailView = ({ slug }: ProductDetailViewProps) => {
  const product = getProductBySlug(slug)!;

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <main className="min-h-[65vh] bg-[#fbf8f2] px-5 py-9 sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid items-center gap-8 rounded-[2rem] border border-[#eee8e0] bg-white/75 p-4 shadow-[0_30px_90px_-64px_rgba(32,55,46,0.42)] backdrop-blur-md sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
          <div className="overflow-hidden rounded-[1.5rem] bg-[#f5e8e4] sm:rounded-[1.75rem]">
            <Image
              src={product.imageUrl}
              alt={product.title}
              className="aspect-square w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-5 px-2 pb-3 sm:px-3 lg:py-5">
            <Link
              href="/shop-all"
              className="text-xs text-[#707970] transition-colors hover:text-[#a36e69]"
            >
              Shop all <span aria-hidden="true">/</span> {product.category}
            </Link>
            <span className="rounded-full border border-[#e9e3dc] bg-[#f7f2eb] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8e6e66]">
              {product.category}
            </span>
            <h1 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#20372e] sm:text-5xl">
              {product.title}
            </h1>
            <p className="text-base leading-7 text-[#707970]">{product.info}</p>
            <p className="font-serif text-2xl text-[#20372e]">{product.price}</p>
            <div className="w-full border-y border-[#e9e3dc] py-4 text-sm leading-6 text-[#707970]">
              Thoughtfully made for your everyday skincare ritual. Vegan,
              cruelty-free, and inspired by the care of nature.
            </div>
            <div className="flex w-full flex-col gap-3 pt-1 sm:flex-row">
              <PrimaryButtton
                text="Add to bag"
                href="/cart"
                classname="!max-w-none sm:!w-auto sm:!min-w-[180px]"
              />
              <Button
                text="Continue exploring"
                href="/shop-all"
                property="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 flex flex-col gap-6 sm:mt-20">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">
                Keep exploring
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#20372e]">
                You may also love
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/product/${item.slug}`}
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-[#e9e3dc] bg-white/70 p-3 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-20 w-20 rounded-[1rem] object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#20372e] transition-colors group-hover:text-[#a36e69]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[#707970]">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailView;
