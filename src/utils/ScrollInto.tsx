"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { useSectionViewStore } from "@/store/sectionViewStore";
import { useVisible } from "@/utils/hook/useVisible";
import { useWindowSizeStore } from "@/store/windowSizeStore";

const ScrollInto = ({
  index,
  children,
}: PropsWithChildren<{ index: number }>) => {
  const sectionViewing = useSectionViewStore((state) => state.sectionViewing);
  const setSectionViewing = useSectionViewStore(
    (state) => state.setSectionViewing,
  );
  const ref = useRef<HTMLDivElement>(null);
  const windowHeight = useWindowSizeStore((state) => state.height);
  const { isVisible } = useVisible(ref, `-${windowHeight / 3}px`);

  useEffect(() => {
    const addSection = useSectionViewStore.getState().addSection;
    addSection(ref, index);
  });

  useEffect(() => {
    if (
      isVisible &&
      sectionViewing.index !== index &&
      !sectionViewing.isScrolling
    ) {
      setSectionViewing(index, false, false);
    }
    if (!isVisible && sectionViewing.index === index) {
      setSectionViewing(null, false, false);
    }
    if (isVisible && sectionViewing.index === index) {
      setSectionViewing(index, false, false);
    }
  }, [isVisible]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollInto;
