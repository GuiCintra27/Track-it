import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email().nonempty("O e-mail é obrigatório."),
  password: z.string().nonempty("A senha é obrigatória"),
});
