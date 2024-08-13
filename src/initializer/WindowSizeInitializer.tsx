"use client";

import { useEffect } from "react";
import { useWindowSizeStore } from "@/store/windowSizeStore";

const WindowSizeInitializer = () => {
  const toggleWindowSize = useWindowSizeStore(
    (state) => state.toggleWindowSize,
  );
  useEffect(() => {
    const handleResize = () => {
      toggleWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });
  return null;
};

export default WindowSizeInitializer;
