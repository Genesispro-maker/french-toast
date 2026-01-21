import { useCallback, useState, type ChangeEvent } from "react";
import styles from "./playground.module.css"
// import { Toast } from "../toast";
import { ToastShelf } from "../shelf";


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export function Playground(){
    const [message, setMessage] = useState<string>('')
    const [variant, setVariant] = useState<string>(VARIANT_OPTIONS[0])
    // const [isRendered, setRendered] = useState(false)
    const [toasts, setToasts] = useState([
      {
        message: "hello",
        id: crypto.randomUUID(),
        variant: "notice"
      },

      {
        message: "boring",
        id: crypto.randomUUID(),
        variant: "warning"
      }
    ])

     
    // const Dismiss = useCallback(() => {
    //   setRendered((currentState) => !currentState)
    // }, [])

    function handleCreateToast(e: ChangeEvent){
      e.preventDefault()
      const nextToasts = [...toasts, {
        id: crypto.randomUUID(),
        message,
        variant,
      }]

      setToasts(nextToasts)
      setVariant(VARIANT_OPTIONS[0])
      setMessage('')
    }

    function HandleDismiss(id: string){
      const dismissToast = toasts.filter(toaster => {
        return toaster.id !== id
      })
      setToasts(dismissToast)
    }


  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Toast Playground</h1>
      </header>
        <ToastShelf toasts={toasts} handleDismiss={HandleDismiss}/>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>

          <div className={styles.label}>Variant</div>

          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((options) => {
              const id = `variant-${options}`
              return <label key={id} htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={options}
                checked={options === variant}
                onChange={(e) => setVariant(e.target.value)}
              />
               {options}
              </label>
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <button onClick={handleCreateToast}>Pop toast</button>
          </div>
        </div>
      </div>
    </div>
  );
}
