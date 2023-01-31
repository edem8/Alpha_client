import { StyleSheet, Image,} from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
export default function Custom_Cover_image({source, resizeMode}) {
  
  return (
    <Image
    source={source}
    style={[styles.believe_in_yourself, {height: responsiveHeight(30)}, {width: responsiveWidth(100)}]}
    resizeMode= {resizeMode} />
    
  )
}

const styles = StyleSheet.create({
    
  believe_in_yourself: {
    
    maxWidth: 600,
    maxHeight: 500,
   
  },
});