import type { AppProps } from "next/app";
import { GlobalStyles } from "./global";
import { Dispatch, createContext, useState } from "react";

interface GlobalContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  isDarkTheme: true,
  setIsDarkTheme: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <GlobalContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <GlobalStyles isDarkTheme={isDarkTheme} /> <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}