import { motion, AnimatePresence } from "framer-motion";
import React, { PropsWithChildren } from "react";

type AccordionProps = {
  expanded: boolean;
  className?: string;
  heading: React.ReactNode;
  setExpanded: (i: number) => void;
};
const Accordion = ({
  expanded,
  children,
  className,
  heading,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <>
      <div className={className}>{heading}</div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
export default Accordion;
