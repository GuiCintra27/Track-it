import { useLocalStorage } from "@/hooks/useLocalStorage";
import axios from "axios";

const apiData: { token?: string } = useLocalStorage.getItem("userApiData");

export const authInstance = axios.create({
  headers: {
    Authorization: `Bearer ${apiData?.token}`,
  },
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
