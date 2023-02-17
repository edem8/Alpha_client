import SignInScreen from '../Screens/Authentication_Screens/SignInScreen';
import SignUpScreen from '../Screens/Authentication_Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/Authentication_Screens/ConfirmEmailScreen';
import ResetPasswordScreen from '../Screens/Authentication_Screens/ResetPasswordScreen';
import NewPasswordScreen from '../Screens/Authentication_Screens/NewPasswordScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthenticationStack = createNativeStackNavigator();

export default function AuthenticationStacks() {
    return (
        <AuthenticationStack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
          <AuthenticationStack.Screen name="SignIn" component={SignInScreen} />
          <AuthenticationStack.Screen name="SignUp" component={SignUpScreen} /> 
          <AuthenticationStack.Screen name="ConfirmMail" component={ConfirmEmailScreen}  /> 
          <AuthenticationStack.Screen name="ResetPassword" component={ResetPasswordScreen}  /> 
          <AuthenticationStack.Screen name="NewPassword" component={NewPasswordScreen} /> 
        </AuthenticationStack.Navigator>
    )
  }