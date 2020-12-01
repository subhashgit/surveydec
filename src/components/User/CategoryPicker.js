import React from "react";
import { View } from "react-native";
import { styles } from "../../styles/User/AddServiceStyle";
import { Picker } from "@react-native-community/picker";

const CategoryPicker = ({
  selectedValue,
  setState,
  setSelectedValue,
  state,
  categories,
  setSelect,
}) => {
  return (
    <View style={styles.picker}>
      <Picker
        style={{ flex: 1, zIndex: 2 }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          setState({
            ...state,
            category: itemValue.label,
          });
          setSelect(true);
        }}
        mode="dropdown"
      >
        <Picker.Item label="Select Category" value="0" />
        {categories != null ? (
          categories.map((data, index) => (
            <Picker.Item
              style={{ backgroundColor: "blue", padding: 20, flex: 1 }}
              label={data.label}
              key={index}
              value={data}
            />
          ))
        ) : (
          <Picker />
        )}
      </Picker>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default CategoryPicker;

