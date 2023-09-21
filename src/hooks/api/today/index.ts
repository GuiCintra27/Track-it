import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as api from "@/services/todayApi";

function getTimeUntilNextDay(): number {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0); // Set time to the start of the next day

  const timeUntilNextDay = tomorrow.getTime() - now.getTime();
  return timeUntilNextDay;
}

export function useTodayHabitsApi() {
  const queryClient = useQueryClient();

  const { data: todayHabits, isFetching } = useQuery(
    ["today-habits-list"],
    api.getTodayHabits,
    {
      staleTime: getTimeUntilNextDay(),
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
