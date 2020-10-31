import * as React from "react";
import Services from "../src/screens/User/Services";
import { createStackNavigator } from "@react-navigation/stack";
import ListDetail from "../src/screens/User/ListDetail";
const Stack = createStackNavigator();

const ServicesList = () => {
  return (
    <Stack.Navigator initialRouteName="ServicesList">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ServicesList"
        component={Services}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ListDetail"
        component={ListDetail}
      />
    </Stack.Navigator>
  );
};

export default ServicesList;
