import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

export default function CobaRadioButton({ handleRole, selectedId }) {
  const radioButtons = useMemo(
    () => [
      {
        id: "trainee",
        label: "Trainee",
        value: "option1",
        borderColor: "#67C6E3",
        color: "blue",
      },
      {
        id: "trainer",
        label: "Trainer",
        value: "option2",
        borderColor: "#67C6E3",
        color: "blue",
      },
    ],
    []
  );

  // const [selectedValue, setSelectedValue] = useState();

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          alignSelf: "flex-start",
        }}
      >
        Role :
      </Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={(id) => {
          handleRole(id);
        }}
        selectedId={selectedId}
        containerStyle={{
          flexDirection: "row",
          gap: 70,
        }}
      />
    </View>
  );
}
