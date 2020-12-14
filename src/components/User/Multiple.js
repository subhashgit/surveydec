import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import MultiSelect from "react-native-multiple-select";
let deviceWidth = Dimensions.get("window").width;

const MutipleSelect = ({ categories, setFilterCategory }) => {
  const [newCataegories, setNewCategories] = useState([]);

  useEffect(() => {
    setNewCategories(categories);
  }, [categories]);
  const [state, setState] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    setState(selectedItems);
  };
  const onSubmit = () => {
    setFilterCategory(state);
  };

  useEffect(() => {
    setFilterCategory(state);
  }, [state]);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        position: "absolute",
        top: 80,
        left: 15,
        width: deviceWidth - 30,
        zIndex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          paddingBottom: 10,
          flexWrap: "wrap",
        }}
      ></View>
      <MultiSelect
        items={newCataegories}
        uniqueKey="label"
        onSelectedItemsChange={(text) => onSelectedItemsChange(text)}
        selectedItems={state}
        selectText="Search"
        searchInputPlaceholderText="Search Items.."
        onToggleList={onSubmit}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="label"
        searchInputStyle={{ color: "#CCC" }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
        styleListContainer={{
          justifyContent: "flex-start",
          zIndex: 1,
          height: 200,
        }}
        hideSubmitButton={true}
        onAddItem={onSubmit}
        styleTextDropdown={{ paddingLeft: 5 }}
        styleTextTag={{ padding: 0 }}
        tagContainerStyle={{ width: 100, padding: 0, margin: 2, height: 30 }}
        styleMainWrapper={{ backgroundColor: "#fff" }}
      />
    </View>
  );
};

export default MutipleSelect;
