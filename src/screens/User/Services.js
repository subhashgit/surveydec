import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Header from "../../components/User/Header";
import ListingItem from "../../components/User/ListingItem";
import { Text } from "native-base";
import { connect } from "react-redux";
import { getMyServices } from "../../store/actions/Services";

const Services = ({ navigation, getMyServices, services }) => {
  useEffect(() => {
    getMyServices();
  }, []);
  return (
    <View style={styles.screen}>
      <Header name="Services" navigation={navigation} visible={true} />
      <View style={styles.list}>
        <Animated.ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ paddingBottom: 5, fontSize: 13, color: "#a9a9a9" }}>
            Active Services
          </Text>
          {services.map((data) => (
            <ListingItem key={data.id} data={data} navigation={navigation} />
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    services: state.Service.myServices,
  };
};
export default connect(mapStateToProps, { getMyServices })(Services);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    paddingTop: 40,
    height: 670,
  },
  list: {
    paddingTop: 20,
    paddingBottom: 80,
  },
});
