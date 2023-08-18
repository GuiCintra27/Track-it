import { Dispatch } from "react";
import { AnyAction } from "redux";

import { setTodayHabits } from "../storage/habits-slice";
import { errorToast } from "@/components/UI/alerts";

interface handleTodayHabitProps {
  id: number;
  checkHabit: (id: number) => Promise<void>;
  uncheckHabit: (id: number) => Promise<void>;
  reloadHabits: () => Promise<any>;
  dispatch: Dispatch<AnyAction>;
}

export async function handleCheckHabit({
  id,
  checkHabit,
  reloadHabits,
  dispatch,
}: Omit<handleTodayHabitProps, "uncheckHabit">) {
  try {
    await checkHabit(id);
    const response = await reloadHabits();
    dispatch(
      setTodayHabits({
        habits: response,
      })
    );
  } catch (error) {
    errorToast("oops... Recarregue página por favor");
  }
}

export async function handleUncheckHabit({
  id,
  uncheckHabit,
  reloadHabits,
  dispatch,
}: Omit<handleTodayHabitProps, "checkHabit">) {
  try {
    await uncheckHabit(id);
    const response = await reloadHabits();
    dispatch(
      setTodayHabits({
        habits: response,
      })
    );
  } catch (error) {
    errorToast("oops... Recarregue página por favor");
  }
}
