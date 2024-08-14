"use client";

import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";
import { useSectionViewStore } from "@/store/sectionViewStore";
import { cn } from "@/lib/utils";

const HeaderDesktopItem = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  const setSectionHover = useSectionViewStore((state) => state.setSectionHover);
  const sectionViewing = useSectionViewStore((state) => state.sectionViewing);
  const setSectionViewing = useSectionViewStore(
    (state) => state.setSectionViewing,
  );

  const onHover = (event: MouseEvent<HTMLButtonElement>) => {
    setSectionHover({
      index,
      width: event.currentTarget.offsetWidth,
      height: event.currentTarget.offsetHeight,
      left: event.currentTarget.offsetLeft,
      top: event.currentTarget.offsetTop,
    });
  };

  return (
    <Button
      variant="ghost"
      onMouseEnter={(e) => onHover(e)}
      onClick={() => setSectionViewing(index)}
    >
      <h4
        className={cn("text-white text-lg font-rubik", {
          "text-linear": sectionViewing.index === index,
        })}
      >
        {title}
      </h4>
    </Button>
  );
};

export default HeaderDesktopItem;
