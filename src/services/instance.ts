import axios from "axios";

import { useLocalStorage } from "@/hooks/useLocalStorage";

const apiData: { token?: string } = useLocalStorage.getItem("userApiData");

export const instance = apiData?.token !== undefined ? axios.create({
  headers: {
    Authorization: `Bearer ${apiData?.token}`,
  },
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
}) : axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
