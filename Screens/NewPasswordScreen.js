import { StyleSheet, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import Custom_TextInput from '../components/Custom_TextInput';
import Custom_Button from '../components/Custom_Button';

export default function NewPasswordScreen({navigation}) {
  const [Newpassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const onSaveButtonPressed = () => {
    console.log(alert('onSaveButtonPressed'))
  }

  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <Custom_TextInput
        placeholder={'New Password'}
        onChangeText={setNewpassword}
        secureTextEntry={'true'}
      />

      <Custom_TextInput
        placeholder={'Confirm Password'}
        onChangeText={setConfirmPassword}
        secureTextEntry={'true'}
      />

      <Custom_Button text={'Save'} type="PRIMARY" onPress={onSaveButtonPressed} />
      <Custom_Button text={'Back to Sign In'} type="TERTIARY" onPress={onBackToSignInPressed}
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