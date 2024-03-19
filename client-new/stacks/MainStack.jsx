import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LandingPage from "../screens/LandingPage";
import MainTab from "../navigations/MainTab";
import { LoginContext } from "../contexts/LoginContext";
import { useContext } from "react";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { View, Text, Pressable } from "react-native";
import { Head } from "@react-navigation/native-stack";
import RegisterTrainerScreen from "../screens/RegisterTrainerScreen";
import HomeAdmScreen from "../screens/HomeAdmScreen";

const Stack = createNativeStackNavigator();

const MainStack = ({}) => {
  const { isLoggedIn } = useContext(LoginContext);
  const { userLoginRole } = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            {userLoginRole !== "admin" ? (
              <>
                <Stack.Screen
                  name=" "
                  component={MainTab}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="ChatRoom"
                  component={ChatRoomScreen}
                  // options={{
                  //   headerLeft: ({ props, navigation }) => (
                  //     <HeaderBackButton
                  //       {...props}
                  //       onPress={() => {
                  //         navigation.navigate("Chat");
                  //       }}
                  //     />
                  //   ),
                  // }}
                  options={({ navigation }) => ({
                    headerLeft: () => (
                      <Pressable onPress={() => navigation.navigate("Chat")}>
                        <Text style={{ fontSize: 18, color: "blue" }}>
                          Back
                        </Text>
                      </Pressable>
                      // <HeaderBackButton />
                    ),
                  })}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="HomeAdm"
                  component={HomeAdmScreen}
                  options={{ title: "Trainer List" }}
                />
                <Stack.Screen
                  name="RegisterAdm"
                  component={RegisterTrainerScreen}
                  options={{ title: "Add Trainer" }}
                />
              </>
            )}
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
