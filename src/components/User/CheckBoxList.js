import React, { useState } from "react";
import { Text, StyleSheet, View, CheckBox } from "react-native";


const CheckBoxList = ({ head, onValueChange }) => {
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
        <Text style={styles.label}>{head}</Text>
      </View>
    </View>
  );
};
export default CheckBoxList;

const styles = StyleSheet.create({
  checkboxList: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    color: "#488d4b",
  },
  label: {
    color: "#488d4b",
    width: 70,
    fontSize: 12
  },
});
