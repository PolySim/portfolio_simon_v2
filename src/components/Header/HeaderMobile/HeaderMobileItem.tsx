"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeaderMobileItem = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  const sectionViewing = useSectionViewStore((state) => state.sectionViewing);
  const setSectionViewing = useSectionViewStore(
    (state) => state.setSectionViewing,
  );
  const toggleMenuIsOpen = useSectionViewStore(
    (state) => state.toggleMenuIsOpen,
  );

  const onCLick = () => {
    setSectionViewing(index);
    toggleMenuIsOpen();
  };

  return (
    <Button variant="ghost" onClick={onCLick} className="h-fit">
      <h4
        className={cn("text-6xl font-bebas text-white tracking-12 uppercase", {
          "text-linear": sectionViewing.index === index,
        })}
      >
        {title}
      </h4>
    </Button>
  );
};

export default HeaderMobileItem;
