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
  TouchableHighlight,
  Modal, 
  Dimensions,
} from "react-native";
import { Button } from "native-base";
import { FontAwesome, AntDesign, Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
const [modalVisible, setModalVisible] = useState(false);

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

     {dataLoader == false ? (
        <Loader />
      ) : (
      
				

     

        <ScrollView style={styles.wrapper} >
<View style={styles.viewover}>
              <SafeAreaView style={styles.HeaderContainer}>
                <View style={styles.headerCategory}>
                  
                  <MaterialCommunityIcons style={styles.brief}  onPress={navHandler} name="arrow-left" />
                  
                  <Text style={styles.title}>{data.category}</Text>

                </View>
                <MaterialCommunityIcons
                 style={styles.close}
                  name="filter-variant"
                />
                <Entypo name="share" size={30} color={'#fff'}/>

              </SafeAreaView>
              <Text style={styles.categoryTitle}>{data.serviceName} </Text>
            </View>
				

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
            {/*<Text style={styles.heading}>{data.providerName} </Text>*/}
            <Text style={styles.details}>{information.about}</Text>

            <Text style={styles.services}>Services</Text>

            <View style={styles.checkboxList}>
              {data.attributes.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingLeft: 0,
                  }}
                >
                  <Image style={{ width: 20, height: 20 }} source={tick} />
                  <Text
                    style={{
                      color: "#282828",
                      fontSize: 16,
                      width: 150,
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
              <Text style={styles.services}>Location</Text>
              <View>
                <Maps

                  userLocation={data.maps} 
                  companyName={data.serviceName} 
                  locationName={data.location}
                  />
              </View>
            </View>

            <View>
                <View style={styles.titlereviewbtn}>
                  <Text style={styles.services}>Reviews</Text>
                  <TouchableOpacity  onPress={() => { setModalVisible(true); }} >
                       <View style={styles.buttonaddr}>
                    <Entypo name={'plus'} size={26}/> 
                    <Text style={{fontSize:18, paddingLeft:5, color:'#5c9b84'}}>Add</Text>
                  </View>
                  </TouchableOpacity>
                </View>
              <View style={styles.review}>
                <View style={styles.reviewsList}>
                  {ReviewsList.map((data, index) => (
                    <View key={index} style={styles.reviewContainer}>
                      <View style={styles.reviewListHead}>
                     {
                       /* {data.photoURL !== "" ? (
                          <Image
                            style={styles.avatarImage}
                            source={{ uri: data.photoURL }}
                          />
                        ) : (
                          <Image style={styles.avatarImage} source={Avatar} />
                        )} 
                      */
                    }
                        <View style={{ paddingLeft: 0, flexDirection: "row" }}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              color: "#404145",
                              marginBottom:0
                            }}
                          >
                            {data.Name}
                          </Text>

                          
                        </View>
                      </View>
                      <View style={styles.reviewContent}>
                        <Text
                          style={{
                            color: "#404145",
                            paddingTop: 0,
                            paddingBottom: 15,
                          }}
                        >
                          {data.comment}
                        </Text>
                        <View style={{display:'flex',flexDirection:'row',textAlign:'center'}}>
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
                                  { /* <Text
                                    style={{
                                      paddingTop: 20,
                                      color: "#a9a9a9",
                                    }}
                                  >
                                    Published at:
                                    {data.createdAt.toDate().toLocaleDateString("en-US")}
                                  </Text> 

                                  */ }

                      </View>
                    </View>
                  ))}
                </View>

              </View>
            </View>
          </View>


            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible} >
               <View style={styles.centeredView}>
          <View style={styles.modalView}>
         
             <TouchableHighlight
                          style={{textAlign:'right',display:'flex',flexDirection:'row', justifyContent:'flex-end' , background:'#555'}}
                          onPress={() => {
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <Text>Close</Text>
                        </TouchableHighlight>
                
                  { /*
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
                */ }
                  <View style={{ paddingTop: 20,     width:'100%' }}>
                    <Text style={{ paddingLeft: 0, paddingBottom:5, }}>Add a Review</Text>
                    <TextInput
                      paddingVertical={0}
                      minHeight={100}
                      multiline={true}
                      numberOfLines={20}
                      maxLength={300}
                      placeholder="What was your experience"
                      style={styles.input}
                      onChangeText={(text) =>
                        setReview({ ...Review, comment: text })
                      }
                    />
                  <View style={styles.rating}>
                  
                    <View style={styles.ratingBox}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Rate the Service
                      </Text>
                      <Text style={{ fontSize: 15,  }}>
                        Quality of customer service 
                      </Text>
                      <View style={{ flexDirection: "row",marginTop:20 }}>
                        {stars.map((x, index) => (
                          <TouchableOpacity style={{}}
                            key={index}
                            onPress={() => handleRatingService(x)}
                          >
                            <Rating
                              filled={x <= Review.service ? true : false}
                              name="Service"
                              size={40}
                              key={index}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>
                    <Button onPress={handleReview} full style={styles.buttons}>
                      <Text style={styles.buttonstxt}>Add</Text>
                    </Button>
                 
                </View>
            
              </View>
              </View>

            </Modal>           
        

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


