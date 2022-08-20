import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Alert } from "../components/alert";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

interface Token {
  token: string;
  setToken: Function;
}

export const TokenContext = createContext<Token>({
  token: "",
  setToken: () => {},
});

const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
