import { create } from "zustand";
import { UseSectionViewStore } from "@/types/sectionView.types";

export const useSectionViewStore = create<UseSectionViewStore>()((set) => ({
  sectionViewing: { index: 0 },
  setSectionViewing: (section, isScrolling) =>
    set({ sectionViewing: { index: section, isScrolling } }),
  sectionHover: null,
  setSectionHover: (section) => set({ sectionHover: section }),
  menuIsOpen: false,
  toggleMenuIsOpen: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),
}));
