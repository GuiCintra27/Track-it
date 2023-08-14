import { CreateHabitData } from "@/lib/types/habits";
import api from "./api";

export async function getHabits(token: string | undefined): Promise<[]> {
  const response = await api.get("/habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postHabit(
  body: CreateHabitData,
  token: string | undefined
): Promise<number> {
  const response = await api.post("/habits", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.status;
}
