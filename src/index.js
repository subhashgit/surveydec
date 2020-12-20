import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthTab from "../routes/Auth";
import Loader from "./screens/Auth/Loader";
import { connect } from "react-redux";
import { verifyUser } from "../src/store/actions/Auth";
import Authority from "../routes/Authority";
import { profileInformation } from "../src/store/actions/User";
import { LogBox } from "react-native";
// import * as Location from "expo-location";
import { View, Text, BackHandler } from "react-native";
import { Button } from "react-native-paper";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const index = ({ userState, verifyUser, loading }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    verifyUser();

    // if (location) {
    //   console.log("locaton", JSON.stringify(location));
    // }
  }, []);

  useEffect(() => {
    // (async () => {
    //   let { status } = await Location.requestPermissionsAsync();
    //   if (status !== "granted") {
    //     BackHandler.exitApp();
    //     setErrorMsg("Permission to access location was denied");
    //     return;
    //   }
    //   let location = await Location.getCurrentPositionAsync({});
    //   setLocation(location);
    // })();
  }, []);

  // const allowLocation = () => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       BackHandler.exitApp();
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // };

  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  useEffect(() => {
    setSignedIn(userState);
  }, [userState]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NavigationContainer>
          {isSignedIn ? (
            <>
              <Authority />
            </>
          ) : (
            <AuthTab />
          )}
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
