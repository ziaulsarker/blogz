import { MDXRemote } from "next-mdx-remote/rsc";
import { usePost } from "../../hooks/usePosts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./(styles)/page.module.scss";
import { Suspense } from "react";

export default async function RemoteMdxPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await usePost(slug);

  console.log({ postData });

  return (
    <div>
      <article>
        <h1>{postData.data.title}</h1>
        <MDXRemote source={postData.content} />
      </article>

      <div>
        <Link href="/" className={styles.back}>
          <span>
            <Suspense fallback={<p>Loading...</p>}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Suspense>
          </span>
          home
        </Link>
      </div>
    </div>
  );
}
