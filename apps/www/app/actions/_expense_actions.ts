"use server"
import { authedProcedure } from "@/lib/procedures/authProcedure";
import { createExpenseSubmitSchema } from "@splitvanced/validators/expenseValidator";

// TODO :: use TRPC instead of zsa
export const createExpense=authedProcedure.input(createExpenseSubmitSchema).handler(async ({ctx,input})=>{

})