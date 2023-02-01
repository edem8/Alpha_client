import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import Custom_Background_img from '../components/Custom_Background_img'

export default function Dashboard() {
  return (
    <View style={styles.root}>
      <Custom_Background_img />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})