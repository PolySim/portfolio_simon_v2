"use server";

import { z } from "zod";
import { formSchema } from "@/components/Contact/FormContact";

export const sendEmail = async ({
  formData,
}: {
  formData: z.infer<typeof formSchema>;
}) => {
  if (!process.env.EMAIL_KEY) {
    throw new Error("No email key found");
  }
  const json = JSON.stringify({
    ...formData,
    access_key: process.env.EMAIL_KEY,
  });
  return await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then((res) => res.json())
    .then((result) => !!result.success)
    .catch(() => false);
};
