import { createContext, useState } from 'react';
import { initialCards } from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};

export { GameProvider };
