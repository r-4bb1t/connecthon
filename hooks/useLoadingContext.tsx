import { useContext } from "react";
import { LoadingContext } from "../contexts/loadingContext";

export const useLoading = () => useContext(LoadingContext);
