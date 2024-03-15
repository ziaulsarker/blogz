import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

const LOCAL = "http://localhost:3000";
const PROD = "https://blogz-ziaul-sarkers-projects.vercel.app/";
const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL = isDevelopment ? LOCAL : PROD;
export const checkEnvironment = () => process.env.NODE_ENV;

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
