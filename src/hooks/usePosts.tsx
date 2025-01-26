import { readdir } from "node:fs/promises";
import * as matter from "gray-matter";
import { postFile, postsDir } from "src/utils";

export async function getPost(slug: string) {
  try {
    const postData = matter.read(`${postFile(slug)}.mdx`);
    return { ...postData, err: null };
  } catch (err) {
    return { err: `opps cant find post: ${slug}`, data: null, content: "" };
  }
}

export async function getPosts() {
  const foundPosts: any[] = [];
  const categories: Array<string> = [];

  try {
    const posts = await readdir(postsDir, { encoding: "utf-8" });

    posts.map((file) => {
      const post = matter.read(postFile(file));
      foundPosts.push(post);
      post.data.published && categories.push(...post.data.category);
    });

    const sortedPosts =
      foundPosts?.toSorted?.((a, b) => b.data.published - a.data.published) ??
      foundPosts?.sort?.((a, b) => b.data.published - a.data.published).slice();

    return {
      posts: sortedPosts,
      categories: [...new Set(categories?.toSorted?.() ?? categories.sort?.())],
      err: null,
    };
  } catch (err) {
    return { posts: [], categories: [], err };
  }
}
