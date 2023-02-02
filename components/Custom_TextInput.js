import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React from 'react'

export default function Custom_TextInput({placeholder, onChangeText, secureTextEntry, text}) {
  return (

    <View style={styles.input_label_text_container}>
    <Text style={styles.input_label}>{placeholder}</Text>
    <View style={styles.input_text_container}>
        <TextInput
        placeholder= {placeholder}
        onChangeText={onChangeText}
        secureTextEntry = {secureTextEntry? true : false}
        style={styles.input_text}/>
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
  input_label_text_container: {
    width: '90%',
    marginVertical: 10,
    paddingVertical: 5
  },

  input_label: {
    paddingHorizontal: 5
  },

  input_text_container: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 11
  },

});