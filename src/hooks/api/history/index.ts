import { useQuery } from "@tanstack/react-query";

import * as api from "@/services/historyApi";
import { timeUntilTheNextDay } from "@/lib/functions/timeUntilTheNextDay";

export function useHistoryApi() {
  const {
    data: history,
    isFetching: historyLoading,
    isError: historyError,
  } = useQuery(["history"], api.getHistory, {
    staleTime: timeUntilTheNextDay,
    cacheTime: Infinity,
  });

  return {
    history,
    historyLoading,
    historyError,
  };
}
