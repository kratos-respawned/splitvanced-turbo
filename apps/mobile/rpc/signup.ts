import { save } from "@/lib/secureStorage";
import { server } from "@/lib/server";
import { SignUpResponse, SignUpSchema } from "@splitvanced/validators/src/authSchema";
import {} from "expo-secure-store";
export const signup = async (data: SignUpSchema): Promise<SignUpResponse> => {
  try {
    const response = await server.post("/api/auth/signup", data);
    const result = SignUpResponse.parse(response.data);
    console.log(result);
    if (result.status === "403") {
      await save("token", result.token);
      return {
        status: "403",
        token: "Email not verified",
      };
    }
    return result;
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Internal Server Error",
    };
  }
};
