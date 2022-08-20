import { useContext } from "react";
import { AlertContext } from "../contexts/alertContext";

export const useAlertContext = () => useContext(AlertContext);
