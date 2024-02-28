import { MDXRemote } from "next-mdx-remote/rsc";
import { usePost } from "../../hooks/usePosts";

export default async function RemoteMdxPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await usePost(slug);

  return (
    <MDXRemote
      source={`
  # Welcome to my MDX page!
 
  This is some **bold** and _italics_ text.
  
  This is a list in markdown:
  
  - One
  - Two
  - Three
  
  Checkout my React component: 
  `}
    />
  );
}
