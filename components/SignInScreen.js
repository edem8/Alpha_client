import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, Image, useWindowDimensions, View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg'
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'

export default function SignInScreen() {
    const {height} = useWindowDimensions();
    const {width} = useWindowDimensions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isChecked, setChecked] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <Image
    source={believe_in_yourself}
    style={[styles.believe_in_yourself, {height: height * .3}, {width: width * 1}]}
    resizeMode= 'cover' />
    
        {/* Placeholder for Eamil Entry */}
    <View style={styles.input_label_text_container}>
    <Text style={styles.input_label}>Username Or Email</Text>
    <View style={styles.input_text_container}>
        <TextInput
        placeholder= 'Username or Email'
        onChangeText={(email) => setEmail(email)}
        style={styles.input_text}/>

    </View>
    </View>

      {/* Placeholder for Password Entry */}
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

        {/* Remember me and reset password*/}
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

        {/* Submit Button*/}
    <View style={styles.input_label_text_container}>
    <TouchableOpacity style={styles.submit_button_conatiner}>
      <Text style={styles.submit_button_text}>
        Submit
      </Text>
    </TouchableOpacity>
    </View>

    
        {/* Horizontal "or" rule*/}
    <View style={{flexDirection: 'row', alignItems: 'center', width: '30%', marginVertical: 30}}>
      <View style={{flex: 1, height: 1, backgroundColor: '#D4D4D4'}} />
      <View>
      <Text style={{width: 25, textAlign: 'center', color:'#BEBEBE' }}>or</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: '#D4D4D4'}} />
    </View>


        {/* Social links*/}
    <View style={styles.log_in_with}>
      <Text style={{marginHorizontal: '27%', paddingVertical: 15, color:'grey', flexDirection: 'column'}}>Login with</Text>
      <View style={styles.all_socials_contaner}>
      <TouchableOpacity style={styles.socials_individual_container}>
        <Image source={google} style={styles.google_socials}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socials_individual_container}>
        <Image source={facebook} style={styles.facebook_socials}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socials_individual_container}>
        <Image source={linkedin} style={styles.linkedin_socials}/>
      </TouchableOpacity>
      </View>
    </View>


        {/* Not a member? signUp here*/}
    <View style={styles.go_to_signup}>
      <Text>
        Not a member?
      </Text>
      <TouchableOpacity>
        <Text style={styles.signup_here_text}>
          Sign Up here
        </Text>
      </TouchableOpacity>
    </View>
    
    </View>
    </ScrollView>
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
    alignItems: 'center',
   
    
  },

  checkbox: {
    borderWidth: 1,
    borderRadius: 6,
    height: 21,
    width: 20,
  
  },

  remember_me_text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  reset_password_conatiner: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: '10%'
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

  log_in_with: {
    width: '50%',
    
  },

  all_socials_contaner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: '10%'
  },

  socials_individual_container: {
    paddingHorizontal: 10
  },

  google_socials: {
    width: 24,
    height: 24,

  },

  facebook_socials: {
    width: 27,
    height: 27,
  },

  linkedin_socials: {
    width: 30,
    height: 30
  },

  go_to_signup: {
    width: '80%',
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingHorizontal: '15%'
  },

  signup_here_text: {
    color: '#3388FF',
    paddingHorizontal: 5,
  },
});
