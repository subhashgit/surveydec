import * as React from "react";
import Guest from "../src/screens/User/Home";
import { createStackNavigator } from "@react-navigation/stack";
import ListDetail from "../src/screens/User/ListDetail";
import Notification from "../src/screens/User/Notification";

const Stack = createStackNavigator();

const ServicesList = () => {
  return (
    <Stack.Navigator initialRouteName="ServicesList">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        initialParams={{ visible: false }}
        name="ServicesList"
        component={Guest}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ListDetail"
        component={ListDetail}
      />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default ServicesList;
