import z from "zod";

export const newGroupSchema = z.object({
    name: z.string().min(1).max(100),
    category: z.enum(["Trip", "Home", "Couple", "Other"]),
});
export type newGroupSchema=z.infer<typeof newGroupSchema>
    