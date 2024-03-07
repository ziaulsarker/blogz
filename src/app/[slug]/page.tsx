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
    <p className="text-sm md:text-base">{children}</p>
  ),
  Span: ({ children }: { children?: ReactNode }) => (
    <span className="block text-xs md:text-sm mt-4 mb-2">{children}</span>
  ),

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="p-4"> {children} </ul>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="list-disc mb-2 text-sm"> {children} </li>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="text-wrap p-2 px-6">
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
