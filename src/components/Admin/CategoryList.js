<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { List, Colors } from "react-native-paper";
import { Text, View } from "react-native";
import { getAdminSubCategory } from "../../store/actions/Category";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
const CategoryList = ({ data, navigation }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => {
    setExpanded(!expanded);
  };
  const [state, setState] = useState(data);
  useEffect(() => {
    console.log("dataaa", data);
    setState(data);
  }, [data]);
  return (
    <List.AccordionGroup style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: "90%",
          }}
        >
          <List.Accordion
            style={{ flex: 1 }}
            left={(props) => <List.Icon {...props} icon="hand" />}
            right={(props) => <List.Icon {...props} icon="hand" />}
            description={state.features.map((i) => `${i.label}  `)}
            title={state.value}
            id={state.id}
            expanded={expanded}
            onPress={handlePress}
          >
            {state.features.map((SubData) => {
              return (
                <>
                  {SubData.state && (
                    <List.Item
                      style={{ flex: 1 }}
                      key={SubData.subId}
                      style={{ paddingLeft: 30, fontSize: 10 }}
                      left={(props) => (
                        <List.Icon {...props} icon="arrow-right" />
                      )}
                      title={SubData.label}
                    />
                  )}
                </>
              );
            })}
          </List.Accordion>
        </View>
        <View>
          <AntDesign
            style={{ marginTop: 40 }}
            name="edit"
            size={20}
            color={"#000"}
            onPress={() => {
              navigation.navigate("AddCategory", {
                data: state,
                key: state.id,
              });
            }}
          />
        </View>
      </View>
    </List.AccordionGroup>
  );
};

const mapStateToProps = (state) => {
  return {
    subCategory: state.category.adminCategory,
  };
};
export default connect(mapStateToProps, { getAdminSubCategory })(CategoryList);
=======
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { List, Colors } from "react-native-paper";
import { getAdminSubCategory } from "../../store/actions/Category";
import { connect } from "react-redux";
const CategoryList = ({ data, getAdminSubCategory, subCategory }) => {
  const handleSubCategory = () => {
    console.log("achaaaaa");
    getAdminSubCategory(data.id);

  };
  useEffect(() => {
    
    console.log("sub category", data)
    
  }, []);
  return (
    <TouchableOpacity activeOpacity={1} onPress={handleSubCategory}>
      <List.AccordionGroup>
        <List.Accordion
          left={(props) => <List.Icon {...props} icon="hand" />}
          description={data.subCollections.map((i) => `${i}  `)}
          title={data.value}
          id="1"
        >
          {subCategory.map((SubData) => (
            <List.Item
              key={SubData.subId}
              style={{ paddingLeft: 30 , fontSize: 10 }}
              left={(props) => <List.Icon {...props} icon="hand" />}
              description={SubData.features.map((i) => `${i.label}, `)}
              title={SubData.value}
            />
          ))}
        </List.Accordion>
      </List.AccordionGroup>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    subCategory: state.category.adminCategory,
  };
};
export default connect(mapStateToProps, { getAdminSubCategory })(CategoryList);
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02
