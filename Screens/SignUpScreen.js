import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg'
import Custom_Cover_image from '../components/Custom_Cover_image'
import Custom_TextInput from '../components/Custom_TextInput'

export default function SignUpScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Custom_Cover_image 
      source={believe_in_yourself}
      resizeMode={'cover'}/>


      <Custom_TextInput
        placeholder={'Username  or Email'}
        onChangeText={setEmail}
      />

      <Custom_TextInput
        placeholder={'password'}
        onChangeText={setPassword}
        secureTextEntry = {true}
      />  

      <Custom_TextInput
        placeholder={'Confirm password'}
        onChangeText={setPassword}
        secureTextEntry = {true}
      />






    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    },
});