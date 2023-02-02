import { StyleSheet, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import Custom_TextInput from '../components/Custom_TextInput';
import Custom_Button from '../components/Custom_Button';

export default function ResetPasswordScreen({navigation}) {
  const [email, setEmail] = useState("");

  const onSendButtonPressed = () => {
    navigation.navigate('NewPassword')
  }

  const onBackToSignInButtonPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <Custom_TextInput
        placeholder={'Enter your email'}
        onChangeText={setEmail}
      />

      <Custom_Button text={'Send'} type="PRIMARY" onPress={onSendButtonPressed}  />
      <Custom_Button text={'Back to Sign In'} type="TERTIARY" onPress={onBackToSignInButtonPressed}
      />        
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
     
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      marginTop: responsiveHeight(2),
      marginBottom: 10 
    },
    
    
})