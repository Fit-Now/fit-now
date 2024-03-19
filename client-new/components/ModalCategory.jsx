import {
  Modal,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

const { width, height } = Dimensions.get("screen");
export default function ModalCategory({ handleShowModal }) {
  const testDoang = [1, 1, 1, 1, 1];
  return (
    <Modal transparent={true}>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "#fff",
            width: width,
            height: 0.75 * height,
            top: 0.3 * height,
            position: "relative",
            borderRadius: 10,
            shadowOpacity: 0.3,
            shadowColor: "gray",
            // paddingTop: 100,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.textSubTitle}>Sports Category</Text>
            <Pressable onPress={handleShowModal}>
              <Text style={{ alignSelf: "flex-end", padding: 10 }}>X</Text>
            </Pressable>
          </View>

          {testDoang.map((el, idx) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  height: 90,
                  borderColor: "gray",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
                key={idx}
              >
                <Image
                  source={{
                    uri: "https://www.kindpng.com/picc/m/244-2443827_transparent-sports-icon-png-soccer-app-icon-png.png",
                  }}
                  style={styles.categoryImage}
                />
                <Text style={styles.textCategory}>Basketball</Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 7,
  },
  textSubTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 20,
  },
  textCategory: {
    fontSize: 20,
  },
});
