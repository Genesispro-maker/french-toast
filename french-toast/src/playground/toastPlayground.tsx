import { useState } from "react";
import styles from "./playground.module.css"


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export function Playground(){
    const [message, setMessage] = useState<string>('')
    const [variant, setVariant] = useState<string>(VARIANT_OPTIONS[0])


  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Toast Playground</h1>
      </header>

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
              return <label htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={options}
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
            <button>Pop toast</button>
          </div>
        </div>
      </div>
    </div>
  );
}
