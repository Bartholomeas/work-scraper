import { z } from "zod";
import { PASSWORD_REGEX } from "../misc/constants";

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
  .refine(({ password }) => PASSWORD_REGEX.test(password), {
    message: "Hasło musi posiadać conajmniej jedną liczbę, wielką literę oraz znak specjalny.",
    path: ["password"],
  });

export type SignupPayload = z.infer<typeof signupSchema>