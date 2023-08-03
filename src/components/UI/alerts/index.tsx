import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const succesToast = (text: string) => {
  Toast.fire({
    icon: "success",
    title: text,
    customClass: "sweet-toast",
  });
};

export const errorToast = (text: string) => {
  Toast.fire({
    icon: "error",
    title: text,
    customClass: "sweet-toast",
  });
};

export const warningToast = (text: string) => {
  Toast.fire({
    icon: "warning",
    title: text,
    customClass: "sweet-toast",
  });
};
