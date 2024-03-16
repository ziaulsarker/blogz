import { checkEnvironment } from "src/utils";

export async function usePost(slug: string) {
  const url = `${checkEnvironment()}/api/posts/${slug}`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}

export async function usePosts() {
  const url = `${checkEnvironment()}/api/posts`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}
