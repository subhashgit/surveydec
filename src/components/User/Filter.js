import React, { useState } from "react";
import { Animated, Text, StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons , } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-community/picker";
let deviceWidth = Dimensions.get("window").width;

const Filter = () => {
  const [distance, setDistance] = useState(10);
  const [filterCategory, setFilterCategory] = useState({
    language: "C++",
  });
  return (
    <Animated.View style={styles.filterWrapper}>
      <View style={styles.filterInner}>
        <View style={styles.filterHeader}>
          <MaterialCommunityIcons style={styles.filter} name="filter-variant" />
          <Text style={styles.headerText}>Filter</Text>
        </View>
        <View style={{ paddingTop: 30 }}>
          <View style={styles.filterLocation}>
            <MaterialIcons style={styles.filter} name="location-on" />
            <Text style={styles.headerText}>Distance</Text>
            <Text style={styles.distance}>{distance} km </Text>
          </View>
          <Slider
            onValueChange={(e) => setDistance(e)}
            style={{ height: 10, paddingTop: 50 }}
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor="#488d4b"
            maximumTrackTintColor="#a9a9a9"
          />
        </View>
        <View style={styles.filterCategory}>
          <Text style={styles.categoryText}>All Category</Text>
          <View style={styles.pickerStyle}>
            <Picker
              style={styles.picker}
              selectedValue={filterCategory.language}
              onValueChange={(itemValue, itemIndex) =>
                setFilterCategory({ language: itemValue })
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.clear}>
            <Text style={{color: '#488d4b' , fontWeight: 'bold'}}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accept}>
            <Text style={{fontWeight: 'bold'}}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterWrapper: {
    backgroundColor: "#fff",
    width: deviceWidth,
    height: 300,
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
  },
  filterInner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  filter: {
    fontSize: 30,
    color: "#000",
    paddingRight: 10,
  },
  filterHeader: {
    flexDirection: "row",
  },
  headerText: {
    paddingLeft: 20,
    fontSize: 15,
  },
  filterLocation: {
    flexDirection: "row",
  },
  distance: {
    flex: 1,
    textAlign: "right",
  },
  filterCategory: {
    flex: 1,
    flexDirection: "column",
  },
  categoryText: {
    fontSize: 15,
  },
  pickerStyle: {
    borderColor: "#a9a9a9",
    borderBottomWidth: 1,
  },
  picker: {
    height: 50,
  },
  btn:{
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 20

  },
  clear:{
    width: 80,
    height: 25,
      marginRight: 20,
      alignItems: "center",
      color: 'green'

  },
  accept:{
    width: 80,
    height: 25,
    backgroundColor:"#a9a9a9",
    alignItems: "center",
   

  }
});
