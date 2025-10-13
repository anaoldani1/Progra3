import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './src/screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Probando FlatLists</Text>
      <ProductsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontWeight: "bold",
    fontSize: "larger"
  }
});
