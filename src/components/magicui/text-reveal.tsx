"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");
  const letters = text.split("");

  const numberLettersBefore = ({ i, j }: { i: number; j: number }) => {
    return (
      j +
      words.reduce(
        (acc, curr, currentIndex) =>
          currentIndex < i ? acc + curr.length : acc,
        0,
      )
    );
  };

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap gap-2 lg:gap-3 p-5 text-2xl font-bold text-white/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            return (
              <span key={i}>
                {word.split("").map((letter, j) => {
                  const start = numberLettersBefore({ i, j }) / letters.length;
                  const end = start + 1 / letters.length;
                  return (
                    <Word
                      key={j}
                      progress={scrollYProgress}
                      range={[start, end]}
                    >
                      {letter}
                    </Word>
                  );
                })}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
