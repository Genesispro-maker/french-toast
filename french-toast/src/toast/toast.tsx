import styles from "./toast.module.css"
import { AlertOctagon, AlertTriangle, CheckCircle, Info, XIcon} from "lucide-react";


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

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