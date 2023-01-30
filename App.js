import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';

export default function App() {

  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",  
  },
  
});
