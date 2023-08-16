import useAsync from "../../useAsync";
import * as todayApi from "@/services/todayApi";

export function useTodayHabits() {
  const {
    data: habits,
    loading: habitsLoading,
    error: habitsError,
    act: reloadHabits
  } = useAsync(todayApi.getTodayHabits);

  return {
    habits,
    habitsLoading,
    habitsError,
    reloadHabits
  };
}
