import { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SocialLink = ({
  children,
  link,
}: PropsWithChildren<{ link: string }>) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      asChild
      className="hover:bg-linear transition-all p-2 w-fit rounded-lg text-white group"
    >
      <Link href={link} className="size-full group-hover:text-black-bg">
        {children}
      </Link>
    </Button>
  );
};

export default SocialLink;
