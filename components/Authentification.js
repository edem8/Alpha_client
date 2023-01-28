import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, useWindowDimensions, View, Text, TextInput} from 'react-native';
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg'

export default function Authentification() {
    const {height} = useWindowDimensions();
    const {width} = useWindowDimensions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
    <Image
    source={believe_in_yourself}
    style={[styles.believe_in_yourself, {height: height * 0.4}, {width: width * 1.1}]}
    resizeMode="contain" />
    
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
        style={styles.input_text}/>

    </View>
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
});
