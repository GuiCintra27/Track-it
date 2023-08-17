import useAsync from "../../useAsync";
import * as todayApi from "@/services/todayApi";

export function useCheckTodayHabit() {
  const {
    loading: checkHabitLoading,
    error: checkHabitError,
    act: checkHabit,
  } = useAsync((id: number) => todayApi.checkTodayHabit(id), false);

  return {
    checkHabitLoading,
    checkHabitError,
    checkHabit,
  };
}
