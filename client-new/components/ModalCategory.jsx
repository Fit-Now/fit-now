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
export default function ModalCategory({ handleShowModal }: any) {
  const testDoang = [1, 1, 1, 1, 1, 1, 1];
  return (
    <Modal transparent={true}>
      <SafeAreaView>
        <Text>X</Text>
        <View
          style={{
            backgroundColor: "#fff",
            width: width,
            height: 0.75 * height,
            top: 0.2 * height,
            position: "relative",
            borderRadius: 10,
            shadowOpacity: 0.3,
            shadowColor: "gray",
            // paddingTop: 100,
          }}
        >
          <Pressable onPress={handleShowModal}>
            <Text style={{ alignSelf: "flex-end", padding: 10 }}>X</Text>
          </Pressable>

          {testDoang.map((el, idx) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  height: 70,
                  borderColor: "gray",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 14,
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
                <Text>Basketball</Text>
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
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: 7,
  },
});
