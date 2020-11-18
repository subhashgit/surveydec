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

{
  /* <Picker
        style={{ flex: 1, zIndex: 2 }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          getAttributes(itemValue);
          setState({
            ...state,
            category: itemValue.value,
            collectionId: itemValue.parentId,
          });
        }}
        mode="dropdown"
      >
        {categories != null ? (
          categories.map((data, index) => (
            <Picker.Item
              style={{ backgroundColor: "blue", padding: 20, flex: 1 }}
              label={data.value}
              key={index}
              value={data}
            />
          ))
        ) : (
          <Picker />
        )}
      </Picker> */
}

// import React, { useEffect } from "react";
// import { View } from "react-native";
// import { styles } from "../../styles/User/AddServiceStyle";
// import { Picker } from "@react-native-community/picker";
// import { connect } from "react-redux";
// import { getCollection } from "../../store/actions/Category";
// const CategoryPicker = ({
//   selectedValue,
//   getAttributes,
//   setState,
//   categories,
//   setSelectedValue,
//   state,
//   getCollection,
//   collection
// }) => {
//   useEffect(() => {
//       getCollection()
//   }, []);
//   useEffect(()=>{
//       console.log("collection", collection)

//   },[collection])
//   return (
//     <View style={styles.picker}>
//       <Picker
//         style={{ flex: 1, zIndex: 2 }}
//         selectedValue={selectedValue}
//         onValueChange={(itemValue, itemIndex) => {
//           setSelectedValue(itemValue);
//           getAttributes(itemValue);
//           setState({
//             ...state,
//             category: itemValue.value,
//             collectionId: itemValue.parentId,
//           });
//         }}
//         mode="dropdown"
//       >
//         {collection != null ? (
//           collection.map((data, index) => (
//             <Picker.Item
//               style={{ backgroundColor: "blue", padding: 20, flex: 1 }}
//               label={data.value}
//               key={index}
//               value={data}
//             />
//           ))
//         ) : (
//           <Picker />
//         )}
//       </Picker>
//     </View>
//   );
// };
// const mapStateToProps = (state) => {
//   return { collection: state.category.collection };
// };
// export default connect(mapStateToProps, { getCollection })(CategoryPicker);

{
  /* <Picker
        style={{ flex: 1, zIndex: 2 }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          getAttributes(itemValue);
          setState({
            ...state,
            category: itemValue.value,
            collectionId: itemValue.parentId,
          });
        }}
        mode="dropdown"
      >
        {categories != null ? (
          categories.map((data, index) => (
            <Picker.Item
              style={{ backgroundColor: "blue", padding: 20, flex: 1 }}
              label={data.value}
              key={index}
              value={data}
            />
          ))
        ) : (
          <Picker />
        )}
      </Picker> */
}
