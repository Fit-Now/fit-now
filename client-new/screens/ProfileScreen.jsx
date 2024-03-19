import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { formatCapital } from "../utils/formatCapital";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import * as SecureStore from "expo-secure-store";

const { height } = Dimensions.get("screen");
const ProfileScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        {/* INI PUNYA USER YANG LAGI LOGIN */}

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
          }}
          style={styles.profileImage}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.textName}>{formatCapital("hAi jejeon DuT")}</Text>

          <Text style={styles.textEmail}>test@mail.com</Text>
          <TouchableOpacity style={styles.logout}>
            <Pressable
              onPress={async () => {
                await SecureStore.deleteItemAsync("access_token");
                await SecureStore.deleteItemAsync("user_id");
                await SecureStore.deleteItemAsync("role");
                setIsLoggedIn(false);
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "red" }}>Log Out</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
      <Text></Text>

      <View style={styles.containerStatus}>
        {/*  INI PUNYA TRAINER NYA */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
            }}
            style={styles.trainerImage}
          />
          <Text>{formatCapital("Trainer ganteng")}</Text>
        </View>

        {/* INI KETGORINYA */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://www.kindpng.com/picc/m/244-2443827_transparent-sports-icon-png-soccer-app-icon-png.png",
            }}
            style={styles.trainerImage}
          />
          <Text>{formatCapital("Tennis")}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    minHeight: height,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 5,
  },
  trainerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
    marginHorizontal: 14,
  },
  profileContainer: {
    gap: 10,
    // alignItems: "center",
    padding: 30,
    backgroundColor: "#67C6E3",
    shadowOpacity: 3,
    shadowRadius: 5,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
    flexDirection: "row",
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textEmail: {
    fontSize: 18,
  },
  containerStatus: {
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 70,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 10,
  },
  logout: {
    padding: 8,
  },
});
