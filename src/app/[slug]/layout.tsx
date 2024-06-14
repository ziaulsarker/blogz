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
import { usePost } from "src/hooks/index";
import Pill from "src/components/pill/pill";
import { editOnGitHubLink } from "src/utils";
import Share from "src/components/share/share";
import { LikeBtn } from "src/components/likeBtn/likeBtn";

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
      "og:image": postData.data?.img,
      "og:title": postData.data?.title,
      "og:description": postData.data?.description,
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
  const post = await usePost(slug);
  const gitHubEditLink = editOnGitHubLink(slug);

  return (
    <div id="post" className="relative">
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

          <div className="flex items-center gap-2 md:hidden text-bold">
            <span>
              <FontAwesomeIcon icon={faShare} />
            </span>
            <Share
              slug={slug}
              quote={post.data?.description}
              hashtag={post.data?.category
                .map((cat: string) => `#${cat}`)
                .join(" ")}
              size={30}
              title={post.data?.title}
              rounded
            />
          </div>
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
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row px-4 pl-0 my-8 mt-4 flex-wrap gap-2 md:gap-1">
        {post.data?.category.map((text: string) => (
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

      <hr className="opacity-10 my-8 border-[#222] dark:border-[#fff]" />
      <div className="flex flex-col gap-3 md:flex-row md:gap-4 text-xs mb-8">
        <div className="flex items-center gap-2 md:hidden text-bold">
          <span>
            <FontAwesomeIcon icon={faShare} />
          </span>
          <Share
            slug={slug}
            quote={post.data?.description}
            hashtag={post.data?.category
              .map((cat: string) => `#${cat}`)
              .join(" ")}
            size={30}
            title={post.data?.title}
            rounded
          />
        </div>

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
        <Link href="#post" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
          Scroll to top
        </Link>
      </div>

      <div className="hidden md:block md:absolute h-full top-4 md:top-0 right-0 md:-right-14 ">
        <Share
          slug={slug}
          quote={post.data?.description}
          hashtag={post.data?.category
            .map((cat: string) => `#${cat}`)
            .join(" ")}
          size={35}
          title={post.data?.title}
        />

        <div className="mt-4">
          <LikeBtn />
        </div>
      </div>
    </div>
  );
}
