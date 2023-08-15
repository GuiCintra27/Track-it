import Swal, { SweetAlertResult } from "sweetalert2";

import { createHabitSchema } from "@/lib/validations/create-habit-schema";

interface HandleCreateHabitProps {
  data: { name: string; days: number[] };
  createHabit: ({
    name,
    days,
  }: {
    name: string;
    days: number[];
  }) => Promise<any>;
  reloadHabits: () => Promise<any>;
  errorToast: (text: string) => void;
  resetInputData: () => void;
}

export async function handleCreateHabit({
  data,
  createHabit,
  reloadHabits,
  resetInputData,
  errorToast,
}: HandleCreateHabitProps) {
  try {
    const validation = createHabitSchema.safeParse(data);
    if (validation.success) {
      await createHabit(data);
      reloadHabits();
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
  id: string;
  deleteHabit: (id: string) => Promise<any>;
  confirmAlert: (title: string, text: string) => Promise<SweetAlertResult<any>>;
  reloadHabits: () => Promise<any>;
}

export function handleDeleteHabit({
  id,
  deleteHabit,
  confirmAlert,
  reloadHabits,
}: handleDeleteHabitProps) {
  confirmAlert("Você tem certeza?", "Esta é uma ação irreversível").then(
    async (response) => {
      if (response.isConfirmed) {
        try {
          await deleteHabit(id);
          Swal.fire("Hábito deletado com sucesso", "", "success");
          reloadHabits();
        } catch (error) {
          Swal.fire("Oops, parece que houve um erro...", "error");
        }
      }
    }
  );
}
