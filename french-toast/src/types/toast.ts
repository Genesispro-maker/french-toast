export type Toast = {
  id: string;
  message: string;
  variant: 'notice' | 'warning' | 'success' | 'error';
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

export type ToastContextType = {
  toasts: Toast[];
  createToast: (message: string, variant: Toast['variant'], position: Toast["position"]) => void;
  dismissToast: (id: string) => void;
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>;
};

