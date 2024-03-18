import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import summaryAi from "../utils/summaryAi";
import { useEffect, useState } from "react";
import ModalAfterSchedule from "../components/ModalAfterSchedule";

const { width, height } = Dimensions.get("screen");
const SummarizeScreen = ({ route, navigation }) => {
  const { month, category } = route.params;
  const [summary, setSummary] = useState("");
  const [showModalEnd, setShowModalEnd] = useState(false);

  const handleNavigateToChat = () => {
    console.log("ini handleNavgiation to chat di summarize screen");
    navigation.navigate("Chat");
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
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            backgroundColor: "#67C6E3",
            shadowOpacity: 3,
            shadowRadius: 3,
          }}
        >
          <Text style={styles.title}>Schedule For {month} Week Training</Text>
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
      </View>
    </SafeAreaView>
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
    backgroundColor: "#67C6E3",
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
    // backgroundColor: "#67C6E3",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#67C6E3",
  },
});