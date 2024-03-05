import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./(styles)/page.module.scss";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="post">
      <div className="text-xs">
        <Link href="/" className={styles.back}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to all posts
        </Link>
      </div>

      {children}

      <div className="flex flex-row text-xs">
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
