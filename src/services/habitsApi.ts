import api from "./api";

export async function getHabits(token: string | undefined): Promise<[]> {
  const response = await api.get("/habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
