import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Image,} from 'react-native';
import believe_in_yourself from '../assets/images/believe_in_yourself.jpg'

export default function Authentification() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (

      <Image source={believe_in_yourself} style={styles.believe_in_yourself} resizeMode="contain"/>
     
  );
}

const styles = StyleSheet.create({
  believe_in_yourself: {
    width: '100%',
    height: '40%',
   
  },
});
