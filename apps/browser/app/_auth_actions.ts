"use server";
import { db } from "@/db/db";
import { user } from "@/db/schema";
import {
  SignInResponse,
  SignInSchema,
  SignUpResponse,
  SignUpSchema,
} from "@repo/validators/authValidator";
import { DrizzleError, and, eq } from "drizzle-orm";
export const Login = async (unsafe: unknown): Promise<SignInResponse> => {
  const safeData = SignInSchema.safeParse(unsafe);
  if (!safeData.success)
    return {
      status: "400",
      message: "Invalid Request",
    };
  const { data } = safeData;
  try {
    const usr = await db
      .select()
      .from(user)
      .where(and(eq(user.email, data.email), eq(user.password, data.password)));
    if (usr.length == 0) {
      return {
        status: "400",
        message: "Invalid Credentials",
      };
    }
    if (usr[0].verified == false) {
      return {
        status: "403",
        message: "Email not verified",
      };
    }
    return {
      status: "200",
      token: "token",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Internal Server Error",
    };
  }
};
export const SignUp = async (unsafe: unknown): Promise<SignUpResponse> => {
  const safeData = SignUpSchema.safeParse(unsafe);
  if (!safeData.success) {
    return {
      status: "400",
      message: "Invalid Request Body",
    };
  }
  const { data } = safeData;
  try {
    const NewUser = await db.insert(user).values({
      name: data.name,
      password: data.password,
      email: data.email,
      otp: Math.floor(100000 + Math.random() * 900000).toString(),
      verified: false,
      otp_expiry: new Date(Date.now() + 60000).toISOString(),
    });
    console.log(NewUser);
    return {
      status: "403",
      token: "token",
    };
  } catch (e) {
    if (e instanceof DrizzleError) {
      return {
        status: "500",
        message: e.message,
      };
    }
    if (
      e &&
      typeof e === "object" &&
      "name" in e &&
      e.name == "PostgresError"
    ) {
      return {
        status: "500",
        message: "Email already exists",
      };
    }
    return {
      status: "500",
      message: "Internal Server Error",
    };
  }
};
