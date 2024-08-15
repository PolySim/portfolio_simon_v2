"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/form/formInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/utils/sendEmail.action";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short" })
    .max(255, { message: "Name is too long" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

const FormContact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    values: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await sendEmail({ formData: data })
      .then((result) => {
        if (result) {
          toast({
            title: "Email sent successfully",
          });
          form.reset();
        } else {
          toast({
            title: "Email not sent",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Email not sent",
          variant: "destructive",
        });
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="row-start-2 lg:row-start-1 w-full grid grid-cols-2 gap-4 max-lg:mb-24"
      >
        <FormInput
          control={form.control}
          label="Name"
          name="name"
          placeholder="Enter your name"
          type="text"
          disabled={form.formState.isSubmitting}
        />
        <FormInput
          control={form.control}
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
          disabled={form.formState.isSubmitting}
        />
        <div className="col-span-2">
          <FormInput
            control={form.control}
            label="Message"
            name="message"
            placeholder="Enter your message"
            type="text-area"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <Button
          className="col-span-2 py-2 group h-fit"
          variant="secondary"
          size="lg"
          type="submit"
          disabled={form.formState.isSubmitting}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p
            className={cn("font-bebas tracking-8 text-3xl", {
              "text-linear": !isHovered,
              "text-slate-50/80": isHovered,
            })}
          >
            Send message
          </p>
        </Button>
      </form>
    </Form>
  );
};

export default FormContact;
