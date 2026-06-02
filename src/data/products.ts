import { StaticImageData } from "next/image";
import Clarifying from "@/widgets/shop-all/shop-cards/images/img.png";
import ClayMask from "@/widgets/shop-all/shop-cards/images/img copy.png";
import SilkFeel from "@/widgets/shop-all/shop-cards/images/img-1.png";
import CloudJelly from "@/widgets/shop-all/shop-cards/images/img-2.png";
import Innisfree2 from "@/widgets/shop-all/shop-cards/images/img-3.png";
import Hyaluronic from "@/widgets/shop-all/shop-cards/images/img-1 copy.png";
import Innisfree from "@/widgets/shop-all/shop-cards/images/img-2 copy.png";
import SoyMask from "@/widgets/shop-all/shop-cards/images/img-3 copy.png";

export type Product = {
  slug: string;
  imageUrl: StaticImageData;
  title: string;
  price: string;
  priceValue: number;
  info: string;
  isBestseller: boolean;
  collection?: string;
  category: string;
};

export const products: Product[] = [
  {
    slug: "cloud-jelly",
    imageUrl: CloudJelly,
    title: "Cloud Jelly",
    price: "$31",
    priceValue: 31,
    info: "Lightweight hydrating jelly",
    isBestseller: true,
    collection: "hydration",
    category: "Moisturizers",
  },
  {
    slug: "clarifying-emulsion",
    imageUrl: Clarifying,
    title: "Clarifying Emulsion",
    price: "$29",
    priceValue: 29,
    info: "Gentle emulsion for daily cleansing",
    isBestseller: true,
    collection: "glow",
    category: "Cleansers",
  },
  {
    slug: "clay-mask-2x",
    imageUrl: ClayMask,
    title: "Clay Mask 2X",
    price: "$34",
    priceValue: 34,
    info: "Deep pore-clearing clay mask",
    isBestseller: false,
    collection: "masks",
    category: "Masks",
  },
  {
    slug: "silk-feel-lotion",
    imageUrl: SilkFeel,
    title: "Silk Feel Lotion",
    price: "$27",
    priceValue: 27,
    info: "Smooth texture with silk protein",
    isBestseller: true,
    collection: "hydration",
    category: "Moisturizers",
  },
  {
    slug: "innisfree-green-tea",
    imageUrl: Innisfree2,
    title: "Innisfree Green Tea",
    price: "$25",
    priceValue: 25,
    info: "Refreshing toner with green tea",
    isBestseller: true,
    collection: "glow",
    category: "Toners",
  },
  {
    slug: "hyaluronic-acid",
    imageUrl: Hyaluronic,
    title: "Hyaluronic Acid",
    price: "$38",
    priceValue: 38,
    info: "Boost moisture retention",
    isBestseller: false,
    collection: "hydration",
    category: "Serums",
  },
  {
    slug: "innisfree-brightening",
    imageUrl: Innisfree,
    title: "Innisfree Brightening",
    price: "$30",
    priceValue: 30,
    info: "Vitamin C + Jeju cherry blossom",
    isBestseller: true,
    collection: "glow",
    category: "Serums",
  },
  {
    slug: "soy-mask",
    imageUrl: SoyMask,
    title: "Soy Mask",
    price: "$36",
    priceValue: 36,
    info: "Fermented soybean bio cellulose mask",
    isBestseller: false,
    collection: "masks",
    category: "Masks",
  },
];

export const collections = [
  {
    slug: "blossom-glow-kit",
    title: "Blossom Glow Kit",
    description:
      "Reveal your skin's natural glow with nourishing body and face creams with lotus extract.",
    productSlugs: ["cloud-jelly", "silk-feel-lotion", "innisfree-brightening"],
  },
  {
    slug: "floral-essence-masks",
    title: "Floral Essence Masks",
    description:
      "A curated set of flower-infused masks to hydrate and nourish your skin.",
    productSlugs: ["soy-mask", "clay-mask-2x", "hyaluronic-acid"],
  },
  {
    slug: "daily-radiance",
    title: "Daily Radiance Collection",
    description:
      "Essentials for cleansing, toning, and protecting skin every day.",
    productSlugs: [
      "clarifying-emulsion",
      "innisfree-green-tea",
      "innisfree-brightening",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.isBestseller);
}
