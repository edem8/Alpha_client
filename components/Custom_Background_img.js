import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import Dashboard from '../assets/images/Dashboard.jpg'

export default function Custom_Background_img() {
  return (
    <View>
      <ImageBackground
      source={Dashboard} 
      resizeMode= 'cover'
      styles={styles.Background_image}>

        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>

        <Text>helgs ior</Text>

        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        <Text>helgs ior</Text>
        

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

    Background_image: {
        flex: 1,
        justifyContent: 'center',
        height: responsiveHeight(100),
        width: responsiveWidth(100)
    },
});