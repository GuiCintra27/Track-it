import { z } from "zod";
import { createHabitSchema } from "../validations/create-habit-schema";

export type CreateHabitData = z.infer<typeof createHabitSchema>;