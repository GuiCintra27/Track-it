import { z } from "zod";
import { signUpSchema } from "../validations/sign-up-schema";
import { signInSchema } from "../validations/sign-in-schema";

export type SignUpData = z.infer<typeof signUpSchema>;
export type SignInData = z.infer<typeof signInSchema>;