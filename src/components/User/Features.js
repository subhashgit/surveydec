import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import MultiSelect from "react-native-multiple-select";
let deviceWidth = Dimensions.get("window").width;
import { connect } from "react-redux";

const FeaturesSelect = ({ categories }) => {
  const [newCataegories, setNewCategories] = useState([]);

  useEffect(() => {
    console.log(newCataegories);
  }, [newCataegories]);
  const [state, setState] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    setState(selectedItems);
  };
  useEffect(() => {
    // for (let i = 0; i < categories.length; i++) {
    //   for (let j = 0; j < categories[i].features.length; j++) {
    //     console.log(categories[i].features[j].id, j);
    //     if(newCataegories.indexOf(categories[i].features[j]) > -1){

    //     }

    //     if (categories[i].features[j].id === categories[i].features[j].id) {
    //         console.log(categories[i].features[j], j)
    //       j++;
    //     }
    //     if (categories[i].features[j] !== categories[i].features[j + 1]) {

    //       newCataegories.push(categories[i].features[j]);
    //     }
    //   }
    // }
    categories.forEach((element, index) => {
      element.features.filter((e, i) => {
        if (e.state === true) {
          if (newCataegories.length === 0) {
            newCataegories.push({
              label: e.label,
            });
          }
          if (newCataegories.includes(e.label)) {
            return;
          } else {
            newCataegories.push({
              label: e.label,
            });
          }
        }
      });
    });
  }, [categories]);
  return (
    <View style={{ zIndex: -1 }}>
      <MultiSelect
        items={newCataegories}
        uniqueKey="label"
        onSelectedItemsChange={(text) => onSelectedItemsChange(text)}
        selectedItems={state}
        selectText="Search"
        searchInputPlaceholderText="Search Items.."
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
          height: 150,
          zIndex: -1,
        }}
        styleTextDropdown={{ paddingLeft: 5 }}
        styleTextTag={{ padding: 0 }}
        tagContainerStyle={{
          width: 100,
          padding: 0,
          margin: 2,
          height: 30,
        }}
        styleMainWrapper={{ backgroundColor: "#fff" }}
      />
    </View>
  );
};

export default connect("", {})(FeaturesSelect);
const items = [
  {
    id: "92iijs7yta",
    name: "Ondo",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Ogun",
  },
  {
    id: "16hbajsabsd",
    name: "Calabar",
  },
  {
    id: "nahs75a5sg",
    name: "Lagos",
  },
  {
    id: "667atsas",
    name: "Maiduguri",
  },
  {
    id: "hsyasajs",
    name: "Anambra",
  },
  {
    id: "djsjudksjd",
    name: "Benue",
  },
  {
    id: "sdhyaysdj",
    name: "Kaduna",
  },
  {
    id: "suudydjsjd",
    name: "Abuja",
  },
];
