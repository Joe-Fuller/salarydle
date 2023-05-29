import styles from "./infobox.module.css";

export default function InfoBox({ children }) {
  return <div className={styles.container}>{children}</div>;
}
