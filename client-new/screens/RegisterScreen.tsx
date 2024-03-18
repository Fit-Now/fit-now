import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import CobaRadioButton from "../components/CobaRadioButton";
import { useState } from "react";
import ModalAvatar from "../components/ModalAvatar";

const { height } = Dimensions.get("screen");
const RegisterScreen = () => {
  const [showModalAvatar, setShowModalAvatar] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // INI DAPETIN VALUENYA ROLE
  const [selectedId, setSelectedId] = useState<string>();

  // INI DAPETIN AVATAR
  const [avatar, setAvatar] = useState(
    "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
  );

  const handleRegister = () => {
    // VARIABLE YANG AKAN DIBUTUHKAN UNTUK REGISTER
    console.log(name, email, password, selectedId, avatar);
  };

  const handleRole = (id: string) => {
    // dapetin valuenya dari id di radiobutton
    setSelectedId(id);
    // console.log(selectedId, "<< di register");
  };
  const handleShowAvatar = () => {
    setShowModalAvatar(!showModalAvatar);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 50,
          marginBottom: 30,
          alignItems: "center",
          // backgroundColor: "gray",
        }}
      >
        <Text style={styles.title}>FitNow</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable onPress={handleShowAvatar} style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.categoryImage}
          />
          <Text
            style={{ alignSelf: "center", marginBottom: 20, color: "blue" }}
          >
            Choose your avatar!
          </Text>

          {/* MODAL AVATAR */}
          {showModalAvatar && (
            <ModalAvatar
              handleShowAvatar={handleShowAvatar}
              setAvatar={setAvatar}
            />
          )}
        </Pressable>
        <TextInput
          style={styles.inputLabel}
          placeholder="Name"
          onChangeText={setName}
        />
        <TextInput
          style={styles.inputLabel}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputLabel}
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword}
        />
        {/* <TextInput style={styles.inputLabel} placeholder="Status" /> */}

        <CobaRadioButton handleRole={handleRole} selectedId={selectedId} />
      </View>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={handleRegister}
      >
        <View style={styles.button}>
          <Text style={styles.textBottom}>Register</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            margin: 12,
            padding: 10,
            justifyContent: "center",
            marginBottom: 170,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
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
  button: {
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
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#67C6E3",
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
});
