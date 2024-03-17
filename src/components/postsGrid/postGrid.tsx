import Link from "next/link";
import styles from "./postGrid.module.scss";

export interface IPost {
  data: {
    title: string;
    description: string;
    published: string;
    slug: string;
  };
  content: string;
}

export default function PostGrid({ posts }: { posts: IPost[] }) {
  return posts.length > 0 ? (
    posts.map(
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
            display: "block",
          }}
        >
          <article className={styles.postGrid}>
            <div className={styles.published}>
              <span>{new Date(post.data.published).toDateString()}</span>
            </div>
            <h2 className={styles.title}>{post.data.title}</h2>
            <p className={styles.description}>{post.data.description}</p>
          </article>
        </Link>
      )
    )
  ) : (
    <h2>No Posts Found</h2>
  );
}
