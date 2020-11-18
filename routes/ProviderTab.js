<<<<<<< HEAD:routes/ProviderTab.js
import React, { useState } from "react";
import ServicesHome from "../src/screens/User/Home";
import AddService from "../src/screens/User/AddService";
import { createStackNavigator } from "@react-navigation/stack";
import ListDetail from "../src/screens/User/ListDetail";
import Notification from "../src/screens/User/Notification";

const Stack = createStackNavigator();

const ServicesTab = () => {
  return (
    <Stack.Navigator initialRouteName="ServicesHome">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        initialParams={{ visible: true }}
        name="ServicesHome"
        component={ServicesHome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AddService"
        component={AddService}
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
export default ServicesTab;
=======
import React, { useState } from "react";
import ServicesHome from "../src/screens/User/Home";
import AddService from "../src/screens/User/AddService";
import { createStackNavigator } from "@react-navigation/stack";
import ListDetail from "../src/screens/User/ListDetail";
import Notification from "../src/screens/User/Notification";

const Stack = createStackNavigator();

const ServicesTab = () => {
  const [hideTab, setHideTab] = useState(false);
  return (
    <Stack.Navigator initialRouteName="ServicesHome">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ServicesHome"
        component={ServicesHome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AddService"
        component={AddService}
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
export default ServicesTab;
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02:routes/ServicesTab.js
