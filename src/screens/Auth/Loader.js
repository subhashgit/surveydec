import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator style={{fontSize: 20}} size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
});

export default Loader;

// import React, { useState, useEffect } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import Spinner from "react-native-loading-spinner-overlay";

// const Loader = () => {
//   const [spinner, setSpinner] = useState(false);

//   useEffect(() => {
//     setInterval(() => {
//       setSpinner(!spinner);
//     }, 3000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Spinner
//         visible={spinner}
//         textContent={"Loading..."}
//         textStyle={styles.spinnerTextStyle}
//       />
//     </View>
//   );
// };
// export default Loader;
// const styles = StyleSheet.create({
//   spinnerTextStyle: {
//     color: "#000",

//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },

// });
