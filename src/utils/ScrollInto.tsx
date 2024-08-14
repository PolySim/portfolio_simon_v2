"use client";

import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
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

  const scrollTo = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ref]);

  useEffect(() => {
    if (sectionViewing.index === index) {
      scrollTo();
    }
    if (sectionViewing.index === null && isVisible) {
      setSectionViewing(index);
    }
  }, [sectionViewing.index]);

  useEffect(() => {
    if (
      isVisible &&
      sectionViewing.index !== index &&
      !sectionViewing.isScrolling
    ) {
      setSectionViewing(index);
    }
    if (!isVisible && sectionViewing.index === index) {
      setSectionViewing(null);
    }
    if (isVisible && sectionViewing.index === index) {
      setSectionViewing(index, false);
    }
  }, [isVisible]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollInto;
