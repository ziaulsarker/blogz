import { MDXRemote } from "next-mdx-remote/rsc";

export default function PostGrid({ posts } = { posts: [] }) {
  return posts.map((post: { data: { title: string }; content: string }) => (
    <div key={post.data.title}>
      <h1>{post.data.title}</h1>
      <MDXRemote key={post.data.title} source={post.content} />
    </div>
  ));
}
