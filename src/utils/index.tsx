import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import { resolve } from "node:path";
import { ReactNode } from "react";

const LOCAL = "http://localhost:3000/";
const PROD = "https://blogz.vercel.app/";
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
  RenderUIResult: ({ src }: { src: string }) => (
    <div className="my-4">
      <Image height={200} width={400} src={`/${src}.png`} alt={src} />
    </div>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="bg-[#282a36] text-white p-6 md:p-8 mb-4 block">
      <pre className="overflow-x-scroll">{children}</pre>
    </code>
  ),
};
