import { SignUp } from "@/app/actions/_auth_actions";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const unSafeData = await req.json();
  let resp = await SignUp(unSafeData);
  if (resp.status === "403") {
    cookies().set("token", resp.token);
  }
  return NextResponse.json(resp);
}
