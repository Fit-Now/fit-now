import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
// DIBIKIN ANY DULU, NANTI DIGANTI
export default function ChatRoomScreen({ route }) {
  const paramsYangDitangkap = route.params?.contohLemparParams;
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatTab}>
        <ImageBackground
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
          }}
          style={styles.categoryImage}
        />
        <Text style={styles.textName}>{paramsYangDitangkap}</Text>
      </View>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/58/86/e4/5886e42f7c5cf696becbcbe8bab52614.jpg",
        }}
        style={{
          width: width,
          height: 0.85 * height,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 5,
        }}
      >
        {chats?.map((el, idx) => {
          return idx % 2 != 0 ? (
            <View
              style={{ alignSelf: "flex-start", paddingHorizontal: 10 }}
              key={idx}
            >
              <Text style={styles.chatName}>Nama</Text>
              <Text
                style={{
                  ...styles.chatContainer,
                  alignSelf: "flex-start",
                  borderColor: "green",
                }}
              >
                {el}
              </Text>
            </View>
          ) : (
            <View style={{ alignSelf: "flex-end", paddingHorizontal: 10 }}>
              <Text style={{ ...styles.chatName, alignSelf: "flex-end" }}>
                Nama
              </Text>
              <Text
                style={{
                  ...styles.chatContainer,

                  borderColor: "blue",
                }}
              >
                {el}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        // keyboardVerticalOffset={60}
        // style={{ flex: 1 }}
      >
        <View
          style={{
            // position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            // bottom: 0,
            gap: 3,
            // height: 300,
            marginBottom: 100,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              alignItems: "flex-start",
              width,
              height: 80,
              borderTopWidth: 0.2,
            }}
          >
            <TextInput
              style={{
                padding: 10,
                margin: 1,
                borderRadius: 20,
                fontSize: 18,
                borderWidth: 1,
                width: 0.85 * width,
                borderColor: "gray",
                marginLeft: 10,
                marginTop: 14,
              }}
              onChangeText={(v) => setChat(v)}
            />
            <TouchableOpacity
              onPress={() => setChats([...chats, chat])}
              style={{ marginTop: 20, margin: 1 }}
            >
              {/* <Text>O</Text> */}
              <Feather
                name="send"
                size={30}
                color={"#0765ff"}
                style={{
                  paddingHorizontal: 5,
                  textAlign: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    minHeight: height,
    justifyContent: "space-between",
  },
  chatTab: {
    borderBottomWidth: 0.2,
    borderColor: "gray",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#20488f",
    // marginBottom: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  chatContainer: {
    // backgroundColor: "gray",
    paddingVertical: 10,
    maxWidth: 300,
    marginTop: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 15,
  },
  chatName: {
    fontWeight: "bold",
  },
});
