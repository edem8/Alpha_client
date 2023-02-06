import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
  FiraSans_600SemiBold,
  FiraSans_600SemiBold_Italic,
  FiraSans_700Bold,
  FiraSans_700Bold_Italic,
  FiraSans_800ExtraBold,
  FiraSans_800ExtraBold_Italic,
  FiraSans_900Black,
  FiraSans_900Black_Italic,
} from '@expo-google-fonts/fira-sans';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

import HomeBackground from '../assets/images/HomeBackground.jpg'

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    FiraSans_100Thin,
    FiraSans_100Thin_Italic,
    FiraSans_200ExtraLight,
    FiraSans_200ExtraLight_Italic,
    FiraSans_300Light,
    FiraSans_300Light_Italic,
    FiraSans_400Regular,
    FiraSans_400Regular_Italic,
    FiraSans_500Medium,
    FiraSans_500Medium_Italic,
    FiraSans_600SemiBold,
    FiraSans_600SemiBold_Italic,
    FiraSans_700Bold,
    FiraSans_700Bold_Italic,
    FiraSans_800ExtraBold,
    FiraSans_800ExtraBold_Italic,
    FiraSans_900Black,
    FiraSans_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else{
  return (
    <View style={styles.root}>
        <ImageBackground source={HomeBackground} style={styles.HomeBackground} resizeMode="cover">
          
          <View style={styles.Descritption}>
          <Text style={styles.Descritption_1}>TRAIN WITH </Text>
          <Text style={styles.Descritption_2}>THE BEST</Text>
          <Text style={styles.Descritption_3}>FITNESS COACH</Text>
          </View>
          
        </ImageBackground>
        
    </View>
  );
}
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    HomeBackground: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },

    Descritption: {
      marginTop: responsiveHeight(40),
      marginLeft: responsiveWidth(10),
      justifyContent: 'center'
    },

    Descritption_1: {
      color: 'white',
      fontSize: responsiveFontSize(3),
      fontFamily:"FiraSans_200ExtraLight"
    },

    Descritption_2: {
      color: 'orange',
      fontSize: responsiveFontSize(4),
      fontFamily:"FiraSans_300Light"
     
    },
    
    Descritption_3: {
      color: "white",
      fontSize: responsiveFontSize(5),
      fontFamily: "FiraSans_400Regular"
    },
});