import { UseMutateFunction } from "@tanstack/react-query";

import { errorToast } from "@/components/UI/alerts";

interface handleTodayHabitProps {
  id: number;
  checkHabit: UseMutateFunction<void, unknown, number, unknown>;
  uncheckHabit: UseMutateFunction<void, unknown, number, unknown>;
}

export function handleCheckHabit({
  id,
  checkHabit,
}: Omit<handleTodayHabitProps, "uncheckHabit">) {
  try {
    checkHabit(id);
  } catch (error) {
    errorToast("oops... Recarregue página por favor");
  }
}

export function handleUncheckHabit({
  id,
  uncheckHabit,
}: Omit<handleTodayHabitProps, "checkHabit">) {
  try {
    uncheckHabit(id);
  } catch (error) {
    errorToast("oops... Recarregue página por favor");
  }
}
