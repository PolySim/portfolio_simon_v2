import { Control } from "react-hook-form";
import { InputProps } from "@/components/ui/input";

export type FormFieldType = InputProps & {
  control: Control<any>;
  name: string;
  type: "text-area" | string;
  label: string;
  description?: string;
};

export type FormSelectType = Omit<FormFieldType, "type"> & {
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

export type FormFileType = Omit<FormFieldType, "type"> & {
  multiple?: boolean;
  accept?: string;
};
