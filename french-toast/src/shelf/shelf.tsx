import { useContext } from "react";
import { Toast } from "../toast";
import styles from "./shelf.module.css"
import { ToastContext } from "../playground/toast-provider";

export function ToastShelf() {
  const {toasts} = useContext(ToastContext)
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite">
     {toasts.map((toast) => {
      return <li key={toast.id} className={styles.toastWrapper}>
        <Toast id={toast.id} variant={toast.variant}>{toast.message}</Toast>
      </li>
     })}
    </ol>
  );
}