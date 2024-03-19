import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { formatCapital } from "../utils/formatCapital";
import { NavigationProp } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");
const ScheduleListScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const dummy = [1, 1, 1];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.textTitle}>Choose Your Schedule</Text>
        </View>
        <View style={{ marginTop: 20 }}>
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
                  <Text style={styles.textList}>
                    INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}1. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}2. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                    {`\n`}3. INI HASIL YANG DIDAPAT DI PAKET {idx + 1} bulan
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View style={{ padding: 100 }} />
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
    paddingVertical: 40,
    marginHorizontal: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#20488f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#20488f",
  },
  trainerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
    marginHorizontal: 14,
  },

  textTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    color: "#fff",
  },
  textName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  textList: {
    fontSize: 20,
    color: "#fff",
    padding: 10,
  },
  topContainer: {
    gap: 10,
    justifyContent: "center",
    padding: 18,
    backgroundColor: "#20488f",
    shadowOpacity: 3,
    shadowRadius: 5,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
    flexDirection: "row",
  },
});
