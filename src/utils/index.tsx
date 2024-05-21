import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import { resolve } from "node:path";
import { ReactNode } from "react";
import { usePosts } from "src/hooks";
import Link from "next/link";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

const LOCAL = "http://localhost:3000";
const PROD = "https://www.ziaulsarker.com";
const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL = isDevelopment ? LOCAL : PROD;

export function checkEnvironment() {
  return isDevelopment ? LOCAL : PROD;
}

export const postsDir = resolve(process.cwd(), "src/posts");
export const postFile = (file: string) =>
  resolve(process.cwd(), `src/posts/${file}`);

export const componentsMapper:
  | MDXComponents
  | MergeComponents
  | null
  | undefined = {
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-sm md:text-base mb-4">{children}</p>
  ),
  Span: ({ children }: { children?: ReactNode }) => (
    <span className="block text-xs md:text-sm mb-2">{children}</span>
  ),

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mx-6 mb-4 md:mb-6"> {children} </ul>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="list-disc mb-2 text-sm"> {children} </li>
  ),
  RenderUIResult: ({ src, ...rest }: { src: string }) => (
    <div className="my-4">
      <Image height={200} width={400} src={`/${src}.png`} alt={src} {...rest} />
    </div>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="bg-[#282a36] text-white p-6 md:p-8 mb-4 block">
      <pre className="overflow-x-scroll">{children}</pre>
    </code>
  ),
  A: ({ children, href, ...args }: { children?: ReactNode; href: string }) => (
    <Link href={href} {...args}>
      {children}
    </Link>
  ),
};

export const editOnGitHubLink = (slug: string): string =>
  `https://github.com/ziaulsarker/blogz/edit/main/src/posts/${encodeURIComponent(
    slug
  )}.mdx`;

export interface Sitemap {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
    | undefined;
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
}

export const generateSiteMapFromPosts = async (): Promise<Sitemap[]> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { posts } = await usePosts();
  return posts.map((post) => ({
    url: `${BASE_URL}/${post?.data.slug}`,
    changeFrequency: "weekly",
    lastModified: new Date(post?.data.published),
    priority: 0.9,
  }));
};
