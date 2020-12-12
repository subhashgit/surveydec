import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProviderTabs from "./Provider";
import Notification from "../src/screens/User/Notification";
import GuestTabs from "./Guest";
import MyAccount from "./AccountTab";
import { Logout } from "../src/store/actions/Auth";

const Stack = createStackNavigator();
const UserHome = () => {
  return (
    <Stack.Navigator initialRouteName="Guest">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        initialParams={{
          checkVisible: true,
        }}
        name="Provider"
        component={ProviderTabs}
      />
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
  );
};
export default UserHome;
