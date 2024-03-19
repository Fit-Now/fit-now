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
import { useState } from "react";
import ModalAvatar from "../components/ModalAvatar";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../queries";

const { height } = Dimensions.get("screen");
const RegisterScreen = ({ navigation }) => {
  const [showModalAvatar, setShowModalAvatar] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerDispatcher, { data, error, loading }] = useMutation(REGISTER, {
    onCompleted: (item) => {
      navigation.navigate("Login");
    },
  });
  // INI DAPETIN VALUENYA ROLE
  const [selectedId, setSelectedId] = useState();

  // INI DAPETIN AVATAR
  const [avatar, setAvatar] = useState(
    "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
  );

  const handleRegister = async () => {
    try {
      await registerDispatcher({
        variables: {
          payload: {
            name,
            email,
            password,
            imageUrl : avatar,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
    // VARIABLE YANG AKAN DIBUTUHKAN UNTUK REGISTER
  };
  console.log(name, email, password, avatar);

  // const handleRole = (id) => {
  //   // dapetin valuenya dari id di radiobutton
  //   setSelectedId(id);
  //   // console.log(selectedId, "<< di register");
  // };
  console.log(error);

  const handleShowAvatar = () => {
    setShowModalAvatar(!showModalAvatar);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 20,
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
    borderColor: "#20488f",
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
    backgroundColor: "#20488f",
    borderRadius: 10,
    justifyContent: "center",
  },
  textRegister: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0765ff",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#20488f",
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
});

