import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, View,  Alert, Modal, TouchableHighlight, Dimensions, ImageBackground, Switch } from "react-native";
import { Ionicons, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { profileInformation } from "../../store/actions/User";
import imagebg from '../../../assets/images/hamburger_BG.jpg';
import Icon from 'react-native-ionicons'

 var width = Dimensions.get('window').width; 
 var height = Dimensions.get('window').height;  
const Header = ({
  navigation,
  visible,
  name,
  profileInfo,
  profileInformation,
}) => {
  const [state, setState] = useState({
    update: false,
    photo: "",
        switchValue: false  

  });

  useEffect(() => {
    profileInfo.map((data) => {
      if (data.photoURL !== "") {
        setState({ ...state, update: true, photo: data.photoURL });
      }
    });
  }, [profileInfo]);

 const [modalVisible, setModalVisible] = useState(false);
  const navigationHanlder = () => {
    navigation.navigate("AddService");
  };

  const openSideMenu = () => {
    navigation.openDrawer();
  };
  const handleNotification =()=>{
    navigation.navigate("Notification")
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.usernamedetail}>
        <View style={styles.userNameDetails}>
          <TouchableOpacity onPress={() => {
          setModalVisible(true);
        }}>
            {state.update === true ? (
              <Image style={styles.image} source={{ uri: state.photo }} />
            ) : (
              <Image
                style={styles.image}
                source={require("../../../assets/images/user1.jpeg")}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.text}>{name}</Text>
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
          <Ionicons  name={"ios-notifications"} size={25} color={"#000"} />

          
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
       
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <ImageBackground source={imagebg} style={styles.imagebg}>
            <Text style={styles.modalText}>Ramesh Kumar</Text>
            <Text style={styles.modalTextsub}>Text</Text>
            </ImageBackground>
            <TouchableHighlight
              style={{ ...styles.openButton}} 
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
             <Ionicons style={styles.closeic} name={"ios-close"} size={60} />

            </TouchableHighlight>
            <View style={styles.listnavwrapper}>
              <TouchableOpacity style={styles.listnav}>
               
                <Ionicons style={styles.navicon} name="ios-hand" size={30} />
                <Text style={styles.navicontxt}>Services</Text>
              </TouchableOpacity>


            
                   
              <View style={styles.containerswitch}>  
                <View style={state.switchValue === true ? styles.containerswitchinrAct : styles.containerswitchinr} >  
                    <MaterialCommunityIcons style={state.switchValue === true ? styles.swichiconAct : styles.swichicon} name='pencil' size={22} />
                    <Text style={state.switchValue === true ? styles.textStyleAct : styles.textStyle}>Guest</Text> 
                </View>
                <View  style={state.switchValue ? styles.containerswitchinr : styles.containerswitchinrAct}>
                    <MaterialIcons style={state.switchValue === true ? styles.swichicon : styles.swichiconAct} name='build' size={22} />
                    <Text style={state.switchValue === true ? styles.textStyle : styles.textStyleAct}>Provider</Text> 
                </View>
                 <Switch  
                    value={state.switchValue}  
                    opacity={0} 
                    style={{position:'absolute',top:0,left:0,height:100, width:200}}
                    onValueChange ={(switchValue)=>setState({switchValue})}/> 
            </View>       



              
                         
 


              <TouchableOpacity style={styles.listnav} onPress={() => functionOne()}>
                <FontAwesome style={styles.navicon} name="user-circle" size={25} />
                <Text style={styles.navicontxt}>My Account {"\n"}<Text style={styles.naviconsubtxt}>Your profile </Text></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listnav}>
                <MaterialCommunityIcons style={styles.navicon} name="credit-card-outline" size={30} />
                <Text style={styles.navicontxt}>Billing {"\n"}<Text style={styles.naviconsubtxt}>Your profile </Text> </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listnav}>
                <MaterialCommunityIcons style={styles.navicon} name="key" size={30} />
                <Text style={styles.navicontxt}>Log Out </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.copyrights}>
              <Text style={styles.rightstxt}> ©2020 Servey </Text>
              <Text style={styles.rightstxt}> Term & Conditions. Privacy policy </Text>
            </View>
          </View>
        </View>

      </Modal>

     
    </View>
    </>
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
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom:0,
  },
  imagebg:{ width:width,paddingTop:50,paddingBottom:35, shadowColor: "#000",
    shadowOffset: {
      width: width,
      height: height-30
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0 },

  modalView: {
   
    backgroundColor: "#efefef",
    borderRadius: 0,
     width: width,
      height: height+23,
    alignItems: "center",
   marginBottom:0,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    height:60,
    width:60,
    textAlign:'center',
    marginTop:-30,
     shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 30
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5 
   
  },
  
  modalText: {
    color:'#fff',
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    fontWeight:'bold',
  },
    modalTextsub: {
      color:'#fff',
    marginBottom: 15,
    fontSize:16,
    textAlign: "center"
  },
  closeic:{color:'#78ae65',textAlign:'center',},
  
  listnav:{display: "flex",
    marginTop: 20,

    alignItems: "center",
    flexDirection: "row",
    alignSelf:'flex-start',
    alignContent:'flex-start',
    flexWrap:'wrap',
    width:width-50,
  },
listnavwrapper:{padding:20},
  navicon:{color:'#333',width:40},
  navicontxt:{fontWeight:'bold',fontSize:16, marginLeft:20, color:'#333',marginBottom:10},
  naviconsubtxt:{fontWeight:'normal',fontSize:14,color:'#666'},
  copyrights:{position:'absolute',bottom:10,},
  rightstxt:{textAlign:'center',  color:'#517fff'},
switchswrap:{marginTop:40, marginBottom:20},
switchs:{textAlign:'center'},

containerswitch: {  
  borderRadius: 1,
marginTop:20,
marginBottom:5,
position:'relative',
width:220,
marginLeft:'auto',
marginRight:'auto',
shadowColor: "#ccc",
shadowOffset: {
  width: 0,
  height: 1,
},
padding:10,
shadowOpacity: 0.23,
shadowRadius: 1,
display:'flex', 
alignItems: "center",
elevation: 1,
flexDirection: "row",
  justifyContent:'space-between',   
},

 

    containerinset:{height:50, display:'flex',padding:15, borderRadius: 5,
    },

    containerswitchinr:{backgroundColor:'#fff', width:100,paddingRight:12,paddingLeft:12,paddingTop:7,paddingBottom:7,
  shadowColor: "#ccc",
shadowOffset: {
  width: 0,
  height: 1,
}, borderRadius: 5,
padding:10,
shadowOpacity: 0.23,
shadowRadius: 1,
display:'flex', 
alignItems: "center",
elevation: 4,},
    containerswitchinrAct:{ width:100,paddingRight:12,
      display:'flex', backgroundColor: "#efefef",
alignItems: "center",paddingLeft:12,paddingTop:7,paddingBottom:7,},

swichicon:{color:'#000'},

swichiconAct:{color:'#9c9c9c',},

textStyle: {

    textAlign: "center",
    fontSize:14,marginTop:6,color:'#000', 
  },

textStyleAct:{  
    textAlign: "center",
    fontSize:14,marginTop:6,color:'#9c9c9c'
  }

});
