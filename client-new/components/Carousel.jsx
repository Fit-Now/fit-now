import React from "react";
import { FlatList, Text, View } from "react-native";

const Carousel = () => {
  const carouselData = [
    { id: "1", image: "" },
    { id: "2", image: "" },
    { id: "3", image: "" },
  ];
  const renderItem = ({ item, idx }) => {
    return <View></View>;
  };

  return (
    <View>
      <Text>tast carausel</Text>
      {/* <FlatList data={carouselData} renderItem={renderItem} /> */}
    </View>
  );
};

export default Carousel;
