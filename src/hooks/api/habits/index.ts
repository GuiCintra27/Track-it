import {useHabits} from "@/hooks/api/habits/useHabits";
import {useSaveHabits} from "./useSaveHabits";

export const habitsApi = {
  getHabits: useHabits,
  postCreateHabit: useSaveHabits
}