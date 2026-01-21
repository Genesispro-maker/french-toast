import { Toast } from "../toast";
import styles from "./shelf.module.css"

export function ToastShelf() {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li>
    </ol>
  );
}