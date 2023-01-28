import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import Authentification from './components/Authentification'

export default function App() {

  return (
    <SafeAreaView style={styles.root}>
      <Authentification/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",  
  },
  
});
