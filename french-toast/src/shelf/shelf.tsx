import { Toast } from "../toast";
import styles from "./shelf.module.css"

export function ToastShelf({toasts, handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
     {toasts.map((toast) => {
      return <li key={toast.id} className={styles.toastWrapper}>
        <Toast id={toast.id} variant={toast.variant} handledismiss={handleDismiss}>{toast.message}</Toast>
      </li>
     })}
    </ol>
  );
}