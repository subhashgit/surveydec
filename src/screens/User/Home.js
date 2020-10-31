import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/User/Header";
import ListingItem from "../../components/User/ListingItem";
import { connect } from "react-redux";
import { getServices } from "../../store/actions/Services";

const Home = ({ navigation, getServices, services }) => {
  useEffect(() => {
    getServices();
  }, []);

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} name="Services" visible={true} />
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
export default connect(mapStateToProps, { getServices })(Home);

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
