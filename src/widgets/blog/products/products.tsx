"use client";
import React from "react";
import BlogProducts from "@/features/blog-products/blog-products";
import ArrowButton from "@/features/arrow-button/arrow-button";
import Pagination from "@/features/paginations/paginations";

// Картинки
import Coconut from "./images/IMAGE.png";
import Cream from "./images/IMAGE-1.png";
import GirlWithCream from "./images/IMAGE-2.png";
import GirlFace from "./images/IMAGE-3.png";

// Данные постов
const posts = [
  {
    photoSrc: Coconut,
    data: "January 20, 2023",
    title: "Cracking the Coconut Code",
    info: `Few ingredients have been debated as much in recent years as coconut oil. Is it or is it not the “miracle product” so many claim it to be? We answer: Like anything, it depends. One of our newest brands, Solved Skincare, puts coconut oil front and center, so we wanted to give you the facts to decide how your specific skin type can reap its rewards.
Keep reading below as we take a deep dive into the ‘nut.`,
    hashtags: ["Tips", "AntiAging", "Ingridients", "Organig", "EcoFriendly"],
  },
  {
    photoSrc: Cream,
    property: "flex-row-reverse",
    data: "January 19, 2023",
    title: "Bloom Beauty Best of 2023",
    info: `Can you believe we’re here? Another year is wrapping up and we’re feeling celebratory, wanting to share our list for the best products of 2023.
There are so many ways to categorize what is already a collection of our favorite brands , but ultimately we decided that by focusing on HOW CLEAN THE INGREDIENTS ARE, and HOW EFFECTIVE THE FORMULAS, you’ll be able to find something streamlined for glowing skin success.`,
    hashtags: ["GreatGift", "EcoFriendly", "Compilation"],
  },
  {
    photoSrc: GirlWithCream,
    data: "January 12, 2023",
    title: "7 Skincare Habits to Break Now",
    info: `Great skincare is a long game—it doesn’t happen overnight, but little steps are made (nightly!) to get and keep your skin at its most radiant state. Today, we are uncovering some of our top small but powerful habits that can make a world of difference with your skin.
You do not need to focus on all seven immediately, so take heart. Use this as a checklist. If your skincare has stalled, then it might be time to stop these.`,
    hashtags: ["Tips", "EcoFriendly", "SkinHealth"],
  },
  {
    photoSrc: GirlFace,
    property: "flex-row-reverse",
    data: "January 10, 2023",
    title: "Getting Your Skin Care Back on Track",
    info: `With so many novel and ever-changing concerns occupying precious brain space lately, you’re forgiven if maintaining a multi-step skincare routine hasn’t been at the top of your list. Add to that list stress, poor sleep and higher sugar or junk food intake, and right now your skin is probably in need of a little (or a major) reset.
You’ve come to the right place! To get back into a rhythm with your skincare routine, we’re sharing our favorite “start here” tips below.`,
    hashtags: ["Tips", "Ingredients", "Compilation", "AntiAging"],
  },
];

const Products = () => {
  return (
    <div className="flex flex-col gap-10  py-20">
      {posts.map((post, ind) => (
        <BlogProducts key={ind} {...post} />
      ))}
      <ArrowButton text="Show More" arrow="down" />
      <Pagination  />
    </div>
  );
};

export default Products;
