import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Maps = ({ userLocation ,  companyName ,locationName}) => {
  // let userLocation = userLocation.locationCords
  const [state, setState] = useState({
    userLatitude: 0,
    userLongitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    setState({
      ...state,
      userLatitude: userLocation.coords.latitude,
      userLongitude: userLocation.coords.longitude,
    });
  }, [userLocation]);

  return (
    <View style={styles.container}>
      <MapView
        loadingEnabled={false}
        region={{
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.mapStyle}
      >
        <MapView.Marker
          coordinate={{
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
          }}
          title={companyName}
          description={locationName}
        />
      </MapView>
    </View>
  );
};

export default Maps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: 320,
    height: 400,
  },
});
