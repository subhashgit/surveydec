import { StyleSheet } from "react-native";
// const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
    reviewContent: {
        paddingTop: 10,
      },
      avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      reviewListHead: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#a9a9a9",
        borderBottomWidth: 1,
        paddingBottom: 5,
      },
      reviewContainer: {
        marginTop: 20,
        padding: 10,
        borderColor: "#a9a9a9",
        borderWidth: 1,
        paddingBottom: 10,
      },
      rating: {
        paddingTop: 20,
      },
      reviewsList: {
        paddingTop: 0,
      },
      ratingList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
      ratingBox: {
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 0,
      },
      review: {
        backgroundColor: "#f9f9f9",
        paddingTop: 0,
        padding: 10,
      },
      reviewHead: {
        padding: 10,
      },
      title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 20,
      },
      categoryTitle: {
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold",
      },
      location: {
        paddingTop: 20,
        fontSize: 20,
        color: "#000",
        height: 100,
      },
      content: {
        padding: 20,
      },
      image: {
        flex: 1,
        height: 300,
      },
      heading: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#488d4b",
      },
      services: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "#488d4b",
      },
      details: {
        paddingTop: 10,
        fontSize: 15,
        lineHeight: 20,
        color: "#488d4b",
      },
      wrapper: {
        backgroundColor: "#fff",
        flex: 1,
      },
      HeaderContainer: {
        padding: 20,
        paddingTop: 40,
        flexDirection: "row",
      },
      brief: {
        fontSize: 20,
        color: "#fff",
      },
      headerCategory: {
        flex: 1,
        flexDirection: "row",
      },
      close: {
        fontSize: 20,
        color: "#fff",
      },
      checkboxList: {
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 20,
        flexWrap: "wrap",
      },
      input: {
        paddingTop: 10,
        paddingLeft: 10,
        padding: 0,
        height: 150,
        borderColor: "#a9a9a9",
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        textAlignVertical: "top",
        color: "#000",
      },
      buttons: { color: "#5c9b84", marginTop: 20, backgroundColor: "#5c9b84" },
      buttonstxt: { color: "#fff" },

});
