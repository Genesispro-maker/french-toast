import { useCallback, useContext, useEffect, useRef, useState, type ChangeEvent } from "react";
import styles from "./playground.module.css"
import { type Toast } from "../types/toast";
import { ToastShelf } from "../stack";
import { ToastContext } from "../toast-context";
import { useEscapeKey } from "../hooks/useEscape";


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'] as const;
const POSITION_OPTIONS = ["top-right", "top-left", "bottom-right" ,"bottom-left"] as const


export function Playground(){
    const [message, setMessage] = useState<string>('')
    const [variant, setVariant] = useState<Toast["variant"]>(VARIANT_OPTIONS[0])
    const [position, setPosition] = useState<Toast["position"]>(POSITION_OPTIONS[0])

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)


   const handleInput = () => {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto"; // reset height
    textarea.style.height = textarea.scrollHeight + "px"; // grow to fit content
  };


    const context = useContext(ToastContext)

    if(!context){
      throw new Error("ToastContext must be within ToastProvider")
    }

    const {createToast} = context
    const {setToasts} = context
   

    function handleCreateToast(e: ChangeEvent){
      e.preventDefault()
       createToast(message, variant, position)
       setMessage('')
       setVariant("notice")
    }


    useEffect(() => {
      function EnterKey(e: KeyboardEvent){
         if(e.key === "Enter"){
            createToast(message, variant, position)
            setMessage('')
            setVariant("notice")
         }
      }

      window.addEventListener("keydown", EnterKey)

      return () => {
        window.removeEventListener("keydown", EnterKey)
      }
    }, [message, variant, createToast, position])

   const handleEsc = useCallback(() => {
     setToasts([])
   }, [setToasts])

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
            <textarea ref={textAreaRef} onInput={handleInput} id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)}/>
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
                onChange={(e) => setVariant(e.target.value as Toast["variant"])}
                className={styles[options]}
              />
               {options}
              </label>
            })}
          </div>
        </div>
       
       <div className={styles.row}>

        <div className={styles.label}>Position</div>

     <div className={`${styles.PositionWrapper} ${styles.inputWrapper}`}>
        {POSITION_OPTIONS.map((positions) => {
           const id = `position-${positions}`;
          return (
            <label htmlFor="position">
              <input id={id} type="radio" name="position" value={positions} checked={positions === position} onChange={(e) => setPosition(e.target.value as Toast["position"])}/>
              {positions}
            </label>
          )
        })}
        </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <button className={styles.button} onClick={(e) => handleCreateToast(e)}>Pop toast</button>
          </div>
        </div>
      </div>
    </div>
  );
}
