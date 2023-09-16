import { TFunction } from "i18next";
import Swal, { SweetAlertResult } from "sweetalert2";
import { UseMutateFunction } from "@tanstack/react-query";

import { createHabitSchema } from "@/lib/validations/create-habit-schema";

interface HandleCreateHabitProps {
  data: { name: string; days: number[] };
  createHabit: UseMutateFunction<
    void,
    unknown,
    {
      name: string;
      days: number[];
    },
    unknown
  >;
  errorToast: (text: string) => void;
  resetInputData: () => void;
}

export async function handleCreateHabit({
  data,
  createHabit,
  resetInputData,
  errorToast,
}: HandleCreateHabitProps) {
  try {
    const validation = createHabitSchema.safeParse(data);
    if (validation.success) {
      await createHabit(data);
      resetInputData();
    } else {
      const errors = validation.error.format();
      if (errors.name) errorToast(errors.name._errors[0]);
      else if (errors.days) errorToast(errors.days._errors[0]);
    }
  } catch (error) {
    errorToast("Oops, parece que houve um erro...");
    throw error;
  }
}

interface handleDeleteHabitProps {
  id: number;
  deleteHabit: UseMutateFunction<void, unknown, number, unknown>;
  confirmAlert: (title: string, text: string, buttonsText: { confirm: string, cancel: string }) => Promise<SweetAlertResult<any>>;
  t: TFunction<"translation", undefined>
}

export function handleDeleteHabit({
  id,
  deleteHabit,
  confirmAlert,
  t
}: handleDeleteHabitProps) {
  const confirmText = t("alerts.confirm-alert").split("-");

  confirmAlert(confirmText[0], confirmText[1], { confirm: t("alerts.confirm-button"), cancel: t("alerts.cancel-button") }).then(
    (response) => {
      if (response.isConfirmed) {
        try {
          deleteHabit(id);
          Swal.fire("Hábito deletado com sucesso", "", "success");
        } catch (error) {
          Swal.fire("Oops, parece que houve um erro...", "error");
        }
      }
    }
  );
}
