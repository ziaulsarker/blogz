import { BASE_URL } from "src/utils";

export async function useCategories() {
  const url = `${BASE_URL}/api/post-categories/`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}

export async function useSinglePostCategory(
  slug: string
): Promise<Array<string>> {
  const url = `${BASE_URL}/api/post-categories/${slug}`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}
