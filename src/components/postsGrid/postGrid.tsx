import Link from "next/link";
import Image from "next/image";

export interface IPost {
  data: {
    title: string;
    description: string;
    published: string;
    slug: string;
    img: string;
  };
  content: string;
}

export default function PostGrid({ posts }: { posts: IPost[] }) {
  return posts.length > 0 ? (
    posts.map(
      (post: IPost) =>
        !!post.data.published && (
          <Link
            key={post.data.title}
            href={post.data.slug}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
            className="mb-8 shadow-md rounded hover:shadow-xl dark:shadow-[#000] hover:shadow-[#49c5b6] hover:dark:shadow-[#e7b10a]"
          >
            <div className="grid md:grid-cols-[1fr,3fr]">
              <div className="relative h-36 md:h-auto">
                <Image
                  fill
                  src={post?.data.img}
                  alt={post.data.title}
                  style={{ objectFit: "cover", objectPosition: "cover top" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <article className="p-4">
                <div className="text-xs">
                  <span>{new Date(post.data.published).toDateString()}</span>
                </div>
                {post.data.title && (
                  <h2 className="mb-2 text-xl color-[#49c5b6]">
                    {post.data.title}
                  </h2>
                )}
                {post.data.description && (
                  <p className="text-sm">{post.data.description}</p>
                )}
              </article>
            </div>
          </Link>
        )
    )
  ) : (
    <h2>No Posts Found</h2>
  );
}
