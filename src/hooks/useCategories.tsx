import { BASE_URL } from "src/utils";

export async function useCategories() {
  const url = `${BASE_URL}/api/post-categories/`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}
