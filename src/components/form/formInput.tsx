"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "@/components/form/formField.types";
import { Textarea } from "@/components/ui/textarea";

const FormInput = ({
  control,
  name,
  label,
  description,
  disabled,
  type,
  placeholder,
}: FormFieldType) => {
  return (
    <FormField
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-400/90">{label}</FormLabel>
          <FormControl>
            {type === "text-area" ? (
              <Textarea
                disabled={disabled}
                placeholder={placeholder}
                {...field}
                rows={12}
              />
            ) : (
              <Input
                disabled={disabled}
                placeholder={placeholder}
                {...field}
                type={type}
              />
            )}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
      name={name}
    />
  );
};

export default FormInput;
