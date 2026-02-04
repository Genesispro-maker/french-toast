export type Toast = {
  id: string;
  message: string;
  variant: 'notice' | 'warning' | 'success' | 'error';
};

export type ToastContextType = {
  toasts: Toast[];
  createToast: (message: string, variant: Toast['variant']) => void;
  dismissToast: (id: string) => void;
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>;
};

