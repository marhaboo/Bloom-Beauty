import { blogPosts } from "@/data/blog-posts";
import BlogDetailView from "@/views/blog-detail-view";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const exists = blogPosts.some((post) => post.slug === slug);

  if (!exists) {
    notFound();
  }

  return <BlogDetailView slug={slug} />;
}
