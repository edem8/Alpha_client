import { StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { 
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import SignInScreen from './Screens/Authentication_Screens/SignInScreen';
import SignUpScreen from './Screens/Authentication_Screens/SignUpScreen';
import ConfirmEmailScreen from './Screens/Authentication_Screens/ConfirmEmailScreen';
import ResetPasswordScreen from './Screens/Authentication_Screens/ResetPasswordScreen';
import NewPasswordScreen from './Screens/Authentication_Screens/NewPasswordScreen';
import HomeScreen from './Screens/OnBoardingScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './Screens/OnBoardingScreen';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer styles={styles.root}>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboarding' component={OnBoardingScreen}/>
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
