DO $$ BEGIN
 CREATE TYPE "user_role" AS ENUM('user', 'admin', 'superadmin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"created_at" date DEFAULT now() NOT NULL,
	"updated_at" date DEFAULT now() NOT NULL,
	"avatar" varchar DEFAULT 'https://api.dicebear.com/7.x/pixel-art/svg?seed=123' NOT NULL,
	"verified" boolean DEFAULT false NOT NULL,
	"role" "user_role" DEFAULT 'user' NOT NULL,
	"otp" varchar,
	"otp_expiry" date,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
