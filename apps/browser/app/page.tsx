import Image from "next/image";
import { cn } from "@repo/tw-class/tw-utils";
export default function Home() {
  return (
    <main className={cn("grid place-items-center h-screen w-full")}>
      <h1 className="text-xl font-semibold">Turbo</h1>
    </main>
  );
}
