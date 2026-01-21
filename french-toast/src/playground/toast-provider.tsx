import {createContext, useState } from "react";

export const ToastContext = createContext()

export function ToastProvider({children}){
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

    function createToast(message: string, variant: string){
          const nextToasts = [...toasts, {
            id: crypto.randomUUID(),
            message,
            variant,
      }]

      setToasts(nextToasts)
}

     function dismissToast(id: string){
        const dismisstoast = toasts.filter((toast) => {
            return toast.id !== id
        })
        setToasts(dismisstoast)
     }

       return (
        <>
           <ToastContext.Provider value={{toasts, createToast, dismissToast}}>
               {children}
           </ToastContext.Provider>
        </>
       )
   
}