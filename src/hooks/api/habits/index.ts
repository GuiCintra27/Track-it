import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import * as api from "@/services/habitsApi";

export function useHabitsApi(){
  const queryClient = useQueryClient();
  
  const { data: habits, isLoading: habitsLoading } = useQuery(
    ["habits-list"],
    api.getHabits
  );
  
  const { mutate: createHabit } = useMutation(api.postHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["habits-list"]);
    },
  });
  
  const { mutate: deleteHabit } = useMutation(api.deleteHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(["habits-list"]);
    },
  });
  
  return {
    habits,
    habitsLoading,
    createHabit,
    deleteHabit,
  };
}
