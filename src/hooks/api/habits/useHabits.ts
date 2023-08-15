import useAsync from "../../useAsync";
import * as habitsApi from "@/services/habitsApi";

export function useHabits() {
  const {
    data: habits,
    loading: habitsLoading,
    error: habitsError,
    act: reloadHabits
  } = useAsync(habitsApi.getHabits);

  return {
    habits,
    habitsLoading,
    habitsError,
    reloadHabits
  };
}
