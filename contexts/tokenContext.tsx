import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Alert } from "../components/alert";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/router";

interface Token {
  token: string;
  storeToken: Function;
}

export const TokenContext = createContext<Token>({
  token: "",
  storeToken: () => {},
});

const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") !== null)
      setToken(localStorage.getItem("token")!);
  }, [, router]);

  const storeToken = (t: string) => {
    localStorage.setItem("token", t);
    setToken(t);
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        storeToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
