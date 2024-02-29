"use client";

import React, { FormEvent, useState } from "react";
import { FormSchema } from "@repo/validators/formValidator";
export default function Page(): JSX.Element {
  const [name, setName] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const parsedData = FormSchema.parse({ name });
      console.log(parsedData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <form onSubmit={submitHandler}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </main>
  );
}
