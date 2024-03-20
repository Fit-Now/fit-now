import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import summaryAi from "../utils/summaryAi";
import { useContext, useEffect, useState } from "react";
import ModalAfterSchedule from "../components/ModalAfterSchedule";
import { LoginContext } from "../contexts/LoginContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../connection/fireBaseConfig";

const { width, height } = Dimensions.get("screen");
const SummarizeScreen = ({ route, navigation }) => {
  const { user } = useContext(LoginContext);
  const { month, category } = route.params;
  const [summary, setSummary] = useState("");
  const [showModalEnd, setShowModalEnd] = useState(false);
  const coachId = "65f6ff8fd0549fae23244c2b";
  const handleJoin = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId = user + coachId
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }
    } catch (err) {}
  };
  const handleNavigateToChat = () => {
    console.log("ini handleNavgiation to chat di summarize screen");
    handleJoin()
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "HomeScreen" }],
    // });
    navigation.navigate("ChatRoom");
    setShowModalEnd(false);
  };
  const handleNavigateToHome = () => {
    
    navigation.navigate("HomeScreen");
  };

  const handleModalEnd = () => {
    setShowModalEnd(!showModalEnd);
  };
  const runSummary = async () => {
    const result = await summaryAi("basketball", month);
    console.log(result, "result di runSummary");
    setSummary(result);
  };

  useEffect(() => {
    runSummary();
  }, [month]);
  return (
      <ScrollView>
    <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "#20488f",
            shadowOpacity: 3,
            shadowRadius: 5,
            borderBottomEndRadius: 18,
            borderBottomStartRadius: 18,
          }}
        >
          <Text style={styles.title}>Schedule For {month} Week Training</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={styles.textName}>Schedule Week</Text>
          <Text style={styles.textList}>
            INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET bulan
            {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET bulan
          </Text>
        </View>
        <View style={styles.containerSummerize}>
          <Text style={styles.textTitleSummerize}>What will you get :</Text>
          {summary && <Text style={styles.textSummerize}>{summary}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleModalEnd}>
          <Text style={styles.textJoin}>Join</Text>
        </TouchableOpacity>
        {showModalEnd && (
          <ModalAfterSchedule
            handleModalEnd={handleModalEnd}
            handleNavigateToChat={handleNavigateToChat}
            handleNavigateToHome={handleNavigateToHome}
          />
        )}
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.textLater}>Maybe Later</Text>
        </TouchableOpacity>
    </SafeAreaView>
      </ScrollView>
  );
};

export default SummarizeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    minHeight: height,
  },
  title: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  button: {
    backgroundColor: "#20488f",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 80,
    marginVertical: 10,
    alignSelf: "center",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textJoin: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textLater: {
    alignSelf: "center",
    color: "blue",
  },
  textTitleSummerize: {
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  textSummerize: {
    fontSize: 18,
    paddingBottom: 20,
  },
  containerSummerize: {
    marginHorizontal: 10,
    marginVertical: 30,
    // backgroundColor: "#20488f",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#20488f",
  },
});
