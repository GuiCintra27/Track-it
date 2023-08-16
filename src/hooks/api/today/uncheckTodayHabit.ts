import useAsync from "../../useAsync";
import * as todayApi from "@/services/todayApi";

export function uncheckTodayHabit() {
  const {
    loading: uncheckHabitLoading,
    error: uncheckHabitError,
    act: uncheckHabit,
  } = useAsync((id: number) => todayApi.uncheckTodayHabit(id), false);

  return {
    uncheckHabitLoading,
    uncheckHabitError,
    uncheckHabit,
  };
}
