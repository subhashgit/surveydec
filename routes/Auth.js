import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../src/screens/Auth/LogIn'
import Signup from '../src/screens/Auth/SignUp'

const Stack = createStackNavigator();

const AuthTab = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="login"
        component={Login}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};
export default AuthTab;
