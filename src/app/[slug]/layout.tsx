import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import styles from "./(styles)/page.module.scss";

import type { Metadata, ResolvingMetadata } from "next";
import { usePost } from "src/hooks/usePosts";

export async function generateMetadata(
  { params: { slug } }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {
    data: { category = [] } = {},
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = await usePost(slug);

  return {
    title: `${slug} by Ziaul Sarker`,
    description: `${slug} by Ziaul Sarker`,
    category: category.join(", "),
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="post">
      <div className="text-xs flex flex-row items-center justify-between">
        <Link href="/" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to all posts
        </Link>
        <div className="flex items-center">
          <p className="text-xs text-bold font-extrabold mr-2 font-mono">by</p>
          <Link
            href="https://www.linkedin.com/in/ziaul-sarker-58b11374/"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              src="/me.jpeg"
              alt="Ziaul Sarker"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>

      {children}

      <div className="flex flex-row text-xs mb-8">
        <Link href="/" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to all posts
        </Link>

        <span className="mx-4"> / </span>

        <Link href="#post" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
          Scroll to top
        </Link>
      </div>
    </div>
  );
}
