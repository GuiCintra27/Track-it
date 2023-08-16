import { checkTodayHabit } from "./checkTodayHabit";
import { uncheckTodayHabit } from "./uncheckTodayHabit";
import { useTodayHabits } from "./useTodayHabits";

export const todayApi = {
  getHabits: useTodayHabits,
  checkHabit: checkTodayHabit,
  uncheckHabit: uncheckTodayHabit
};
