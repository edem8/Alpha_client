import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {responsiveHeight, responsiveWidth,} from "react-native-responsive-dimensions";

import HomeBackground from '../assets/images/HomeBackground.jpg'

export default function HomeScreen() {
  return (
    <View style={styles.root}>
        <ImageBackground source={HomeBackground} style={styles.HomeBackground}>

        </ImageBackground>
        
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    HomeBackground: {
        width: responsiveWidth(100),
        height: responsiveHeight(130),
    },
});