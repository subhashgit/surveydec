import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { profileInformation } from "../../store/actions/User";
const Header = ({
  navigation,
  visible,
  name,
  profileInfo,
  profileInformation,
}, props) => {
  const [state, setState] = useState({
    update: false,
    photo: "",
  });
  const [userName, setUserName] = useState("");
  useEffect(() => {
    profileInfo.map((data) => {
      if (data.photoURL !== "") {
        setState({
          ...state,
          update: true,
          photo: data.photoURL,
        });
      }
      if (data.firstName === "") {
        setUserName(data.Name);
      }
      if (data.firstName !== "") {
        setUserName(data.firstName);
      }
    });
  }, [profileInfo]);

  const navigationHanlder = () => {
    navigation.navigate("AddService");
  };
  const openSideMenu = () => {
    navigation.openDrawer();
  };
  const handleNotification = () => {
    navigation.navigate("Notification");
  };
  return (
    <View style={styles.container}>
      <View style={styles.usernamedetail}>
        <View style={styles.userNameDetails}>
          <TouchableOpacity onPress={openSideMenu}>
            {state.update === true ? (
              <Image style={styles.image} source={{ uri: state.photo }} />
            ) : (
              <Image
                style={styles.image}
                source={require("../../../assets/images/user1.jpeg")}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.text}>
            Welcome Back{"\n"} {userName}{" "}
          </Text>
        </View>
        <View style={styles.icons}>
          {visible && (
            <Entypo
              onPress={navigationHanlder}
              name="plus"
              onPress={navigationHanlder}
              size={25}
              color={"#000"}
              style={{ paddingRight: 12 }}
            />
          )}
          <TouchableOpacity onPress={handleNotification}>
            <Ionicons name={"ios-notifications"} size={25} color={"#000"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    profileInfo: state.profile.profileInformation,
  };
};
export default connect(mapStateToProps, { profileInformation })(Header);

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 200,
  },
  icons: {
    flexDirection: "row",
  },
  text: {
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  usernamedetail: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  userNameDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  scriconsscroll: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "scroll",
  },
});
