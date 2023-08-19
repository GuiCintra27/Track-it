import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as api from "@/services/todayApi";

export function useTodayHabitsApi() {
  const queryClient = useQueryClient();

  const { data: todayHabits, isLoading } = useQuery(
    ["today-habits-list"],
    api.getTodayHabits
  );

  const { mutate: checkHabit } = useMutation(api.checkTodayHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["today-habits-list"]);
    },
  });

  const { mutate: uncheckHabit } = useMutation(api.uncheckTodayHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["today-habits-list"]);
    },
  });

  return {
    todayHabits,
    isLoading,
    checkHabit,
    uncheckHabit
  };
}
