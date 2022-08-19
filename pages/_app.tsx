import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertContextProvider from "../contexts/alertContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertContextProvider>
      <Component {...pageProps} />
    </AlertContextProvider>
  );
}

export default MyApp;
