import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { formatCapital } from "../utils/formatCapital";

const { width, height } = Dimensions.get("screen");
const ListCoach = ({ navigation, route }) => {
  const { category } = route.params;

  const dummy = [1, 1, 1];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textTitle}>Choose Your Coach</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        {dummy.map((el, idx) => {
          return (
            <TouchableOpacity
              style={styles.containerStatus}
              onPress={() => {
                navigation.navigate("Schedule", { category });
              }}
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
                <View>
                  <Text style={styles.textName}>
                    {formatCapital("Trainer ganteng")}
                  </Text>
                  <Text
                    style={{
                      ...styles.textName,
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                  >
                    Category Name
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
export default ListCoach;

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
    borderColor: "#20488f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#20488f",
    marginBottom: 10,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
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
