import { authInstance } from "./authInstance";

export type todayHabitsResponse = {
  id: number;
  name: string;
  done: boolean;
  currentSequence: number;
  highestSequence: number;
};

export async function getTodayHabits(): Promise<[todayHabitsResponse]> {
  const response = await authInstance.get("/habits/today");
  return response.data;
}

export async function checkTodayHabit(id: number): Promise<void> {
  await authInstance.post(`/habits/${id}/check`);
}

export async function uncheckTodayHabit(id: number): Promise<void> {
  await authInstance.post(`/habits/${id}/uncheck`);
}
