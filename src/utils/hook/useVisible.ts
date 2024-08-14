import { UseVisible } from "@/types/useVisible.types";
import { useEffect, useState } from "react";

export const useVisible: UseVisible = (refElement, top, keepVisible) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (refElement && refElement.current) {
      const currentElement = refElement.current;

      const ob = new IntersectionObserver(
        ([entry]) => {
          setVisible((curr) =>
            keepVisible ? curr || entry.isIntersecting : entry.isIntersecting,
          );
        },
        {
          rootMargin: top,
        },
      );
      ob.observe(currentElement);
      return () => {
        if (currentElement) {
          ob.unobserve(currentElement);
        }
      };
    }
  }, [refElement, top]);

  return { isVisible: visible };
};
