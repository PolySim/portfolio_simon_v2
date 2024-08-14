export type UseSectionViewStore = {
  sectionViewing: { index: number | null };
  setSectionViewing: (section: number | null) => void;
  sectionHover: SectionHover | null;
  setSectionHover: (section: SectionHover | null) => void;
  menuIsOpen: boolean;
  toggleMenuIsOpen: () => void;
};

type SectionHover = {
  index: number;
  width: number;
  height: number;
  left: number;
  top: number;
};
