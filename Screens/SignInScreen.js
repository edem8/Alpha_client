import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, useWindowDimensions, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg';
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import Custom_Checkbox from '../components/Custom_Checkbox';
import Custom_TextInput from '../components/Custom_TextInput';
import Custom_Submit from '../components/Custom_Submit';


export default function SignInScreen() {
    const {height} = useWindowDimensions();
    const {width} = useWindowDimensions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <Image
    source={believe_in_yourself}
    style={[styles.believe_in_yourself, {height: height * .3}, {width: width * 1}]}
    resizeMode= 'cover' />
    
        {/* Placeholder for Eamil Entry */}
    <Custom_TextInput 
        placeholder= 'Username or Email'
        onChangeText={(email) => setEmail(email)}
      />

      {/* Placeholder for Password Entry */}
    <Custom_TextInput 
        placeholder= 'Password'
        onChangeText={(password) => setPassword(password)}
        secureTextEntry = {true}
      />

        {/* Remember me and reset password*/}
    <View style={styles.remember_reset_container}>
    
      <Custom_Checkbox />

      <Text style={styles.remember_me_text}>Remember me</Text>
      <TouchableOpacity style={styles.reset_password_conatiner}>
      <Text style={styles.reset_password_text}>
        Reset Password
      </Text>
      </TouchableOpacity>
    </View>

        {/* Submit Button*/}
 
    <Custom_Submit text = 'Submit'/>
    
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
      <Text style={{marginHorizontal: '30%', paddingVertical: 15, color:'grey', flexDirection: 'column'}}>Login with</Text>
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

  remember_reset_container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    
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

  log_in_with: {
    width: '60%',
  },

  all_socials_contaner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 5
    
  },

  socials_individual_container: {
    paddingHorizontal: 20
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
