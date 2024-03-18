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
const ScheduleListScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const dummy = [1, 1, 1];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textTitleChat}>Choose Your Schedule</Text>
      </View>
      {dummy.map((el, idx) => {
        return (
          <TouchableOpacity
            style={styles.containerStatus}
            // CARA MELEMPAR PARAMS
            onPress={() =>
              navigation.navigate("Summarize", {
                // IDX + 1 NANTI GANTI DARI VALUE MONTH YANG ADA DI DATABASE
                month: idx + 1,
                category,
              })
            }
            key={idx}
          >
            <View style={{ flexDirection: "column", gap: 10 }}>
              <Text style={styles.textName}>Schedule {idx + 1} Week</Text>
              <Text>
                INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default ScheduleListScreen;

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
    marginVertical: 10,
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
