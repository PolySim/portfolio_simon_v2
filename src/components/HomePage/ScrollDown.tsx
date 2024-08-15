"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const ScrollDown = () => {
  const setSectionView = useSectionViewStore(
    (state) => state.setSectionViewing,
  );

  const onClick = () => {
    setSectionView(1);
  };

  return (
    <Button
      className="absolute left-1/2 -translate-x-1/2 bottom-12 text-9xl rounded-full border-2 border-white p-2"
      onClick={onClick}
      variant="ghost"
      size="icon"
    >
      <ArrowDown size={60} className="text-white" />
    </Button>
  );
};

export default ScrollDown;
