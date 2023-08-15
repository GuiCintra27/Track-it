import useAsync from "../../useAsync";
import * as habitsApi from "@/services/habitsApi";

export function useDeleteHabit() {
  const {
    loading: deleteHabitLoading,
    error: deleteHabitError,
    act: deleteHabit,
  } = useAsync((habitId: number) => habitsApi.deleteHabit(habitId), false);

  return {
    deleteHabitLoading,
    deleteHabitError,
    deleteHabit,
  };
}
