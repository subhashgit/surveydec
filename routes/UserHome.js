import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Services from "./ProviderServices";
import Home from "./ServicesTab";
import { Logout } from "../src/store/actions/Auth";
import { connect } from "react-redux";
import MyAccount from "../src/screens/Account/Account";
import { userStatus } from "../src/store/actions/User";
import EditImage from "../src/screens/Account/EditImage";
import { createStackNavigator } from "@react-navigation/stack";
import { profileInformation } from "../src/store/actions/User";
import Notification from "../src/screens/User/Notification";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const userNotificationTab = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

const UserTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color="#000" size={20} />
          ),
        }}
        name="Home"
        component={userNotificationTab}
      />
    </Tab.Navigator>
  );
};
const ProviderTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color="#000" size={20} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="briefcase" color="#000" size={20} />
          ),
        }}
        name="Services "
        component={Services}
      />
    </Tab.Navigator>
  );
};
const CustomDrawerContent = (props) => {
  let userStatus = props.userStatus;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(props.status);
  }, [props.status]);
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
    userStatus(state);
  };

  return (
    <DrawerContentScrollView {...props}>
      {check ? (
        <DrawerItem onPress={handleState} label="Switch to Guest" />
      ) : (
        <DrawerItem onPress={handleState} label="Switch to Provider" />
      )}

      <DrawerItemList {...props} />
      <DrawerItem onPress={props.Logout} label="Logout" />
    </DrawerContentScrollView>
  );
};
const Account = () => {
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
const UserHome = ({ Logout, status, userStatus, profileInformation }) => {
  useEffect(() => {
    profileInformation();
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent
          userStatus={userStatus}
          status={status}
          Logout={Logout}
          {...props}
        />
      )}
      initialRouteName="userTabs"
    >
      {status ? (
        <Drawer.Screen name="Provider" component={ProviderTabs} />
      ) : (
        <Drawer.Screen name="Guest" component={UserTabs} />
      )}

      <Drawer.Screen name="My Account" component={Account} />
    </Drawer.Navigator>
  );
};
const mapStateToProps = (state) => {
  return {
    status: state.User.status,
  };
};
export default connect(mapStateToProps, {
  Logout,
  userStatus,
  profileInformation,
})(UserHome);
