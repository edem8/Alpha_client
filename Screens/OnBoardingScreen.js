import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';

import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import HomeBackground from '../assets/images/HomeBackground.jpg'



export default function OnBoardingScreen({navigation}) {
  const onLoginPressed = () => {navigation.navigate('SignIn')}
  const onRegisterPressed = () => {navigation.navigate('SignUp')}
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold, 
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });


  if (!fontsLoaded) {
   
      return null;
  } else{
  return (
    <View style={styles.root}>
        <ImageBackground source={HomeBackground} style={styles.HomeBackground} resizeMode="cover">
        
        <View style={{width: responsiveWidth(90), alignItems: 'center', marginTop: responsiveHeight(50)}}>
          <Text style={{color: '#fff', fontFamily: 'OpenSans_800ExtraBold', fontSize: 30}}>Personal Trainers Within</Text>
          <Text style={{color: "#55AAFF", fontFamily: 'OpenSans_800ExtraBold', fontSize: 25}}>Your Postcode</Text>
        </View>


        <Text style={{color:"#fff", fontFamily: 'OpenSans_800ExtraBold', marginVertical:10, fontSize: 15 }}>Start your journey with Alpha</Text>

        <View style={styles.Buttons}>
          <TouchableOpacity onPress={onLoginPressed} style={{borderRadius: 9, backgroundColor: '#55AAFF', paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{color: 'white', fontFamily: 'OpenSans_800ExtraBold', fontSize: 18}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onRegisterPressed} style={{borderRadius: 9, backgroundColor: '#55AAFF', paddingHorizontal: 16, paddingVertical: 10}}>
            <Text style={{color: 'white', fontFamily: 'OpenSans_800ExtraBold', fontSize: 18}}>Register</Text>
          </TouchableOpacity>
        </View>
         
        
          
        </ImageBackground>
        
    </View>
  );
}
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    HomeBackground: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        alignItems: 'center',
        justifyContent: 'center'
    },

    Descritption: {
      marginTop: responsiveHeight(40),
      marginLeft: responsiveWidth(10),
      justifyContent: 'center'
    },

    Descritption_1: {
      color: 'white',
      fontSize: responsiveFontSize(3),
      fontFamily:"OpenSans_400Regular"
    },

    Descritption_2: {
      color: "white",
      fontSize: responsiveFontSize(4),
      fontFamily:"OpenSans_700Bold"
     
    },
    
    Descritption_3: {
      color:"#55AAFF",
      fontSize: responsiveFontSize(5),
      fontFamily: "OpenSans_800ExtraBold"
    },

    Buttons: {
      flexDirection: 'row',
      width: responsiveWidth(100),
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: responsiveHeight(10),
     
    },
});