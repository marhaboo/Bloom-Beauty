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
    <main className="min-h-screen w-full bg-[#fbf8f2]">
      <header className="w-full bg-[radial-gradient(ellipse_at_top,#f5e8e4_0%,#fbf8f2_75%)] px-5 pb-6 pt-10 sm:px-8 sm:pt-12">
        <div className="page-container">
          <Link
            href="/blog"
            className="mb-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 text-sm font-medium text-[#526258] backdrop-blur-md transition hover:bg-white/80"
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
            <h2 className="font-serif text-2xl text-[#20372e] sm:text-3xl">
              More from the blog
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {morePosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-[1.5rem] border border-[#e9e3dc] bg-white/70 p-5 transition hover:-translate-y-0.5 hover:border-[#d3b6a8] hover:shadow-lg"
                >
                  <p className="mb-1 text-[10px] uppercase tracking-[0.12em] text-[#a36e69]">{item.data}</p>
                  <p className="font-medium leading-snug text-[#20372e]">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetailView;
