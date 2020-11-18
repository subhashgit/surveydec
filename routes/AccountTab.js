import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditImage from "../src/screens/Account/EditImage";
import Notification from "../src/screens/User/Notification";
import MyAccount from "../src/screens/Account/Account";
const Stack = createStackNavigator();
const AccountTab = () => {
    return (
      <Stack.Navigator initialRouteName="MyAccount">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MyAccount"
          component={MyAccount}
        />
        <Stack.Screen name="EditImage" component={EditImage} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    );
  };

  export default AccountTab;