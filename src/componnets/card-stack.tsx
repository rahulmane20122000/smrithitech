import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: any[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full md:w-auto">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute  bg-white  rounded shadow-lg border border-neutral-200  shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
};
