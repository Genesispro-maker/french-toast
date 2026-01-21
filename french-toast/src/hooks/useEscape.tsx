import { useEffect } from "react";

export function useEscapeKey(key, callback){
    useEffect(() => {
         function HandleEsc(e: KeyboardEvent){
          if(e.key === key){
            callback(e)
          }
      }

      window.addEventListener("keydown", HandleEsc)

      return () => {
        window.removeEventListener("keydown", HandleEsc)
      }
    }, [callback, key])
}