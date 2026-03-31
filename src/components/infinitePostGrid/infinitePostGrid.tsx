"use client";
import { useState, useEffect, useRef } from "react";
import PostGrid, { IPost } from "src/components/postsGrid/postGrid";
import { POSTS_PER_PAGE } from "src/utils/constants";

export default function InfinitePostGrid({ posts }: { posts: IPost[] }) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < posts.length) {
          setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, posts.length));
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, posts.length]);

  return (
    <>
      <PostGrid posts={posts.slice(0, visibleCount)} />
      {visibleCount < posts.length && (
        <div ref={loaderRef} className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#49c5b6] border-t-transparent dark:border-[#e7b10a]" />
        </div>
      )}
    </>
  );
}
