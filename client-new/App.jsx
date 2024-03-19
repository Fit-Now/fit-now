import client from "./config";
import { LoginProvider } from "./contexts/LoginContext";
import MainStack from "./stacks/MainStack";
import { ApolloProvider } from "@apollo/client";
export default function App() {
  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        <MainStack />
      </LoginProvider>
    </ApolloProvider>
  );
}
