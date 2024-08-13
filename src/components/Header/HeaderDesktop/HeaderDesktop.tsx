"use client";

import HeaderDesktopItem from "@/components/Header/HeaderDesktop/HeaderDesktopItem";
import { useSectionViewStore } from "@/store/sectionViewStore";
import HoverHeaderItem from "@/components/Header/HeaderDesktop/HoverHeaderItem";

const ITEMS = ["Home", "Skills", "Projects", "Contact"];

const HeaderDesktop = () => {
  const setSectionHover = useSectionViewStore((state) => state.setSectionHover);

  return (
    <header
      onMouseLeave={() => setSectionHover(null)}
      className="fixed left-1/2 top-8 -translate-x-1/2 flex gap-8"
    >
      <HoverHeaderItem />
      {ITEMS.map((item, index) => (
        <HeaderDesktopItem key={index} title={item} index={index} />
      ))}
    </header>
  );
};

export default HeaderDesktop;
