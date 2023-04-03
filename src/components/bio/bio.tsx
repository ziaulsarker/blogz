import Avatar from "../avatar";
import Iprops from "./bio.props";
import styles from "./bio.module.scss";

function Bio(props: Iprops) {
  const { src = "", title, text, children } = props;

  return (
    <section>
      src && (
      <div className={styles.bioImg}>
        <Avatar
          src={src}
          alt="Ziaul Sarker"
          style={{ height: "3.5rem", width: "3.5rem" }}
        />
      </div>
      ) children ? children : (
      <div className={styles.copy}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      )
    </section>
  );
}

export default Bio;
