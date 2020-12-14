import React, { useState } from "react";
import AddService from "../src/screens/User/AddService";
import { createStackNavigator } from "@react-navigation/stack";
import Services from "../src/screens/User/Services";
import ListDetail from "../src/screens/User/ListDetail";
import Notification from "../src/screens/User/Notification";

const Stack = createStackNavigator();

const ServicesTab = () => {
  return (
    <Stack.Navigator initialRouteName="Services">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Services"
        component={Services}
        initialParams={{ key: 0 }}
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

// import * as React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Home from "./ServicesTab";
// import Services from "../src/screens/User/Services";
// const Tab = createBottomTabNavigator();

// const ProviderTabs = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         inactiveTintColor: "#000",
//         activeTintColor: "#666",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Services"
//         component={Services}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="briefcase"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default ProviderTabs;
