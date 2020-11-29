import React, { useState, useEffect } from "react";
import { ImageBackground, Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Rating from "../Generic/Rating";
import { LinearGradient } from 'expo-linear-gradient';

const stars = [1, 2, 3, 4, 5];
const ListingItem = ({ data, navigation }) => {
  const [serviceImage, setServiceImage] = useState("");
  useEffect(() => {
    console.log("imageUrl");
    if(data.imagesUrl !== []){
      data.imagesUrl.map((currentImage) => {
        setServiceImage(currentImage);
      });

    }
    
  }, [data]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        console.log("csdasdas");
        navigation.navigate("ListDetail", {
          data: data,
          key: data,
        });
      }}
    >
      <View style={{ paddingBottom: 20, paddingLeft:15, paddingRight:15, }}>
        <Card style={{ height: 280 }}>
          <ImageBackground style={{ flex: 1 }} source={{ uri: serviceImage }}>
          <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.5)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      >
            <Text style={{ padding: 20, color: "#fff", fontSize: 18 }}>
              {data.serviceName}
            </Text>
                  </LinearGradient>

          </ImageBackground>
          <Card.Content style={{ flexDirection: "row", padding: 20 }}>
            <FontAwesome
              style={{ fontSize: 30, paddingTop: 10 }}
              name="briefcase"
            />
            <Card.Content style={{ fontSize: 20 }}>
              <Paragraph>{data.category} </Paragraph>
              <Card.Content style={{ paddingLeft: 0, flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                  {stars.map((x, index) => (
                    <TouchableOpacity key={x}>
                      <Rating
                        filled={x <= data.averageRating ? true : false}
                        name="Service"
                        size={16}
                        key={x}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
                <Paragraph style={{ paddingLeft: 5 }}>
                  Reviews ({data.totalReviews})
                </Paragraph>
              </Card.Content>
            </Card.Content>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default ListingItem;
