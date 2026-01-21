import styles from "./toast.module.css"
import { AlertOctagon, AlertTriangle, CheckCircle, Info, XIcon} from "lucide-react";


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

export function Toast({id, variant, children, handledismiss}: {variant: any, children: string, }) {
  const Icon = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
         <Icon size={24}/>
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={() => handledismiss(id)}>
        <XIcon size={24} />
      </button>
    </div>
  );
}