"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const OpenMenu = () => {
  const menuIsOpen = useSectionViewStore((state) => state.menuIsOpen);
  const toggleMenuIsOpen = useSectionViewStore(
    (state) => state.toggleMenuIsOpen,
  );

  useEffect(() => {
    console.log(menuIsOpen);
  }, [menuIsOpen]);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        toggleMenuIsOpen();
        console.log("clicked");
      }}
      className={cn(
        "fixed left-8 top-8 z-30 text-white w-[50px] mt-2.5 p-0 h-fit",
        {
          "menu-open": menuIsOpen,
          "menu-close": !menuIsOpen,
        },
      )}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default OpenMenu;
