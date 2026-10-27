"use client";
import ArrivalsCart from "@/features/new-arrivals/newArrivals";
import Button from "@/features/base-button/Button";
import { collections, products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageProductShowcase from "@/pages/(router)/(main)/images/IMAGE-1.png";
import ImageProductShowcase_2 from "@/pages/(router)/(main)/images/IMAGE.png";

const CollectionPage = () => {
  return (
    <main className="flex flex-col gap-16 bg-[#fbf8f2] px-5 py-10 sm:gap-24 sm:px-8 sm:py-14 lg:px-12">
      <header className="mx-auto flex max-w-2xl flex-col gap-3 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a36e69]">Made to bloom together</p>
        <h1 className="font-serif text-4xl tracking-[-0.03em] text-[#20372e] md:text-5xl">
          The collections
        </h1>
        <p className="text-sm leading-6 text-[#707970] sm:text-base">
          Curated kits and routines designed to help your skin bloom naturally.
        </p>
      </header>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 sm:gap-16">
        <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center gap-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">Daily radiance</p>
            <h2 className="font-serif text-3xl text-[#20372e] sm:text-4xl">
              Blossom Glow Kit
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[#707970] sm:text-base">
              {collections[0].description}
            </p>
            <Button text="Shop Collection" href="/shop-all" />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#f5e8e4]">
            <Image
              width={598}
              height={500}
              className="h-full max-h-[560px] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              src={ImageProductShowcase}
              alt="Blossom Glow Kit"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center gap-5 lg:order-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a36e69]">A little extra care</p>
            <h2 className="font-serif text-3xl text-[#20372e] sm:text-4xl">
              Floral Essence Masks
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[#707970] sm:text-base">
              {collections[1].description}
            </p>
            <Button text="Shop Collection" href="/shop-all" />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#f5e8e4] lg:order-1">
            <Image
              width={598}
              height={500}
              className="h-full max-h-[560px] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              src={ImageProductShowcase_2}
              alt="Floral Essence Masks"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>
      </div>

      {collections.map((collection) => {
        const collectionProducts = products.filter((p) =>
          collection.productSlugs.includes(p.slug)
        );

        return (
          <section key={collection.slug} className="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-serif text-2xl text-[#20372e] sm:text-3xl">
                  {collection.title}
                </h2>
                <p className="mt-1 text-sm text-[#707970]">{collection.description}</p>
              </div>
              <Link
                href="/shop-all"
                className="inline-flex min-h-10 items-center text-sm font-medium text-[#526258] transition-colors hover:text-[#a36e69]"
              >
                View all products →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {collectionProducts.map((product) => (
                <ArrivalsCart
                  key={product.slug}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  info={product.info}
                  price={product.price}
                  height={150}
                  href={`/product/${product.slug}`}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default CollectionPage;
