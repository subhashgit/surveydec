import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  FlatList,
  TextInput,
  Dimensions,
} from "react-native";
import { Button } from "native-base";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import CheckBoxList from "../../components/User/CheckBoxList";
import LocationImage from "../../../assets/images/location.jpeg";
import tick from "../../../assets/images/tick.png";
import { connect } from "react-redux";
import { serviceProviderInformation } from "../../store/actions/User";
import {
  addServiceReview,
  getServiceReview,
} from "../../store/actions/Services";
import Rating from "../../components/Generic/Rating";
import { TouchableOpacity } from "react-native-gesture-handler";
import Avatar from "../../../assets/images/user1.jpeg";
import Maps from "../../components/Generic/Maps";
import Loader from "../../screens/Auth/Loader";
import Carousel from "react-native-snap-carousel";
import { styles } from "../../styles/User/ListDestailStyle";
import ReviewBox from "../../components/User/Review";
const { width } = Dimensions.get("window");
const ListDetail = ({ ...props }) => {
  const stars = [1, 2, 3, 4, 5];
  const [Review, setReview] = useState({
    service: 0,
    professionalism: 0,
    valueOfMoney: 0,
    presentaion: 0,
    comment: "",
  });

  let navigation = props.navigation;
  let data = props.route.params.data;
  let addServiceReview = props.addServiceReview;
  let getServiceReview = props.getServiceReview;
  let ReviewsList = props.ReviewsList;
  let dataLoader = props.loader;

  const [userReviews, setUserReviews] = useState([]);
  const [attributesState , setAttributesState] = useState([])
  const [userData, setUserData] = useState({
    photoUrl: "",
    Name: "",
  });

  const [information, setInformation] = useState({
    about: "",
  });
  useEffect(() => {
    props.serviceProviderInformation(data.userId);
    getServiceReview(data.id);

    data.attributes.map((item)=>{
      if(item.attributeState== true){
        attributesState.push(item)
        console.log("attribute", item)

      }
     

    })

  }, []);

  const navHandler = () => {
    navigation.goBack();
  };
  useEffect(() => {
    props.serviceProviderInfo.map((providerData) => {
      setInformation({ ...information, about: providerData.about });
    });
  }, [props.serviceProviderInfo]);
  const handleRatingService = (star) => {
    setReview({ ...Review, service: star });
  };
  const handleRatingPresentaion = (star) => {
    setReview({ ...Review, presentaion: star });
  };
  const handleRatingMoney = (star) => {
    setReview({ ...Review, valueOfMoney: star });
  };
  const handleRatingProfessionalism = (star) => {
    setReview({ ...Review, professionalism: star });
  };

  const handleReview = () => {
    addServiceReview(Review, data.id);
  };
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(dataLoader);
  }, [dataLoader]);

  useEffect(() => {
    if (ReviewsList.lenght == 0) {
      setLoader(true);
    }
  }, [ReviewsList]);

  const renderItem = ({ item }) => {
    return (
      <ImageBackground source={{ uri: item }} style={styles.image}>
        <View>
          <SafeAreaView style={styles.HeaderContainer}>
            <View style={styles.headerCategory}>
              <FontAwesome style={styles.brief} name="briefcase" />
              <Text style={styles.title}>{data.category}</Text>
            </View>
            <AntDesign
              onPress={navHandler}
              style={styles.close}
              name="closecircleo"
            />
          </SafeAreaView>
          <Text style={styles.categoryTitle}>{data.serviceName} </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <>
      {dataLoader == false ? (
        <Loader />
      ) : (
        <ScrollView style={styles.wrapper}>
          <Carousel
            loop={true}
            data={data.imagesUrl}
            renderItem={renderItem}
            sliderWidth={width}
            sliderHeight={300}
            itemWidth={width}
          />

          <View style={styles.content}>
            <Text style={styles.heading}>{data.providerName} </Text>
            <Text style={styles.details}>{information.about}</Text>

            <Text style={styles.services}>Services</Text>

            <View style={styles.checkboxList}>
              {attributesState.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    paddingTop: 20,
                    paddingLeft: 10,
                  }}
                >
                  <Image style={{ width: 20, height: 20 }} source={tick} />
                  <Text
                    style={{
                      color: "#488d4b",
                      fontSize: 10,
                      width: 70,
                      textAlign: "left",
                      paddingLeft: 10,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>

            <View>
              <Text style={styles.location}>Location</Text>
              <View stylle={{ paddingLeft: 10, paddingRight: 10 }}>
                <Maps
                  userLocation={data.maps}
                  companyName={data.serviceName}
                  locationName={data.location}
                />
              </View>
            </View>

            <View>
              <View style={styles.reviewHeading}>
                <Text style={styles.reviewHeadingText}>Reviews</Text>
              </View>
              <View style={styles.review}>
                <View style={styles.reviewsList}>
                  {ReviewsList.map((data, index) => (
                    <ReviewBox key={index} data={data} />
                  ))}
                </View>

                <View style={styles.rating}>
                  <View style={styles.ratingList}>
                    <View style={styles.ratingBox}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Service
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {stars.map((x, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleRatingService(x)}
                          >
                            <Rating
                              filled={x <= Review.service ? true : false}
                              name="Service"
                              size={20}
                              key={index}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View style={styles.ratingBox}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Value of Money
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {stars.map((x, index) => (
                          <TouchableOpacity
                            key={x}
                            onPress={() => handleRatingMoney(x)}
                          >
                            <Rating
                              filled={x <= Review.valueOfMoney ? true : false}
                              stars={stars}
                              size={20}
                              key={x}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View style={styles.ratingBox}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Professionalism
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {stars.map((x, index) => (
                          <TouchableOpacity
                            key={x}
                            onPress={() => handleRatingProfessionalism(x)}
                          >
                            <Rating
                              filled={
                                x <= Review.professionalism ? true : false
                              }
                              stars={stars}
                              size={20}
                              key={x}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View style={styles.ratingBox}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Presentaion
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {stars.map((x, index) => (
                          <TouchableOpacity
                            key={x}
                            onPress={() => handleRatingPresentaion(x)}
                          >
                            <Rating
                              filled={x <= Review.presentaion ? true : false}
                              stars={stars}
                              size={20}
                              key={x}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>
                  <View style={{ paddingTop: 20 }}>
                    <Text style={{ paddingLeft: 0 }}>Add Comment</Text>
                    <TextInput
                      paddingVertical={0}
                      minHeight={100}
                      multiline={true}
                      numberOfLines={20}
                      maxLength={300}
                      placeholder=""
                      style={styles.input}
                      onChangeText={(text) =>
                        setReview({ ...Review, comment: text })
                      }
                    />
                    <Button onPress={handleReview} full style={styles.buttons}>
                      <Text style={styles.buttonstxt}>Post Comment</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    serviceProviderInfo: state.Service.serviceProviderInfo,
    ReviewsList: state.Service.reviewsList,
    loader: state.Service.loader,
  };
};
export default connect(mapStateToProps, {
  serviceProviderInformation,
  addServiceReview,
  getServiceReview,
})(ListDetail);
