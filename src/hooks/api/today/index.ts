import { useCheckTodayHabit } from "./useCheckTodayHabit";
import { useUncheckTodayHabit } from "./useUncheckTodayHabit";
import { useTodayHabits } from "./useTodayHabits";

export const todayApi = {
  getHabits: useTodayHabits,
  checkHabit: useCheckTodayHabit,
  uncheckHabit: useUncheckTodayHabit
};
