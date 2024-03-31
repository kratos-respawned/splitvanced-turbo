import { OPTSchema, OTPResponse } from "@repo/validators/authValidator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let response: OTPResponse = {
    status: "400",
    message: "Invalid Body",
  };
  const unsafeData = await req.json();
  const parsedData = OPTSchema.safeParse(unsafeData);
  if (!parsedData.success) {
    return NextResponse.json(response);
  }
  const { data } = parsedData;

  return NextResponse.json({ message: "" });
}
