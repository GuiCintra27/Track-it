import { createHabitSchema } from "@/lib/validations/create-habit-schema";

interface HandleCreateHabitProps {
  data: { name: string; days: number[] };
  createHabit: (
    { name, days }: { name: string; days: number[] },
    token?: string
  ) => Promise<any>;
  reloadHabits: (token?: string) => Promise<any>;
  token?: string;
  errorToast: (text: string) => void;
  resetInputData: () => void
}

export async function handleCreateHabit({
  data,
  createHabit,
  reloadHabits,
  token,
  resetInputData,
  errorToast,
}: HandleCreateHabitProps) {
  try {
    const validation = createHabitSchema.safeParse(data);
    if(validation.success){
      await createHabit(data, token);
      reloadHabits(token);
      resetInputData()
    }else{
      const errors = validation.error.format()
      if(errors.name) errorToast(errors.name._errors[0])
      else if(errors.days) errorToast(errors.days._errors[0])
    }
  } catch (error) {
    errorToast("Oops, parece que houve um erro...")
    throw error;
  }
}
