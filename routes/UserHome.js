import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProviderTabs from "./Provider";
import Notification from "../src/screens/User/Notification";
import GuestTabs from "./Guest";
import MyAccount from "./AccountTab";
import { Logout } from "../src/store/actions/Auth";
import * as Location from "expo-location";
import { Button } from "react-native-paper";
import { getCurrentLocation } from "../src/store/actions/Location";
import { connect } from "react-redux";

const Stack = createStackNavigator();
const UserHome = ({ getCurrentLocation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if (location) {
      getCurrentLocation(location);
    }
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        BackHandler.exitApp();
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const allowLocation = () => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        BackHandler.exitApp();
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  };
  return (
    <>
      {location !== null ? (
        <Stack.Navigator initialRouteName="Guest">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            initialParams={{
              checkVisible: false,
            }}
            name="Guest"
            component={GuestTabs}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MyAccount"
            component={MyAccount}
          />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text>Please Allow Location To Use This App</Text>
            <Button
              style={{
                marginTop: 20,
                color: "#fff",
                backgroundColor: "#60ad7f",
                paddingLeft: 20,
                paddingRight: 20,
              }}
              full
              success
              onPress={allowLocation}
            >
              <Text style={{ color: "#fff" }}>Allow Location</Text>
            </Button>
          </View>
        </View>
      )}
    </>
  );
};
export default connect("", { getCurrentLocation })(UserHome);
