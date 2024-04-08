import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: StaticImageData | string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full md:w-full h-full p-6 block md:grid  md:grid-cols-3 max-w-7xl mx-auto  md:gap-4">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <motion.div
            onClick={() => handleClick(card)}
            className={`relative overflow-hidden bg-white rounded-xl h-full mt-4 ${card.className}`}
            layout
          >
            {selected && selected.id === card.id && (
              <SelectedCard selected={selected} />
            )}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed top-0 left-0 w-full h-full bg-transparent z-50 flex justify-center items-center"
        >
          <div className="bg-black rounded-lg shadow-lg p-8 max-w-screen-md w-full">
            {selected.content}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  return (
    <div className="overflow-hidden h-full w-full">
      <Image
        src={card.thumbnail}
        height="500"
        width="800"
        className="object-cover object-top h-full w-full transition duration-200"
        alt="thumbnail"
      />
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card }) => {
  return null;
};
