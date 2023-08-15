import { CreateHabitData } from "@/lib/types/habits";
import { authInstance } from "./authInstance";

export async function getHabits(): Promise<
  [{ id: number; name: string; days: [] }]
> {
  const response = await authInstance.get("/habits");
  return response.data;
}

export async function postHabit(body: CreateHabitData): Promise<number> {
  const response = await authInstance.post("/habits", body);
  return response.status;
}

export async function deleteHabit(habitId: number): Promise<number> {
  const response = await authInstance.delete(`/habits/${habitId}`);
  return response.status;
}
