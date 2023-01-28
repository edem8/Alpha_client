import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import Authentification from './components/Authentification'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Authentification/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
