import useAsync from "../../useAsync";
import * as habitsApi from "@/services/habitsApi";

export default function useSaveHabits(token: string | undefined) {
  const {
    data: habits,
    loading: habitsLoading,
    error: habitsError,
  } = useAsync(() => habitsApi.getHabits(token));

  return {
    habits,
    habitsLoading,
    habitsError,
  };
}
