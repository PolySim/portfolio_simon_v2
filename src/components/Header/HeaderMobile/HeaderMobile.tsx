"use client";

import OpenMenu from "@/components/Header/HeaderMobile/OpenMenu";
import { useSectionViewStore } from "@/store/sectionViewStore";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/const";
import HeaderMobileItem from "@/components/Header/HeaderMobile/HeaderMobileItem";

const HeaderMobile = () => {
  const menuIsOpen = useSectionViewStore((state) => state.menuIsOpen);

  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-2 justify-center items-center fixed w-screen h-screen bg-black-bg transition",
          {
            "translate-x-0": menuIsOpen,
            "-translate-x-full": !menuIsOpen,
          },
        )}
      >
        {SECTIONS.map((section, index) => (
          <HeaderMobileItem key={index} title={section} index={index} />
        ))}
      </div>
      <OpenMenu />
    </>
  );
};

export default HeaderMobile;
