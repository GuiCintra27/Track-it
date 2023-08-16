interface handleTodayHabitProps {
  id: number;
  checkHabit: (id: number) => Promise<void>;
  uncheckHabit: (id: number) => Promise<void>;
  reloadHabits: () => Promise<void>;
}

export async function handleCheckHabit({
  id,
  checkHabit,
  reloadHabits,
}: Omit<handleTodayHabitProps, "uncheckHabit">) {
  try {
    await checkHabit(id);
    await reloadHabits();
  } catch (error) {
    console.log(error);
  }
}

export async function handleUncheckHabit({
  id,
  uncheckHabit,
  reloadHabits,
}: Omit<handleTodayHabitProps, "checkHabit">) {
  try {
    await uncheckHabit(id);
    await reloadHabits();
  } catch (error) {
    console.log(error);
  }
}
