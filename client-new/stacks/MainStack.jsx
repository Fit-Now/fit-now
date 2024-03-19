import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LandingPage from "../screens/LandingPage";
import MainTab from "../navigations/MainTab";
import { LoginContext } from "../contexts/LoginContext";
import { useContext } from "react";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { isLoggedIn, setIsLoggedIn, setUser, setRole } = useContext(LoginContext);
  (async () => {
      const access_token = await SecureStore.getItemAsync("access_token");
      console.log(access_token);
      const userId = await SecureStore.getItemAsync("user_id");
      const role = await SecureStore.getItemAsync("role");
      if(access_token) setIsLoggedIn(true)
      if(userId) setUser(userId)
      if(role) setRole(role)
  })();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name=" "
              component={MainTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
