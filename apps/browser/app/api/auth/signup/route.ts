import { SignUp } from "@/app/_auth_actions";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(req: Request) {
  const unSafeData = await req.json();
  let resp = await SignUp(unSafeData);
  if (resp.status === "403") {
    cookies().set("token", resp.token);
  }
  return NextResponse.json(resp);
}
