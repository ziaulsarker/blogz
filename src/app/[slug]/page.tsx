import { MDXRemote } from "next-mdx-remote/rsc";

export default async function RemoteMdxPage({ params: { slug } }) {
  console.log({ slug });
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
