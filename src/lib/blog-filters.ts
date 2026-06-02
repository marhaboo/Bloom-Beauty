import { BlogPost } from "@/data/blog-posts";

export function normalizeTag(value: string): string {
  return value.replace(/^#/, "").toLowerCase().replace(/\s+/g, "");
}

export function postMatchesCategories(
  post: BlogPost,
  activeCategories: string[]
): boolean {
  if (
    activeCategories.length === 0 ||
    activeCategories.includes("ALL CATEGORY")
  ) {
    return true;
  }

  return activeCategories.some((category) => {
    if (category === "ALL CATEGORY") return true;
    const normalizedCategory = normalizeTag(category);
    return post.hashtags.some(
      (tag) =>
        normalizeTag(tag) === normalizedCategory ||
        normalizeTag(tag).includes(normalizedCategory) ||
        normalizedCategory.includes(normalizeTag(tag))
    );
  });
}
