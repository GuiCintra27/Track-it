import { z } from "zod";
import { settingsSchema } from "../validations/settings-schema";

export type SettingsData = z.infer<typeof settingsSchema>;