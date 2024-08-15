"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";

const HoverHeaderItem = () => {
  const sectionHover = useSectionViewStore((state) => state.sectionHover);

  return (
    sectionHover && (
      <div
        className="absolute bg-white/10 -z-10 transition-all duration-300 rounded-md"
        style={{
          width: sectionHover?.width,
          height: sectionHover?.height,
          left: sectionHover?.left,
          top: sectionHover?.top,
        }}
      />
    )
  );
};

export default HoverHeaderItem;
