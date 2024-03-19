import React from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

const Carousel = () => {
  const screenWidth = Dimensions.get("window").width;
  const carouselData = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV5xxLy9EpgOa2sP4_74_MSm4Hh6POUlnnARKqXnHsitN3PwS_yEeCHWjT3DoaigCYss&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYI3PVv0rob8zS3_tf95fz3Pu8CUA0ML76WkczK52YaXTVSBUHSpWySMbnIrNTO3Mo0k&usqp=CAU",
    },
    {
      id: "3",
      image:
        "https://cdn.create.vista.com/api/media/small/425468124/stock-vector-colorful-sports-banner-with-athletes",
    },
  ];
  const renderItem = ({ item, idx }) => {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ height: 230, width: screenWidth }}
        />
      </View>
    );
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, idx) => {
      return (
        <View
          key={idx}
          style={{
            backgroundColor: "red",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        ></View>
      );
    });
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log(scrollPosition);
  };
  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;
