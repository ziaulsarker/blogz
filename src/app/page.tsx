import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";
import PostGrid from "src/components/postsGrid/postGrid";
import { getPosts } from "src/hooks";
import CategoryGrid from "src/components/categoryGrid/categoryGrid";
import Link from "next/link";
import NewsLetter from "src/components/newsLetter/newLetter";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const { posts, categories } = await getPosts();
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
        text="Just a place where i share my thoughts about Software Engineering."
      />
      <NewsLetter
        className="shadow-none mt-0 md:mt-0 lg:!grid-cols-1 md:my-6"
        formClasses={{
          base: "grid md:grid-cols-2 md:mt-2",
          btn: "md:!mt-0 lg:!mt-0",
        }}
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
      {postsToRender.length > 5 && <NewsLetter />}
    </div>
  );
}
