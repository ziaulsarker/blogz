import Link from "next/link";
import styles from "./postGrid.module.scss";

type Post = {
  data: {
    title: string;
    description?: string;
    published?: string;
    slug?: string;
  };
  content?: string;
};

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps = { posts: [] }) {
  return posts.length > 0 ? (
    posts.map((post) => (
      <Link
        key={post.data.title}
        href={post.data.slug as string}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
        }}
      >
        <article className={styles.postGrid}>
          {post.data.published && (
            <div className={styles.published}>
              <span>{new Date(post.data.published).toDateString()}</span>
            </div>
          )}
          <h2 className={styles.title}>{post.data.title}</h2>
          <p className={styles.description}>{post.data.description}</p>
        </article>
      </Link>
    ))
  ) : (
    <h2>No Posts Found</h2>
  );
}
