import {
  faArrowLeft,
  faArrowUp,
  faCodeFork,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import styles from "./(styles)/page.module.scss";

import type { Metadata, ResolvingMetadata } from "next";
import { usePost, useSinglePostCategory } from "src/hooks/index";
import Pill from "src/components/pill/pill";
import { editOnGitHubLink } from "src/utils";

export async function generateMetadata(
  { params: { slug } }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const postData = await usePost(slug);
  const parentMetadata = await parent;

  return {
    title: `${slug} by Ziaul Sarker`,
    description: `${slug} by Ziaul Sarker`,
    category: postData.data?.category.join(", "),
    other: {
      keywords: postData.data?.category
        .concat(parentMetadata.keywords as string | ConcatArray<string>)
        .join(", "),
      "page-topic": postData.data?.title,
    },
  };
}

export default async function PostLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const postCategories = await useSinglePostCategory(slug);
  const gitHubEditLink = editOnGitHubLink(slug);

  return (
    <div id="post">
      <div className="text-xs flex flex-row items-center justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <Link href="/?category=all" className={styles.back}>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            Back to all posts
          </Link>
          <span className="hidden md:inline-block"> / </span>
          <Link href={gitHubEditLink} className={styles.back} target="_blank">
            <span>
              <FontAwesomeIcon icon={faCodeFork} />
            </span>
            Edit on GitHub
          </Link>
        </div>

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

      <div className="flex flex-row px-4 pl-0 my-8 mt-4 flex-wrap gap-2 md:gap-1">
        {postCategories.map((text) => (
          <div key={text} className="mr-3">
            <Pill
              text={text}
              href={{
                pathname: "/",
                query: { category: text },
              }}
              prefix={"#"}
            />
          </div>
        ))}
      </div>

      {children}

      <hr className="opacity-10 my-8" />
      <div className="flex flex-col gap-3 md:flex-row md:gap-4 text-xs mb-8">
        <Link href="/?category=all" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to all posts
        </Link>

        <span className="hidden md:inline-block"> / </span>

        <Link href={gitHubEditLink} className={styles.back} target="_blank">
          <span>
            <FontAwesomeIcon icon={faCodeFork} />
          </span>
          Edit on GitHub
        </Link>

        <span className="hidden md:inline-block"> / </span>
        <Link
          href={`https://www.facebook.com/sharer.php?u=https://ziaulsarker.com&amp;t=${encodeURIComponent(
            slug
          )}`}
          target="_blank"
          rel="noopener"
          className={styles.back}
        >
          <span>
            <FontAwesomeIcon icon={faShare} />
          </span>
          Share on FB
        </Link>

        <span className="hidden md:inline-block"> / </span>

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
