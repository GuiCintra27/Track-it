import { z } from "zod";

export const settingsSchema = z.object({
  theme: z
  .string(),
  language: z
  .string()
});
