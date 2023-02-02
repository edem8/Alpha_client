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
  const [code, setCode] = useState("");
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <Custom_TextInput
        placeholder={'Enter confirmation code'}
        onChangeText={setCode}
      />

      <Custom_Button text={'Confirm'} type="PRIMARY"/>
      <Custom_Button text={'Resend code'} type="SECONDARY"/>
      <Custom_Button text={'Back to Sign In'} type="TERTIARY" 
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