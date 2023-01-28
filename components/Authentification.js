import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, Image, useWindowDimensions, View, Text, TextInput, Touchable, TouchableOpacity} from 'react-native';
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg'

export default function Authentification() {
    const {height} = useWindowDimensions();
    const {width} = useWindowDimensions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
    <Image
    source={believe_in_yourself}
    style={[styles.believe_in_yourself, {height: height * .3}, {width: width * 1}]}
    resizeMode= 'cover' />
    
    <View style={styles.input_label_text_container}>
    <Text style={styles.input_label}>Username Or Email</Text>
    <View style={styles.input_text_container}>
        <TextInput
        placeholder= 'Username or Email'
        onChangeText={(email) => setEmail(email)}
        style={styles.input_text}/>

    </View>
    </View>

     
    <View style={styles.input_label_text_container}>
    <Text style={styles.input_label}>Password</Text>
    <View style={styles.input_text_container}>
        <TextInput 
        placeholder='Password'
        onChangeText={(password) => setPassword(password)}
        style={styles.input_text}
        secureTextEntry/>

    </View>
    </View>

    <View style={styles.remember_reset_container}>
    <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#3388FF' : undefined}
        />
      <Text style={styles.remember_me_text}>Remember me</Text>
      <TouchableOpacity style={styles.reset_password_conatiner}>
      <Text style={styles.reset_password_text}>
        Reset Password
      </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.input_label_text_container}>
    <TouchableOpacity style={styles.submit_button_conatiner}>
      <Text style={styles.submit_button_text}>
        Submit
      </Text>
    </TouchableOpacity>
    </View>

    

    <View style={{flexDirection: 'row', alignItems: 'center', width: '30%', marginVertical: 40}}>
      <View style={{flex: 1, height: 1, backgroundColor: '#D4D4D4'}} />
      <View>
      <Text style={{width: 25, textAlign: 'center', color:'#BEBEBE' }}>or</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: '#D4D4D4'}} />
    </View>


    
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    believe_in_yourself: {
        
        maxWidth: 600,
        maxHeight: 500,
   
  },

  input_label_text_container: {
    width: '90%',
    marginVertical: 10,
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
    paddingVertical: 7
  },

  remember_reset_container: {
    flexDirection: 'row',
    width: '90%',
    
  },

  checkbox: {
    borderWidth: 1,
    borderRadius: 6,
    height: 21,
    width: 20,
  
  },

  remember_me_text: {
    paddingHorizontal: 7,
    paddingVertical: 5,
  },

  reset_password_conatiner: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginLeft: '30%'
  },

  reset_password_text: {
    color: '#3388FF'
  },

  submit_button_text: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20

  },

  submit_button_conatiner: {
    backgroundColor: "#55AAFF",
    padding: 15,
    borderRadius: 9,
    alignItems: 'center'
  },
});
