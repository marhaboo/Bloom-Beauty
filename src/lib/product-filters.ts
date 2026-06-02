import { Product } from "@/data/products";

export type ProductFilters = {
  categories: string[];
  ingredients: string[];
  skinTypes: string[];
  priceRange: string | null;
  minPrice?: number;
  maxPrice?: number;
};

export const emptyProductFilters: ProductFilters = {
  categories: [],
  ingredients: [],
  skinTypes: [],
  priceRange: null,
};

export function applyProductFilters(
  items: Product[],
  filters: ProductFilters
): Product[] {
  return items.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    if (filters.ingredients.length > 0) {
      const info = `${product.title} ${product.info}`.toLowerCase();
      const matchesIngredient = filters.ingredients.some((ingredient) =>
        info.includes(ingredient.toLowerCase())
      );
      if (!matchesIngredient) return false;
    }

    if (filters.skinTypes.length > 0 && !filters.skinTypes.includes("All")) {
      // Static demo: all products suit "Normal" when skin type filter applied
      if (!filters.skinTypes.includes("Normal")) {
        return false;
      }
    }

    if (filters.priceRange === "Under $25" && product.priceValue >= 25) {
      return false;
    }
    if (
      filters.priceRange === "$25 - $50" &&
      (product.priceValue < 25 || product.priceValue > 50)
    ) {
      return false;
    }
    if (
      filters.priceRange === "$50 - $100" &&
      (product.priceValue < 50 || product.priceValue > 100)
    ) {
      return false;
    }

    if (filters.minPrice !== undefined && product.priceValue < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== undefined && product.priceValue > filters.maxPrice) {
      return false;
    }

    return true;
  });
}

export function sortProducts(
  items: Product[],
  sortBy: string
): Product[] {
  const sorted = [...items];
  if (sortBy === "Lowest price") {
    return sorted.sort((a, b) => a.priceValue - b.priceValue);
  }
  if (sortBy === "Highest price") {
    return sorted.sort((a, b) => b.priceValue - a.priceValue);
  }
  return sorted;
}
