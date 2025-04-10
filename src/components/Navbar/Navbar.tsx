import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        <div className={styles.title}>Naa 기술블로그</div>
      </nav>
    </header>
  );
}
