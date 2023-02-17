import 'react-native-gesture-handler';
import { StyleSheet,} from 'react-native';
import { 
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";


import OnboardingStacks from './NavigationStacks/OnboardingStacks';
import AuthenticationStacks from './NavigationStacks/AuthenticationStacks';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientStacks from './NavigationStacks/ClientStacks';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer styles={styles.root}>
      <Stack.Navigator initialRouteName="Onboard" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboard' component={OnboardingStacks}/>
        <Stack.Screen name="Authentication" component={AuthenticationStacks} />
        <Stack.Screen name="Drawer" component={ClientStacks} />
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
