import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  width: "100vw",
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const successToast = (text: string) => {
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

export const confirmAlert = (title: string, text: string) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#126ba5",
    cancelButtonColor: "#d33",
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
  });
