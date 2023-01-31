import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Custom_Submit({text}) {
  return (
    <TouchableOpacity style={styles.submit_button_conatiner}>
        <Text style={styles.submit_button_text}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
  submit_button_text: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20

  },

  submit_button_conatiner: {
    backgroundColor: "#55AAFF",
    padding: 15,
    borderRadius: 9,
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
  },

});