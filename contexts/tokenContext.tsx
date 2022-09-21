import { createContext, FC, ReactNode, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { UserType } from "../constant/types";

interface Token {
  token: string;
  storeToken: Function;
  user: UserType | null;
}

export const TokenContext = createContext<Token>({
  token: "",
  storeToken: () => {},
  user: null,
});

const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      setToken(localStorage.getItem("token")!);
      console.log(jwt_decode(localStorage.getItem("token")!));
      setUser(jwt_decode(localStorage.getItem("token")!));
    }
  }, [, router]);

  const storeToken = (t: string) => {
    console.log("token:::", t);
    localStorage.setItem("token", t);
    setUser(jwt_decode(t));
    setToken(t);
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        storeToken,
        user,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
