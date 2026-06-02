import BlogProducts from "@/features/blog-products/blog-products";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { blogTagHref } from "@/lib/navigation";
import Link from "next/link";
import React from "react";

type BlogDetailViewProps = {
  slug: string;
};

const BlogDetailView = ({ slug }: BlogDetailViewProps) => {
  const post = getBlogPostBySlug(slug)!;
  const morePosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="w-full min-h-screen bg-[#F9FAFC]">
      <header className="w-full bg-gradient-to-b from-[#F5E0E5] to-[#F9FAFC] pt-10 pb-6 sm:pt-12 px-4">
        <div className="page-container">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#F5A3B7] text-sm font-medium hover:underline mb-4"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>

      <section className="py-6 sm:py-10">
        <div className="page-container">
          <BlogProducts
            photoSrc={post.photoSrc}
            reversed={post.property === "flex-row-reverse"}
            data={post.data}
            title={post.title}
            info={post.info}
            hashtags={post.hashtags}
            readMoreHref="/blog"
            readMoreText="Back to Blog"
            hashtagHref={(tag) => blogTagHref(tag)}
          />
        </div>
      </section>

      {morePosts.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="page-container flex flex-col gap-6">
            <h2 className="text-[#383838] text-xl sm:text-2xl font-semibold">
              More from the blog
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {morePosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="bg-white rounded-xl border border-[#DFE1E3]/70 p-5 hover:border-[#F5A3B7] transition-colors"
                >
                  <p className="text-[#BFB9CF] text-xs mb-1">{item.data}</p>
                  <p className="text-[#383838] font-medium leading-snug">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailView;
