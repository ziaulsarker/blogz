import Link from 'next/link';
import Switch from "../switch";
import NavProps from "./Nav.props";
import styles from "./nav.module.scss";
import ThemeProvider from '../../providers/LocalStorageProviders';

export default function Nav (props: NavProps): React.ReactElement {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav--container']}>
        <div className={styles['nav--wrapper']}>
          <div className={styles['nav--logo']}>
            <Link href="/">Ziaul Sarker</Link>
          </div>
          <div>
            <ThemeProvider>
              <Switch variant='square' />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </nav>
  );
}