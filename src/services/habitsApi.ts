import { instance } from "./instance";
import { CreateHabitData } from "@/lib/types/habits";

export async function getHabits(): Promise<
  [{ id: number; name: string; days: [] }]
> {
  const response = await instance.get("/habits");
  return response.data;
}

export async function postHabit(body: CreateHabitData): Promise<void> {
  await instance.post("/habits", body);
}

export async function deleteHabit(habitId: number): Promise<void> {
  await instance.delete(`/habits/${habitId}`);
}
