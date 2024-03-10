import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";
import { BASE_URL } from "src/utils";
import PostGrid from "src/components/postsGrid/postGrid";
import Pill from "../components/pill/pill";
import { useCategories } from "src/hooks";
import CategoryGrid from "src/components/categoryGrid/categoryDrid";

async function getPosts() {
  const url = `${BASE_URL}/api/posts`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}

export default async function Page({
  searchParams: { category },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [posts, categores] = await Promise.all([getPosts(), useCategories()]);
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
        text="This is my perosnal blog where i share my thoughts and knowleged about Software Engeneering."
      />

      <CategoryGrid categories={categores} active={category as string} />
      <PostGrid posts={postsToRender} />
    </div>
  );
}
