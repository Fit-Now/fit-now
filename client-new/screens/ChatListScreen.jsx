import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { formatCapital } from "../utils/formatCapital";
import { NavigationProp } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");
const ChatListScreen = ({ navigation }) => {
  const dummy = [1, 1, 1];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textTitleChat}>Chats</Text>
      </View>
      {dummy.map((el, idx) => {
        return (
          <TouchableOpacity
            style={styles.containerStatus}
            // CARA MELEMPAR PARAMS
            onPress={() =>
              navigation.navigate("ChatRoom", {
                contohLemparParams: "Trainer ganteng",
              })
            }
            key={idx}
          >
            {/*  INI PUNYA TRAINER NYA */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
                }}
                style={styles.trainerImage}
              />
              <Text style={styles.textName}>
                {formatCapital("Trainer ganteng")}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height,
  },
  containerStatus: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  trainerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
    marginHorizontal: 14,
  },

  textTitleChat: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 30,
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
