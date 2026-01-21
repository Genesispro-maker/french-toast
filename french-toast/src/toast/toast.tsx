import styles from "./toast.module.css"
import { Info, XIcon} from "lucide-react";

export function Toast() {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
        16 photos have been uploaded
      </p>
      <button className={styles.closeButton}>
        <XIcon size={24} />
      </button>
    </div>
  );
}