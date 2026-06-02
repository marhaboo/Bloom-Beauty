import { StaticImageData } from "next/image";
import Coconut from "@/widgets/blog/products/images/IMAGE.png";
import Cream from "@/widgets/blog/products/images/IMAGE-1.png";
import GirlWithCream from "@/widgets/blog/products/images/IMAGE-2.png";
import GirlFace from "@/widgets/blog/products/images/IMAGE-3.png";

export type BlogPost = {
  slug: string;
  photoSrc: StaticImageData;
  property: "flex-row" | "flex-row-reverse";
  data: string;
  title: string;
  info: string;
  hashtags: string[];
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cracking-the-coconut-code",
    photoSrc: Coconut,
    property: "flex-row",
    data: "January 20, 2023",
    title: "Cracking the Coconut Code",
    excerpt:
      "Few ingredients have been debated as much in recent years as coconut oil.",
    info: `Few ingredients have been debated as much in recent years as coconut oil. Is it or is it not the "miracle product" so many claim it to be? We answer: Like anything, it depends. One of our newest brands, Solved Skincare, puts coconut oil front and center, so we wanted to give you the facts to decide how your specific skin type can reap its rewards.
Keep reading below as we take a deep dive into the 'nut.`,
    hashtags: ["Tips", "AntiAging", "Ingridients", "Organig", "EcoFriendly"],
  },
  {
    slug: "bloom-beauty-best-of-2023",
    photoSrc: Cream,
    property: "flex-row-reverse",
    data: "January 19, 2023",
    title: "Bloom Beauty Best of 2023",
    excerpt:
      "Our curated list for the best products of 2023, focused on clean ingredients and effective formulas.",
    info: `Can you believe we're here? Another year is wrapping up and we're feeling celebratory, wanting to share our list for the best products of 2023.
There are so many ways to categorize what is already a collection of our favorite brands, but ultimately we decided that by focusing on HOW CLEAN THE INGREDIENTS ARE, and HOW EFFECTIVE THE FORMULAS, you'll be able to find something streamlined for glowing skin success.`,
    hashtags: ["GreatGift", "EcoFriendly", "Compilation"],
  },
  {
    slug: "7-skincare-habits-to-break-now",
    photoSrc: GirlWithCream,
    property: "flex-row",
    data: "January 12, 2023",
    title: "7 Skincare Habits to Break Now",
    excerpt:
      "Small but powerful habits that can make a world of difference with your skin.",
    info: `Great skincare is a long game—it doesn't happen overnight, but little steps are made (nightly!) to get and keep your skin at its most radiant state. Today, we are uncovering some of our top small but powerful habits that can make a world of difference with your skin.
You do not need to focus on all seven immediately, so take heart. Use this as a checklist. If your skincare has stalled, then it might be time to stop these.`,
    hashtags: ["Tips", "EcoFriendly", "SkinHealth"],
  },
  {
    slug: "getting-your-skin-care-back-on-track",
    photoSrc: GirlFace,
    property: "flex-row-reverse",
    data: "January 10, 2023",
    title: "Getting Your Skin Care Back on Track",
    excerpt:
      "Favorite start-here tips to get back into a rhythm with your skincare routine.",
    info: `With so many novel and ever-changing concerns occupying precious brain space lately, you're forgiven if maintaining a multi-step skincare routine hasn't been at the top of your list. Add to that list stress, poor sleep and higher sugar or junk food intake, and right now your skin is probably in need of a little (or a major) reset.
You've come to the right place! To get back into a rhythm with your skincare routine, we're sharing our favorite "start here" tips below.`,
    hashtags: ["Tips", "Ingredients", "Compilation", "AntiAging"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
