import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Custom_Buttons({text, type, onPress}) {
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.submit_button_container, styles[`submit_button_container_${type}`]]}>
        <Text style={[styles.submit_button_text, styles[`submit_button_text_${type}`]]}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
  submit_button_text: {
    color: "#fff",
    fontSize: 12,
  },

  submit_button_text_PRIMARY:{
    fontWeight: 'bold',
  },

  submit_button_text_SECONDARY:{
    color: '#3B71F3'
  },

  submit_button_text_TERTIARY: {
    color: 'black',

  },

  submit_button_container: {
   
    padding: 15,
    borderRadius: 9,
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
  },
  
  submit_button_container_PRIMARY: {
    backgroundColor: "#55AAFF",
  },
  submit_button_container_SECONDARY:{
    borderColor: '#3B71F3',
    borderWidth: 2,
    
},

  
});