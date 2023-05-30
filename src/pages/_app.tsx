import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo/client";
import { useState } from "react";
import { AppContext } from "@/lib/hooks/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState<any>(null);
  return (
    <AppContext.Provider value={{ state, setState }}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppContext.Provider>
  );
}
