<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AuthTab from "../routes/Auth";
import Loader from "./screens/Auth/Loader";
import { connect } from "react-redux";
import { verifyUser } from "../src/store/actions/Auth";

import Authority from "../routes/Authority";

import { profileInformation } from "../src/store/actions/User";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const index = ({ userState, verifyUser, loading }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  useEffect(() => {
    console.log("loading", loading)
    verifyUser();
  }, []);
  useEffect(() => {
    setSignedIn(userState);
  }, [userState]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NavigationContainer>
          {isSignedIn ? <Authority /> : <AuthTab />}
        </NavigationContainer>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.Auth.currentUser,
    loading: state.Auth.loading,
  };
};

export default connect(mapStateToProps, { verifyUser, profileInformation })(
  index
);
=======
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AuthTab from "../routes/Auth";
import Loader from "./screens/Auth/Loader";
import { connect } from "react-redux";
import { verifyUser } from "../src/store/actions/Auth";

import Authority from "../routes/Authority";

import { profileInformation } from "../src/store/actions/User";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const index = ({ userState, verifyUser, loading }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  useEffect(() => {
    verifyUser();
  }, []);
  useEffect(() => {
    setSignedIn(userState);
  }, [userState]);
  return (
    <>

        <NavigationContainer>
          {isSignedIn ? <Authority /> : <AuthTab />}
        </NavigationContainer>

    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.Auth.currentUser,
    loading: state.Auth.loading,
  };
};

export default connect(mapStateToProps, { verifyUser, profileInformation })(
  index
);
>>>>>>> d45d2d5f115802539a4074d6c839274105e9fb02
