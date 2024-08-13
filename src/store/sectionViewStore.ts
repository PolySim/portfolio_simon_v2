import { create } from "zustand";
import { UseSectionViewStore } from "@/types/sectionView.types";

export const useSectionViewStore = create<UseSectionViewStore>()((set) => ({
  sectionViewing: { index: 0 },
  setSectionViewing: (section) => set({ sectionViewing: { index: section } }),
  sectionHover: null,
  setSectionHover: (section) => set({ sectionHover: section }),
  menuIsOpen: false,
  toggleMenuIsOpen: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),
}));
