import { authInstance } from "./authInstance";
import { CreateHabitData } from "@/lib/types/habits";

export async function getHabits(): Promise<
  [{ id: number; name: string; days: [] }]
> {
  const response = await authInstance.get("/habits");
  return response.data;
}

export async function postHabit(body: CreateHabitData): Promise<void> {
  await authInstance.post("/habits", body);
}

export async function deleteHabit(habitId: number): Promise<void> {
  await authInstance.delete(`/habits/${habitId}`);
}
