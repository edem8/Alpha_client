import { StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ConfirmEmailScreen from './Screens/ConfirmEmailScreen';
import ResetPasswordScreen from './Screens/ResetPasswordScreen';
import NewPasswordScreen from './Screens/NewPasswordScreen';
import HomeScreen from './Screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer styles={styles.root}>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} /> 
        <Stack.Screen name="ConfirmMail" component={ConfirmEmailScreen}  /> 
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}  /> 
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",  
    justifyContent: "center",
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    alignItems: "center",
  
  },
  
});
