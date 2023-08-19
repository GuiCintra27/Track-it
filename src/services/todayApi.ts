import { instance } from "./instance";

export type todayHabitsResponse = {
  id: number;
  name: string;
  done: boolean;
  currentSequence: number;
  highestSequence: number;
};

export async function getTodayHabits(): Promise<[todayHabitsResponse]> {
  const response = await instance.get("/habits/today");
  return response.data;
}

export async function checkTodayHabit(id: number): Promise<void> {
  await instance.post(`/habits/${id}/check`);
}

export async function uncheckTodayHabit(id: number): Promise<void> {
  await instance.post(`/habits/${id}/uncheck`);
}
