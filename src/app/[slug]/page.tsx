import { MDXRemote } from "next-mdx-remote/rsc";
import { usePost } from "../../hooks/usePosts";
import Image from "next/image";
import { ReactNode } from "react";
import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import rehypeHighlight from "rehype-highlight";
import { SerializeOptions } from "next-mdx-remote/dist/types";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
} as SerializeOptions;

const componentsMapper: MDXComponents | MergeComponents | null | undefined = {
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-sm md:text-base mb-4">{children}</p>
  ),
  Span: ({ children }: { children?: ReactNode }) => (
    <span className="block text-xs md:text-sm mb-2">{children}</span>
  ),

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mx-6 mb-4"> {children} </ul>
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

export default async function RemoteMdxPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await usePost(slug);

  return (
    <article className="my-4 md:my-6 lg:my-8">
      <div className="relative w-full h-[300px] mb-4">
        <Image
          fill
          alt={postData.data.title}
          src={postData.data.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h1 className="text-xl lg:text-2xl xl:text-3xl mb-4">
        {postData.data.title}
      </h1>
      <MDXRemote
        source={postData.content}
        components={componentsMapper}
        options={options}
      />
    </article>
  );
}
