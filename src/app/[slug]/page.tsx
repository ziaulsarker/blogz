import { MDXRemote } from "next-mdx-remote/rsc";
import { usePost } from "../../hooks/usePosts";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./(styles)/page.module.scss";

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
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
          }}
        >
          <Image fill alt={postData.data.title} src="/maps-in-js.jpeg" />
        </div>
        <h1>{postData.data.title}</h1>
        <MDXRemote source={postData.content} />
      </article>

      <div>
        <Link href="/" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          home
        </Link>
      </div>
    </div>
  );
}
