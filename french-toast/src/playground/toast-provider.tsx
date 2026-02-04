import {useState, type ReactNode } from "react";
import {type Toast } from "../types/toast";
import { ToastContext } from "../toast-context";


export function ToastProvider({children}: {children: ReactNode}){
     const [toasts, setToasts] = useState<Array<Toast>>([])

    function createToast(message: string, variant: Toast['variant'], position: Toast["position"]){
          const nextToasts = [...toasts, {
            id: crypto.randomUUID(),
            message,
            variant,
            position,
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
           <ToastContext.Provider value={{toasts, createToast, dismissToast, setToasts}}>
               {children}
           </ToastContext.Provider>
        </>
       )
   
}