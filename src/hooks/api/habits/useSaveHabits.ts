import { CreateHabitData } from "@/lib/types/habits";
import useAsync from "../../useAsync";
import * as habitsApi from "@/services/habitsApi";

export function useSaveHabits() {
  const {
    loading: habitsLoading,
    error: habitsError,
    act: createHabit,
  } = useAsync((body: CreateHabitData, token: string | undefined) =>
    habitsApi.postHabit(body, token), false
  );

  return {
    habitsLoading,
    habitsError,
    createHabit,
  };
}
