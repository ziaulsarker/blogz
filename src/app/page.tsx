import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";
import PostGrid from "src/components/postsGrid/postGrid";
import { getPosts } from "src/hooks";
import CategoryGrid from "src/components/categoryGrid/categoryGrid";
import Link from "next/link";
import NewsLetter from "src/components/newsLetter/newLetter";
import Pagination from "src/components/pagination/pagination";
import { POSTS_PER_PAGE } from "src/utils/constants";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category, page } = await searchParams;
  const { posts, categories } = await getPosts();
  const filteredPosts = posts.filter(
    ({
      data: { category: postCategories },
    }: {
      data: { category: string[] };
    }) => postCategories.includes(category as string),
  );

  const shouldRenderAllPosts = category === "all" || !category;
  const postsToRender = shouldRenderAllPosts ? posts : filteredPosts;

  const parsedPageNumber = parseInt((page as string) ?? "1", 10);
  const pageNumber = isNaN(parsedPageNumber) ? 1 : parsedPageNumber;
  const currentPage = Math.max(1, pageNumber);
  const totalPages = Math.floor(postsToRender.length / POSTS_PER_PAGE);
  const paginatedPosts = postsToRender.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <div>
      <Bio
        src={AvatarSrc}
        title="Hi I am Ziaul Sarker."
        text="Just a place where i share my thoughts about all things software."
      />
      <NewsLetter
        className="shadow-none mt-0 md:mt-0 lg:!grid-cols-1 md:my-6"
        formClasses={{
          base: "grid md:grid-cols-2 md:mt-2",
          btn: "md:!mt-0 lg:!mt-0",
        }}
      />
      <CategoryGrid categories={categories} active={category as string} />
      <PostGrid posts={paginatedPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        category={category as string}
      />
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
      <NewsLetter />
    </div>
  );
}
