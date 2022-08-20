import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertContextProvider from "../contexts/alertContext";
import Head from "next/head";
import TokenContextProvider from "../contexts/tokenContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="application-name" content="KIDA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KIDA" />
        <meta name="description" content="KIDS DIARY" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FBFBFB" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FCDE58" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <AlertContextProvider>
        <TokenContextProvider>
          <Component {...pageProps} />
        </TokenContextProvider>
      </AlertContextProvider>
    </>
  );
}

export default MyApp;
