import { createContext, FC, ReactNode, useState } from "react";
import { Alert } from "../components/alert";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

interface Token {
  token: string;
  setToken: Function;
}

export const TokenContext = createContext<Token>({ token: "" });

const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJjaGlsZCIsInVzZXJfaWQiOiI2MzAwNmJjNzY5MjMxMDZlODU1NGIzYTgiLCJvdGhlcl90eXBlIjoicGFyZW50Iiwib3RoZXJfaWQiOiI2MzAwNmYyZTVmNjU3MDIyYzZhZWVmMjYifQ.b4mlsM_a77N6lq8D3rC-rEPwEzFpLJ6tIvCcT3bqV_c"
  );
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
