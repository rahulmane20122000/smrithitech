import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "../../lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  heading?: React.ReactNode;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  heading,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-col  max-w-screen-lg items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {heading}
        <p
          ref={targetRef}
          className={
            "flex flex-wrap justify-center text-balance p-5 text-black/20  md:p-8   lg:p-10 text-lg md:text-xl lg:text-2xl xl:text-3xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
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
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black "}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
