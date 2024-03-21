import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";
import PostGrid from "src/components/postsGrid/postGrid";
import { usePosts } from "src/hooks";
import CategoryGrid from "src/components/categoryGrid/categoryGrid";
import Link from "next/link";

export default async function Page({
  searchParams: { category },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { posts, categories } = await usePosts();
  const filteredPosts = posts.filter(
    ({
      data: { category: postCategories },
    }: {
      data: { category: string[] };
    }) => postCategories.includes(category as string)
  );

  const shouldRenderAllPosts = category === "all" || !category;
  const postsToRender = shouldRenderAllPosts ? posts : filteredPosts;

  return (
    <div>
      <Bio
        src={AvatarSrc}
        title="Hi I am Ziaul Sarker."
        text="This is my personal blog where i share my thoughts and knowledge about Software Engeneering."
      />

      <CategoryGrid categories={categories} active={category as string} />
      <PostGrid posts={postsToRender} />
      {category && postsToRender.length === 0 && (
        <>
          <p>
            no posts for category{" "}
            <strong>
              {typeof category === "string" && category?.toUpperCase()}
            </strong>
          </p>
          <div className="my-3 flex">
            back to
            <Link
              href={`/?category=all`}
              className="ml-2 px-3 py-1 inline-flex text-xs rounded-full bg-[#49c5b6] hover:bg-[#222] text-white  dark:bg-[#e7b10a] dark:hover:bg-[#fff] dark:hover:text-[#222] transition-all duration-200 ease-in-out font-bold"
            >
              all posts
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
