import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";
import PostGrid, { IPost } from "src/components/postsGrid/postGrid";
import { usePosts } from "src/hooks";
import CategoryGrid from "src/components/categoryGrid/categoryGrid";
import Link from "next/link";
import { readdir } from "fs/promises";
import { postFile, postsDir } from "src/utils";
import matter from "gray-matter";

export default async function Page({
  searchParams: { category },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { categories } = await usePosts();

  const foundPosts: matter.GrayMatterFile<string>[] = [];
  const postsFoundInDir = await readdir(postsDir, { encoding: "utf-8" });

  postsFoundInDir.map((file) => {
    const post = matter.read(postFile(file));
    foundPosts.push(post);
  });

  foundPosts.sort((a, b) => b.data.published - a.data.published);

  const filteredPosts = foundPosts.filter(
    ({ data: { category: postCategories } }) =>
      postCategories.includes(category as string)
  );

  const shouldRenderAllPosts = category === "all" || !category;
  const postsToRender = shouldRenderAllPosts ? foundPosts : filteredPosts;

  return (
    <div>
      <Bio
        src={AvatarSrc}
        title="Hi I am Ziaul Sarker."
        text="This is my perosnal blog where i share my thoughts and knowleged about Software Engeneering."
      />
      {JSON.stringify(categories)}
      <CategoryGrid categories={categories} active={category as string} />

      {JSON.stringify(postsToRender)}
      <PostGrid posts={postsToRender as unknown as IPost[]} />

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
