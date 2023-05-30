import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.MOVIES_API_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
