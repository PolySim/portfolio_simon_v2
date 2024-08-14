import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h3
      className={cn(
        "font-bebas text-5xl md:text-7xl tracking-12 text-white text-center",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default Title;
