import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().optional(),
    RESEND_KEY: z.string().min(1).optional(),
    VERCEL_URL: z.string().url().optional(),
  },
  client: {
    NEXT_PUBLIC_TEST: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});
