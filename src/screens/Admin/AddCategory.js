import React, { useState } from "react";
import {  View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../../styles/Admin/categoriesStyle";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";
import CheckBoxList from "../../components/Generic/CheckBoxList";
import { connect } from "react-redux";
import { AddCategory } from "../../store/actions/Category";

const Users = ({ navigation, AddCategory }) => {
  const navigationHandler = () => {
    navigation.goBack();
  };
  const [array, setArray] = useState([]);
  const [collections, setCollections] = useState([]);
  const [subCollection, setSubCollections] = useState([]);
  const [SubCollectionName, setSubCollectionName] = useState([]);

  const [checkboxPicker, setCheckboxPicker] = useState([
    {
      label: "Delivery Included",
      state: false,
    },
    {
      label: "Respondes Immediately",
      state: false,
    },
    {
      label: "Works Remotely",
      state: false,
    },
    {
      label: "We come to you",
      state: false,
    },
    {
      label: "Work from Home",
      state: false,
    },
    {
      label: "You come to me",
      state: false,
    },
  ]);

  const handleCategory = () => {
    AddCategory(collections, subCollection, array, SubCollectionName);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigationHandler}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCategory} style={styles.btn}>
          <Text>save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.create}>
        <Text style={styles.heading}>Category Name</Text>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ color: "#a9a9a9", paddingBottom: 5 }}>Name</Text>
          <DropDownPicker
            items={subCategory}
            defaultValue=""
            placeholder="select categories"
            multipleText="%d items have been selected."
            multiple={true}
            containerStyle={{ height: 50 }}
            style={{ backgroundColor: "#f7f7f7", borderColor: "#a9a9a9" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#f7f7f7" }}
            onChangeItem={(item) => {
              setSubCollections(item);
              setSubCollectionName(item);
            }}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <DropDownPicker
            items={parentCategoryPicker}
            defaultValue=""
            placeholder="Select Collection"
            multipleText="%d items have been selected."
            containerStyle={{ height: 50 }}
            style={{ backgroundColor: "#f7f7f7", borderColor: "#a9a9a9" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#f7f7f7" }}
            onChangeItem={(item) => {
              setCollections(item);
            }}
          />
        </View>
        {/* <Input name="ParentCategory" head="Parent Category" placeHolder="" /> */}
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.heading}>Assign Features for This Category</Text>
          <View style={styles.checkboxList}>
            <FlatList
              style={{ flexDirection: "row" }}
              numColumns={3}
              data={checkboxPicker}
              renderItem={({ item }) => (
                <CheckBoxList
                  key={item.value}
                  onValueChange={(state, index) => {
                    setArray([
                      ...array,
                      {
                        label: item.label,
                        state,
                      },
                    ]);
                  }}
                  text={item.label}
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default connect("", { AddCategory })(Users);
const parentCategoryPicker = [
  {
    label: "Arts & Crafts",
    value: "Arts&Crafts",
  },
  {
    label: "Food",
    value: "Food",
  },
  {
    label: "Giving Back",
    value: "GivingBack",
  },
  {
    label: "Hair & Beauty",
    value: "Hair&Beauty",
  },
  {
    label: "Home",
    value: "Home",
  },
  {
    label: "Learn to..",
    value: "LearnTo",
  },
  {
    label: "Logistics",
    value: "Logistics",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Outdoor",
    value: "Outdoor",
  },
  {
    label: "Remote Work",
    value: "RemoteWork",
  },
  {
    label: "Repairs",
    value: "Repairs",
  },
];
const subCategory = [
  {
    label: "Plumber",
    value: "Plumber",
  },
  {
    label: "Handyman",
    value: "Handyman",
  },
  {
    label: "Painter",
    value: "Painter",
  },
  {
    label: "Electrition",
    value: "Electrition",
  },
  {
    label: "Renovator",
    value: "Renovator",
  },
  {
    label: "Water Proffing Specialist",
    value: "WaterProffingSpecialist",
  },
  {
    label: "Carpenter",
    value: "Carpenter",
  },
  {
    label: "Administrative Assistant",
    value: "AdministrativeAssistant",
  },
  {
    label: "Mover",
    value: "Mover",
  },
  {
    label: "Tax and Accounting Specialist",
    value: "TaxandAccountingSpecialist",
  },
  {
    label: "Carpet Cleaner",
    value: "CarpetCleaner",
  },
  {
    label: "Graphic Designer",
    value: "GraphicDesigner",
  },
  {
    label: "Shuttle Service",
    value: "ShuttleService",
  },
  {
    label: "Social Media and Vedio Marketer",
    value: "SocialMediaandVedioMarketer",
  },
  {
    label: "Air Conditioning",
    value: "AirConditioning",
  },
  {
    label: "DSTV Specialist",
    value: "DSTVSpecialist",
  },
  {
    label: "Lock Smith",
    value: "LockSmith",
  },
  {
    label: "Web Developer",
    value: "Web Developer",
  },
  {
    label: "Refrigrator Repairer",
    value: "RefrigratorRepairer",
  },
  {
    label: "Chef",
    value: "Chef",
  },
  {
    label: "Yoga Instructor",
    value: "YogaInstructor",
  },
  {
    label: "Therapist",
    value: "Therapist",
  },
  {
    label: "Gas Installation",
    value: "GasInstallation",
  },
];
