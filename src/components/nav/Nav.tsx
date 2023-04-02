import Link from "next/link";
import Switch from "../switch";
import NavProps from "./Nav.props";
import styles from "./nav.module.scss";
import Avatar from "../avatar/avatar";

export default function Nav(props: NavProps): React.ReactElement {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav--container"]}>
        <div className={styles["nav--wrapper"]}>
          <div className={styles["nav--logo"]}>
            <Link href="/">Ziaul Sarker</Link>
          </div>
          <div>
            <Switch variant="square" />
          </div>
        </div>
      </div>
    </nav>
  );
}
