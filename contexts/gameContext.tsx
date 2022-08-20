import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Alert } from "../components/alert";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/router";

interface Game {
  exp: number;
  level: number;
  gainExp: Function;
  levelUp: Function;
}

export const GameContext = createContext<Game>({
  exp: 0,
  level: 1,
  gainExp: () => {},
  levelUp: () => {},
});

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("exp") !== null)
      setExp(parseInt(localStorage.getItem("exp")!));
    if (localStorage.getItem("level") !== null)
      setLevel(parseInt(localStorage.getItem("level")!));
  }, [, router]);

  const levelUp = () => {
    localStorage.setItem("level", (level + 1).toString());
    setLevel((l) => l + 1);
  };

  const gainExp = (add: number) => {
    localStorage.setItem("exp", (exp + add).toString());
    setExp((exp) => exp + add);
  };

  return (
    <GameContext.Provider
      value={{
        exp,
        level,
        gainExp,
        levelUp,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
