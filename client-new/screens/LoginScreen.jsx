import { NavigationProp } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LoginContext } from "../contexts/LoginContext";

const { width, height } = Dimensions.get("screen");
const LoginScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);

    console.log(email, password);
  };
  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardViewContainer}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
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
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={handleLogin}
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
