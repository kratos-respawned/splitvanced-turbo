import {
  boolean,
  pgEnum,
  pgTable,
  serial,
  varchar,
  date,
} from "drizzle-orm/pg-core";
export const userRole = pgEnum("user_role", ["user", "admin", "superadmin"]);
export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  created_at: date("created_at").notNull().defaultNow(),
  updated_at: date("updated_at").notNull().defaultNow(),
  avatar: varchar("avatar")
    .notNull()
    .default("https://api.dicebear.com/7.x/pixel-art/svg?seed=123"),
  verified: boolean("verified").notNull().default(false),
  role: userRole("role").notNull().default("user"),
  otp: varchar("otp"),
  otp_expiry: date("otp_expiry"),
});

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
