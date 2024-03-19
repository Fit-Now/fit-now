import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/",
});

const authLink = setContext(async (_, { headers }) => {
  // ?? Get the token from the SecureStore
  const token = await SecureStore.getItemAsync("token");

  // ?? Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // ?? Inject the token

      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  //   uri: "https://ch50st4v-3000.asse.devtunnels.ms/",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
