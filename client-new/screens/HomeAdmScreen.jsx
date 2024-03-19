import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height } = Dimensions.get("screen");
const HomeAdmScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textAddTrainer}> + Add Trainer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeAdmScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: height,
  },
  textAddTrainer: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    padding: 14,
  },
});
