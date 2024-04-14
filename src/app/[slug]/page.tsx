import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";
import { SerializeOptions } from "next-mdx-remote/dist/types";
import { notFound } from "next/navigation";
import { componentsMapper } from "src/utils";
import { usePost } from "../../hooks/usePosts";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
} as SerializeOptions;

export default async function RemoteMdxPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await usePost(slug);

  if (postData.err) {
    notFound();
  }

  return (
    <article className="my-4 md:my-6 lg:my-8 mb-0">
      <div className="relative w-full h-[300px] my-4 md:my-6">
        <Image
          fill
          alt={postData.data?.title}
          src={postData.data?.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <h1 className="text-xl lg:text-2xl xl:text-3xl my-4">
        {postData?.data?.title}
      </h1>
      <MDXRemote
        source={postData.content}
        components={componentsMapper}
        options={options}
      />
    </article>
  );
}
