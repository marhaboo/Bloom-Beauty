import { products } from "@/data/products";
import ProductDetailView from "@/views/product-detail-view";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const exists = products.some((product) => product.slug === slug);

  if (!exists) {
    notFound();
  }

  return <ProductDetailView slug={slug} />;
}
