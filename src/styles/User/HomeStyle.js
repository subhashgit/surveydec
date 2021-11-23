import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  loading: {
    zIndex: 1,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  noService: {
    flex: 1,
    width: deviceWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dummyContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  innerDummy: {
    marginLeft: 15,
    flex: 1,
    width: 260,
    backgroundColor: "#eee",
    height: 280,
  },
  innerDummy2: {
    marginLeft: 15,
    flex: 1,
    width: 260,
    backgroundColor: "#eee",
    height: 280,
  },
  screen: {
    backgroundColor: "#fff",
    paddingBottom: 110,
    paddingTop: 35,
  },
  header: { paddingLeft: 15, paddingRight: 15 },
  list: {
    paddingTop: 20,
    paddingBottom: 0,
  },
  screenitem: { paddingTop: 20, paddingLeft: 0 },
  screenitemcontainer: {},

  listoption: {
    alignItems: "center",
    flexDirection: "row",
    width: 140,
    height: 80,
    marginRight: 0,
    marginLeft: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },

  listimg: {
    width: 50,
    height: 50,
    color: "#fff",
  },
  listtxt: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 14,
    color: "#fff",
  },
  bannercont: {
    backgroundColor: "#ededed",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 0,
  },

  bannerdetail: { flex: 1 },

  bannertitle: { color: "#62ad80", fontSize: 19, fontWeight: "bold" },

  bannerdescription: { color: "#999", fontSize: 16, marginBottom: 20 },
  bannerimg: { width: 90, height: 90 },

  loginScreenButton: {
    textAlign: "center",
    paddingTop: 8,
    padding: 10,
    paddingBottom: 8,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  bannerbuttontok: {
    borderColor: "#62ad80",
    borderWidth: 2,
    width: 200,
    textAlign: "center",
    borderColor: "#62ad80",

    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  bannerbutton: {
    color: "#62ad80",
    marginLeft: 60,
  },
  categorieslisting: {
    marginTop: 20,
    minHeight: 600,
    paddingBottom: 80,
  },
  milesdata: {
    marginBottom: 18,
    marginTop: 6,
    marginLeft:15,marginRight:15,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#a9a9a9",
    height:70,
    overflow: 'hidden',
  borderColor:'#ccc',
  borderWidth:1,
    borderRadius:8,
  },
  milesdatain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",alignContent:'flex-start',
    
  },
  milesdatainlocation:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",alignContent:'flex-start',
   paddingLeft:10,
    borderLeftColor:'#999',borderLeftWidth:2,
  },
  milesdatainlocationcl:{    display: "flex",
  flexDirection: "row",
  alignItems: "center",alignContent:'flex-start',},

  milesdatatxt: { fontSize: 16, color: "#a9a9a9",marginLeft:5, alignItems: "center", },
  milesdatatxtmi: {
    fontSize: 16,
    marginTop: 0,
    marginLeft: 5,
    color: "#a9a9a9",
  },
  milesStyle: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    color: "#a9a9a9",
    marginTop: 0,
  },
});
