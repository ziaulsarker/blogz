import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import { join } from "node:path";
import { ReactNode } from "react";

const LOCAL = "http://localhost:3000/";
const PROD = "https://blogz.vercel.app/";
const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL = isDevelopment ? LOCAL : PROD;

export function checkEnvironment() {
  return isDevelopment ? LOCAL : PROD;
}

export const postsDir = join(process.cwd(), "src/posts");
export const postFile = (file: string) =>
  join(process.cwd(), `src/posts/${file}`);

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
  code: ({ children }: { children?: ReactNode }) => (
    <code className="bg-[#282a36] text-white p-6 md:p-8 mb-4 block">
      <pre>{children}</pre>
    </code>
  ),
};
