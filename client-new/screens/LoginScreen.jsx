import { NavigationProp } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { LoginContext } from "../contexts/LoginContext";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { LOGIN } from "../queries";

const { width, height } = Dimensions.get("screen");
const LoginScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginDispatcher, { data, error, loading }] = useMutation(LOGIN, {
    onCompleted: async (item) => {
      const access_token = item.Login.token;
      
      SecureStore.setItem('email', email)
      await SecureStore.setItemAsync("access_token", access_token);
      setIsLoggedIn(true);
    },
  });
  const handleLogin = async () => {
    try {
      await loginDispatcher({
        variables: {
          email,
          password,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 145,
            marginBottom: 80,
            alignItems: "center",
            // backgroundColor: "gray",
          }}
        >
          <Text
            style={{
              fontSize: 80,
              fontWeight: "bold",
              color: "#67C6E3",
            }}
          >
            FitNow
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TextInput
            onChangeText={setEmail}
            style={styles.inputLabel}
            placeholder="Email"
          />
          <TextInput
            onChangeText={setPassword}
            style={styles.inputLabel}
            secureTextEntry
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          onPress={ async() => await handleLogin()}
          style={{ alignItems: "center" }}
        >
          <View style={styles.buttom}>
            <Text style={styles.textBottom}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View
            style={{
              margin: 12,
              padding: 10,
              justifyContent: "center",
              marginBottom: 170,
            }}
          >
            <Text style={styles.textRegister}>New to the app? Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: height,
  },
  inputLabel: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 2,
    borderColor: "#67C6E3",
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  textBottom: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  buttom: {
    height: 50,
    width: 300,
    margin: 12,
    padding: 10,
    backgroundColor: "#67C6E3",
    borderRadius: 10,
    justifyContent: "center",
  },
  textRegister: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0765ff",
  },
});