import styles from "./infobox.module.css";

export default function InfoBox(info) {
  return (
    <div className={styles.container}>
      <h3>{info.title}</h3>
    </div>
  );
}
