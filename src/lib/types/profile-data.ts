import { z } from "zod";
import { changeProfileDataSchema } from "../validations/change-profile-data-schema";

export type ChangeProfileData = z.infer<typeof changeProfileDataSchema>;