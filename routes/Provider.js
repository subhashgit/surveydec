import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./ServicesTab";
import Services from "../src/screens/User/Services";
const Tab = createBottomTabNavigator();

const ProviderTabs = () => {
  console.log("Provider Tab")
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: "#000",
        activeTintColor: "#666",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="briefcase"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProviderTabs;
