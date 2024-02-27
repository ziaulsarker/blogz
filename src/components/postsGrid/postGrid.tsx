import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default function PostGrid({ posts } = { posts: [] }) {
  return posts.map(
    (post: {
      data: {
        title: string;
        description: string;
        published: string;
        slug: string;
      };
      content: string;
    }) => (
      <Link
        key={post.data.title}
        href={post.data.slug}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div>
          <h2>{post.data.title}</h2>
          <div>
            <span>{new Date(post.data.published).toLocaleDateString()}</span>
          </div>
          <p>{post.data.description}</p>
        </div>
      </Link>
    )
  );
}
