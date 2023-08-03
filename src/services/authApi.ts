import api from "./api";
import { SignInData, SignUpData } from "@/lib/types/auth";

export async function signIn({ email, password }: SignInData) {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
}

export async function signUp({ name, email, password }: SignUpData) {
  const response = await api.post("/auth/sign-up", {
    name,
    email,
    password,
    image:
      "https://i.pinimg.com/236x/8c/e5/3f/8ce53f52b2dd9fb20d125c1e7b1e0425.jpg",
  });
  return response.data;
}
