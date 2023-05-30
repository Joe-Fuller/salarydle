import styles from "./infobox.module.css";

export default function InfoBox(info) {
  return info.hidden ? (
    <></>
  ) : (
    <div className={styles.container}>
      <h3>{info.title}</h3>
      <p>{info.text}</p>
    </div>
  );
}
