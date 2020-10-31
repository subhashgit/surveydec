import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Animated,
  KeyboardAvoidingView,
  Picker,
  Image,
  Alert,
} from "react-native";
import Input from "../../components/Generic/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import CheckBoxList from "../../components/User/CheckBoxList";
import { styles } from "../../styles/User/AddServiceStyle";
import { AddNewService } from "../../store/actions/Services";
import { getCategory, getAttributes } from "../../store/actions/Category";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Maps from "../../components/Generic/Maps";

const AddService = ({
  navigation,
  AddNewService,
  serviceMessage,
  getCategory,
  categories,
  getAttributes,
  categoryFeatures,
}) => {
  const [array, setArray] = useState([]);
  const [check, setCheck] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    serviceName: "",
    location: "",
    maps: "",
    category: "",
    image: null,
  });
  const [cat, setCat] = useState([
    {
      value: "",
      label: "",
    },
  ]);
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    categories.forEach((data) => {
      setCat({ ...cat, value: data.value, label: data.value });
    });
  }, [categories]);

  const navigationHandler = () => {
    navigation.goBack();
  };
  const [images, setImages] = useState([])
  const [imageState, setImageState] = useState(false)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 5],
      // quality: 3,
      multiple: true
    });
    console.log("resulytt", result);
    if (!result.cancelled) {
      setImageState (false)
      images.push(result.uri)
      setImageState(true)

      // setState({ ...state, image: result.uri });
    }
  };
  const [selectedValue, setSelectedValue] = useState("");

  const [userLocation, setUserLocation] = useState({
    errorMessage: "",
    locationCords: {},
    map: false,
  });
  const _getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Hey! You might want to enable notifications for my app, they are good."
      );
      setUserLocation({
        ...userLocation,
        errorMessage: "Permission Not Granted ",
      });
    }

    const currentLocation = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    setUserLocation({
      ...userLocation,
      locationCords: currentLocation,
      maps: true,
    });
  };
  const handleMaps = () => {
    _getLocation();
  };

  const handleInfo = async () => {
    // console.log("imagessss", images)
    AddNewService(state, array , userLocation , images);
    setCheck(serviceMessage);
    if (serviceMessage == true) {
      setMessage("Dataa Added Sucessfully");
    }
  };

  useEffect(() => {
    console.log("user location", userLocation);
  }, [userLocation]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigationHandler}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInfo} style={styles.btn}>
          <Text>save</Text>
        </TouchableOpacity>
      </View>
      <Animated.ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.create}>
          <KeyboardAvoidingView keyboardVerticalOffset={20}>
            <Text style={styles.heading}>Profile details</Text>
            <Input
              name="service"
              head="Give your service a name"
              placeHolder="e.g Pine Technologies"
              onChangeText={(serviceName) =>
                setState({ ...state, serviceName: serviceName })
              }
            />

            <View style={styles.picker}>
              <Picker
                style={{ flex: 1, zIndex: 2 }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedValue(itemValue);
                  getAttributes(itemValue);
                  setState({
                    ...state,
                    category: itemValue.value,
                    collectionId: itemValue.parentId,
                  });
                }}
                mode="dropdown"
              >
                {categories != null ? (
                  categories.map((data , index) => (
                    <Picker.Item
                      style={{ backgroundColor: "blue", padding: 20, flex: 1 }}
                      label={data.value}
                      key={index}
                      value={data}
                    />
                  ))
                ) : (
                  <Picker />
                )}
              </Picker>
            </View>

            <Text style={{ paddingTop: 15, fontSize: 15, color: "#a9a9a9" }}>
              Assign Features for this category
            </Text>
            <View style={styles.checkboxList}>
              {categoryFeatures &&
                categoryFeatures.map((subValue , index) => (
                  <CheckBoxList
                    onValueChange={(value) => {
                      array.push({
                        attributeState: value,
                        label: subValue.label,
                      });
                      setArray(array);
                    }}
                    head={subValue.label}
                    key={index}
                  />
                ))}
            </View>
            <Text style={styles.heading}>Location</Text>
            <Input
              name="location"
              head="Friendly Location (suburb)"
              placeHolder="eg. Rondebosch"
              onChangeText={(location) => setState({ ...state, location })}
            />
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={styles.inputContainer}
                onPress={handleMaps}
              >
                <Text style={styles.input}>Maps</Text>
              </TouchableOpacity>
              <View style={{paddingTop: 20}}>
              {userLocation.maps ? <Maps userLocation={userLocation.locationCords}
                companyName={state.serviceName}
                locationName={state.location}
              />  : <Text></Text>}
              </View>
            </View>

            <Text style={styles.heading}>Gallery</Text>
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <View style={{ flex: 1, paddingTop: 20 }}>
                <TouchableOpacity style={styles.image} onPress={pickImage}>
                  <Text
                    style={{
                      flex: 1,
                      textAlign: "center",
                      color: "#a9a9a9",
                      paddingTop: 10,
                    }}
                  >
                    Select Image
                  </Text>
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
            <View
              style={{ paddingTop: 20, flexDirection: "row", flexWrap: "wrap" }}
            >
              {imageState && 
              images.map((url)=>(
                <Image
                  source={{ uri: url}}
                  style={{ width: 100, height: 100 }}
                />
              )) }
            </View>
          </KeyboardAvoidingView>
          {serviceMessage && (
            <View style={{ paddingTop: 10 }}>
              <Text style={{ textAlign: "center", color: "green" }}>
                {message}
              </Text>
            </View>
          )}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceMessage: state.Service.serviceMessage,
    categories: state.category.categories,
    categoryFeatures: state.Service.categoryFeatures,
  };
};
export default connect(mapStateToProps, {
  AddNewService,
  getCategory,
  getAttributes,
})(AddService);
