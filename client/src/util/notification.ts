import { toast } from "react-toastify";

type ToastType = "error" | "warning" | "success";

export const pushNotification = (msg: string, type: ToastType) => {
  toast[type](msg, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    pauseOnFocusLoss: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};
