import { Product, getProductBySlug } from "./products";

export type CartItem = {
  productSlug: string;
  quantity: number;
};

export const defaultCartItems: CartItem[] = [
  { productSlug: "cloud-jelly", quantity: 1 },
  { productSlug: "clarifying-emulsion", quantity: 2 },
];

export type CartLine = CartItem & { product: Product };

export function resolveCartItems(items: CartItem[]): CartLine[] {
  return items
    .map((item) => {
      const product = getProductBySlug(item.productSlug);
      if (!product) return null;
      return { ...item, product };
    })
    .filter((line): line is CartLine => line !== null);
}

export function formatCartSubtotal(lines: CartLine[]): string {
  const total = lines.reduce(
    (sum, line) => sum + line.product.priceValue * line.quantity,
    0
  );
  return `$${total.toFixed(2)}`;
}
