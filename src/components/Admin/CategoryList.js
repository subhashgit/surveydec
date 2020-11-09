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
