import { readdir } from "fs/promises";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import { BASE_URL, postFile, postsDir } from "src/utils";

export async function useCategories(): Promise<Array<string>> {
  const postCategories: Array<string> = [];

  try {
    const posts = await readdir(postsDir);

    posts.map((file) => {
      const post = matter.read(postFile(file));
      postCategories.push(...post.data.category);
    });

    return [...new Set(postCategories)];
  } catch (err) {
    return [];
  }
}

export async function useSinglePostCategory(
  slug: string
): Promise<Array<string>> {
  try {
    const postData = matter.read(`${postFile(slug)}.mdx`);
    return postData.data.category;
  } catch (err) {
    return [];
  }
}
