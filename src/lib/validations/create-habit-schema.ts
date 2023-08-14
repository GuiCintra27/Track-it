import { z } from "zod";

export const createHabitSchema = z.object({
  name: z
  .string()
  .min(3, { message: "O nome deve possuir pelo menos 3 caracteres." })
  .nonempty("O nome é obrigatório"),
  days: z
  .number()
  .max(6)
  .array()
  .min(1, {message: "Pelo menos um dia da semana deve ser selecionado"})
  .max(6)
});
