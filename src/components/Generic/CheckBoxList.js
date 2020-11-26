import React, { useState } from "react";
import { Text, Image, StyleSheet, View, CheckBox } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CheckBoxList = ({ goTo, visible, onValueChange, text }) => {
  const [check, setCheck] = useState(false);

  const handleCheckBox =()=>{

    setCheck(!check)
    onValueChange(!check)
  }

  return (
    <View style={styles.checkboxList}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={check}
          onValueChange={handleCheckBox}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{text}</Text>
      </View>
    </View>
  );
};
export default CheckBoxList;

const styles = StyleSheet.create({
  checkboxList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    color: "#488d4b",
  },
  label: {
    color: "#488d4b",
    width: 70,
    textAlign: "left",
    fontSize: 12
  },
});
