import clsx from "clsx";
import Avatar from "../avatar";
import Iprops from "./bio.props";
import styles from "./bio.module.scss";

function Bio(props: Iprops) {
  const { src = "", title, text, children } = props;
  const bioClasses = clsx(
    {
      [styles["bio--with-img"]]: !!src,
    },
    styles.bio
  );
  return (
    <article className={bioClasses}>
      {src && (
        <div className={styles["bio__img"]}>
          <Avatar
            src={src}
            alt="Ziaul Sarker"
            style={{ height: "3.5rem", width: "3.5rem" }}
          />
        </div>
      )}
      {children ? (
        children
      ) : (
        <div className={styles["bio__copy"]}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      )}
    </article>
  );
}

export default Bio;
