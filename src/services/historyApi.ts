import { instance } from "./instance";
import { History } from "@/lib/types/history";

export async function getHistory(): Promise<History[]> {
  const response = await instance.get("/habits/history/daily");
  return response.data;
}
