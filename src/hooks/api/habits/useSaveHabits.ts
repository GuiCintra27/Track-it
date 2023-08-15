import { CreateHabitData } from "@/lib/types/habits";
import useAsync from "../../useAsync";
import * as habitsApi from "@/services/habitsApi";

export function useSaveHabits() {
  const {
    loading: habitsLoading,
    error: habitsError,
    act: createHabit,
  } = useAsync((body: CreateHabitData) => habitsApi.postHabit(body), false);

  return {
    habitsLoading,
    habitsError,
    createHabit,
  };
}
