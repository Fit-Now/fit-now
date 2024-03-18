import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
const ModalAfterSchedule = ({
  handleModalEnd,
  handleNavigateToChat,
  handleNavigateToHome,
}) => {
  return (
    <Modal animationType="fade" visible={true} transparent={true}>
      <View style={styles.backgroundModal}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>
            You are now part of couch name training
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToChat}
          >
            <Text style={styles.textChatNow}>Chat Coach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToHome}
          >
            <Text style={{ ...styles.textChatNow, color: "#fff" }}>
              Chat Later
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalAfterSchedule;

const styles = StyleSheet.create({
  backgroundModal: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
  },
  container: {
    backgroundColor: "#67C6E3",
    width: 0.7 * width,
    height: 0.3 * height,
    top: 0.35 * height,
    position: "relative",
    shadowOpacity: 0.3,
    shadowColor: "gray",
    alignSelf: "center",
    borderRadius: 20,
  },
  textContainer: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    fontSize: 20,
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: "#67C6E3",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 80,
    marginVertical: 10,
    alignSelf: "center",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textChatNow: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
  },
  textChatLater: {
    alignSelf: "center",
    color: "blue",
  },
});
