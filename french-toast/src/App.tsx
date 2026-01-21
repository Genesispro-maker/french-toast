import { Playground } from "./playground";
import { ToastProvider } from "./playground/toast-provider";

export function App(){
  return (
    <>
      <ToastProvider>
          <Playground />
      </ToastProvider>
    </>
  )
}