import { useCallback, useContext, useEffect, useState, type ChangeEvent } from "react";
import styles from "./playground.module.css"

import { ToastShelf } from "../shelf";
import { ToastContext } from "./toast-provider";
import { useEscapeKey } from "../hooks/useEscape";


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export function Playground(){
     const {createToast} = useContext(ToastContext)
     const {setToasts} = useContext(ToastContext)
    const [message, setMessage] = useState<string>('')
    const [variant, setVariant] = useState<string>(VARIANT_OPTIONS[0])
   

    function handleCreateToast(e: ChangeEvent){
      e.preventDefault()
       createToast(message, variant)
       setMessage('')
       setVariant("notice")
    }


    useEffect(() => {
      function EnterKey(e: KeyboardEvent){
         if(e.key === "Enter"){
            createToast(message, variant)
            setMessage('')
            setVariant("notice")
         }
      }

      window.addEventListener("keydown", EnterKey)

      return () => {
        window.removeEventListener("keydown", EnterKey)
      }
    }, [message, variant, createToast])
    

   const handleEsc = useCallback(() => {
     setToasts([])
   }, [])

    useEscapeKey("Escape", handleEsc)

  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Toast Playground</h1>
      </header>
        <ToastShelf  />
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
