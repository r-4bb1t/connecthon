import { useContext } from "react";
import { TokenContext } from "../contexts/tokenContext";

export const useToken = () => useContext(TokenContext);
