import { z } from "zod";

import api from "./api";
import { signUpSchema } from "@/lib/validations/sign-up-schema";

type SignUp = z.infer<typeof signUpSchema>;

export async function signIn({
  email,
  password,
}: Pick<SignUp, "email" | "password">) {
  const response = await api.post("/auth/sign-in", { email, password });
  return response.data;
}

export async function signUp({ name, email, password }: SignUp) {
  const response = await api.post("/auth/sign-up", {
    name,
    email,
    password,
  });
  return response.data;
}
