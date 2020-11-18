import React, { useState, useEffect } from "react";
import { Text, View, Animated, KeyboardAvoidingView } from "react-native";
import Input from "../../components/Generic/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import CheckBoxList from "../../components/User/CheckBoxList";
import { styles } from "../../styles/User/AddServiceStyle";
import { AddNewService } from "../../store/actions/Services";
import { getAdminCategory } from "../../store/actions/Category";
import { connect } from "react-redux";
import PickImage from "../../components/User/PickImage";
import ServiceLocation from "../../components/User/ServiceLocation";
import CategoryPicker from "../../components/User/CategoryPicker";
import Loader from "../../screens/Auth/Loader";

const AddService = ({
  navigation,
  AddNewService,
  serviceMessage,
  getAdminCategory,
  categories,
  loading,
}) => {
  const [array, setArray] = useState([]);

  const [message, setMessage] = useState(false);

  const [state, setState] = useState({
    serviceName: "",
    location: "",
    maps: "",
    category: "",
    image: null,
  });
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getAdminCategory();
    setCat(categories);
    console.log("message", message);
  }, []);
  useEffect(() => {
    setCat(categories);
  }, [categories]);

  const [addServiceLoading, setAddServiceLoading] = useState(false);
  useEffect(() => {
    setAddServiceLoading(loading);
  }, [loading]);
  const navigationHandler = () => {
    navigation.goBack();
  };
  const [images, setImages] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const [userLocation, setUserLocation] = useState({
    errorMessage: "",
    locationCords: {},
    map: false,
  });

  const handleInfo = async () => {
    AddNewService(state, array, userLocation, images);
    setCheck(serviceMessage);
    setMessage(true);
  };
  const [newFeature, setNewFeature] = useState({
    label: "",
    state: false,
  });
  const [featureVisible, setFeatureVisible] = useState(false);
  const showFeature = () => {
    setFeatureVisible(!featureVisible);
  };
  const AddFeature = () => {
    setSelectedValue({
      ...selectedValue,
      features: selectedValue.features.concat(newFeature),
    });
  };

  const [select, setSelect] = useState(false);

  useEffect(() => {
    setArray([]);
    setSelect(false);
  }, [select]);

  return (
    <>
      {addServiceLoading ? (
        <Loader />
      ) : (
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigationHandler}>
              <AntDesign name="arrowleft" size={25} color="#000" />
            </TouchableOpacity>
            {message && (
              <Text style={{ color: "green" }}>Data Added Sucessfully</Text>
            )}

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
                <CategoryPicker
                  selectedValue={selectedValue}
                  // getAttributes={getAttributes}
                  setState={setState}
                  categories={cat}
                  setSelectedValue={setSelectedValue}
                  state={state}
                  setArray={setArray}
                  setSelect={setSelect}
                />
                <Text
                  style={{ paddingTop: 15, fontSize: 15, color: "#a9a9a9" }}
                >
                  Assign Features for this category
                </Text>
                <View style={styles.checkboxList}>
                  {selectedValue.features &&
                    selectedValue.features.map((subValue, index) => {
                      return (
                        <>
                          {subValue.state && (
                            <CheckBoxList
                              select={select}
                              index={index}
                              head={subValue.label}
                              key={index}
                              array={array}
                              setArray={setArray}
                              label={subValue.label}
                              subValue={selectedValue.features}
                              state={subValue.state}
                            />
                          )}
                        </>
                      );
                    })}
                </View>
                <View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 320,
                        height: 40,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        borderColor: "#a9a9a9",
                        borderWidth: 1,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                      }}
                      activeOpacity={0.7}
                      onPress={showFeature}
                    >
                      <AntDesign name="plus" color={"#000"} fontSize={12} />
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#000",
                          fontSize: 12,
                        }}
                      >
                        New Feature
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {featureVisible && (
                    <View>
                      <Input
                        name="Feature"
                        head="Feature"
                        placeHolder="eg. DeliveryIncluded"
                        onChangeText={(values) =>
                          setNewFeature({
                            ...newFeature,
                            label: values,
                            state: true,
                          })
                        }
                      />
                      <View style={{ flexDirection: "row", paddingTop: 20 }}>
                        <TouchableOpacity
                          style={{
                            width: 100,
                            height: 40,
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                            borderColor: "#a9a9a9",
                            borderWidth: 1,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                          }}
                          activeOpacity={0.7}
                          onPress={AddFeature}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "#000",
                              fontSize: 12,
                            }}
                          >
                            Add Feature
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
                <Text style={styles.heading}>Location</Text>
                <Input
                  name="location"
                  head="Friendly Location (suburb)"
                  placeHolder="eg. Rondebosch"
                  onChangeText={(location) => setState({ ...state, location })}
                />
                <ServiceLocation
                  userLocation={userLocation}
                  setUserLocation={setUserLocation}
                  state={state}
                />

                <Text style={styles.heading}>Gallery</Text>
                <PickImage images={images} />
              </KeyboardAvoidingView>
            </View>
          </Animated.ScrollView>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceMessage: state.Service.serviceMessage,
    categories: state.category.adminCollection,
    categoryFeatures: state.Service.categoryFeatures,
    loading: state.Service.loading,
  };
};
export default connect(mapStateToProps, {
  AddNewService,
  getAdminCategory,
})(AddService);
