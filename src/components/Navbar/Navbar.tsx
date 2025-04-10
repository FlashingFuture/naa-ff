import { FaGithub } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";

import styles from "./Navbar.module.css";
import { LINKS } from "../../constants/links";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        <div></div>
        <div className={styles.title}>Naa 기술블로그</div>
        <div className={styles.links}>
          <a
            href={LINKS.github}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.linkIcon} />
          </a>
          <a
            href={LINKS.portfolio}
            title="Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPortrait className={styles.linkIcon} />
          </a>
        </div>
      </nav>
    </header>
  );
}
