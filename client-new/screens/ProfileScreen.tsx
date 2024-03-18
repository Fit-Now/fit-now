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

const { height } = Dimensions.get("screen");
const ProfileScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
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

        <Text style={styles.textName}>{formatCapital("hAi jejeon DuT")}</Text>

        <Text style={styles.textEmail}>test@mail.com</Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => setIsLoggedIn(false)}
        >
          <Text style={{ color: "red" }}>Log Out</Text>
        </TouchableOpacity>
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
    width: 90,
    height: 90,
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
    alignItems: "center",
    padding: 50,
    backgroundColor: "#67C6E3",
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
});
