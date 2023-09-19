import { instance } from "./instance";
import { SignInData, SignUpData } from "@/lib/types/auth";

export async function signIn({ email, password }: SignInData) {
  const response = await instance.post("/auth/login", { email, password });
  return response.data;
}

export async function signUp({ name, email, password }: SignUpData) {
  await instance.post("/auth/sign-up", {
    name,
    email,
    password,
    image: "https://i.imgur.com/r7JNyeg.png",
  });
}
