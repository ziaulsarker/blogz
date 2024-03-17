import { readdir } from "node:fs/promises";
import * as matter from "gray-matter";
import { postFile, postsDir } from "src/utils";

export async function usePost(slug: string) {
  try {
    const postData = matter.read(`${postFile(slug)}.mdx`);
    return { ...postData, err: null };
  } catch (err) {
    return { err: `opps cant find post: ${slug}`, data: null, content: "" };
  }
}

export async function usePosts() {
  const foundPosts: any[] = [];
  const categories: Array<string> = [];

  try {
    const posts = await readdir(postsDir);

    posts.map((file) => {
      const post = matter.read(postFile(file));
      foundPosts.push(post);
      categories.push(...post.data.category);
    });

    const sortedPosts = foundPosts.toSorted(
      (a, b) => b.data.published - a.data.published
    );

    return { posts: sortedPosts, categories };
  } catch (err) {
    return { posts: [], categories: [] };
  }
}
