import z from "zod";

export const createExpenseSchema = z.object({
    name:z.string().min(1).max(255),
    amount:z.coerce.number().min(0.01),
    paidBy:z.string().min(1).max(255),
    paidFor:z.array(z.string().min(1).max(255)).min(1),
})
export const createExpenseSubmitSchema=createExpenseSchema.extend({
        groupId:z.string().min(1).max(255),
})

export type createExpenseSchema=z.infer<typeof createExpenseSchema>
export type createExpenseSubmitSchema=z.infer<typeof createExpenseSubmitSchema>