// HomePage.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextValue } from "../context/useContextClass";

interface ContentType {
  themevalue: string;
  ToggleTheme: () => void;
}
interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Updated cardsData with online images
const cardsData: Card[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
    image: "https://via.placeholder.com/300x200?text=Card+1",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
    image: "https://via.placeholder.com/300x200?text=Card+2",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
    image: "https://via.placeholder.com/300x200?text=Card+3",
  },
];

const HomeCards: React.FC = () => {
  const { themevalue, ToggleTheme } = useContext(contextValue) as ContentType;
  return (
    <>
      <button
        onClick={ToggleTheme}
        className="flex px-8 py-4 rounded-lg mx-auto justify-center bg-green-500 text-white text-center border"
      >
        Change Theme{themevalue}
      </button>
      <div
        className={`${
          themevalue === "light" ? "bg-white  text-black" : "bg-black text-white"
        } flex flex-col items-center p-8 space-y-6`}
      >
        <h1 className="text-4xl font-bold text-gray-800">Our Cards</h1>
        <p className="text-gray-600 text-center max-w-md">
          Browse through our collection of cards. Click on any card to see more
          details.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardsData.map((card) => (
            <Link
              to={`/cart/shoe/${card.id}`}
              key={card.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className={`${
          themevalue === "light" ? "bg-white text-black" : "bg-black text-white"
        } p-4`}>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCards;
