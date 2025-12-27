import { create } from "zustand";
import { UseSectionViewStore } from "@/types/sectionView.types";

export const useSectionViewStore = create<UseSectionViewStore>()((set) => ({
  sectionViewing: { index: 0 },
  setSectionViewing: (section, isScrolling, toScroll = true) => {
    const sections = useSectionViewStore.getState().sections;
    const sectionRef = sections.find((s) => s.index === section)?.ref.current;
    if (sectionRef && toScroll) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
    return set({ sectionViewing: { index: section, isScrolling } });
  },
  sectionHover: null,
  setSectionHover: (section) => set({ sectionHover: section }),
  menuIsOpen: false,
  toggleMenuIsOpen: () => set((state) => ({ menuIsOpen: !state.menuIsOpen })),
  sections: [],
  addSection: (ref, index) =>
    set((state) => ({ sections: [...state.sections, { ref, index }] })),
}));
