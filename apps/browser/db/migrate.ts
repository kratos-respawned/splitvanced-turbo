import { db } from "@/db/db";
import { migrate } from "drizzle-orm/postgres-js/migrator";
async function main() {
  await migrate(db, {
    migrationsFolder: "./drizzle",
  });
  process.exit(0);
}
main()
  .then(() => {
    console.log("migrations ran successfully");
  })
  .catch((e) => {
    console.error("error running migrations", e);
  });
