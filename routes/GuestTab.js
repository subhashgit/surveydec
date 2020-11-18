<<<<<<< HEAD:routes/GuestTab.js
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
=======
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
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02:routes/ProviderServices.js
