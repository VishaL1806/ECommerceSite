import { z } from "zod";

export const SignInFormValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,
        {message : "Too short!!"}).max(50),
  })

 export const SignUpFormValidation = z.object({
    name:z.string().min(2,
        {message : "Too short!!"}).max(50),
    email: z.string().email(),
    password: z.string().min(8,
        {message : "Too short!!"}).max(50),
  })