import styles from "./infobox.module.css";

export default function InfoBox(info) {
  return info.hidden ? (
    <></>
  ) : (
    <div className={styles.container}>
      <h3>{info.title}</h3>
      <ul>
        {info.text.split("*").map((line) => {
          return <li>{line}</li>;
        })}
      </ul>
    </div>
  );
}
