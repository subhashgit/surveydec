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
import { styles } from "../../styles/User/ListDestailStyle"
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
    	<>
      <ImageBackground source={{ uri: item }} style={styles.image}></ImageBackground>
     
      </>
    );
  };

  return (
    <>
				<View style={styles.viewover}>
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

      {dataLoader == false ? (
        <Loader />
      ) : (

        <ScrollView style={styles.wrapper} >

				

          <Carousel
          	layout={'default'}
          	loop={true}
            data={data.imagesUrl}
            renderItem={renderItem}
            sliderWidth={width}
            sliderHeight={300}
            itemWidth={width-30}
            autoplay={true}
         activeSlideAlignment={'start'}
         inactiveSlideScale={1}
         inactiveSlideOpacity={1}
         loop={'enableSnap'}
		activeSlideOffset={0}
          />

          <View style={styles.content}>
            <Text style={styles.heading}>{data.providerName} </Text>
            <Text style={styles.details}>{information.about}</Text>

            <Text style={styles.services}>Services</Text>

            <View style={styles.checkboxList}>
              {data.attributes.map((item, index) => (
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
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#5c9b84",
                  marginTop: 40,
                  paddingBottom: 20,
                  paddingTop: 20,
                  color: "#fff",
                }}
              >
                <Text
                  style={{ fontSize: 16, textAlign: "center", color: "#fff" }}
                >
                  Reviews
                </Text>
              </View>
              <View style={styles.review}>
                <View style={styles.reviewsList}>
                  {ReviewsList.map((data, index) => (
                    <View key={index} style={styles.reviewContainer}>
                      <View style={styles.reviewListHead}>
                        {data.photoURL !== "" ? (
                          <Image
                            style={styles.avatarImage}
                            source={{ uri: data.photoURL }}
                          />
                        ) : (
                          <Image style={styles.avatarImage} source={Avatar} />
                        )}
                        <View style={{ paddingLeft: 10, flexDirection: "row" }}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              color: "#404145",
                            }}
                          >
                            {data.Name}
                          </Text>

                          <Entypo
                            style={{ paddingLeft: 5 }}
                            name="star"
                            size={18}
                            color="#fbbc04"
                          />
                          <Text style={{ paddingLeft: 5, color: "#fbbc04" }}>
                            {data.totalRating}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.reviewContent}>
                        <Text
                          style={{
                            color: "#404145",
                            paddingTop: 0,
                            paddingBottom: 10,
                          }}
                        >
                          {data.comment}
                        </Text>
                        <Text
                          style={{
                            paddingTop: 20,
                            color: "#a9a9a9",
                          }}
                        >
                          Published at:
                          {data.createdAt.toDate().toLocaleDateString("en-US")}
                        </Text>
                      </View>
                    </View>
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


