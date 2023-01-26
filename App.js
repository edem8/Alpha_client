import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import fit from './assets/images/fit.jpg'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Image source={fit} style={styles.fit_image}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
