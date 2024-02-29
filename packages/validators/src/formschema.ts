import { z } from "zod";
export const FormSchema = z.object({
  name: z.string().min(3),
  // email: z.string().email(),
  //   password: z.string().min(6),
});

export type FormSchema = z.infer<typeof FormSchema>;
