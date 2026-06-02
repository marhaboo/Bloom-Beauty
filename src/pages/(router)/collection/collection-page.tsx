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
    <div className="bg-[#F9FAFC] flex flex-col gap-20 py-10 px-4 md:px-10">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <h1 className="text-[#383838] text-2xl md:text-3xl font-bold">
          COLLECTION
        </h1>
        <p className="text-[#697586] text-[16px]">
          Curated kits and routines designed to help your skin bloom naturally.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex text-[#383838] gap-5 flex-col-reverse md:flex-row">
          <div className="md:w-[50%] w-full justify-center gap-5 flex flex-col">
            <h2 className="md:text-[36px] text-[32px] font-medium">
              Blossom Glow Kit
            </h2>
            <p className="text-[#697586] text-[16px]">
              {collections[0].description}
            </p>
            <Button text="Shop Collection" href="/shop-all" />
          </div>
          <Image
            width={598}
            height={500}
            className="self-center"
            src={ImageProductShowcase}
            alt="Blossom Glow Kit"
          />
        </div>

        <div className="flex text-[#383838] gap-5 flex-col-reverse md:flex-row-reverse">
          <div className="md:w-[50%] w-full justify-center gap-5 flex flex-col">
            <h2 className="md:text-[36px] text-[32px] font-medium">
              Floral Essence Masks
            </h2>
            <p className="text-[#697586] text-[16px]">
              {collections[1].description}
            </p>
            <Button text="Shop Collection" href="/shop-all" />
          </div>
          <Image
            width={598}
            height={500}
            className="self-center"
            src={ImageProductShowcase_2}
            alt="Floral Essence Masks"
          />
        </div>
      </div>

      {collections.map((collection) => {
        const collectionProducts = products.filter((p) =>
          collection.productSlugs.includes(p.slug)
        );

        return (
          <section key={collection.slug} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <div>
                <h2 className="text-[#383838] text-xl font-semibold">
                  {collection.title}
                </h2>
                <p className="text-[#697586] text-sm">{collection.description}</p>
              </div>
              <Link
                href="/shop-all"
                className="text-[#F5A3B7] text-sm font-medium hover:underline"
              >
                View all products →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
    </div>
  );
};

export default CollectionPage;
