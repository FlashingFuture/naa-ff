import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
