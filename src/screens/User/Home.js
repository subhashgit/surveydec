import React, { useEffect } from "react";
import { StyleSheet,  ScrollView, View, Animated ,Image, Button} from "react-native";
import Header from "../../components/User/Header";
import ListingItem from "../../components/User/ListingItem";

import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getServices } from "../../store/actions/Services";
import { FontAwesome } from "@expo/vector-icons";

const items = [ 
  {
    key: String(Math.random()),
    ico: 'user-circle',
    label: 'Add Profile Picture',
    bgcolor: '#60ad7f'
  },
  {
    key: String(Math.random()),
    ico: 'image',
    label: 'Upload ID document',
     bgcolor: '#bacdd9'
  },
  {
    key: String(Math.random()),
    ico: 'address-card',
    label: 'Category 3',
     bgcolor:'#68a3ca'
  },
  {
    key: String(Math.random()),
     ico: 'handshake-o',
    label: 'Category 4',
     bgcolor:'#999'
  },
  
];
const Services = ({ navigation, getServices, services }) => {
  useEffect(() => {
    getServices();
  }, []);

  return (
   
    <View>
    
  
      <View style={styles.screen}>
      <View style={styles.header}>
        <Header navigation={navigation}  name="Home" visible={true} />
      </View>
        <View style={styles.screenitemcontainer}>

        
            <ScrollView style={styles.screenitem} showsHorizontalScrollIndicator={false} horizontal={true}>
            {items.map((item) => (
              <View  style={[styles.listoption,{ backgroundColor:item.bgcolor}]} key={item.key}>
              <FontAwesome
            style={[styles.listimg, {fontSize: 30, paddingTop: 10 }]}
            name={item.ico}
          />
              
              <Text style={styles.listtxt}>{item.label}</Text>
              
            </View>
            ))}
         </ScrollView>
      </View>
        <View  style={styles.categorieslisting}>
           <View style={styles.milesdata}>   
             <Text style={styles.milesdatatxt}> Suggested Servey pro's in your area </Text>
              <View style={styles.milesdatain}>
               <FontAwesome
              style={{fontSize: 20, paddingTop: 10 }}
              name='sliders'
            /> 
          <Text style={styles.milesdatatxtmi}> 2  Mile
          </Text>
                  
              </View>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
             
          {services.map((data) => (
            <ListingItem key={data.id} data={data} navigation={navigation} />
          ))}
       
          </ScrollView>
          
        </View>


          <View style={styles.bannercont}>
              <View style={styles.bannerdetail}>
                  <Text style={styles.bannertitle}>Lorem Ipsum Dior almet</Text>

                  <Text style={styles.bannerdescription}>
                  Lorem Ipsum
                  </Text>
                   <View style={styles.bannerbuttontok}>
                   <TouchableOpacity
                    style={styles.loginScreenButton}
                   
                    underlayColor='#fff'>
                  <FontAwesome
            style={{fontSize: 30, color:'#62ad80' }}
            name='code-fork'
          />
                    <Text style={styles.bannerbutton}>Button</Text>
           </TouchableOpacity>
                 
                   </View>
               
              </View>
                
             <Image
        style={styles.bannerimg}
        source={require('../../../assets/images/13.png')}/>
        </View>
  
      </View>
      <View>
      </View>

    </View>


  );
};
const mapStateToProps = (state) => {
  return {
    services: state.Service.services,
  };
};
export default connect(mapStateToProps, { getServices })(Services);

const styles = StyleSheet.create({
 screen: {
    backgroundColor: "#f7f7f7",
   
    paddingTop: 35,

    height: 380,
    marginBottom:0
  },
  header:{paddingLeft:15,paddingRight:15},
  list: {
    paddingTop: 20,
    paddingBottom: 0,

  },
  screenitem:{paddingTop:20, paddingLeft:0,},
  


listoption:{
     alignItems: 'center',
 
    flexDirection:'row',
    width:170,
    height:80,
    marginRight:15,
    marginLeft:15,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,


   
},


listimg:{

  width:  50,
   height: 50,
   color:'#fff',
  
},
listtxt:{
   flex: 1,
    flexWrap: 'wrap',
  fontSize:18,
  color:'#fff',
},
bannercont:{
  backgroundColor: '#ededed',
 marginTop:10,
  flexDirection: 'row',
    alignItems: 'center',
  paddingTop: 15,
    paddingBottom: 15,
  paddingLeft: 15,
  paddingRight: 15,
},

bannerdetail:{flex: 1,
},

bannertitle:{ color: '#62ad80',
  fontSize: 19,
  fontWeight: 'bold',
},

bannerdescription:{color: '#999',
  fontSize: 16,
  fontWeight: 'bold',marginBottom:20},
bannerimg:{width:90,height:90},

loginScreenButton:{ 

textAlign:'center',
paddingTop:10,
padding:10,

display:'flex',
alignItems:'center',
 flexDirection: 'row',


 },
 bannerbuttontok:{ 
  borderColor:'#62ad80',
borderWidth:2,
width:150,

textAlign:'center',


borderColor:'#62ad80',
borderWidth:2,
display:'flex',
alignItems:'center',
 flexDirection: 'row',


 },
 bannerbutton:{
color:'#62ad80',  
marginLeft:35
},
categorieslisting:{
  marginTop:20,

},
milesdata:{marginBottom:18,marginTop:6, paddingLeft:10,paddingRight:15,display:'flex', flexDirection: 'row',alignItems:'center',
justifyContent:'space-between',
},
milesdatain:{display:'flex', flexDirection: 'row',alignItems:'center',marginTop:-4,
justifyContent: 'flex-end',
},
milesdatatxt:{fontSize:16, },
milesdatatxtmi:{fontSize:16,marginTop:10,marginLeft:5 }
});
