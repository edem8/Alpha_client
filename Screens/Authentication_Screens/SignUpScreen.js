import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, StatusBar} from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useState } from 'react'
import believe_in_yourself from '../../assets/images/believe_in_yourself.jpg'
import Custom_Cover_image from '../../components/Custom_Cover_image'
import Custom_TextInput from '../../components/Custom_TextInput'
import Custom_Checkbox from '../../components/Custom_Checkbox'
import Custom_Button from '../../components/Custom_Button';

export default function SignUpScreen({navigation}) {
    const [Username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();
    const [postcode, setPostcode] = useState();
    const [phone, setPhone] = useState();
    const [fitnessgoals, setFitnessgoals] = useState();



    const onSubmitButtonPressed = () => {
      navigation.navigate('ConfirmMail')
    };

    const onLoginHerePressed = () => {
      console.log(alert('onSubmitButtonPressed'));
      navigation.navigate('SignIn')
    };

  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container}>
      <Custom_Cover_image 
      source={believe_in_yourself}
      resizeMode={'auto'}/>

      <Custom_TextInput
        placeholder={'Username'}
        onChangeText={setUsername}
      />


      <Custom_TextInput
        placeholder={'Email'}
        onChangeText={setEmail}
      />

      <Custom_TextInput
        placeholder={'password'}
        onChangeText={setPassword}
        secureTextEntry = {true}
      />  

      <Custom_TextInput
        placeholder={'Confirm password'}
        onChangeText={setConfirmPassword}
        secureTextEntry = {true}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', width: responsiveWidth(90), justifyContent: 'space-between'}}>
      <View style={[styles.input_label_text_container, {width: '25%'}]}>
      <View style={styles.input_text_container}>
        <TextInput
        placeholder= 'Postcode'
        placeholderTextColor={"grey"}
        onChangeText= {setPostcode}
        style={styles.input_text}/>
    
      </View>
      </View>


      <View style={[styles.input_label_text_container, {width: '50%'}]}>
    
      <View style={styles.input_text_container}>
        <TextInput
        placeholder= 'Phone Number'
        placeholderTextColor={"grey"}
        onChangeText= {setPhone}
        style={styles.input_text}/>
    
      </View>
      </View>
      </View>
     
      <Custom_TextInput
       placeholder={'What are your fitness goals?'}
       onChangeText={setFitnessgoals}
     
       />



      <View
      style={{flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center', 
      width: responsiveWidth(100), 
      marginBottom:25,
      }
      }>
      <Custom_Checkbox
      />
       
      <View style={{flexDirection: 'row', marginHorizontal: 5,}}>
       <Text>I Agree to the</Text>
       <TouchableOpacity style={{marginHorizontal: 2}}>
        <Text style={{color: '#3388FF'}}>
          terms,
        </Text>
       </TouchableOpacity>

      <TouchableOpacity style={{marginHorizontal: 2}}>
        <Text style={{color: '#3388FF'}}>
          privacy
        </Text>
      </TouchableOpacity>
      <Text>and</Text>

      <TouchableOpacity style={{marginHorizontal: 2}}>
        <Text style={{color: '#3388FF'}}>
          conditions
        </Text>
      </TouchableOpacity>
      </View>
      </View>


      <Custom_Button
      onPress={onSubmitButtonPressed}
      text={'Submit'}
      type="PRIMARY"
      nav_screen = "SignIn"
      
      />


      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Already a member?</Text>
        <TouchableOpacity onPress={onLoginHerePressed}>
          <Text style={{color: '#3388FF', marginHorizontal: 5, marginBottom: 30}}>
            LogIn here
          </Text>
        </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  ScrollView: {
    height: responsiveHeight(100),
    width: responsiveWidth(100), 
    
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    
    },
  
    input_label_text_container: {
      width: '30%',
      marginVertical: 10,
     
    },

    input_text: {
      marginHorizontal: 3
    },
  
    input_text_container: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "white",
      paddingHorizontal: 0,
      paddingVertical: 7
    },
});