import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import Header from "../../components/User/Header";
import { styles } from "../../styles/Account/AccountStyle";
import Input from "../../components/Generic/AccountInput";
import { FontAwesome5, AntDesign, Entypo, MaterialIcons } from "react-native-vector-icons";
import {  profileInformation, updateInformation,} from "../../store/actions/User";
import { connect } from "react-redux";

const Account = ({
  navigation,
  profileInformation,
  profileInfo,
  updateInformation,
}) => {
  let profile = profileInfo[0];
  const handleNavigation = () => {
    navigation.navigate("EditImage");
  };


  useEffect(() => {
    profileInformation();
    profileInfo.map((data) => {
      setImageUrl(data.photoURL);
    });
    setEdit(false);
  }, []);

  const [Edit, setEdit] = useState(false);

  const [state, setState] = useState({
    about: profile.about,
    userType: profile.userType,
    firstName: profile.firstName,
    lastName: profile.lastName,
    Email: profile.Email,
    PhoneNumber: profile.PhoneNumber,
    websiteUrl: profile.websiteUrl,
    facebookUrl: profile.facebookUrl,
    instagramUrl: profile.instagramUrl,
    userId: profile.id,
  });
  const handleAccountInfo = () => {
//alert(state.about);
    if(state.about == '') 
   { alert( 'Please fill about yourself' );    return false; }

    else if(state.userType == '' )      
   {      alert( 'Please fill user type' );    return false; }
     else   if(state.firstName == '') 
   {      alert( 'Please fill first name' );    return false;  }
       else if(state.lastName == '') 
   {      alert( 'Please fill last name' );    return false;}
       else if(state.Email == '') 
   {  alert( 'Please fill email' );    return false; }
     else  if(state.PhoneNumber == '' ) 
   {  alert( 'Please fill phone number' );    return false; }
     else if(state.websiteUrl == '' )        
   { alert( 'Please fill website Url' ); return false; }
       else if(state.facebookUrl == '' ) 
   {  alert( 'Please fill facebook link' );    return false; }
       else if(state.instagramUrl == '') 
   {      alert( 'Please fill instagram link' );    return false; }
    
 else{ 
    updateInformation(state);
   navigation.navigate("Home");
 }
  };
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    profileInfo.map((data) => {
      setImageUrl(data.photoURL);
    });
    console.log("stateeeee", profileInfo);
    profileInformation();
  }, [updateInformation]);

  return (
    <ScrollView style={styles.screen}>
      <View>

        <View style={styles.topfunacc}>
             <TouchableOpacity
               onPress={() => navigation.goBack()}> 
                <Text>  <MaterialIcons  name="arrow-back"  size={25}/></Text>
    </TouchableOpacity>
    <TouchableOpacity
               onPress={handleAccountInfo}> 
                   <Text>Save & Exit</Text>
              </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View>
            <TouchableOpacity style={styles.imageComponent}>
              {imageUrl !== "" ? (
                <Image
                  style={{ height: 100, width: 100, borderRadius: 200 }}
                  source={{ uri: imageUrl }}
                />
              ) : (
                <Image
                  style={{ height: 100, width: 100, borderRadius: 200 }}
                  source={require("../../../assets/images/user1.jpeg")}
                />
              )}
              <View style={styles.add}>
                <TouchableOpacity onPress={handleNavigation}>
                  <FontAwesome5
                    name="user-edit"
                    width={20}
                    height={20}
                    fill="#111"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>{profile.Name}</Text>
          </View>
         
         {/* {Edit ? (
            <TouchableOpacity
              onPress={handleAccountInfo}
              style={{
                paddingTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>Update Information</Text>
              <AntDesign style={{ fontSize: 20 }} name="edit" />
            </TouchableOpacity>
          ) : (
            <Text></Text>
          )} */}
        </View>
        <View style={styles.info}>
         <View style={styles.inputContainer}>
            <Text style={styles.name}>About Yourself</Text>
            <TextInput
              paddingVertical={0}
              minHeight={100}
              multiline={true}
              numberOfLines={20}
              defaultValue={profile.about}
              maxLength={300}
              placeholder="Give your clients a short bio about yourself, and the service you offer?  Tell them what do you like about your service, and remember honesty goes a long way in the online world 💫"
              style={styles.input}
              onChangeText={(text) => {
                setEdit(true);
                setState({ ...state, about: text });
              }}
            />
          </View>
          <Text style={styles.heading}>Profile details</Text>
         
          <Input
            head="User Type"
            editable={true}
            defaultValue={profile.userType}
            placeHolder=""
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, userType: text });
            }}
          />
          <Input
            head="First Name"
            defaultValue={profile.firstName}
            editable={true}
            placeHolder=""
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, firstName: text });
            }}
          />
          <Input
            head="Last Name"
            defaultValue={profile.lastName}
            editable={true}
            placeHolder=""
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, lastName: text });
            }}
          />
          <Input
            head="Email"
            defaultValue={profile.Email}
            editable={true}
            placeHolder=""
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, Email: text });
            }}
          />
          <Input
            head="Phone "
            defaultValue={profile.PhoneNumber}
            editable={true}
            placeHolder=""
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, PhoneNumber: text });
            }}
          />
          <Text style={styles.heading}>Website and Account Details</Text>
          <View style={styles.textwrap}>
          <Entypo name="globe"   style={styles.texticon}/>
          <Input
            head="Website"
            defaultValue={profile.websiteUrl}
            editable={true}
            placeHolder="enter url"
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, websiteUrl: text });
            }}
          />
          </View>
          <View style={styles.textwrap}>
          <Entypo name="facebook"   style={styles.texticon}/>
          <Input
            head="Facebook"
            defaultValue={profile.facebookUrl}
            editable={true}
            placeHolder="enter url"
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, facebookUrl: text });
            }}
          />
          </View>
          <View style={styles.textwrap}>
          <AntDesign name="instagram"   style={styles.texticon}/>
          <Input
            head="Instagram"
            defaultValue={profile.instagramUrl}
            editable={true}
            placeHolder="enter url"
            onChangeText={(text) => {
              setEdit(true);
              setState({ ...state, instagramUrl: text });
            }}
          />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profile.profileInformation,
  };
};
export default connect(mapStateToProps, {
  profileInformation,
  updateInformation,
})(Account);
