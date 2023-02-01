import { StatusBar } from 'react-native';
import { useState } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg';
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import Custom_Checkbox from '../components/Custom_Checkbox';
import Custom_TextInput from '../components/Custom_TextInput';
import Custom_Submit from '../components/Custom_Submit';
import Custom_Cover_image from '../components/Custom_Cover_image';


export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container}>

      {/*Cover Image */}
    <Custom_Cover_image  
        source={believe_in_yourself}
        resizeMode={'cover'}/>
    
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
    <View style={{flexDirection: 'row', alignItems: 'center', width: '30%', marginVertical: 30,}}>
      <View style={{flex: .5, height: 1, backgroundColor: '#D4D4D4'}} />
      <View>
      <Text style={{flex: 1, width: 25, textAlign: 'center', color:'#BEBEBE' }}>or</Text>
      </View>
      <View style={{flex: .5, height: 1, backgroundColor: '#D4D4D4'}} />
    </View>


    <Text style={{paddingHorizontal: '33%', paddingVertical: 15, color:'grey', flexDirection: 'column',}}>Login with</Text>

        {/* Social links*/}
    <View style={styles.log_in_with}>
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
    <View style={{width: responsiveWidth(100),}}>
    <View style={styles.go_to_signup}>
      <Text style={styles.member}>
        Not a member?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
        <Text style={styles.signup_here_text}>
          Sign Up here
        </Text>
      </TouchableOpacity>
    </View>
    </View>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    height: responsiveHeight(100),
    width: responsiveWidth(100), 
    
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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
    width: responsiveWidth(60),
    
  },

  all_socials_contaner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 7
    
  },

  socials_individual_container: {
    paddingHorizontal: 20
  },

  google_socials: {
    width: 29,
    height: 29,
  },

  facebook_socials: {
    width: 32,
    height: 32,
  },

  linkedin_socials: {
    width: 35,
    height: 35
  },

  go_to_signup: {
    width: responsiveWidth(70),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 0,
    marginHorizontal: 60,
  },

  member: {
    marginEnd: 5
  },

  signup_here_text: {
    color: '#3388FF',
    marginStart: 1,
  
  },
});
