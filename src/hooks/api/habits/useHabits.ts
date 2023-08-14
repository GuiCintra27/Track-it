import useAsync from "../../useAsync";
import * as habitsApi from "@/services/habitsApi";

export function useHabits(token: string | undefined) {
  const {
    data: habits,
    loading: habitsLoading,
    error: habitsError,
    act: reloadHabits
  } = useAsync((userToken = token) => habitsApi.getHabits(userToken));

  return {
    habits,
    habitsLoading,
    habitsError,
    reloadHabits
  };
}
