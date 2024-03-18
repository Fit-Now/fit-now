import { LoginProvider } from "./contexts/LoginContext";
import MainStack from "./stacks/MainStack";

export default function App() {
  return (
    <LoginProvider>
      <MainStack />
    </LoginProvider>
  );
}
