export type UseSectionViewStore = {
  sectionViewing: { index: number };
  setSectionViewing: (section: number) => void;
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
