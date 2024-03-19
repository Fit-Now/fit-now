import { Dimensions, Image, Pressable, Text, View } from "react-native";


export default function PlaceItem ({place, navigation}) {
    // console.log(place);
    
    return(
        <View style={{width:Dimensions.get('screen').width*0.9, backgroundColor:'white', margin:5, borderRadius:10}}>
            <Image source={{uri: place.imageUrl[1]}} style={{width:'100%', borderRadius:10, height:130}}/>
            <View style={{padding:15}}>
            <Text style={{fontSize:20, fontFamily:'Avenir-Book', fontWeight:'bold'}}>{place.name}</Text>
            <Text style={{fontSize:15, color:'grey'}}>{place.address}</Text>
            <Pressable
              onPress={() =>
                navigation.navigate("ListCoach", {
                  // NANTI BASKETBALL NYA DIGANTI DENGAN VALUE CATEGORY DARI DATABASE
                  category: "basketball",
                })
                // navigation.navigate("ListCoach")
              }
            >
            <Text style={{fontSize:15, color:'grey'}}>Category: {place.category}</Text>
            </Pressable>


            </View>
        </View>
    )
}