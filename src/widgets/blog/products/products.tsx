"use client";
import React, { useEffect, useMemo, useState } from "react";
import BlogProducts from "@/features/blog-products/blog-products";
import ArrowButton from "@/features/arrow-button/arrow-button";
import Pagination from "@/features/paginations/paginations";
import { blogPosts } from "@/data/blog-posts";
import { postMatchesCategories } from "@/lib/blog-filters";
import { blogTagHref } from "@/lib/navigation";

const POSTS_PER_PAGE = 2;

type ProductsProps = {
  activeCategories: string[];
};

const Products = ({ activeCategories }: ProductsProps) => {
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    setExpanded(false);
  }, [activeCategories]);

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter((post) => postMatchesCategories(post, activeCategories)),
    [activeCategories]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const postsToRender = expanded ? filteredPosts : paginatedPosts;

  return (
    <section className="w-full bg-[#F9FAFC] py-10 sm:py-14 md:py-16">
      <div className="page-container flex flex-col gap-8 sm:gap-10 md:gap-12">
        {postsToRender.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#DFE1E3]/70">
            <p className="text-[#697586] text-base">
              No posts found for this category. Try another filter.
            </p>
          </div>
        ) : (
          postsToRender.map((post) => (
            <BlogProducts
              key={post.slug}
              photoSrc={post.photoSrc}
              reversed={post.property === "flex-row-reverse"}
              data={post.data}
              title={post.title}
              info={post.info}
              hashtags={post.hashtags}
              readMoreHref={`/blog/${post.slug}`}
              hashtagHref={(tag) => blogTagHref(tag)}
            />
          ))
        )}

        {!expanded && filteredPosts.length > POSTS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {!expanded && filteredPosts.length > POSTS_PER_PAGE && (
          <div className="flex justify-center pt-2">
            <ArrowButton
              text="Show More"
              arrow="down"
              onClick={() => setExpanded(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
