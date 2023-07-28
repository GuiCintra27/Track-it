import { z } from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .email({ message: "Email inválido." })
    .nonempty("O e-mail é obrigatório."),
  password: z
    .string()
    .min(6, { message: "A senha deve possuir pelo menos 6 caracteres." })
    .max(16, { message: "A senha deve possuir no máximo 16 caracteres." })
    .nonempty("A senha é obrigatória"),
  name: z
    .string()
    .min(3, { message: "O nome deve possuir pelo menos 3 caracteres." })
    .nonempty("O nome é obrigatório"),
});
