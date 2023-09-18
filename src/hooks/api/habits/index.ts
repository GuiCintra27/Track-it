import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as api from "@/services/habitsApi";

export function useHabitsApi() {
  const queryClient = useQueryClient();

  const {
    data: habits,
    isFetching: habitsLoading,
    isError: habitsError,
  } = useQuery(["habits-list"], api.getHabits, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const { mutate: createHabit } = useMutation(api.postHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["habits-list"]);
      queryClient.invalidateQueries(["today-habits-list"]);
    },
  });

  const { mutate: deleteHabit } = useMutation(api.deleteHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["habits-list"]);
      queryClient.invalidateQueries(["today-habits-list"]);
    },
  });

  return {
    habits,
    habitsLoading,
    habitsError,
    createHabit,
    deleteHabit
  };
}
