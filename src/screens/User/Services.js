<<<<<<< HEAD
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
=======
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
    padding: 15,
    paddingTop: 35,
    
  },
  list: {

    paddingTop: 20,
    paddingBottom: 80,

  },
});
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02
