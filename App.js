import { StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer styles={styles.root}>
      <Stack.Navigator initialRouteName="SignIn">  
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
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
