import { OPTSchema, OTPResponse } from "@splitvanced/validators/authValidator";
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
  if(data.otp==="1234"){
    response={
      status:"200",
    }
  }else{
    response={
      status:"401",
      message:"Invalid OTP"
    }
  }

  return NextResponse.json(response);
}
