import { StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Custom_Cover_image({source, resizeMode}) {
    const {height} = useWindowDimensions();
    const {width} = useWindowDimensions();
  return (
    <Image
    source={source}
    style={[styles.believe_in_yourself, {height: height * .3}, {width: width * 1}]}
    resizeMode= {resizeMode} />
    
  )
}

const styles = StyleSheet.create({
    
  believe_in_yourself: {
        
    maxWidth: 600,
    maxHeight: 500,
   
  },
});