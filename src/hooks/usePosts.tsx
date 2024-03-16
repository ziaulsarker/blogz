import { BASE_URL } from "src/utils";

export async function usePost(slug: string) {
  const url = `${BASE_URL}/api/posts/${slug}/`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}

export async function usePosts() {
  const url = `${BASE_URL}/api/posts/`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}
