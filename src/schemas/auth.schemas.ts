import { z } from "zod";
import { PASSWORD_REGEX } from "../misc/constants";

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
  .refine(({ password }) => PASSWORD_REGEX.test(password), {
    message: "Password must contain at least one number, big letter and special sign.",
    path: ["password"],
  });

export type SignupPayload = z.infer<typeof signupSchema>