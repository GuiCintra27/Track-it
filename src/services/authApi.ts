import { instance } from "./instance";
import { SignInData, SignUpData } from "@/lib/types/auth";

export async function signIn({ email, password }: SignInData) {
  const response = await instance.post("/auth/login", { email, password });
  return response.data;
}

export async function signUp({ name, email, password }: SignUpData) {
  const response = await instance.post("/auth/sign-up", {
    name,
    email,
    password,
    image:
      "https://i.pinimg.com/236x/8c/e5/3f/8ce53f52b2dd9fb20d125c1e7b1e0425.jpg",
  });
  return response.status;
}
