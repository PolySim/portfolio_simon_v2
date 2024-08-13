"use client";

import { PropsWithChildren } from "react";
import { useWindowSizeStore } from "@/store/windowSizeStore";

const WindowSizeContainer = ({
  children,
  minWidth,
  maxWidth,
}: PropsWithChildren<{
  maxWidth?: number;
  minWidth?: number;
}>) => {
  const windowWidth = useWindowSizeStore((state) => state.width);

  if (minWidth && windowWidth < minWidth) return null;
  if (maxWidth && windowWidth >= maxWidth) return null;
  return <>{children}</>;
};

export default WindowSizeContainer;
