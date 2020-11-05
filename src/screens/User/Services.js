import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Header from "../../components/User/Header";
import ListingItem from "../../components/User/ListingItem";
import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getServices } from "../../store/actions/Services";

const Services = ({ navigation, getServices, services }) => {
  useEffect(() => {
    getServices();
  }, []);

  return (
    <View style={styles.screen}>
      <Header name="Services" navigation={navigation} visible={false} />
      <View style={styles.list}>
        <Animated.ScrollView showsVerticalScrollIndicator={false}>
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
    services: state.Service.services,
  };
};
export default connect(mapStateToProps, { getServices })(Services);

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
