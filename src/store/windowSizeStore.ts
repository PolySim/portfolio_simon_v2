import { create } from "zustand";
import { UseWindowSizeStore } from "@/types/windowSize.types";

export const useWindowSizeStore = create<UseWindowSizeStore>()((set) => ({
  width: 0,
  height: 0,
  toggleWindowSize: ({ width, height }) =>
    set((state) => ({
      width: width ?? state.width,
      height: height ?? state.height,
    })),
}));
