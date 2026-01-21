import styles from "./toast.module.css"
import { AlertOctagon, AlertTriangle, CheckCircle, Info, XIcon} from "lucide-react";


// const ICONS_BY_VARIANT = {
//   notice: Info,
//   warning: AlertTriangle,
//   success: CheckCircle,
//   error: AlertOctagon,
// };

export function Toast({variant, children}: {variant: string, children: string}) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton}>
        <XIcon size={24} />
      </button>
    </div>
  );
}