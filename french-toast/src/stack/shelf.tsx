import { useContext } from "react";
import { Toast } from "../toast";
import styles from "./shelf.module.css"
import { ToastContext } from "../toast-context";

export function ToastShelf() {
  const context = useContext(ToastContext)
  
    if(!context){
      throw new Error("ToastContext must be within ToastProvider")
    }

    const {toasts} = context

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