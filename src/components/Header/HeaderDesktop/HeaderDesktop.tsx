"use client";

import HeaderDesktopItem from "@/components/Header/HeaderDesktop/HeaderDesktopItem";
import { useSectionViewStore } from "@/store/sectionViewStore";
import HoverHeaderItem from "@/components/Header/HeaderDesktop/HoverHeaderItem";
import { SECTIONS } from "@/lib/const";

const HeaderDesktop = () => {
  const setSectionHover = useSectionViewStore((state) => state.setSectionHover);

  return (
    <header
      onMouseLeave={() => setSectionHover(null)}
      className="fixed left-1/2 top-8 -translate-x-1/2 flex gap-8 z-10"
    >
      <HoverHeaderItem />
      {SECTIONS.map((item, index) => (
        <HeaderDesktopItem key={index} title={item} index={index} />
      ))}
    </header>
  );
};

export default HeaderDesktop;
