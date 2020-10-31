import React, { useEffect } from "react";
import {  View } from "react-native";
import Header from "../../components/Admin/Header";
import CategoryList from "../../components/Admin/CategoryList";
import { styles } from "../../styles/Admin/categoriesStyle";
import { connect } from "react-redux";
import { getAdminCategory } from "../../store/actions/Category";
import { ScrollView } from "react-native-gesture-handler";
const Users = ({ navigation, getAdminCategory, categories }) => {
  useEffect(() => {
    getAdminCategory();
  }, []);

  return (
    <View style={styles.screen}>
      <Header visible={true} navigation={navigation} name="Categories" />
      <ScrollView>
        <View style={styles.list}>
          {categories.map((data, index) => (
            <CategoryList key={data.id} data={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.category.adminCollection,
  };
};
export default connect(mapStateToProps, { getAdminCategory })(Users);
