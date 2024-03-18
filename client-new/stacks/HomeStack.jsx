import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LandingPage from "../screens/LandingPage";
import MainTab from "../navigations/MainTab";
import { LoginContext } from "../contexts/LoginContext";
import { useContext } from "react";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";

import ScheduleListScreen from "../screens/ScheduleListScreen";
import SummarizeScreen from "../screens/SummarizeScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleListScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Summarize"
        component={SummarizeScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="Chat" component={ChatRoomScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
