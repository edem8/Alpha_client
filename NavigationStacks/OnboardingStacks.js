import OnBoardingScreen from '../Screens/OnBoardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const OnboardingStack = createNativeStackNavigator();

export default function OnboardingStacks() {
    return (
        <OnboardingStack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
          <OnboardingStack.Screen name='Onboarding' component={OnBoardingScreen}/>
        </OnboardingStack.Navigator>
    )
  }