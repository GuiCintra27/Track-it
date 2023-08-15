import { useDeleteHabit } from "./useDeleteHabit";
import {useHabits} from "./useHabits";
import {useSaveHabits} from "./useSaveHabits";

export const habitsApi = {
  getHabits: useHabits,
  postCreateHabit: useSaveHabits,
  deleteHabit: useDeleteHabit
}