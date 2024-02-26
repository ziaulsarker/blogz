import Link from "next/link";
import { cookies } from "next/headers";

import Switch from "../switch";
import Avatar from "../avatar/avatar";

import NavProps from "./Nav.props";
import styles from "./nav.module.scss";

export default function Nav(props: NavProps): React.ReactElement {
  const myCookes = cookies();
  const themeFromCookie = myCookes.get("theme")?.value ?? "";

  return (
    <nav className={styles.nav}>
      <div className={styles["nav--container"]}>
        <div className={styles["nav--wrapper"]}>
          <div className={styles["nav--logo"]}>
            <Link href="/">SWE-Z</Link>
          </div>
          <div>
            <Switch variant="square" theme={themeFromCookie} />
          </div>
        </div>
      </div>
    </nav>
  );
}
