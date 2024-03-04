import { z } from "zod";
const passwordErr = "Password must be between 8 and 22 characters";
const mailErr = "Email cannot me more than 50 characters";
const nameErr = "Name must be between 3 and 22 characters";
export const SignUpSchema = z
  .object({
    name: z.string().min(3, nameErr).max(22, nameErr),
    email: z.string().email().max(50, mailErr),
    password: z.string().min(8, passwordErr).max(22, passwordErr),
    confirmPassword: z.string().min(8, passwordErr).max(22, passwordErr),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof SignUpSchema>;
export const SignUpResponse = z
  .object({
    status: z.enum(["400", "500"]),
    message: z.string(),
  })
  .or(
    z.object({
      status: z.enum(["403"]),
      token: z.string(),
    })
  );

export type SignUpResponse = z.infer<typeof SignUpResponse>;

export const SignInSchema = z.object({
  email: z.string().email().max(50, mailErr),
  password: z.string().min(8, passwordErr).max(22, passwordErr),
});
export type SignInSchema = z.infer<typeof SignInSchema>;

export const SignInResponse = z
  .object({
    status: z.enum(["400", "403", "500"]),
    message: z.string(),
  })
  .or(
    z.object({
      status: z.enum(["200"]),
      token: z.string().optional(),
    })
  );

export type SignInResponse = z.infer<typeof SignInResponse>;
