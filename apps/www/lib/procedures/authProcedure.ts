import { createServerActionProcedure } from "zsa";
// TODO: create separate directory for custom errors
export class AuthError extends Error {}; 
// Do not use this function directly, use authedProcedure instead
const authedProcedureFactory=createServerActionProcedure().handler(async()=>{
    // TODO: create auth function abstraction
    try{

        // const user =await auth();
        const user={
            name:"rick",
            email:"neverGonna@give.you.up"
        }
        return {user};
    }catch(e){
        throw new AuthError("User not authenticated");
    }
})

export const authedProcedure=authedProcedureFactory.createServerAction();