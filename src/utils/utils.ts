import { SECTIONS } from "@/lib/const";

export const findIndexInSections = (section: string) => {
  return SECTIONS.findIndex((item) => item === section);
};
