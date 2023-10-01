import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as api from "@/services/todayApi";
import { timeUntilTheNextDay } from "@/lib/functions/timeUntilTheNextDay";

export function useTodayHabitsApi() {
  const queryClient = useQueryClient();

  const { data: todayHabits, isFetching } = useQuery(
    ["today-habits-list"],
    api.getTodayHabits,
    {
      staleTime: timeUntilTheNextDay,
      cacheTime: timeUntilTheNextDay,
    }
  );

  const { mutate: checkHabit } = useMutation(api.checkTodayHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["today-habits-list"]);
      queryClient.invalidateQueries(["history"]);
    },
  });

  const { mutate: uncheckHabit } = useMutation(api.uncheckTodayHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["today-habits-list"]);
      queryClient.invalidateQueries(["history"]);
    },
  });

  return {
    todayHabits,
    isFetching,
    checkHabit,
    uncheckHabit,
  };
}
