import { TFunction } from "i18next";
import { UseMutateFunction } from "@tanstack/react-query";

import { errorToast } from "@/components/UI/alerts";

interface handleTodayHabitProps {
  id: number;
  checkHabit: UseMutateFunction<void, unknown, number, unknown>;
  uncheckHabit: UseMutateFunction<void, unknown, number, unknown>;
  t: TFunction<"translation", undefined>;
}

export function handleCheckHabit({
  id,
  checkHabit,
  t,
}: Omit<handleTodayHabitProps, "uncheckHabit">) {
  try {
    checkHabit(id);
  } catch {
    errorToast(t("alerts.error"));
  }
}

export function handleUncheckHabit({
  id,
  uncheckHabit,
  t,
}: Omit<handleTodayHabitProps, "checkHabit">) {
  try {
    uncheckHabit(id);
  } catch {
    errorToast(t("alerts.reload-page"));
  }
}
