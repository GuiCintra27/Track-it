import { z } from "zod";

export const changeProfileDataSchema = z.object({
  name: z
  .string(),
  profileImage: z
  .any()
});
