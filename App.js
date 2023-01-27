import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput} from 'react-native';
import fit from './assets/images/fit.jpg'

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>

      <Image source={fit} style={styles.fit_image}/>
     
      <StatusBar style="auto" />

      <View style={styles.LogIns_container}>

        <View style={styles.email_container}>
        <Text>Username Or Email</Text>
        <TextInput
        placeholder='Username or Email'
        placeholderTextColor='grey'
        onChangeText={(email) => setEmail(email)}
        style={styles.textInput}/>
        </View>

        <View style={styles.password_container}>
        <Text>Password</Text>
        <TextInput
        placeholder='Password'
        placeholderTextColor='grey'
        onChangeText={(password) => setPassword(password)}
        style={styles.textInput}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  
  fit_image: {
    width: 375,
    marginTop: 10,
    height: 270,
    flex: 2
  },

  LogIns_container: {
    flex: 3
  },

  email_container: {
    marginVertical: 20
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    fontSize: 16,
    paddingHorizontal: 100,
    paddingVertical: 8,
    textAlign: 'center',
    

  }
});
